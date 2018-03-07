import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface PostInterface {
  id: Number;
  author: Number; // TODO: Get author by ID
  title: string;
  content: string;
  exerpt: string;
}

class Post extends React.Component<PostInterface> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-class="wp-post">
        <div>id: {this.props.id}</div>
        <div>author: {this.props.author}</div>
        <div>title: {this.props.title}</div>
        <div>content: {this.props.content}</div>
        <div>exerpt: {this.props.exerpt}</div>
      </div>
    );
  }
}
 
class Posts extends React.Component {

  // TODO: Make loop trough posts with axios;

  render() {
    return <h3>Posts</h3>
  } 
}

export default Posts;

ReactDOM.render(<Posts/>, document.getElementById('root'));