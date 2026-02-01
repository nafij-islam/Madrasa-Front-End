import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Navbar = lazy(() => import("../components/commoncomponents/Navbear"));
const Header = lazy(() => import("../components/commoncomponents/Header"));
const Footer = lazy(() => import("../components/commoncomponents/Footer"));

const LayoutLoader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-spinner"></div>
      <span className="loader-text">Loading...</span>
    </div>
  );
};

const Rootlayouts = () => {
  return (
    <Suspense fallback={<LayoutLoader />}>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

export default Rootlayouts;
