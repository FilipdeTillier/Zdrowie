import { Icon } from "@common/Icon";
import { TPropsWithClassName } from "@common/interfaces";
import classNames from "classnames";
import { ReactElement, useMemo } from "react";

type ContactType = "email" | "phone";

type ContactLabelProps = {
  type: ContactType;
  value: string;
  useShortcut?: boolean;
};

export const ContactLabel = ({
  value,
  type,
  className = "",
  useShortcut = false,
}: TPropsWithClassName<ContactLabelProps>): ReactElement => {
  const href = useMemo(
    () => `${type === "email" ? "mailto:" : "tel:"}${value}`,
    [type, value]
  );
  return (
    <a
      className={classNames("flex content-center bg-slate-100 p-2", className)}
      href={href}
    >
      <Icon icon={type} className="mr-2 w-4 h-4" />
      {useShortcut ? <span className="capitalize">{type}</span> : value}
    </a>
  );
};
