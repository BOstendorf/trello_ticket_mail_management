import { stringify } from "typescript_helpers";
import { sampleIcon } from "./sampleIcon";
import { TrelloBoardButton, TrelloInterface, TrelloInterfaceOptions } from "./shared_definitions";


function boardButtonCallback(t: TrelloInterface) {
  alert(stringify(Object.keys(t)));
}

export function initBoardButtons(t: TrelloInterface, options: TrelloInterfaceOptions): TrelloBoardButton[] {
  return [
    {
      icon: sampleIcon,
      text: "sample board button",
      condition: "always",
      callback: boardButtonCallback
    }
  ]

}
