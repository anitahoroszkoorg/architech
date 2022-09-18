import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import FormPage from "./pages/FormPage";
import { ApiProvider } from "hooks/useApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApiProvider>
        <ToastContainer />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="form" element={<FormPage />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </ThemeProvider>
  );
}

export default App;
