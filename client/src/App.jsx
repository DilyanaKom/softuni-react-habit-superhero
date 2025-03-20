import './css/bootstrap.min.css';
import './css/templatemo-style.css';

import { Routes, Route } from 'react-router';
import { useState } from 'react';

import Navigation from './components/navigation/Navigation';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Hero from './components/Hero';

import { NavigationProvider } from './components/navigation/NavigationContext';
import CreateChallengeForm from './components/challenges/CreateChallengeForm';
import Catalog from './components/challenges/Catalog';
import { UserContext } from './components/user/UserContext';





function App() {
  const [authData, setAuthData] = useState({});
  const userLoginHandler = (resultData) => {
    setAuthData(resultData)
  }


  return (
    <>
        <UserContext.Provider value={{...authData,userLoginHandler}}>
        <NavigationProvider>
          <Navigation />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create" element={<CreateChallengeForm/>}/>
            <Route path="/challenges" element={<Catalog/>}/>

          </Routes>
        </NavigationProvider>
        </UserContext.Provider>
    </>
  )
}

export default App
