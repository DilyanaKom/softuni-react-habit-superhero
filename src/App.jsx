import './css/bootstrap.min.css';
import './css/templatemo-style.css';

import { BrowserRouter, Routes, Route } from 'react-router';

import Navigation from './components/navigation/Navigation';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Hero from './components/Hero';

import { NavigationProvider } from './components/navigation/NavigationContext';




function App() {


  return (
    <>
      <BrowserRouter>
        <NavigationProvider>
          <Navigation />
          <Hero />
          <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>

          </Routes>


        </NavigationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
