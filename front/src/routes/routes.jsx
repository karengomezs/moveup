import Signup from "./signup";
import Details from "./details";
import Login from "./login";
import Main from "./main";
import Booking from "./booking";
import Administrator from "./administrator";
import ConfirmedBooking from "./confirmed-booking";
import ConfirmedProduct from "./confirmed-product";
import NotFound from "./not-found";
import MyBookings from "./my-bookings";
import { Route, Routes as Router, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/protected-route";
import ProtectedAdminRoute from "../components/protected-admin-route";

export default function Routes() {
  return (
    <>
      <Router>
        <Route path="/" element={<Main />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/confirmed-product" element={<ConfirmedProduct />}></Route>
        <Route
          path="/:id/bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/administrator"
          element={
            <ProtectedAdminRoute>
              <Administrator />
            </ProtectedAdminRoute>
          }
        ></Route>
        <Route
          path="/details/:id/booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Router>
    </>
  );
}
