import React,{useContext} from 'react'
import UserItem from './UserItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import githubContext from '../context/github/githubContext'

 const Users=()=>{
     const  gt = useContext(githubContext)
     if(gt.loading)
     {
         return (
             <Spinner/>
         )
     }
     
             

      
    else
    {
   
        return (
            
            <div style={{display: 'grid', gridTemplateColumns:'repeat(3,1fr)', gridGap:''}}>
                {gt.users.map(user => 
                (
                    <UserItem user={user} key={user.id}/>
                )
                )
                }
            </div>
        
        )
    }
    
        
    
}
Users.prototype={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}

export default Users
