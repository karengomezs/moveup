import Signup from "./signup";
import Details from "./details";
import Login from "./login";
import Main from "./main";
import Booking from "./booking";
import ConfirmBooking from "./confirm-booking";
import { Route, Routes as Router } from "react-router-dom";
import ProtectedRoute from "../components/protected-route";

export default function Routes() {
  return (
    <>
      <Router>
        <Route path="/" element={<Main />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/details/:id/booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/confirm-booking" element={<ConfirmBooking />}></Route>
      </Router>
    </>
  );
}
