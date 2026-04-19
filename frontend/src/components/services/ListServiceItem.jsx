import { Link } from "react-router-dom";
import { remove } from "../../datasource/api-services";

function ListServiceItem({service, onRemove}) {

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            remove(id)
                .then(res => {
                    if (res && res.success) {
                        onRemove(id);
                    }
                    else {
                        alert(res.message);
                    }
                }).catch(err => {
                    alert(err.message);
                    console.log(err)
                });
        };
    };

    return (
        <>
            <tr >
                <td className="text-center"> {service.title || ''} </td>
                <td className="text-center"> {service.description || ''} </td>
                <td className="text-center">
                    <Link className="btn bg-primary btn-primary btn-sm" to={'/services/edit/' + service.id}>
                        <i className="fas fa-pencil-alt"></i>
                    </Link>
                </td>
                <td className="text-center">
                    <button
                        className="btn bg-danger btn-danger btn-sm"
                        onClick={() => handleRemove(service.id)}>
                            Delete
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}

export default ListServiceItem;