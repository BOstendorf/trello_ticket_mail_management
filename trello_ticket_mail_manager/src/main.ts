import './style.css'
import { test, stringify } from 'typescript_helpers';
import { initBadges } from './trello_capabilities/card_badges';
import { initBoardButtons } from './trello_capabilities/board_buttons';

declare global {
  interface Window {
    TrelloPowerUp: any;
  }
}

//alert("test alert");

window.TrelloPowerUp.initialize({
  "card-badges": initBadges, 
  "board-buttons": initBoardButtons,
  "card-buttons": async function (t: any, options: any) {

  }
})

