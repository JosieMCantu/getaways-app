import React from 'react';
import PropTypes from 'prop-types';

function Login() {
    return (
        <div>
            <form>
                <label>Your username:</label>
                <input></input><br />

                <label>Your password:</label>
                <input></input><br />

                <label>Your email address:</label>
                <input></input><br />
                <buton>Login</buton>
            </form>
        </div>
    )
}

Login.propTypes = {

}

export default Login;
