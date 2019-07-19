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
      heatmapVisible: true
    }
  }
  componentDidMount() {
    axios.get('https://stormy-scrubland-50043.herokuapp.com/incidents')
    .then(response => {
      setTimeout(() => {
        this.setState ({incidents: response.data})
        console.log(this.state.incidents);
      }, 1000)
      
    })
    .catch(error => {
        console.log(error)
    })
    axios.get('https://stormy-scrubland-50043.herokuapp.com/incidents-geo')
    .then(response => {
      setTimeout(() => {
      this.setState ({geoJsonData: response.data})
      console.log(this.state.geoJsonData);
      }, 1000)
      
      
    })
    .catch(error => {
        console.log(error)
    })
  }
 
  onMapClick({x, y, lat, lng, event}) {
    console.log(this._googleMap)
    if (this._googleMap !== undefined && this._googleMap.heatmap && this._googleMap.heatmap.data) {
      console.log('setting data')
      const point = new google.maps.LatLng(lat, lng)
      this._googleMap.heatmap.data.push(point)
      this.toggleHeatMap()
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
      <div> 
       { (this.state.geoJsonData && 
          this.state.geoJsonData.positions &&
          this.state.geoJsonData.positions.length > 0) ? 
        
 
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
      ></GoogleMapReact>
       :
     
       <div><p>Waiting for data...</p></div>
      }
      
      </div>
    );
  }
}
export default Map;