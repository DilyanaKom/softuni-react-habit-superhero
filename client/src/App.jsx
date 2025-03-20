import './css/bootstrap.min.css';
import './css/templatemo-style.css';

import { Routes, Route } from 'react-router';

import Navigation from './components/navigation/Navigation';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Hero from './components/Hero';

import { NavigationProvider } from './components/navigation/NavigationContext';
import CreateChallengeForm from './components/challenges/CreateChallengeForm';
import Catalog from './components/challenges/Catalog';




function App() {


  return (
    <>
   
        <NavigationProvider>
          <Navigation />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/challenges/create" element={<CreateChallengeForm/>}/>
            <Route path="/challenges" element={<Catalog/>}/>

          </Routes>
        </NavigationProvider>
     
    </>
  )
}

export default App
