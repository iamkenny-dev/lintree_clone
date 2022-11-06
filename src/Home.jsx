import React from 'react'
import Main from './Main'
import Header from './Header'
// import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Main />
        {/* <Footer /> */}
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

export default Home
