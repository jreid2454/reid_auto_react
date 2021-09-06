import React from 'react';

export default class About extends React.Component{


    render(){

        return(
            <div style={styles.wrapper}>
                <div>
                    <p style={styles.header}>About Us</p>
                </div>
                <div>
                    <p style={styles.p}>Family owned and operated since 2009, Reid’s Auto Service has continued to bring quality service and products to its customers. The shop is ran by owners Jim and Marie Reid, Jim has been in the industry for over 35 years, with over 20 years put in as a mechanic at the GM dealership. He is ASE certified, and is well known around the south philly area as a veteran mechanic.</p>
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '100%', height: '500px', backgroundColor: '#121212d9', paddingTop: '10px'},
    header: {fontSize: '3vh', color: 'yellow'},
    p: {fontSize: '2vh', color: 'white', padding: '10px 100px 0 100px'}
}