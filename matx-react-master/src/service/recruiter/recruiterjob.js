import authFetch, { authFetchGet } from "service/authfetch";
// For Create Job
 const createJobAPI  = (data) =>{
    return authFetch('/api/jobs', 'Post',data);

};

 export const getJobData = (pageId)  =>{
    return authFetchGet(`/api/jobs?myjobs${pageId}`,'GET',{});
}
// For Profile
 export const  UserAPI  = (data1) =>{
    return authFetch('/api/User', 'Put',data1);

};
export const getUserAPI = (data)  =>{
    return authFetchGet(`/api/User`,'GET',data);
}
// For Update
export const getJobUpdateData = (data) => {

    return authFetchGet("/api/jobs/"+data,'GET');
}
export const putJobUpdateData = (id,data) => {

    return authFetch(`/api/jobs/${id}`,'Put',data)
}

// For Delete
export const deleteJobData = (id) => {

    return authFetchGet(`/api/jobs/${id}`, 'DELETE');
}
export const getJobDataSearch = (obj) => {

    return authFetchGet(`/api/jobs?myjobs=${obj.pageNumber}&q=${obj.searchTerm}`, 'GET');
}



export default createJobAPI;
