import "./login.css"

export default function Login() {
  return (
  <>
  
  <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h1 className="logo">ParaDice</h1>
            <span className="logodes">Connect with friends and world around you on ParaDice</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" type="email" className="loginInput" />
                <input placeholder="Password" type="password" className="loginPass" />
                <button className="loginBtn">Login</button>
                <span className="forgot">Forgot Password</span>
                <button className="registrationBtn">Create a New Account</button>


            </div>
        </div>
    </div>
  </div>
  </>

  )
}
