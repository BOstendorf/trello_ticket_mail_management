import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexPage } from './IndexPage'
import { initBadges } from './trello_capabilities/card_badges';
import { initBoardButtons } from './trello_capabilities/board_buttons';
import { initCardButtons } from './trello_capabilities/card_buttons';
import AddListenerMail from './trello_capabilities/iframes/card_buttons/AddListenerMail';
import { TrelloPowerUpWindowObject } from './trello_capabilities/shared_definitions';
import RegisteredMails from './trello_capabilities/iframes/card_back_section/RegisteredMails';
import { AddMailForm } from './trello_capabilities/iframes/ui_elements/AddEmailForm';

declare global {
  interface Window {
    TrelloPowerUp: TrelloPowerUpWindowObject;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage />}>
      </Route>
      <Route path='/board_button' element={<div>board_button</div>}>
      </Route>
      <Route path='/card_button' element={<AddListenerMail />} />
      <Route path="/card_back_section" element={<RegisteredMails />}/>
      <Route path="testing" element={<AddMailForm confirmCallback={(mail: string)=>{console.log(mail)} }/>} />
    </Routes>
  </BrowserRouter>
)

window.TrelloPowerUp.initialize({
  "card-badges": initBadges,
  "board_buttons": initBoardButtons,
  "card-buttons": initCardButtons,
})


