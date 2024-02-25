import { useState } from "react";
import ContactList, { dummyContacts } from "./components/ContactList";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  // const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContactId, setSelectedContactId] = useState(null);


  if (selectedContactId) {
    return <div>
      selected Contact
    </div>
  }else{
  return (
    <>
       <ContactList setSelectedContactId={setSelectedContactId}/>
    </>
  );
}

export default App;
