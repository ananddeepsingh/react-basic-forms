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
    const isValidForm = formValidation();
    
    if(isValidForm){
      setIsFormValid(false);
    }
    return false;
  }

  const formValidation = () => {
    const userNameError = {};
    const passwordError = {};
    const confirmPasswordError = {};
    let isValid = true;

    if(userName.trim().length < 8){
      userNameError.userNameShort = "Please enter more than 8 characters";
      isValid = false;
    }

    if(password.trim().length < 8){
      passwordError.passwordShort = "Please enter more than 8 characters";
      isValid = false;
    }

    if(password !== confirmPassword){
      confirmPasswordError.confirmPasswordShort = "Password Mismatch. Please check.";
      isValid = false;
    }

    setuserNameError(userNameError);
    setpasswordError(passwordError);
    setConfirmPasswordError(confirmPasswordError);
    return isValid
  }

  const renderErrors = (obj) => {
    const html = [];
    {Object.keys(obj).map( (key, i) => {
      html.push( <div key={i} className="error">{obj[key]}</div>);
    })}
    return html
  }

  return(
    <form onSubmit={onSubmit}>
      <div className="row">
        <label>Username</label>
        <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} placeholder="Username" name="username" />
        {renderErrors(userNameError)}
      </div>
      <div className="row">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" name="password" />  
        {renderErrors(passwordError)}
      </div>
      <div className="row">
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} placeholder="Confirm Password" name="confirmPassword" />  
        {renderErrors(confirmPasswordError)}
      </div>
      <div className="row">
        <button type="submit" id="submit">Submit</button>
      </div>
    </form>
  )
};

export default Login;