type allowedMemberFields = "id" | "fullName" | "username" | "avatar" | "initials";
export type TrelloMemberFunction = (...fields: allowedMemberFields[]) => any;
