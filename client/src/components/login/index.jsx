import React from 'react'
import { useState, useEffect } from 'react'
import { usePostLoginMutation, usePostSignUpMutation } from '@/state/api'

const Login = ({setUser, setSecret}) => {

    const [isRegister, setIsRegister] = useState(false)

    const [username, setUsername] = useState("")

    const [password, setPassword]  = useState("")

    const [triggerLogin, resultLogin] = usePostLoginMutation()

    const [triggerSignUp] = usePostSignUpMutation()

    const handleLogin =() => {

      triggerLogin({username, password})

    }

    const handleRegister = () => {

      triggerSignUp({username, password})

    }

    useEffect(() => {

        if(resultLogin.data?.response){

            setUser(username)
            setSecret(password)

        }

    }, [resultLogin.data])

  return (

    <div className='login-page'> 

       <div className='login-container'>

         <h2 className='title'>
             CHAT-GPT-APP by Tân
         </h2>

         <p className='register-change' onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? ("Đã có tài khoản ?") : ("Chưa có tài khoản ?")}
         </p>

         <div>

            <input 
               type="text" 
               className='login-input' 
               placeholder='Username' 
               value={username} 
               onChange={(e) => setUsername(e.target.value)}
            />

             <input 
               type="password" 
               className='login-input' 
               placeholder='Password' 
               value={password} 
               onChange={(e) => setPassword(e.target.value)}
            />

         </div>

         <div className='login-actions'>

            {isRegister ? 
            (<button type='button' onClick={handleRegister}>Đăng ký</button>) 
            :
            (<button type='button' onClick={handleLogin}>Đăng nhập</button>)
            }

         </div>

       </div>

    </div>
    
  )
}

export default Login