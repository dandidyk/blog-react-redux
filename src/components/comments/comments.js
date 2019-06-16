import React from 'react'

const Comments = ({ commentsArr = [] }) => {



    let elements = commentsArr.map( ({ body, id }) => <span key={id}> { body }</span>)

    if ( elements.length === 0 ) elements = <span> No body left the comment under the post </span>

    return (
        <div>
            <h2>Comments</h2>
            { elements }
        </div>
    )
}

export default Comments