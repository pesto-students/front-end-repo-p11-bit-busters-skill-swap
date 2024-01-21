import { Label } from "keep-react";
import ReactDatePicker from "react-datepicker";
import { twMerge } from "tailwind-merge";
import { Calendar } from "phosphor-react";
import moment from "moment";


const DatePickerComponent = ({
    id,
    name,
    placeholder,
    label,
    onChange,
    error,
    className,
    containerClassName,
    ...rest
}) => {
    const handleOnChange = (date) => {
        const e = {
            target: {
                name: name,
                value: moment(date).format('YYYY-MM-DD')
            }
        }
        onChange(e);
    }
    return (
        <div className={twMerge("", containerClassName)}>
            <Label
                htmlFor={id}
                value={label}
                color={error ? "error" : "gray"}
            />
            <div
                className="border border-metal-300 py-2 px-4 text-base rounded-md flex items-center"
            >
                <ReactDatePicker className={twMerge(`outline-none mb-0.5 flex-1`, className)} onChange={handleOnChange} {...rest} />
                <span className="text-slate-700 border-l border-metal-300 pl-3">
                    <Calendar size={20} />
                </span>
            </div>
            {error && (
                <p className="mt-2 text-sm text-red-600  text-body-5">
                    {error}
                </p>
            )}
        </div>
    );
};


export default DatePickerComponent;
