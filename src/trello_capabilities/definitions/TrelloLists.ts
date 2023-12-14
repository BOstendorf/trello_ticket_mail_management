type allowedListsFields = "id" | "name" | "cards";
export type TrelloListsFunction = (...fields: allowedListsFields[]) => any;
