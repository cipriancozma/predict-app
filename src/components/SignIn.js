import { useState } from "react";
import "./SignIn.css";
import axios from 'axios';

const SignIn = ({ onRouteChange, loadUser, handleNameChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const showLoading = () => (loading ? <div>Loading...</div> : '');


 const sendDataOnSignIn = () => {
     setLoading(true);
     setIsError(false);
     const data = {
         email: email, 
         password: password
     }

     const headers = {
        'Content-Type': 'application/json',
     }

     axios.post('http://localhost:3001/signin', data, { headers })
     .then(respone => {
         setData(respone.data)
         setEmail("")
         setPassword("")
         setLoading(false)
         if(respone.data) {
           if(respone.data.id){
              loadUser(respone.data)
              handleNameChange(respone.data.name);
              onRouteChange("homepage");
           }
           
       }
     }).catch(error => {
         setLoading(false);
         setIsError(true);
         console.log("Something went wrong: ", error);
     })


 }

 const handleSubmit = (e) => {
     e.preventDefault();
     sendDataOnSignIn();
 }


const SignInForm = () => {

    return (
        <div
          className="card"
          style={{
            width: "18rem",
            zIndex: "1",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="card-body" style={{ border: "1px solid #4fdcff" }}>
            <h3>Predict App</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={onEmailChange}
                placeholder="Type your email"
                value={email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                onChange={onPasswordChange}
                placeholder="Type your password"
                value={password}
                required
              />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <div className="form-btn">
              <button
                type="submit"
                className="btn btn-info"
              >
                Sign In
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => onRouteChange("signup")}
              >
                Sign Up
              </button>
            </div>
            {showLoading()}
            {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
            </form>
          </div>
        </div>
      );
}

return <>
    {SignInForm()}
</>

};

export default SignIn;
