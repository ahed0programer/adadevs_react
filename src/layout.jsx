import Footer from "./component/footer/footer";
import MyNavbar from "./component/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="wrapper">
        <MyNavbar />
        <div className="main-content" />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
