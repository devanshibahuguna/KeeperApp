import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import Notes from "../Notes"


function App() {
    return <div>
    <Header ></Header>
        {Notes.map(note => <Note title={note.title} content={note.content} key={note.key} />
)}
        <Footer></Footer>
        </div>
}

export default App;