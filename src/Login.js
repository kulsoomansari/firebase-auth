import React from 'react'

export default function Login(props) {
    const {email, 
        setEmail, 
        password, 
        setPassword, 
        handlelogin, 
        handlesignup, 
        HasAccount, 
        setHasAccount,
        emailError,
        PasswordError
    }= props
    return (
            <section className="login">
                <div className="loginContainer">
                    <label>Username:</label>
                    <input type="text" 
                    autoFocus
                    require 
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>

                    <label>Password:</label>
                    <input type="password" 
                    require 
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{PasswordError}</p>
                    <div className="btnContainer">
                     {HasAccount ? ( 
                      <>
                      <button onClick={handlelogin}>Signin</button>
                      <p>Don't have an account ?<span 
                      onClick={() =>setHasAccount(!HasAccount)}>
                      SignUp</span></p>
                      </>
                     ):(
                        <>
                      <button onClick={handlesignup}>SignUp</button>
                      <p>Have an account <span 
                      onClick={() =>setHasAccount(!HasAccount)}>
                      Signin</span></p>
                      </>
                     )} 
                    </div>
                </div>
            </section>
    )
}
