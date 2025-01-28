const Input = ({ id, text, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className="">{text}</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </>
  )
}

export default Input