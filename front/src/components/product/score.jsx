const Score = ({ value, className }) => {
  const result = value * 2 || 0;
  return (
    <span
      className={`p-2 bg-primary text-white rounded ms-2 px-3 width-max-content ${className}`}
      style={{ height: "fit-content" }}
    >
      {result}
    </span>
  );
};

export default Score;
