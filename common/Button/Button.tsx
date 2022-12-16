import { TPropsWithClassName } from "@common/interfaces";
import { colors, getBackgroundColor } from "@helpers/colors";
import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from "react";

type ButtonProps = ButtonHTMLAttributes<{}>;

export const Button = ({
  children,
  onClick,
  className,
}: TPropsWithClassName<PropsWithChildren<ButtonProps>>): ReactElement => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 bg-lime-500 hover:bg-lime-400",
        className
      )}
    >
      {children}
    </button>
  );
};
