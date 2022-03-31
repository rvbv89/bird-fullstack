import axios from "axios";

const KEY = "47fqctovm0gd";

export default axios.create({
  baseURL: `https://api.ebird.org/v2/data/obs/geo/`,
  params: {
    key: KEY,
  },
});
