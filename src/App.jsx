import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
// import Contact from './Contact'


function App() {

  return (
    <div className="App">
      
      <Header />
      <Main />
      <Footer />


          {/* <Route path='contact' element={<Contact />} /> */}

      
    </div>
  )
}

export default App
