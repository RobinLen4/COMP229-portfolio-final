import { Link } from "react-router-dom";
import { remove } from "../../datasource/api-users";

function ListUserItem({user, onRemove}) {

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
                <td className="text-center">{user.firstname || ''}</td>
                <td className="text-center">{user.lastname || ''}</td>
                <td className="text-center">{user.email || ''}</td>
                <td className="text-center">
                    <Link className="btn bg-primary btn-primary btn-sm" to={'/users/edit/' + user.id}>
                        <i className="fas fa-pencil-alt"></i>
                    </Link>
                </td>
                <td className="text-center">
                    <Link
                        className="btn btn-primary btn-sm"
                        to={'/users/edit/' + user._id}
                    >
                        Edit
                    </Link>
                </td>

                <td className="text-center">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onRemove(user._id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default ListUserItem;