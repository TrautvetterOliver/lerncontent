import React from 'react'
import classes from './Header.module.css';
import Headerbild from './../assets/bilder/headerbild.jpg';
import headerMobilImg from './../assets/bilder/headerMobil.jpg';
const Header = (props) => {
    const { header } = props.data
    return (
        <header className={classes.tgHeader}>
            <h1>{header.h1}</h1>
            <img
                src={Headerbild}
                srcSet={headerMobilImg}
                sizes='(max-width: 768px) 100vw'
                alt={header.bild.alt}
                className={classes.headerImg} />
        </header>
    )
}

export default Header