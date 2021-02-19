import styles from './index.module.css';
import React from "react";
import Header from "../header/header";
import Paper from "../paper/paper";

function Index() {
    return (
        <div className={styles.indexBox} id='home'>
            <div className={styles.indexBack}>
            <div className={styles.notebook}>
                <Header/>
                <div className={styles.inBox}>

                </div>
            </div>
            <Paper/>
        </div></div>
    )
}

export default Index;