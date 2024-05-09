import { ChangeEvent, ReactElement, useMemo, useState } from "react";
import classNames from "classnames";

import React from "react";

import Select, { CSSObjectWithLabel } from "react-select";

import styles from "./Select.module.scss";

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
  return (
    <Select
      options={options}
      placeholder={placeholder}
      instanceId={name}
      value={options.find((el) => el.value === value)}
      name={name}
      classNames={{
        menuList: () => "",
        menu: () => "hoho",
        option: ({ isSelected, isFocused }) =>
          classNames({
            [styles.isSelected]: isSelected,
            [styles.isFocused]: isFocused,
          }),
      }}
      className={classNames(className)}
      classNamePrefix={classNamePrefix}
      id={id || name}
      onChange={(e) => e?.value && onChange(e?.value)}
    />
  );
};
