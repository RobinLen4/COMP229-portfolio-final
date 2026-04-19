import { useEffect, useState } from "react";

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Dashboard</h1>

            {user ? (
                <div>
                    <h2>Welcome, {user.firstname} 👋</h2>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>No user data found</p>
            )}
        </div>
    );
}

export default Dashboard;