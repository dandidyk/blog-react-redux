
const postsLoaded = (posts) => {
    return {
        type: 'POSTS_LOADED',
        payload: posts
    };
};

const selectPost = ( post ) => {
    return {
        type: 'SELECT_POST',
        payload: post
    };
};

const createNewPost = ( post ) => {
    return {
        type: 'INPUT_NEW_POST',
        payload: post
    };
};

export {
    postsLoaded,
    selectPost,
    createNewPost
};
