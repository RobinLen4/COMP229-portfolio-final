import { Link } from "react-router-dom";
import { remove } from "../../datasource/api-references";

function ListReferenceItem({reference, onRemove}) {

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
                <td className="text-center"> {reference.title || ''} </td>
                <td className="text-center"> {reference.completion ? new Date(reference.completion).toLocaleDateString() : ''} </td>
                <td className="text-center"> {reference.description || ''} </td>
                <td className="text-center">
                    <Link className="btn bg-primary btn-primary btn-sm" to={'/references/edit/' + reference.id}>
                        <i className="fas fa-pencil-alt"></i>
                    </Link>
                </td>
                <td className="text-center">
                    <button
                        className="btn bg-danger btn-danger btn-sm"
                        onClick={() => handleRemove(reference.id)}>
                            Delete
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}

export default ListReferenceItem;