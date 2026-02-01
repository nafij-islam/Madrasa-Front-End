import { lazy, Suspense, useEffect, memo, useRef } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rootlayouts from "./layouts/Rootlayouts";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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

const PageLoader = memo(() => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-[#1F7A4D] border-t-transparent rounded-full animate-spin"></div>
    <span className="mt-4 text-[#1F7A4D] font-bold">লোড হচ্ছে...</span>
  </div>
));

const AdminRoute = memo(({ children }) => {
  const isAdmin = localStorage.getItem("adminAuth") === "true";
  return isAdmin ? children : <Navigate to="/login" replace />;
});

const App = () => {
  const location = useLocation();
  const appRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    // 2. Scroll to top on route change
    lenis.scrollTo(0, { immediate: false, duration: 0.8 });

    // 3. Page Transition Animation
    if (appRef.current) {
      gsap.fromTo(
        appRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.inOut" }
      );
    }

    // Cleanup on unmount or route change
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [location]);

  return (
    <div ref={appRef}>
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
          <Route path="admin" element={<AdminRoute><DeshMain /></AdminRoute>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;