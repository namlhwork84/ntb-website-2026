import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import NTBLogo from "@/components/NTBLogo";

const productLinks = [
  { label: "Thần kinh", href: "/san-pham#than-kinh" },
  { label: "Nhi khoa", href: "/san-pham#nhi-khoa" },
  { label: "Sản phụ khoa", href: "/san-pham#san-phu-khoa" },
];

const companyLinks = [
  { label: "Về chúng tôi", href: "/gioi-thieu" },
  { label: "Tầm nhìn & Sứ mệnh", href: "/gioi-thieu#su-menh" },
  { label: "Giá trị cốt lõi", href: "/gioi-thieu#gia-tri" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Tin tức", href: "/tin-tuc" },
];

export default function Footer() {
  return (
    <footer className="bg-[#01224c] text-white">
      {/* Wave pattern top */}
      <div className="h-1 bg-gradient-to-r from-[#004900] via-[#007100] to-[#004900]" />

      <div className="container mx-auto px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <NTBLogo className="h-12 w-auto mb-4" dark={false} />
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Chuyên gia nghiên cứu phát triển sản phẩm tiên phong từ gốc. 12 năm đồng hành cùng sức khỏe cộng đồng.
            </p>
            <p className="text-xs font-semibold text-[#00b300] italic">
              "Giải pháp sức khỏe từ gốc"
            </p>

            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#004900] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#004900] flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="m22.54 6.42-2.1-2.1C19.16 3 12 3 12 3s-7.16 0-8.44 1.32L1.46 6.42C.78 7.1.5 8.05.5 9v6c0 .95.28 1.9.96 2.58l2.1 2.1C4.84 21 12 21 12 21s7.16 0 8.44-1.32l2.1-2.1c.68-.68.96-1.63.96-2.58V9c0-.95-.28-1.9-.96-2.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
          </div>

          {/* Sản phẩm */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#00b300]">
              Sản phẩm
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-sm uppercase tracking-wider mt-7 mb-4 text-[#00b300]">
              Công ty
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-[#00b300]">
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[#00b300] shrink-0" />
                <span className="text-sm text-white/70 leading-relaxed">
                  Số 26, kề 6A, Thôn Việt Kiều Châu Âu,<br />
                  KĐT Mộ Lao, Hà Đông, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#00b300] shrink-0" />
                <a href="tel:0927426789" className="text-sm text-white/70 hover:text-white transition-colors">
                  0927 426 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#00b300] shrink-0" />
                <a href="mailto:info@ntbpharmanew.vn" className="text-sm text-white/70 hover:text-white transition-colors">
                  info@ntbpharmanew.vn
                </a>
              </li>
            </ul>

            {/* Certificates */}
            <div className="mt-7 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/50 uppercase tracking-wider mb-2">Chứng nhận</p>
              <div className="flex flex-wrap gap-2">
                {["GMP", "EU-GMP", "ISO 9001", "GDP"].map((cert) => (
                  <span
                    key={cert}
                    className="px-2.5 py-1 rounded-full bg-[#004900]/60 text-[#00b300] text-xs font-semibold border border-[#007100]/40"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Công ty TNHH Thương mại NTB Pharma New. Bảo lưu mọi quyền.
          </p>
          <p className="text-xs text-white/40">
            MST: 0105958061
          </p>
        </div>
      </div>
    </footer>
  );
}
