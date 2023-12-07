import './style.css'
import { test, stringify } from 'typescript_helpers';

window.TrelloPowerUp.initialize({
  "card-badges": async function (t: any, options: any) {
    console.log("called card-badges function");
    let cardId = await t.card('id').get('id');
      console.log(stringify("test"));
    return [
      {
        text: cardId,
        color: "red"
      }
    ]
  }
})

