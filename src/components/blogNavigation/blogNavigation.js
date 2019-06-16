import React from 'react'
import { Link } from 'react-router-dom'

const BlogNavigation = () => (
    <nav>
        <Link to={'/posts/'}> View All Posts</Link>
    </nav>
)

export default BlogNavigation