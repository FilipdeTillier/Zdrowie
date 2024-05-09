import { useMemo, ReactElement } from "react";
import classNames from "classnames";
import { useIntl } from "react-intl";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import { appPaths } from "@helpers/paths";
import { SELECT_OPTION } from "@common/Select/Select";
import { Select } from "@common/Select";
import { Button } from "@common/Button";

import styles from "./SearchForm.module.scss";

const POLAND_PROVINCE: SELECT_OPTION[] = [
  {
    value: "dolnoslaskie",
    label: "Dolnośląskie",
  },
  {
    value: "kujawsko-pomorskie",
    label: "Kujawsko-Pomorskie",
  },
  {
    value: "lubelskie",
    label: "Lubelskie",
  },
  {
    value: "lubuskie",
    label: "Lubuskie",
  },
  {
    value: "lodzkie",
    label: "Łódzkie",
  },
  {
    value: "malopolskie",
    label: "Małopolskie",
  },
  {
    value: "mazowieckie",
    label: "Mazowieckie",
  },
  {
    value: "opolskie",
    label: "Opolskie",
  },
  {
    value: "podkarpackie",
    label: "Podkarpackie",
  },
  {
    value: "podlaskie",
    label: "Podlaskie",
  },
  {
    value: "pomorskie",
    label: "Pomorskie",
  },
  {
    value: "slaskie",
    label: "Śląskie",
  },
  {
    value: "swietokrzyskie",
    label: "Swiętokrzyskie",
  },
  {
    value: "warminsko-mazurskie",
    label: "Warmińsko-Mazurskie",
  },
  {
    value: "wielkopolskie",
    label: "Wielkopolskie",
  },
  {
    value: "zachodniopomorskie",
    label: "Zachodniopomorskie",
  },
];

export type SearchServicesFormValues = {
  specialty: string;
  province: string;
};

export const isValidSearchServiceObject = (obj: {
  [key: string]: unknown;
}): obj is SearchServicesFormValues => {
  if ("specialty" in obj && "province" in obj) {
    return true;
  }
  return false;
};

type SearchFormProps = {
  defaultValues?: SearchServicesFormValues;
  onFormSubmit?: () => void;
  formClassName?: string;
  buttonClassName?: string;
};

export const SearchForm = ({
  defaultValues,
  onFormSubmit,
  buttonClassName,
  formClassName,
}: SearchFormProps): ReactElement => {
  const router = useRouter();
  const { formatMessage } = useIntl();

  const SPECIALTY: SELECT_OPTION[] = useMemo(
    () => [
      {
        value: "physiotherapist",
        label: formatMessage({
          id: "physiotherapist",
          defaultMessage: "Fizjoterapeuta",
        }),
      },
      {
        value: "trainer",
        label: formatMessage({
          id: "trainer",
          defaultMessage: "Trener Personalny",
        }),
      },
      {
        value: "dietician",
        label: formatMessage({ id: "dietician", defaultMessage: "Dietetyk" }),
      },
    ],
    []
  );

  const { handleSubmit, setFieldValue, values } = useFormik({
    initialValues: defaultValues || {
      specialty: "",
      province: "",
    },
    onSubmit: (values) => {
      router.push({
        pathname: appPaths.results,
        query: values,
      });
      onFormSubmit && onFormSubmit();
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(styles.searchForm, formClassName)}
    >
      <Select
        options={SPECIALTY}
        placeholder="Kogo szukasz?"
        name="specialty"
        value={values.specialty}
        className="w-full lg:mr-5 lg:w-56"
        onChange={(val) => setFieldValue("specialty", val)}
      />
      <Select
        options={POLAND_PROVINCE}
        placeholder="Województwo"
        name="province"
        className="w-full lg:mr-5 lg:w-56"
        value={values.province}
        onChange={(val) => setFieldValue("province", val)}
      />
      <Button className={buttonClassName}>
        {formatMessage({ id: "search", defaultMessage: "Szukaj" })}
      </Button>
    </form>
  );
};
