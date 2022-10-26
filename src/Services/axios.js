import axios from "axios";

axios.defaults.baseURL = "https://a-ibrahem.azq1.com/Ahruf/Dashboards/api/";

const Settings = {
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("authToken"),
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  },
};

export { Settings };
