import React, {useState} from 'react';

const Login = () => {
  const [userName, setUserName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userNameError, setuserNameError] = useState({});
  const [passwordError, setpasswordError] = useState({});
  const [confirmPasswordError, setConfirmPasswordError] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    alert("form submitted")
  }

  const formValidation = () => {
    const userNameError = {};
    const passwordError = {};
    const confirmPasswordError = {};
    let isValid = false;

    if(userName.length === 0 || userName.trim().length < 8){
      userNameError.userNameShort = "Please enter more than 8 characters";
    }
    
    if(password.length === 0 || password.trim().length < 8){
      passwordError.passwordShort = "Please enter more than 8 characters";
    }
    
    if(password.length === 0 || confirmPassword === 0 || password !== confirmPassword){
      confirmPasswordError.confirmPasswordShort = "Password Mismatch. Please check.";
    }

    if(userName.trim().length > 7 && password.trim().length > 7 && password === confirmPassword){
      isValid = true;
    }

    setuserNameError(userNameError);
    setpasswordError(passwordError);
    setConfirmPasswordError(confirmPasswordError);
    return isValid
  }

  const renderErrors = (obj) => {
    const html = [];
    {
      Object.keys(obj).map( (key, i) => {
        html.push( <div key={i} className="error">{obj[key]}</div>);
      })
    }
    return html
  }

  const isFormButtonEnabled = (e) => {
    const isValidForm = formValidation();
    isValidForm ? setIsFormValid(true) : setIsFormValid(false)
  }

  return(
    <form onSubmit={onSubmit}>
      <div className="row">
        <label>Username</label>
        <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} onBlur={isFormButtonEnabled} placeholder="Username" name="username" />
        {renderErrors(userNameError)}
      </div>
      <div className="row">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} onBlur={isFormButtonEnabled} placeholder="Password" name="password" />  
        {renderErrors(passwordError)}
      </div>
      <div className="row">
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} onBlur={isFormButtonEnabled} placeholder="Confirm Password" name="confirmPassword" />  
        {renderErrors(confirmPasswordError)}
      </div>
      <div className="row">
        <button type="submit" id="submit" disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  )
};

export default Login;