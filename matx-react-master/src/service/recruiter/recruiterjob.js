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
export const putJobUpdateData = (data) => {

    return authFetch(`/api/jobs/${data._id}`,'Put',data)
}

// For Delete
export const deleteJobData = (id) => {

    return authFetchGet(`/api/jobs/${id}`, 'DELETE');
}
// For Search 
export const getJobDataSearch = (obj) => {

    return authFetchGet(`/api/jobs?myjobs=${obj.pageNumber}&q=${obj.searchTerm}`, 'GET');
}
//For Advanch Searching

export const getJobDataSearchAdvanced = (obj) => {

    let url =`/api/jobs?myjobs=${obj.pageNumber}`

   if(obj.jobType.fullTime)
   {
       url = url + "&jobType=" + "Full Time"
   }  
   if(obj.jobType.partTime)
   {
       url = url + "&jobType=" + "Part Time"
   }   
   if(obj.jobType.wfh)
   {
       url = url + "&jobType=" + "Work From Home"
   }    
   if(obj.salary && obj.salary.length> 0)
   {
    if(obj.salary[1]>0){
       url = url + "&salaryMin=" + obj.salary[0]
       url = url + "&salaryMax=" + obj.salary[1]
    }
   }
   if(obj.duration && obj.duration != "0")
   {
       url = url + "&duration=" + obj.duration
   }
   if(obj.sort.salary)
   {
       if(obj.sort.salary.desc)
       {
       url = url + "&desc=" + "salary"
       }
       else
       {
           url = url + "&asc=" + "salary" 
       }
   }

   if(obj.sort.duration)
   {
       if(obj.sort.duration.desc)
       {
       url = url + "&desc=" + "duration"
       }
       else
       {
           url = url + "&asc=" + "duration" 
       }
   }

   if(obj.sort.rating)
   {
       if(obj.sort.rating.desc)
       {
       url = url + "&desc=" + "rating"
       }
       else
       {
           url = url + "&asc=" + "rating" 
       }
   }
   
   return authFetchGet(url, 'GET');
   }
export const applicantusergetData =(data1)=>{
    return authFetchGet('/api/user', 'GET', data1)
}
export const applicantuserputData =(data1)=>{
    return authFetch('/api/user', 'Put', data1)
}

// applicant user ======------->

// View Application start ====------>

export const Getapplicant =(id) =>
{

    return authFetchGet(`/api/applicants?jobId=${id}&desc=dateOfApplication`,'GET')
}

// View Application end ====------>
export const ApplicationPopup = (obj) => {
        let url =`/api/applicants?jobId=${obj.pageNumber}`
    
        if(obj.jobType.fullTime)
        {
            url = url + "&jobType=" + "Full Time"
        }  
        if(obj.jobType.partTime)
        {
            url = url + "&jobType=" + "Part Time"
        }   
        if(obj.jobType.wfh)
        {
            url = url + "&jobType=" + "Work From Home"
        }
    
        
        return authFetchGet(url, 'GET');
    }
   
    // View Application end ====------>


export default createJobAPI;
