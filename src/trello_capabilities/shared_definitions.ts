import { TrelloPopupFunction } from "./definitions/TrelloPopup";
import { TrelloGetFunction } from "./definitions/TrelloGet";
import { TrelloSetFunction } from "./definitions/TrelloSet";

export type TrelloPowerUpWindowObject = {
  iframe: () => TrelloInterface;
  initialize: (capability_init_object: any) => void;
}

export type TrelloInterface = {
  list: any;
  lists: any;
  card: any;
  cards: any;
  member: any;
  board: any;
  getContext: any;
  get: TrelloGetFunction;
  set: TrelloSetFunction;
  popup: TrelloPopupFunction;
  getAll: () => any;
  arg: (str: string) => any;
};
const t_types = [
  "getContext",
  "isMemberSignedIn",
  "memberCanWriteToModel",
  "requestWithContext",
  "getAll",
  "remove",
  "safe",
  "arg",
  "signUrl",
  "navigate",
  "showCard",
  "hideCard",
  "alert",
  "hideAlert",
  "popup",
  "overlay",
  "boardBar",
  "modal",
  "updateModal",
  "hide",
  "closePopup",
  "back",
  "hideOverlay",
  "closeOverlay",
  "hideBoardBar",
  "closeBoardBar",
  "closeModal",
  "sizeTo",
  "localizeKey",
  "localizeKeys",
  "localizeNode",
  "card",
  "cards",
  "list",
  "lists",
  "member",
  "board",
  "organization",
  "attach",
  "requestToken",
  "authorize",
  "storeSecret",
  "loadSecret",
  "clearSecret",
  "notifyParent",
  "confetti",
  "jwt",
  "getColorToken",
  "getComputedColorToken",
  "subscribeToThemeChanges",
  "getRestApi",
  "PluginDisabled",
  "InvalidContext",
  "NotHandled",
  "command",
  "args",
  "source",
  "request",
  "secret"
]
export type TrelloInterfaceOptions = any;



