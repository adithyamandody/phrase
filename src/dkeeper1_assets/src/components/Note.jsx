import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Base64 } from 'js-base64';

function Note(props) {
  const [active, setActive] = useState(true);
  const starStr = new Array(props.content.length).join('*');

  function handleClick() {
    props.onDelete(props.id);
  }
  const decryptedString1 = Base64.decode(props.title);
  const decryptedString2 = Base64.decode(props.content);

  return (
    <div className='note'>
      <h1>{decryptedString1}</h1>
      <p>{active ? starStr : decryptedString2}</p>
      <button onClick={() => setActive((state) => !state)}>
        {active ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
      </button>

      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
