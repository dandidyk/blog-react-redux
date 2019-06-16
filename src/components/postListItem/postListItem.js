import React from 'react'

const PostListItem = ({ title, body, author, timeStamp, onSelectPost }) => {
    console.log(onSelectPost);
    
    return (
        <li onClick={ onSelectPost }>
            <span>
                {title}
            </span>
            <span>
                {body}
            </span>
            <span>
                {author}
            </span>
            <span>
                {timeStamp}
            </span>
        </li>
    )
}

export default PostListItem