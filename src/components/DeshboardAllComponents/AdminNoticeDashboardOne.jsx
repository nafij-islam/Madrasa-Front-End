import React, { useEffect, useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPlus, FaBell, FaBullhorn,
} from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import SearchAndStats from "./SearchAndStatsThree";
import NoticeGridFour from "./NoticeGridFour";
import MarqueeModal from "./MarqueeModalFive";
import DashboardHeaderTwo from "./DashboardHeaderTwo";
import NoticeModal from "./NoticeModal";


const AdminNoticeDashboardOne = () => {
  const axios = useAxios();

  // States
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [marqueeLoading, setMarqueeLoading] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [marqueeModal, setMarqueeModal] = useState(false);
  const [marqueeText, setMarqueeText] = useState("");
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    category: "academic",
    description: "",
    imageFile: null,
    imagePreview: null,
  });

  // Load Data
  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get("/posts");
      setNotices(res.data);
    } catch (error) {
      toast.error("ডাটা লোড করা যায়নি");
    } finally {
      setLoading(false);
    }
  }, [axios]);

  useEffect(() => { loadData(); }, [loadData]);

  // Image Preview Handler
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData({
      ...formData,
      imageFile: file,
      imagePreview: URL.createObjectURL(file),
    });
  };

  const openAdd = () => {
    setEditId(null);
    setFormData({
      title: "",
      date: new Date().toISOString().split("T")[0],
      category: "academic",
      description: "",
      imageFile: null,
      imagePreview: null,
    });
    setModal(true);
  };

  const openEdit = (n) => {
    setEditId(n._id);
    setFormData({
      title: n.title,
      date: n.date,
      category: n.category,
      description: n.description,
      imageFile: null,
      imagePreview: n.image || null,
    });
    setModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let base64 = null;
    if (formData.imageFile) {
      base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]);
        reader.readAsDataURL(formData.imageFile);
      });
    }

    const payload = {
      title: formData.title,
      date: formData.date,
      category: formData.category,
      description: formData.description,
      ...(base64 && { image: base64 }),
    };

    try {
      if (editId) {
        await axios.put(`/post/${editId}`, payload);
        toast.success("সফলভাবে আপডেট হয়েছে");
      } else {
        await axios.post("/post", payload);
        toast.success("নতুন নোটিশ যোগ হয়েছে");
      }
      setModal(false);
      loadData();
    } catch (error) {
      toast.error("কিছু ভুল হয়েছে");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("আপনি কি নিশ্চিত?")) {
      try {
        await axios.delete(`/post/${id}`);
        toast.info("মুছে ফেলা হয়েছে");
        loadData();
      } catch (error) {
        toast.error("ডিলিট করা যায়নি");
      }
    }
  };

  const submitMarquee = async (e) => {
    e.preventDefault();
    if (!marqueeText.trim()) return toast.error("টেক্সট লিখুন");
    try {
      setMarqueeLoading(true);
      await axios.post("/marquee", { text: marqueeText });
      toast.success("Marquee আপডেট হয়েছে");
      setMarqueeText("");
      setMarqueeModal(false);
    } catch (err) {
      toast.error("ব্যর্থ হয়েছে");
    } finally {
      setMarqueeLoading(false);
    }
  };

  const filteredNotices = notices.filter((n) =>
    n.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
        <p className="mt-4 text-sm font-semibold text-slate-600">লোড হচ্ছে...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pb-24 md:pb-8">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />

      <DashboardHeaderTwo
        onMarqueeClick={() => setMarqueeModal(true)}
        onAddClick={openAdd}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <SearchAndStats 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          noticeCount={filteredNotices.length}
        />

        <NoticeGridFour 
          notices={filteredNotices}
          onEdit={openEdit}
          onDelete={handleDelete}
        />
      </main>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:hidden">
        <div className=" backdrop-blur-xl rounded-2xl p-3 flex gap-3 shadow-2xl border border-slate-700/50">
          <button 
            onClick={() => setMarqueeModal(true)} 
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl text-sm font-bold active:scale-95 transition-all shadow-lg"
          >
            <FaBullhorn size={16} /> 
            <span>শর্ট নোটিশ</span>
          </button>
          <button 
            onClick={openAdd} 
            className="flex-[1.5] flex items-center justify-center gap-2 py-3.5 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl text-sm font-bold active:scale-95 transition-all shadow-lg"
          >
            <FaPlus size={16} /> 
            <span>নতুন নোটিশ</span>
          </button>
        </div>
      </div>

      <MarqueeModal 
        isOpen={marqueeModal}
        onClose={() => setMarqueeModal(false)}
        marqueeText={marqueeText}
        onTextChange={setMarqueeText}
        onSubmit={submitMarquee}
        isLoading={marqueeLoading}
      />

      <NoticeModal 
        isOpen={modal}
        onClose={() => setModal(false)}
        editId={editId}
        formData={formData}
        onFormChange={setFormData}
        onImageChange={handleImage}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default AdminNoticeDashboardOne;