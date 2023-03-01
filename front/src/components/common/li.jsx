import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const LI = ({ className, children, ...otherProps }) => {
  const themeState = useContext(ThemeContext);

  return (
    <li
      className={`list-group-item ${
        themeState.theme ? "list-group-item-dark" : ""
      } ${className}`}
      {...otherProps}
    >
      {children}
    </li>
  );
};

export default LI;
