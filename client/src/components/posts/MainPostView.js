import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
// import { addLike, removeLike } from "../../actions/postActions";

class MainPostView extends Component {
  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;
    console.log(this.props);

    return (
      <Link to={`/posts/${post._id}`} className="post-container">
        <img className="image" src={post.image} />
        <div className="overlay">
          {/* <div className="text-container"> */}
          <h1 className="overlayTitle">{post.title}</h1>
          {/* <span className="user container"> */}
          <img
            src={post.profilepic}
            alt="profile picture"
            className="latest-profiles-img"
          />
          {showActions ? (
            <a className="likes">
              <div
                className={classnames("far fa-heart fa-5x", {
                  "text-info": this.findUserLike(post.likes)
                })}
              />
              <span className="">{post.likes.length}</span>
            </a>
          ) : null}
          {/* </span> */}
          {/* </div> */}
        </div>
      </Link>
    );
  }
}

MainPostView.defaultProps = {
  showActions: true
};

MainPostView.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(MainPostView);
