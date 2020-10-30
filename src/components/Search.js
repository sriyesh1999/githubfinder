import React, { Component } from 'react'

 class Search extends Component {
     state={
            text:''
        }
    onSubmit=(e)=>{
        e.preventDefault()
        if(this.state.text==='')
        {
            this.props.setAlert('Please enter something','light')
        }
        else{
            this.props.searchUsers(this.state.text)
            this.setState({text:''})
        }
        

    }
    show_button=()=>{
        
        if(this.props.showclear)
        {
            return(
                <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>

            )
        }
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" placeholder="Search users"onChange={(e)=>this.setState({text :e.target.value})} value={this.state.text}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {this.show_button()}
            </div>
        )
    }
}

export default Search
