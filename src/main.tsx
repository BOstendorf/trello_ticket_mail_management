import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexPage } from './IndexPage'
import { initBadges } from './trello_capabilities/card_badges';

declare global {
  interface Window {
    TrelloPowerUp: any;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage />}>
      </Route>
      <Route path='board_button' element={<div>board_button</div>}>
      </Route>
    </Routes>
  </BrowserRouter>
)

window.TrelloPowerUp.initialize({
  "card-badges": initBadges
})


