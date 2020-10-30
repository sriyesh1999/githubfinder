

import './App.css';
import axios from 'axios'
import React, { Component ,Fragment } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Users from './components/Users'
import Search from './components/Search'
import Alert from './components/Alert'
import About from './components/About'
import User from './components/User'


 class App extends Component
{
  state={
    users:[],
    loading:false,
    user:{},
    repos:[],
    alert:null
  }
  
  async componentDidMount()
    {
      this.setState({
        loading:true
      })
      const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({
        users:res.data,
        loading:false
      })
    }
     
      
    setAlert=(msg,type)=>{
      
    
      this.setState({alert:{msg,type}})
      setTimeout( () => this.setState({alert:null}), 5000)
    
      }
  
   searchUsers = async text => 
   {
    
    this.setState({
     
      loading:true
    })
  
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({
      users:res.data.items,
      loading:false
    })
    
  }
  getRepos= async (username)=>{
    
    this.setState({
     
      loading:true
    })
  
    const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
    this.setState({
      
      repos:res.data,
      loading:false
    })

    

  }
  getUser=async (username)=>{
    
    this.setState({
     
      loading:true
    })
  
    const res= await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
    this.setState({
      user:res.data,
      loading:false
    })
    
    

  }
  clearUsers=()=>(this.setState({
    users:[],
    loading:false
  })

  ) 
  render() 
  {
    
 
    
    return (
      <div>
        <Router>
        <Navbar />
       
        <div className="container"> 
        <Alert alert={this.state.alert}/>
        <Switch>
          <Route exact path='/' render={props=>(
            <Fragment>
              <Search setAlert={this.setAlert} searchUsers={this.searchUsers} clearUsers={this.clearUsers} showclear={this.state.users.length>0?true:false}/>
              <Users loading={this.state.loading} users={this.state.users} />


            </Fragment>
          
          )}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/User/:login"  render={props=>(
            <User {...props} user={this.state.user} getRepos={this.getRepos} repos={this.state.repos} getUser={this.getUser} loading={this.state.loading}></User>





          )





          }/>
        
        </Switch>
        
        
        </div>
        </Router>
        
      </div>
     
    )
  }
}



export default App;
