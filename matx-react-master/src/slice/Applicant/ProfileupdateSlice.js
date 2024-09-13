const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    isloading : false,
  data : null,
  error: null
}


const ProfileupdateSlice = createSlice({
  name :"applicantuser",
  initialState, 
  reducers :{
    applicantgetuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    applicantgetusersuccess : function(state, {payload}){
        state.isloading = false;
        state.data = payload;       
    },
    applicantgetuserfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
    putapplicantuserrequest : function(state, {payload}){
        state.isloading = true;
    },
    putapplicantusersuccess : function(state, {payload}){
        state.isloading = false;
        state.data = payload;       
    },
    putapplicantuserfaile : function(state, {payload}){
        state.isloading = false;
        state.error = payload;
    },
  }
})

export const {applicantgetuserrequest,applicantgetusersuccess,applicantgetuserfaile,putapplicantuserrequest, putapplicantusersuccess ,putapplicantuserfaile} = ProfileupdateSlice.actions
export default ProfileupdateSlice.reducer