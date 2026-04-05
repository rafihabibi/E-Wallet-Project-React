import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Register from './pages/Register.jsx';
import LandingPages from './pages/LandingPages.jsx';



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<LandingPages/>}/>
      </Routes> 
      </BrowserRouter>
    </>
    
);}

export default App;
