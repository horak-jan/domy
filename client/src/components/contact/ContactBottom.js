import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

export class ContactBottom extends Component {
  render() {
    return (
      <div className="contact-bottom">
        <Map
          style={{
            width: "80vw",
            height: "60vh",
            // position: "relative",
            // top: "-20px",
          }}
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
        <div className="contact-bottom-info">other info here</div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEAPIKEY,
})(ContactBottom);
