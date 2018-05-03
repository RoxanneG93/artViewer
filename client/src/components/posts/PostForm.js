import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      image: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      title: this.state.title,
      image: this.state.image,
      text: this.state.text,
      name: user.name,
      profilepic: user.profilepic
    };

    this.props.addPost(newPost);
    this.setState({ title: '', image: '', text: ''});
    this.props.history.push('/feed');
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form container">
          <div className="card-header text-white">Submit to  your Gallery</div>
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
                  placeholder="Write a description"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
              </div>
              <button type="submit" className="post-form-button btn btn-dark">
                Submit
              </button>
            </form>
          </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
