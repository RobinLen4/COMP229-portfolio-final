import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { list } from '../../datasource/api-users';
import { remove } from '../../datasource/api-users';
import ListUserItem from './ListUserItem';

function ListUser() {
    let [userList, setUserList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadUsers = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setUserList(res.data);
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
                    loadUsers(); 
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
        loadUsers();
    }, []);

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <h1>User List</h1>
            <div>
                <Link to="/users/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new Item
                </Link>
            </div>
            <br />
            <br />
            <div className="table-responsive" >
                {isLoading && <div>Loading...</div>}
                {!isLoading && console.log("User List: ", userList)}
                {!isLoading && userList.length === 0 && <div>No users found.</div>}
                {!isLoading && userList.length > 0 &&
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            {/* -- Header Row-- */}
                            <tr>
                                <th className="text-center">First Name</th>
                                <th className="text-center">Last Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center" colSpan="3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* -- Repeatable Template Row -- */}
                            {userList.map(user =>
                                <ListUserItem
                                    key={user.id}
                                    user={user}
                                    onRemove={handleRemove}
                                />
                            )}
                        </tbody>
                    </table>}
            </div>
        </div>
    )
}

export default ListUser;