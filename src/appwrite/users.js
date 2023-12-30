import conf from "../conf/conf";
import { Client,Users, ID } from "appwrite";

//created a class to export, and a constructor so that it initializes whenever an object is created for better code practices
const sdk = require('node-appwrite');
export class UserService {
    client = new sdk.Client();
    users;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            .setKey(conf.appwriteUsersKey)
        this.users = new Users(this.client);
    }

    async getUsers(){
        try{
            const users = await this.users.list();
            if(users){
                console.log("users",users)
            }
        }
        catch(error){
            console.log("Get users error :",error)
        }
    }

    
}

const userService = new UserService();

export default userService