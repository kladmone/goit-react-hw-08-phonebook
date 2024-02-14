import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
const Home = () => {
  return (
    <div>
      <h1 className={css.homeTitle}>
        Phonebook store your contacts in a convenient place
      </h1>
      <>
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
          <li>
            <NavLink to="/contacts" className={css.contacts}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </>
    </div>
  );
};

export default Home;
