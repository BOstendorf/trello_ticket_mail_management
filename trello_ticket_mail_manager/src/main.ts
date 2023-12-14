import './style.css'
import { initBadges } from './trello_capabilities/card_badges';
import { initBoardButtons } from './trello_capabilities/board_buttons';
import { initCardButtons } from './trello_capabilities/card_buttons';

declare global {
  interface Window {
    TrelloPowerUp: any;
  }
}

//alert("test alert");

window.TrelloPowerUp.initialize({
  "card-badges": initBadges, 
  "board-buttons": initBoardButtons,
  "card-buttons": initCardButtons,
})

