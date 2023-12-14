import { sampleIcon } from "./sampleIcon";
import { TrelloInterface, TrelloInterfaceOptions } from "./shared_definitions";
import { TrelloCardButton } from "./definitions/TrelloButton";
import { TrelloPopupItem } from "./definitions/TrelloPopup";

function addMailCallback(t: TrelloInterface) {
  t.get('card', 'shared', 'id', 'test');
  let popupItem: TrelloPopupItem = {
    text: "Add Mail:",
    url: "./card_button.html"
  }
  t.popup("Add Mail to report to", [popupItem]);
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
