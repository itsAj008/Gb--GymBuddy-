
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
    admin_cred : {
        username : 'ajay_008',
        password : "ajay008"
      },
    membersList : [
        {
            // id:'1',
            firstname : 'AJay',
            lastname : 's',
            email : "ajay@gmail.com",
            phone : "1111111111",
            dob : '29/03/1999',
            plan : '6 months',
            password: '12345678',
            validTill : '5 months'
        },
        {
            // id:'1',
            firstname : 'AJay',
            lastname : 's',
            email : "ajay@gmail.com",
            phone : "2222222222",
            dob : '29/03/1999',
            plan : '6 months',
            password: '12345678',
            validTill : '4 months'
        },
        // {
        //     id:'1',
        //     firstname : 'AJay',
        //     lastname : 's',
        //     email : "ajay@gmail.com",
        //     phone : "123456890",
        //     dob : '29/03/1999',
        //     plan : '6 months',
        //     password: '1111111111',
        //     validTill : ''
        // },
        // {
        //     id:'1',
        //     firstname : 'AJay',
        //     lastname : 's',
        //     email : "ajay@gmail.com",
        //     phone : "123456890",
        //     dob : '29/03/1999',
        //     plan : '6 months',
        //     password: '1111111111',
        //     validTill : ''
        // }
    ]
}

const MemberListSlice = createSlice({
    name : 'memberList',
    initialState,
    reducers : {
        updateMemberList : (state,action) => {
            console.log(action.payload)
            state.membersList.push(action.payload)
        },
        updateWholeList : (state,action) => {
            console.log(action.payload)
            state.membersList.push(action.payload)
        }
    }
});


export const {updateMemberList, updateWholeList} = MemberListSlice.actions

export default MemberListSlice.reducer



