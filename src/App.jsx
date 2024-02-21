import { useState } from "react";
import ContactList, { dummyContacts } from "./components/ContactList";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  // const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? <div>Selected Contact View</div> : <ContactList />}
    </>
  );
}

export default App;
