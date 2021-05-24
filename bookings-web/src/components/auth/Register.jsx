import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';

function Register({onSubmit, onChange, username, password, email}) {
    return (
        <div className={styles.register}>
        <form onSubmit={onSubmit}>
            <label>Your username:
                <input htmlFor='username' name='username' type='text' value={username} onChange={onChange}></input>
            </label>
            
            <label>Your password:
                <input htmlFor='password' name='password' type='text' value={password} onChange={onChange}></input>
            </label>

            <label>Your email address:
                <input htmlFor='email' name='email' type='text' value={email} onChange={onChange}></input>
            </label>

            <button>Register</button>
        </form>
        </div>
    )
}

Register.propTypes = {
    
}

export default Register;

