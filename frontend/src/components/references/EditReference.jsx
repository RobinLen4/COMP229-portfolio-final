import { useState, useEffect } from "react";
import { update, getOne } from "../../datasource/api-references";
import { useNavigate, useParams } from "react-router-dom";
import FormReference from "./FormReference";

function EditReference() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [reference, setReference] = useState({
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        position: "",
        company: ""
    });
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        getOne(id)
            .then((res) => {
                if (res.success) {
                    setReference({
                        id: res.data.id,
                        firstname: res.data.firstname,
                        lastname: res.data.lastname,
                        email: res.data.email,
                        position: res.data.position,
                        company: res.data.company
                    });
                }
                else {
                    alert(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    }, [id, navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReference((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + reference);

        update(reference, id)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
                    navigate("/references/list");
                }
                else {
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
                    <h1>Edit a Reference Item</h1>
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

export default EditReference;