import { lazy, Suspense, useEffect, memo, useRef } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rootlayouts from "./layouts/Rootlayouts";

gsap.registerPlugin(ScrollTrigger);

// Lazy imports
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
const DetailsNotise = lazy(() => import("./components/commoncomponents/DetailsNotise"));

// Loader
const PageLoader = memo(() => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-[#1F7A4D] border-t-transparent rounded-full animate-spin"></div>
    <span className="mt-4 text-[#1F7A4D] font-bold">লোড হচ্ছে...</span>
  </div>
));

// --- Private Route Component ---
const AdminRoute = ({ children }) => {
  // localStorage থেকে ডাটা চেক করা
  const isAdmin = localStorage.getItem("adminAuth") === "true";
  const location = useLocation();

  if (!isAdmin) {
    // লগইন না করা থাকলে লগইন পেজে পাঠিয়ে দিবে 
    // 'replace' ব্যবহার করা হয়েছে যাতে ব্যাক বাটনে ক্লিক করলে আবার এডমিন পেজে না আসে
    // 'state' ব্যবহার করা হয়েছে যাতে লগইন করার পর আগের পেজেই ফিরে যেতে পারে
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const App = () => {
  const location = useLocation();
  const appRef = useRef(null);

  useEffect(() => {
    // 1. Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    
    const update = (time) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // 2. Scroll to top on route change
    lenis.scrollTo(0, { immediate: true });

    // 3. Animation
    if (appRef.current) {
      gsap.fromTo(appRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      // রাউট চেঞ্জের সময় পুরনো ট্রিগারগুলো পরিষ্কার করা
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [location.pathname]); // শুধুমাত্র পাথ চেঞ্জ হলে রান হবে

  return (
    <div ref={appRef}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public Routes with Root Layout */}
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

          {/* --- Admin Protected Route --- */}
          <Route 
            path="admin" 
            element={
              <AdminRoute>
                <DeshMain />
              </AdminRoute>
            } 
          />

          {/* 404 Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;