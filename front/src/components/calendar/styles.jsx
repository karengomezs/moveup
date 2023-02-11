import { extendTheme } from '@chakra-ui/react';
import { CalendarDefaultTheme } from '@uselessdev/datepicker';

const oranges = {
  100: '#ffa991',
  200: '#ff8462',
  300: '#ff6d44',
  400: '#f0572d',
};

const theme = extendTheme(CalendarDefaultTheme, {
  components: {
    Calendar: {
      parts: ['calendar'],

      baseStyle: {
        calendar: {
          borderColor: 'white',
          shadow: 'none',
        },
      },
    },

    CalendarControl: {
      parts: ['button'],

      baseStyle: {
        button: {
          color: 'white',
          bgColor: oranges['400'],
          _hover: {
            bgColor: oranges['300'],
          },
        },
      },
    },
    CalendarDay: {
      variants: {
        selected: {
          bgColor: oranges['400'],
          _hover: {
            bgColor: oranges['300'],
          },
        },
        range: {
          bgColor: oranges['200'],
          _hover: {
            bgColor: oranges['100'],
          },
          _disabled: {
            _hover: {
              bgColor: oranges['300'],
            },
          },
        },
        today: {
          bgColor: oranges['100'],
          _hover: {
            bgColor: oranges['200'],
          },
        },
      },
    },
  },
});

export default theme;
