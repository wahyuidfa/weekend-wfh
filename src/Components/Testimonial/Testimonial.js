import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Testimonial.module.css';
import ItemsCarousel from 'react-items-carousel';
import arrow from '../../Assets/arrow.svg'


function Testimonial() {
    let [list, setList] = useState([]);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;




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
                    leftChevron={<button>{'<'}</button>}
                    rightChevron={<button>{'>'}</button>}
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