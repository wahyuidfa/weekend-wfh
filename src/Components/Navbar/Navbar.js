import React from 'react';
import styles from './Navbar.module.css';
import bitmapNavbar from '../../Assets/BitmapNavbar.svg'

function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.leftbar}>
                <div className={styles.logo}>
                    <img src={bitmapNavbar} alt="logo" />
                </div>
                <div className={styles.textWrapp}>
                    <p className={styles.logoText}>Good Morning</p>
                    <p className={styles.nameText}><b>Fellas</b></p>
                </div>
            </div>
            <div className={styles.rightbar}></div>
        </div>
    );
}

export default Navbar;