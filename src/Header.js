import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{



    render(){

        return(
            <div style={styles.wrapper}>
                <p style={styles.title}>Reids Auto Service</p>
                <p style={styles.option1}>Visit</p>
                <p style={styles.option2}>Call</p>
            </div>
        )
    }

}

const styles = {
    wrapper: {height: "100px", margin: 0, padding: "0 100px 0 0", backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,.1))", borderBottom: '1px groove #3838ff' },
    title: {color: 'yellow', float: 'left', fontSize: " 3vh", margin: "10px 0 0 50px"},
    option1: {float: 'right', fontSize: '5vh', margin: "50px 300px 20px 20px", color: 'yellow'},
    option2: {float: 'right', fontSize: '5vh', margin: "50px 50px 20px 20px", color: 'yellow'}
}