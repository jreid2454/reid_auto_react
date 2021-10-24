import React from 'react';

export default class Footer extends React.Component{


    render(){

        return(
            <div id='footer' style={styles.wrapper}>
                <div style={styles.left}>
                    <p style={styles.p}>Reid's Auto Service</p>
                    <p style={styles.p}>Phone: <a style={styles.a} href='tel:2154796715'>(215) 479-6715</a></p>
                    <p style={styles.p}>Email: <a style={styles.a} href='mailto:reidauto@gmail.com'>reidauto@gmail.com</a></p>
                    <p style={styles.p}>1320 S 3rd St, Philladelphia, PA 19147</p>
                </div>
                <div id="footerR" style={styles.right}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.4558913163783!2d-75.15223478512146!3d39.93119109295008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c8a6bfb74995%3A0x612cf593d53f0172!2s1320%20S%203rd%20St%2C%20Philadelphia%2C%20PA%2019147!5e0!3m2!1sen!2sus!4v1634121476320!5m2!1sen!2sus" style={styles.map} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {display: 'flex',justifyContent: 'space-between',paddingBottom: '50px',width: '100%', height: '200px', backgroundColor: '#121212e6', paddingTop: '10px', borderTop: '1px groove rgb(56, 56, 255)'},
    left: {color: 'white', margin: '0 0 0 5vw', display: 'flex', flexDirection: 'column'},
    right: {color: 'white', margin: '30px 200px 0 0', display: 'flex', justifyContent: 'center'},
    p: {alignSelf: 'flex-start'},
    map: {width: "400",height: "300", border:"0", margin: "0"},
    a: {color: 'yellow'}
}