import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/authSlice';
import css from './UserMenu.module.css';
import { selectAuthUserData } from '../../redux/auth/authSlice.selectors';
const UserMenu = () => {
  const userData = useSelector(selectAuthUserData);

  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(apiLogoutUser);
  return (
    <div className={css.userContainer}>
      <p className={css.userEmail}>{userData.email}</p>
      <button className={css.logOutBtn} onClick={handleLogOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
