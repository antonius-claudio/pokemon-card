import React, { useState } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import './App.css';
import Detail from './pages/Detail';
import MyCards from './pages/MyCard';
import useFetch from './hooks/useFetch';

export default function App(props) {
  let [cards, setCards, loading, error] = useFetch(`https://api.pokemontcg.io/v1/cards`);
  let [myCards, setMyCards] = useState([]);

  function addToMyCard(newData) {
    if(!myCards.find(myCard => myCard.id === newData.id)) {
      setMyCards(myCards.concat(newData));
    } else {
      console.log('Card already owned');
    }
  }

  function setToCards(resultFind) {
    setCards(resultFind);
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
      <Nav setToCards={setToCards}></Nav>
      <div className="container">
        <div className="row">
          {loading && <h5>wait a sec...</h5>}
          {cards.cards && <Card cards={cards.cards}/>}
        </div>
        {cards.cards && <Detail card={cards.cards[0]} addToMyCard={addToMyCard}></Detail>}
        {cards.cards && <Detail card={cards.cards[1]} addToMyCard={addToMyCard}></Detail>}
        {myCards.length!==0 && <MyCards myCards={myCards}/>}
      </div>
    </>
  );
}