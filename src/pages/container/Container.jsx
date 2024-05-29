import backgroundImage from '../../assets/a72dfda1183f5b8faed552858ea5623f.jpg'

function Container({children}) {
  return (
    <div className=" w-full h-screen bg-cover bg-no-repeat bg-center  "  style={{backgroundImage:`url(${backgroundImage})`,backgroundSize:'1700px 860px'}} >
        {children}
    </div>
  )
}

export default Container
