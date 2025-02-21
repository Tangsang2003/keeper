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
            <CreateArea noteList={notes} setNoteList={setNotes}  />
            {notes.map((note, index) => {
                return <Note key={index} id={index} title={note.title} content={note.content} />
            })}
            <Footer />
        </div>
    )
}

export default App;