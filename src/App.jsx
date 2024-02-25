import ContactList from './components/ContactList';
import './App.css'
import { useState } from 'react';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  if (selectedContactId) {
    return <div>
      <SelectedContact selectedContactId={selectedContactId}/>
    </div>
  } else {
    return <ContactList setSelectedContactId={setSelectedContactId} />
  }
}
