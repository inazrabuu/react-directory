import { useMemo } from "react"

function ContactList({ contacts, search }) {
  // const filtered = contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase())) //without memoization

  const filtered = useMemo(() => {
    console.log('filtering contact ...')
    return contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
  }, [contacts, search]) //with memmo

  return (
    <div>
      {filtered.map(contact => (
        <div key={contact.id}>
          <strong>{contact.name}</strong> - {contact.email}
        </div>
      ))}
    </div>
  )
}

export default ContactList