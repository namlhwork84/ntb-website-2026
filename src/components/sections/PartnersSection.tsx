import Image from "next/image";

const partners = [
  { src: "/images/partner-imexpharm.png",  name: "Imexpharm" },
  { src: "/images/partner-maxbiocare.png", name: "Max Biocare" },
  { src: "/images/partner-mebiphar.png",   name: "Mebiphar" },
  { src: "/images/partner-hataphar.png",   name: "DHT Hataphar" },
  { src: "/images/partner-uspharma.png",   name: "US Pharma USA" },
  { src: "/images/partner-pppharco.png",   name: "PP.Pharco" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-[#f0f7ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-[#004900] uppercase mb-3 block">
            Đối tác
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#01377d] mb-3">
            Đối tác sản xuất & phân phối
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            NTB Pharma New hợp tác với các nhà sản xuất dược phẩm uy tín trong nước và quốc tế,
            đảm bảo chất lượng sản phẩm cao nhất đến tay người tiêu dùng.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-xl border border-gray-100 hover:border-[#01377d]/20 hover:shadow-md transition-all p-4 flex items-center justify-center"
              style={{ minHeight: 80 }}
            >
              <Image
                src={p.src}
                alt={p.name}
                width={130}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
