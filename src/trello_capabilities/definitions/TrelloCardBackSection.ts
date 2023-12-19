import { TrelloInterface } from "../shared_definitions";
import { TrelloIcon } from "./TrelloIcon";

export type TrelloCardBackSection = {
  title: string;
  icon: TrelloIcon;
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
