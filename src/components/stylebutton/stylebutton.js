import './Stylebutton.css';

function StyleButton(props) {
  const {text, onClick}=props;
  
  return <button className='stylebutton' onClick={onClick}>{text}</button> ;

}

export default StyleButton;