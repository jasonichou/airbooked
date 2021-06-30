import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// import L from 'leaflet';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

class Map extends Component {

  selectedCity = this.props.match.params.city;

  state = {
    loading: true,
    position: cityLatLngZoomDict[this.selectedCity],
    listings: null
  }

  // API call after initial render
  async componentDidMount() {
    const cityFormatted = this.selectedCity.replaceAll('-', '_')
    const cityUrl = `http://localhost:3000/api/city/${cityFormatted}_listing`
    const response = await fetch(cityUrl);
    const data = await response.json()
    this.state.loading = !this.state.loading
    this.setState({ listings: data });

    console.log(this.state.listings);
  }

  // ** Main render block ** //
  render() {
    return (
      // * Using react-leaflet *
      <div>
        {/*  passing route params from App.js  */}
        <div><h2>{this.props.match.params.city}</h2></div>

        {/* Main map container */}
        <div>
          <MapContainer
            className="map"
            center={[this.state.position[0], this.state.position[1]]}
            zoom={this.state.position[2]}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
              url="https://api.mapbox.com/styles/v1/airbookedproject/ckq9ces7g1pis19q0vg49e62t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWlyYm9va2VkcHJvamVjdCIsImEiOiJja29xcjZnc2swZ3oxMnZvZTlvNnk2eDN1In0.5gutbKittzcsshbrSIlnIQ"
            />

            {/* Mapping listing locations as markers after loading */}
            {
              !this.state.loading && this.state.listings.map((listing, idx) =>
                <CircleMarker
                  key={idx}
                  center={[listing.latitude, listing.longitude]}
                  radius={1}
                >
                  <Popup>
                    <div>{listing.name}</div>
                    <div>Price: {listing.price}</div>
                    <div>Reviews: {listing.number_of_reviews}</div>
                    <div>Reviews/Month: {listing.reviews_per_month}</div>
                  </Popup>
                </CircleMarker>
              )
            }

            {/* Test marker with prop passed from App state */}
            {/* <CircleMarker center={[this.props.position.lat, this.props.position.lng]} radius={2}>
          </CircleMarker> */}

          </MapContainer>
        </div>
      </div>
    )
  }
}

let cityLatLngZoomDict = {
  "san-francisco": [37.755, -122.453, 13],
  "santa-clara-county": [37.371, -122.037, 11],
  "asheville": [35.5900461, -82.5635125,13]
}

export default withRouter(Map);