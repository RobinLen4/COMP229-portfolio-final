import { useState } from "react";
import { create } from "../../datasource/api-services";
import { useNavigate } from "react-router-dom";

function FormService({ service, handleChange, handleSubmit }) {
    const navigate = useNavigate();

    return (

        <form onSubmit={handleSubmit} className="form">
            <input type="hidden" name="id" value={service.id || ""} />

            <div className="form-group">
                <label htmlFor="titleTextField">Title</label>
                <input
                    id="titleTextField"
                    name="title"
                    className="form-control"
                    placeholder="Enter the title of the service"
                    value={service.title || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="descriptionTextField">Description</label>
                <textarea
                    id="descriptionTextField"
                    name="description"
                    className="form-control"
                    placeholder="Enter the description of the service"
                    value={service.description || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <button className="btn btn-primary" type="submit">
                <i className="fas fa-edit"></i> Submit
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-warning" type="button" onClick={() => navigate(-1)} >
                <i className="fas fa-undo"></i>
                Cancel
            </button>
        </form>

    )
}

export default FormService;