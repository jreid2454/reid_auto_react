import React from 'react';

export default class Pricing extends React.Component{
    constructor(){
        super();
        this.state = {
            current: []
        }
    }

    full_list = ['Cabin Filter - $45', 'Throttle Body Service with Air Filters - $54.95', 'Coolant Service - $39.95', 'State Inspection - $85', 'Oil Change 5 Qrts - $36.95', 'Synthetic Oil Change 5 Qrts - $70', 'Brakes and Rotors - $290 per Axle', 'Tire Rotation (Car) - $20', 'Tire Rotation (Truck) - $25', 'Balance Tires (2) - $29.99', 'Turn Signal Bulb - $16', 'Headlight Bulb - $48.50', 'Electrical Diagnosis - $85', 'A/C Charge - $90'];
    
    getList = (prices) =>{
        let list = prices.map((item)=>{
            return <li class="price_item" style={styles.li}><p style={styles.p}>{item}</p></li>;
        })
        this.setState({current: list});
    }

    search = (e) =>{
        let input = e.target.value;
        let result = this.full_list.filter((item) =>{
            let check = item.toUpperCase();
            if(check.includes(input.toUpperCase())){
                return item;
            }
        })
        this.getList(result);
    }

    componentDidMount(){
        this.getList(this.full_list);
    }

    render(){

        return(
            <div style={styles.wrapper}>
                <input style={styles.input} onChange={this.search.bind(this)} placeholder="Search.." />
                <ul style={styles.ul}>{this.state.current}</ul>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '100%', height: '400px', backgroundColor: '#121212d9', paddingTop: '40px'},
    input: {left: 100, position: 'absolute', fontSize: '2vh', width: '250px', height: '30px', borderRadius: "25px", paddingLeft: '20px', outline: 'none'},
    ul: {listStyleType: 'none', width: '70%', height: '350px', overflow: 'auto', margin: 'auto', color: 'white'},
    li: {fontSize: '3vh', width: '100%', height: '90px', borderBottom: '1px groove black'},
    p: {marginTop: '50px'}
}

// the blue color: '#3838ff'