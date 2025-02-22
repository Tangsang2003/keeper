import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function deleteNote() {
    props.setNoteList((prevValue) => {
      const updatedNotes = prevValue.filter((item) => {
        return item.id !== props.id;
      });
      return updatedNotes;
    });
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
