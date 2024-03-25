
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotSignIn from "./pages/NotSignIn";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import HomeSignIn from "./pages/HomeSignIn";

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/demo-deploy"  element={<NotSignIn />}/>
                  <Route path="/demo-deploy/login"  element={<SignIn />}/>
                  <Route path="/demo-deploy/profile"  element={<Profile />}/>
                  <Route path="/demo-deploy/home"  element={<HomeSignIn />}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
