import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const H5 = ({ className, children }) => {
  const themeState = useContext(ThemeContext);

  return (
    <h2 className={`h5 ${themeState.theme ? "text-white" : ""} ${className}`}>
      {children}
    </h2>
  );
};

export default H5;
