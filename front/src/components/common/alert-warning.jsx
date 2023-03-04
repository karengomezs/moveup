import ThemeContext from "../../context/context-theme";
import { useContext } from "react";

export default function AlertWarning({ className, otherProps, children }) {
  const themeState = useContext(ThemeContext);
  return (
    <div
      role="alert"
      className={`alert alert-warning ${
        themeState.theme ? "text-warning bg-transparent" : ""
      } ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  );
}
