import { useEffect, useState } from "react";
import { TrelloInterface } from "../../shared_definitions";
import { AddMailForm } from "../ui_elements/AddEmailForm";
import MailList, { mailEntry } from "../ui_elements/MailList";
import { is } from "typia";

export const RegisteredMailsSectionHeight = 320;

export default function RegisteredMails() {
  const [mails, setMails]: [mailEntry[], (value: any) => any] = useState([]);
  var t: TrelloInterface | null = null;

  const fetchAndSetRegisteredMails = async (t: TrelloInterface) => {
    let cardId = await t.card('id').get('id');
    let registeredMails = await t.get(cardId, "shared", "registeredMails");
    setMails(registeredMails.map((mail: string): mailEntry => {
      return {mail: mail, deleteCallback: ()=>{}};
    } ))
  }

  useEffect(()=>{
    t = window.TrelloPowerUp.iframe();
  }, []);
  
  useEffect(()=>{
   
    /*if (is<TrelloInterface>(t)) {
      fetchAndSetRegisteredMails(t);
    }*/
  }, [t]);

  const confirmCallback = async (mail: string) => {
    
    var t = window.TrelloPowerUp.iframe();
    let cardId = await t.card('id').get('id');
    let registeredMails = await t.get(cardId, "shared", "registeredMails");
  }

  return <div className={"p-2 rounded-lg bg-white h-80"}>
    <AddMailForm confirmCallback={confirmCallback} />
    <MailList mails={mails}/>
  </div>
}
