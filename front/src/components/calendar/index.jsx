import { useState, useRef, useEffect } from 'react';
import { format, isValid, isAfter, isBefore } from 'date-fns';
import theme from './styles';
import {
  ChakraProvider,
  useDisclosure,
  useOutsideClick,
  PopoverBody,
  Input,
  PopoverContent,
  Popover,
  PopoverTrigger,
  Flex,
} from '@chakra-ui/react';
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
} from '@uselessdev/datepicker';

const dateFormat = 'dd/MM/yyyy';

export default function DatePicker({ dates, setDates }) {
  const [values, setValues] = useState({
    start: '',
    end: '',
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const calendarRef = useRef(null);
  const startInputRef = useRef(null);
  const endInputRef = useRef(null);

  const MONTHS = 2;

  const handleSelectDate = (dates) => {
    setDates(dates);
    setValues({
      start: isValid(dates.start) ? format(dates.start, dateFormat) : '',
      end: isValid(dates.end) ? format(dates.end, dateFormat) : '',
    });

    if (dates.end) {
      onClose();
    }
  };

  const match = (value) => value.match(/(\d{2})\/(\d{2})\/(\d{4})/);

  const handleInputChange = (target) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });

    if (target.name === 'start' && match(target.value) && endInputRef.current) {
      endInputRef.current.focus();
    }
  };

  useOutsideClick({
    ref: calendarRef,
    handler: onClose,
    enabled: isOpen,
  });

  useEffect(() => {
    if (match(values.start)) {
      const startDate = new Date(values.start);
      const isValidStartDate = isValid(startDate);
      const isAfterEndDate = dates.end && isAfter(startDate, dates.end);

      if (isValidStartDate && isAfterEndDate) {
        setValues({ ...values, end: '' });
        return setDates({ end: undefined, start: startDate });
      }

      return setDates({ ...dates, start: startDate });
    }
    //eslint-disable-next-line
  }, [values.start]);

  useEffect(() => {
    if (match(values.end)) {
      const endDate = new Date(values.end);
      const isValidEndDate = isValid(endDate);
      const isBeforeStartDate = dates.start && isBefore(endDate, dates.start);

      if (isValidEndDate && isBeforeStartDate) {
        setValues({ ...values, start: '' });

        startInputRef.current?.focus();

        return setDates({ start: undefined, end: endDate });
      }

      onClose();
      return setDates({ ...dates, end: endDate });
    }
    //eslint-disable-next-line
  }, [values.end]);

  return (
    <ChakraProvider theme={theme}>
      <Popover
        placement="auto-start"
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        isLazy
      >
        <PopoverTrigger>
          <Flex
            borderWidth={1}
            rounded="md"
            p={2}
            onClick={onOpen}
            ref={initialRef}
            bgColor="white"
          >
            <Input
              variant="unstyled"
              name="start"
              placeholder={dateFormat}
              value={values.start}
              onChange={handleInputChange}
              ref={startInputRef}
            />
            <Input
              variant="unstyled"
              name="end"
              placeholder={dateFormat}
              value={values.end}
              onChange={handleInputChange}
              ref={endInputRef}
            />
          </Flex>
        </PopoverTrigger>

        <PopoverContent
          p={0}
          w="min-content"
          border="none"
          outline="none"
          _focus={{ boxShadow: 'none' }}
          ref={calendarRef}
        >
          <Calendar
            value={dates}
            onSelectDate={handleSelectDate}
            months={MONTHS}
          >
            <PopoverBody p={0}>
              <CalendarControls>
                <CalendarPrevButton />
                <CalendarNextButton />
              </CalendarControls>

              <CalendarMonths>
                {[...Array(MONTHS).keys()].map((m) => (
                  <CalendarMonth key={m} month={m}>
                    <CalendarMonthName />
                    <CalendarWeek />
                    <CalendarDays />
                  </CalendarMonth>
                ))}
              </CalendarMonths>
            </PopoverBody>
          </Calendar>
        </PopoverContent>
      </Popover>
    </ChakraProvider>
  );
}