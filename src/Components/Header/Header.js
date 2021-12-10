
//component imports 
import React, { useState } from "react";
import Home from '../Home';
import Popup from 'reactjs-popup';
import Help from "../Help";
import Spath from "../Spath";
import 'reactjs-popup/dist/index.css';
import '../Help.css';
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { GiPathDistance,GiSpiderWeb } from "react-icons/gi";
import {ImQuestion} from "react-icons/im";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";





const Header = () => {
  
    //hooks for state control with react useState
    const [menuCollapse, setMenuCollapse] = useState(true)
    const [hoSec, setHoSec] = useState(true)
    const [spSec, setSpSec] = useState(false)
    const [wbSec, setWbSec] = useState(false)

    //functions to change states
    const hoSecClick = () => {

      setSpSec(false);
      setHoSec(true);


    };

    const spSecClick = () => {

      setSpSec(true);
      setHoSec(false);

    };

  const menuIconClick = () => {
  
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);

  };

  return (
    <>
    <div>
    
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
          {/* Displays Header conditionally */}
              <p>{menuCollapse ? "SW" : "STEAMWEB"}</p> 
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/> 
              ) : (
                <FiArrowLeftCircle/>
                              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            {/* Icons within the sidebar with conditional formatting*/}
            <Menu iconShape="square">
              {hoSec ? (
                  <MenuItem active={true} icon={<FiHome />}onClick = {hoSecClick}> Home </MenuItem>
              ) : (
                <MenuItem icon={<FiHome />} onClick = {hoSecClick}> Home </MenuItem>
              )}
              
              {spSec ? (<div>
              <MenuItem active = {true} icon={<GiPathDistance />} onClick = {spSecClick}>Shortest Path</MenuItem>
              
              </div>
              ):(
                <MenuItem icon={<GiPathDistance />} onClick = {spSecClick}>Shortest Path</MenuItem>
              )}
               
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
            <Popup trigger={<MenuItem icon={<ImQuestion />}></MenuItem>} position="right" modal className = "my-popup">
    <Help />
  </Popup>
              
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
{/* Displays different parts of the site depending on the state */}
      {hoSec ? (
              <Home />              
                ):(
                ""
              )}

      {spSec ? (
              <Spath />
              ):(
                ""
              )}

      
      </div>
    </>
  );
};

export default Header;
