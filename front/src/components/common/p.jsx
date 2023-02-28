import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const P = ({ className, children, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <p
      className={`${themeState.theme ? "text-white" : ""} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
