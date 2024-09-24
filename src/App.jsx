import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./screens/HomeScreen";
import { PlaygroundScreen } from "./screens/PlaygroundScreen";
import PlaygroundProvider from "./Providers/PlaygroundProvider";
import ModalProvider from "./Providers/ModalProvider";

function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/playground" element={<PlaygroundScreen />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;
