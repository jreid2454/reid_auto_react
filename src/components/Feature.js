import React from 'react';
import ReactDOM from 'react-dom';
// import Oil_change from './images/oil_change.jpg';
// import Tire_rotation from './images/tire_rotation.jpg';
// import Brakes from './images/brakes.jpg';

export default class Feature extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            type: '',
            price: ''
        }
    }

    id = '';
    conditon = this.props.type;
    check(){
        switch(this.props.type){
            case 'brakes':
                this.setState({id: 'brakes', type: 'Brakes and Rotors', price: '$290 per axle'});
                break;
            case 'tires':
                this.setState({id: 'tires', type: 'Tire Rotation', price: '$20'});
                break;
            case 'oil':
                this.setState({id: 'oil', type: 'Oil Change', price: '$36.95 (Synthetic $70)'});
                break;
        }
    }
    
    componentDidMount(){
        this.check();
    }

    render(){

        return(
            <div class='feature' id={this.state.id} style={styles.wrapper}>
                <div class='featureShade' style={styles.shade}>
                    <p class='featureInfo'>{this.state.type}</p>
                    <p class='featureInfo'>{this.state.price}</p>
                </div>
            </div>
        )
    }
}

const styles = {
    wrapper: {width: '33.3%', height: '300px', border: '1px solid #3838ff', color: 'white', margin: '0', padding: '0'},
    img: {width: '33.3%', heighta: '300px', position: 'absolute', margin: '0'},
    shade: {backgroundColor: 'rgba(56, 56, 255,0)',width: "100%", height: '100%', margin: '0', padding: '0'}
}