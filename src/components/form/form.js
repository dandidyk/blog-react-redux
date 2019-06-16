import React from 'react'

import { compose } from '../../utils'
import { connect } from 'react-redux'
import { withSimpleBlogService } from '../hoc'
import { createNewPost, postsLoaded } from '../../actions'

const Form = ({ newPost, createNewPost, simpleBlogService, postsLoaded }) => {

    const onSubmit = (e) => {
        e.preventDefault()

        const { createPost, getAllPosts } = simpleBlogService

        createPost(newPost)
        getAllPosts()
            .then((data) => {
                postsLoaded(data)
            })
    }

    const onChange = e => {
        createNewPost({
            text: e.target.value,
            field: e.target.name
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={(e) => onChange(e)} name='author' type='text' placeholder='Author' />
            <input onChange={(e) => onChange(e)} name='title' type='text' placeholder='Title' />
            <input onChange={(e) => onChange(e)} name='body' type='text' placeholder='Body' />
            <button type='submit' >
                Add Post
            </button>
        </form>
    )
}

const mapStateToProps = ({ newPost }) => {
    return { newPost };
};

const mapDispatchToProps = {
    createNewPost,
    postsLoaded
}

export default compose(
    withSimpleBlogService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Form)
