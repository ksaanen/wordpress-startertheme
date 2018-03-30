import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';

interface MenuItemInterface {
  title: String;
  url: String;
  post_name: String;
}

interface MainMenuInterfaceProps {
  items?: Array<MenuItemInterface>;
}

interface MainMenuInterface {
  items?: Array<MenuItemInterface>;
}

class MainMenu extends React.Component<MainMenuInterfaceProps, MainMenuInterface> {

  constructor(props: MainMenuInterfaceProps) {
    super(props);

    this.state = {
      items: this.props.items
    };
  }

  filterURL(url, filter) {
    return url.replace("filter", '');
  }

  componentDidMount() {
    let data_url = '//wordpress.ilovejs.nl/wp-json/header/menu';
    fetch(data_url)
      .then(response => response.json())
      .then(response => {
        this.setState({items: response});
      });
    }
  
  render() {
    if (!this.state.items) {
      return <ul></ul>
    }
    return (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {
          this.state.items.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <Link className="nav-link" to="{${item.title}}">{item.title}</Link>
              </li>
            );
          })
        }
      </ul>
    );
  }

}

export default MainMenu;