import './App.css';
import React, { useState ,Fragment } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NotFound from './components/NotFound'
import Navbar from './components/layouts/Navbar'
import Users from './components/Users'
import Search from './components/Search'
import Alert from './components/Alert'
import About from './components/About'
import User from './components/User'
import GithubState from './context/github/GithubState'


 const App =()=>
{

    const [alert,setalert]=useState(null)
    const setAlert=(msg,type)=>{
      
    
      setalert({msg,type})
      setTimeout( () => setalert(null), 5000)
    
      }
      return (
      <GithubState>
        <Router>
        <Navbar />
       
        <div className="container"> 
        <Alert alert={alert}/>
        <Switch>
          <Route exact path='/' render={props=>(
            <Fragment>
              <Search setAlert={setAlert}  />
              <Users  />


            </Fragment>
          
          )}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/User/:login"  render={props=>(
            <User {...props}  ></User>)}/>
          <Route component={NotFound}></Route>
        
        </Switch>
        
        
        </div>
        </Router>
        </GithubState>
    
     
    )
}




export default App;
