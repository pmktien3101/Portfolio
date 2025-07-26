import './styles.css'
import '../../constant/colors.css'
const Modal = ({children, width= '60%', height = '30%', background = 'var(--gradientToPink)', className, style }) => {
    return (
        <div className={`modal-container ${className} `} 
        style={{width: width, height: height, background:background, ...style}}>
            {children}
        </div>
    )
}
export default Modal