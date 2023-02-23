import theme from "./styles";
import { ChakraProvider } from "@chakra-ui/react";
import useWindowResize from "./useWindowResize";
import {
  Calendar,
  CalendarControls,
  CalendarPrevButton,
  CalendarNextButton,
  CalendarMonth,
  CalendarMonths,
  CalendarMonthName,
  CalendarWeek,
  CalendarDays,
} from "@uselessdev/datepicker";

const CalendarNoInput = ({ months = 2, dates, setDates, disabledDates }) => {
  const sizes = useWindowResize();
  const numberOfMonths = sizes.width < 690 ? 1 : months;

  const handleSelectDate = (dates) => setDates(dates);

  return (
    <ChakraProvider theme={theme}>
      <Calendar
        value={dates}
        onSelectDate={handleSelectDate}
        months={numberOfMonths}
        disablePastDates
        disableDates={disabledDates}
      >
        <CalendarControls>
          <CalendarPrevButton />
          <CalendarNextButton />
        </CalendarControls>

        <CalendarMonths bgColor="white">
          {[...Array(numberOfMonths).keys()].map((m) => (
            <CalendarMonth key={m} month={m}>
              <CalendarMonthName />
              <CalendarWeek />
              <CalendarDays />
            </CalendarMonth>
          ))}
        </CalendarMonths>
      </Calendar>
    </ChakraProvider>
  );
};
export default CalendarNoInput;
