import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#01377d]">
      {/* Background photo — ảnh hội thảo bệnh viện thật */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hospital.jpg"
          alt="NTB Pharma New hội thảo bệnh viện"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay giữ màu thương hiệu navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01377d]/92 via-[#01377d]/80 to-[#004900]/60" />
      </div>

      {/* Decorative right-side vignette */}
      <div className="absolute right-0 inset-y-0 w-1/3 bg-gradient-to-l from-[#004900]/30 to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-8 backdrop-blur-sm">
            <Shield size={14} className="text-[#00b300]" />
            Tiêu chuẩn GMP · EU-GMP · ISO 9001
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Giải pháp<br />
            <span className="text-[#00cc00]">sức khỏe</span><br />
            từ gốc
          </h1>

          <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-xl drop-shadow">
            NTB Pharma New — chuyên gia nghiên cứu và phân phối dược phẩm chất lượng cao.
            12 năm đồng hành cùng hàng triệu bệnh nhân Việt Nam.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#004900] text-white font-semibold hover:bg-[#007100] transition-colors shadow-lg"
            >
              Khám phá sản phẩm
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/gioi-thieu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/15 transition-colors backdrop-blur-sm"
            >
              Về chúng tôi
            </Link>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Award, value: "12+", label: "Năm kinh nghiệm" },
              { icon: Users, value: "300+", label: "Bệnh viện đối tác" },
              { icon: Shield, value: "10.000+", label: "Nhà thuốc" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={16} className="text-[#00cc00]" />
                </div>
                <div className="text-2xl lg:text-3xl font-extrabold drop-shadow">{value}</div>
                <div className="text-xs text-white/70 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}
