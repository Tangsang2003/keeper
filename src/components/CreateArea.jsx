import React from "react";

function CreateArea() {
    return (
        <div>
        <form>
            <input placeholder="Title" name="title"></input>
            <textarea name="content" placeholder="Take a note..." rows="3"></textarea>
            <button>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;