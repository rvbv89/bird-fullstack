const express = require("express");
const axios = require("axios");
// const { json } = require("express/lib/response");
const app = express();
const cors = require("cors");
// const api_url = "https://api.unsplash.com/search/photos?page=1&query=bird"
app.use(cors());

const PORT = 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

console.log("server is running");

// const axiosInstance = axios.create({
//   baseURL: 'https://api.unsplash.com',
//   headers: {"Authorization":"GVPDbDdKZe9uvSf5CPNjJ83BuhDEwWxQ6WDT50hiyd8",
//   "Access-Control-Allow-Origin": "*"
// }
// })

//***Create Route for Mapbox token */

app.get("/pop/:lat/:lng", async (req, res) => {
  const lat = req.params.lat;
  // lat = lat.substring(1);
  const lng = req.params.lng;
  console.log(lat)
  try {
    const response = await axios.get(
      `https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${lng}`,
      {
        headers: {
          "x-ebirdapitoken": "47fqctovm0gd",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const data = response.data;
    res.send(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
});

app.get("/photo/:comname", async (req, res) => {
  const comname = req.params.comname;
  console.log(comname)
  try {
    const response = await axios.get(
      `https://ebird.org/species/${comname}/`,
   
    );
    
    console.log(response)
    // res.send(JSON.stringify(data));
    // const data = response.data;
    // console.log(data);
  } catch (error) {
    console.log(error.response.status);
  }
});
