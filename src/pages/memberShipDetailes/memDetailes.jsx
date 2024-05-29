
import { useSelector } from 'react-redux';

import Signup from '../signUpPage/signup';

function MemDetailes() {
 
  const singupPage = useSelector(state => state.app.signupPage)

  return (
    <>
       <div className=" w-4/6 mx-auto bg-white relative top-28 px-10 py-6 rounded-lg">
          member
       </div>
       
       <div>
          {singupPage && <Signup />}
       </div>
    </>
  )
}

export default MemDetailes
 