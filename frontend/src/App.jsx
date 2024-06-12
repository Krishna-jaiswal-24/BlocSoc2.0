import {Footer, Navbar , IdCard , NewsLetter} from './components/'

function App() {
  return (
    <div className="w-screen h-screen bg-black px-40">

        <Navbar/>
        <h1 className="text-4xl text-white">BlocSoc ID-Card</h1>
        <IdCard/>
        <NewsLetter/>
        <Footer />
    </div>
  )
}

export default App
