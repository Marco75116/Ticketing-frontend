import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers";
import Routes from "./Routes";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
