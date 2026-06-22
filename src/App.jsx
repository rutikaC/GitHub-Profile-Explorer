import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import UserCard from "./components/UserCard";

function App() {
  
  return (
    
  <>

    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/favorites" element={<Favorites />} />
       
      </Routes>
  </>
  );
}

export default App;
