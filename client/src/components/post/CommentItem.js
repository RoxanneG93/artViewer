import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/postActions';
import { Link } from 'react-router-dom';


class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;
    // console.log(this.props);

    return (
      <div className="comment-container container">
        <div className="row">
          <div className="user-link col-md-1">
            <a href="profile.html">
              <img
                className="comment-image"
                src={comment.profilepic}
                alt=""
              />
              <p>{comment.name}</p>
            </a>
          </div>
          <div className="user-comment col-md-11">
            <p>{comment.text}</p>
            {comment.user === auth.user.id ? (
                <button
                  onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                  type="button"
                  className="delete-button btn btn-danger mr-1"
                >
                  Delete
                </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
