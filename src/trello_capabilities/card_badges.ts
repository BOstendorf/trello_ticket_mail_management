import { stringify } from "typescript_helpers";
import { TrelloInterface, TrelloInterfaceOptions } from "./shared_definitions";

export async function initBadges(t: TrelloInterface, options: TrelloInterfaceOptions) {
  let cardId = await t.card('id').get('id');
  return [
    {
      text: cardId,
      color: "blue"
    }
  ]
}
