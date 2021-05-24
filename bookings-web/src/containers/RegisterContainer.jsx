import React, {useState} from 'react';
import Register from '../components/auth/Register';
import {registerUser} from '../services/authUtils';


const RegisterContainer = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = async ({target}) => {

        if(target.name === 'username') setUserName(target.value);
        if(target.name === 'password') setPassword(target.value);
        if(target.name === 'email') setEmail(target.value);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await registerUser(userName, password, email);

    }

    return (
        <>
           <Register username={userName} password={password} email={email} onChange={handleChange} onSubmit={handleSubmit}/> 
        </>
    )
}

export default RegisterContainer;
