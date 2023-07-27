import {
  DELETE_POSTS,
  GET_POSTS,
  POSTS_ERROR,
  UPDATE_LIKES,
  ADD_POSTS,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function foo(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case ADD_POSTS:
      return {
        ...state,
        posts: [...state.posts, payload],
        loading: false,
      };
    case DELETE_POSTS:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload.postId),
        loading: false,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };
    default:
      return state;
  }
}
