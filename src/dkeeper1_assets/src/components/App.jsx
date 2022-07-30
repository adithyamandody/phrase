import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { dkeeper1 } from '../../../declarations/dkeeper1';
import { Base64 } from 'js-base64';
// const decryptedString = cryptr.decrypt(encryptedString);
// console.log(encryptedString);
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      const encryptedString1 = Base64.encode(newNote.title);
      const encryptedString2 = Base64.encode(newNote.content);
      dkeeper1.createNotes(encryptedString1, encryptedString2);
      const obj = { title: encryptedString1, content: encryptedString2 };
      return [obj, ...prevNotes];
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
