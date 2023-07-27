import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './componants/layout/Landing';
import Navbar from './componants/layout/Navbar';
import Register from './componants/auth/Register';
import Login from './componants/auth/Login';
import Alert from './componants/layout/Alert';
import Dashboard from './componants/dashboard/Dashboard';
import PrivateRoute from './componants/routing/PrivateRoute';
import CreateProfile from './componants/profile-forms/CreateProfile';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import EditProfile from './componants/profile-forms/EditProfile';
import AddExperience from './componants/profile-forms/AddExperience';
import AddEducation from './componants/profile-forms/AddEducation';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              Component={Landing}
            />
          </Routes>
          <section className="container">
            <Alert />
            <Routes>
              <Route
                exact
                path="/register"
                Component={Register}
              />
              <Route
                exact
                path="/login"
                Component={Login}
              />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/create-profile"
                element={
                  <PrivateRoute>
                    <CreateProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit-profile"
                element={
                  <PrivateRoute>
                    <EditProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-experience"
                element={
                  <PrivateRoute>
                    <AddExperience />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-education"
                element={
                  <PrivateRoute>
                    <AddEducation />
                  </PrivateRoute>
                }
              />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
