import React from "react"

const ContactCard = React.memo(function ContactCard({ contact, onSelect }) {
  console.log(`Rendering: ${contact.name}`)

  return (
    <div
      onClick={() => onSelect(contact)}
      style={{ padding: '8px', borderBottom: '1px solid #eee', cursor: 'pointer' }}
    >
      <strong>{contact.name}</strong><br />
      {contact.name}
    </div>
  )
})

export default ContactCard