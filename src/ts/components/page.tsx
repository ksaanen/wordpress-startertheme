import React from 'react';
import ReactDOM from 'react-dom';

export interface PageInterface {
  id: Number;
  title: PageTitleInterface;
  content: PageContentInterface;
}

interface PageTitleInterface {
  rendered?: String | undefined;
}
interface PageContentInterface {
  rendered?: String | undefined;
}

function HTMLString(string) {
  return {__html: string};
}

export class Page extends React.Component<PageInterface> {

  render() {
    return (
      <div className="wp-page">
        <div className="wp-page--title">{this.props.title.rendered}</div>
        <div className="wp-page--content">
          <div dangerouslySetInnerHTML={HTMLString(this.props.content.rendered)} />
        </div>
      </div>
    );
  }
}

export default Page;