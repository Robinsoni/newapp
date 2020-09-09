import React from 'react';
//import "./Person.css"
//import styled from 'styled-components';
//import Radium from 'radium'
import classes from "./Person.module.css"
/*const StyledDiv = styled.div`
        width:60%;
        margin:16px auto;
        box-shadow: 0 2px 3px #d9d9dd;
        padding: 16px;
        text-align: center;
        @media (min-width: 500px){
            width: 450px;
        }
`;*/
const person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };
    const rnd = Math.random();
    if (rnd > 0.7){
        throw new Error('Something went wrong')
    }

return (
    
    <div className ={classes.Person}>
        <p onClick={props.click}>My name is  {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name} />
    </div>
)
    
}

export default person;