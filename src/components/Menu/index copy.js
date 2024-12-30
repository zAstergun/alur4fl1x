import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo2.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="MilochFlix logo" />
      </Link>
      <div>
      <Button as={Link} className="ButtonLink" to="../../cadastro/video">
        NOVO VIDEO
      </Button>
     </div>
    </nav>
  );
}

export default Menu;