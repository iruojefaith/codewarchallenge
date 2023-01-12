import React from 'react';
import { NavLink }  from "react-router-dom";
import navlinks from "./navlinks";
import './nav.css';
import Logo from "../Assets/Logo.png"




function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo flex ">
          <img src={Logo} /> Interno
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            {navlinks.map(({title, url }, i) => {
            return (
               <NavLink

                exact
                to={url}
                key={i}
                className="nav-links hover:text-[#CDA274]"
                onClick={click ? handleClick : null}
              >
                {title}
              </NavLink>
            );
            })}

            </li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default NavBar