import { useNavigate } from "react-router-dom";
import Stars from "./stars";
import Score from "./score";
import CARD from "../common/card";
import ButtonOutlinePrimary from "../common/button-outline-primary";

const Product = ({
  className,
  category,
  name,
  score,
  city,
  id,
  description,
  images,
}) => {
  const navigate = useNavigate();

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
          <div className="card-body h-100 d-flex flex-column gap-1">
            <div className="d-flex justify-content-between">
              <div className="mb-2">
                <div className="d-flex align-items-end">
                  <h6 className="h6 m-0 pe-1 text-muted d-flex gap-1">
                    {category}
                    <Stars quality={score} />
                  </h6>
                </div>
                <h5 className="card-title h5">{name}</h5>
              </div>
              <div className="d-flex flex-column align-items-end">
                <Score value={score} className="fs-6 fw-bolder" />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-geo-alt-fill fs-5 text-primary" />
              <p className="card-text flex-grow-1">{city}</p>
            </div>
            <p className="card-text my-2">{description}</p>
            <ButtonOutlinePrimary
              className="mt-auto"
              onClick={() => {
                navigate(`/details/${id}`);
              }}
            >
              Ver más
            </ButtonOutlinePrimary>
          </div>
        </div>
      </div>
    </CARD>
  );
};

export default Product;
