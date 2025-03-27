import './css/bootstrap.min.css';
import './css/templatemo-style.css';

import { Routes, Route } from 'react-router';

import Navigation from './components/navigation/Navigation';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Hero from './components/Hero';
import CreateChallengeForm from './components/challenges/CreateChallengeForm';
import Catalog from './components/challenges/Catalog';

import { UserContext } from './components/user/UserContext';
import { NavigationProvider } from './components/navigation/NavigationContext';
import useLocalStorage from './hooks/useLocalStorage';
import Logout from './components/user/Logout';
import Profile from './components/userProfile/Profile';
import ChallengeDetails from './components/challenges/ChallengeDetails';
import EditChallenge from './components/challenges/EditChallenge';
import DeleteChallenge from './components/challenges/DeleteChallenge';






function App() {
  const [authData, setAuthData] = useLocalStorage('auth', {});

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
            <Route path="/challenges/:challengeId/details" element={<ChallengeDetails/>}/>
            <Route path="/challenges/:challengeId/edit" element={<EditChallenge/>}/>
            <Route path="/challenges/:challengeId/delete" element={<DeleteChallenge/>}/>
            {/* <Route path="/challenges/:challengeId/join" element={<JoinChallenge/>}/> */}
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/profile" element={<Profile/>}/>

          </Routes>
        </NavigationProvider>
        </UserContext.Provider>
    </>
  )
}

export default App
