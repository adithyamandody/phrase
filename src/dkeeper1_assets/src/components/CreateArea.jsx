import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
// const Cryptr = require('cryptr');
// const cryptr = new Cryptr('myTotalySecretKey');

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  // let email = "some@mail.com";
  // let encryptdEmail = cryptr.encrypt(email);
  // console.log("Decrypted email = ", cryptr.decrypt(encryptdEmail ));

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className='create-note'>
        {isExpanded && (
          <input
            name='title'
            onChange={handleChange}
            value={note.title}
            placeholder='App Name'
          />
        )}

        <textarea
          name='content'
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder='password'
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
