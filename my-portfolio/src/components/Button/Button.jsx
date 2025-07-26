import './styles.css'
import '../../constant/colors.css'
const Button = ({text, onClick, variant = 'solid', className='', style }) => {
    return (
       <button onClick={onClick}
       className={`base-button ${variant === 'outline' ? 'outline' : 'solid'} ${className}`}
       style={style}
       >
        {text}
       </button>
    )
}
export default Button