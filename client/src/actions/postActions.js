import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_USER_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
  EDIT_POST
} from "./types";

// Add Post
export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/posts")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

// Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

// Get All User's Posts
export const getUserPosts = user_id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${user_id}`)
    .then(res =>
      dispatch({
        type: GET_USER_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_POSTS,
        payload: null
      })
    );
};

// Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// GET CURRENT POST
// export const getCurrentPost = id => dispatch => {
//   axios
//     .get(`/api/posts/${id}/edit`)
//     .then(res =>
//       dispatch({
//         type: GET_CURRENT_POST,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// EDIT Post
export const editPost = data => dispatch => {
  console.log("below is the id log");
  console.log(data);
  // console.log("below is the data log")
  // console.log(data);
  axios
    .put(`/api/posts/${data._id}/edit`, data)
    .then(res => {
      dispatch({
        type: EDIT_POST,
        payload: data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// export function editPost(id, data){
//     const request = axios.post(`/api/posts/${id}/edit`,data)
//                 .then(response => response.data);

//     return {
//         type:'EDIT_POST',
//         payload:request
//     }

// }

// // Create Profile
// export const createProfile = (profileData, history) => dispatch => {
//   axios
//     .post('/api/profile', profileData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Add Like
export const addLike = id => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/posts/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const editComment = (postId, commentId, commentData) => dispatch => {
  axios
    .put(`/api/posts/comment/${postId}/${commentId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getComment = (postId, commentId) => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
