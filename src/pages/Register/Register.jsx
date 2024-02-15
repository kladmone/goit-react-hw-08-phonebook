import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/auth/authSlice';
import css from '../Register/Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(apiRegisterUser(formData));
  };

  return (
    <div className={css.main}>
      <div className={css.registerContainer}>
        <h1 className={css.signUpTitle}>Sign Up</h1>

        <form onSubmit={onSubmit}>
          <label className={css.signUpLabel}>
            Name:
            <input
              className={css.input}
              type="text"
              name="userName"
              placeholder="First name"
              minLength={2}
              required
            />
          </label>
          <label className={css.signUpLabel}>
            Email:
            <input
              className={css.input}
              type="email"
              name="userEmail"
              placeholder="your_email@gmail.com"
              required
            />
          </label>
          <label className={css.signUpLabel}>
            Password:
            <input
              className={css.input}
              type="password"
              placeholder="Password"
              name="userPassword"
              minLength={8}
              required
            />
          </label>
          <button className={css.signUpBtn} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
