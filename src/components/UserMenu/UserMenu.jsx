import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/authSlice';
import css from './UserMenu.module.css';
import {
  selectAuthIsLoading,
  selectAuthUserData,
} from '../../redux/auth/authSlice.selectors';
const UserMenu = () => {
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(apiLogoutUser());
  };
  return (
    <div className={css.userContainer}>
      <p className={css.userEmail}>{userData.email}</p>
      <button
        className={css.logOutBtn}
        onClick={handleLogOut}
        disabled={isLoading}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
