import React, { Fragment,Component } from 'react'
import Spinner from './Spinner'
import {Link} from 'react-router-dom'
import {Repos} from './Repos'

 class User extends Component {
     componentDidMount(){
         console.log(this.props.match.params.login)
         this.props.getUser(this.props.match.params.login)
         this.props.getRepos(this.props.match.params.login)
     }
    render() {
        
console.log(this.props.repos)
const {name,
avatar_url,
location,
bio,
blog,
login,
html_url,
followers,
following,
public_repos,
public_gists,
hireable,company
}=this.props.user
const {loading} =this.props
if(loading)
{
    return <Spinner/>
}
        return (
            <Fragment>
                <button className="btn btn-light "><Link to='/' style={{color: 'black'}}>Back</Link></button>
                <br></br>
                
            <h3>Hireable :{' '}{hireable ?<i className='fas fa-check text-success'></i>:<i className='fas fa-times-circle text-danger'/>}</h3>
            <div className='card grid-2'>
                    <div className='all-center'>
                        <img src={avatar_url} alt='' className='round-img' style={{width:'150px'}}></img>
                        <h1>{name}</h1>
                {location&&(
                    <Fragment>
                        <p>Location: {location}</p>
                    </Fragment>
                )}
                
                </div>
                <div>
                    {bio &&(
                        <Fragment>
                            <h3>Bio</h3>
                        <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark">Visit Github Profile</a>
                    <ul>
                        <li>
                        {
                            login&&(
                                <Fragment>
                                    <strong>Username:</strong>{login}
                                </Fragment>
                            )
                        }</li>
                        <li>
                        {
                            company&&(
                                <Fragment>
                                    <strong>Company:</strong>{company}
                                </Fragment>
                            )
                        }</li>
                        <li>
                        {
                            blog&&(
                                <Fragment>
                                    <strong>Blog:</strong>{blog}
                                </Fragment>
                            )
                        }</li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                    <div className="badge badge-light">Followers:{followers}</div>
                    <div className="badge badge-success">Following:{following}</div>
                    <div className="badge badge-danger">Public Repos:{public_repos}</div>
                    <div className="badge badge-dark">Public Gists:{public_gists}</div>

            </div>
           
                    
            <Repos repos={this.props.repos}></Repos>
       
            </Fragment>

        )
    }
}

export default User
