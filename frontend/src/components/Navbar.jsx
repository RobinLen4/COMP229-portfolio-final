import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <nav style={{ padding: "10px", background: "#eee" }}>
            <Link to="/">Home</Link>{" | "}

            {isLoggedIn ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>{" | "}
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>{" | "}
                    <Link to="/signup">Signup</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;