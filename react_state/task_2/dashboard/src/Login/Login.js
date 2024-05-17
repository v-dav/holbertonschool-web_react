import React from 'react';
import './Login.css';
import { StyleSheet, css } from 'aphrodite';
import { render } from 'enzyme';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  email: '', password: '', enableSubmit: false };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }


  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value}, () => {
      if (this.state.email !== '') {
        this.setState({enableSubmit: true});
      }
    });
  }

  handleChangePassword(event) {
    this.setState({password: event.value}, () => {
      if (this.state.password !== '') {
        this.setState({enableSubmit: true});
      }
    });
  }
 
  render(){
  return (
    <body className={App_body.Appbody}>
      <p>Login to access the full dashboard</p>
      <div className="login">
        <label htmlFor="username"  className={css(App_body.label_style)}>
          Email:
          <input
                type='text'
                value={this.state.email}
                onChange={this.handleChangeEmail}
                ></input>
        </label>
        <label htmlFor="password"  className={css(App_body.label_style)}>
          Password:
          <input
                type='text'
                value={this.state.password}
                onChange={this.handleChangePassword}
                ></input>
        </label>
        <input  type='submit' text='Submit' disabled={!this.state.enableSubmit} className={css(App_body.AppBodyButton)}></input>
        <button className={App_body.AppBodyButton}>Ok</button>
      </div>  
    </body>
  );
}
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