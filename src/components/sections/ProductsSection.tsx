import Link from "next/link";
import { ArrowRight, Brain, Baby, Heart } from "lucide-react";

const productGroups = [
  {
    id: "than-kinh",
    icon: Brain,
    category: "Thần kinh",
    tagline: "Chăm sóc não bộ & hệ thần kinh",
    description:
      "Các sản phẩm hỗ trợ điều trị bệnh lý thần kinh, đột quỵ, rối loạn tuần hoàn não. Được nhập khẩu từ các nhà sản xuất đạt chuẩn EU-GMP.",
    products: ["Tharodas", "Gadacal"],
    color: "from-[#01377d] to-[#044d8e]",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-100",
    badgeColor: "bg-blue-100 text-[#01377d]",
  },
  {
    id: "nhi-khoa",
    icon: Baby,
    category: "Nhi khoa",
    tagline: "Dinh dưỡng & sức khỏe trẻ em",
    description:
      "Sản phẩm bổ sung vi chất, hỗ trợ phát triển toàn diện cho trẻ từ sơ sinh đến 15 tuổi. Công thức nhập khẩu từ Úc, Nhật Bản.",
    products: ["BocalsoNTB"],
    color: "from-[#004900] to-[#007100]",
    lightColor: "bg-green-50",
    borderColor: "border-green-100",
    badgeColor: "bg-green-100 text-[#004900]",
  },
  {
    id: "san-phu-khoa",
    icon: Heart,
    category: "Sản phụ khoa",
    tagline: "Chăm sóc sức khỏe phụ nữ",
    description:
      "Sản phẩm hỗ trợ phụ nữ mang thai, sau sinh và điều trị các vấn đề phụ khoa. Được nghiên cứu chuyên sâu cho nhu cầu đặc thù của phụ nữ Việt.",
    products: ["Pregcandy", "Solufemo"],
    color: "from-[#712B13] to-[#9b3b1a]",
    lightColor: "bg-rose-50",
    borderColor: "border-rose-100",
    badgeColor: "bg-rose-100 text-[#712B13]",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#004900] uppercase tracking-widest mb-3">
            Danh mục sản phẩm
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d] mb-4">
            3 nhóm sản phẩm trọng tâm
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Tất cả sản phẩm đều đạt tiêu chuẩn GMP quốc tế, nhập khẩu từ Úc, Nhật Bản,
            Hàn Quốc và Nga — đảm bảo chất lượng cao nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productGroups.map((group) => (
            <div
              key={group.id}
              className={`rounded-2xl border ${group.borderColor} bg-white overflow-hidden card-hover`}
            >
              {/* Header gradient */}
              <div className={`p-8 bg-gradient-to-br ${group.color} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
                <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-white/5 translate-y-6 -translate-x-6" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <group.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-1">{group.category}</h3>
                  <p className="text-white/70 text-sm">{group.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{group.description}</p>

                {/* Product badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {group.products.map((p) => (
                    <span key={p} className={`px-3 py-1 rounded-full text-xs font-semibold ${group.badgeColor}`}>
                      {p}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/san-pham#${group.id}`}
                  className="flex items-center gap-2 text-sm font-semibold text-[#01377d] hover:text-[#004900] transition-colors group"
                >
                  Xem chi tiết
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/san-pham"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#01377d] text-white font-semibold hover:bg-[#01224c] transition-colors"
          >
            Xem tất cả sản phẩm
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
