/* global google */
import GoogleMapReact from 'google-map-react';
import React from 'react';
import axios from 'axios';
import Modal from 'react-modal'

Modal.setAppElement('#root');

class Map extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      incidents :[],
      geoJsonData: {},
      heatmapVisible: true,
      showModal: false,
      location: {},
    }
  }
  componentDidMount() {
    this.getIncidents();
  }

  onMapClick = ({x, y, lat, lng, event}) => {
    this.setState({ showModal: true, location: { lat, lng } })
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

  handleHideModal = () => this.setState({ showModal: false, location: {} })
  getIncidents = () => {
    axios.get('https://stormy-scrubland-50043.herokuapp.com/incidents-geo')
    .then(response => {
      setTimeout(() => {
      this.setState ({geoJsonData: response.data})
      }, 1000)
    })
      .catch(error => {
        console.log(error)
    })
  }

  postIncident = () => {
    axios.post('https://stormy-scrubland-50043.herokuapp.com/incidents', 
    { location: this.state.location })
    .then(response => {
      this.handleHideModal()
      this.getIncidents();
    })
  }
  
  render() {
    const style = {
      position: 'absolute',
      top: '4rem',
      bottom: 0,
      width: '100%'
    };

    const modalStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
      <div> 
          <Modal
            isOpen={this.state.showModal}
            style={modalStyles}
          >
            <h2>Submit an Accident</h2>
            <div>{this.state.location.lat} {this.state.location.lng}</div>
            <br />
            <button onClick={this.handleHideModal}>Cancel</button>
            <button onClick={this.postIncident}>Submit</button>
          </Modal>

      { (this.state.geoJsonData && 
          this.state.geoJsonData.positions &&
          this.state.geoJsonData.positions.length > 0) ? 
        
        
        (
          <GoogleMapReact          
            ref={(el) => this._googleMap = el}          
            bootstrapURLKeys={{key: 'AIzaSyDV28j5AHP16DHoVTxHnz9QVwDSAYzUIPk'}}          
            defaultCenter={{
              lat: 34.0522,
              lng: -118.2437
            }}
            onClick={this.onMapClick}         
            style={style}
            defaultZoom={11}          
            heatmapLibrary={true}          
            heatmap={this.state.geoJsonData}       
          ></GoogleMapReact>)
       :
     
       <div><p>Waiting for data...</p></div>
      }        
      </div>
    );
  }
}

export default Map;