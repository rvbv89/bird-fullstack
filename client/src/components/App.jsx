import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Grid } from "semantic-ui-react";
import Pop from "./Pop";
import axios from "axios";
import BasicTable from "./BasicTable";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);
  const [mapLat, setMapLat] = useState(0.0);
  const [mapLng, setMapLng] = useState(0.0);
  const [zoom, setZoom] = useState(0);

  const successHandler = (position) => {
    setLat(position.coords.latitude.toFixed(2));
    setLng(position.coords.longitude.toFixed(2));
  };

  const errorHandler = (error) => console.error(error.message);

  navigator.geolocation.getCurrentPosition(successHandler, errorHandler);

  // navigator.geolocation.getCurrentPosition(successHandler, errorHandler);

  mapboxgl.accessToken =
    "pk.eyJ1IjoicnZidjg5IiwiYSI6ImNrcnAzaGo1ZTNhNXoybm8ybDVkcHZyZHAifQ.d5BrmqfSkZZyeiU0rsLlNw";
  //Hook to instantiate map
  //Yay...I Did It!!
  useEffect(() => {
    if (lat === 0.0 && map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 9.0,
    });
  }, [lng, lat]);

  //set coordinates for map
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      console.log(mapLat);
      setMapLng(map.current.getCenter().lng);
      setMapLat(map.current.getCenter().lat);
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  const ebird_url = `http://localhost:5000/pop/${lat}/${lng}`;

  function onClickProp(e) {
    async function fetchData() {
      let res = await axios(ebird_url);
      setData(res.data);
    }
    fetchData();
  }

  return (
    <div className="App">
      <header className="header-container">
        <h1 className="ui header">Bird Tracker</h1>
      </header>
      <div className="ui divider" />
      <div className="main-container">
        <Grid className="grid" columns="two">
          <Grid.Row>
            <Pop
              className="form-item"
              lng={lng}
              lat={lat}
              onClickProp={onClickProp}
            />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <BasicTable initData={data} />
            </Grid.Column>
            <Grid.Column>
              <div className="map-wrapper">
                <div className="sidebar">
                  Longitude: {mapLng} | Latitude: {mapLat} | Zoom: {zoom}
                </div>
                <div ref={mapContainer} className="map-container" />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default App;
