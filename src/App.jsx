import './App.css'
import img from './assets/weather.png'
import img2 from './assets/heavy-rain.png'
import img3 from './assets/rainy-day.png'
import { useEffect, useState } from 'react'
function App() {

  const [location, setLocation] = useState('')
  const search= async(cityname)=>{
    try {
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${import.meta.env.VITE_API_KEY}`;
      const response=await fetch(url);
      const data=await response.json();
      console.log(data);
    } catch (error) {
      //later to defined
    }
  }
  
  return (
    <>
    <div class="font-bold text-3xl text-center mt-10 animate-pulse">
    <h1>Modern Multi-Weather App</h1>
    </div>
    <img src={img2} alt="weather logo2" />
    <img src={img} alt="weather logo1" />
    <img src={img3} alt="weather logo3" />
  
    <br></br><br></br>

    {/* For getting weather location i.e.hometown */}
    <label for="fname">Location: </label>
    <input type='text' onChange={e=>setLocation(e.target.value)}></input>
    <h1>You are in: {location}</h1>
    <h2>Temperature : </h2>
    
    </>
  )
}


export default App
