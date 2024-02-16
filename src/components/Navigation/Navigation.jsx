import css from './Navigation.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div>
      <header className={css.header}>
        <NavLink to="/" className={css.btn}>
          Home
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/contacts" className={css.btn}>
              Contacts
            </NavLink>
            <span className={css.userContainer}>
              <p className={css.userEmail}>some_eamil@gmail.com</p>
              <button className={css.btnLogout} type="button">
                Log out
              </button>
            </span>
          </>
        )}
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Navigation;
