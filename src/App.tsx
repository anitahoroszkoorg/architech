import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import FormPage from "./pages/FormPage";
import UserPage from "./pages/UserPage";
import UpdateUser from "./components/User/UpdateUser";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="users/:userId" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
