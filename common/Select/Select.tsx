import { ChangeEvent, ReactElement, useMemo, useState } from "react";
import classNames from "classnames";

import React from "react";

import Select from "react-select";

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
};

export const SelectInput = ({
  options,
  value,
  onChange,
  name,
  id = name,
  placeholder,
  className,
}: SelectProps): ReactElement => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      instanceId={name}
      value={options.find((el) => el.value === value)}
      name={name}
      className={classNames(className)}
      id={id || name}
      onChange={(e) => e?.value && onChange(e?.value)}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        width: "200px",
        colors: {
          ...theme.colors,
          primary25: "hotpink",
          primary: "black",
        },
      })}
    />
  );
};
