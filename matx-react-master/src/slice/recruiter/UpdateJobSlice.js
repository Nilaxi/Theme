import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading : false,
    data : null,
    error: null
}

const UpdateJobSlice = createSlice({
  name: 'Update',
  initialState,
  reducers: {
    UpdateRequest : function(state){
        state.isloading = true;
    },
   UpdateJobSuc : function(state,{payload})
   {
    state.isloading = false;
    state.data = payload;
  },
    UpdateJobFail : function(state,{payload})
    {
     state.isloading = false;
     state.error = payload;
     
    },


    getupdateRequest : function(state){
      state.isloading = true;
    
   
 },
   SucgetUpdateRequest : function(state, {payload}){
     state.isloading = false;
      state.listData = payload;
 
},
   failgetupdateRequest : function(state, {payload}){
      state.isloading = false;
       state.error = payload;
 },

 deleteJobRequest: (state) => {
  state.isloading = true;
},
deleteJobSuccess: (state, action) => {
  state.isloading = false;
   
},
deleteJobFailure: (state, action) => {
  state.isloading = false;
  state.error = action.payload;
},
}
});

  export const {UpdateRequest,UpdateJobSuc,UpdateJobFail,getupdateRequest,SucgetUpdateRequest,failgetupdateRequest,deleteJobFailure,deleteJobRequest,deleteJobSuccess} = UpdateJobSlice.actions

export default UpdateJobSlice.reducer