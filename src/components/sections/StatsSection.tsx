const stats = [
  { value: "12+", label: "Năm hoạt động", desc: "Thành lập 2012, kinh nghiệm hơn 12 năm trong ngành dược" },
  { value: "300+", label: "Bệnh viện & phòng khám", desc: "Đối tác cung ứng từ tuyến trung ương đến địa phương" },
  { value: "10.000+", label: "Nhà thuốc bán lẻ", desc: "Mạng lưới phân phối trên 60 tỉnh thành toàn quốc" },
  { value: "60+", label: "Tỉnh thành", desc: "Phủ sóng toàn quốc từ Bắc vào Nam" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#004900] uppercase tracking-widest mb-3">
            Thành tựu nổi bật
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d]">
            Con số nói lên tất cả
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#01377d] to-[#044d8e] mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-extrabold text-xl">{i + 1}</span>
              </div>
              <div className="text-4xl font-extrabold text-[#01377d] mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-2">{stat.label}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
