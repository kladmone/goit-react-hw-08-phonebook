// import { AddContactForm, ContactList, Filter } from 'components';

import { Navigate, Route, Routes } from 'react-router-dom';
import Register from 'pages/Register/Register';
import Home from 'pages/HomePage/Home';
import Login from 'pages/Login/Login';
import Navigation from './components/Navigation/Navigation';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
