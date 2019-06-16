import React, { Component } from 'react'
import { connect } from 'react-redux'

import { compose } from '../../utils'
import { selectPost } from '../../actions'
import { withSimpleBlogService } from '../hoc'

import Comments from '../comments'


class PostDetails extends Component {

    componentDidMount() {

        const { simpleBlogService, itemId } = this.props

        const { getPost } = simpleBlogService

        getPost(itemId)
            .then((data) => {
                this.props.selectPost(data)
            })

    }

    render() {

        console.log(this.props.selectedPost);
        

        const { title, body, comments } = this.props.selectedPost

        return (
            <div>
                <h1>
                    Post Details
                </h1>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <Comments commentsArr={comments} />
            </div>
        )
    }
}

const mapStateToProps = ({ selectedPost }) => {
    return { selectedPost };
};

const mapDispatchToProps = {
    selectPost
}



export default compose(
    withSimpleBlogService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PostDetails)


