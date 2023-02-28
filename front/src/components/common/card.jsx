import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const Card = ({ className, children }) => {
  const themeState = useContext(ThemeContext);

  return (
    <div
      className={`card ${
        themeState.theme ? "border-secondary text-bg-dark" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
