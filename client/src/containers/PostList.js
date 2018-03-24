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
        text={p.text}
        galleryPost={p.user.galleryPost}
        username={p.user.username}
        profileImageUrl={p.user.profileImageUrl}
        removePost={removePost.bind(this, p.user._id, p._id)}
        isCorrectUser={currentUser === p.user._id}
      />
    ));
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="posts">
            {postList}
          </ul>
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
