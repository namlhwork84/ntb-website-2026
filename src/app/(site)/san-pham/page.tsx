import type { Metadata } from "next";
import { Brain, Baby, Heart, CheckCircle, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Sản phẩm | NTB Pharma New",
  description: "Danh mục sản phẩm dược phẩm chất lượng cao của NTB Pharma New: Thần kinh, Nhi khoa, Sản phụ khoa.",
};

const products = {
  "than-kinh": {
    id: "than-kinh",
    icon: Brain,
    category: "Thần kinh",
    color: "from-[#01377d] to-[#044d8e]",
    lightBg: "bg-blue-50",
    border: "border-blue-200",
    items: [
      {
        name: "Tharodas",
        form: "Viên nén bao phim",
        origin: "Châu Âu (EU-GMP)",
        indication: "Hỗ trợ tuần hoàn não, điều trị chóng mặt, ù tai, suy giảm trí nhớ liên quan đến thiếu máu não.",
        features: ["Cải thiện lưu lượng máu não", "Giảm chóng mặt & ù tai", "Tăng cường trí nhớ", "An toàn cho người cao tuổi"],
      },
      {
        name: "Gadacal",
        form: "Dung dịch tiêm",
        origin: "Châu Âu (EU-GMP)",
        indication: "Điều trị các rối loạn chức năng não, sau đột quỵ, chấn thương sọ não, suy giảm nhận thức.",
        features: ["Bảo vệ tế bào thần kinh", "Phục hồi sau đột quỵ", "Cải thiện nhận thức", "Dùng được cho ICU"],
      },
    ],
  },
  "nhi-khoa": {
    id: "nhi-khoa",
    icon: Baby,
    category: "Nhi khoa",
    color: "from-[#004900] to-[#007100]",
    lightBg: "bg-green-50",
    border: "border-green-200",
    items: [
      {
        name: "BocalsoNTB",
        form: "Siro / Viên nhai",
        origin: "Úc / Nhật Bản",
        indication: "Bổ sung canxi, vitamin D3 và các vi chất cần thiết cho sự phát triển xương và hệ miễn dịch của trẻ.",
        features: ["Phát triển xương chắc khỏe", "Tăng cường hệ miễn dịch", "Hương vị dễ uống", "Không chất bảo quản"],
      },
    ],
  },
  "san-phu-khoa": {
    id: "san-phu-khoa",
    icon: Heart,
    category: "Sản phụ khoa",
    color: "from-[#712B13] to-[#9b3b1a]",
    lightBg: "bg-rose-50",
    border: "border-rose-200",
    items: [
      {
        name: "Pregcandy",
        form: "Viên nén nhai",
        origin: "Úc",
        indication: "Bổ sung acid folic, sắt, canxi và các vi chất thiết yếu cho phụ nữ mang thai và sau sinh.",
        features: ["Ngăn ngừa dị tật thai nhi", "Bổ sung sắt chống thiếu máu", "Hỗ trợ phát triển thai nhi", "Dạng viên nhai tiện lợi"],
      },
      {
        name: "Solufemo",
        form: "Viên nén bao phim",
        origin: "Hàn Quốc",
        indication: "Điều trị và phòng ngừa thiếu máu do thiếu sắt, đặc biệt cho phụ nữ mang thai và phụ nữ tuổi sinh sản.",
        features: ["Hấp thu sắt tối ưu", "Ít tác dụng phụ tiêu hóa", "Công thức kiểm soát phóng thích", "An toàn cho thai kỳ"],
      },
    ],
  },
};

const standards = [
  { icon: Award, label: "GMP", desc: "Good Manufacturing Practice" },
  { icon: Globe, label: "EU-GMP", desc: "European GMP Standard" },
  { icon: CheckCircle, label: "ISO 9001", desc: "Quality Management" },
  { icon: Award, label: "GDP", desc: "Good Distribution Practice" },
];

export default function ProductsPage() {
  const groups = Object.values(products);

  return (
    <>
      {/* Hero */}
      <section className="ntb-wave-bg pt-36 pb-24 relative overflow-hidden">
        <div className="relative container mx-auto px-4">
          <p className="text-[#00b300] text-sm font-semibold uppercase tracking-widest mb-3">Danh mục sản phẩm</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Sản phẩm<br />
            <span className="text-[#00b300]">chất lượng quốc tế</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Tất cả sản phẩm nhập khẩu từ các nhà sản xuất đạt chuẩn GMP quốc tế.
            Được kiểm định nghiêm ngặt trước khi đến tay người bệnh.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {standards.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#01377d] to-[#004900] flex items-center justify-center">
                  <s.icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#01377d]">{s.label}</div>
                  <div className="text-xs text-gray-400">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Groups */}
      {groups.map((group) => (
        <section key={group.id} id={group.id} className="py-20 even:bg-gray-50 odd:bg-white scroll-mt-20">
          <div className="container mx-auto px-4">
            {/* Group header */}
            <div className="flex items-center gap-4 mb-12">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center shrink-0`}>
                <group.icon size={28} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Nhóm sản phẩm</p>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#01377d]">{group.category}</h2>
              </div>
            </div>

            {/* Products grid */}
            <div className={`grid grid-cols-1 ${group.items.length > 1 ? "md:grid-cols-2" : "max-w-2xl"} gap-8`}>
              {group.items.map((product) => (
                <div key={product.name} className={`rounded-2xl border ${group.border} ${group.lightBg} overflow-hidden`}>
                  {/* Product header */}
                  <div className={`p-6 bg-gradient-to-br ${group.color} text-white`}>
                    <h3 className="text-2xl font-extrabold mb-1">{product.name}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-white/70">
                      <span>Dạng: {product.form}</span>
                      <span>·</span>
                      <span>Xuất xứ: {product.origin}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white">
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Chỉ định</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{product.indication}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Ưu điểm nổi bật</p>
                      <ul className="space-y-2">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle size={14} className="text-[#004900] shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <p className="text-xs text-gray-400">
                        * Sản phẩm này chỉ dành cho cán bộ y tế. Vui lòng tham khảo ý kiến bác sĩ trước khi sử dụng.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className="py-16 ntb-wave-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
            Cần tư vấn sản phẩm?
          </h2>
          <p className="text-white/70 mb-8">Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ 24/7</p>
          <a
            href="/lien-he"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#004900] text-white font-semibold hover:bg-[#007100] transition-colors"
          >
            Liên hệ ngay
          </a>
        </div>
      </section>
    </>
  );
}
