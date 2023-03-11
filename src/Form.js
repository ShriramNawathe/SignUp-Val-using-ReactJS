import { useState } from "react";
import "./Form.css"; // Import the CSS file

function Form() {
  var [email, setE] = useState("");
  var [password, setPwd] = useState("");
  var [confirmPassword, setCpwd] = useState("");
  var [emailValid, setEmailVal] = useState(false);
  var [passwordValid, setPwdVal] = useState(false);
  var [confirmPasswordValid, setCPwdVal] = useState(false);

  var handleSubmit = (event) => {
    event.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Congrats=> Submitted Form successfully");
    } else {
      alert("Error=> Please Fill All The Form");
    }
  };

  const valE = (value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    setEmailVal(emailRegex.test(value));
  };

  const valPWD = (value) => {
    setPwdVal(value.length >= 8);
  };

  const valCpwd = (value) => {
    setCPwdVal(value === password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        
      {/*  */}
        <div className="mainC">
          <label>Email</label>
          <input
            type="text" value={email} onChange={(e) => {
              setE(e.target.value);
              valE(e.target.value);
            }}
            className={`mainFun ${ emailValid ? "funCvalid" : email.length > 0 ? "funCinvalid" : "" }`}
          />
          {!emailValid && email.length > 0 && ( <div className="errorInput">Error: Please enter a valid email</div> )}
        </div>

        {/*  */}
        <div className="mainC">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => {
              setPwd(e.target.value);
              valPWD(e.target.value);
            }}
            className={`mainFun ${ passwordValid ? "funCvalid" : password.length > 0 ? "funCinvalid" : "" }`}
          />
          {!passwordValid && password.length > 0 && ( <div className="errorInput">Error: Password must be at least 8 characters long </div> )}
        </div>
        
        {/*  */}
        <div className="mainC">
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword}
            onChange={(e) => { setCpwd(e.target.value); valCpwd(e.target.value); }}
            className={`mainFun ${ confirmPasswordValid ? "funCvalid" : confirmPassword.length > 0 ? "funCinvalid" : "" }`}
          />
          {!confirmPasswordValid && confirmPassword.length > 0 && ( <div className="errorInput">Error: Passwords do not match</div> )}
        </div>

        {/*  */}
        <div className="divBtn">
          <button type="submit" className="btn"> Sign Up </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
