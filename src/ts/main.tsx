import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// Component imports
import PageHeader from './layout/header';
import PageFooter from './layout/footer';
import PageSidebar from './layout/sidebar';
import Navbar from './layout/navbar';

// Pages
import Posts from './posts';
import Pages from './pages';
import About from './about';
import Contact from './contact';
import PageNotFound from './page-not-found';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

class Main extends React.Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <PageHeader/>
          <div className="row">
            <div className="col-lg-8">
              <main>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/posts" component={Posts}/>
                  <Route path="/pages" component={Pages}/>
                  <Route path="/about" component={About}/>
                  <Route path="/contact" component={Contact}/>
                  <Route component={PageNotFound} />
                </Switch>
              </main>
            </div>
            <div className="col-lg-4">
              <PageSidebar/>
            </div>
          </div>
        </div>
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