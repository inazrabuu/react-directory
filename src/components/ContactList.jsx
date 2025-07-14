function ContactList({ contacts, search }) {
  const filtered = contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

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