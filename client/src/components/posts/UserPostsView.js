// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import classnames from "classnames";
// import { Link } from "react-router-dom";
// import { addLike, removeLike } from "../../actions/postActions";

// class UserPostsView extends Component {

//   onLikeClick(id) {
//     this.props.addLike(id);
//   }

//   onUnlikeClick(id) {
//     this.props.removeLike(id);
//   }

//   findUserLike(likes) {
//     const { auth } = this.props;
//     if (likes.filter(like => like.user === auth.user.id).length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   render() {
//     const { post, auth, showActions } = this.props;
//     console.log(this.props);

//     return (
//       <Link to={`/post/${post._id}`} className="post-container" >
//         <img className="image" src={post.image} />
//         <div className="overlay">
//           {/* <div className="text-container"> */}
//           <h1 className="overlayTitle">{post.title}</h1>
//           {/* <span className="user container"> */}
//           <img
//             src={post.profilepic}
//             alt="profile picture"
//             className="latest-profiles-img"
//           />
//           <p>username goes here</p>
//           {showActions ? (
//             <a
//               onClick={this.onLikeClick.bind(this, post._id)}
//               className="likes"
//             >
//               <div
//                 className={classnames("far fa-heart fa-5x", {
//                   "text-info": this.findUserLike(post.likes)
//                 })}
//               />
//               <span className="">{post.likes.length}</span>
//             </a>
//           ) : null}
//           {/* </span> */}
//           {/* </div> */}
//         </div>
//       </Link>
//     );
//   }
// }

// UserPostsView.defaultProps = {
//   showActions: true
// };

// UserPostsViews.propTypes = {
//   addLike: PropTypes.func.isRequired,
//   removeLike: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { addLike, removeLike })(
//   UserPostsView
// );