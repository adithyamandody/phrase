import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { dkeeper1 } from '../../../declarations/dkeeper1';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      dkeeper1.createNotes(newNote.title, newNote.content);
      return [newNote, ...prevNotes];
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const noteArray = await dkeeper1.readNotes();
    setNotes(noteArray);
  }

  function deleteNote(id) {
    dkeeper1.deleteNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
