import React from 'react'
// import { FontAwesome } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='icons'>
            <FaTwitter />
            <FaGithub />
            <FaFacebook />

        </div>
    </footer>
  )
}

export default Footer