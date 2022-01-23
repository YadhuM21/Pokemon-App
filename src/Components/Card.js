import React from 'react';
import './Card.css'

function Card({type , imgUrl , abilityOne , abilityTwo , height , weight , name , hp , attack , defence , specialattack , specialdefence , speed}) {

  return (
    <div>
    <figure className="cardtwo card--normal">
      <div className="card__image-container">
        <img src={imgUrl} alt="Eevee" className="card__image" />
      </div>

      <figcaption className="card__caption">
        <h1 className="card__name">{name}</h1>

        <h3 className="card__type">{type}</h3>

        <table className="card__stats">
          <tbody>
          <tr>
              <th>Height</th>
              <td>{height}</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{weight}</td>
            </tr>
            <tr>
              <th>HP</th>
              <td>{hp}</td>
            </tr>
            <tr>
              <th>Attack</th>
              <td>{attack}</td>
            </tr>

            <tr>
              <th>Defense</th>
              <td>{defence}</td>
            </tr>

            <tr>
              <th>Special Attack</th>
              <td>{specialattack}</td>
            </tr>
            <tr>
              <th>Special Defense</th>
              <td>{specialdefence}</td>
            </tr>
            <tr>
              <th>Speed</th>
              <td>{speed}</td>
            </tr>
          </tbody>
        </table>

        <div className="card__abilities">
          <h4 className="card__ability">
            <span className="card__label">Ability</span>
            {abilityOne ? abilityOne : "--"}
          </h4>
          <h4 className="card__ability">
            <span className="card__label">Hidden Ability</span>
            {abilityTwo ? abilityTwo : "none"}
          </h4>
        </div>
      </figcaption>
    </figure>
  </div>
  )
}

export default Card;
