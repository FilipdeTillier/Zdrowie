import React, { ReactElement } from "react";

import Star from "@public/icons/star.svg";
import StarEmpty from "@public/icons/star_empty.svg";
import Email from "@public/icons/mail.svg";
import Phone from "@public/icons/phone.svg";
import Website from "@public/icons/website.svg";

export const Icons = {
  star: Star,
  starEmpty: StarEmpty,
  email: Email,
  phone: Phone,
  website: Website,
};

export type TIconType = keyof typeof Icons;

type IconProps = Partial<{
  className: string;
  onClick: () => void;
}> & {
  icon: TIconType;
};

export const Icon = ({
  icon,
  className = "",
  onClick,
}: IconProps): ReactElement => {
  if (!Icons[icon]) {
    console.error("unknown icon", icon);
    return <></>;
  }
  return React.createElement(Icons[icon], {
    className: `w-6 h-6 ${className}`,
    onClick,
  });
};
