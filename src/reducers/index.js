const initialState = {
    posts: [],
    selectedPost: 0,
    newPost: {
        author: '',
        title: '',
        body: ''
    }
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.payload,
            };
        case 'SELECT_POST':
            return {
                ...state,
                selectedPost: action.payload,
            };
        case 'INPUT_NEW_POST':
            return {
                ...state,
                newPost: {
                    ...state.newPost,
                    [action.payload.field] : action.payload.text
                }
            };
        default:
            return state;
    }
};


export default reducer