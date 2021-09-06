import React from 'react';
import ReactDOM from 'react-dom';
import Feature from './components/Feature.js';

export default class Featured extends React.Component{


    render(){

        return(
            <div style={styles.wrapper}>
                <p style={styles.header}>Get the Best Quality for the Best Price</p>
                <div style={styles.features}>
                <Feature type={'brakes'}></Feature>
                <Feature type={'tires'}></Feature>
                <Feature type={'oil'}></Feature>
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {marginTop: '495px', width: '100%', height: '400px', backgroundColor: '#121212d9', paddingTop: '20px'},
    header: {color: 'white', fontSize: '4vh'},
    features: {display: 'flex'}
}