import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { list } from '../../datasource/api-references';
import { remove } from '../../datasource/api-references';
import ListReferenceItem from './ListReferenceItem';

function ListReference() {
    let [referenceList, setReferenceList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadReferences = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setReferenceList(res.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    };

    const handleRemove = (id) => {
        remove(id)
            .then((res) => {
                if (res.success) {
                    loadReferences(); 
                } else {
                    alert(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            });
    };

    useEffect(() => {
        loadReferences();
    }, []);

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <h1>Reference List</h1>
            <div>
                <Link to="/references/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new Item
                </Link>
            </div>
            <br />
            <br />
            <div className="table-responsive" >
                {isLoading && <div>Loading...</div>}
                {!isLoading && console.log("Reference List: ", referenceList)}
                {!isLoading && referenceList.length === 0 && <div>No references found.</div>}
                {!isLoading && referenceList.length > 0 &&
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <td>{reference.firstname || ''}</td>
                                <td>{reference.lastname || ''}</td>
                                <td>{reference.email || ''}</td>
                                <td>{reference.position || ''}</td>
                                <td>{reference.company || ''}</td>

                                <td>
                                    <Link to={'/references/edit/' + reference.id}>
                                        Edit
                                    </Link>
                                </td>

                                <td>
                                    <button onClick={() => handleRemove(reference.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {referenceList.map(reference =>
                                <ListReferenceItem
                                    key={reference.id}
                                    reference={reference}
                                    onRemove={handleRemove}
                                />
                            )}
                        </tbody>
                    </table>}
            </div>
        </div>
    )
}

export default ListReference;