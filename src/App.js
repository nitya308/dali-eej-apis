import './App.css';
import { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';

function App() {
  
  const [nasaImage, setNasaImage] = useState("")

  useEffect(getImage,[]);

  function processResult(result) {
    console.log("RESULT:", result.data.url);
    setNasaImage(result.data.url);
  }

  function getImage(){
    // gets the image URl for the NASA image of the day
    // and store it in the variable nasaImage
    axios.get("https://api.nasa.gov/planetary/apod?api_key=4B0XhJm9XcvCGwO79WrYyiFF7iCaAwvSeh24IBd3").then(processResult)
  };

  return (
    <div className="App">
      <img src={nasaImage} width={"500px"} alt="nasa pic of the day"/>
    </div>
  );


}

export default App;



