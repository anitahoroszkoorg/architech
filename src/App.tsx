import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import FormPage from "./pages/FormPage";
import Test from "pages/Test";
import PrimaryInfo from "components/Form/PrimaryInfo/PrimaryInfo";
import RemainingInfo from "components/Form/RemainingInfo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
