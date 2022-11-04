import React from 'react'

const Contact = () => {
  return (
    <div>
        <form action="" method="post">
            <div>
                <h1>Cotact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            
            <div>
                <label htmlFor="first_name">First name</label>
                <input id='first_name' type="text" placeholder='Enter your first name' name='First name' />

                <label htmlFor="last_name">Last name</label>
                <input id='last_name' type="text" placeholder='Enter your last name' name='Last name' />
            </div>
            

            <label htmlFor="email">Email</label>
            <input id='email' type="text" placeholder='Enter your first name' name='email' />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>

            <label htmlFor="checkbox">You agree to providing your data to (name) who may contact you</label>
            <input type="checkbox" name="checkbox" id="checkbox" />

            <button id='btn__submit'>Send Mesaage</button>
        </form>
      
    </div>
  )
}

export default Contact
