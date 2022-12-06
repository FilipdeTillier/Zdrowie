import { useFormik } from "formik";

import { Input } from "../../common/Input";
import { Select } from "../../common/Select";
import { SELECT_OPTION } from "../../common/Select/Select";

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

export const SearchRecords = () => {
  const { handleSubmit, handleChange, setFieldValue, values } = useFormik({
    initialValues: {
      specialty: "",
      province: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-between">
      <Select
        options={SPECIALTY}
        placeholder="Kogo szukasz?"
        name="specialty"
        value={values.specialty}
        onChange={(val) => setFieldValue("specialty", val)}
      />
      <Select
        options={POLAND_PROVINCE}
        placeholder="Województwo"
        name="province"
        value={values.province}
        onChange={(val) => setFieldValue("province", val)}
      />
    </form>
  );
};
