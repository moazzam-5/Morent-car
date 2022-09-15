import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import { Route, Routes } from 'react-router-dom';
import Car from "./Pages/CarDetails/Car";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="car" element={<Car />} />
    </Routes>
  );
}

export default App;
