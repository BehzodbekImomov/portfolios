import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeP from "./pages/HomeP";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeP />} />




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
