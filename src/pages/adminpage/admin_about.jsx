
import { useState } from "react"


import { useDispatch,useSelector }  from "react-redux";
import { changeAboutUsData } from '../../features/gb/gbSlice'


function Admin_about() {

 const aboutUsData = useSelector(state => state.app.aboutUsData)
 const dispatch = useDispatch()

 const [aboutus,setAboutus] = useState(aboutUsData)
 const [isEditable,setIsEditable]= useState(false)

  return (
      <>
        <div className="w-4/6 bg-slate-200 min-h-64 rounded-lg py-10 px-10 relative mx-auto top-20 opacity-90">
            <textarea
                type="text"
                className={`border outline-none w-full max-w-full min-h-36 overflow-hidden bg-transparent rounded-lg  ${
                    isEditable ? "border-black/10 px-2 bg-white" : "border-transparent"
                } `}
                value={aboutus}
                onChange={(e)=> setAboutus(e.target.value)}
                
                readOnly={!isEditable}
            />
             <button 
                    className=" py-1 px-2 bg-slate-200 hover:bg-blue-300     absolute top-[-40px] right-1 rounded-md"
                    onClick={() =>{
                        if(isEditable){
                            console.log(aboutus)
                            dispatch(changeAboutUsData(aboutus))
                            
                        }
                        setIsEditable(prev => !prev)
                    }}
                    >
                   {isEditable ? "📁" : "✏️"}
           </button>
        </div>
           
    </>
  )

}

export default Admin_about
