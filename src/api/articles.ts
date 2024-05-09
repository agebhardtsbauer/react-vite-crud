import axios from "axios";

// Create an instance of axios to use in the app
export default axios.create({
  baseURL: "https://localhost:3007",
});
