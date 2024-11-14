import React from 'react'
import './signUp.css'
import { Input, Button, ButtonGroup } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import Email from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock'
import { useState } from 'react'

const SignUp = () => {

  const [isSingUp, setIsSignUp] = useState(true);

  return (
    <div id="signUpContainer">
      <div id="formDiv">
        <ButtonGroup id='buttonGroupSignUp' variant='contained'>
          <Button 
            variant={isSingUp ? 'contained' : 'text'}
            onClick={() => setIsSignUp(true)}
          >New here? SignUp</Button>
          <Button 
            variant={isSingUp ? 'text' : 'contained'}
            onClick={() => setIsSignUp(false)}
          >Already a user? Login</Button>
        </ButtonGroup>

        <h3 id="formHeader">{isSingUp ? "CREATE AN ACCOUNT" : "LOG IN HERE"}</h3>
        <form id="signUpForm" action="">
          {isSingUp && (
          <div className="formFields">
            <Input placeholder="Username"
             startAdornment={
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
             }
            />
          </div>
          )}

          <div className='formFields'>
            <Input placeholder="Email"
              startAdornment={
                <InputAdornment position='start'>
                  <Email />
                </InputAdornment>
              }
            />
          </div>

          <div className='formFields'>
            <Input type='password' placeholder="Password"
              startAdornment={
                <InputAdornment position='start'>
                  <Lock />
                </InputAdornment>
              }
              />
          </div>
        </form>
        <Button id="submitButton" type="submit" variant='contained'>{isSingUp ? "SIGN UP" : "LOG IN"}</Button>
      </div>

      <div id='coolBox'>
        <h1>ThIs Is The CoOl BoX</h1>
      </div>
    </div>
  )
}

export default SignUp
