const Stars = ({ quality = 0, className }) => {
  const missingStartsValue = 5 - quality;

  const stars = Array(quality)
    .fill()
    .map((_, index) => <i key={`${index}-fill`} className="bi bi-star-fill" />);

  const missingStarts = Array(missingStartsValue || 0)
    .fill()
    .map((_, index) => <i key={`${index}-not-fill`} className="bi bi-star" />);

  return (
    <div className={`text-primary ${className}`}>
      {stars}
      {missingStarts}
    </div>
  );
};
export default Stars;
