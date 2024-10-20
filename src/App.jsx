
import './App.css'
import Countrys from './components/Countrys/Countrys'
import Hero from './components/Hero/Hero'
import Navbar from './components/Nav/Navbar'

function App() {

  const handelSearchCountry = (event) => {
    console.log(event.target.value);

  }

  return (
    <div className=' text-white'>
      <header>
        <Navbar handelSearchCountry={handelSearchCountry}></Navbar>
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
