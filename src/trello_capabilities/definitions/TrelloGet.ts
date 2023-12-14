import { TrelloAPI_key, TrelloAPI_scope, TrelloAPI_visibility } from "./TrelloAPI";

export type TrelloGetFunction = (scope: TrelloAPI_scope, visibility: TrelloAPI_visibility, key?: TrelloAPI_key, default_value?: any) => any;
