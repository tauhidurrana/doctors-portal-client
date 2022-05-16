import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl px-12 mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
