import { useNavigate } from 'react-router-dom';
import Stars from './starts';
import Score from './score';

const Category = ({
  categories,
  name,
  score,
  city,
  id,
  description,
  images,
}) => {
  const navigate = useNavigate();
  return (
    <div className="card mb-3">
      <div className="row g-0 h-100">
        <div className="col-3">
          <img
            alt=""
            src={images[0].url}
            className="img-fluid rounded-start h-100 object-fit-cover brightness-effect"
          />
        </div>

        <div className="col-9">
          <div className="card-body h-100 d-flex flex-column gap-1">
            <div className="d-flex justify-content-between">
              <div className="mb-2">
                <div className="d-flex align-items-end">
                  <h6 className="h6 m-0 pe-1 text-muted d-flex gap-1">
                    {categories.map((category) => category.nombreCategorias)}
                    <Stars quality={score} />
                  </h6>
                </div>
                <h5 className="card-title h5">{name}</h5>
              </div>
              <div className="d-flex flex-column align-items-end">
                <Score value={score} />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-geo-alt-fill fs-5 text-primary" />
              <p className="card-text flex-grow-1">{city}</p>
              <a
                className="text-nowrap text-primary text-decoration-underline"
                href="/#"
              >
                Mostrar ubicación
              </a>
            </div>
            <p className="card-text mt-2">{description}</p>
            <button
              className="btn btn-outline-primary mt-auto"
              onClick={() => {
                navigate(`/details/${id}`);
              }}
            >
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
