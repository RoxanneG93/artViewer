import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { editPost, getPost } from '../../actions/postActions';
import isEmpty from '../../validation/is-empty';
import { Link } from 'react-router-dom';

class EditPost extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
      title: '',
      text: '',
      image: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
     if (nextProps.post.post) {
      const post = nextProps.post.post;
    // Set component fields state
      this.setState({
        _id: post._id,
        title: post.title,
        image: post.image,
        text: post.text
      });
    }
    console.log("below is nextProps");
    console.log(nextProps);
  }

  onSubmit(e) {
    e.preventDefault();

    // const { user } = this.props.auth;

    const newPost = {
      title: this.state.title,
      image: this.state.image,
      text: this.state.text,
    };

    this.props.editPost(newPost);
    console.log("below is newPost");
    console.log(newPost);
    // this.setState({ title: '', image: '', text: ''});
    // this.props.history.push('/feed');
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    // const {post} = this.props.post;
    // console.log(this.props.post);
    const { errors } = this.state;
    // console.log(this.props);

    return (
      <div className="post-form mb-3">
        <Link to="/posts/:id" className="btn btn-light mb-3 float-left">
          Back To Post
        </Link>
        <div className="form-card card-info">
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
                type="submit"
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

EditPost.propTypes = {
  // addPost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post,
  errors: state.errors
});

export default connect(mapStateToProps, { editPost, getPost })(EditPost);