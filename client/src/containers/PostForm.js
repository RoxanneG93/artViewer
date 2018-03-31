import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewPost } from "../store/actions/posts";
import PropTypes from 'prop-types';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      galleryPost: "",
      text: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    // let post = {
    //   title: this.state.title,
    //   text: this.state.text,
    //   galleryPost: this.state.galleryPost
    // }
    // this.props.postNewPost(post);
    this.props.postNewPost(this.state.title, this.state.galleryPost, this.state.text);
    // this.props.postNewPost(this.state.galleryPost);
    // this.props.postNewPost(this.state.text);
    // console.log(post);
    // this.setState(post);
    this.props.history.push("/");
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.errors.message && (
          <div className="alert alert-danger">{this.props.errors.message}</div>
        )}
        <label for="title">Title:</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={this.state.title}
          onChange={this.onChange}
        />
        <label for="galleryPost">Image URL</label>
        <input
          type="text"
          name="galleryPost"
          className="form-control"
          value={this.state.galleryPost}
          onChange={this.onChange}
        />
        <label for="text">Description</label>
        <input
          type="text"
          name="text"
          className="form-control"
          value={this.state.text}
          onChange={this.onChange}
        />
        <button type="submit" className="btn btn-success">
          Add my post!
        </button>
      </form>
    );
  }
}


// PostForm.propTypes = {
//   postNewPost: PropTypes.func.isRequired
// };

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, { postNewPost })(PostForm);