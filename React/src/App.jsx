import './assets/Style/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout'
import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Crew from './pages/Crew';
import Nopage from './pages/Nopage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<Nopage />} />
      </Route> 
    </Routes>
  </BrowserRouter>
  )
}

export default App
