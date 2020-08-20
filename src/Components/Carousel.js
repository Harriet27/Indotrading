import React from 'react';
import {
    plate,
    pizza,
    rice,
    burger,
    meat,
    dessert,
    pineapple,
    sushi,
    hamburger,
} from '../Assets';
import './Carousel.css';

const Carousel = () => {
    return (
        <div style={styles.wrap}>
            <div style={styles.title}>
                Restaurants <img src={hamburger} alt='title emoji' height={22} />
            </div>
            <div style={styles.container}>
                <div style={styles.item1} className='card'>
                    <div style={styles.item2}>
                        <img src={plate} alt='plate' height={27} />
                    </div>
                    <div style={{margin:'10px', fontSize:'12px'}}>
                        All
                    </div>
                </div>
                <div style={styles.item1} className='card'>
                    <div style={styles.item2}>
                        <img src={pizza} alt='plate' height={22} />
                    </div>
                    <div style={{margin:'10px', fontSize:'12px'}}>
                        Pizza
                    </div>
                </div>
                <div style={styles.item1} className='card'>
                    <div style={styles.item2}>
                        <img src={rice} alt='plate' height={22} />
                    </div>
                    <div style={{margin:'10px', fontSize:'12px'}}>
                        Asian
                    </div>
                </div>
                <div style={styles.item1} className='card'>
                    <div style={styles.item2}>
                        <img src={burger} alt='plate' height={22} />
                    </div>
                    <div style={{margin:'10px', fontSize:'12px'}}>
                        Burgers
                    </div>
                </div>
                <div style={styles.item1} className='card'>
                    <div style={styles.item2}>
                        <img src={meat} alt='plate' height={22} />
                    </div>
                    <div style={styles.category}>
                        Barbeque
                    </div>
                </div>
                <div style={styles.item1} className='card'>
                    <div style={styles.item2}>
                        <img src={dessert} alt='plate' height={22} />
                    </div>
                    <div style={styles.category}>
                        Dessert
                    </div>
                </div>
                <div style={styles.item1} className='card'>
                    <div style={styles.item2}>
                        <img src={pineapple} alt='plate' height={22} />
                    </div>
                    <div style={styles.category}>
                        Thai
                    </div>
                </div>
                <div style={styles.item1} className='card'>
                    <div style={styles.item2}>
                        <img src={sushi} alt='plate' height={22} />
                    </div>
                    <div style={styles.category}>
                        Sushi
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    wrap: {
        marginBottom: '20px',
    },
    title: {
        marginTop: '10px',
        marginLeft: '20px',
        marginBottom: '15px',
        fontWeight: '600',
        fontSize: '20px',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item1: {
        borderRadius: '50px',
        margin: '15px',
        padding: '5px',
        width: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item2: {
        border: '0.5px solid gainsboro',
        borderRadius: '25px',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    category: {
        margin: '10px',
        fontSize: '12px',
    },
};

export default Carousel;
