import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import EditPost from '../posts/EditPost';
import Spinner from '../common/Spinner';
import { getPost } from '../../actions/postActions';

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;
    console.log(this.props.post);

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div className="post-content container">
          <div className="image-content">
            <PostItem post={post} showActions={true} />
          </div>
          <div className="comment-form-content">
            <CommentForm postId={post._id} />
          </div>
          <div className="comment-feed-content">
            <CommentFeed postId={post._id} comments={post.comments} />
          </div>
        </div>
      );
    }

    return (
      <div className="post-view container-fluid">
        <Link to="/feed" className="btn btn-light mb-3">
           Back To Feed
        </Link>
        {postContent}
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
