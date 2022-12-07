import { ThemeProvider } from "styled-components";
import { main } from "./Theme.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContainerLandingPage from "./Pages/LandingPage/ContainerLandingPage";
import ContainerApp from "./Pages/App/ContainerApp";
function App() {
  return (
    <ThemeProvider theme={main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContainerLandingPage />} />
          <Route path="/app" element={<ContainerApp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
