import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './PokeCard.css'

function PokeCard({cardUrl,poke}) {

  const [weight, setCardWeight] = useState();
  const [height, setCardHeight] = useState();
  const [imgPoke, setImgPoke] = useState('...');
  const [hp, setCardHp] = useState();
  const [attack, setCardAttack] = useState();
  const [defence, setCardDefence] = useState();
  const [specialattack, setCardSpecialAttack] = useState();
  const [specialdefence, setCardSpecilDefence] = useState();
  const [speed, setCardSpeed] = useState();
  const [abilityOne, setCardAbilityOne] = useState();
  const [abilityTwo, setCardAbilityTwo] = useState();
  const [type, setCardType] = useState("Bug");

  useEffect(() => {
    let cancel;
    axios.get(cardUrl , {
      cancelToken: new axios.CancelToken(ctoken => cancel = ctoken)
    })
    .then(res => {
      setCardWeight(res?.data?.weight);
      setCardHeight(res?.data?.height);
      setImgPoke(res?.data?.sprites?.other?.dream_world?.front_default);
      setCardHp(res?.data?.stats?.[0]?.base_stat);
      setCardAttack(res?.data?.stats?.[1]?.base_stat);
      setCardDefence(res?.data?.stats?.[2]?.base_stat);
      setCardSpecialAttack(res?.data?.stats?.[3]?.base_stat);
      setCardSpecilDefence(res?.data?.stats?.[4]?.base_stat);
      setCardSpeed(res?.data?.stats[5]?.base_stat);
      setCardAbilityOne(res?.data?.abilities?.[0]?.ability?.name);
      setCardAbilityTwo(res?.data?.abilities?.[1]?.ability?.name);
      setCardType(res?.data?.types?.[0]?.type?.name);
    })

    return () => cancel();

  }, [cardUrl]);
  

  return (
    <>
        <Card type={type} abilityOne={abilityOne} abilityTwo={abilityTwo} imgUrl={imgPoke} height={height} weight={weight} name={poke.name.toUpperCase()} hp={hp} attack={attack} specialattack={specialattack} defence={defence} specialdefence={specialdefence} speed={speed} />
    </>
  );
}

export default PokeCard;
