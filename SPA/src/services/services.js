import {get,post} from "./restService.js"

let services = {
    postData (data){
        console.log(data)
        return post("properties", data)
    },
    getAll(){
        return get("properties")
    },
    getOne(_id){
        return get(`properties/${_id}`)
    },
    userLogin(username, password){
        return post("auth/login",{ username, password })
    },
    userRegister(username, password){
        return post("auth/register", { username, password });
    },
    userLogout(){
        sessionStorage.clear();
        return console.log('LOGOUT')}    
      
    ,
    deleteOne(_id){
        return get(`properties/delete/${_id}`)},
        
    editOne(_id, data){
            return post(`properties/edit/${_id}`, data)},

    sessionStore(data) {
        sessionStorage.setItem("authtoken", data.authtoken)
        sessionStorage.setItem("username", data.username)
        sessionStorage.setItem("userId", data.userId)
   }
//    postLikes (_id, data){
//     return put(kinveyModule,`dating/${_id}`, data, type)
//    }
}

    

export default services;