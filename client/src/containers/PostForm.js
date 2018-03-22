import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewPost } from "../store/actions/posts";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };
  }

  handleNewPost = event => {
    event.preventDefault();
    this.props.postNewPost(this.state.post);
    this.setState({ post: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <form onSubmit={this.handleNewPost}>
        {this.props.errors.message && (
          <div className="alert alert-danger">{this.props.errors.message}</div>
        )}
        <input
          type="text"
          className="form-control"
          value={this.state.post}
          onChange={e => this.setState({ post: e.target.value })}
        />
        <button type="submit" className="btn btn-success">
          Add my post!
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, { postNewPost })(PostForm);