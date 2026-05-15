import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 ntb-wave-bg relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[200%] opacity-10 pointer-events-none">
        <svg viewBox="0 0 400 800" fill="white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="400" r="350" />
          <circle cx="200" cy="400" r="260" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Trở thành đối tác<br />
          <span className="text-[#00b300]">phân phối của NTB</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Hợp tác cùng NTB Pharma New để đưa giải pháp sức khỏe chất lượng cao
          đến tay người bệnh Việt Nam.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#004900] text-white font-semibold text-lg hover:bg-[#007100] transition-colors"
          >
            Liên hệ hợp tác
            <ArrowRight size={18} />
          </Link>
          <a
            href="tel:0927426789"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            <Phone size={18} />
            0927 426 789
          </a>
        </div>
      </div>
    </section>
  );
}
