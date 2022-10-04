import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../../App.css';

async function loginUser(credentials) {
    const validatedToken = await fetch('http://localhost:8080/fakeApi/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    const response = await validatedToken.json();
    return response;
}

export default function Login({setToken}) {

    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

    //const userEmailRef = React.useRef('');

    function handleUserEmailChange(e) {
        setUserEmail(e.target.value);
    }

    function handleUserPasswordChange(e) {
        setUserPassword(e.target.value);
    }

    async function handleLogin() {
        const token = await loginUser({
            userEmail,
            userPassword
        });
        setToken(token?.data?.user)
    }

    return (
        <div className='login-container'>
            <TextField required type="email" label="Email" value={userEmail} onChange={handleUserEmailChange} />
            <TextField required type='password' label='Password' value={userPassword} onChange={handleUserPasswordChange} />

            <Button variant='contained' onClick={handleLogin}>Login</Button>
        </div>
    )
}