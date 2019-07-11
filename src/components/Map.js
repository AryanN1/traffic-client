import ReactMapboxGl from 'react-mapbox-gl';
import React from 'react';
import axios from 'axios';

const MapBox = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYW5haW1pIiwiYSI6ImNqeGpwNHRsYjB1Nnozb3FwajBsZ2g2cnMifQ.w1kfsRpnsBM4JNacrxaWiQ',
});

class Map extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      incidents :[]
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/incidents')
    .then(response => {
      this.setState ({incidents: response.data})
      console.log(this.state.incidents);
    })
    .catch(error => {
	    console.log(error)
    })
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return (
      <MapBox
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={style}
        center={[ -118.2437 ,34.0522 ]} 
      />
    );
  }
}


export default Map;