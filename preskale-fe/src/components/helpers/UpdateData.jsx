import React from "react";
export const updatetabledata = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a name..."
                    name="Name"
                    value={editFormData.Name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter last spotted location..."
                    name="spottedat"
                    value={editFormData.spottedat}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="date"
                    required="required"
                    placeholder="Enter lost spotted date..."
                    name="spotteddate"
                    value={editFormData.spotteddate}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter the conservation status..."
                    name="conservationstatus"
                    value={editFormData.conservationstatus}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter the scientific name..."
                    name="scientificName"
                    value={editFormData.scientificName}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">ADD</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};