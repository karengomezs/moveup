import { useContext } from "react";
import theme from "./styles";
import { ChakraProvider } from "@chakra-ui/react";
import useWindowResize from "./useWindowResize";
import ThemeContext from "../../context/context-theme";
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
import Reset from "./reset";

const CalendarNoInput = ({ months = 2, dates, setDates, disabledDates }) => {
  const themeState = useContext(ThemeContext);
  const sizes = useWindowResize();
  const numberOfMonths = sizes.width < 690 ? 1 : months;

  const handleSelectDate = (dates) => setDates(dates);

  return (
    <ChakraProvider theme={theme(themeState.theme, false)} resetCSS={false}>
      <>
        <Reset />
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

          <CalendarMonths
            bgColor={themeState.theme ? "#212529" : "white"}
            color={themeState.theme ? "white" : ""}
          >
            {[...Array(numberOfMonths).keys()].map((m) => (
              <CalendarMonth key={m} month={m}>
                <CalendarMonthName />
                <CalendarWeek />
                <CalendarDays />
              </CalendarMonth>
            ))}
          </CalendarMonths>
        </Calendar>
      </>
    </ChakraProvider>
  );
};
export default CalendarNoInput;
