import { TrelloAPI_scope, TrelloAPI_visibility } from "./TrelloAPI";
import { Serializable } from "./base_definitions";


export type TrelloSingleKeySet = (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, key: string, value: Serializable) => any;
export type TrelloMultiKeySet = (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, values: {[key: string]: Serializable}) => any;

export type TrelloSetFunction = TrelloSingleKeySet | TrelloMultiKeySet;
