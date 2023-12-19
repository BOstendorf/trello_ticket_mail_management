import { AddMailForm } from "../ui_elements/AddEmailForm";
import MailList from "../ui_elements/MailList";

export const RegisteredMailsSectionHeight = 320;

export default function RegisteredMails() {

  const confirmCallback = async (mail: string) => {

  }

  return <div className={"p-2 rounded-lg bg-white h-80"}>
    <AddMailForm confirmCallback={confirmCallback} />
    <MailList mails={[]}/>
  </div>
}
