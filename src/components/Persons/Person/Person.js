import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
//import "./Person.css"
//import styled from 'styled-components';
//import Radium from 'radium'
import classes from "./Person.module.css"

class Person extends Component {
    
    render(){
        return (
            <Auxiliary>
                <p onClick={this.props.click}>My name is  {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </Auxiliary>
        )
    }
}

export default Person;