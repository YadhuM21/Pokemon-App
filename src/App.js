import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import FiltersnSorts from './Components/FiltersnSorts';
import Footer from './Components/Footer';
import PageButtons from './Components/PageButtons';
import PokeBody from './Components/PokeBody';

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currUrl, setcurrUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [prevUrl, setPrevUrl] = useState(null);
  const [nxtUrl, setNxtUrl] = useState(null);

  useEffect( () => {
    setLoading(true);
    let cancel;
    axios.get(currUrl , {
      cancelToken: new axios.CancelToken(ctoken => cancel = ctoken)
    }).then(res => {
      setLoading(false);
      setPokemonData(res?.data?.results);
      // console.log(res.data.results);
      setPrevUrl(res?.data?.previous);
      setNxtUrl(res?.data?.next);
    })

    return () => cancel();
  }, [currUrl]);

  const toNxtPg = () =>{
    setcurrUrl(nxtUrl);
  }

  const toPrevPg = () =>{
    setcurrUrl(prevUrl);
  }

  if(loading) return "Loading....";

  return (
    <>
        <h1>Pokemon Character Data</h1>
        <PageButtons toNxtPg={toNxtPg} nxtUrl={nxtUrl} toPrevPg={toPrevPg} prevUrl={prevUrl} />
        <FiltersnSorts pokemonData={pokemonData}/>
        <Footer/>
    </>
  );
}

export default App;
