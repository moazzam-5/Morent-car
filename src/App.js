import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
}

export default App;
