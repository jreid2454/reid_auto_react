import React from 'react';

export default class Header extends React.Component{



    render(){

        return(
            <div style={styles.wrapper}>
                <p id='title' style={styles.title}>Reid's Auto Service</p>
                <div style={styles.wrapper1}>
                    <p style={styles.option1}><a class='aTag' href='https://goo.gl/maps/NJGVVyGhAQNLM7Yk6' target="_blank"><i class="far fa-compass"></i></a></p>
                    <p style={styles.option2}><a class='aTag' href='tel:2154796715'><i class="fas fa-phone"></i></a></p>
                </div>
            </div>
        )
    }

}

const styles = {
    wrapper: {position: 'relative', zIndex: '5', height: "15vh", margin: 0, padding: "0 10vw 0 10vw", backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,.1))", borderBottom: '1px groove #3838ff', display: 'flex', justifyContent: 'space-between'},
    wrapper1: {display: 'flex', justifyContent: 'space-between', width: '20vw'},
    title: {color: 'yellow', fontSize: " 4.5vh", fontFamily: 'Lobster'},
    option1: {fontSize: '5vh', color: 'yellow', justifySelf: 'flex-end'},
    option2: {fontSize: '5vh', color: 'yellow'}
}