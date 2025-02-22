import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: ""});

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
        const newNote = {...note, id: Date.now()}
      props.setNoteList((prevValue) => {
        return [...prevValue, newNote];
      });

      setNote({ title: "", content: ""});
    }
  }
  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          name="title"
        ></input>
        <textarea
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        ></textarea>
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
