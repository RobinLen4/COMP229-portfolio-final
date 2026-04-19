import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { list } from '../../datasource/api-services';
import { remove } from '../../datasource/api-services';
import ListServiceItem from './ListServiceItem';

function ListService() {
    let [serviceList, setServiceList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadServices = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setServiceList(res.data);
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
                    loadServices(); 
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
        loadServices();
    }, []);

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <h1>Service List</h1>
            <div>
                <Link to="/services/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new Item
                </Link>
            </div>
            <br />
            <br />
            <div className="table-responsive" >
                {isLoading && <div>Loading...</div>}
                {!isLoading && console.log("Service List: ", serviceList)}
                {!isLoading && serviceList.length === 0 && <div>No services found.</div>}
                {!isLoading && serviceList.length > 0 &&
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            {/* -- Header Row-- */}
                            <tr>
                                <th className="text-center">Title</th>
                                <th className="text-center">Description</th>
                                <th className="text-center" colSpan="3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* -- Repeatable Template Row -- */}
                            {serviceList.map(service =>
                                <ListServiceItem
                                    key={service.id}
                                    service={service}
                                    onRemove={handleRemove}
                                />
                            )}
                        </tbody>
                    </table>}
            </div>
        </div>
    )
}

export default ListService;