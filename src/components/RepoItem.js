import React from 'react'

export const RepoItem = ({repo}) => {
    return (
        <div>
            <div className="card">
                <h3>
                    <a href={repo.html_url} style={{color:'black'}}>{repo.html_url}</a>
                </h3>
            </div>
        </div>
    )
}

