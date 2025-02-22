import React from "react";

function Note(props) {

    function deleteNote() {
        props.setNoteList((prevValue) => {
            const updatedNotes = prevValue.filter((item) => {
                return item.id !== props.id;
            })
            return updatedNotes;
        })
    }
 
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNote}>DELETE</button>
        </div>
    );
}

export default Note;