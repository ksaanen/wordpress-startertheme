import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// Component imports
import PageHeader from './components/header';
import PageFooter from './components/footer';
import PageSidebar from './components/sidebar';

// Pages
import Posts from './posts';
import About from './about';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class Main extends React.Component {

  render() {
    return (
      <div className="container">
        <PageHeader/>
          <main>
          
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul> 
              <hr/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/about" component={About}/>
              </Switch>
            
          </main>
        <PageSidebar/>
        <PageFooter/>
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
), document.getElementById('root'));

export default Main;