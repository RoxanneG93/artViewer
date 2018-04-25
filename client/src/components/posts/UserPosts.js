import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import { getUserPosts } from '../../actions/postActions';

class UserPosts extends Component {
  // componentDidMount() {
  //   this.props.getUserPosts(this.props.match.params.username);
  // }

  render() {
    const { posts, loading } = this.props.post;
    let userPosts;

    if (posts === null || loading) {
      userPosts = <Spinner />;
    } else {
      userPosts = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {userPosts}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserPosts.propTypes = {
  getUserPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getUserPosts })(UserPosts);