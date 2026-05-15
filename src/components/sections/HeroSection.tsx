import Link from "next/link";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center ntb-wave-bg overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[120%] opacity-20 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#007100] via-[#004900] to-transparent" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-80 h-80 lg:w-[500px] lg:h-[500px] opacity-30 pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="240" fill="#004900" fillOpacity="0.5" />
          <circle cx="250" cy="250" r="185" fill="#007100" fillOpacity="0.4" />
          <circle cx="250" cy="250" r="130" fill="#009600" fillOpacity="0.3" />
          <circle cx="250" cy="250" r="80" fill="#00b300" fillOpacity="0.25" />
          <circle cx="190" cy="195" r="55" fill="url(#hero-orb)" fillOpacity="0.9" />
          <circle cx="175" cy="180" r="18" fill="rgba(255,255,255,0.4)" />
          <defs>
            <radialGradient id="hero-orb" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#aad4f5" />
              <stop offset="40%" stopColor="#5aabec" />
              <stop offset="100%" stopColor="#01377d" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-8">
            <Shield size={14} className="text-[#00b300]" />
            Tiêu chuẩn GMP · EU-GMP · ISO 9001
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Giải pháp<br />
            <span className="text-[#00b300]">sức khỏe</span><br />
            từ gốc
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl">
            NTB Pharma New — chuyên gia nghiên cứu và phân phối dược phẩm chất lượng cao.
            12 năm đồng hành cùng hàng triệu bệnh nhân Việt Nam.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#004900] text-white font-semibold hover:bg-[#007100] transition-colors"
            >
              Khám phá sản phẩm
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/gioi-thieu"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
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
                  <Icon size={16} className="text-[#00b300]" />
                </div>
                <div className="text-2xl lg:text-3xl font-extrabold">{value}</div>
                <div className="text-xs text-white/60 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
