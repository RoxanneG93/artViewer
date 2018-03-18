import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import * as actions from '../actions';
import AuthForm from '../components/Auth/AuthForm';
import PrivateRoute from '../components/PrivateRoute';
import PostForm from '../components/Posts/PostForm';
import Homepage from '../components/Homepage';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  componentDidMount() {
    this.props.loadPosts();
  }

  handleNewPost(post) {
    const {newPost, history} = this.props;
    newPost(post).then(() => {
      history.push('/');
    });
  }

  render() {
    const {
      currentUser,
      authErrorMessage,
      handleSignIn,
      handleSignUp,
      posts,
      history
    } = this.props;
    return (
      <div className="container">
        <Switch>
          <Route exact path='/signin' render={(props) => (
            <AuthForm
              signIn={true}
              heading={"Welcome Back."}
              buttonText={"Log in"}
              onAuth={(authInfo) => handleSignIn(authInfo).then(() => history.push('/')) }
              errorMessage={authErrorMessage}
              {...props}
            />
          )} />
          <Route exact path='/signup' render={(props) => (
            <AuthForm
              signIn={false}
              heading={"Join Art-Viewer today."}
              buttonText={"Sign me up!"}
              onAuth={(authInfo) => handleSignUp(authInfo).then(() => history.push('/'))}
              errorMessage={authErrorMessage}
              {...props}
            />
          )} />
          <PrivateRoute
            path='/users/:id/posts/new'
            currentUser={currentUser}
            component={PostForm}
            componentProps={{onSubmit: this.handleNewPost}}
          />
          <Route
            exact path='/'
            render={(props) => (
              <Homepage
                {...props}
                currentUser={currentUser}
                messages={posts}/>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  posts: state.posts,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignIn(authData) { return dispatch(actions.signIn(authData)); },
  handleSignUp(authData) { return dispatch(actions.signUp(authData)); },
  loadPosts() { return dispatch(actions.fetchPosts()); },
  newMessage(text) {
    return dispatch(actions.postNewPost(text));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));