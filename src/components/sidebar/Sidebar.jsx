import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Sidebar({ setLogout, token }) {

    function handleLogout() {
        setLogout({}, 'logout')
    }
    return (
        <div className='sidebar'>
            <ul>
                <li key="users"><Link to={`dashboard`}>Users</Link></li>
            </ul>
            <div className='user-details-container'>
                <ul>
                    <li key="last_item" className='username'>{token.first_name} {token.last_name}</li>
                </ul>
                <Button
                    sx={{
                        display: 'flex',
                        margin: '0 auto'
                    }}
                    className='logout'
                    variant='contained'
                    onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </div>
    )
}