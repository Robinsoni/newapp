import React from 'react'
import Classes from './cockpit.css'
const cockpit = (props) => {
    
    let btnClass = [Classes.Button];
    if(props.showContent){
        btnClass.push(Classes.Red)
    }
   // console.log(btnClass.)
    
   return(
    <div className = {Classes.Cockpit}>
        <h1>{props.title}</h1>
        <p>i'm react app and using the jsx</p>
        <button className={btnClass.join(' ')}  onClick = {props.toggleBtn}>switch button</button>
    </div>
   )
    
}
//
//

export default cockpit;