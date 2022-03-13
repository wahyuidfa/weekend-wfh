import React, {useState, useEffect} from 'react';
import styles from './HelpsnTips.module.css';
import axios from 'axios';
import arrow from '../../Assets/arrow.svg'


function HelpsnTips() {
    let [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
        .then((response) => {
            setList(response.data);
            console.log(list, "testing");
        })
    }, []);

    return (
        <div className={styles.helpsnTipsContainer}>
        {list.map((listed) => (

            <div key={listed.id} className={styles.helpsnTipsBox}>
                <img src={listed.image} className={styles.imgHelp} alt=""/>
                <div className={styles.descContainer} key={listed.id} >
                    <p>{listed.title}</p>
                    <button className={styles.button}><img src={arrow} alt='arrow'/></button>
                </div>
            </div>
         ) )}
        </div>
    );
}

export default HelpsnTips;