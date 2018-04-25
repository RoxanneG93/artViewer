import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { editPost, getPost } from '../../actions/postActions';
import isEmpty from '../../validation/is-empty';

class EditPost extends PureComponent {
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
        title: post.title,
        image: post.image,
        text: post.text
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    // const { user } = this.props.auth;

    const newPost = {
      title: this.state.title,
      image: this.state.image,
      text: this.state.text,
    };

    this.props.dispatch(editPost(newPost));
    this.setState({ title: '', image: '', text: ''});
    this.props.history.push('/feed');
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    const {post} = this.props.post;
    console.log(this.props.post);
    const { errors } = this.state;
    // console.log(this.props);

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Edit POST</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <TextAreaFieldGroup
                  type="text"
                  name="title"
                  placeholder="title"
                  value={this.state.title}
                  onChange={(event)=>this.handleInput(event,'title')}
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
                onSubmit={this.onSubmit}
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
  editPost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  // editPost: PropTypes.func.isRequired,
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