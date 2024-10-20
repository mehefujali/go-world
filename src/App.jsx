
import './App.css'
import Countrys from './components/Countrys/Countrys'
import Hero from './components/Hero/Hero'
import Navbar from './components/Nav/Navbar'

function App() {


  return (
    <div className=' text-white'>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      {/* main section  */}
      <main >
        <Countrys></Countrys>
      </main>

    </div>
  )
}

export default App
