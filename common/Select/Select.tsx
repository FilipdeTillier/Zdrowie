import { ChangeEvent, ReactElement, useMemo, useState } from "react";
import classNames from "classnames";

import React from "react";

import Select, { CSSObjectWithLabel } from "react-select";

export type SELECT_OPTION = {
  value: string;
  label: string;
};

type SelectProps = {
  options: SELECT_OPTION[];
  value: string;
  onChange: (e: string | number) => void;
  name: string;
  placeholder?: string;
  id?: string;
  className?: string;
  classNamePrefix?: string;
};

export const SelectInput = ({
  options,
  value,
  onChange,
  name,
  id = name,
  placeholder,
  className,
  classNamePrefix,
}: SelectProps): ReactElement => {
  const styles = {
    menuList: (base: CSSObjectWithLabel) => ({
      ...base,

      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
  };
  return (
    <Select
      options={options}
      placeholder={placeholder}
      instanceId={name}
      value={options.find((el) => el.value === value)}
      name={name}
      className={classNames(className)}
      classNamePrefix={classNamePrefix}
      id={id || name}
      styles={styles}
      onChange={(e) => e?.value && onChange(e?.value)}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        width: "200px",
        colors: {
          ...theme.colors,
          primary25: "rgb(163 230 53)",
          primary: " rgb(132 204 22)",
        },
      })}
    />
  );
};
