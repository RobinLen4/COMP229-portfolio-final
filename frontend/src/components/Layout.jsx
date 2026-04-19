import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <Link className="navbar-brand" to="/">
                    My App
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">
                                Projects
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/services">
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/references">
                                References
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/users">
                                Users
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>

            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;