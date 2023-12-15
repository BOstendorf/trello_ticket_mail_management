import { TrelloAPI_scope, TrelloAPI_visibility } from "./TrelloAPI";
import { Serializable } from "./base_definitions";


export type TrelloSingleKeySet = (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, key: string, value: Serializable) => void;
export type TrelloMultiKeySet = (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, values: {[key: string]: Serializable}) => void;

export type TrelloSetFunction = TrelloSingleKeySet | TrelloMultiKeySet;
