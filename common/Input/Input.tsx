import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import classnames from "classnames";

type InputProps = {
  onChange: (e: ChangeEvent<unknown>) => void;
  value: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  id?: string;
  placeholder?: string;
  onClick?: (e: ChangeEvent<unknown>) => void;
  inputClassName?: string;
  labelClassName?: string;
};

export const Input = ({
  onChange,
  type = "text",
  name,
  value,
  id = name,
  placeholder,
  onClick,
  labelClassName,
  inputClassName,
}: InputProps) => {
  return (
    <label
      htmlFor={id}
      onClick={onClick}
      className={classnames(
        "relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600",
        labelClassName
      )}
    >
      <input
        type={type}
        id={id}
        placeholder="Email"
        onChange={onChange}
        value={value}
        className={classnames(
          "peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm",
          inputClassName
        )}
      />

      <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
        {placeholder}
      </span>
    </label>
  );
};
