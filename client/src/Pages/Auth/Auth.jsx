import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/logo.svg'
import AboutAuth from './AboutAuth'
import { signup,login } from '../../actions/auth'
const Auth = () => {
    const [isSignup, setIsSignup]=useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    


    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSwitch=()=>{
        setIsSignup(!isSignup)
    }

// let data = JSON.stringify({
//     username: this.state.username,
//     password: password
//   });
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!email && !password)
        {
            alert("Enter email and password")
        }
        if(isSignup)
        {
            if(!name)
            {
                alert("Enter a name to continue")
            }
            let data=JSON.stringify({
                name:name,
                email:email,
                password:password
            });
            dispatch(signup(data,navigate))
        }
        else{
            let data=JSON.stringify({
                
                email:email,
                password:password
            });
            dispatch(login(data,navigate))
        }
        console.log({name,email,password})
    }
  return (
    <section className='auth-section'>
        {isSignup && <AboutAuth/>}
        <div className='auth-container'>
            {!isSignup && <img src={icon} alt='stack overflow' className='login-logo'/>}
            <div className='auth-container-2'>
            <form onSubmit={handleSubmit}>
                {
                    isSignup && (
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}}/>
                        </label>
                    )
                }

                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>
                <label htmlFor='password'>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h4>password</h4>
                    {!isSignup && <h4 style={{color:"#007ac6", fontSize:'13px'}}>forgot password?</h4>}
                    </div>
                    <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    {isSignup && <p>Passwords must contain atleast eight characters, including atleast 1 letter and 1 number</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor='check'>
                            <input type="checkbox" name="check" id="check" />
                            <p style={{ fontsize:"13px"}}>Opt-in to receive notifications</p>

                        </label>
                    )
                }

            <button type='submit' className='auth-btn'>{isSignup ? 'Sign up':'Log In'}</button>    
            {
                isSignup && 
                <p style={{color:"#666767" , fontsize:"13px"}}>
                    By clicking on sign up, you agree to our 
                    <span style={{color:"#007ac6"}}>terms of<br/> service</span>,
                    <span style={{color:"#007ac6"}}>privacy policy</span>, and 
                    <span style={{color:"#007ac6"}}>cookie policy</span>
                    </p>
            }
            </form>
            <p>
                {isSignup ? 'Already have an account?':'Dont have an account?'}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? 'Log in' : 'Sign Up'}</button>
            </p>
            </div>
        </div>
    </section>
  )
}

export default Auth