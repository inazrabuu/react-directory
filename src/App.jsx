import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { generateContacts } from './utils/generateContacts'
import ContactList from './components/ContactList'
import './App.css'

const allContacts = generateContacts()

function App() {
  const [search, setSearch] = useState('')

  return (
    <div>
      <h1>📒 Contact Directory</h1>
      <input 
        placeholder='Search contacts ...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ContactList contacts={allContacts} search={search} />
    </div>
  )
}

export default App
