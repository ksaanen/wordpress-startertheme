import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';

interface PostInterface {
  id: Number;
  author: Number;
  title: PostTitleInterface;
  content: PostContentInterface;
  exerpt?: PostExerptInterface;
}

interface PostTitleInterface {
  rendered: String
}
interface PostContentInterface {
  rendered: String
}
interface PostExerptInterface {
  rendered: String
}

class Post extends React.Component<PostInterface> {

  constructor(props:PostInterface) {
    super(props);
  }
  
  render() {
    return (
      <div key="{this.props.key}" className="wp-post">
        <div className="wp-post--id">{this.props.id}</div>
        <div className="wp-post--author">written by: {this.props.author}</div>
        <div className="wp-post--title">{this.props.title.rendered}</div>
        <div className="wp-post--content">{this.props.content.rendered}</div>
        <div className="wp-post--exerpt">{this.props.exerpt.rendered}</div>
      </div>
    );
  }
  
}

 
class Posts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let data_url = '//wordpress.ilovejs.nl/wp-json/wp/v2/posts';
    fetch(data_url)
      .then(response => response.json())
      .then(response => {
        this.setState({posts: response});
      });
    }

  render() {

    return (
      <div className="wp-posts">
        <h1>Posts</h1>
        {
          this.state.posts.map((post, index) => {
            return <Post key={index} id={post.id} author={post.author} title={post.title} content={post.content} exerpt={post.exerpt || ''} />
          })
        }
      </div>
    );
  }

}

export default Posts;