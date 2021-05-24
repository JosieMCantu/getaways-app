import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../app/App.css';

function Header() {
    return(
        <>
        <div className={styles.header}>
        <NavLink className='active' to={'/home'}>HOME</NavLink>
        <NavLink className='active' to={'/'}>GETAWAYS</NavLink>
        <NavLink className='active' to={'/'}>LOGIN</NavLink>
        <NavLink className='active' to={'/'}>LOGOUT</NavLink>
        </div>
        </>
    )
}

export default Header;