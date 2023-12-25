import React, {useState} from 'react'
import {login as authLogin} from '../../store/authSlice'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import authService from '../../appwrite/auth'
import {Link,useNavigate} from 'react-router-dom'

import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

import './style.scss'
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()

  const [error, setError] = useState("");

  const login = async(data) => {
    setError("")
    try {
        const session = await authService.login(data);
        if (session){
            const userData = await authService.getCurrentUser()
            if(userData){
                dispatch(authLogin(userData));
                navigate("/")
            }
        }
    } catch (error) {
        setError(error.message)
    }
  }
  return (
    <div className='myContainer'>
      <div className='myCard shadow'>
        <h2>Log In</h2>
        
        <form onSubmit={handleSubmit(login)} >
            <div className='formContainer'>
                <Input 
                label="Email"
                placeholder="Enter your email"
                type="email"
                {...register("email",
                    {required:true,
                    validate:{
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }})
                }/>
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password",{
                    required:true,
                })}
                />
                {error && <p className='error'>{error}</p>}
                <Button type="submit" className='myBtn'>Log In</Button>

            </div>
        </form>
        <p className='toNav'>Don&apos;t have an account? <Link to="/signup" className='navBtn'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
