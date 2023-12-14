import { TrelloIcon } from './TrelloIcon';
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
