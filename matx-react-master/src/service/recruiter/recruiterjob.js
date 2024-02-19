import authFetch, { authFetchGet } from "service/authfetch";

 const createJobAPI  = (data) =>{
    return authFetch('/api/jobs', 'Post',data);

};

 export const getJobData = (pageId)  =>{
    return authFetchGet(`/api/jobs?myjobs${pageId}`,'GET',{});
}
 export const  UserAPI  = (data1) =>{
    return authFetch('/api/User', 'Put',data1);

};
export const getUserAPI = (data)  =>{
    return authFetchGet(`/api/User`,'GET',data);
}

export const UpdateAPI = (data1)  =>{
    return authFetchGet(`/api/User`,'Put',data1);
}


export const deleteJobData = (id) => {

    return authFetchGet(`/api/jobs/${id}`, 'DELETE');
}




export default createJobAPI;
