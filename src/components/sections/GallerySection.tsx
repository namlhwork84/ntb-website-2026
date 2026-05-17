"use client";

import Image from "next/image";

const photos = [
  {
    src: "/images/team-kickoff-2026.jpg",
    alt: "NTB Pharma New Kick-off 2026 toàn công ty",
    caption: "Kick-off 2026 — NTB Stronger Together",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/ntb-stronger-2.jpg",
    alt: "Sự kiện NTB Stronger",
    caption: "NTB Stronger",
    span: "",
  },
  {
    src: "/images/ntb-stronger-3.jpg",
    alt: "Đội ngũ NTB Stronger",
    caption: "Đội ngũ NTB",
    span: "",
  },
  {
    src: "/images/event-product-launch-2.jpg",
    alt: "Ra mắt sản phẩm Haas Vital",
    caption: "Ra mắt Haas Vital",
    span: "",
  },
  {
    src: "/images/teambuilding-halong-1.jpg",
    alt: "Teambuilding Hạ Long",
    caption: "Teambuilding Hạ Long",
    span: "",
  },
  {
    src: "/images/ntb-stronger-4.jpg",
    alt: "NTB Stronger event",
    caption: "NTB Stronger",
    span: "",
  },
  {
    src: "/images/teambuilding-halong-3.jpg",
    alt: "Teambuilding đội ngũ",
    caption: "Gắn kết đội ngũ",
    span: "",
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-[#01377d]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#00cc00] uppercase mb-3 block">
            Văn hóa doanh nghiệp
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Con người là sức mạnh cốt lõi
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm">
            Hơn 100 thành viên — cùng nhau học hỏi, cùng nhau phát triển, cùng nhau tạo nên NTB Pharma New.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-semibold">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-white/10 pt-12">
          {[
            { value: "100+", label: "Nhân sự" },
            { value: "12+", label: "Năm kinh nghiệm" },
            { value: "3", label: "Công ty con" },
            { value: "63", label: "Tỉnh thành" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
              <div className="text-sm text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
