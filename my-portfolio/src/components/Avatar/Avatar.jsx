import './styles.css'
import '../../constant/colors.css'
const AvatarDisplay = () => {
    return (
        <div className="avatar-wrapper">
            <div className="gradient-border"></div>
            <div className="avatar-container"><img src="/img-portfolio.png" alt="avatar" /></div>
            <div className="code-icon"><img src="/code.png" alt="code" /></div>
            <div className="pen-icon"><img src="/pen.png" alt="pen" /></div>
        </div>
    )
}
export default AvatarDisplay