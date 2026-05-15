import { FlaskConical, Globe, ShieldCheck, Handshake } from "lucide-react";

const reasons = [
  {
    icon: FlaskConical,
    title: "Nghiên cứu từ gốc",
    desc: "Mỗi sản phẩm được nghiên cứu sâu về cơ chế sinh học, đảm bảo hiệu quả lâm sàng thực sự — không chỉ là triệu chứng.",
  },
  {
    icon: Globe,
    title: "Đối tác quốc tế uy tín",
    desc: "Hợp tác với các nhà sản xuất đạt chuẩn EU-GMP từ Úc, Nhật Bản, Hàn Quốc và Nga — đảm bảo chất lượng toàn cầu.",
  },
  {
    icon: ShieldCheck,
    title: "Chứng nhận chất lượng",
    desc: "Toàn bộ sản phẩm đạt tiêu chuẩn GMP, ISO 9001. Quy trình kiểm soát chất lượng nghiêm ngặt tại từng khâu.",
  },
  {
    icon: Handshake,
    title: "Đồng hành lâu dài",
    desc: "12 năm xây dựng mối quan hệ tin cậy với hơn 300 bệnh viện và gần 10.000 nhà thuốc trên toàn quốc.",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-gradient-to-br from-[#01377d]/5 to-transparent -translate-x-24 -translate-y-24" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-[#004900]/5 to-transparent translate-x-24 translate-y-24" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sm font-semibold text-[#004900] uppercase tracking-widest mb-3">
              Tại sao chọn NTB?
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d] mb-6 leading-tight">
              Cam kết chất lượng<br />từ mọi góc độ
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              NTB Pharma New không chỉ là nhà phân phối — chúng tôi là đối tác y tế tin cậy,
              mang đến giải pháp sức khỏe toàn diện cho hệ thống y tế Việt Nam.
            </p>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#01377d] to-[#004900] text-white">
              <div className="text-3xl font-extrabold shrink-0">60+</div>
              <div>
                <div className="font-semibold text-sm">Tỉnh thành phủ sóng</div>
                <div className="text-xs text-white/70">Mạng lưới phân phối toàn quốc từ Bắc vào Nam</div>
              </div>
            </div>
          </div>

          {/* Right: Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-[#01377d]/20 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01377d]/10 to-[#004900]/10 flex items-center justify-center mb-4">
                  <r.icon size={22} className="text-[#01377d]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
