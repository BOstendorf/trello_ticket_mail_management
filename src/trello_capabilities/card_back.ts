import { TrelloCardBackSection } from "./definitions/TrelloCardBackSection";
import { RegisteredMailsSectionHeight } from "./iframes/card_back_section/RegisteredMails";
import { sampleIcon } from "./sampleIcon";
import { TrelloInterface, TrelloInterfaceOptions } from "./shared_definitions";


export function initCardBackSection(t: TrelloInterface, options: TrelloInterfaceOptions): TrelloCardBackSection {
  return {
    title: "Registered Mails",
    icon: sampleIcon.dark,
    content: {
      type: "iframe",
      url: t.signUrl('./card_back_section'),
      height: RegisteredMailsSectionHeight,
    },
    action: {
      text: "test action",
      callback: (t: TrelloInterface) => {console.log("action callback")},
    }
  };
}
