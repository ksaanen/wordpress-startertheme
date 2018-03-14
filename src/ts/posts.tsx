import React from 'react';
import ReactDOM from 'react-dom';

interface PostInterface {
  id: Number;
  author: Number;
  title: PostTitleInterface;
  content: PostContentInterface;
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

function HTMLString(string) {
  return {__html: string};
}

class Post extends React.Component<PostInterface> {

  constructor(props: PostInterface) {
    super(props);
  }
  
  render() {

    return (
      <div key="{this.props.key}" className="wp-post">
        <div className="wp-post--id">{this.props.id}</div>
        <div className="wp-post--author">written by: {this.props.author}</div>
        <div className="wp-post--title">{this.props.title.rendered}</div>
        <div className="wp-post--content">
          <div dangerouslySetInnerHTML={HTMLString(this.props.content.rendered)} />
        </div>
      </div>
    );
  }
}

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