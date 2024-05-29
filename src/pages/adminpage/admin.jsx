
import Container from "../container/Container"
import { NavLink, redirect } from "react-router-dom"
import { CgGym } from "react-icons/cg";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import {setAdminLoggedOut} from '../../features/gb/authSlice'
import Navbar from "../../components/navbar";


function Admin() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAdminLoggedIn = useSelector(state => state.auth.isAdminLoggedIn)


    // if(isAdminLoggedIn) {
    //     return (
    //         <Container >
    //               <Outlet />
    //         </Container>
    //     )
    // }
    // else{
    //    redirect('/')
    // }

  return (
    <Container>
        {/* <div className="flex items-center">
            <div className='text-white pl-5 pt-1'>
            <CgGym className="size-12" />
            </div>
            <ul className='flex gap-12 text-white ml-auto mr-20 text-md'>
                <li>
                    <NavLink to='/admin' className={({isActive}) => `${isActive ? " text-gray-500":" text-white"}`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/admin/about' className={({isActive}) => `${isActive ? " text-gray-500":" text-white"}`}> About us</NavLink>
                </li>
                <li>
                    <NavLink to='/admin/membership_details' className={({isActive}) => `${isActive ? " text-gray-500":" text-white"}`} >membership details</NavLink>
                </li>
                <li>
                    <button 
                         className=' bg-gray-400 px-3 py-1 rounded-md ml-10 md:ml-36 hover:scale-105'
                         onClick={() =>{
                            dispatch(setAdminLoggedOut())
                            navigate('/')
                         }
                        }>
                            Log out
                    </button>
                </li>
            </ul>
        </div> */}
        <Navbar />
        <Outlet />


     {/* {isAdminLoggedIn ? <Outlet /> : redirect('/')} */}
     
        
         
     </Container>
  )

}

export default Admin
