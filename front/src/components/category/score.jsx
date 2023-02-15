const Score = ({ value }) => {
  const result = value * 2 || 0;
  return (
    <h4 className="p-2 bg-primary text-white rounded ms-2 px-3 width-max-content">
      {result}
    </h4>
  );
};

export default Score;
