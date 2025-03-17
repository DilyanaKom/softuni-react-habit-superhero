import './css/bootstrap.min.css';
import './css/templatemo-style.css';

import { BrowserRouter, Routes, Route } from 'react-router';

import Navigation from './components/navigation/Navigation';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Hero from './components/Hero';

import { NavigationProvider } from './components/navigation/NavigationContext';
import CreateChallenge from './components/challenges/CreateChallenge';




function App() {


  return (
    <>
   
        <NavigationProvider>
          <Navigation />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/challenges/create" element={<CreateChallenge/>}/>
          </Routes>
        </NavigationProvider>
     
    </>
  )
}

export default App
