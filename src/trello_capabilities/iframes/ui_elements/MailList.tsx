import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isList } from "typescript_helpers";

export type mailEntry = {
  mail: string;
  deleteCallback: Function;
}

function MailItem({ mail, deleteCallback }: mailEntry) {
  return <div className={"flex items-center gap-x-2.5 "}>
    <button className={"inline-flex p-1 align-middle items-center justify-center text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"}>
      <FontAwesomeIcon className={"w-4 h-4"} icon={faXmark} />
    </button>
    <li className={"flex space-x-3 align-middle"}>{mail}</li>
  </div>
}

export default function MailList({mails}: {mails: mailEntry[]}) {
  const tmpArray = ["aid", "eascs", "sacidnhesr", "saicdhes"];

  return <div>
    <ul className={"space-y-3 border-2 border-indigo-400 rounded-lg p-3"}>
      {
        ((!isList(mails) || mails.length === 0) && tmpArray.map((mail: string, count: number) => <MailItem key={count} mail={mail} deleteCallback={()=>{console.log("delete mail")}}/>)) ||
          mails.map(({mail, deleteCallback}: {mail: string; deleteCallback: Function}, count: number)=> <MailItem key={count} mail={mail} deleteCallback={deleteCallback}/>)
      }
    </ul>
  </div>
}
