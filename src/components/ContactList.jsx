import { useMemo, useCallback } from "react"
import ContactCard from "./ContactCard"

function ContactList({ contacts, search }) {
  // const filtered = contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase())) //without memoization

  const filtered = useMemo(() => {
    console.log('filtering contact ...')
    return contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
  }, [contacts, search]) //with memmo

  const handleSelect = useCallback((contact) => {
    console.log(`Selected contact: ${contact.name}`)
  }, [])

  return (
    <div>
      {filtered.map(contact => (
        <ContactCard key={contact.id} contact={contact} onSelect={handleSelect} />
      ))}
    </div>
  )
}

export default ContactList