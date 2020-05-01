import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App, { AppRouter } from '../App';
import { getCards, getCardsById } from '../store/actions/cardsActions';
import { MemoryRouter } from 'react-router-dom';
import { Detail } from '../pages';

afterEach(() => {
  console.log('-------Clean-------')
  cleanup()
})

// jest.mock('../store/actions/cardsActions.js')
// getCards.mockReturnValue({
//   type: 'GET_CARDS',
//   payload: {
//       cards: [
//         {
//           "id": "dp6-90",
//           "name": "Cubone",
//           "nationalPokedexNumber": 104,
//           "imageUrl": "https://images.pokemontcg.io/dp6/90.png",
//           "imageUrlHiRes": "https://images.pokemontcg.io/dp6/90_hires.png",
//           "types": [
//             "Fighting"
//           ],
//           "supertype": "Pokémon",
//           "subtype": "Basic",
//           "hp": "60",
//           "retreatCost": [
//             "Colorless"
//           ],
//           "convertedRetreatCost": 1,
//           "number": "90",
//           "artist": "Kagemaru Himeno",
//           "rarity": "Common",
//           "series": "Diamond & Pearl",
//           "set": "Legends Awakened",
//           "setCode": "dp6",
//           "attacks": [
//             {
//               "cost": [
//                 "Colorless"
//               ],
//               "name": "Headbutt",
//               "text": "",
//               "damage": "10",
//               "convertedEnergyCost": 1
//             },
//             {
//               "cost": [
//                 "Fighting",
//                 "Colorless"
//               ],
//               "name": "Bonemerang",
//               "text": "Flip 2 coins. This attack does 20 damage times the number of heads.",
//               "damage": "20×",
//               "convertedEnergyCost": 2
//             }
//           ],
//           "resistances": [
//             {
//               "type": "Lightning",
//               "value": "-20"
//             }
//           ],
//           "weaknesses": [
//             {
//               "type": "Water",
//               "value": "+10"
//             }
//           ]
//         },
//         {
//           "id": "ex14-85",
//           "name": "Windstorm",
//           "imageUrl": "https://images.pokemontcg.io/ex14/85.png",
//           "imageUrlHiRes": "https://images.pokemontcg.io/ex14/85_hires.png",
//           "supertype": "Trainer",
//           "subtype": "Item",
//           "hp": "None",
//           "number": "85",
//           "artist": "Ryo Ueda",
//           "rarity": "Uncommon",
//           "series": "EX",
//           "set": "Crystal Guardians",
//           "setCode": "ex14",
//           "text": [
//             "Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (both yours and your opponent's) and discard them."
//           ]
//         }
//       ]
//   }
// })

test('should render correct navbar', () => {
  const { container } = render(<App/>);
  const liElements = container.querySelectorAll('li');
  const thirdLi = liElements[2];
  expect(thirdLi.textContent).toBe('MyCard');
})

test('should render correct home page (nav button)', () => {
  const { getByTestId } = render(<App/>);
  const linkToHome = getByTestId('home-page-btn');
  fireEvent.click(linkToHome);
  const content = getByTestId('contentHome');
  expect(content).toBeInTheDocument();
})

test('should display home content', () => {
  const { getByTestId } = render(<App/>);
  const content = getByTestId('contentHome');
  expect(content).toBeInTheDocument();
})

// test('home page should display correct data from API', () => {
//   const { getByText } = render(
//     <MemoryRouter initialEntries={['/']}>
//       <AppRouter/>
//     </MemoryRouter>
//   );
//   const textName = getByText(/Cubone/i);
//   expect(textName).toBeInTheDocument();
// })

// test('should render correct detail page (detail card)', () => {
//   const { getByTestId } = render(<Detail/>);
//   const content = getByTestId('contentDetail');
//   expect(content).toBeInTheDocument();
// })

test('should render correct mycard page (nav button)', () => {
  const { getByTestId } = render(<App/>);
  const linkToMyCard = getByTestId('mycard-page-btn');
  fireEvent.click(linkToMyCard);
  const content = getByTestId('contentMyCard');
  expect(content).toBeInTheDocument();
})

// test('should display detail content', () => {
//   const { getByTestId } = render(<Detail/>);
//   const content = getByTestId('contentDetail');
//   expect(content).toBeInTheDocument();
// })