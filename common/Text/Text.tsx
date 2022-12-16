import { TPropsWithClassName } from "@common/interfaces";
import classNames from "classnames";
import { PropsWithChildren } from "react";

export const Text = ({
  children,
  className,
}: TPropsWithClassName<PropsWithChildren>) => {
  return (
    <p
      className={classNames(
        "text-cyan-700 hover:text-cyan-900 font-semibold capitalize",
        className
      )}
    >
      {children}
    </p>
  );
};
