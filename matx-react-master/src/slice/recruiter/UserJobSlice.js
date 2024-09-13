import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    isloading : false,
    data : null,
    error: null   
}

const UserJobSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    UserRequest : function(state){
        state.isloading = true;
    },
   UserJobSuc : function(state,{payload})
   {
    state.isloading = false;
    state.data = payload;
  },
    UserJobFail : function(state,{payload})
    {
     state.isloading = false;
     state.error = payload;
     
    },


    getUserRequest : function(state){
      state.isloading = true;
    
   
 },
   SucgetUserRequest : function(state, {payload}){
     state.isloading = false;
      state.data = payload;
 
},
   failgetUserRequest : function(state, {payload}){
      state.isloading = false;
       state.error = payload;
 }
}
});

export const {UserRequest,UserJobSuc,UserJobFail,getUserRequest,SucgetUserRequest,failUserRequest} = UserJobSlice.actions

export default UserJobSlice.reducer