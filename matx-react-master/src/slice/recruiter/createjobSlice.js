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
  },

  searchgetJobRequest: function (state) {
    state.isloading = true;
  },
  searchsucGetJobRequest: function (state, { payload }) {
    state.isloading = false;
  state.listData = payload;
  },
  searchFailGetJobRequest: function (state, { payload }) {
    state.isloading = false;
    state.error = payload;
  },

  searchgetJobRequestAdvanced : function (state) {
    state.isloading = true;
  },
  searchsucGetJobRequestAdvanced : function (state, { payload }) {
    state.isloading = false;
  state.listData = payload;
  },
  searchFailGetJobRequestAdvanced : function (state, { payload }) {
    state.isloading = false;
    state.error = payload;
  },

viewgetJobrequest : function(state, {payload}){
    state.isloading = true;
},
viewsucgetJobrequest : function(state, {payload}){
    state.isloading = false;
    state.listData = payload;
},
viewfailgetJobrequest : function(state, {payload}){
    state.isloading = false;
    state.error = payload;
}

}

  }
);

export const {createJobrequest,createJobSuc,createJobFail,getJobrequest,SucgetJobRequest,failgetJobRequest,searchFailGetJobRequest,searchgetJobRequest,searchsucGetJobRequest,searchgetJobRequestAdvanced,searchFailGetJobRequestAdvanced,searchsucGetJobRequestAdvanced,viewfailgetJobrequest,viewgetJobrequest,viewsucgetJobrequest} = createjobslice.actions

export default createjobslice.reducer