import React, { useEffect, useState } from 'react';
import './FilternSort.css';
import PokeBody from './PokeBody';
import PokeCard from './PokeCard';

function FiltersnSorts({pokemonData}) {

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fData, setfData] = useState('');
  const [results, setresults] = useState([]);

  const searchInput = document.getElementById('search');
  const searchWrapper = document.querySelector('.wrapper');
  const resultsWrapper = document.querySelector('.results');

  const handleFrom = (event) => {
    setFrom(event?.target?.value);
  }

  const handleTo = (event) => {
    setTo(event.target.value);
  }

  const handlefData = (event) => {
    // setresults([]);
    let searchVal = event.target.value;
    let temp = [] ;
    if(searchVal.length){
      pokemonData.filter((item) => {
        if(item.name.toLowerCase().includes(searchVal.toLowerCase())){
          temp.push(item);
        }
      });
      setresults(temp);
    }
    renderResults(temp);
    setfData(event.target.value);
  }

  const renderResults = (res) => {
    if (!res.length) {
      return searchWrapper.classList.remove('show');
    }
  
    else {
      const content = res
      .map((item) => {
        return `<li>${item.name}</li>`;
      })
      .join('');
  
      searchWrapper.classList.add('show');
      resultsWrapper.innerHTML = `<ul>${content}</ul>`;
    }
  }

  if(results.length === 0 ) {
    return (
      <div className='container'>

          <div className="wrapper col-6 my-3 mb-2">
            <input type="text" onChange={handlefData} name="search" id="search" placeholder="Type entire name to search" autoComplete="chrome-off"/>
            <button><i className="fa fa-search"></i></button>
            <div className="results">
              <ul>
              </ul>
            </div>
          </div>

          <div className="row">
            {pokemonData.map(x => (
                <div key={x.name} className='col-lg-4 col-md-6 my-3'>
                    <PokeCard cardUrl={x.url} poke={x} />
                </div>
            ))}
          </div>
      </div> 
  )
  }

  else {
    return (
      <div className='container'>

          <div className="wrapper col-6 my-3 mb-2">
            <input type="text" onChange={handlefData} name="search" id="search" placeholder="Type entire name to search" autoComplete="chrome-off"/>
            <button><i className="fa fa-search"></i></button>
            <div className="results">
              <ul>
              </ul>
            </div>
          </div>

          <div className="row">
            {results.map(x => (
                <div key={x.name} className='col-lg-4 col-md-6 my-3'>
                    <PokeCard cardUrl={x.url} poke={x} />
                </div>
            ))}
          </div>
      </div> 
  )
  }

}

export default FiltersnSorts;
