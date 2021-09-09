import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";


function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response=> setPokemon(response.data.results))
      .catch(err => { console.log(err) })
  })
  return (
    <div className="App">
      {pokemon.map((item, i) => { return <li>{item.name}</li> })}
    </div>
  );
}

export default App;
