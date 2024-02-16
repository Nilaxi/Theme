import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isloading : false,
  data : null,
  error: null,
  listData : []
}
const createjobslice = createSlice({       
  name: 'jobs',
  initialState,
  reducers: {
    createJobrequest : function(state){
        state.isloading = true;
    },
   createJobSuc : function(state,{payload})
   {
    state.isloading = false;
    state.data = payload;
  },
    createJobFail : function(state,{payload})
    {
     state.isloading = false;
     state.error = payload;
     
    },




    getJobrequest : function(state){
       state.isloading = true;
     
    
  },
    SucgetJobRequest : function(state, {payload}){
      state.isloading = false;
       state.listData = payload;
  
},
    failgetJobRequest : function(state, {payload}){
       state.isloading = false;
        state.error = payload;
  }

}

  }
);

export const {createJobrequest,createJobSuc,createJobFail,getJobrequest,SucgetJobRequest,failgetJobRequest} = createjobslice.actions

export default createjobslice.reducer