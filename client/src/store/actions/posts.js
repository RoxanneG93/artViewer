import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_POSTS, REMOVE_POST } from "../actionTypes";

export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
});

export const remove = id => ({
  type: REMOVE_POST,
  id
});

export const removePost = (user_id, post_id) => {
  return dispatch => {
    return apiCall("DELETE", `/api/users/${user_id}/posts/${post_id}`)
      .then(() => dispatch(remove(post_id)))
      .catch(err => {
        addError(err.message);
      });
  };
};

export const fetchPosts = () => {
  return dispatch => {
    return apiCall("GET", "/api/posts")
      .then(function(res){
        dispatch(loadPosts(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};

export const postNewPost = (title, galleryPost, text) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("POST", `/api/users/${id}/posts`, {title, galleryPost, text})
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};
