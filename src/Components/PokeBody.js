import React from 'react';
import PokeCard from './PokeCard';

function PokeBody({pokemonData}) {
  return( 
    <>
        <div className="row">
            {pokemonData.map(x => (
                <div key={x.name} className='col-lg-4 col-md-6 my-3'>
                    <PokeCard cardUrl={x.url} poke={x} />
                </div>
            ))}
        </div>
    </>
  );
}

export default PokeBody;
