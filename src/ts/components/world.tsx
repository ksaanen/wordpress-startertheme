import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
class World extends React.Component {
  render() {
    return <h1>World</h1>
  }
}

export default World;
 
ReactDOM.render(<World/>, document.getElementById('world'));