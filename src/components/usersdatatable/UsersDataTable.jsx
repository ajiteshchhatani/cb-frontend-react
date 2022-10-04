import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import wrapPromise from '../../apiFetch/wrapPromise';

let users;

function fetchUsersForSuspense(page) {
    users = wrapPromise(fetch(`http://localhost:8080/fakeApi/users?page=${page}`).then(res => res.json()).then(data => data))
}

fetchUsersForSuspense(0)

const columns = [
    {
        field: 'avatar',
        headerName: 'Avatar',
        renderCell: (params) => {
            return (
                <img src={params.row.avatar} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
            )
        },
        sortable: false,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'first_name',
        headerName: 'First Name',
        width: 100,
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'last_name',
        headerName: 'Last Name',
        headerAlign: 'center',
        align: 'center'
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 300,
        headerAlign: 'center',
        align: 'center'
    }
]

export default function UsersDataTable() {
    const usersList = users.read();
    const userRows = usersList.data;
    const [pageNumber, setPageNumber] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(5);

    function handlePageChange(newPageNumber) {
        fetchUsersForSuspense(newPageNumber)
        setPageNumber(newPageNumber)
    }

    return (
        <div className='users-table-container'>
            <div className='create-user-button'>
                <Button variant='contained'>Create User</Button>
            </div>
            <DataGrid
                columns={columns}
                rows={userRows}
                checkboxSelection={true}
                onSelectionModelChange={(newSelectionModel) => {
                    console.log(newSelectionModel)
                }}
                page={pageNumber}
                onPageChange={(newPageNumber) => handlePageChange(newPageNumber)}
                pageSize={pageSize}
                rowsPerPageOptions={[5, 10, 15]}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                disableColumnMenu={true}
                style={{margin: '0 16px'}}
            />
        </div>
    )
}