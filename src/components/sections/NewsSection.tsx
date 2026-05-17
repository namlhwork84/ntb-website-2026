import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    date: "2025-06-21",
    dateDisplay: "21/06/2025",
    category: "Công ty",
    title: "Chúc mừng 100 năm Ngày Báo chí Cách mạng Việt Nam",
    excerpt:
      "NTB Pharma New tri ân những người làm báo nhân kỷ niệm 100 năm Ngày Báo chí Cách mạng Việt Nam (21/06/1925 – 21/06/2025).",
    href: "/tin-tuc/bao-chi-cach-mang-2025",
    image: "https://ntbpharmanew.vn/storage/newsThumbnail/1750483645833.png",
  },
  {
    date: "2025-06-11",
    dateDisplay: "11/06/2025",
    category: "Văn hóa",
    title: "NTB Stronger 2025: Tháng thể thao truyền cảm hứng",
    excerpt:
      "NTB Stronger 2025 — tháng thể thao của NTB Pharma New với nhiều hoạt động sôi nổi, lan tỏa tinh thần khỏe mạnh và đoàn kết trong toàn công ty.",
    href: "/tin-tuc/ntb-stronger-2025",
    image: "https://ntbpharmanew.vn/storage/newsThumbnail/1749656727810.jpg",
  },
  {
    date: "2024-01-04",
    dateDisplay: "04/01/2024",
    category: "Sự kiện",
    title: "NTB Pharma New — Nhà tài trợ vàng Hội nghị Y học Bào thai lần thứ 1",
    excerpt:
      "NTB Pharma New tự hào là nhà tài trợ vàng cho Hội nghị Khoa học Y học Bào thai lần thứ 1 — khẳng định cam kết đồng hành với y tế chuyên sâu.",
    href: "/tin-tuc/hoi-nghi-y-hoc-bao-thai",
    image: "https://ntbpharmanew.vn/storage/newsThumbnail/1704354140763.png",
  },
];

const categoryColors: Record<string, string> = {
  "Sự kiện": "bg-blue-100 text-[#01377d]",
  "Công ty": "bg-green-100 text-[#004900]",
  "Sản phẩm": "bg-amber-100 text-amber-800",
  "Văn hóa": "bg-purple-100 text-purple-800",
};

export default function NewsSection() {
  return (
    <section className="py-20 section-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-14 gap-4">
          <div>
            <p className="text-sm font-semibold text-[#004900] uppercase tracking-widest mb-2">
              Tin tức & Sự kiện
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d]">
              Cập nhật mới nhất
            </h2>
          </div>
          <Link
            href="/tin-tuc"
            className="flex items-center gap-2 text-sm font-semibold text-[#01377d] hover:text-[#004900] transition-colors shrink-0"
          >
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#01377d]/20 hover:shadow-xl transition-all card-hover"
            >
              {/* Real photo */}
              <div className="relative h-48 overflow-hidden bg-[#01377d]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category] || "bg-gray-100 text-gray-700"}`}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Calendar size={12} />
                  {item.dateDisplay}
                </div>
                <h3 className="font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#01377d] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
