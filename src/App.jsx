import { lazy, Suspense, useLayoutEffect, memo } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Rootlayouts from "./layouts/Rootlayouts";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Details = lazy(() => import("./pages/Details"));
const Depertman = lazy(() => import("./pages/Depertman"));
const Donation = lazy(() => import("./pages/Donation"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Biography = lazy(() => import("./pages/Biography"));
const BiographyTwo = lazy(() => import("./pages/BiographyTwo"));
const Login = lazy(() => import("./pages/Login"));
const DeshMain = lazy(() => import("./pages/DeshMain"));
const DetailsNotise = lazy(
  () => import("./components/commoncomponents/DetailsNotise"),
);
//
const PageLoader = memo(() => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-[#1F7A4D] border-t-transparent rounded-full animate-spin"></div>
    <span className="mt-4 text-[#1F7A4D] font-bold">লোড হচ্ছে...</span>
  </div>
));
//
const ScrollToTop = memo(() => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
});

const AdminRoute = memo(({ children }) => {
  const isAdmin = localStorage.getItem("adminAuth") === "true";
  return isAdmin ? children : <Navigate to="/login" replace />;
});

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Rootlayouts />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="admission-info" element={<Details />} />
            <Route path="teachers-administration" element={<Depertman />} />
            <Route path="donation-support" element={<Donation />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="biography" element={<Biography />} />
            <Route path="biographyTwo" element={<BiographyTwo />} />
            <Route path="login" element={<Login />} />
            <Route path="notice/:id" element={<DetailsNotise />} />
          </Route>
          {/*  */}
          <Route path="admin" element={<AdminRoute><DeshMain /></AdminRoute>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
