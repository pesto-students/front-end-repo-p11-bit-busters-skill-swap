import { Label, TextInput } from "keep-react";

const TextInputComponent = ({ id, name, placeholder, label, handleOnChange, error, value, ...rest }) => {
    return (
        <div>
            <Label htmlFor={id} value={label} color={error ? 'error' : 'gray'}/>
            <TextInput
                id={id}
                name={name}
                placeholder={placeholder}
                color={error ? 'error' : 'gray'}
                handleOnChange={handleOnChange}
                helperText={error ? error : ''}
                value={value}
                {...rest}
            />
        </div>
    );
};

export default TextInputComponent;
