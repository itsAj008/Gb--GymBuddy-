import InputBox from "../../components/InputBox"
import ReactDOM from 'react-dom';
import { useRef, useEffect, useState } from "react";

import {useDispatch} from 'react-redux';
import {closeSignupPage,showLoginPage} from '../../features/gb/gbSlice'
import {setUser} from '../../features/gb/authSlice'
import { useNavigate } from "react-router-dom";

import {updateMemberList} from '../../features/gb/membersListSlice'

function Signup() {

  const dispatch = useDispatch()
  const modelRef = useRef()
  const inputFiledRef = useRef()
  const navigate = useNavigate()
  const [ confirmPassword, setConfirmPassword] = useState('')

  const [userData , setUserdata] = useState({
    firstname : '',
    lastname : '',
    email : '',
    phone : '',
    dob : '',
    plan : '',
    password: '',
    validTill : 0
  })

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if(modelRef.current && !modelRef.current.contains(e.target)){
        dispatch(closeSignupPage())
      }
    };
    document.addEventListener('mousedown' , handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

  },[])

  useEffect(() => {
    inputFiledRef.current.focus();
  },[])

  const handlesubmit = (e) => {
    e.preventDefault()
    if(userData.password !== confirmPassword){
       alert('Passwords did not match')
    }else{
      console.log(userData)
      localStorage.setItem('usercred',JSON.stringify(userData))
      if(userData.plan === "1 year"){
        userData.validTill = new Date().getFullYear() + 1
      }else if(userData.plan === "6 year"){
        userData.validTill = new Date().getMonth() + 6
      }
      
      localStorage.setItem('usercred',JSON.stringify(userData))
  
      dispatch(updateMemberList(userData))
      dispatch(setUser(userData.firstname))
      dispatch(closeSignupPage())
      navigate('/user')

    }
    
  }

  
  return ReactDOM.createPortal (
    <>
      <div className=' fixed top-0 left-0 right-0 bottom-0 bg-black opacity-95'>
        <div ref={modelRef} className="z-10 fixed min-w-96 bg-slate-200 rounded-lg top-36 left-1/3 px-8 pb-4 " style={{width:'30%'}}>
        <button className=" absolute right-2 top-2 text-sm px-1 font-semibold hover:scale-105" onClick={() => dispatch(closeSignupPage())}> close</button>
          
        <form className="flex flex-col gap-3" onSubmit={handlesubmit}>
          <h1 className=" text-center font-semibold text-xl  text-gray-800 mt-5">Sign up</h1>
          <h2 className="text-center font-serif my-1 text-md ">Welcome </h2>
                <div className="flex gap-2">
                    <InputBox 
                          type="text" 
                          placeholder="first name"
                          ref = {inputFiledRef}
                          value = {userData.firstname}
                          onChange = {(e)=> 
                            setUserdata(prev => ({
                             ...prev , firstname: e.target.value
                           }))
                          }
                          />
                    <InputBox 
                          type="text" 
                          placeholder="Last name" 
                          value = {userData.lastname}
                          onChange = {(e)=> 
                            setUserdata(prev => ({
                             ...prev , lastname: e.target.value
                             }))
                          }
                          
                    />
                </div>
            <InputBox 
                  type="email" 
                  placeholder="Email"
                  value = {userData.email}
                  onChange = {(e)=> 
                    setUserdata(prev => ({
                     ...prev , email: e.target.value
                     }))
                  }
             />
             <InputBox 
                   type="tel" 
                   id="phone" 
                   name="phone" 
                  //  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                   placeholder= "Phone number"
                   onChange = {(e)=> 
                    setUserdata(prev => ({
                     ...prev , phone: e.target.value
                     }))
                  }
             />


            <div className="flex gap-4 h-6 items-center mt-3 mb-5 ">
                <div className="flex flex-col items-center">
                    <label className=" text-sm font-semibold text-gray-900">DOB: </label>
                    <input type="date" 
                           className=" rounded-md py-1 px-2 w-32 text-sm  outline-none"
                           value = {userData.dob}
                           onChange = {(e)=> 
                            setUserdata(prev => ({
                             ...prev , dob: e.target.value
                             }))
                          }
                      />

                </div>
                
                <div className="flex flex-col items-center">
                    <label className=" text-sm font-semibold text-gray-900">Choose plan:</label>
                    <select 
                    name="plan"
                    className=" rounded-md p-1 ml-2 text-sm outline-none w-28"
                    value = {userData.plan}
                    onChange = {(e)=> 
                      setUserdata(prev => ({
                       ...prev , plan: e.target.value
                       }))
                    }
                    >
                        <option value="">plan</option>
                        <option value="1 month">1 month</option>
                        <option value="3 months">3 months</option>
                        <option value="6 months">6 months</option>
                        <option value="1 year">1 year</option>
                    </select>
                </div>
              
            </div>

      
            <InputBox 
                  type="password" 
                  placeholder="Password" 
                  value = {userData.password}
                  onChange = {(e)=> 
                                 setUserdata(prev => ({
                                  ...prev , password: e.target.value
                                }))
                             }
              />
            <InputBox 
                  type="password" 
                  placeholder="Confirm Password" 
                  value = {confirmPassword}
                  onChange = {(e)=> 
                    setConfirmPassword(e.target.value)
                }
              />


            <button type="submit" className=" cursor-pointer bg-blue-500 rounded-md py-1 text-white mt-2" >Sign up</button>
          
          <p >Already have an account? <span className=" text-blue-600  cursor-pointer"
           onClick={() => dispatch(showLoginPage())}>Log in</span></p>

          </form>


        </div>
      
      </div>
    </>,
    document.getElementById('login-portal')
   
  )
}

export default Signup
