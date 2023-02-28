import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import classes from "./css/Drawer.module.scss";
import { changeAnchor } from "./helpers/change-anchor";
import close from "../assets/Close.png"

export const Drawer = (props) => {
  const { open, anchor, onClose } = props;
  const {
    drawer,
    animate,
    hidden,
    overlay,
    overlayOpen,
    overlayHidden,
    header,
    draweritem
  } = classes;

  const handleClickScrollServices = () => {
    const element = document.getElementById('services');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };
  const handleClickScrollAbout = () => {
    console.log("cicked")
    const element = document.getElementById('about-mobile');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Ignoring')
    }
    onClose();
  };
  const handleClickScrollTeam = () => {
    const element = document.getElementById('team');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <>
      <div
        className={`${overlay} ${!open && overlayHidden} ${
          open && overlayOpen
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex="-1"
        className={`${drawer} ${open && animate} ${
          !open && hidden
        } ${changeAnchor(anchor, classes)}`}
      >
        <div className={header} onClick={onClose}>
          <img src={close} alt="close the drawer"/>
        </div>
        <div className={draweritem}>
          <Link onClick={handleClickScrollAbout}><h4>About</h4></Link>
        </div>
        <div className={draweritem}>
          <Link onClick={handleClickScrollServices}><h4>Services</h4></Link>
        </div> 
        <div className={draweritem}>
          <Link onClick={handleClickScrollTeam}><h4>Team</h4></Link>
        </div>

      </div>
    </>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};
