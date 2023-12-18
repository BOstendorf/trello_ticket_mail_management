import { useState } from "react";
import { mailIsValid } from "typescript_helpers/out/src/helper_functions";


export function AddMailForm({ confirmCallback }: { confirmCallback: (mail: string) => void }) {
  const [mail, setMail]: [string, (value: string) => void] = useState("");
  const [mailValid, setMailValid]: [boolean, (value: boolean) => void] = useState(false);

  const onInputChange = (value: string) => {
    setMail(value);
    setMailValid(mailIsValid(value));
  }

  const buttonCallback = async () => {
    if (!mailValid) {
      alert(`mail ${mail} is not valid mail address`);
      return;
    }
    confirmCallback(mail);
  }

  return (
    <form className={"bg-white p-2 rounded-lg"}>
      <label className={"inline mb-2 text-sm font-medium text-gray-900"}>
        Email Adresse
      </label>
      <input type="email"
        id="email"
        className={`bg-gray-200 border text-gray-900 text-sm rounded-lg block w-full p-1 ${!mailValid ? 'hover:border-red-500 focus:border-red-500' : 'border-gray-200 hover:border-gray-400 focus:ring-blue-500 focus:border-blue-500'}`}
        onChange={(event) => { onInputChange(event.target.value) }}
        placeholder="Mail" />
      <button
        className={`text-white hover:bg-blue-700 font-medium rounded-lg text-sm text-center px-5 p-1 mt-2 ${!mailValid ? 'bg-gray-200' : 'bg-blue-500'}`}
        onClick={() => { buttonCallback() }}>
        Add Mail
      </button>

    </form>
  )
}
