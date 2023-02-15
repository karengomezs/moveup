import { Link } from "react-router-dom";

const ButtonLink = ({ text, className, to, ...otherProps }) => {
  return (
    <Link to={to}>
      <button className={className} {...otherProps}>
        {text}
      </button>
    </Link>
  );
};

export default ButtonLink;
