import React, { useEffect,useRef } from 'react'
import Classes from './cockpit.css'
const cockpit = (props) => {
    const toggleBtnRef = useRef();
    useEffect(() =>{
        console.log('[Cockpit.js] useEffect'); // this will run for every render cycle and even if 
        // the cockpit component is not being updated, so that needs to be optimized 
        //Now what if we were to send an HTTP request here but we only want to do that when the component is rendered
//for the first time and not for every re-render cycle,
        toggleBtnRef.current.click()
// if we do not pass the array dependency in as the second argument then it combines componentDidMount
// and compnonentDidUpdate
    const timer = setTimeout(() => {
        alert('Saved data to cloud! ')
    },1000)
    // so the same way we have function  componentWillUnmount in  class based we can use here 
    //an anonymous function which will be returned and run after every render cycle so basically
    // it runs before the main useEffect function runs, but after the first render cycle

    return () => {
        //clearTimeout(timer); // this is the cleanup work
        console.log('[cockpit.js] .. cleanup work in useEffect')
    }
    }, []) // this is an imporvement and it will only update when the perons changes
    // if you want the useEffect to be executed only when it runs for the 1 time and you use [] array
    // instead of [props.persons]

    useEffect(() =>{
        console.log('[Cockpit] .. 2nd useEffect')
        return () =>{
            console.log('[cockpit.js ].. second clean up in useEffect')
        }
    })
    let btnClass = [Classes.Button];
    if(props.showContent){
        btnClass.push(Classes.Red)
    }
   // console.log(btnClass.)
    
   return(
    <div className = {Classes.Cockpit}>
        <h1>{props.title}</h1>
        <p>i'm react app and using the jsx</p>
        <button ref={toggleBtnRef} className={btnClass.join(' ')}  onClick = {props.toggleBtn}>switch button</button>
        <button onClick={props.login}>Login</button>
    </div>
   )
    
}
//
//
// Now to use similar functionality to that of shouldComponentUpdate in class based component
// for function compnent we use react memoization so basically store
// so basically if there is no change with this component then react will give back this stored
// component
export default React.memo(cockpit);