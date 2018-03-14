import React from 'react';
import ReactDOM from 'react-dom';

export interface PostInterface {
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

export class Post extends React.Component<PostInterface> {

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

export default Post;