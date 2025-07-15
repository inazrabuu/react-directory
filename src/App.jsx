import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { generateContacts } from './utils/generateContacts'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import './App.css'

const allContacts = generateContacts(10000)

function App() {
  const [search, setSearch] = useState('')

  const handleSearchChange = useCallback((text) => {
    setSearch(text)
  }, [])

  return (
    <div>
      <h1>📒 Contact Directory</h1>
      <SearchBox value={search} onChange={handleSearchChange} />
      <ContactList contacts={allContacts} search={search} />
    </div>
  )
}

export default App
