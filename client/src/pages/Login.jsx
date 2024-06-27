import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import "../Styles/Login.css";
export default function Login() {
  return (
    <>
      <div className="login-form">
        <h2>Login</h2>
        <form
          action="
        "
        >
          <div className="inputs">
            <div className="input-icon">
              <FaUser className="icon" />
              <input type="text" placeholder="Enter Email" />
            </div>
            <div className="input-icon">
              <FaLock className="icon" />

              <input type="password" placeholder="Enter Password" />
            </div>
            <div className="btns">
              <input type="submit" value="Submit" />
              <input type="reset" value="Clear Form" />
            </div>
          </div>
        </form>
      </div>
      <div className="svg1">
        <svg width="500" height="400">
          <ellipse cx="60" cy="150" rx="180" ry="180" fill="#578DBE" />
        </svg>
      </div>
      <div className="svg2">

        <svg width="500" height="400">
          <ellipse cx="280" cy="250" rx="210" ry="180" fill="#578DBE" />
        </svg>
      </div>
    </>
  );
}
