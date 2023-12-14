import { TrelloAPI_scope, TrelloAPI_visibility } from "./TrelloAPI";
import { Serializable } from "./base_definitions";


type TrelloSingleKeySet = (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, key: string, value: Serializable) => void;
type TrelloMultiKeySet = (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, values: {[key: string]: Serializable}) => void;

export type TrelloSetFunction = TrelloSingleKeySet | TrelloMultiKeySet;
