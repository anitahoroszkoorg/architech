const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
<<<<<<< HEAD
    : process.env.REACT_APP_API_URL;
=======
    : "https://backend-dot-architech-362918.lm.r.appspot.com";
>>>>>>> master
const imageGrid =
  "https://storage.googleapis.com/architech-static/imagegrid.png";
const logo = "https://storage.googleapis.com/architech-static/logo.png";
const form = "https://storage.googleapis.com/architech-static/form.jpg";
export { baseURL, imageGrid, logo, form };
