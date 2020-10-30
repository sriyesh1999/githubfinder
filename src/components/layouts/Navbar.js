import React from 'react'
import {Link} from 'react-router-dom'

const  Navbar =()=> {
    const props = {
        title:"Github Finder",
         icon: "fa fa-github "
    }


    
        return (
            <div className="navbar bg-dark">
              <Link to="/"><h1><i className={props.icon}/> {props.title}</h1></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    
                </ul>
            </div>
        )
}

export default Navbar
