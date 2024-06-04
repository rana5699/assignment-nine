import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/Pages/ErrorPage";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import BookingForm from "../Components/Pages/BookingForm";
import UpdateProfile from "../Components/Pages/UpdateProfile";
import AccommodationDetails from "../Components/Accommodations/AccommodationDetails";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import PrivateRoute from "../PrivetRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/accommodationDetails/:id",
        element: (
          <PrivateRoute>
            <AccommodationDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <BookingForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
