import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    date: "2026-05-10",
    dateDisplay: "10/05/2026",
    category: "Sự kiện",
    title: "NTB Pharma New đồng hành cùng Hội nghị khoa học toàn quốc",
    excerpt:
      "NTB Pharma New tiếp tục khẳng định vai trò đồng hành cùng cộng đồng y tế tại hội nghị khoa học y dược thường niên năm 2026.",
    href: "/tin-tuc/hoi-nghi-khoa-hoc-2026",
    image: "/images/hoi-thao-tap-the.jpg",
  },
  {
    date: "2026-03-15",
    dateDisplay: "15/03/2026",
    category: "Công ty",
    title: "Kick-off kế hoạch năm 2026 — NTB Stronger Together",
    excerpt:
      "Sự kiện kick-off đầu năm 2026 với chủ đề 'Stronger Together' đánh dấu bước chuyển mình mạnh mẽ trong chiến lược phát triển của NTB Pharma New.",
    href: "/tin-tuc/kick-off-2026",
    image: "/images/ntb-stronger-1.jpg",
  },
  {
    date: "2026-01-20",
    dateDisplay: "20/01/2026",
    category: "Sản phẩm",
    title: "Ra mắt sản phẩm Haas Vital Stronger Multivitamin",
    excerpt:
      "NTB Pharma New chính thức giới thiệu Haas Vital Stronger Multivitamin — sản phẩm dinh dưỡng thế hệ mới dành cho trẻ em, kết quả hợp tác với đối tác Úc.",
    href: "/tin-tuc/ra-mat-haas-vital",
    image: "/images/event-product-launch-1.jpg",
  },
];

const categoryColors: Record<string, string> = {
  "Sự kiện": "bg-blue-100 text-[#01377d]",
  "Công ty": "bg-green-100 text-[#004900]",
  "Sản phẩm": "bg-amber-100 text-amber-800",
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
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
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
