import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Component imports
import PageHeader from './components/header';
import PageFooter from './components/footer';
import PageSidebar from './components/sidebar';

// Pages
import Posts from './posts';
import About from './about';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';



const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Main = () => (
  <div className="container">

    <PageHeader/>

    <main>

      <Router>
        <div>
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
        </div>
      </Router>

    </main>

    <PageSidebar/>

    <PageFooter/>
    
  </div>
);

export default Main;

ReactDOM.render(<Main/>, document.getElementById('root'));