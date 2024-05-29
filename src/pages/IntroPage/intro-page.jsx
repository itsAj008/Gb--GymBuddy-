
import Container from '../container/Container';

import Signup from '../signUpPage/signup';
import { useSelector, useDispatch } from 'react-redux';
import {showSignupPage} from '../../features/gb/gbSlice'
import { useEffect } from 'react';

import {updateWholeList} from '../../features/gb/membersListSlice'

export default function Intro_page() {

  const dispatch = useDispatch()
  const singupPage = useSelector(state => state.app.signupPage)


  useEffect(() => {
    const d = localStorage.getItem('usercred')
    console.log(d)
    if(d) dispatch(updateWholeList(JSON.parse(d)))
    
  },[])


  return (
    <>
    <Container>
      <div 
          className=" h-screen ">
            {/* <Navbar /> */}
            <div className=" relative w-1/5  top-1/3 opacity-90" style={{left:'65%'}}>
                <p className=" text-lg text-white">SHAPE YOUR BODY</p>
                <br />
                <p className=" text-5xl text-white font-semibold">
                  BE <span className='text-gray-500'> STRONG</span>
                </p>
                <br />
                <p className=" text-white text-5xl font-semibold">TRAIN HARD</p>
                <br />
                <button className=" ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:scale-105" onClick={() => dispatch(showSignupPage())} >
                  Join us
                </button>
            </div>
            <div>
              {singupPage && <Signup />}
            </div>
          
         
      </div>
      </Container>
    </>
  );
}
