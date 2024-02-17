import css from './Navigation.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';
import { UserMenu } from 'components';

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
            <span className={css.userBox}>
              <UserMenu />
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
