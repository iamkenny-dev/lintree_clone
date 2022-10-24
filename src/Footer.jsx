import React from 'react'
// import { FontAwesome } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='icons'>
            <div className='icon'><FaTwitter size={30} /></div>
            <div className='icon'><FaGithub size={30} /></div>
            <div className='icon'><FaFacebook size={30} /></div>

        </div>
    </footer>
  )
}

export default Footer