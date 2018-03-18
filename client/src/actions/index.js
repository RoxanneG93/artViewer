export const userLogout = () => ({
  type: "USER_LOGOUT"
});

export const authenticateUser = currentUser => ({
  type: "AUTHENTICATE_USER",
  currentUser
});

const authRequest = (authInfo, url) => {
  return fetch(url, {
    method: "post",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(authInfo)
  })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {authErrorMessage: data.message};
            throw err;
          })
        } else {
          let err = {authErrorMessage: "Please try again later.  Server not responding."};
          throw err;
        }
      }
      return resp.json();
    });
}

export const signUp = (authInfo) => (
  (dispatch, getState) => (
    authRequest(authInfo, '/api/auth/signup')
      .then(currentUser => dispatch(authenticateUser(currentUser)))
  )
);

export const signIn = (authInfo) => (
  (dispatch, getState) => (
    authRequest(authInfo, '/api/auth/signin')
      .then(currentUser => dispatch(authenticateUser(currentUser)))
  )
);

export const loadPosts = (posts) => ({
  type: "LOAD_POSTS",
  posts
});

export const fetchPosts = () => (
  dispatch => (
    fetch(`/api/posts`)
      .then(data => data.json())
      .then(p => {
        let posts = p.map(p => {
          return {
            id: p._id,
            createdAt: p.createdAt,
            text: p.text,
            username: p.userId.username,
            profileImageUrl: p.userId.profileImageUrl
          }
        })
        return dispatch(loadPosts(posts));
      })
  )
)

export const addPost = post => ({
  type: "ADD_POST",
  post
})

export const postNewPost = (text) => (
  (dispatch, getState) => {
    let {currentUser} = getState();
    if (!currentUser) { return Promise.resolve(); }

    const {userId, token} = currentUser;
    const url = `/api/users/${userId}/posts`;
    return fetch(url, {
      method: "post",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      body: JSON.stringify({text})
    })
      .then(resp => {
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = {errorMessage: data.message};
              throw err;
            })
          } else {
            let err = {errorMessage: "Please try again later.  Server not responding."};
            throw err;
          }
        }
        return resp.json();
      })
      .then(p => {
        let post = {
          id: p._id,
          createdAt: p.createdAt,
          text: p.text,
          username: p.userId.username,
          profileImageUrl: p.userId.profileImageUrl
        }
        return dispatch(addPost(post));
      });
  }

);