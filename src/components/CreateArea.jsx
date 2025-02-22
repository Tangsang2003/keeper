import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  //   const [isExpanded, setIsExpanded] = useState(false);
  const inputVisibility = {
    display: "none",
  };
  //   const inputRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    event.preventDefault(); //Prevent From Refresh

    if (note.title.trim() || note.content.trim()) {
      const newNote = { ...note, id: Date.now() };
      props.setNoteList((prevValue) => {
        return [...prevValue, newNote];
      });

      setNote({ title: "", content: "" });
    }
  }

  //   function expandArea() {
  //     if(props.isInsideFlag === true) {
  //         setIsExpanded(true);
  //     }
  //     else {
  //         setIsExpanded(false);
  //     }
  //   }

  return (
    <div>
      <form className="create-note">
        <input
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          name="title"
          style={!props.isInsideFlag ? inputVisibility : null}
        ></input>
        <textarea
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={props.isInsideFlag ? "3" : "1"}
        ></textarea>
        <Zoom in={props.isInsideFlag ? true : false}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
