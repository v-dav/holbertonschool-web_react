import React from 'react'
import logo from '../assets/Holberton_Logo.jpg'
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

export default function Header() {
  return (
    <Fragment>
    <header className={css(AppHeader)}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </header>
    {value.user.isLogin && (
      <section>
        <h1>Welcome {value.user.email} <a className={css(style.italic)} onClick={value.logOut}>(logout)</a> </h1>
      </section>
    )}
    </Fragment>
  );
}
Header.contextType = AppContext;

const AppHeader = css({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white'
});
