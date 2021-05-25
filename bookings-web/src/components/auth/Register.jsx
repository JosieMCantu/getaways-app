import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';

function Register({onSubmit, onChange, username, password, email}) {
    return (
        <div className={styles.register}>
            <div className={styles.rform}>
            <form onSubmit={onSubmit}>
                <label>Your username:</label>
                <input htmlFor='username' name='username' type='text' value={username} onChange={onChange} placeholder='Your username'></input><br />
            
                <label>Your password:</label>
                <input htmlFor='password' name='password' type='text' value={password} onChange={onChange} placeholder='Your password'></input><br />

                <label>Your email address:</label>
                <input htmlFor='email' name='email' type='text' value={email} onChange={onChange} placeholder='Your email address'></input>

                <button className={styles.rbutton}>Register</button>
            </form>
            </div>
        </div>
    )
}

Register.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default Register;

