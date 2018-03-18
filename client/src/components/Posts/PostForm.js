import React, {Component} from 'react';

class PostForm extends Component {
  static defaultProps = {
    onSubmit() {}
  }

  constructor(props) {
    super(props);
    this.state = {
      post: {
        image: '',
        description: ''
      }

    }
  }

  render() {
    const {post} = this.state;
    const {onSubmit, errorMessage} = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(post);
        this.setState({post: ''});
      }}>
        {errorMessage ?
            <div className="alert alert-danger">{errorMessage}</div> :
            undefined}
        <textarea
          className="form-control"
          row="3"
          value={post}
          onChange={(e) => this.setState({[post.description]: e.target.value})}
        >
        </textarea>
        <button
          type="submit"
          className="btn btn-success pull-right"
          style={{marginTop: '10px'}}
        >
          Add to my gallery!
        </button>
      </form>
    );
  }
}

export default PostForm;