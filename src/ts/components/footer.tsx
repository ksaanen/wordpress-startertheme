import React from 'react';
import ReactDOM from 'react-dom';

class PageFooter extends React.Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            col 1
          </div>
          <div className="col-xs-12 col-md-4">
            col 2
          </div>
          <div className="col-xs-12 col-md-4">
            col 3
          </div>
        </div>
      </footer>
    );
  }
}

export default PageFooter;