import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Testimonial.module.css';
import ItemsCarousel from 'react-items-carousel';
import arrow from '../../Assets/arrow.svg'
import leftArrow from '../../Assets/leftArrow.svg';


function Testimonial() {
    let [list, setList] = useState([]);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;


    const buttonRight = () => {
        return (
            <button className={styles.button} style={{cursor:'pointer', borderRadius:'40px', alignItems:"center", display:'flex', border:'none'}}><img src={arrow} alt='arrow'/></button>
        )
    }

    const buttonLeft = () => {
        return (
            <button className={styles.button} style={{cursor:'pointer', borderRadius:'40px', alignItems:"center", display:'flex', border:'none'}}><img src={leftArrow} alt='arrow'/></button>
        )
    }

    useEffect(() => {
        axios.get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
            .then((response) => {
                setList(response.data);
                console.log(list, "test");
            })

    }, []);
    return (

        <div className={styles.testiContainer}>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={20}
                    leftChevron={buttonLeft()}
                    rightChevron={buttonRight()}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {list.map((item) => (
                        <div className={styles.listTesti} key={item.id} >
                            <h2>{item.by}</h2>
                            <p>{item.testimony}</p>
                        </div>

                    ))}


                </ItemsCarousel>
            </div>

        </div>
    );
}



export default Testimonial;