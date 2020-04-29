import React, { useState } from 'react';
import {Card, Nav} from './components'
// import Card from './components/Card';
// import Nav from './components/Nav';
import './App.css';
import {Home, Detail, MyCard} from './pages';
// import Detail from './pages/Detail';
// import MyCards from './pages/MyCard';
import useFetch from './hooks/useFetch';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';



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
  const routes = [
    {
      exact: true,
      path: '/',
      children: <Home cards={cards}/>
    },
    {
      path: '/detail/:id',
      children: <Detail addToMyCard={addToMyCard}/>
    },
    {
      path: '/mycard',
      children: <MyCard/>
    }
  ];
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
    <Router>
      <Nav setToCards={setToCards}></Nav>
      <div className="container">
        {/* <Home cards={cards} loading={loading}/>
        {cards.cards && <Detail card={cards.cards[0]} addToMyCard={addToMyCard}></Detail>}
        {cards.cards && <Detail card={cards.cards[1]} addToMyCard={addToMyCard}></Detail>}
        {myCards.length!==0 && <MyCard myCards={myCards}/>} */}
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}