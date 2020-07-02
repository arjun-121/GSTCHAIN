import React from 'react';

function Login() {
  return (
    <login>
        <div class="container">
            <div class="main-block">
                <div class="header-icon">
                    <img src="login.png" alt=""/>
                </div>
                
                <form>
                    <div class="input-container">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username"/>
                    </div>
                    <div class="input-container">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <div class="input-container">
                        <button type="submit">Login <img id="login-button-icon" src="https://img.icons8.com/carbon-copy/100/000000/login-rounded-right.png"/></button>
                    </div>
                </form>
                
                <div class="navigate-link">
                    Don't have an account yet ? <a href="signup.html">SIGN UP</a>
                </div>
        
            </div>
        </div>
    </login>
  );
}

export default Login;
