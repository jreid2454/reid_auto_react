import React from 'react';
import ReactDOM from 'react-dom';

export default class Feature extends React.Component{

    render(){

        return(
            <div style={styles.wrapper}>
                <p>Tire Rotation</p>
                <p>$80.00</p>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '33.3%', height: '300px', border: '1px solid #3838ff', color: 'white'}
}