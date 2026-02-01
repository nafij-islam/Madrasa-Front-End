import React, { useEffect, useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlus, FaImages } from "react-icons/fa";

import GalleryHeader from '../GalleryDeshComponents/GalleryHeader';
import CategoryFilter from '../GalleryDeshComponents/CategoryFilter';
import GalleryGrid from '../GalleryDeshComponents/GalleryGrid';
import GalleryModal from '../GalleryDeshComponents/GalleryModal';
import useAxios from "../../hooks/useAxios";

const AdminGalleryDashboard = () => {
  const axios = useAxios();

  // States
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    category: "campus",
    imageFile: null,
    imagePreview: null,
  });

  // Categories
  const categories = [
    { key: "all", label: "সকল ছবি", icon: "🖼️" },
    { key: "campus", label: "ক্যাম্পাস", icon: "🏫" },
    { key: "academic", label: "একাডেমিক", icon: "📚" },
    { key: "event", label: "ইভেন্ট", icon: "🎉" },
    { key: "spiritual", label: "আধ্যাত্মিক", icon: "🕌" },
    { key: "building", label: "ভবন", icon: "🏛️" },
  ];

  // Load Data
  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = activeCategory === "all" 
        ? "/gallery" 
        : `/gallery?category=${activeCategory}`;
      const res = await axios.get(endpoint);
      setImages(res.data);
    } catch (error) {
      toast.error("ছবি লোড করা যায়নি");
    } finally {
      setLoading(false);
    }
  }, [axios, activeCategory]);

  useEffect(() => { 
    loadData(); 
  }, [loadData]);

  // Image Preview Handler
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("ছবি ৫MB এর কম হতে হবে");
      return;
    }
    
    setFormData({
      ...formData,
      imageFile: file,
      imagePreview: URL.createObjectURL(file),
    });
  };

  // Open Add Modal
  const openAdd = () => {
    setEditId(null);
    setFormData({
      title: "",
      category: "campus",
      imageFile: null,
      imagePreview: null,
    });
    setModal(true);
  };

  // Open Edit Modal
  const openEdit = (img) => {
    setEditId(img._id);
    setFormData({
      title: img.title,
      category: img.category,
      imageFile: null,
      imagePreview: img.image || null,
    });
    setModal(true);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      toast.error("ছবির শিরোনাম লিখুন");
      return;
    }
    
    if (!editId && !formData.imageFile) {
      toast.error("ছবি নির্বাচন করুন");
      return;
    }
    
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
      category: formData.category,
      ...(base64 && { image: base64 }),
    };

    try {
      if (editId) {
        await axios.put(`/gallery/${editId}`, payload);
        toast.success("সফলভাবে আপডেট হয়েছে");
      } else {
        await axios.post("/gallery", payload);
        toast.success("নতুন ছবি যোগ হয়েছে");
      }
      setModal(false);
      loadData();
    } catch (error) {
      toast.error("কিছু ভুল হয়েছে");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Image
  const handleDelete = async (id) => {
    if (window.confirm("আপনি কি এই ছবিটি মুছে ফেলতে চান?")) {
      try {
        await axios.delete(`/gallery/${id}`);
        toast.info("ছবি মুছে ফেলা হয়েছে");
        loadData();
      } catch (error) {
        toast.error("ডিলিট করা যায়নি");
      }
    }
  };

  // Filter by search
  const filteredImages = images.filter((img) =>
    img.title?.toLowerCase().includes(searchTerm.toLowerCase())
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

      <GalleryHeader onAddClick={openAdd} totalImages={filteredImages.length} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="ছবি খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all"
          />
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Gallery Grid */}
        <GalleryGrid 
          images={filteredImages}
          onEdit={openEdit}
          onDelete={handleDelete}
        />
      </main>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-25 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:hidden">
        <div className=" backdrop-blur-xl rounded-2xl p-3 shadow-2xl border border-slate-700/50">
          <button 
            onClick={openAdd} 
            className="w-full flex items-center justify-center gap-3 py-3 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl text-base font-bold active:scale-95 transition-all shadow-lg"
          >
            <FaPlus size={18} /> 
            <span>নতুন ছবি যোগ করুন</span>
          </button>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal 
        isOpen={modal}
        onClose={() => setModal(false)}
        editId={editId}
        formData={formData}
        onFormChange={setFormData}
        onImageChange={handleImage}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        categories={categories.filter(c => c.key !== 'all')}
      />
    </div>
  );
};

export default AdminGalleryDashboard;