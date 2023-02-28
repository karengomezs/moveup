import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const SPAN = ({ className, children }) => {
  const themeState = useContext(ThemeContext);

  return (
    <span className={`${themeState.theme ? "text-white" : ""} ${className}`}>
      {children}
    </span>
  );
};

export default SPAN;
