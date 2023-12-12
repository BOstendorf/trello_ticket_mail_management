type TrelloIdString = string;
type TrelloAPI_scope = "board" | "card" | "member" | "organization" | TrelloIdString;
type TrelloAPI_visibility = "shared" | "private";
type TrelloAPI_key = string;
type Serializable = string | number | boolean | {
  [key: string|number]: Serializable;
}

type TrelloSingleKeySet = (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, key: string, value: Serializable) => void;
type TrelloMultiKeySet = (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, values: {[key: string]: Serializable}) => void;
export type TrelloInterface = {
  list: any;
  lists: any;
  card: any;
  cards: any;
  member: any;
  board: any;
  getContext: any;
  get: (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, key?: TrelloAPI_key, default_value?: any) => any;
  set: TrelloSingleKeySet | TrelloMultiKeySet;
  getAll: () => any;
};
const t_types = [
  "getContext",
  "isMemberSignedIn",
  "memberCanWriteToModel",
  "requestWithContext",
  "getAll",
  "get",
  "set",
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

export type TrelloIcon = {
  dark: string;
  light: string;
}
/*
 * reference https://developer.atlassian.com/cloud/trello/power-ups/capabilities/board-buttons/
admin - User is an admin of the board
edit - User can edit the board
readOnly - User can not edit the board.
signedIn - User is logged into Trello.
signedOut - User is not logged into Trello.
always - Always show.

The default is edit
*/
type TrelloBoardButtonCondition = "edit" | "admin" | "readOnly" | "signedIn" | "signedOut" | "always"

type TrelloBoardButton_base = {
  icon: TrelloIcon;
  text: string;
  condition: TrelloBoardButtonCondition;
}

type TrelloBoardButton_url = TrelloBoardButton_base & { url: string; target?: string };

type TrelloBoardButton_callback = TrelloBoardButton_base & { callback: Function };

export type TrelloBoardButton = TrelloBoardButton_url | TrelloBoardButton_callback;

export type TrelloCardButton = TrelloBoardButton;
