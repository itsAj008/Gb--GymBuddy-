import InputBox from "../../components/InputBox";
import ReactDOM from 'react-dom';
import { useRef, useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector }  from "react-redux";
import { showSignupPage, closeLoginPage } from '../../features/gb/gbSlice';
import {setAdminLoggedIn,setLoggedIn} from '../../features/gb/authSlice'



// const admin_cred = {
//   username : 'ajay_008',
//   password : "ajay008"
// }


function Login() {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const inputFieldRef = useRef();
  const navigate = useNavigate()
  const [loginAsAdmin , setLoginAsAdmin] = useState(false)
  const admin_cred = useSelector(state => state.member.admin_cred)
  const [userDetails,setUserDetails] = useState({
    username:'',
    password:''
  })
  const [userData , setUserData ] = useState([
    {
      username : 'naruto',
      password : "12345678"
    },
    {
      username : 'sasuke',
      password : "12345678"
    },
    {
      username : 'kira',
      password : "12345678"
    }
  ])

  // useSelector(state => state.auth.setLoggedIn)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        dispatch(closeLoginPage());
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dispatch]);


  useEffect(()=>{
     inputFieldRef.current.focus();

     let data = localStorage.getItem('usercred')
     console.log(data)
     if(!data) return
     data = JSON.parse(data)
     setUserData((prev) => ([...prev ,{ username:data.firstname , password:data.password}]))
     console.log(userData)

  },[])


  const checkUsercred = () => {
 
    return userData.some((data) => {

      if (userDetails.username === data.username && userDetails.password === data.password) {
        console.log('matched');
        return true;
      }
      return false;
    });
  }
  

  const handleSubmit = (e)=> {
      e.preventDefault() 

      if(loginAsAdmin && userDetails.username === admin_cred.username && 
           userDetails.password === admin_cred.password) {
              dispatch(setAdminLoggedIn())
              dispatch(closeLoginPage())
              navigate('/admin')
      }
      else if(checkUsercred()){
        if(loginAsAdmin){
            alert("you are not a admin")
        }
        else{
          dispatch(setLoggedIn())
          dispatch(closeLoginPage())
          navigate('/user')
        }
  
      }


   }

  return ReactDOM.createPortal(
    <>
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-black'>
        <div ref={modalRef} className="z-10 fixed min-w-96 bg-slate-200 rounded-lg top-36 left-10 md:left-1/3 px-8 pb-4 opacity-95" style={{ width: '30%' }}>
          <button className="absolute right-2 top-2 text-sm px-1 font-semibold hover:scale-105" onClick={() => dispatch(closeLoginPage())}>close</button>

          <form className="flex flex-col gap-3 mt-5" onSubmit={handleSubmit}>
              <h1 className="text-center text-gray-800 font-semibold pb-4 text-xl">Log in</h1>
              {/* <h2 className="">You are not a admin</h2> */}
              <InputBox
                  type="text" 
                  placeholder="Username" 
                  ref = {inputFieldRef}
                  className= " cursor-text"
                  value={userDetails.username}
                  onChange={(e) => setUserDetails(prev => ({...prev,username:e.target.value}))}
              />
              <InputBox 
                  type="password" 
                  placeholder="Password" 
                  value={userDetails.password}
                  onChange={(e) => setUserDetails(prev => ({...prev,password:e.target.value}))}
                  />

              <div className=" flex gap-2">
                  <input 
                      type="checkbox" 
                      checked={loginAsAdmin}
                      onChange={() => setLoginAsAdmin((prev) => !prev)} 
                      style={{ cursor: "pointer" }}
                      />
                      <p>Login as admin </p>
              </div>
              
              <button 
                 type="submit" 
                 className="cursor-pointer bg-blue-500 rounded-md py-1 text-white mt-1" 
                >
                Login
              </button>

              <p>Do not have an account? <span className="text-blue-600 cursor-pointer" onClick={() => dispatch(showSignupPage())}>Sign up</span></p>
          </form>
        </div>
      </div>
    </>,
    document.getElementById('login-portal')
  );
}

export default Login;
  