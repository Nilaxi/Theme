import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading : false,
    data : null,
    error: null,
    listData : []
}

const UpdateJobSlice = createSlice({
  name: 'Update',
  initialState,
  reducers: {
    GetUpdateRequest: function (state) {
      state.isloading = true;
    },
    SucGetUpdateRequest: function (state, { payload }) {
      state.isloading = false;
      state.data = payload;
    },
    FailGetUpdateRequest: function (state, { payload }) {
      state.isloading = false;
      state.error = payload;
    },

    
    PutUpdateRequest: function (state) {
      state.isloading = true;
    },
    SucPutUpdateRequest: function (state, { payload }) {
      state.isloading = false;
      state.listData = payload;
    },
    FailPutUpdateRequest: function (state, { payload }) {
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

  export const {deleteJobFailure,deleteJobRequest,deleteJobSuccess,FailGetUpdateRequest,GetUpdateRequest,SucGetUpdateRequest,FailPutUpdateRequest,PutUpdateRequest
  ,SucPutUpdateRequest
} = UpdateJobSlice.actions

export default UpdateJobSlice.reducer