const baseURL =
  process.env.NODE_ENV === "development"
    ? "https://europe-central2-architech-362918.cloudfunctions.net"
    : process.env.REACT_APP_API_URL;
const imageGrid =
  "https://storage.googleapis.com/architech-static/imagegrid.png";
const logo = "https://storage.googleapis.com/architech-static/logo.png";
const form = "https://storage.googleapis.com/architech-static/form.jpg";
export { baseURL, imageGrid, logo, form };
