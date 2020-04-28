import React, { useState } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import './App.css';
import Detail from './pages/Detail';
import MyCards from './pages/MyCard';
import useFetch from './hooks/useFetch';

export default function App(props) {
  const [cards, setCards, loading, error] = useFetch(`https://api.pokemontcg.io/v1/cards`);
  const [myCards, setMyCards] = useState([]);

  function addToMyCard(newData) {
    if(!myCards.find(myCard => myCard.id === newData.id)) {
      setMyCards(myCards.concat(newData));
    } else {
      console.log('Card already owned');
    }
  }

  // useEffect(() => {
  //   let page = 1;
  //   let url = `https://api.pokemontcg.io/v1/cards?page=${page}`;
  //   fetch(url, {
  //     method: 'GET'
  //   })
  //     .then(response => response.json())
  //     .then((result) => {
  //       setCards(result.cards);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <Nav></Nav>
      <div className="container">
        {cards.cards && <Detail card={cards.cards[0]} addToMyCard={addToMyCard}></Detail>}
        {cards.cards && <Detail card={cards.cards[1]} addToMyCard={addToMyCard}></Detail>}
        {myCards.length!==0 && <MyCards myCards={myCards}/>}
        <div className="row">
          {loading && <h5>wait a sec...</h5>}
          {cards.cards && <Card cards={cards.cards}/>}
        </div>
      </div>
    </>
  );
}