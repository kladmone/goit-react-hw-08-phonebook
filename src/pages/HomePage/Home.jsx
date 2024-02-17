import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';
const Home = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div>
      <div className={css.titleBox}>
        <h1 className={css.homeTitle}>Phonebook</h1>
      </div>
      {!isLoggedIn ? (
        <ul className={css.list}>
          <li>
            <NavLink to="/register" className={css.registerBtn}>
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={css.registerBtn}>
              Login
            </NavLink>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Home;
