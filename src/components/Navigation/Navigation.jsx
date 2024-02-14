import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink to="/" className={css.btn}>
          Home
        </NavLink>
        {/* {isLoggedin && ( */}
        <>
          <NavLink to="/contacts" className={css.btn}>
            Contacts
          </NavLink>
          <span className={css.user_box}>
            {/* <p className={css.user_email}>{userEmail}</p> */}
            <button
              className={css.btn_logout}
              // onClick={handleLogOut}
              // disabled={isLoading}
              type="button"
            >
              Log out
            </button>
          </span>
        </>
        {/* )} */}
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
