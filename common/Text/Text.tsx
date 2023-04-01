import { TPropsWithClassName } from "@common/interfaces";
import classNames from "classnames";
import { PropsWithChildren } from "react";

export const Text = ({
  children,
  className,
}: TPropsWithClassName<PropsWithChildren>) => {
  return (
    <p className={classNames("text-gray-700 hover:text-gray-900", className)}>
      {children}
    </p>
  );
};
