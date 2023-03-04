import { parse, format } from "date-fns";
import { es } from "date-fns/locale";
import Stars from "./product/stars";
import Score from "./product/score";
import CARD from "./common/card";

const BookProduct = ({
  className,
  category,
  name,
  score,
  city,
  address,
  startDate,
  endDate,
  hour,
  images,
}) => {
  function convertDate(date) {
    const parsedDate = parse(date, "yyyy-MM-dd", new Date());
    return format(parsedDate, "MMM dd, yyyy", { locale: es });
  }

  return (
    <CARD className={`mb-3 p-0 ${className}`}>
      <div className="row g-0 h-100">
        <div className="col-3">
          {images?.[0]?.url && (
            <img
              alt=""
              src={images?.[0].url}
              className="img-fluid rounded-start h-100 object-fit-cover brightness-effect"
            />
          )}
        </div>

        <div className="col-9">
          <div className="card-body h-100 d-flex flex-column gap-2">
            <div className="d-flex justify-content-between">
              <div className="mb-2">
                <div className="d-flex align-items-end">
                  <h6 className="h6 m-0 pe-1 text-muted d-flex gap-1">
                    {category}
                    <Stars quality={score} />
                  </h6>
                </div>
                <h5 className="card-title h5 mt-2">{name}</h5>
              </div>
              <div className="d-flex flex-column align-items-end">
                <Score value={score} className="fs-6 fw-bolder" />
              </div>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-geo-alt-fill fs-5 text-primary me-2" />
              <div>
                <p className="card-text flex-grow-1 m-0">{city}</p>
                <p className="card-text">{address}</p>
              </div>
            </div>

            <div className="d-flex text-capitalize">
              <i className="bi bi-calendar2-week-fill text-primary me-2"></i>
              <div className="d-flex gap-1 flex-wrap">
                <span>{convertDate(startDate)}</span> <span>-</span>
                <span>{convertDate(endDate)}</span>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-clock-fill text-primary me-2"></i>
              {hour}
            </div>
          </div>
        </div>
      </div>
    </CARD>
  );
};

export default BookProduct;
