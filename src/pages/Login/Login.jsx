import css from '../Login/Login.module.css';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(apiLoginUser(formData));
  };

  return (
    <div className={css.main}>
      <div className={css.registerContainer}>
        <h1 className={css.signUpTitle}>Log In</h1>

        <form onSubmit={onSubmit}>
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
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
