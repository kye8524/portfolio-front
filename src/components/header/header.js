import styles from './header.module.css';
import React, {useState, useEffect} from "react";

const useScroll = () => {
    const [state, setState] = useState({
        x : 0,
        y : 0
    });
    const onScroll = () => {
        setState({x : window.scroll, y : window.scrollY});
    };
    useEffect(()=> {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
};

function Header() {
    const { y } = useScroll();
    return (
        <div className={styles.headerBox} style={
            {position : y > 770 ? "fixed" : "relative",
                opacity : y > 770 ? "77%" : "100%"}
        }>
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