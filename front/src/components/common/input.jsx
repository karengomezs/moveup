import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const INPUT = ({ className, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <input
      className={`form-control ${
        themeState.theme ? "text-bg-dark" : ""
      }  ${className}`}
      {...props}
    />
  );
};

export default INPUT;
