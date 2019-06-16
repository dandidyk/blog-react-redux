import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostListItem from '../postListItem';
import withSimpleBlogService from '../hoc/withSimpleBlogService'
import { compose } from '../../utils'
import { postsLoaded } from '../../actions';

class PostsList extends Component {


    componentDidMount() {

        const { simpleBlogService } = this.props

        const { getAllPosts } = simpleBlogService

        getAllPosts()
            .then((data) => {
                this.props.postsLoaded(data)
            })
    }

    onSelectPost = id => {
        this.props.history.push(`${id}`)
    }

    render() {
        const { posts } = this.props

        return (
            <ul>
                {posts.map(({ id, ...post }) => (
                    <PostListItem key={id}
                        onSelectPost={() => this.onSelectPost(id)}
                        {...post} />
                ))}
            </ul>
        )
    }

}

const mapStateToProps = ({ posts }) => {
    return { posts };
};

const mapDispatchToProps = {
    postsLoaded
}



export default compose(
    withSimpleBlogService(),
    connect(mapStateToProps, mapDispatchToProps)
)(withRouter(PostsList))