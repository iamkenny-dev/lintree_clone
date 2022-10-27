import React from 'react'
// import { FontAwesome } from "react-icons/fa";
// import {FaTwitter} from "react-icons/fa"
// import {FaGithub} from "react-icons/fa"
// import {FaFacebook} from "react-icons/fa"
// import {FaSlack} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='icons'>
          <a href=""><img src="/images/slack.png" className='icon' alt="slack" /></a>
          <a href="https://github.com/iamkenny-dev"><img src="/images/github.png" className='icon' alt="github" /></a>
            {/* <div className='icon'><FaTwitter size={30} /></div>
            <div className='icon'><FaGithub size={30} /></div>
            <div className='icon'><FaFacebook size={30} /></div>
            <div className='icon' id="slack"><FaSlack size={30} /></div> */}
        </div>
        <div>
          <img className='footmat' src="/images/footer.png" alt="footer" />
        </div>
    </footer>
  )
}

export default Footer