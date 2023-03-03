import { extendTheme } from "@chakra-ui/react";
import { CalendarDefaultTheme } from "@uselessdev/datepicker";

const oranges = {
  100: "#ffa991",
  200: "#ff8462",
  300: "#ff6d44",
  400: "#f0572d",
};

const theme = (isDark = false, useBorder = true) => {
  let border = "";

  if (isDark) {
    border = "white";

    if (!useBorder) {
      border = "#212529";
    }
  } else {
    if (!useBorder) {
      border = "white";
    }
  }

  return extendTheme(CalendarDefaultTheme, {
    styles: {
      global: null,
    },
    components: {
      Calendar: {
        parts: ["calendar"],

        baseStyle: {
          calendar: {
            bgColor: isDark ? "#212529" : "white",
            borderColor: border,
            shadow: "none",
          },
        },
      },

      CalendarMonth: {
        baseStyle: {
          name: {
            color: isDark ? "gray.300" : "",
          },
          weekday: {
            color: isDark ? "gray.400" : "",
          },
        },
      },

      CalendarControl: {
        parts: ["button"],

        baseStyle: {
          button: {
            color: "white",
            bgColor: oranges["400"],
            _hover: {
              bgColor: oranges["300"],
            },
          },
        },
      },
      CalendarDay: {
        baseStyle: {
          color: isDark ? "gray.100" : "",
          _hover: {
            bgColor: "gray.500",
          },

          _disabled: {
            color: isDark ? "gray.500" : "gray.200",
          },
        },
        variants: {
          selected: {
            bgColor: oranges["400"],
            _hover: {
              bgColor: oranges["300"],
            },
          },
          range: {
            bgColor: oranges["200"],
            _hover: {
              bgColor: oranges["100"],
            },
            _disabled: {
              _hover: {
                bgColor: oranges["300"],
              },
            },
          },
          today: {
            bgColor: oranges["100"],
            _hover: {
              bgColor: oranges["200"],
            },
          },
        },
      },
    },
  });
};
export default theme;
