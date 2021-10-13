import React from 'react';

export default class About extends React.Component{


    render(){

        return(
            <div style={styles.wrapper}>
                <div>
                    <p style={styles.header}>About Us</p>
                </div>
                <div>
                    <p style={styles.p}>
                    Reid's Auto is run by owners Jim and Marie Reid, who both grew up in South Philly. Jim Reid worked
                    at the GM dealership for over 20 years, he continued to master his craft while maintaining an ASE 
                    certification. In 2009 we opened up Reid's Auto Service and have continued to bring quality service 
                    and products to our customers.
                    <br/><br/>
                    Us here at Reid's Auto are happy to be able to give back to South Philly by offering affordable 
                    car maintenance and repair that you can count on. Many of our customers come to us after going to the 
                    dealership 4-6 times with no success, while we are able to have them back on the road after the first 
                    vist! So skip the hassle and save your time and money, and visit Reid's Auto Service today!
                    </p>
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '100%', height: '400px', backgroundColor: '#121212d9', paddingTop: '10px', borderTop: '1px groove rgb(56, 56, 255)'},
    header: {fontSize: '4vh', color: 'yellow'},
    p: {fontSize: '3vh', color: 'white', padding: '10px 100px 0 100px'}
}