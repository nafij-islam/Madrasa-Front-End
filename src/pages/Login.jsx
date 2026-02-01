import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaMosque,
  FaArrowLeft,
  FaShieldAlt,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 🔐 HARD CODED ADMIN  
  const ADMIN_USER = "azamsha";
  const ADMIN_PASS = "@azamsha123";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (
        formData.email === ADMIN_USER &&
        formData.password === ADMIN_PASS
      ) {
        // ✅ SAVE LOGIN STATE
        localStorage.setItem("adminAuth", "true");

        // ✅ REDIRECT TO ADMIN
        navigate("/admin");
      } else {
        setError("ইউজারনেম অথবা পাসওয়ার্ড ভুল");
      }
      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 md:p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-screen md:h-[600px]">

        {/* LEFT SIDE */}
        <div className="hidden md:flex md:w-1/2 bg-emerald-800 relative flex-col justify-between p-12 text-white">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white text-sm font-medium">
              <FaArrowLeft /> ওয়েবসাইটে ফিরে যান
            </Link>
          </div>

          <div className="relative z-10 text-center">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMosque className="text-4xl" />
            </div>
            <h2 className="text-3xl font-bold mb-2">জামিয়া ইসলামিয়া মাদ্রাসা</h2>
            <p className="text-emerald-200 text-sm">
              অ্যাডমিন প্যানেল এক্সেস
            </p>
          </div>

          <div className="relative z-10 text-center text-xs text-emerald-300/60">
            &copy; ২০২৪ মাদ্রাসা ম্যানেজমেন্ট
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">

          <Link to="/" className="absolute top-6 left-6 md:hidden text-slate-400">
            <FaArrowLeft size={20} />
          </Link>

          <div className="max-w-md mx-auto w-full">
            <div className="text-center mb-8">
              <div className="inline-block p-3 rounded-full bg-emerald-50 text-emerald-600 mb-4 md:hidden">
                <FaShieldAlt size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Admin Login</h2>
              <p className="text-slate-500 text-sm mt-2">
                শুধু অ্যাডমিন লগইন করতে পারবেন
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">

              {/* USER */}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  ইউজারনেম
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border bg-slate-50 focus:bg-white"
                    placeholder="admin"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  পাসওয়ার্ড
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    className="w-full pl-10 pr-10 py-3 rounded-lg border bg-slate-50 focus:bg-white"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-600 text-sm font-semibold text-center">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold"
              >
                {loading ? "লগইন হচ্ছে..." : "লগইন করুন"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
