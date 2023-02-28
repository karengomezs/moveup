import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const SELECT = ({ className, children, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <select
      className={`form-select ${
        themeState.theme ? "text-bg-dark dark-select" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default SELECT;
