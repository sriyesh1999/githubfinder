import React,{useContext} from 'react'
import {RepoItem} from './RepoItem'
import githubContext from '../context/github/githubContext'
export const Repos = () => {
    const gt=useContext(githubContext)
    
    return (
        gt.repos.map(repo=><RepoItem repo={repo} key={repo.id}></RepoItem>)
            )
    }

