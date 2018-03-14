import React from 'react';
import ReactDOM from 'react-dom';
import { Page, PageInterface } from './components/page';

interface PageInterfaceProps {
  pages: Array<PageInterface>;
}

interface PagesInterface {
  pages: Array<PageInterface>;
}
 
class Pages extends React.Component<PageInterfaceProps, PagesInterface> {

  constructor(props: PageInterfaceProps) {
    super(props);

    this.state = {
      pages: this.props.pages
    };
  }

  componentDidMount() {
    let data_url = '//wordpress.ilovejs.nl/wp-json/wp/v2/pages';
    fetch(data_url)
      .then(response => response.json())
      .then(response => {
        this.setState({pages: response});
      });
    }

  render() {
    if (this.state.pages) {
      return (
        <div className="wp-pages">
          <h1>Pages</h1>
          {this.state.pages.map((page, index) => {
            return <Page key={index} id={page.id} title={page.title} content={page.content} />
          })
          }
        </div>
      );
    }

    return (
      <h1>Pages</h1>
    );
  }

}

export default Pages;