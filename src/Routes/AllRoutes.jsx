import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SelectBus from "../pages/SelectBus";
import Details from "../pages/Details";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Myticket from "../pages/Myticket";
import { Private } from "./Private";
import Bookseat from "../pages/Bookseat";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/selectbus" element={<SelectBus />} />
        <Route
          path="/bookticket/:id"
          element={
            <Private>
              <Bookseat />
            </Private>
          }
        />
        <Route
          path="/details/:id"
          element={
            <Private>
              <Details />
            </Private>
          }
        />
        <Route
          path="/myticket"
          element={
            <Private>
              <Myticket />
            </Private>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default AllRoutes;
