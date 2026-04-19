import { useState } from "react";
import { create } from "../../datasource/api-services";
import { useNavigate } from "react-router-dom";
import FormService from "./FormService";

function AddService() {
    const navigate = useNavigate();
    const [service, setService] = useState({
        title: "",
        description: ""
        });
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setService((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + service);

        create(service)
            .then((res) => {
                if (res.success) {
                    alert(res.message + " - id: " + res.data.id);
                    navigate("/services/list");
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
                    <h1>Add Service Item</h1>
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

export default AddService;