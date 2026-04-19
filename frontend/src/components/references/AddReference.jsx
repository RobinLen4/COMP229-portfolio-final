import { useState } from "react";
import { create } from "../../datasource/api-references";
import { useNavigate } from "react-router-dom";
import FormReference from "./FormReference";

function AddReference() {
    const navigate = useNavigate();
    const [reference, setReference] = useState({
        firstname: "",
        lastname: "",
        email: "",
        position: "",
        company: ""
    });
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReference((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + reference);

        create(reference)
            .then((res) => {
                if (res.success) {
                    alert(res.message + " - id: " + res.data.id);
                    navigate("/references/list");
                }
                else{
                    alert(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    }

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add Reference Item</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <FormReference 
                        reference={reference}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default AddReference;