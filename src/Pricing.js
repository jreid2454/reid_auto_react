import React from 'react';

export default class Pricing extends React.Component{
    constructor(){
        super();
        this.state = {
            current: []
        }
    }

    full_list = ['Cabin Filter - $45', 'Throttle Body Service with Air Filters - $54.95', 'Coolant Service - $39.95', 'State Inspection - $85', 'Oil Change 5 Qrts - $36.95', 'Synthetic Oil Change 5 Qrts - $70', 'Brakes and Rotors - $290 per Axle', 'Tire Rotation (Car) - $20', 'Tire Rotation (Truck) - $25', 'Balance Tires (2) - $29.99', 'Turn Signal Bulb - $16', 'Headlight Bulb - $48.50', 'Electrical Diagnosis - $85', 'A/C Charge - $90'];
    
    getList = () =>{
        let list = this.full_list.map((item)=>{
            return <li stye="font-size: 3.5vh; width: 100%; height: 20px">{item}</li>;
        })
        this.setState({current: list});
    }

    componentDidMount(){
        this.getList();
    }

    render(){

        return(
            <div style={styles.wrapper}>
                <ul style={styles.ul}>{this.state.current}</ul>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '100%', height: '400px', backgroundColor: '#121212d9', paddingTop: '20px'},
    ul: {listStyleType: 'none', width: '50%', height: '250px', overflow: 'scroll', margin: 'auto', color: 'white'},
    li: {fontSize: '2.5vh', width: '100%', height: '90px', color: 'white'}
}