


const Navigation = ({onRouteChange, isSignedIn}) => {
    return (
        
        isSignedIn ? 
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" style={{zIndex: "1"}}>
                            <button className="btn btn-info" aria-current="page" href="#" onClick={() => onRouteChange("signout")} >Sign Out</button>
                        </li>
                    </ul>
                </div>
            </nav>
        
            :
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" style={{zIndex: "1"}}>
                            <button className="btn btn-info" aria-current="page" href="#" onClick={() => onRouteChange("signin")} >Sign In</button>
                            <button className="btn btn-info" aria-current="page" href="#" onClick={() => onRouteChange("signup")} style={{marginLeft: "10px"}} >Sign Up</button>

                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navigation;