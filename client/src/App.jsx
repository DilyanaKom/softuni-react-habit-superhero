import './css/bootstrap.min.css';
import './css/templatemo-style.css';

import { Routes, Route } from 'react-router';

import Navigation from './components/navigation/Navigation';
import Register from './components/user/Register';
import Login from './components/user/Login';
import CreateChallengeForm from './components/challenges/CreateChallengeForm';
import Catalog from './components/challenges/Catalog';
import Logout from './components/user/Logout';
import Profile from './components/userProfile/Profile';
import ChallengeDetails from './components/challenges/ChallengeDetails';
import EditChallenge from './components/challenges/EditChallenge';
import DeleteChallenge from './components/challenges/DeleteChallenge';
import GuardedRoute from './components/guards/GuardedRoute';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

import { UserContext } from './components/user/UserContext';
import { NavigationProvider } from './components/navigation/NavigationContext';

import useLocalStorage from './hooks/useLocalStorage';
import ErrorBoundary from './components/errors/ErrorBoundary';







function App() {
  const [authData, setAuthData] = useLocalStorage('auth', {});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData)
  }


  return (
    <>
    <ErrorBoundary>
      <UserContext.Provider value={{ ...authData, userLoginHandler }}>
        <NavigationProvider>
          <Navigation />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/challenges" element={<Catalog />} />
            <Route path="/challenges/:challengeId/details" element={<ChallengeDetails />} />
            <Route element={<GuardedRoute/>}>
              <Route path="/create" element={<CreateChallengeForm />} />
              <Route path="/challenges/:challengeId/edit" element={<EditChallenge />} />
              <Route path="/challenges/:challengeId/delete" element={<DeleteChallenge />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
          <Footer/>
        </NavigationProvider>
      </UserContext.Provider>
      </ErrorBoundary>
    </>
  )
}

export default App
