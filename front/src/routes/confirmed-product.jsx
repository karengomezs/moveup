import { Link, useLocation, Navigate } from "react-router-dom";
import CARD from "../components/common/card";

export default function ConfirmedProduct() {
  const location = useLocation();
  const isConfirmedProduct = location.state === "confirmed-product";

  if (!isConfirmedProduct) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="d-flex flex-grow-1 flex-column align-items-center justify-content-center container">
      <CARD className="shadow-sm py-3 px-5">
        <div className="card-body d-flex flex-column align-items-center gap-3">
          <i className="bi bi-patch-check-fill fs-1 text-primary"></i>
          <p className="fs-4 fw-semibold">Su producto se ha creado con éxito</p>
          <Link className="w-50" to="/" replace>
            <button className="btn btn-primary w-100 fs-5 fw-semibold">
              Ok
            </button>
          </Link>
        </div>
      </CARD>
    </div>
  );
}
