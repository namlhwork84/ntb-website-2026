import type { Metadata } from "next";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tuyển dụng | NTB Pharma New",
  description: "Cơ hội nghề nghiệp tại NTB Pharma New — Tham gia đội ngũ chuyên gia dược phẩm hàng đầu.",
};

const openings = [
  {
    title: "Trình dược viên ETC",
    dept: "Kênh ETC",
    location: "Hà Nội",
    type: "Toàn thời gian",
    level: "Nhân viên",
    desc: "Triển khai hoạt động xúc tiến sản phẩm tại các bệnh viện, phòng khám. Xây dựng và duy trì mối quan hệ với bác sĩ, dược sĩ.",
    requirements: ["Tốt nghiệp Dược / Y / Dược học", "Có kinh nghiệm TDV là lợi thế", "Kỹ năng giao tiếp tốt", "Sẵn sàng đi lại theo khu vực"],
  },
  {
    title: "Trình dược viên OTC",
    dept: "Kênh OTC",
    location: "Hà Nội & các tỉnh",
    type: "Toàn thời gian",
    level: "Nhân viên",
    desc: "Phát triển mạng lưới nhà thuốc bán lẻ, thực hiện các chương trình hỗ trợ khách hàng và thúc đẩy doanh số.",
    requirements: ["Tốt nghiệp Trung cấp Dược trở lên", "Có xe máy, bằng lái B1 trở lên", "Năng động, chủ động", "Có kinh nghiệm FMCG/Dược là lợi thế"],
  },
  {
    title: "Trade Marketing Executive",
    dept: "Marketing",
    location: "Hà Nội",
    type: "Toàn thời gian",
    level: "Executive",
    desc: "Lên kế hoạch và triển khai các chương trình trade marketing, hỗ trợ đội bán hàng ETC & OTC đạt mục tiêu kinh doanh.",
    requirements: ["Tốt nghiệp ĐH chuyên ngành Marketing / Dược", "1-3 năm kinh nghiệm Trade Marketing", "Thành thạo Excel, PowerPoint", "Tư duy phân tích dữ liệu"],
  },
  {
    title: "Chuyên viên CSKH",
    dept: "Sales Admin",
    location: "Hà Nội",
    type: "Toàn thời gian",
    level: "Nhân viên",
    desc: "Xử lý đơn hàng, chăm sóc khách hàng, hỗ trợ đội sales và phối hợp với các phòng ban liên quan.",
    requirements: ["Tốt nghiệp ĐH bất kỳ chuyên ngành", "Giao tiếp tốt, xử lý tình huống linh hoạt", "Thành thạo tin học văn phòng", "Kinh nghiệm CSKH là lợi thế"],
  },
];

const benefits = [
  { title: "Lương cạnh tranh", desc: "Mức lương hấp dẫn + thưởng hiệu suất quý/năm" },
  { title: "Đào tạo chuyên sâu", desc: "Chương trình onboarding và đào tạo sản phẩm bài bản" },
  { title: "Môi trường chuyên nghiệp", desc: "Làm việc với đội ngũ chuyên gia dược phẩm giàu kinh nghiệm" },
  { title: "Phúc lợi đầy đủ", desc: "BHXH, BHYT, nghỉ phép, team building, du lịch hàng năm" },
];

export default function CareersPage() {
  return (
    <>
      <section className="ntb-wave-bg pt-36 pb-24">
        <div className="container mx-auto px-4">
          <p className="text-[#00b300] text-sm font-semibold uppercase tracking-widest mb-3">Gia nhập đội ngũ</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Cùng NTB xây dựng<br />
            <span className="text-[#00b300]">tương lai sức khỏe</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Chúng tôi đang tìm kiếm những người tài năng, nhiệt huyết để cùng
            thực hiện sứ mệnh mang giải pháp sức khỏe từ gốc đến cộng đồng.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-[#01377d] mb-8 text-center">Tại sao chọn NTB?</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-5 rounded-2xl bg-gradient-to-br from-[#f3f6f9] to-white border border-gray-100 text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#01377d] to-[#004900] mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job openings */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-[#01377d] mb-2">Vị trí đang tuyển</h2>
          <p className="text-gray-500 mb-10">{openings.length} vị trí đang tuyển dụng</p>

          <div className="space-y-6">
            {openings.map((job, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#01377d]/20 hover:shadow-lg transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-[#01377d] text-xs font-semibold">{job.dept}</span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">{job.level}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1"><MapPin size={13} />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={13} />{job.type}</span>
                      <span className="flex items-center gap-1"><Briefcase size={13} />{job.dept}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{job.desc}</p>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Yêu cầu</p>
                      <ul className="flex flex-wrap gap-2">
                        {job.requirements.map((r) => (
                          <li key={r} className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-600">{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a
                    href={`mailto:hr@ntbpharmanew.vn?subject=Ứng tuyển: ${job.title}`}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#01377d] text-white font-semibold text-sm hover:bg-[#01224c] transition-colors whitespace-nowrap shrink-0"
                  >
                    Ứng tuyển ngay <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-[#01377d]/5 to-[#004900]/5 border border-[#01377d]/10 text-center">
            <p className="text-gray-600 mb-2">Không tìm thấy vị trí phù hợp?</p>
            <a href="mailto:hr@ntbpharmanew.vn" className="text-[#01377d] font-semibold hover:underline">
              Gửi CV tự do đến hr@ntbpharmanew.vn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
