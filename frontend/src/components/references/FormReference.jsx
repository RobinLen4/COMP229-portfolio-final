import { useState } from "react";
import { create } from "../../datasource/api-references";
import { useNavigate } from "react-router-dom";

function FormReference({ reference, handleChange, handleSubmit }) {
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} className="form">

            <div className="form-group">
                <label>First Name</label>
                <input
                    name="firstname"
                    className="form-control"
                    value={reference.firstname || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input
                    name="lastname"
                    className="form-control"
                    value={reference.lastname || ""}
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
                    value={reference.email || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Position</label>
                <input
                    name="position"
                    className="form-control"
                    value={reference.position || ""}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Company</label>
                <input
                    name="company"
                    className="form-control"
                    value={reference.company || ""}
                    onChange={handleChange}
                />
            </div>

            <button className="btn btn-primary" type="submit">
                Submit
            </button>

        </form>
    );
}

export default FormReference;