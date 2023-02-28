import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const Card = ({ className, children, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <button
      className={`btn btn-outline-primary ${
        themeState.theme ? "btn-primary text-white" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Card;
