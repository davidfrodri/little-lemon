import './button.css'

export const Button = ({ text, type }) => {
  return (
    <button type={type}>{text}</button>
  )
}
