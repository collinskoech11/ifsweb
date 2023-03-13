import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./css/nav.css";
import ifslogo from "../assets/ifsLogo.png";
import Vector from "../assets/Vector.png";
import {Drawer} from "./Drawer"

function NavBar() {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => setOpen(true), []);

    const handleClose = useCallback(() => setOpen(false), []);

    const handleClickScrollServices = () => {
      const element = document.getElementById('services');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const handleClickScrollAbout = () => {
      const element = document.getElementById('about');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const handleClickScrollTeam = () => {
      const element = document.getElementById('team');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <>
      <div className="main-nav">
        <img src={ifslogo} alt="ifs nav logo" style={{ width: "100px"}} />
        <div className="hidden">
          <Link onClick={handleClickScrollAbout} to="/">
            <h3>About</h3>
          </Link>
          <Link onClick={handleClickScrollServices} to="/">
            <h3>Services</h3>
          </Link>
          <Link onClick={handleClickScrollTeam} to="/">
            <h3>Team</h3>
          </Link>
        </div>
        <div className="unhide" onClick={handleOpen}>
         <img src={Vector} alt="more btn" />
        </div>
      </div>
      <Drawer anchor="right" open={open} onClose={handleClose} />
    </>
  );
}

export default NavBar;
