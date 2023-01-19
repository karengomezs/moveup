export default function FormLogin() {
  return (
    <form className="">
      <h2 className="text-center">Welcome to Booking App</h2>

      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Email address
        </label>

        <input
          type="email"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input placeholder"
        />
      </div>

      <button type="submit" className="btn btn-primary mx-auto d-block ">
        Sign In
      </button>
    </form>
  );
}
