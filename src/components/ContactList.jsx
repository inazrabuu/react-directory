import { useMemo, useCallback } from "react"
import { FixedSizeList as List } from "react-window"
import ContactCard from "./ContactCard"

const ITEM_HEIGHT = 60

function ContactList({ contacts, search }) {
  // const filtered = contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase())) //without memoization

  const filtered = useMemo(() => {
    console.log('filtering contact ...')
    return contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
  }, [contacts, search]) //with memmo

  const handleSelect = useCallback((contact) => {
    console.log(`Selected contact: ${contact.name}`)
  }, [])

  const Row = ({ index, style }) => {
    const contact = filtered[index]
    return (
      <div style={style}>
        <ContactCard key={contact.id} contact={contact} onSelect={handleSelect} />
      </div>
    )
  }

  return (
    <List 
      height={500} //container height
      itemCount={filtered.length}
      itemSize={ITEM_HEIGHT}
      width='100%'
    >
      {Row}
    </List>
  ) // with virtualization

  // return (
  //   <div>
  //     {filtered.map(contact => (
  //       <ContactCard key={contact.id} contact={contact} onSelect={handleSelect} />
  //     ))}
  //   </div>
  // ) // without virtualizatoin
}

export default ContactList