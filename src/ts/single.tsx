import React from 'react';
import ReactDOM from 'react-dom';
import { Page, PageInterface } from './components/page';

interface SingleInterface {
  page: PageInterface;
}

interface SingleInterfaceProps {
  page: PageInterface;
}
 
class Single extends React.Component<SingleInterfaceProps, SingleInterface> {

  constructor(props: SingleInterface) {
    super(props);

    this.state = {
      page: this.props.page
    }
  }

  componentDidMount() {
    let data_url = `//wordpress.ilovejs.nl/wp-json/wp/v2/pages/2`;
    fetch(data_url)
      .then(response => response.json())
      .then(response => {
        this.setState({page: response});
      });
    }

  render() {
    if (this.state.page) {
      return (
        <div className="wp-single">
          <Page id={this.state.page.id} title={this.state.page.title} content={this.state.page.content} />
        </div>
      );
    }

    return (
      <h1>Single</h1>
    );
  }

}

export default Single;