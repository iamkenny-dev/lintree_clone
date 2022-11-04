import { useState } from 'react'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'


function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <BrowserRouter>
      <Routes>

          <Route path='/contact' element={<Contact />} />

      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
