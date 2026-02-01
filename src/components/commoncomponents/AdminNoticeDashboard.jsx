// import React, { useEffect, useState, useCallback } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   FaPlus, FaBell, FaEdit, FaTrash, FaCloudUploadAlt,
//   FaCalendarAlt, FaTimes, FaSearch, FaCircleNotch, FaBullhorn,
// } from "react-icons/fa";
// import useAxios from "../../hooks/useAxios";

// const AdminNoticeDashboard = () => {
//   const axios = useAxios();

//   // States
//   const [notices, setNotices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [marqueeLoading, setMarqueeLoading] = useState(false);
  
//   const [modal, setModal] = useState(false);
//   const [marqueeModal, setMarqueeModal] = useState(false);
//   const [marqueeText, setMarqueeText] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const [formData, setFormData] = useState({
//     title: "",
//     date: "",
//     category: "academic",
//     description: "",
//     imageFile: null,
//     imagePreview: null,
//   });

//   // Load Data
//   const loadData = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("/posts");
//       setNotices(res.data);
//     } catch (error) {
//       toast.error("ডাটা লোড করা যায়নি");
//     } finally {
//       setLoading(false);
//     }
//   }, [axios]);

//   useEffect(() => { loadData(); }, [loadData]);

//   // Image Preview Handler
//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setFormData({
//       ...formData,
//       imageFile: file,
//       imagePreview: URL.createObjectURL(file),
//     });
//   };

//   const openAdd = () => {
//     setEditId(null);
//     setFormData({
//       title: "",
//       date: new Date().toISOString().split("T")[0],
//       category: "academic",
//       description: "",
//       imageFile: null,
//       imagePreview: null,
//     });
//     setModal(true);
//   };

//   const openEdit = (n) => {
//     setEditId(n._id);
//     setFormData({
//       title: n.title,
//       date: n.date,
//       category: n.category,
//       description: n.description,
//       imageFile: null,
//       imagePreview: n.image || null,
//     });
//     setModal(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     let base64 = null;
//     if (formData.imageFile) {
//       base64 = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result.split(",")[1]);
//         reader.readAsDataURL(formData.imageFile);
//       });
//     }

//     const payload = {
//       title: formData.title,
//       date: formData.date,
//       category: formData.category,
//       description: formData.description,
//       ...(base64 && { image: base64 }),
//     };

//     try {
//       if (editId) {
//         await axios.put(`/post/${editId}`, payload);
//         toast.success("সফলভাবে আপডেট হয়েছে");
//       } else {
//         await axios.post("/post", payload);
//         toast.success("নতুন নোটিশ যোগ হয়েছে");
//       }
//       setModal(false);
//       loadData();
//     } catch (error) {
//       toast.error("কিছু ভুল হয়েছে");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("আপনি কি নিশ্চিত?")) {
//       try {
//         await axios.delete(`/post/${id}`);
//         toast.info("মুছে ফেলা হয়েছে");
//         loadData();
//       } catch (error) {
//         toast.error("ডিলিট করা যায়নি");
//       }
//     }
//   };

//   const submitMarquee = async (e) => {
//     e.preventDefault();
//     if (!marqueeText.trim()) return toast.error("টেক্সট লিখুন");
//     try {
//       setMarqueeLoading(true);
//       await axios.post("/marquee", { text: marqueeText });
//       toast.success("Marquee আপডেট হয়েছে");
//       setMarqueeText("");
//       setMarqueeModal(false);
//     } catch (err) {
//       toast.error("ব্যর্থ হয়েছে");
//     } finally {
//       setMarqueeLoading(false);
//     }
//   };

 
//   const filteredNotices = notices.filter((n) =>
//     n.title?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) return (
//     <div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
//       <div className="text-center">
//         <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
//         <p className="mt-4 text-sm font-semibold text-slate-600">লোড হচ্ছে...</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pb-24 md:pb-8">
//       <ToastContainer position="top-center" autoClose={2000} hideProgressBar />

//       {/* Header */}
//       <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-40 rounded-full"></div>
//                 <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-2xl text-white shadow-lg">
//                   <FaBell size={20} />
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-slate-900 tracking-tight">অ্যাডমিন ড্যাশবোর্ড</h1>
//                 <p className="text-xs text-slate-500 font-medium">নোটিশ ম্যানেজমেন্ট সিস্টেম</p>
//               </div>
//             </div>
            
//             {/* Desktop Buttons */}
//             <div className="hidden md:flex items-center gap-3">
//               <button 
//                 onClick={() => setMarqueeModal(true)} 
//                 className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 hover:scale-105"
//               >
//                 <FaBullhorn size={16} /> 
//                 <span>শর্ট নোটিশ</span>
//               </button>
//               <button 
//                 onClick={openAdd} 
//                 className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-105"
//               >
//                 <FaPlus size={16} /> 
//                 <span>নতুন নোটিশ</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
//         {/* Search & Stats */}
//         <div className="mb-8 bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div className="relative flex-1 max-w-md">
//               <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
//               <input
//                 type="text"
//                 placeholder="শিরোনাম দিয়ে খুঁজুন..."
//                 className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="flex items-center gap-6">
//               <div className="text-center px-6 py-2 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50">
//                 <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">মোট নোটিশ</p>
//                 <p className="text-2xl font-bold text-emerald-600">{filteredNotices.length}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Grid Layout */}
//         {filteredNotices.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl border-2 border-dashed border-slate-200">
//             <div className="relative mb-6">
//               <div className="absolute inset-0 bg-slate-200 blur-2xl opacity-50 rounded-full"></div>
//               <FaBell className="relative text-6xl text-slate-300" />
//             </div>
//             <h3 className="text-lg font-semibold text-slate-700 mb-2">কোনো নোটিশ পাওয়া যায়নি</h3>
//             <p className="text-sm text-slate-500">নতুন নোটিশ যোগ করতে উপরের বাটনে ক্লিক করুন</p>
//           </div>
//         ) : (
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredNotices.map((n) => (
//               <div 
//                 key={n._id} 
//                 className="group bg-white  rounded-2xl border-2 border-amber-500/40 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden hover:-translate-y-1"
//               >
//                 <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
//                   {n.image ? (
//                     <img 
//                       src={n.image} 
//                       alt="" 
//                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
//                     />
//                   ) : (
//                     <div className="flex h-full w-full items-center justify-center">
//                       <FaBell size={48} className="text-slate-300" />
//                     </div>
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold uppercase text-emerald-600 shadow-md border border-emerald-100">
//                     {n.category === 'academic' ? 'অ্যাকাডেমিক' : n.category === 'admission' ? 'ভর্তি' : 'ইভেন্ট'}
//                   </span>
//                 </div>

//                 <div className="p-5">
//                   <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
//                     <FaCalendarAlt className="text-emerald-500" size={12} /> 
//                     <span>{n.date}</span>
//                   </div>
//                   <h3 className="text-base font-bold text-slate-800 line-clamp-2 mb-2 leading-snug min-h-[2.5rem]">
//                     {n.title}
//                   </h3>
//                   <p className="text-sm text-slate-600 line-clamp-2 mb-5 min-h-[2.5rem]">
//                     {n.description}
//                   </p>
                  
//                   <div className="flex gap-2">
//                     <button 
//                       onClick={() => openEdit(n)} 
//                       className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/50 text-indigo-600 font-semibold text-sm hover:from-indigo-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-200"
//                     >
//                       <FaEdit size={14} /> 
//                       <span>এডিট</span>
//                     </button>
//                     <button 
//                       onClick={() => handleDelete(n._id)} 
//                       className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 border border-rose-200/50 text-rose-600 font-semibold text-sm hover:from-rose-500 hover:to-red-500 hover:text-white hover:border-transparent transition-all duration-200"
//                     >
//                       <FaTrash size={14} /> 
//                       <span>ডিলিট</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Mobile Bottom Nav */}
//       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:hidden">
//         <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-3 flex gap-3 shadow-2xl border border-slate-700/50">
//           <button 
//             onClick={() => setMarqueeModal(true)} 
//             className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl text-sm font-bold active:scale-95 transition-all shadow-lg"
//           >
//             <FaBullhorn size={16} /> 
//             <span>শর্ট নোটিশ</span>
//           </button>
//           <button 
//             onClick={openAdd} 
//             className="flex-[1.5] flex items-center justify-center gap-2 py-3.5 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl text-sm font-bold active:scale-95 transition-all shadow-lg"
//           >
//             <FaPlus size={16} /> 
//             <span>নতুন নোটিশ</span>
//           </button>
//         </div>
//       </div>

//       {/* Marquee Modal */}
//       {marqueeModal && (
//         <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
//           <div 
//             className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 sm:slide-in-from-bottom-0 sm:zoom-in-95"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-5">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <FaBullhorn className="text-white text-xl" />
//                   <h2 className="text-xl font-bold text-white">শর্ট নোটিশ আপডেট</h2>
//                 </div>
//                 <button 
//                   type="button" 
//                   onClick={() => setMarqueeModal(false)} 
//                   className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition"
//                 >
//                   <FaTimes size={18} />
//                 </button>
//               </div>
//             </div>
//             <div className="p-6">
//               <textarea 
//                 rows="4" 
//                 className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none" 
//                 placeholder="শর্ট নোটিশ নোটিশ লিখুন..." 
//                 value={marqueeText} 
//                 onChange={(e) => setMarqueeText(e.target.value)} 
//               />
//             </div>
//             <div className="px-6 pb-6">
//               <button 
//                 onClick={submitMarquee}
//                 disabled={marqueeLoading} 
//                 className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//               >
//                 {marqueeLoading ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <FaCircleNotch className="animate-spin" /> 
//                     <span>আপলোড হচ্ছে...</span>
//                   </span>
//                 ) : (
//                   "পাবলিশ করুন"
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Modal */}
//       {modal && (
//         <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-md p-0 sm:p-4 animate-in fade-in duration-200">
//           <div 
//             className="w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[95vh] overflow-hidden animate-in slide-in-from-bottom duration-300 sm:slide-in-from-bottom-0 sm:zoom-in-95"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 sm:px-8 py-5">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl sm:text-2xl font-bold text-white">
//                   {editId ? "নোটিশ আপডেট করুন" : "নতুন নোটিশ যোগ করুন"}
//                 </h2>
//                 <button 
//                   type="button" 
//                   onClick={() => setModal(false)} 
//                   className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition"
//                 >
//                   <FaTimes size={20} />
//                 </button>
//               </div>
//             </div>
            
//             <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">শিরোনাম *</label>
//                 <input 
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" 
//                   placeholder="নোটিশের শিরোনাম লিখুন"
//                   value={formData.title} 
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
//                   required 
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">তারিখ *</label>
//                   <input 
//                     type="date" 
//                     className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition" 
//                     value={formData.date} 
//                     onChange={(e) => setFormData({ ...formData, date: e.target.value })} 
//                     required 
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">ক্যাটাগরি *</label>
//                   <select 
//                     className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition appearance-none cursor-pointer" 
//                     value={formData.category} 
//                     onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                   >
//                     <option value="academic">অ্যাকাডেমিক</option>
//                     <option value="admission">ভর্তি</option>
//                     <option value="event">ইভেন্ট</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">বর্ণনা</label>
//                 <textarea 
//                   rows="4" 
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none" 
//                   placeholder="নোটিশের বিস্তারিত বর্ণনা লিখুন"
//                   value={formData.description} 
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">ছবি আপলোড</label>
//                 <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-xl py-10 bg-slate-50 cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/30 transition-all duration-200 group">
//                   {formData.imagePreview ? (
//                     <div className="relative">
//                       <img 
//                         src={formData.imagePreview} 
//                         className="max-h-48 rounded-xl shadow-lg border-4 border-white" 
//                         alt="Preview" 
//                       />
//                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition-colors duration-200"></div>
//                     </div>
//                   ) : (
//                     <div className="text-center">
//                       <FaCloudUploadAlt size={48} className="mx-auto text-slate-300 group-hover:text-emerald-500 transition-colors duration-200 mb-3" />
//                       <p className="text-sm font-semibold text-slate-600 mb-1">ছবি আপলোড করুন</p>
//                       <p className="text-xs text-slate-400">ক্লিক করে ছবি সিলেক্ট করুন</p>
//                     </div>
//                   )}
//                   <input type="file" hidden accept="image/*" onChange={handleImage} />
//                 </label>
//               </div>
//             </div>

//             <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200">
//               <button 
//                 onClick={handleSubmit}
//                 disabled={isSubmitting} 
//                 className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <FaCircleNotch className="animate-spin" /> 
//                     <span>সংরক্ষণ হচ্ছে...</span>
//                   </span>
//                 ) : (
//                   editId ? "আপডেট করুন" : "সংরক্ষণ করুন"
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminNoticeDashboard;