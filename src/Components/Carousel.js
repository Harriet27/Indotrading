import React, { Component } from 'react';
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

// const Carousel = () => {
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor1: "",
            bgColor2: "",
            bgColor3: "",
            bgColor4: "",
            bgColor5: "",
            bgColor6: "",
            bgColor7: "",
            bgColor8: "",
        };
    };

    boxEnter1 = (e) => {
        this.setState({
            bgColor1: "#FBD460",
        });
    };
    boxLeave1 = (e) => {
        this.setState({
            bgColor1: "white",
        });
    };

    boxEnter2 = (e) => {
        this.setState({
            bgColor2: "#FBD460",
        });
    };
    boxLeave2 = (e) => {
        this.setState({
            bgColor2: "white",
        });
    };

    boxEnter3 = (e) => {
        this.setState({
            bgColor3: "#FBD460",
        });
    };
    boxLeave3 = (e) => {
        this.setState({
            bgColor3: "white",
        });
    };

    boxEnter4 = (e) => {
        this.setState({
            bgColor4: "#FBD460",
        });
    };
    boxLeave4 = (e) => {
        this.setState({
            bgColor4: "white",
        });
    };

    boxEnter5 = (e) => {
        this.setState({
            bgColor5: "#FBD460",
        });
    };
    boxLeave5 = (e) => {
        this.setState({
            bgColor5: "white",
        });
    };

    boxEnter6 = (e) => {
        this.setState({
            bgColor6: "#FBD460",
        });
    };
    boxLeave6 = (e) => {
        this.setState({
            bgColor6: "white",
        });
    };

    boxEnter7 = (e) => {
        this.setState({
            bgColor7: "#FBD460",
        });
    };
    boxLeave7 = (e) => {
        this.setState({
            bgColor7: "white",
        });
    };

    boxEnter8 = (e) => {
        this.setState({
            bgColor8: "#FBD460",
        });
    };
    boxLeave8 = (e) => {
        this.setState({
            bgColor8: "white",
        });
    };

    render() {
        return (
            <div style={styles.wrap}>
                <div style={styles.title}>
                    Restaurants <img src={hamburger} alt='title emoji' height={22} />
                </div>
                <div style={styles.container}>
                    <div style={{
                        borderRadius: '50px',
                        margin: '15px',
                        padding: '5px',
                        width: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: this.state.bgColor1,
                    }} className='card' onMouseEnter={this.boxEnter1} onMouseLeave={this.boxLeave1}>
                        <div style={styles.item2}>
                            <img src={plate} alt='plate' height={27} />
                        </div>
                        <div style={styles.category}>
                            All
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50px',
                        margin: '15px',
                        padding: '5px',
                        width: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: this.state.bgColor2,
                    }} className='card' onMouseEnter={this.boxEnter2} onMouseLeave={this.boxLeave2}>
                        <div style={styles.item2}>
                            <img src={pizza} alt='plate' height={22} />
                        </div>
                        <div style={styles.category}>
                            Pizza
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50px',
                        margin: '15px',
                        padding: '5px',
                        width: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: this.state.bgColor3,
                    }} className='card' onMouseEnter={this.boxEnter3} onMouseLeave={this.boxLeave3}>
                        <div style={styles.item2}>
                            <img src={rice} alt='plate' height={22} />
                        </div>
                        <div style={styles.category}>
                            Asian
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50px',
                        margin: '15px',
                        padding: '5px',
                        width: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: this.state.bgColor4,
                    }} className='card' onMouseEnter={this.boxEnter4} onMouseLeave={this.boxLeave4}>
                        <div style={styles.item2}>
                            <img src={burger} alt='plate' height={22} />
                        </div>
                        <div style={styles.category}>
                            Burgers
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50px',
                        margin: '15px',
                        padding: '5px',
                        width: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: this.state.bgColor5,
                    }} className='card' onMouseEnter={this.boxEnter5} onMouseLeave={this.boxLeave5}>
                        <div style={styles.item2}>
                            <img src={meat} alt='plate' height={22} />
                        </div>
                        <div style={styles.category}>
                            Barbeque
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50px',
                        margin: '15px',
                        padding: '5px',
                        width: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: this.state.bgColor6,
                    }} className='card' onMouseEnter={this.boxEnter6} onMouseLeave={this.boxLeave6}>
                        <div style={styles.item2}>
                            <img src={dessert} alt='plate' height={22} />
                        </div>
                        <div style={styles.category}>
                            Dessert
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50px',
                        margin: '15px',
                        padding: '5px',
                        width: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: this.state.bgColor7,
                    }} className='card' onMouseEnter={this.boxEnter7} onMouseLeave={this.boxLeave7}>
                        <div style={styles.item2}>
                            <img src={pineapple} alt='plate' height={22} />
                        </div>
                        <div style={styles.category}>
                            Thai
                        </div>
                    </div>
                    <div style={{
                        borderRadius: '50px',
                        margin: '15px',
                        padding: '5px',
                        width: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: this.state.bgColor8,
                    }} className='card' onMouseEnter={this.boxEnter8} onMouseLeave={this.boxLeave8}>
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
        backgroundColor: 'white',
    },
    category: {
        margin: '10px',
        fontSize: '12px',
        color: 'dimgrey',
    },
    bg: {
        backgroundColor: 'white',
    },
};

export default Carousel;
