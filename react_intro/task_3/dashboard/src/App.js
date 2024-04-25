import logo from './holberton_logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt='Holberton Logo'></img>
        <p>School Dashboard</p>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type='email' id="email"></input>
        <label htmlFor="password">Password: </label>
        <input type='password' id='password'></input>
        <input type="submit" value='OK'></input>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </>
  )
}

export default App;
