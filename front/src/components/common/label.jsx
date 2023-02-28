import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const LABEL = ({ className, children, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <h2
      className={`form-label ${
        themeState.theme ? "text-white" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default LABEL;
