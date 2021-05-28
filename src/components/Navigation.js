


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" style={{zIndex: "1"}}>
                        <button className="btn btn-info" aria-current="page" href="#" >Sign Out</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;