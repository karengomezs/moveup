import { Link } from "react-router-dom";

const ButtonLink = ({ text, className, to }) => {
  return (
    <Link to={to}>
      <button className={className}>{text}</button>
    </Link>
  );
};

export default ButtonLink;
