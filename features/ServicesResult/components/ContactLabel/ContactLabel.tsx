import Link from "next/link";
import {
  HTMLAttributeAnchorTarget,
  ReactElement,
  useMemo,
  useState,
} from "react";

import { Icon } from "@common/Icon";
import { TPropsWithClassName } from "@common/interfaces";
import classNames from "classnames";

type ContactType = "email" | "phone" | "website";

type ContactLabelProps = {
  type: ContactType;
  value: string;
  useShortcut?: boolean;
  linkTarget?: HTMLAttributeAnchorTarget;
};

export const ContactLabel = ({
  value,
  type,
  className = "",
  useShortcut = false,
  linkTarget = "_self",
}: TPropsWithClassName<ContactLabelProps>): ReactElement => {
  const [showValue, setShowValue] = useState(useShortcut);
  const href = useMemo(() => {
    if (type === "email") return "mailto:" + value;
    if (type === "phone") return "tel:" + value;
    return value;
  }, [type, value]);
  return (
    <Link
      className={classNames("flex content-center bg-slate-100 p-2", className)}
      href={href}
      target={linkTarget}
    >
      <Icon icon={type} className="mr-2 w-4 h-4" />
      {useShortcut ? <span className="capitalize">{type}</span> : value}
    </Link>
  );
};
