import { ThemeProvider } from "styled-components";
import { main } from "./Theme.styled";
import ContainerLandingPage from "./Pages/LandingPage/ContainerLandingPage";
function App() {
  return (
    <ThemeProvider theme={main}>
      <ContainerLandingPage />
    </ThemeProvider>
  );
}

export default App;
