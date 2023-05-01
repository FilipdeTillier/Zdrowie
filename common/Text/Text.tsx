import { TPropsWithClassName } from "@common/interfaces";
import classNames from "classnames";
import { PropsWithChildren } from "react";

type TTextProps = TPropsWithClassName<PropsWithChildren> & {
  onClick?: () => void;
  type?: "span" | "p";
};

export const Text = ({
  children,
  className,
  onClick = () => {},
  type = "p",
}: TTextProps) => {
  return type === "p" ? (
    <p
      onClick={onClick}
      className={classNames("text-gray-700 hover:text-gray-900", className)}
    >
      {children}
    </p>
  ) : (
    <span
      onClick={onClick}
      className={classNames("text-gray-700 hover:text-gray-900", className)}
    >
      {children}
    </span>
  );
};
