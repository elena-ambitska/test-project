
// eslint-disable-next-line react/prop-types
const InputTypeText = ({type, value, className, onChange}) => {

    return(
        <label>
            <input type={type} value={value} className={className} readOnly onChange={onChange}/>
        </label>
    )
}

export default InputTypeText;