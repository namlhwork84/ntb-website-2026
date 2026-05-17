import { Scale, CheckCircle2, Users, Gift, BookOpen } from "lucide-react";

const values = [
  {
    icon: Scale,
    number: "01",
    title: "Đạo đức là nền tảng",
    titleEn: "Ethics as Foundation",
    desc: "Mọi quyết định kinh doanh đều được đặt trên nền tảng đạo đức. Chúng tôi hành xử trung thực, minh bạch với đối tác, khách hàng và cộng đồng.",
    color: "from-[#01377d] to-[#044d8e]",
  },
  {
    icon: CheckCircle2,
    number: "02",
    title: "Cam kết",
    titleEn: "Commitment",
    desc: "Đã nói là làm. Chúng tôi giữ trọn cam kết với chất lượng sản phẩm, với bệnh nhân và với các đối tác y tế — không thỏa hiệp, không ngoại lệ.",
    color: "from-[#004900] to-[#007100]",
  },
  {
    icon: Users,
    number: "03",
    title: "Đoàn kết",
    titleEn: "Unity",
    desc: "Sức mạnh của NTB đến từ tập thể. Mỗi cá nhân đóng góp, mỗi phòng ban phối hợp — cùng nhau tạo nên kết quả vượt trội mà một mình không thể đạt được.",
    color: "from-[#185FA5] to-[#01377d]",
  },
  {
    icon: Gift,
    number: "04",
    title: "Chia sẻ",
    titleEn: "Sharing",
    desc: "Chia sẻ kiến thức, kinh nghiệm và giá trị với đồng nghiệp, đối tác và cộng đồng. Sự thịnh vượng có ý nghĩa hơn khi được lan tỏa.",
    color: "from-[#712B13] to-[#9b3b1a]",
  },
  {
    icon: BookOpen,
    number: "05",
    title: "Học nữa học mãi",
    titleEn: "Continuous Learning",
    desc: "Ngành dược luôn đổi mới — chúng tôi cũng vậy. Không ngừng cập nhật kiến thức y khoa, nâng cao năng lực chuyên môn để phục vụ tốt hơn mỗi ngày.",
    color: "from-[#3C3489] to-[#5b52c2]",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full border-[80px] border-[#01377d]"
          style={{ right: -200, top: -150 }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full border-[60px] border-[#004900]"
          style={{ left: -100, bottom: -100 }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-[#004900] uppercase mb-3 block">
            Văn hóa doanh nghiệp
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d] mb-4">
            5 Giá trị cốt lõi NTB
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Văn hóa NTB Pharma New được xây dựng trên 5 giá trị cốt lõi —
            kim chỉ nam cho mọi hành động và quyết định của toàn thể đội ngũ.
          </p>
        </div>

        {/* 5 values — asymmetric layout: 3 top + 2 bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {values.slice(0, 3).map((v) => (
            <ValueCard key={v.number} v={v} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {values.slice(3).map((v) => (
            <ValueCard key={v.number} v={v} />
          ))}
        </div>

        {/* Brand tagline */}
        <div className="mt-14 text-center">
          <div className="inline-block px-8 py-4 rounded-2xl border-2 border-[#01377d]/15 bg-gradient-to-r from-[#01377d]/5 to-[#004900]/5">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Định vị thương hiệu</p>
            <p className="text-xl font-bold text-[#01377d] italic">
              "Your Health We Care"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ v }: { v: typeof values[0] }) {
  return (
    <div className="group p-6 rounded-2xl border border-gray-100 hover:border-[#01377d]/20 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* Numbered icon */}
        <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center shadow-md`}>
          <v.icon size={22} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-gray-300">{v.number}</span>
            <h3 className="font-extrabold text-gray-900 group-hover:text-[#01377d] transition-colors">
              {v.title}
            </h3>
          </div>
          <p className="text-xs text-gray-400 italic mb-2">{v.titleEn}</p>
          <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
        </div>
      </div>
    </div>
  );
}
