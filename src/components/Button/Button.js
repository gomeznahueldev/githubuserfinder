const Button = ({ type, className, handleClick, textButton, onKeyDown }) => {
  return (<button type={type} className={className} onClick={handleClick} onKeyDown={onKeyDown}>{textButton}</button>);
}

export default Button