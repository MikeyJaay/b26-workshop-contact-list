import { useEffect, useState } from "react";

export default function SelectedContact ({ selectedContactId }) {
    const [selectedContact, setSelectedContact] = useState(null)
  
    useEffect(() => {
      async function fetchSelectedContact() {
        try {
          const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const json = await response.json()
          setSelectedContact(json)
        } catch (e) {
          console.error(e)
        }
      }
      fetchSelectedContact()
    }, [])
  
    if (!selectedContact) {
      return <div>Loading . . .</div>
    }
  
    return <div>
        <p>{selectedContact.name}</p>
        <p>{selectedContact.email}</p>
        <p>{selectedContact.phone}</p>
    </div>
  }