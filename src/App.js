import "./App.css";
import Reuseform from "./components/Reuseform";
import Googlesearch from "./components/Googlesearch";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Showinput from "./components/Showinput";
import Autocomplete from "./components/Autocomplete";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Reuseform />} />
        <Route path="Googlesearch" element={<Googlesearch />} />
        <Route path="/Showinput" element={<Showinput/>}/>
        <Route path ="/Autocomplete" element = {<Autocomplete/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
