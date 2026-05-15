"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "Số 26, kề 6A, Thôn Việt Kiều Châu Âu, KĐT Mộ Lao, Hà Đông, Hà Nội",
  },
  { icon: Phone, label: "Điện thoại", value: "0927 426 789", href: "tel:0927426789" },
  { icon: Mail, label: "Email", value: "info@ntbpharmanew.vn", href: "mailto:info@ntbpharmanew.vn" },
  { icon: Clock, label: "Giờ làm việc", value: "Thứ 2 – Thứ 6: 8:00 – 17:30" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  }

  return (
    <>
      <section className="ntb-wave-bg pt-36 pb-24">
        <div className="container mx-auto px-4">
          <p className="text-[#00b300] text-sm font-semibold uppercase tracking-widest mb-3">Liên hệ với chúng tôi</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Kết nối với NTB</h1>
          <p className="text-white/70 text-lg max-w-xl">
            Dù là hợp tác kinh doanh, tư vấn sản phẩm hay bất kỳ câu hỏi nào —
            chúng tôi luôn sẵn sàng lắng nghe.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#01377d] mb-8">Thông tin liên hệ</h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#01377d] to-[#004900] flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-800 font-medium hover:text-[#01377d] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 bg-gradient-to-br from-[#f3f6f9] to-[#e8eef7] flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-[#01377d] mx-auto mb-2" />
                  <p className="text-sm text-gray-500">KĐT Mộ Lao, Hà Đông, Hà Nội</p>
                  <a
                    href="https://maps.google.com/?q=Khu+đô+thị+Mộ+Lao,+Hà+Đông,+Hà+Nội"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#01377d] underline mt-1 inline-block"
                  >
                    Xem trên Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#01377d] mb-8">Gửi tin nhắn</h2>

              {sent ? (
                <div className="flex flex-col items-center justify-center h-80 text-center">
                  <CheckCircle size={56} className="text-[#004900] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gửi thành công!</h3>
                  <p className="text-gray-500">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Họ và tên *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01377d]/30 focus:border-[#01377d] text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Điện thoại *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        type="tel"
                        placeholder="0912 345 678"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01377d]/30 focus:border-[#01377d] text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01377d]/30 focus:border-[#01377d] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Chủ đề *</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01377d]/30 focus:border-[#01377d] text-sm transition-all bg-white"
                    >
                      <option value="">-- Chọn chủ đề --</option>
                      <option>Hợp tác phân phối</option>
                      <option>Tư vấn sản phẩm</option>
                      <option>Đặt hàng</option>
                      <option>Tuyển dụng</option>
                      <option>Khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nội dung *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Nhập nội dung tin nhắn..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#01377d]/30 focus:border-[#01377d] text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#01377d] text-white font-semibold hover:bg-[#01224c] transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="animate-pulse">Đang gửi...</span>
                    ) : (
                      <>
                        <Send size={16} /> Gửi tin nhắn
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
