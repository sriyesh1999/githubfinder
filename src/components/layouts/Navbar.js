import React from 'react'


const  Navbar =()=> {
    const props = {
        title:"Github Finder",
         icon: "fa fa-github "
    }


    
        return (
            <div className="navbar bg-dark">
                <h1><i className={props.icon}/> {props.title}</h1>
            </div>
        )
}

export default Navbar
