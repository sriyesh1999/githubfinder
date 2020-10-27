import React, { Component } from 'react'

 class Search extends Component {
     state={
            text:''
        }
    onSubmit=(e)=>{
        e.preventDefault()
        this.props.searchUsers(this.state.text)
        this.setState({text:''})

    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" placeholder="Search users"onChange={(e)=>this.setState({text :e.target.value})} value={this.state.text}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
            </div>
        )
    }
}

export default Search
