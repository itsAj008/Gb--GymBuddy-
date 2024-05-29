
import {NavLink, useNavigate} from 'react-router-dom'
import { CgGym } from "react-icons/cg";
import Login from '../pages/logIn/login';
import { useDispatch,useSelector } from "react-redux";
import {showLoginPage} from '../features/gb/gbSlice'
import {setLoggedOut ,setAdminLoggedOut} from  '../features/gb/authSlice'
import { useState } from 'react';



export default function Navbar() {
   const dispatch = useDispatch();
   const loginPage = useSelector(state => state.app.loginPage)
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
   const isAdminLoggedIn = useSelector(state => state.auth.isAdminLoggedIn)
   const [popup ,setPopup] = useState(false)
   const navigate = useNavigate()

   const navItems = [
    {
      name : "Home",
      slug : isAdminLoggedIn ? '/admin' : isLoggedIn ? '/user' : '/',
      Active : true,
      isAdminActive : isAdminLoggedIn
    },
    {
      name : "About us",
      slug : "/aboutUs",
      Active : true,
    },
    {
      name : "Membership details",
      slug : "/membership-details",
      Active : true,
    }
  ]

  const handleLoginorLogOut = () => {
      if(isLoggedIn || isAdminLoggedIn){
          if(isAdminLoggedIn) {
            setPopup(true);
            setTimeout(()=>{
              dispatch(setAdminLoggedOut())
              navigate('/')
              setPopup(false)
            },2000)
          }
          setPopup(true);
          setTimeout(()=>{
            dispatch(setLoggedOut())
            navigate('/')
            setPopup(false)
          },2000)
      } 
      else{
        dispatch(showLoginPage())
      } 
  }
 

  return (
    <div className=" w-full absolute ">
      <div className="flex items-center">
        <div className='text-white pl-5 pt-1'>
          <CgGym className="size-12" />
        </div>
        <ul className='flex gap-12 text-white ml-auto mr-20 text-md' >

           {navItems.map((navItem) => 
           navItem.Active ? (
            <li key={navItem.name}>
              <NavLink to={navItem.slug} className={({isActive})=> `${isActive ? " text-gray-500": "text-white" }`}>{navItem.name}</NavLink>
            </li>
           ): null
           )}
          
            {/*<li>
              <NavLink to='/' className={({isActive})=> `${isActive ? " text-gray-500": "text-white" }`}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/aboutUs'  className={({isActive})=> `${isActive ? " text-gray-500": "text-white" }`}>About us</NavLink>{" "}
            </li>
            <li>
              <NavLink to='/membership_details' className={({isActive})=> `${isActive ? " text-gray-500": "text-white" }`}>membership details</NavLink>{" "}
            </li> */}

            <li>
              <button 
                className=' bg-gray-400 px-3 py-1 rounded-md ml-10 md:ml-36 hover:scale-105'
                onClick={handleLoginorLogOut}
                >{isLoggedIn || isAdminLoggedIn ? "Log out" : " Log in"} 
              </button>
            </li>
  
        </ul>
      </div>
      <div>
        {loginPage && <Login />}
      </div>
      {popup && (
        <div className=" absolute top-28 left-[45%] bg-slate-600 text-white z-10 px-10 py-3 rounded-md">
          <div className="popup-content">
            <p>Logging out...</p>
          </div>
        </div>
      )}
    </div>
  );
}
