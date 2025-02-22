import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
function App() {

    const [notes, setNotes] = useState([]);
    return (
        <div>
            <Header />
            {/* <Note /> */}
            <CreateArea setNoteList={setNotes}  />
            {notes.map((note) => {
                return <Note setNoteList={setNotes} key={note.id} id={note.id} title={note.title} content={note.content} />
            })}
            <Footer />
        </div>
    )
}

export default App;