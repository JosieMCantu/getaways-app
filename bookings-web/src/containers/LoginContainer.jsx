import React, {useState} from 'react';
import Login from '../components/auth/Login';
import loginUser from '../services/authUtils';

const LoginContainer = () => {

    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onChange = async ({target}) => {
        if(target.name === 'name') setuserName(target.value);
        if(target.name === 'password') setPassword(target.value);
        if(target.name === 'email') setEmail(target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginUser(userName, password, email);
        window.location.href = '/';
    }

    return (
        <>
        <Login username={userName} password={password} email={email} onChange={onChange} onSubmit={handleSubmit} />
        </>
    )
}

export default LoginContainer;
