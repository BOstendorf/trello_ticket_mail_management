import { sampleIcon } from "./sampleIcon";
import { TrelloInterface, TrelloInterfaceOptions } from "./shared_definitions";
import { TrelloCardButton } from "./definitions/TrelloButton";
import { TrelloPopupItem } from "./definitions/TrelloPopup";
import { stringify } from "typescript_helpers";

async function addMailCallback(t: TrelloInterface) {
  //t.get('card', 'shared', 'id', 'test');
  //let name = t.card('name');
  //let popupItem: TrelloPopupItem = {
  //  text: "Add Mail:",
  //  url: "./pages/card_button",
  //}
  //alert(stringify([popupItem, name]));
  //return t.popup({title: "Add Mail to report to", items: [popupItem]});
  let cardId = await t.card('id').get('id');
  t.popup({
    title: 'Add Mail Listener',
    url: './card_button',
    height: 128,
    args: { triggeringCardId: cardId }
  })
}

export function initCardButtons(t: TrelloInterface, options: TrelloInterfaceOptions): TrelloCardButton[] {
  return [
    {
      icon: sampleIcon,
      text: "add email card button",
      condition: "always",
      callback: addMailCallback
    }
  ]
}
