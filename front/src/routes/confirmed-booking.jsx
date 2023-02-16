import { Link } from 'react-router-dom';

export default function ConfirmedBooking() {
  return (
    <div className="d-flex flex-grow-1 flex-column align-items-center justify-content-center">
      <div className="card shadow-sm py-3 px-5">
        <div className="card-body d-flex flex-column align-items-center gap-3">
          <i className="bi bi-patch-check-fill fs-1 text-primary"></i>
          <h1 className="h1 fw-bolder text-primary">¡Muchas gracias!</h1>
          <p className="fs-4 fw-semibold">
            Su reserva se ha realizado con éxito
          </p>
          <Link className="w-50" to="/">
            <button className="btn btn-primary w-100 fs-5 fw-semibold">
              Ok
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
