import React from 'react';
import { Nav } from './components'
import './App.css';
import { Home, Detail, MyCard } from './pages';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App(props) {
  // let [myCards, setMyCards] = useState([]);
  // let [fetchCards, setFetchCards, loading, error] = useFetch(`https://api.pokemontcg.io/v1/cards`);
  // const dispatch = useDispatch();
  // const cards = useSelector(state => state.cards);
  
  // dispatch(setCards(fetchCards));
  
  // useEffect(() => {
  // }, [])

  // function addToMyCard(newData) {
  //   if(!myCards.find(myCard => myCard.id === newData.id)) {
  //     setMyCards(myCards.concat(newData));
  //   } else {
  //     console.log('Card already owned');
  //   }
  // }

  // function setToCards(resultFind) {
  //   setCards(resultFind);
  // }
  const routes = [
    {
      exact: true,
      path: '/',
      children: <Home/>
    },
    {
      path: '/detail/:id',
      children: <Detail/>
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
    <Provider store={store}>
      <Router>
        <Nav></Nav>
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
    </Provider>
  );
}