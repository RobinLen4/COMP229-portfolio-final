import { useState } from "react";
import { create } from "../../datasource/api-users";
import { useNavigate } from "react-router-dom";

function FormUser({ user, handleChange, handleSubmit }) {
    const navigate = useNavigate();

    return (

        <form onSubmit={handleSubmit} className="form">
            <input type="hidden" name="id" value={user.id || ""} />

            <div className="form-group">
                <label>First Name</label>
                <input
                    name="firstname"
                    className="form-control"
                    placeholder="Enter first name"
                    value={user.firstname || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input
                    name="lastname"
                    className="form-control"
                    placeholder="Enter last name"
                    value={user.lastname || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={user.email || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={user.password || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <button className="btn btn-primary" type="submit">
                Submit
            </button>

            &nbsp; &nbsp;

            <button
                className="btn btn-warning"
                type="button"
                onClick={() => navigate(-1)}
            >
                Cancel
            </button>
        </form>
    );
}
export default FormUser;