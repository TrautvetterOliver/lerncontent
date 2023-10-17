import React, { useState } from 'react'
import classes from './Submit.module.css';
import submitImage from './../assets/bilder/handAuto.jpg';
export const Submit = () => {
    const [bonusButton, setBonusbutton] = useState('Jetzt beantragen');
    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <img src={submitImage} alt="Jetzt eAuto Taschengeld beantragen" />
                <div className={classes.bonus}>
                    <p className={classes.bonusValueTop}>Bis zu</p>
                    <p className={classes.bonusValue}>380 €</p>
                    <p className={classes.bonusValueBottom}>THG-Prämie für Ihr Elektroauto</p>
                </div>
                
            </div>
            <button className={classes.bonusButton}>
                    Jetzt meine Prämie sichern!
                </button>
        </div>
    )
}
