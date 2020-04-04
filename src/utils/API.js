import axios from "axios";

export default axios.create({
  baseURL: "https://wger.de/api/v2/equipment/",
  APIKey: "33366c925297d66a5cfe90a003faa973f52d872e",
  responseType: "json"
});