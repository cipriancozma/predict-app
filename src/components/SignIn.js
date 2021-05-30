import "./SignIn.css";

const SignIn = ({onRouteChange}) => {
  return (
    <div className="card" style={{ width: "18rem", zIndex: "1", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <div className="card-body" style={{border: "1px solid #4fdcff"}}>
        <h3>Predict App</h3>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <div className="form-btn">
        <button type="submit" className="btn btn-info" onClick={() => onRouteChange("homepage")}>
          Sign In
        </button>
        <button type="submit" className="btn btn-outline-primary" onClick={() => onRouteChange("signup")}>
          Sign Up
        </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
