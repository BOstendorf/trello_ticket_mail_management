import { useState } from "react"
import { TrelloInterface } from "../../shared_definitions";
import { isList, stringify } from "typescript_helpers";
import { is } from "typia";
import { mailIsValid } from "typescript_helpers/out/src/helper_functions";
import { TrelloSingleKeySet } from "../../definitions/TrelloSet";
export default function AddListenerMail() {
  const [mail, setMail]: [string, (value: string) => void] = useState("");
  const [mailValid, setMailValid]: [boolean, (value: boolean) => void] = useState(false);

  const onMailChange = (value: string) => {
    setMail(value);
    setMailValid(mailIsValid(value));
  }

  const buttonCallback = async () => {
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
      <form>
    <label className={"inline mb-2 text-sm font-medium text-gray-900"}>
      Email Adresse
    </label>
    <input type="email" id="email" className={`bg-gray-200 border text-gray-900 text-sm rounded-lg block w-full p-1 ${!mailValid ? 'border-red-400 hover:border-red-500 focus:border-red-500' : 'border-gray-200 hover:border-gray-400 focus:ring-blue-500 focus:border-blue-500'}`} 
      onChange={(event) => {onMailChange(event.target.value)}}
      placeholder="Mail"/>
      <button 
        className={`text-white hover:bg-blue-700 font-medium rounded-lg text-sm text-center px-5 p-1 mt-2 ${!mailValid ? 'bg-gray-200' : 'bg-blue-500'}`}
        onClick={()=>{buttonCallback()}}>
        Add Mail
      </button>
</form>
  </div>
}
