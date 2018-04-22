import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { editPost, getPost } from '../../actions/postActions';
import isEmpty from '../../validation/is-empty';

class EditPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      image: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getPost();
    console.log(this.props);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if(nextProps.post.post){
      const post = nextProps.post.post;
      // if post feild 
      post.title = !isEmpty(post.title) ? post.title : '';
      post.image = !isEmpty(post.image) ? post.image : '';
      post.text = !isEmpty(post.text) ? post.text : '';

      // set component feidls state
      this.setState({
        title: post.title,
        text: post.text,
        image: post.image
      });
    }
  }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const { user } = this.props.auth;

  //   const newPost = {
  //     title: this.state.title,
  //     image: this.state.image,
  //     text: this.state.text,
  //     name: user.name,
  //     avatar: user.avatar
  //   };

  //   this.props.editPost(newPost);
  //   this.setState({ title: '', image: '', text: ''});
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Edit POST</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup
                  type="text"
                  name="title"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title} 
                />
                <TextAreaFieldGroup
                  type="text"
                  name="image"
                  placeholder="image URL"
                  value={this.state.image}
                  onChange={this.onChange}
                  error={errors.image} 
                />
                <TextAreaFieldGroup
                  placeholder="Create a post"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
              </div>
                    <button
                      
                      type="button"
                      className="btn btn-warning mr-1"
                    >
                    Submit
                    </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditPostForm.propTypes = {
  getPost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post,
  errors: state.errors
});

export default connect(mapStateToProps, { editPost, getPost })(EditPostForm);