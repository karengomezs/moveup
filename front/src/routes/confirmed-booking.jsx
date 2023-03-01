import { Link, useLocation, Navigate } from "react-router-dom";
import CARD from "../components/common/card";

export default function ConfirmedBooking() {
  const location = useLocation();
  const isBookingSuccess = location.state === "booking-success";

  if (!isBookingSuccess) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="d-flex flex-grow-1 flex-column align-items-center justify-content-center container">
      <CARD className="shadow-sm py-3 px-5 ">
        <div className="card-body d-flex flex-column align-items-center gap-3">
          <i className="bi bi-patch-check-fill fs-1 text-primary"></i>
          <h1 className="h1 fw-bolder text-primary">¡Muchas gracias!</h1>
          <p className="fs-4 fw-semibold">
            Su reserva se ha realizado con éxito
          </p>
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
