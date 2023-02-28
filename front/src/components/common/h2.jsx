import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const H2 = ({ className, children, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <h2
      className={`h2 ${themeState.theme ? "text-white" : ""} ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default H2;
