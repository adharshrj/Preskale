import React, { useState, Fragment } from 'react'
import '../styles/Table.css'
import { nanoid } from "nanoid";
import Modal from './helpers/Modal';
import data from '../data.json'
import updatetabledata from "./helpers/UpdateData"
import showtabledata from './helpers/ShowData';


function MyTable() {
    const [show, setShow] = useState(false)
    const [birds, setBirds] = useState(data)
    const [addFormData, setAddFormData] = useState({
        Name: "",
        spottedat: "",
        spotteddate: "",
        conservationstatus: "",
        scientificName: "",
    });

    const [editFormData, setEditFormData] = useState({
        Name: "",
        spottedat: "",
        spotteddate: "",
        conservationstatus: "",
        scientificName: "",
    });

    const [editBirdId, setEditBirdId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newBird = {
            id: nanoid(),
            Name: addFormData.Name,
            spottedat: addFormData.spottedat,
            spotteddate: addFormData.spotteddate,
            conservationstatus: addFormData.conservationstatus,
            scientificName: addFormData.scientificName,
        };

        const newBirds = [...birds, newBird];
        setBirds(newBirds);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedBird = {
            id: editBirdId,
            Name: editFormData.Name,
            spottedat: editFormData.spottedat,
            spotteddate: editFormData.spotteddate,
            conservationstatus: editFormData.conservationstatus,
            scientificName: editFormData.scientificName,
        };

        const newBirds = [...birds];

        const index = birds.findIndex((contact) => contact.id === editBirdId);

        newBirds[index] = editedBird;

        setBirds(newBirds);
        setEditBirdId(null);
    };

    const handleEditClick = (event, bird) => {
        event.preventDefault();
        setEditBirdId(bird.id);

        const formValues = {
            Name: bird.Name,
            spottedat: bird.spottedat,
            spotteddate: bird.spotteddate,
            conservationstatus: bird.conservationstatus,
            scientificName: bird.scientificName,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditBirdId(null);
    };

    const handleDeleteClick = (birdId) => {
        const newBirds = [...birds];

        const index = birds.findIndex((bird) => bird.id === birdId);

        newBirds.splice(index, 1);

        setBirds(newBirds);
    };

    return (
        <div className='page'>
            <div className='heading'>
                <h2>Manage Birds</h2> 
                <div className='add-bt'>
                    <button onClick={() => setShow(true)}>+ Add</button>
                    <Modal title="Add a Bird" onClose={() => setShow(false)} show={show}>
                        <form onSubmit={handleAddFormSubmit}>
                            <input
                                type="text"
                                required="required"
                                placeholder="Enter a name..."
                                name="Name"
                                onChange={handleAddFormChange}
                            />
                            <input
                                type="text"
                                required="required"
                                placeholder="Enter last spotted location..."
                                name="spottedat"
                                onChange={handleAddFormChange}
                            />
                            <input
                                type="date"
                                required="required"
                                placeholder="Enter lost spotted date..."
                                name="spotteddate"
                                onChange={handleAddFormChange}
                            />
                            <input
                                type="text"
                                required="required"
                                placeholder="Enter the conservation status..."
                                name="conservationstatus"
                                onChange={handleAddFormChange}
                            />
                            <input
                                type="text"
                                required="required"
                                placeholder="Enter the scientific name..."
                                name="scientificName"
                                onChange={handleAddFormChange}
                            ></input>
                            <button type="submit">Add</button>
                        </form>
                    </Modal>
                </div>
            </div>
            <div className="table-container">
                <form onSubmit={handleEditFormSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>SPOTTED AT</th>
                                <th>LAST SPOTTED DATE</th>
                                <th>CONSERVATION STATUS</th>
                                <th>SCIENTIFIC NAME</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {birds.map((bird) => (
                                <tr>
                                    <td>{bird.Name}</td>
                                    <td>{bird.spottedat}</td>
                                    <td>{bird.spotteddate}</td>
                                    <td>{bird.conservationstatus}</td>
                                    <td>{bird.scientificName}</td>
                                </tr>

                                // <Fragment>
                                //     {editBirdId === bird.id ? (
                                //         <updatetabledata
                                //             editFormData={editFormData}
                                //             handleEditFormChange={handleEditFormChange}
                                //             handleCancelClick={handleCancelClick}
                                //         />
                                //     ) : (
                                //         <showtabledata
                                //             bird={bird}
                                //             handleEditClick={handleEditClick}
                                //             handleDeleteClick={handleDeleteClick}
                                //         />
                                //     )}
                                // </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default MyTable