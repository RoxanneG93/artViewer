import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, removePost } from "../store/actions/posts";
import PostItem from "../components/PostItem";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts, removePost, currentUser } = this.props;
    let postList = posts.map(p => (
      <PostItem
        key={p._id}
        title={p.title}
        text={p.text}
        galleryPost={p.galleryPost}
        username={p.user.username}
        profileImageUrl={p.user.profileImageUrl}
        removePost={removePost.bind(this, p.user._id, p._id)}
        isCorrectUser={currentUser === p.user._id}
      />
    ));
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            {postList}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    currentUser: state.currentUser.user.id
  };
}

export default connect(mapStateToProps, { fetchPosts, removePost })(
  PostList
);
