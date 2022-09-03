import { Navigate, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import HeaderComponent from './components/Header/HeaderComponent';
import About from './pages/About';
import ContactSales from './pages/ContactSales';
import Enterprise from './pages/Enterprise';
import Features from './pages/Features';
import Home from './pages/Home';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Signup from './pages/Signup';

function App() {
  return (
    <div className={classes.app}>
      <HeaderComponent />
      
      <Routes>
        <Route exact path='/' element={<Navigate to='/home' />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/features' element={<Features />}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/enterprise' element={<Enterprise />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/contact' element={<ContactSales />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>

    </div>
  );
}

export default App;
