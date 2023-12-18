import { AddMailForm } from "../ui_elements/AddEmailForm";
import MailList from "../ui_elements/MailList";


export default function RegisteredMails() {

  const confirmCallback = async (mail: string) => {

  }

  return <div className={"p-2 rounded-lg bg-white"}>
    <AddMailForm confirmCallback={confirmCallback} />
    <MailList mails={[]}/>
  </div>
}
