import { useEffect, useState } from "react";
import { TrelloInterface } from "../../shared_definitions";
import { AddMailForm } from "../ui_elements/AddEmailForm";
import MailList, { mailEntry } from "../ui_elements/MailList";
import { is } from "typia";
import { isList, stringify } from "typescript_helpers";
import { TrelloSingleKeySet } from "../../definitions/TrelloSet";
import { Serializable } from "../../definitions/base_definitions";

export const RegisteredMailsSectionHeight = 320;

export default function RegisteredMails() {
  const [mails, setMails]: [mailEntry[], (value: any) => any] = useState([{mail: "testmail@uke.de", deleteCallback: ()=>{alert("deleting test mail")}}]);
  const [cardId, setCardId]: [string, (value: string) => any] = useState("");

  const ts = window.TrelloPowerUp.iframe();

  const removeRegisteredMail = async (mail: string, id: string) => {
    let registeredMails: string[] = ts.get(id, "shared", "registeredMails");
    let newRegisteredList: string[] = [];
    let newMails: mailEntry[] = [];
    for (const registeredMail of registeredMails) {
      if (mail !== registeredMail) {
        newRegisteredList.push(registeredMail);
        newMails.push({mail: registeredMail, deleteCallback: ()=>{removeRegisteredMail(registeredMail, id)}})
      }
    }
    await (ts.set as TrelloSingleKeySet)(cardId, "shared", "registeredMails", newRegisteredList);
    setMails(newMails);
  }

  const getMailEntryList = (mails: string[], id: string): mailEntry[] => {
    let result: mailEntry[] = [];
    for (const mail of mails) {
      result.push({mail: mail, deleteCallback: ()=>{removeRegisteredMail(mail, id)}})
    }
    return result;
  }

  const initialize = async () => {
    let id: string = await ts.card('id').get('id');
    setCardId(id);
    let registeredMails = await ts.get(id, "shared", "registeredMails");
    if (isList(registeredMails)) {
      setMails(getMailEntryList(registeredMails, id));
    }
  }

  useEffect(()=>{
    initialize();
  }, []);
  

  const confirmCallback = async (mail: string) => {
    let registeredMails: any = await ts.get(cardId, "shared", "registeredMails");
    if (isList(registeredMails)) {
      registeredMails.push(mail);
    }
    else {
      registeredMails = [mail];
    }
    await (ts.set as TrelloSingleKeySet)(cardId, "shared", "registeredMails", registeredMails)
    setMails(getMailEntryList(registeredMails, cardId));
  }

  return <div className={"p-2 rounded-lg bg-white h-80"}>
    <AddMailForm confirmCallback={confirmCallback} />
    <MailList mails={mails}/>
      <button
        className={`bg-red-500 hover:bg-blue-700 font-medium rounded-lg text-sm text-center px-5 p-1 mt-2`}
        onClick={async () => { let registeredMails = await ts.get(cardId, "shared", "registeredMails");
        alert(`currently registered mails are ${stringify(registeredMails)}`)
      }}>
        currently registered mails
      </button>
  </div>
}
