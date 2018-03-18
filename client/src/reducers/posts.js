const posts = (state=[], action) => {
  switch(action.type) {
    case "LOAD_POSTS":
      return [...action.posts];
    case "ADD_POSTS":
      return [action.posts, ...state];
    default:
      return state;
  }
};

export default posts;