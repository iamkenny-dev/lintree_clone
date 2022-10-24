import { useState } from 'react'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
