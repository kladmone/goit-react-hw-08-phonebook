// import { AddContactForm, ContactList, Filter } from 'components';

import { Navigate, Route, Routes } from 'react-router-dom';
import Register from 'pages/Register/Register';
import Home from 'pages/HomePage/Home';
import Login from 'pages/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Contacts from 'pages/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiRefreshUser } from './redux/auth/authSlice';
import { PrivateRoute, RestrictedRoute } from 'components';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <Register />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
