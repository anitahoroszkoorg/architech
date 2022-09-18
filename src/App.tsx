import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import FormPage from "./pages/FormPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiContext, context } from "hooks/ApiContext";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApiContext.Provider value={context}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="form" element={<FormPage />} />
          </Routes>
        </BrowserRouter>
      </ApiContext.Provider>
    </ThemeProvider>
  );
}

export default App;
