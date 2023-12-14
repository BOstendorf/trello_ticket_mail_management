type allowedCardsFields = "id" | "name" | "desc" | "start" | "due" | "dueComplete" | "closed" | "cover" | "attachments" | "members" | "labels" | "checklists" | "url" | "shortLink" | "idList" | "idShort" | "dateLastActivity" | "badges" | "customFieldItems" | "coordinates" | "address" | "locationName" | "pos";
export type TrelloCardFunction = (...fields: allowedCardsFields[]) => any;
