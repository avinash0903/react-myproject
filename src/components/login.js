import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import Home from './home';

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    emailValid: true,
    passwordValid: true
  });
  const history = useHistory();
  const [error, setError] = useState({ email: '', password: '' });

  // state update
  const handleLoginForm = e => {
    checkValidity(e.target.name, e.target.inputValue);
    setLoginForm({ ...loginForm, [e.target.name]: e.target.inputValue });
  };
  // validation function
  const checkValidity = (inputName, inputValue) => {
    switch (inputName) {
      case 'email':
        let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        loginForm.emailValid = pattern.test(inputValue);
        break;
      case 'password':
        loginForm.passwordValid = inputValue.length >= 6;
        console.log(loginForm.passwordValid);
        break;
      default:
        break;
    }
  };

  const onSubmitLoginForm = () => {
    // if (loginForm.emailValid && loginForm.passwordValid) {
    //   setLoginForm({ emailValid: true, passwordValid: true });
    // }
    ReactDOM.render(<Home />, document.getElementById('root'));
    if (!loginForm.emailValid) {
      setError({ ...error, email: 'Invalid Email Address' });
    }
    if (!loginForm.passwordValid) {
      setError({
        ...error,
        password: 'Password must be at least six characters long'
      });
    }
  };

  return (
    <div>
      <form action="#" className="login-form">
        {error.email && (
          <div className="alert alert-danger">
            <p> {error.email}</p>
          </div>
        )}

        {error.password && (
          <div className="alert alert-danger">
            <p> {error.password}</p>
          </div>
        )}
        <h1 className="text-center">Welcome to Login Page</h1>
        <div className="text-center">
          <label className="">Email</label>
          <input
            className="ml-5"
            type="text"
            onChange={e => handleLoginForm(e)}
            inputvalue={loginForm.email}
          />
        </div>
        <div className="mt-10 text-center">
          <label>Password</label>
          <input
            className="ml-5"
            type="password"
            onChange={e => handleLoginForm(e)}
            inputvalue={loginForm.password}
          />
        </div>

        <div className="text-center mt-10">
          <button type="submit" onClick={onSubmitLoginForm}>
            submit
          </button>
        </div>
        <NavLink to="/home">home</NavLink>
      </form>
    </div>
  );
}
export default Login;
