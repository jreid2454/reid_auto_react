import React from 'react';
import Image from "./images/intro.jpg";

export default class Intro extends React.Component{

    render(){

        return(
            <div style={styles.wrapper}>
                <img src={Image}></img>
                <div style={styles.overlay}>
                 <p style={styles.title}>Reid's Auto Service</p>
                 <hr style={styles.hr}></hr>
                 <p style={styles.subTitle}>Keeping Philly on the Road Since 2009</p>
                 <a class='aTag' href='https://goo.gl/maps/NJGVVyGhAQNLM7Yk6'><button style={styles.visit}>Visit Us</button></a>
                 <p style={styles.or}>OR</p>
                 <div style={styles.options}>
                     <p><a class='aTag' href='tel:2154796715'><i class="fas fa-phone fa-2x"></i></a></p>
                     <p><a class='aTag' href='mailto:reidauto@gmail.com'><i class="fas fa-envelope fa-2x"></i></a></p>
                 </div>
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '100%', height: '600px', margin: "0 0 0 0", padding: 0, overflow: 'hidden', position: 'absolute', top: '0', zIndex: '1'},
    overlay: {width: "100%", height: '600px', backgroundColor: 'rgba(0,0,0,.5)', position: 'absolute', top: 0, zIndex: '5'},
    title: {marginTop: '200px', color: 'white', fontSize: '4vh', marginLeft: '-25vw', marginBottom: 0},
    subTitle: {color: 'white', marginTop: 0, marginRight: '-12vw', fontSize: '2.5vh'},
    hr: {color: 'white', width: '50%', marginTop: 0},
    visit: {border: '1px groove #3838ff', color: 'yellow', backgroundColor: 'rgba(0,0,0,0.5)', width: '200px', height: '75px', padding: '25px', fontSize: '3.5vh', fontFamily: 'sans-serif', marginTop: '50px', borderRadius: '50px'},
    or: {color: 'white', fontSize: '2vh'},
    options: {display: 'flex', color: 'yellow', fontSize: '3vh', width: '300px', margin: 'auto', justifyContent: 'space-evenly'}
}