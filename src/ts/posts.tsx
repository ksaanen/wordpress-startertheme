import React from 'react';
import ReactDOM from 'react-dom';
import { Post, PostInterface } from './components/post';

interface PostsInterfaceProps {
  posts: Array<PostInterface>;
  hasError: Boolean;
}

interface PostsInterface {
  posts: Array<PostInterface>;
}
 
class Posts extends React.Component<PostsInterfaceProps, PostsInterface> {

  constructor(props: PostsInterfaceProps) {
    super(props);

    this.state = {
      posts: this.props.posts
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
    if (this.state.posts) {
      return (
        <div className="wp-posts">
          <h1>Posts</h1>
          {this.state.posts.map((post, index) => {
            return <Post key={index} id={post.id} author={post.author} title={post.title} content={post.content} />
          })
          }
        </div>
      );
    }

    return (
      <h1>Posts</h1>
    );
  }

}

export default Posts;