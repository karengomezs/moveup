import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const INPUT = ({ className, ...props }) => {
  const themeState = useContext(ThemeContext);
  let color = "";

  if (themeState.theme) {
    color = "text-bg-dark";

    if (props.disabled) {
      color = "text-bg-secondary border-0";
    }
  }

  return (
    <input
      className={`form-control
      ${color}
      ${className}`}
      {...props}
    />
  );
};

export default INPUT;
