import './background.css'

export const Background = ({ src, alt, height }) => {
  return (
    <img className='background' src={src} alt={alt} style={{ height: `${height}px` }} />
  )
}
