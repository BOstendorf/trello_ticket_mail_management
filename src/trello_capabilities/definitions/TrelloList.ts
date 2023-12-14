
type allowedListFields = "id" | "name" | "cards";
export type TrelloListFunction = (...fields: allowedListFields[]) => any;
