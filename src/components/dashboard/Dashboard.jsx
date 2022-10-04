import React, { Suspense } from 'react';
import UsersDataTable from '../usersdatatable/UsersDataTable';

export default function Dashboard() {
    return (
        <Suspense fallback={<h1>Loading......</h1>}>
            <UsersDataTable />
        </Suspense>
    )
}