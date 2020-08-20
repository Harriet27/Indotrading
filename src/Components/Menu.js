import React from 'react';
import {
    pizzajpg,
    friesjpg,
    cheesejpg,
    crepe,
    bagel,
    baguette,
    steak,
    ricebowl,
    burgerpic,
    ramen,
    breakfast,
    dimsum,
} from '../Assets';

const Menu = () => {
    return (
        <div className='d-flex' style={{flexDirection:'column'}}>

            <div style={{display:'flex', flexDirection:'row'}}>
                {/* item 1 */}
                <div>
                    <div style={styles.pic}>
                        <img src={pizzajpg} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Pizza Hut
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.7
                        </div>
                        <div style={styles.desc2}>
                            Restaurant
                        </div>
                    </div>
                </div>

                {/* item 2 */}
                <div>
                    <div style={styles.pic}>
                        <img src={friesjpg} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Mc Donald
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.8
                        </div>
                        <div style={styles.desc2}>
                            Fast Food
                        </div>
                    </div>
                </div>

                {/* item 3 */}
                <div>
                    <div style={styles.pic}>
                        <img src={cheesejpg} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Subway
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.6
                        </div>
                        <div style={styles.desc2}>
                            Deli
                        </div>
                    </div>
                </div>

                {/* item 4 */}
                <div>
                    <div style={styles.pic}>
                        <img src={crepe} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            The Estaminet
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.5
                        </div>
                        <div style={styles.desc2}>
                            Cafe
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display:'flex', flexDirection:'row'}}>
                {/* item 5 */}
                <div>
                    <div style={styles.pic}>
                        <img src={bagel} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Bagel Story
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.6
                        </div>
                        <div style={styles.desc2}>
                            Deli
                        </div>
                    </div>
                </div>

                {/* item 6 */}
                <div>
                    <div style={styles.pic}>
                        <img src={baguette} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Le Paris Dakar
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.5
                        </div>
                        <div style={styles.desc2}>
                            Parisserie
                        </div>
                    </div>
                </div>

                {/* item 7 */}
                <div>
                    <div style={styles.pic}>
                        <img src={steak} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Outback Steakhouse
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.7
                        </div>
                        <div style={styles.desc2}>
                            Fine Dining
                        </div>
                    </div>
                </div>

                {/* item 8 */}
                <div>
                    <div style={styles.pic}>
                        <img src={ricebowl} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Ootoya
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.8
                        </div>
                        <div style={styles.desc2}>
                            Restaurant
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display:'flex', flexDirection:'row'}}>
                {/* item 9 */}
                <div>
                    <div style={styles.pic}>
                        <img src={burgerpic} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Three Buns
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.8
                        </div>
                        <div style={styles.desc2}>
                            Restaurant
                        </div>
                    </div>
                </div>

                {/* item 10 */}
                <div>
                    <div style={styles.pic}>
                        <img src={ramen} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Ippudo
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.8
                        </div>
                        <div style={styles.desc2}>
                            Restaurant
                        </div>
                    </div>
                </div>

                {/* item 11 */}
                <div>
                    <div style={styles.pic}>
                        <img src={breakfast} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            Social House
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.9
                        </div>
                        <div style={styles.desc2}>
                            Fine Dining
                        </div>
                    </div>
                </div>

                {/* item 12 */}
                <div>
                    <div style={styles.pic}>
                        <img src={dimsum} alt='pizza' height={80} width={135} />
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={styles.name}>
                            One Dim Sum
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={styles.desc1}>
                            &#9734; 4.6
                        </div>
                        <div style={styles.desc2}>
                            Restaurant
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const styles = {
    pic: {
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        margin: '20px 20px 0px 20px',
    },
    name: {
        margin: '0px 0px 0px 20px',
        fontSize: '15px',
        fontWeight: '500',
    },
    desc1: {
        color: 'gray',
        fontSize: '13px',
        marginLeft: '20px',
    },
    desc2: {
        color: 'gray',
        fontSize: '13px',
        marginLeft: '45px',
    },
};

export default Menu;
