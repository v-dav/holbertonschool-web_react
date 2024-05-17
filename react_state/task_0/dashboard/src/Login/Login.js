import React from 'react';
import './Login.css';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <body className={App_body.Appbody}>
      <p>Login to access the full dashboard</p>
      <div className="login">
        <label htmlFor="username"  className={css(App_body.label_style)}>
          Email:
          <input></input>
        </label>
        <label htmlFor="password"  className={css(App_body.label_style)}>
          Password:
          <input></input>
        </label>
        <button className={App_body.AppBodyButton}>Ok</button>
      </div>  
    </body>
  );
}

const App_body = css({
  Appbody: {
    margintop: '30px',
    marginleft: '30px',
    '@media (max-width: 900px)': {
      minHeight: 0,
      margin: 0,
    }
  },
  login: {
    textAlign: 'center',
    height: '22px',
    width: '30px',
    '@media (max-width: 900px)': {
      display: 'block'
    },
    label_style: {
      '@media (max-width: 900px)': {
        display: 'block',
    }
    },
    AppBodyButton: {
      textAlign: 'center',
      height: '22px',
      width: '30px',
      '@media (max-width: 900px)': {
        display: 'block'
      }
  }
}
    ,
  });
export default Login;       