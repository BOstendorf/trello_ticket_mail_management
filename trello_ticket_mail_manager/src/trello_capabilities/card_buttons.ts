import { sampleIcon } from "./sampleIcon";
import { TrelloCardButton, TrelloInterface, TrelloInterfaceOptions } from "./shared_definitions";

function addMailCallback(t: TrelloInterface) {
  t.get('card', 'shared', 'id', 'test');
  alert("placeholder for logic to add mail");
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
