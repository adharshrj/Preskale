import React from "react";

export const showtabledata = ({ bird, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{bird.Name}</td>
            <td>{bird.spottedat}</td>
            <td>{bird.spotteddate}</td>
            <td>{bird.conservationstatus}</td>
            <td>{bird.scientificName}</td>
            <td>
                <button
                    type="button"
                    onClick={(event) => handleEditClick(event, bird)}
                >
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteClick(bird.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};
