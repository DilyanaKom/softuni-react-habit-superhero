import './css/bootstrap.min.css';
import './css/templatemo-style.css';

import { BrowserRouter, Routes, Route } from 'react-router';

import Navigation from './components/navigation/Navigation';
import Register from './components/user/Register';

import { NavigationProvider } from './components/navigation/NavigationContext';


function App() {


  return (
    <>
      <BrowserRouter>
        <NavigationProvider>
          <Navigation />
          <Routes>
            <Route path="/register" element={<Register/>}/>

          </Routes>

        </NavigationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
