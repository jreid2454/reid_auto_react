import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{



    render(){

        return(
            <div style={styles.wrapper}>
                <p style={styles.title}>Reid's Auto Service</p>
                <p style={styles.option1}><a class='aTag' href='https://goo.gl/maps/NJGVVyGhAQNLM7Yk6' target="_blank"><i class="far fa-compass"></i></a></p>
                <p style={styles.option2}><a class='aTag' href='tel:2154796715'><i class="fas fa-phone"></i></a></p>
            </div>
        )
    }

}

const styles = {
    wrapper: {position: 'relative', zIndex: '5', height: "100px", margin: 0, padding: "0 100px 0 0", backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,.1))", borderBottom: '1px groove #3838ff' },
    title: {color: 'yellow', float: 'left', fontSize: " 4.5vh", margin: "10px 0 0 50px", fontFamily: 'Lobster'},
    option1: {float: 'right', fontSize: '5vh', margin: "50px 300px 20px 20px", color: 'yellow'},
    option2: {float: 'right', fontSize: '5vh', margin: "50px 50px 20px 20px", color: 'yellow'}
}