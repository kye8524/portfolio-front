import styles from './header.module.css';
import React from "react";

function Header() {
    return (
        <div className={styles.headerBox}>
        <div className={styles.headerTitle}>
            <a href="#home"><div className={styles.headerDiv}>HOME</div></a>
            <a href="#about"><div className={styles.headerDiv}>ABOUT</div></a>
            <a href="#portfolio"><div className={styles.headerDiv}>PORTFOLIO</div></a>
            <a href="#blog"><div className={styles.headerDiv}>BLOG</div></a>
            <a href="#contact"><div className={styles.headerDiv}>CONTACT</div></a>
        </div></div>
    )
}

export default Header;