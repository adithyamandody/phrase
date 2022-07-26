import React from 'react';
// import HighlightIcon from '@material-ui/icons/Highlight';
import LockIcon from '@material-ui/icons/Lock';
// import RiLockPasswordLine from 'react-icons/ri';

function Header() {
  return (
    <header>
      <h1>
        <LockIcon />
        Phrase
      </h1>
    </header>
  );
}

export default Header;
