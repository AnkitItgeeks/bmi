import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
