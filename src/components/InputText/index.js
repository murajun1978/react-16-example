import React from 'react'

const InputText = ({value, onChange}) => (
  <section>
    <input
      type="text"
      style={{width: '80%'}}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
    <p>{value}</p>
  </section>
)

export default InputText
