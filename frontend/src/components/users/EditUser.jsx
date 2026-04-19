import { useState, useEffect } from "react";
import { update, getOne } from "../../datasource/api-users";
import { useNavigate, useParams } from "react-router-dom";
import FormUser from "./FormUser";

function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        getOne(id)
            .then((res) => {
                if (res.success) {
                    setUser({
                        id: res.data.id,
                        firstname: res.data.firstname,
                        lastname: res.data.lastname,
                        email: res.data.email,
                        password: ""
                    });
                } else {
                    alert(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { id, ...cleanUser } = user;

        if (!cleanUser.password) {
            delete cleanUser.password;
        }

        update(cleanUser, id)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
                    navigate("/users/list");
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Edit a User Item</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <FormUser
                        user={user}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditUser;