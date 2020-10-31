import React,{useReducer} from 'react';
import axios from 'axios';
import githubContext from './githubContext'
import githubReducer from './githubReducer'
import {SEARCH_USERS,
 GET_USERS,
 GET_REPOS,
 CLEAR_USERS,
 SET_LOADING} from '../types'
 let githubClientID;
 let githubClientSecret;
 if(process.env.NODE_ENV !== 'production'){
   githubClientID = process.env.GITHUB_CLIENT_ID
   githubClientSecret=process.env.GITHUB_CLIENT_SECRET
 }
 else{
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID
  githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET

 }

 const GithubState= props =>
 {
     const initialState={
         users:[],
         user:{},
         repos:[],
         loading:false,
         
     }

 const [state,dispatch]=useReducer(githubReducer,initialState)

 //Search users
 const searchUsers = async text => 
   {
       
    
    setloading()
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`);
    
    
    dispatch({type:SEARCH_USERS ,payload:res.data.items})
    
  }
 //get users
 const getRepos= async (username)=>{
    
    
    setloading()

  const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&client_id=${githubClientID}&client_secret=${githubClientSecret}`);

  dispatch({type:GET_REPOS,payload:res.data})

  

}

 //get Repos
 const getUser=async (username)=>{
    

    setloading()

  const res= await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`);

  dispatch({type:GET_USERS,payload:res.data})
  
  

}

 //clear Users
 const clearUsers=()=>{
  
    dispatch({type:CLEAR_USERS})
  
  }

 //set loading 
 const setloading =()=> dispatch({type: SET_LOADING})

 


 return <githubContext.Provider
     value={{
         users:state.users,
         user:state.user,
         repos:state.repos,
         loading:state.loading,
         searchUsers,
         setloading,
         getRepos,
         getUser,
         clearUsers

         
     }}>
     {props.children}

 </githubContext.Provider>
 }
 export default GithubState