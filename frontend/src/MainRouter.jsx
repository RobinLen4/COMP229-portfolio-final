import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Layout from "./components/Layout";

import ListProject from './components/projects/ListProject';
import AddProject from './components/projects/AddProject';
import EditProject from './components/projects/EditProject';

import ListReference from './components/references/ListReference';
import AddReference from './components/references/AddReference';
import EditReference from './components/references/EditReference';

import ListService from './components/services/ListService';
import AddService from './components/services/AddService';
import EditService from './components/services/EditService';

import ListUser from './components/users/ListUser';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser'; 

function MainRouter(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<ListProject />} />
                    <Route path="projects/add" element={<AddProject />} />
                    <Route path="projects/edit/:id" element={<EditProject />} />

                    <Route path="references" element={<ListReference />} />
                    <Route path="references/add" element={<AddReference />} />
                    <Route path="references/edit/:id" element={<EditReference />} />

                    <Route path="services" element={<ListService />} />
                    <Route path="services/add" element={<AddService />} />
                    <Route path="services/edit/:id" element={<EditService />} />

                    <Route path="users" element={<ListUser />} />
                    <Route path="users/add" element={<AddUser />} />
                    <Route path="users/edit/:id" element={<EditUser />} />
                </Route>
            </Routes>
        </div>
    );
}

export default MainRouter;