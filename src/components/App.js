import React, { useState, useEffect } from "react";
import "../styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notes, setNotes] = useState([]);

    // Load notes from localStorage when app starts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    console.log(savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to localStorage when notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  function onClickHandler(inputText) {
    setNotes([...notes, inputText]);
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note) => {
        return note !== notes[id];
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={onClickHandler} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClick={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
