import React, { useRef } from "react";
import './Login.css'

function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const focusInput = (ref) => {
        ref.current.focus()
    }
    return (
        <>
            <div className="App-body">
                <p>Login to access the full dashborad</p>

                <label onClick={() => focusInput(emailRef)} htmlFor="email">Email: </label>
                <input type="email" ref={emailRef} />

                <label onClick={() => focusInput(passwordRef)} htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />

                <button>OK</button>
            </div>

            <hr />
        </>
    )
}

export default Login