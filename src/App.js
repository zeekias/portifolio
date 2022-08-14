import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
