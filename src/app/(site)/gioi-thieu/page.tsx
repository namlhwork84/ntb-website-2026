import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Users, Globe, FlaskConical, Scale, CheckCircle2, Gift, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới thiệu | NTB Pharma New",
  description: "Tìm hiểu về NTB Pharma New — 12 năm chuyên nghiên cứu và phân phối dược phẩm chất lượng cao tại Việt Nam.",
};

const coreValues = [
  { icon: Scale,        title: "Đạo đức là nền tảng", desc: "Mọi quyết định kinh doanh đều đặt trên nền tảng đạo đức. Hành xử trung thực, minh bạch với đối tác, khách hàng và cộng đồng." },
  { icon: CheckCircle2, title: "Cam kết",               desc: "Đã nói là làm. Giữ trọn cam kết với chất lượng sản phẩm, với bệnh nhân và các đối tác y tế — không thỏa hiệp, không ngoại lệ." },
  { icon: Users,        title: "Đoàn kết",              desc: "Sức mạnh của NTB đến từ tập thể. Mỗi cá nhân đóng góp, mỗi phòng ban phối hợp — cùng nhau tạo nên kết quả vượt trội." },
  { icon: Gift,         title: "Chia sẻ",               desc: "Chia sẻ kiến thức, kinh nghiệm và giá trị với đồng nghiệp, đối tác và cộng đồng. Sự thịnh vượng có ý nghĩa hơn khi được lan tỏa." },
  { icon: BookOpen,     title: "Học nữa học mãi",       desc: "Ngành dược luôn đổi mới — NTB cũng vậy. Không ngừng cập nhật kiến thức y khoa, nâng cao năng lực chuyên môn mỗi ngày." },
  { icon: Globe,        title: "Hội nhập quốc tế",      desc: "Kết nối với mạng lưới đối tác uy tín tại Úc, Nhật Bản, Hàn Quốc và Nga để mang giải pháp dược phẩm tốt nhất về Việt Nam." },
];

const milestones = [
  { year: "2012", title: "Thành lập", desc: "Công ty TNHH Thương mại NTB Pharma New được thành lập tại Hà Nội với định hướng phân phối dược phẩm chất lượng cao." },
  { year: "2016", title: "Mở rộng toàn quốc", desc: "Phủ sóng 30+ tỉnh thành, ký kết hợp đồng với 100+ bệnh viện tuyến trung ương và địa phương." },
  { year: "2019", title: "Đối tác quốc tế", desc: "Ký kết hợp tác chiến lược với các nhà sản xuất đạt chuẩn EU-GMP từ Úc, Nhật Bản, Hàn Quốc." },
  { year: "2022", title: "10 năm phát triển", desc: "Kỷ niệm 10 năm thành lập với hơn 250 bệnh viện đối tác và mạng lưới 8.000+ nhà thuốc toàn quốc." },
  { year: "2025", title: "Đổi mới thương hiệu", desc: "Ra mắt nhận diện thương hiệu mới, khẳng định vị thế chuyên gia nghiên cứu phát triển sản phẩm từ gốc." },
  { year: "2026", title: "Stronger Together", desc: "Bước vào giai đoạn phát triển mới với chiến lược mở rộng ra thị trường Đông Nam Á." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="ntb-wave-bg pt-36 pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[45%] h-full opacity-15 pointer-events-none">
          <svg viewBox="0 0 500 800" fill="white" className="w-full h-full">
            <circle cx="400" cy="300" r="280" />
            <circle cx="400" cy="300" r="200" fillOpacity="0.4" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4">
          <p className="text-[#00b300] text-sm font-semibold uppercase tracking-widest mb-3">Về chúng tôi</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-2xl">
            12 năm vì sức khỏe cộng đồng
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Chúng tôi không chỉ phân phối thuốc — chúng tôi phân phối sức khỏe,
            niềm tin và hy vọng cho hàng triệu bệnh nhân Việt Nam.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#004900] uppercase tracking-widest mb-3">Câu chuyện của chúng tôi</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d] mb-6 leading-tight">
                Từ giấc mơ đến<br />thực tế
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Công ty TNHH Thương mại NTB Pharma New được thành lập năm 2012 bởi CEO Trần Thị Hồng Thái.
                  Tên gọi NTB kết hợp từ tên của những người đồng nghiệp và gia đình — những người đã cùng nhau
                  xây dựng ước mơ đưa dược phẩm chất lượng cao đến tay người bệnh Việt Nam.
                </p>
                <p>
                  Sau 12 năm phát triển, NTB Pharma New đã trở thành nhà phân phối dược phẩm uy tín với mạng lưới
                  phủ sóng trên 60 tỉnh thành, đối tác của hơn 300 bệnh viện lớn và gần 10.000 nhà thuốc bán lẻ.
                </p>
                <p>
                  Chúng tôi chuyên phân phối các sản phẩm điều trị thần kinh, nhi khoa và sản phụ khoa — những lĩnh vực
                  đòi hỏi sự chính xác, tin cậy và tận tâm cao nhất.
                </p>
              </div>
            </div>

            {/* Team photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/images/team-kickoff-2026.jpg"
                alt="Toàn bộ đội ngũ NTB Pharma New - Kick-off 2026"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01377d]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-semibold mb-2">
                  <Users size={12} />
                  Kick-off 2026 — NTB Stronger Together
                </div>
                <p className="text-white font-bold">100+ thành viên cùng nhau bước vào năm 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="su-menh" className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#004900] uppercase tracking-widest mb-3">Định hướng chiến lược</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d]">Tầm nhìn & Sứ mệnh</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#01377d] to-[#01224c] text-white">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Tầm nhìn</h3>
              <p className="text-white/80 leading-relaxed">
                Trở thành nhà phân phối dược phẩm hàng đầu Việt Nam và tiên phong mở rộng ra thị trường
                Đông Nam Á, mang giải pháp sức khỏe từ gốc đến hàng triệu bệnh nhân.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#004900] to-[#007100] text-white">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Sứ mệnh</h3>
              <p className="text-white/80 leading-relaxed">
                Cung cấp các sản phẩm dược phẩm chất lượng quốc tế với giá cạnh tranh,
                đồng hành cùng hệ thống y tế Việt Nam để nâng cao sức khỏe cộng đồng.
              </p>
            </div>
          </div>

          {/* Brand positioning */}
          <div className="mt-10 max-w-3xl mx-auto text-center p-8 rounded-2xl border-2 border-[#01377d]/20 bg-white">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Định vị thương hiệu</p>
            <blockquote className="text-2xl lg:text-3xl font-bold text-[#01377d] italic leading-relaxed">
              "Chuyên gia nghiên cứu phát triển sản phẩm tiên phong từ gốc"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="gia-tri" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#004900] uppercase tracking-widest mb-3">Nền tảng văn hóa</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d]">Giá trị cốt lõi</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-[#01377d]/20 hover:shadow-lg transition-all card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01377d]/10 to-[#004900]/10 flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-[#01377d]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture photos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#004900] uppercase tracking-widest mb-2">Đời sống NTB</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#01377d]">Văn hóa & Con người</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/office-birthday-1.jpg", alt: "Sinh nhật tại văn phòng NTB" },
              { src: "/images/teambuilding-halong-2.jpg", alt: "Teambuilding Hạ Long" },
              { src: "/images/ntb-stronger-5.jpg", alt: "Sự kiện NTB Stronger" },
              { src: "/images/teambuilding-halong-4.jpg", alt: "Đội ngũ teambuilding" },
            ].map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#004900] uppercase tracking-widest mb-3">Hành trình phát triển</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d]">Những cột mốc quan trọng</h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#01377d] to-[#004900]" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#01377d] to-[#004900] flex items-center justify-center text-white font-bold text-xs text-center z-10 relative shadow-lg">
                    {m.year}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
