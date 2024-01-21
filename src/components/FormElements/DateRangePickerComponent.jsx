import { DatePicker, Label, TextInput } from "keep-react";
import { twMerge } from "tailwind-merge";

const DateRangePickerComponent = ({
    id,
    name,
    placeholder,
    label,
    handleOnChange,
    error,
    value,
    containerClassName,
    ...rest
}) => {
    return (
        <div className={twMerge("", containerClassName)}>
            <Label
                htmlFor={id}
                value={label}
                color={error ? "error" : "gray"}
            />
            <DatePicker
                showTwoMonth={true}
                id={id}
                name={name}
                placeholder={placeholder}
                {...rest}
                className="border-metal-300 py-2.5"
            >
                <DatePicker.Range />
            </DatePicker>
            {error && (
                <p className="mt-2 text-sm text-red-600  text-body-5">
                    {error}
                </p>
            )}
        </div>
    );
};


export default DateRangePickerComponent;
