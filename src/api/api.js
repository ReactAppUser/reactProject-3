import * as axios from "axios"





const instance = axios.create({

withCredentials: true,
baseURL: `https://social-network.samuraijs.com/api/1.0/`,
headers: { 
    "API-KEY": "d6460e26-f830-4b67-87f8-9b2af9da1172"
}, 
});

export const usersAPI = {

getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
        return response.data;
    });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn("Obsolete methode. Please use profileAPI object")
       return profileAPI.getProfile(userId);                
        
    }
 
}


export const profileAPI = {

 getProfile(userId) {
           return instance.get(`profile/`+ userId);                  
            
        }, 

getStatus(userId){
    return instance.get('profile/status/' + userId)

},

updateStatus(status){
    return instance.put('profile/status', {status: status});
},

savePhoto(PhotoFile){
    const formData = new FormData();
    formData.append("image", PhotoFile);
    return instance.put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}} );
},

saveProfile(profile){
    return instance.put('profile', profile);

}

} 
   


export const authAPI = {
    
    me() {
        return instance.get(`auth/me`);

    },

    login(email, password, rememberMe = false, captcha=null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha});
    },

    logout (){
        return instance.delete('auth/login');
    },
    
    }

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`).then(response => {
    return response.data;
});
}


export const securityAPI = {
    
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);

    }

    }


