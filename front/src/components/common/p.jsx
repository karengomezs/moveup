import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const P = ({ className, children }) => {
  const themeState = useContext(ThemeContext);

  return (
    <p className={`${themeState.theme ? "text-white" : ""} ${className}`}>
      {children}
    </p>
  );
};

export default P;
