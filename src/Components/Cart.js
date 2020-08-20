import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import {
    user,
    clock,
    cool,
    pizzajpg,
    friesjpg,
    cheesejpg,
} from '../Assets';

const Cart = () => {
    return (
        <div style={styles.container}>

            <div style={{display:'flex', alignItems:'center'}}>
                <div style={styles.icon}>
                    <a href='/'><img src={user} alt='user' height={25}/></a>
                </div>
                <div style={styles.number}>
                    3
                </div>
            </div>

            <div style={{display:'flex'}}>
                <div style={{marginTop:'45px', marginLeft:'70px', fontSize:'25px', fontWeight:'500'}}>
                    My Order
                </div>
                <div style={{marginTop:'50px', marginLeft:'10px'}}>
                    <img src={cool} alt='cool' height={30}/>
                </div>
            </div>

            <div style={styles.detail}>
                <div style={{display:'flex'}}>
                    <div style={{fontSize:'13px'}}>
                        625 St Marie Ave
                    </div>
                    <div style={{fontSize:'13px', marginLeft:'75px', color:'gold'}}>
                        Edit
                    </div>
                </div>
                <div style={{display:'flex', marginTop:'15px'}}>
                    <div style={{marginTop:'15px', padding:'1px 5px 5px 5px', backgroundColor:'rgba(255,255,255,0.3)', borderRadius:'10px'}}>
                        <img src={clock} alt='clock' height={20}/>
                    </div>
                    <div style={{marginTop:'18px', marginLeft:'10px', fontSize:'13px', color:'gainsboro'}}>
                        35 min
                    </div>
                    <div style={{marginTop:'18px', color:'gold', fontSize:'13px', marginLeft:'40px'}}>
                        Choose Time
                    </div>
                </div>
            </div>

            <div style={{display:'flex', flexDirection:'column'}}>
                {/* item 1 start */}
                <div style={{display:'flex', margin:'30px 30px 15px 45px'}}>
                    <div style={styles.picture}>
                        <img src={pizzajpg} alt='pizza' height={45} width={75} />
                    </div>
                    <div style={{margin:'15px', fontWeight:'700'}}>
                        1x
                    </div>
                    <div style={{margin:'15px 0px', fontWeight:'700'}}>
                        Neopolitan
                    </div>
                    <div style={{margin:'15px 0px 15px 40px', fontWeight:'500', color:'gray'}}>
                        $ 14.99
                    </div>
                </div>
                {/* item 1 end */}
                {/* item 2 start */}
                <div style={{display:'flex', margin:'0px 30px 15px 45px'}}>
                    <div style={styles.picture}>
                        <img src={friesjpg} alt='pizza' height={45} width={75} />
                    </div>
                    <div style={{margin:'15px', fontWeight:'700'}}>
                        1x
                    </div>
                    <div style={{margin:'15px 0px', fontWeight:'700'}}>
                        French Fries
                    </div>
                    <div style={{margin:'15px 0px 15px 40px', fontWeight:'500', color:'gray'}}>
                        $ 9.99
                    </div>
                </div>
                {/* item 2 end */}
                {/* item 3 start */}
                <div style={{display:'flex', margin:'0px 30px 15px 45px'}}>
                    <div style={styles.picture}>
                        <img src={cheesejpg} alt='pizza' height={45} width={75} />
                    </div>
                    <div style={{margin:'15px', fontWeight:'700'}}>
                        1x
                    </div>
                    <div style={{margin:'15px 0px', fontWeight:'700'}}>
                        Cheese Sauce
                    </div>
                    <div style={{margin:'15px 0px 15px 30px', fontWeight:'500', color:'gray'}}>
                        $ 0.99
                    </div>
                </div>
                {/* item 3 end */}
            </div>

            <div style={{display:'flex'}}>
                <div style={{margin:'30px 0px 0px 70px', fontSize:'22px', fontWeight:'600'}}>
                    Total:
                </div>
                <div style={{margin:'30px 0px 0px 150px', fontSize:'22px', fontWeight:'600'}}>
                    $ 25.97
                </div>
            </div>

            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{margin:'30px 0px 0px 70px', fontSize:'22px', fontWeight:'600'}}>
                    Persons :
                    <ButtonGroup variant="contained" style={{marginLeft:'70px'}}>
                        <Button>-</Button>
                        <Button>0</Button>
                        <Button>+</Button>
                    </ButtonGroup>
                </div>
                <div style={{margin:'30px 20px 20px 140px'}}>
                    <input type='button' value='Check Out' style={styles.button} />
                </div>
            </div>

        </div>
    );
};

const styles = {
    container: {
        backgroundColor: 'ghostwhite',
        height: '140vh',
        width: '100vw',
        marginBottom: '0px',
    },
    icon: {
        marginTop: '6.5vh',
        marginLeft: '18vw',
    },
    number: {
        marginTop: '6.5vh',
        marginLeft: '3vw',
        fontSize: '20px',
        fontWeight: '250',
        borderRadius: '10px',
        backgroundColor: 'gold',
        padding: '0px 10px',
    },
    detail: {
        color: 'white',
        marginTop: '40px',
        marginLeft: '70px',
        marginRight: '70px',
        borderRadius: '20px',
        backgroundColor: 'indigo',
        padding: '30px 25px',
    },
    button: {
        border: 'none',
        backgroundColor: 'gold',
        padding: '20px 30px',
        borderRadius: '25px',
        color: 'white',
        fontSize: '14px',
        fontWeight: '700',
    },
    picture: {
        borderRadius: '10px',
        overflow: 'hidden',
        height: '100%',
    },
};

export default Cart;
