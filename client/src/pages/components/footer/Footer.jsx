import React from 'react'
import "./footer.css"
import logo from "../../../assets/Tasky-logo.png"
import Email from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <>
    <div id="footerContainer">
      <div>
        <img id="footerLogo" src={logo} alt="" />
      </div>
      <div id="footerText">
        <a href='https://www.google.com/'> <Email style={{padding:"5px",color:"white"}} fontSize='large'/> </a>
        <h3> Feel free to connect to us! </h3>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Footer
