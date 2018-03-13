import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';

interface PostInterface {
  id: any;
  author: any;
  title: any;
  content: any;
  exerpt: any;
}

class Post extends React.Component<PostInterface> {

  constructor(props:PostInterface) {
    super(props);
  }
  
  render() {
    return (
      <div className="wp-post">
        {JSON.stringify(this.props)}
        <div className="wp-post--id">{this.props.id}</div>
        <div className="wp-post--author">{this.props.author}</div>
        <div className="wp-post--title">{this.props.title}</div>
        <div className="wp-post--content">{this.props.content}</div>
        <div className="wp-post--exerpt">{this.props.exerpt}</div>
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
          // this.state.posts.map((post, index) => {
          //   return <Post key="{index}" id="{post.id}" author="{post.author}" title="{post.title}" content="{post.content}" exerpt="{post.exerpt}" />
          // })
        }
      </div>
    );
  }

}

export default Posts;