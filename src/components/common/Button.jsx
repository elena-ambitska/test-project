import '../../styles/button.css'

// eslint-disable-next-line react/prop-types
const Button = ({id, type, text, className, onClick}) => {

    return (
        <button
            id={id}
            type={type}
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    type: "button",
};

export default Button;