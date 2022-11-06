import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main>

      <div className='links-block'>
        <button className='link' id="twitter"><a id="twitter" href="https://twitter.com/iamkenny_co" target="_blank">Twitter Link</a></button>
        <button className='link' id="btn__zuri"><a id="btn__zuri" href="https://training.zuri.team/" target="_blank">Zuri Team</a></button>
        <button className='link' id="books"><a id="books" href=" http://books.zuri.team" target="_blank">Zuri Books</a></button>
        <button className='link' id="book__python"><a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<kenny>" target="_blank">Python Books</a></button>
        <button className='link' id="pitch"><a id="pitch" href="https://background.zuri.team" target="_blank">Background Check for Coders</a></button>
        <button className='link' id="book__design"><a id="book__design" href="https://books.zuri.team/design-rules" target="_blank">Design Books</a></button>
        
        {/* <button className='link' id="contact"><a href="contact.html"><Link to='/contact'>Contact Me</Link></a></button> */}
        <button className='link' id="contact"><Link id="contact" to='/contact' >Contact Me</Link></button>
      </div>

    </main>
  )
}

export default Main