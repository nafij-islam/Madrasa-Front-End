import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "./Container";
import { FaCalendarAlt, FaArrowLeft, FaImage } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";

const DetailsNotise = () => {
  const { id } = useParams();
  const axios = useAxios();

  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/post/${id}`).then((res) => {
      setNotice(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="py-20 text-center">লোড হচ্ছে...</div>;
  if (!notice) return <div className="py-20 text-center">নোটিশ পাওয়া যায়নি</div>;

  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <Link to="/" className="inline-flex items-center gap-2 mb-6 text-emerald-600 font-semibold">
          <FaArrowLeft /> ফিরে যান
        </Link>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <div className="h-96 bg-slate-200">
            {notice.image ? (
              <img src={notice.image} alt={notice.title} className="w-full h-full object-cover" />
            ) : (
              <div className="h-full flex items-center justify-center text-slate-300">
                <FaImage size={80} />
              </div>
            )}
          </div>

          <div className="p-8">
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
              <FaCalendarAlt className="text-emerald-600" />
              {notice.date}
            </div>

            <h1 className="text-3xl font-bold mb-4">{notice.title}</h1>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {notice.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DetailsNotise;
