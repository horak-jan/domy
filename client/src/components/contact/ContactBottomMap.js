import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

const mapStyle = {
  width: "100%",
  height: "100%",
  maxHeight: "350px",
};

export class ContactBottomMap extends Component {
  render() {
    return (
      <div className="contact-bottom-map">
        <Map
          style={mapStyle}
          google={this.props.google}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
          zoom={14}
        >
          <Marker
            onClick={this.onMarkerClick}
            name="Těšíme se na Vás"
            position={{ lat: this.props.lat, lng: this.props.lng }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA3LJKfQp1Y1KwAnnQRjLWNwGh7kjKWRgc",
})(ContactBottomMap);
