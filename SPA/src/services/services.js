import {get,post} from "./restService.js"

let services = {
    postData (data){
        return post("dating", data)
    },
    getAll(){
        return get("dating")
    },
    getOne(_id){
        return get(`dating/${_id}`)
    },
    userLogin(username, password){
        return post({ username, password })
    },
    userRegister(username, password){
        return post("auth/register", { username, password });
    },
    // userLogout(){
    //     return fetch("https://baas.kinvey.com/user/kid_Hk7Ye1SEO/_logout", 
    //         {method : 'POST',
    //         headers: {
    //             'Authorization': `Kinvey ${sessionStorage.getItem(`authtoken`)}`,
    //             'X-Kinvey-API-Version': '1'
    //         }})    
      
    // },
    sessionStore(data) {
        sessionStorage.setItem("authtoken", data._kmd.authtoken)
        sessionStorage.setItem("username", data.username)
        sessionStorage.setItem("userId", data._id)
   }
//    postLikes (_id, data){
//     return put(kinveyModule,`dating/${_id}`, data, type)
//    }
}

    

export default services;