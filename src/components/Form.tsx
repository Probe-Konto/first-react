import { useState } from "react";

export default function Form(): React.JSX.Element {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);
    e.preventDefault();
  }

  return (
    <form className="mt-8 flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="">
        <input
          type="text"
          placeholder="first name"
          className="rounded-xl border-1 p-2"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="last name"
          className="ms-2 rounded-xl border-1 p-2"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder="email"
          className="mt-3 block w-full rounded-xl border-1 p-2"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="tel"
          placeholder="Mobile or Tele."
          className="mt-3 rounded-xl border-1 p-2"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />

        <br />

        <button
          type="submit"
          className="ms-45 mt-3 cursor-pointer rounded-xl border-1 bg-blue-600 p-2 text-blue-200 dark:bg-fuchsia-700 dark:text-fuchsia-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
