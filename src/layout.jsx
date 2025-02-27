import Footer from "./component/footer/footer";
import MyNavbar from "./component/navbar/navbar";

export default function Layout() {
  return (
    <>
      <div className="wrapper">
        <MyNavbar />
        <div className="main-content" />
        <Footer />
      </div>
    </>
  );
}
