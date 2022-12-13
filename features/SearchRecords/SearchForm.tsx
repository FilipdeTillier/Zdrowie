import { useFormik } from "formik";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import { appPaths } from "@helpers/paths";
import { SELECT_OPTION } from "@common/Select/Select";
import { Select } from "@common/Select";

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

const SPECIALTY: SELECT_OPTION[] = [
  {
    value: "rzeznik",
    label: "Rzeźnik",
  },
  {
    value: "mysliwy",
    label: "Myśliwy",
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

type SearchFormProps = { defaultValues?: SearchServicesFormValues };

export const SearchForm = ({
  defaultValues,
}: SearchFormProps): ReactElement => {
  const router = useRouter();
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
    },
  });
  return (
    <form onSubmit={handleSubmit} className="flex justify-between items-center">
      <Select
        options={SPECIALTY}
        placeholder="Kogo szukasz?"
        name="specialty"
        value={values.specialty}
        className="mr-5 w-56"
        onChange={(val) => setFieldValue("specialty", val)}
      />
      <Select
        options={POLAND_PROVINCE}
        placeholder="Województwo"
        name="province"
        className="mr-5 w-56"
        value={values.province}
        onChange={(val) => setFieldValue("province", val)}
      />
      <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Szukaj
      </button>
    </form>
  );
};
