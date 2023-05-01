import { useMemo, useState } from "react";
import { format, addDays, subDays } from "date-fns";
import { pl } from "date-fns/locale";

import { TPropsWithClassName } from "@common/interfaces";

type TDatePickerProps = TPropsWithClassName<{
  onChange: (date: Date) => void;
  value: Date;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  placeholder?: string;
}>;

type TServiceTerm = {
  available: boolean;
  fromDate: Date;
  toDate: Date;
  userId: string;
};

export const DatePicker = ({
  className,
  onChange,
  value,
  minDate,
  maxDate,
  disabled,
  placeholder,
}: TDatePickerProps) => {
  const [actualDate, setActualDate] = useState(new Date());

  function getHoursArray() {
    const hours = [];

    for (let i = 8; i <= 20; i++) {
      if (i % 2 === 0) {
        const hourString = i.toString().padStart(2, "0");
        hours.push(hourString + ":00");
      } else {
        hours.push("-");
      }
    }

    return hours;
  }

  const formatDate = (date: Date) => {
    const dayNumber = format(date, "d.MM");
    const dayShortcut = format(date, "EEEEEE", { locale: pl });
    return { dayNumber, dayShortcut, serviceTerms: getHoursArray() };
  };

  const nextDay = () => setActualDate(addDays(actualDate, 1));

  const prevDay = () => setActualDate(subDays(actualDate, 1));

  const formattedDates = useMemo(() => {
    const yesterday = new Date(actualDate);
    yesterday.setDate(actualDate.getDate() - 1);
    const tomorrow = new Date(actualDate);
    tomorrow.setDate(actualDate.getDate() + 1);

    const dateArray = [yesterday, actualDate, tomorrow];
    return dateArray.map(formatDate);
  }, [actualDate]);

  return (
    <div className="date-picker">
      <div className="flex items-center justify-around text-sm font-medium text-gray-600">
        <div
          className="arrow left border-lime-500 hover:cursor-pointer"
          onClick={prevDay}
        ></div>
        {formattedDates.map((date) => (
          <div key={date.dayNumber}>
            <div className="flex items-center flex-col mb-3">
              <div>{date.dayNumber}</div>
              <div>{date.dayShortcut}.</div>
            </div>
            {date.serviceTerms.map((h) => (
              <div key={Math.random()}>{h}</div>
            ))}
          </div>
        ))}
        <div
          className="arrow right border-lime-500 hover:cursor-pointer"
          onClick={nextDay}
        ></div>
      </div>
    </div>
  );
};
