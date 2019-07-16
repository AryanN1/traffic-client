import React from 'react';
import Map from './components/Map.js';
import Navbar from './components/Navbar';


class App extends React.Component {
  render() {
    return (
    <div>
      <Navbar/>
      <Map/>
      </div>
    );
  }
}
export default App;

