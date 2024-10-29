import {NextAuthOptions} from "next-auth"
// npm i @next-auth/upstash-redis-adapter 

import GithubProvider from "next-auth/providers/github"

import Googleproviders from 'next-auth/providers/google'
import exp from "constants";
function GetGoogleCredentials(){
    const clientId=process.env.GOOGLE_CLIENT_ID;
    const clientSecret=process.env.GOOGLE_CLIENT_SECRET;
    if(!clientId || clientId.length===0){
        throw new Error('Google clientId not found');
    }
    if(!clientSecret || clientSecret.length===0){
        throw new Error('Google clientSecret not found');
        
    }
    return {clientId,clientSecret};
}

function GetGithubCredentials(){
    const clientId=process.env.GITHUB_ID;
    const clientSecret=process.env.GITHUB_SECRET;
    if(!clientId || clientId.length===0){
        throw new Error('Github clientId not found');
    }
    if(!clientSecret || clientSecret.length===0){
        throw new Error('Github client Secret not found');
        
    }
    return {clientId,clientSecret};
}

 export const authOptions:NextAuthOptions={
   
    session:{strategy:'jwt'},
    pages:{
        signIn:'/Login'
    },
    providers:[
        Googleproviders({
            clientId:GetGoogleCredentials().clientId,
            clientSecret:GetGoogleCredentials().clientSecret
        }),
        GithubProvider({
                    clientId: GetGithubCredentials().clientId,
                    clientSecret: GetGithubCredentials().clientSecret,
                  }),
    ],
    callbacks:{
   

    // redirect(){
    //     return'/Dashboard'
    // }
    
}

}
// export {authOptions as GET , authOptions as Post}
