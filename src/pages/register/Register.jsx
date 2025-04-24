import "./registre.css"

export default function Register() {
  return (
    <>
  
  <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h1 className="logo">ParaDice</h1>
          <span className="logodes">Join ParaDice and start connecting with the world!</span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Email" type="email" className="registerInput" />
            <input placeholder="Password" type="password" className="registerInput" />
            <input placeholder="Confirm Password" type="password" className="registerInput" />
            <button className="registerBtn">Sign Up</button>
            <span className="alreadyAccount">Already have an account?</span>
            <button className="loginRedirectBtn">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
