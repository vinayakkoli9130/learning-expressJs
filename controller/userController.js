import { usersList } from "../model/userModel.js";

export function handleUsers(req,resp){
    const userData=usersList()
    console.log(userData)//comes data when url hitt.
resp.render('user',{users:userData})
}