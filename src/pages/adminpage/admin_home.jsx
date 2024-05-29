import { useSelector } from "react-redux"

// const membersList = [
//     {
//         id:'1',
//         name : "AJay",
//         email : "ajay@gmail.com",
//         phone : "123456890",
//         mem_duration : "6 months"
//     },
//     {
//         id:'2',
//         name : "igris",
//         email : 'igris@gmail.com',
//         phone : "123456890",
//         mem_duration : "6 months"
//     },
//     {
//         id:'3',
//         name : "naruto",
//         email : "naruto@gmail.com",
//         phone : "123456890",
//         mem_duration : "6 months"
//     },
//     {
//         id:'4',
//         name : "sasuke",
//         email : "sasuke@gmail.com",
//         phone : "123456890",
//         mem_duration : "6 months"
//     }
// ]



function Admin_home() {
  
  const membersList = useSelector(state => state.member.membersList)

  console.log(membersList)

  return (
    <div className="overflow-x-auto  w-[65%] relative top-28 left-[20%] bg-white p-5 rounded-md">
    <table className="min-w-full bg-white">
      <thead >
            <tr>
              {/* <th className="px-4 py-2 border-b">ID</th> */}
              <th className="px-2 py-2 border-b">Name</th>
              {/* <th className="px-4 py-2 border-b">Email</th> */}
              <th className="py-2 border-b">Phone</th>
              <th className="pl-2 py-2 border-b">Membership Duration</th>
              <th className="px-4 py-2 border-b">valid till</th>
            </tr>
          </thead>
          
          <tbody>
            {membersList.length >0 && membersList.map(member => (
              <tr key={member.phone}>
                {/* <td className="pl-6 py-2 border-b">{member.id}</td> */}
                <td className="pl-12 py-2 border-b">{member.firstname}</td>
                {/* <td className="pl-20  py-2 border-b">{member.email}</td> */}
                <td className="pl-20 py-2 border-b">{member.phone}</td>
                <td className=" pl-20 py-2 border-b">{member.plan}</td>
                <td className=" pl-20 py-2 border-b">{member.validTill}</td>
                {/* <td className=" pl-15 py-2 border-b">{member.}</td> */}
                <td><button className=" bg-blue-400 px-2 py-1 rounded-md text-slate-100 hover:scale-105 cursor-pointer">alert</button></td>
              </tr>
            ))}
          </tbody>
    </table>
  </div>
  )
}

export default Admin_home
