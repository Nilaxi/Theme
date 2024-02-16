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
export const getUser = (data)  =>{
    return authFetchGet(`/api/User`,'GET',data);
}

export default createJobAPI;
