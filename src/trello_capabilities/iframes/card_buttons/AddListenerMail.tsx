import { useState } from "react"

export default function AddListenerMail() {
  const [mail, setMail]: [string, (value: string) => void] = useState("");

  const onMailChange = (value: string) => {
    setMail(value);
  }
  return <div className={"bg-white p-2 h-auto"}>
      <form>
    <label className={"inline mb-2 text-sm font-medium text-gray-900"}>
      Email Adresse
    </label>
    <input type="email" id="email" className={"bg-gray-200 border border-gray-200 hover:border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"} 
      onChange={(event) => {onMailChange(event.target.value)}}
      placeholder="Mail"/>
      <button 
        className={"text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm text-center px-5 p-1 mt-2"}
        onClick={()=>{console.log(mail)}}>
        Add Mail
      </button>
</form>
  </div>
}
