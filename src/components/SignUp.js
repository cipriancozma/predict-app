import { useState } from "react";
import "./SignIn.css";
import axios from "axios";

const SignUp = ({ onRouteChange, loadUser, handleNameChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const showLoading = () => (loading ? <div>Loading...</div> : "");

  const sendDataOnRegister = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      email: email,
      password: password,
      name: name,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://localhost:3001/register", data, { headers })
      .then((respone) => {
        setData(respone.data);
        console.log(respone.data)
        setEmail("");
        setPassword("");
        setName("");
        setLoading(false);
        if (respone.data) {
          loadUser(respone.data);
          handleNameChange(respone.data.name);
          onRouteChange("homepage");
        }
      })
      .catch((error) => {
        setLoading(false);
        setIsError(true);
        console.log("Something went wrong: ", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataOnRegister();
  };

  const SignUpForm = () => {
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
              <label htmlFor="name">Name:</label>
              <input
                type="name"
                className="form-control"
                id="name"
                onChange={onNameChange}
                placeholder="Type your name"
                value={name}
                required
              />
            </div>
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
                minLength="8"
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
                className="btn btn-outline-primary"
              >
                Sign Up
              </button>
            </div>
            {showLoading()}
            {isError && (
              <small className="mt-3 d-inline-block text-danger">
                Something went wrong. Please try again later.
              </small>
            )}
          </form>
        </div>
      </div>
    );
  };
  return <>{SignUpForm()}</>;
};

export default SignUp;
