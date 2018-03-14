import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// Component imports
import PageHeader from './layout/header';
import PageFooter from './layout/footer';
import PageSidebar from './layout/sidebar';

// Pages
import Posts from './posts';
import Pages from './pages';
import About from './about';
import PageNotFound from './page-not-found';

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
                <li><Link to="/pages">Pages</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul> 
              <hr/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/pages" component={Pages}/>
                <Route path="/about" component={About}/>
                <Route component={PageNotFound} />
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