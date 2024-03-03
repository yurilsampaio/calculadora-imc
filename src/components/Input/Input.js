import './style.css';

function Input(props) {
    return(
        <input
            type={props.type}
            inputMode={props.inputMode}
            pattern={props.pattern}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            id={props.id}
        />
    );
}

export default Input;