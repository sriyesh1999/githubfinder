import React,{useState,useContext} from 'react'
import GithubContext from '../context/github/githubContext'

 const Search=({showclear,clearUsers,setAlert}) => 
 {
     const githubContext=useContext(GithubContext)
     const [text, setText ]=useState('')
    const onSubmit=(e)=>{

        e.preventDefault()
        if(text==='')
        {
            setAlert('Please enter something','light')
        }
        else{
            githubContext.searchUsers(text)
            setText('')
        }
        

    }
    const show_button=()=>{
        
        if(githubContext.users.length>0?true:false)
        {
            return(
                <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>

            )
        }
        }
        const onchange = (e)=>{
            setText(e.target.value)
        }

        
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" placeholder="Search users"onChange={onchange} value={text}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {show_button()}
            </div>
        )
    }


export default Search
