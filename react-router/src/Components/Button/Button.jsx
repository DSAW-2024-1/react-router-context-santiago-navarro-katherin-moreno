import './Button.css';

export function Button({ callback, label}){
    
    return <button className="boton" onClick={callback}> {label} </button>


}
    
 export default Button       
    
