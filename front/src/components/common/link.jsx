import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/context-theme";

const LINK = ({ className, children, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <Link
      className={`${themeState.theme ? "text-white " : ""} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LINK;
