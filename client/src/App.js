import React, { Component } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    console.log('DidMount ---->');
    let url = 'https://api.pokemontcg.io/v1/cards';
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then((result) => {
        this.setState({
          cards: result.cards
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <Card cards={this.state.cards}/>
          </div>
        </div>
      </>
    )
  }
}
export default App;