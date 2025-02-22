import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
function App() {
  const createAreaRef = useRef(null);
  const [isInside, setInside] = useState(false);

  function setExpand(event) {
    if (createAreaRef.current && createAreaRef.current.contains(event.target)) {
      setInside(true);
      return;
    } else {
      setInside(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", setExpand);

    return () => {
      document.removeEventListener("click", setExpand);
    };
  }, []);

  const [notes, setNotes] = useState([]);
  return (
    <div onClick={setExpand}>
      <Header />
      {/* <Note /> */}
      <div ref={createAreaRef}>
        <CreateArea isInsideFlag={isInside} setNoteList={setNotes} />
      </div>
      {notes.map((note) => {
        return (
          <Note
            setNoteList={setNotes}
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
