import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const H4 = ({ className, children, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <h4
      className={`h4 ${themeState.theme ? "text-white" : ""} ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
};

export default H4;
