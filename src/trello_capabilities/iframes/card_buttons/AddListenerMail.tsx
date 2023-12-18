import { isList, stringify } from "typescript_helpers";
import { mailIsValid } from "typescript_helpers/out/src/helper_functions";
import { TrelloSingleKeySet } from "../../definitions/TrelloSet";
import { AddMailForm } from "../ui_elements/AddEmailForm";
export default function AddListenerMail() {

  const confirmCallback = async (mail: string) => {
    if (!mailIsValid(mail)) {
      alert(`mail ${mail} is not valid mail address`);
      return;
    }
    
    var t = window.TrelloPowerUp.iframe();
    let cardId = await t.card('id').get('id');
    let callingId = await t.arg('triggeringCardId');
    let registeredMails = await t.get(cardId, "shared", "registeredMails");
    if(!isList(registeredMails)) {
      registeredMails = [];
    }
    registeredMails.push(mail);
    alert(stringify([cardId, callingId, {"registeredMails": registeredMails}]));
   
    (t.set as TrelloSingleKeySet)(callingId, "shared", "registeredMails", registeredMails);
  }

  return <div className={"bg-white p-2 h-32 rounded-lg"}>
    <AddMailForm confirmCallback={confirmCallback}/>
  </div>
}
