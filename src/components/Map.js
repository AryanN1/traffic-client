/* global google */
import GoogleMapReact from 'google-map-react';
import React from 'react';
import axios from 'axios';

class Map extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      incidents :[],
      geoJsonData: {},
      heatmapVisible: false
    }
  }
  componentDidMount() {
    axios.get('https://stormy-scrubland-50043.herokuapp.com/incidents')
    .then(response => {
      this.setState ({incidents: response.data})
      console.log(this.state.incidents);
    })
    .catch(error => {
	    console.log(error)
    })

    axios.get('https://stormy-scrubland-50043.herokuapp.com/incidents-geo')
    .then(response => {
      this.setState ({geoJsonData: response.data})
      console.log(this.state.geoJsonData);
      
    })
    .catch(error => {
	    console.log(error)
    })
  }

 
  onMapClick({x, y, lat, lng, event}) {
    console.log(this._googleMap)
    if (this._googleMap !== undefined && this._googleMap.heatmap && this._googleMap.heatmap.data) {
      const point = new google.maps.LatLng(lat, lng)
      this._googleMap.heatmap.data.push(point)
     // this.toggleHeatMap()
    }
  }

  toggleHeatMap() {
    this.setState({
      heatmapVisible: !this.state.heatmapVisible
    }, () => {      
      if (this._googleMap !== undefined) {       
        this._googleMap.heatmap.setMap(this.state.heatmapVisible ?
          this._googleMap.map_ : null)      
      }          
    })
  }

  render() {
    const style = {
      position: 'absolute',
      top: '4rem',
      bottom: 0,
      width: '100%'
    };

    return (
      <GoogleMapReact          
        ref={(el) => this._googleMap = el}          
        bootstrapURLKeys={{key: 'AIzaSyDV28j5AHP16DHoVTxHnz9QVwDSAYzUIPk'}}          
        defaultCenter={{
          lat: 34.0522,
          lng: -118.2437
        }}         
        style={style}
        defaultZoom={11}          
        heatmapLibrary={true}          
        heatmap={this.state.geoJsonData}          
        onClick={this.onMapClick.bind(this)} 
      ></GoogleMapReact>
    );
  }
}

export default Map;