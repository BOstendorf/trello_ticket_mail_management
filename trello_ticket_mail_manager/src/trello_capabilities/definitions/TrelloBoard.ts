type allowedBoardFields = "id" 
  | "name" 
  | "url" 
  | "shortLink" 
  | "members" 
  | "dateLastActivity" 
  | "idOrganization" 
  | "customFields" 
  | "labels" 
  | "memberships" 
  | "paidStatus";
export type TrelloBoardFunction = (...fields: allowedBoardFields[]) => any;
