import './App.css'
import img from './assets/weather.png'
import img2 from './assets/heavy-rain.png'
import img3 from './assets/rainy-day.png'
function App() {

  return (
    <>
    <div class="font-bold text-3xl text-center mt-10">
    <h1>Modern Multi-Weather App</h1>
    </div>
    <img src={img2} alt="weather logo2" />
    <img src={img} alt="weather logo1" />
    <img src={img3} alt="weather logo3" />
  
    
    <br></br><br></br>

    {/* For getting weather location i.e.hometown */}
    <label for="fname">Location: </label>
    <input type="text" id="loc" name="locname"></input>

    </>
  )
}

export default App
