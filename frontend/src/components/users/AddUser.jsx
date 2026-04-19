import { useState } from "react";
import { create } from "../../datasource/api-users";
import { useNavigate } from "react-router-dom";
import FormUser from "./FormUser";

function AddUser() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Submitting:", user);

        create(user)
            .then(async (res) => {
                if (res.success) {

                    // auto-login after signup
                    const loginRes = await fetch(
                        "http://localhost:5000/api/users/login",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: user.email,
                                password: user.password
                            })
                        }
                    );

                    const loginData = await loginRes.json();

                    if (loginData.token) {
                        localStorage.setItem("token", loginData.token);
                        localStorage.setItem("user", JSON.stringify(loginData.data));
                    }

                    navigate("/dashboard");

                } else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorMsg("Server error occurred");
            });
    };

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add User Item</h1>

                    <p className="flash">
                        <span>{errorMsg}</span>
                    </p>

                    <FormUser
                        user={user}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddUser;