import React from 'react';
import Map from './components/Map.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false,
    }
  }

  toggleMapPage = (showMap) => {
    this.setState({ showMap })
  }

  render() {
    return (
    <div>
      <Navbar toggleMapPage={this.toggleMapPage} />
      {this.state.showMap ? <Map /> : <Home />}
    </div>
    );
  }
}
export default App;

