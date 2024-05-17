import React from 'react'
import logo from '../assets/Holberton_Logo.jpg'
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
  return (
    <header className={css(AppHeader)}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

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
