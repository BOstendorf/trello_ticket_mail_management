import { TrelloInterface } from "../shared_definitions";

export type TrelloCardBackSection = {
  title: string;
  icon: string;
  content: {
    type: "iframe";
    url: string;
    height: number;
  };
  action: {
    text: string;
    callback: (t: TrelloInterface) => void;
  }
}
