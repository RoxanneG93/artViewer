import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost,  addLike, removeLike } from '../../actions/postActions';

class MainPostView extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions} = this.props;
    console.log(this.props);

    return (
      <div className="post-container">
          <img className="image" src={post.image} />
          <div className="overlay">
            <div className="text-container">
              <h1 className="title">{post.title}</h1>
              <span className="user container">
                <img src={post.profilepic} alt="supposed to be username" />
                <p>{post.name}</p>
                {showActions ? (
                <span className="likes">
                  <a
                    onClick={this.onLikeClick.bind(this, post._id)}
                    className="">
                    <i
                      className={classnames('far fa-heart fa-5x', {
                        'text-info': this.findUserLike(post.likes)
                      })}
                    />
                    <span className="">{post.likes.length}</span>
                  </a>
                </span>
                ) : null}
              </span>
            </div>
          </div>
      </div>

    );
  }
}

MainPostView.defaultProps = {
  showActions: true
};

MainPostView.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  MainPostView 
);
