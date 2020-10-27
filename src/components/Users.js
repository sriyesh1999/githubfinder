import React from 'react'
import UserItem from './UserItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

 const Users=({users,loading})=>{
     if(loading)
     {
         return (
             <Spinner/>
         )
     }
     
             

      
    else
    {
   
        return (
            
            <div style={{display: 'grid', gridTemplateColumns:'repeat(3,1fr)', gridGap:''}}>
                {users.map(user => 
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
