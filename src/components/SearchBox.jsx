import React from "react"

const SearchBox = React.memo(function SearchBox({ value, onChange }) {
  console.log(`Rendering SearchBox`)

  return (
    <input 
      placeholder="Search contacts..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: '8px', marginBottom: '12px', width: '100%' }}
    />
  )
})

export default SearchBox