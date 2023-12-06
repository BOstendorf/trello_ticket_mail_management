import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'


window.TrelloPowerUp.initialize({
  "card-badges": async function (t: any, options: any) {
    console.log("called card-badges function");
    let cardId = await t.card('id').get('id');
//    console.log(stringify("test"));
//    alert(stringify("called some function"));
    return [
      {
        text: "test badge",
        color: "red"
      }
    ]
  }
})
