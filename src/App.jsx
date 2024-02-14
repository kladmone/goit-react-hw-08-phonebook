// import { AddContactForm, ContactList, Filter } from 'components';
import { Navigation } from 'components';
import { Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Home from 'pages/HomePage/Home';
import Login from 'pages/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
