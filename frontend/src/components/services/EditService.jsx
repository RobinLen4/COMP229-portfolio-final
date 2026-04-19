import { useState, useEffect } from "react";
import { update, getOne } from "../../datasource/api-services";
import { useNavigate, useParams } from "react-router-dom";
import FormService from "./FormService";

function EditService() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [service, setService] = useState({
        id: "",
        title: "",
        description: ""
    });
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        getOne(id)
            .then((res) => {
                if (res.success) {
                    setService({
                        id: res.data.id,
                        title: res.data.title,
                        description: res.data.description
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
        setService((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + service);

        update(service, id)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
                    navigate("/services/list");
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
                    <h1>Edit a Service Item</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <FormService
                        service={service}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditService;