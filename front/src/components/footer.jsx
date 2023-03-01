export default function Footer() {
  return (
    <footer className="text-white bg-primary">
      <section className="d-flex justify-content-between container pt-2 pb-2">
        <div className="d-flex text-lg fw-bold align-items-center">
          <i className="bi bi-c-circle fw-bold fs-4" />
          <span>&nbsp;2023 MoveUp</span>
        </div>
        <div className="d-flex justify-content-end gap-5 d-none d-md-flex">
          <i className="bi bi-facebook fs-4" />
          <i className="bi bi-linkedin fs-4" />
          <i className="bi bi-twitter fs-4" />
          <i className="bi bi-instagram fs-4" />
        </div>
      </section>
    </footer>
  );
}
