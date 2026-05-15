import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tin tức | NTB Pharma New",
  description: "Tin tức và sự kiện mới nhất từ NTB Pharma New.",
};

const news = [
  {
    slug: "hoi-nghi-khoa-hoc-2026",
    date: "10/05/2026",
    category: "Sự kiện",
    title: "NTB Pharma New đồng hành cùng Hội nghị khoa học toàn quốc",
    excerpt: "NTB Pharma New tiếp tục khẳng định vai trò đồng hành cùng cộng đồng y tế tại hội nghị khoa học y dược thường niên năm 2026, với sự tham gia của hơn 500 bác sĩ và dược sĩ toàn quốc.",
    featured: true,
  },
  {
    slug: "kick-off-2026",
    date: "15/03/2026",
    category: "Công ty",
    title: "Kick-off kế hoạch năm 2026 — NTB Stronger Together",
    excerpt: "Sự kiện kick-off đầu năm 2026 với chủ đề 'Stronger Together' đánh dấu bước chuyển mình mạnh mẽ trong chiến lược phát triển.",
    featured: false,
  },
  {
    slug: "san-pham-than-kinh-moi",
    date: "20/01/2026",
    category: "Sản phẩm",
    title: "Ra mắt dòng sản phẩm thần kinh thế hệ mới",
    excerpt: "NTB Pharma New chính thức giới thiệu dòng sản phẩm thần kinh thế hệ mới, kết quả của 3 năm nghiên cứu chuyên sâu cùng đối tác châu Âu.",
    featured: false,
  },
  {
    slug: "nhan-dien-thuong-hieu-moi",
    date: "30/01/2026",
    category: "Thương hiệu",
    title: "NTB Pharma New ra mắt nhận diện thương hiệu mới 2026",
    excerpt: "Sau nhiều tháng nghiên cứu và phát triển, NTB Pharma New chính thức công bố bộ nhận diện thương hiệu mới — hiện đại, chuyên nghiệp và đầy năng lượng.",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Sự kiện": "bg-blue-100 text-[#01377d]",
  "Công ty": "bg-green-100 text-[#004900]",
  "Sản phẩm": "bg-amber-100 text-amber-800",
  "Thương hiệu": "bg-purple-100 text-purple-700",
};

export default function NewsPage() {
  const featured = news.find((n) => n.featured);
  const rest = news.filter((n) => !n.featured);

  return (
    <>
      <section className="ntb-wave-bg pt-36 pb-24">
        <div className="container mx-auto px-4">
          <p className="text-[#00b300] text-sm font-semibold uppercase tracking-widest mb-3">Tin tức & Sự kiện</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Cập nhật mới nhất</h1>
          <p className="text-white/70 text-lg max-w-xl">Theo dõi những tin tức và sự kiện nổi bật từ NTB Pharma New.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Featured */}
          {featured && (
            <div className="mb-12">
              <p className="text-xs font-semibold text-[#004900] uppercase tracking-widest mb-4">Tin nổi bật</p>
              <Link href={`/tin-tuc/${featured.slug}`} className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all md:flex">
                <div className="md:w-2/5 h-56 md:h-auto bg-gradient-to-br from-[#01377d] to-[#004900] relative flex items-center justify-center">
                  <div className="opacity-20">
                    <svg viewBox="0 0 300 300" className="w-48 h-48" fill="white">
                      <circle cx="150" cy="150" r="130" />
                      <circle cx="150" cy="150" r="95" fillOpacity="0.4" />
                      <circle cx="150" cy="150" r="60" fillOpacity="0.3" />
                      <circle cx="115" cy="115" r="38" fill="url(#f-orb)" fillOpacity="0.9" />
                      <defs>
                        <radialGradient id="f-orb" cx="35%" cy="30%">
                          <stop offset="0%" stopColor="#aad4f5" />
                          <stop offset="100%" stopColor="#01377d" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category]}`}>
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Calendar size={12} /> {featured.date}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#01377d] transition-colors">{featured.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#01377d]">
                    Đọc tiếp <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rest.map((item) => (
              <Link
                key={item.slug}
                href={`/tin-tuc/${item.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all card-hover"
              >
                <div className="h-44 bg-gradient-to-br from-[#01377d] to-[#004900] relative">
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category] || "bg-gray-100 text-gray-700"}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <Calendar size={11} /> {item.date}
                  </div>
                  <h3 className="font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#01377d] transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
