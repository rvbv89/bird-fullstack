import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Grid } from "semantic-ui-react";
import Pop from "./Pop";
import Table from "./Table";
import Spinner from "./Spinner";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);

  const successHandler = (position) => {
    setLat(position.coords.latitude.toFixed(2));
    setLng(position.coords.longitude.toFixed(2));
  };

  const errorHandler = (error) => console.error(error.message);

  function getUserLocation() {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    console.log("getloc");
  }

  useEffect(() => {
    getUserLocation();
  }, [lat, lng]);

  function onClickProp(e) {
    const ebird_url = `http://localhost:5000/pop/${lat}/${lng}`;
    async function fetchData() {
      setLoading(true);
      let res = await axios(ebird_url);
      setData(res.data);
      setLoading(false);
      console.log(res.data);
    }
    fetchData();
  }

  return (
    <div className="App">
      <div class="ui container">
      <header className="header-container">
        <h1 className="ui header">Bird Watcher</h1>
      </header>
      <div className="ui divider" />
      <Grid className="grid" centered columns="1" padded="horizontally">
        <Grid.Row>
          <Pop
            className="form-item"
            lng={lng}
            lat={lat}
            onClickProp={onClickProp}
          />
        </Grid.Row>
        <Grid.Row>
          {loading === true ? (
            <Spinner />
          ) : (
            <Grid.Column>
              <Table initData={data} />
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
      </div>
    </div>
  );
}

export default App;
