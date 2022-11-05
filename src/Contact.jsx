import React from 'react'

const Contact = () => {
    return (
        <div className='contact--container'>

            <div>
                <div className="contact--content">

                    <div className='contact--head'>
                        <h1>Contact Me</h1>
                        <p>Hi there, contact me to ask me about anything you have in mind.</p>
                    </div>

                    <form action="" method="post" className='contact--form'>
                        <div className="contact--names">
                            <div className="container--first">
                                <label className='label--first' htmlFor="first_name">First name</label>
                                <input id='first_name' type="text" placeholder='Enter your first name' name='First name' required/>
                            </div>


                            <div className="container--last">
                                <label className='label--last' htmlFor="last_name">Last name</label>
                                <input id='last_name' type="text" placeholder='Enter your last name' name='Last name' required/>
                            </div>


                        </div>

                        <div className="container--email">
                            <label className='label--email' htmlFor="email">Email</label>
                            <input id='email' type="text" placeholder='yourname@email.com' name='email' required/>
                        </div>

                        <div className="container--message">
                            <label className='label--message' htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Send a message and i will reply you as soon as possible' ></textarea>
                        </div>

                        <div className="container--checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox"  />
                            <label className='label--checkbox' htmlFor="checkbox">You agree to providing your data to (name) who may contact you</label>
                        </div>


                        <button id='btn__submit'><span>Send Mesaage</span></button>
                    </form>

                </div>
            </div>

            


            <footer className='footer--wrapper'>
                <div>

                    <div className="footer--container">

                        <div className="intern">
                            <img src="/images/zuri-internship-logo.png" alt="" />
                        </div>
                        <div className="text">
                            <img src="/images/footer-text.png" alt="" />
                        </div>
                        <div className="logo">
                            <img src="/images/I4G.png" alt="" />
                        </div>

                    </div>

                </div>
            </footer> 

        </div>
        )
}

export default Contact
