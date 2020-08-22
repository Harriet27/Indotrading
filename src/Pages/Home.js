import React from 'react';
import {
    SearchBar,
    Jumbotron,
    Carousel,
    Cart,
    Menu,
} from '../Components';

const Home = () => {
    return (
        <div style={{display:'flex'}}>
            <div>
                <div style={{display:'flex', marginTop:'20px'}}>
                    <div style={{fontSize:'25px', fontWeight:'600', margin:'20px', marginLeft:'70px'}}>
                        Chukwudi
                    </div>
                    <div style={styles.searchBar}>
                        <SearchBar />
                    </div>
                </div>
                <div style={styles.jumbotron}>
                    <Jumbotron />
                </div>
                <div style={styles.carousel}>
                    <Carousel />
                </div>
                <div style={styles.menu}>
                    <Menu />
                </div>
            </div>
            <Cart />
        </div>
    );
};

const styles = {
    searchBar: {
        margin: '20px',
        marginLeft: '150px',
    },
    jumbotron: {
        margin: '20px 50px',
        width: 'fit-content',
    },
    carousel: {
        margin: '20px',
        marginLeft: '80px',
        width: 'fit-content',
    },
    menu: {
        margin: '20px 85px',
        width: 'fit-content',
    },
    cart: {
        display: 'flex',
    },
};

export default Home;
