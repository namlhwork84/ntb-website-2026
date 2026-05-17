"use client";

const CX = 290;
const CY = 290;
const INNER_R = 132;
const OUTER_R = 222;
const SIZE = 580;

function pos(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: CX + r * Math.sin(rad),
    top: CY - r * Math.cos(rad),
  };
}

const categories = [
  { src: "http://ntbpharmanew.vn/img/nhi-khoa.png",     label: "Nhi Khoa",     angle: 45  },
  { src: "http://ntbpharmanew.vn/img/san-phu-khoa.png", label: "Sản Phụ Khoa", angle: 135 },
  { src: "http://ntbpharmanew.vn/img/than-kinh.png",    label: "Thần Kinh",    angle: 225 },
  { src: "http://ntbpharmanew.vn/img/khac.png",         label: "Khác",         angle: 315 },
];

const products = [
  { src: "http://ntbpharmanew.vn/img/tabimul.png",    label: "Tabimul",     angle: 14  },
  { src: "http://ntbpharmanew.vn/img/gadacal.png",    label: "Gadacal",     angle: 47  },
  { src: "http://ntbpharmanew.vn/img/adomir.png",     label: "Adomir",      angle: 79  },
  { src: "http://ntbpharmanew.vn/img/bocalso.png",    label: "BocalsoNTB",  angle: 110 },
  { src: "http://ntbpharmanew.vn/img/pregcandy.png",  label: "Pregcandy",   angle: 136 },
  { src: "http://ntbpharmanew.vn/img/calcidvn.png",   label: "CalcidVN",    angle: 160 },
  { src: "http://ntbpharmanew.vn/img/solufemo.png",   label: "Solufemo",    angle: 182 },
  { src: "http://ntbpharmanew.vn/img/tharodas.png",   label: "Tharodas",    angle: 202 },
  { src: "http://ntbpharmanew.vn/img/patandol.png",   label: "PutandoUSA",  angle: 228 },
  { src: "http://ntbpharmanew.vn/img/newusarion.png", label: "Newusarion",  angle: 256 },
  { src: "http://ntbpharmanew.vn/img/alpha.png",      label: "Alpha Chymo", angle: 284 },
  { src: "http://ntbpharmanew.vn/img/avomir.png",     label: "Avomir",      angle: 308 },
  { src: "http://ntbpharmanew.vn/img/aukamox.png",    label: "Aukamox 625", angle: 333 },
  { src: "http://ntbpharmanew.vn/img/bang.png",       label: "Bang!",       angle: 357 },
];

export default function ProductOrbitSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#004900] uppercase mb-3 block">
            Hệ sinh thái sản phẩm
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d] mb-4">
            Danh mục sản phẩm NTB
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            NTB Pharma New phân phối các sản phẩm có tiềm năng tăng trưởng cao, đáp ứng nhu cầu
            sức khỏe đa dạng — chia làm 4 nhóm chính.
          </p>
        </div>

        {/* Orbit diagram — centered, scaled on mobile */}
        <div className="flex justify-center">
          <div
            className="relative shrink-0"
            style={{ width: SIZE, height: SIZE, maxWidth: "100%" }}
          >
            {/* SVG decorative rings */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width={SIZE}
              height={SIZE}
            >
              {/* Outer decorative ring */}
              <circle
                cx={CX} cy={CY} r={OUTER_R + 22}
                fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4"
              />
              {/* Inner ring */}
              <circle
                cx={CX} cy={CY} r={INNER_R + 16}
                fill="none" stroke="#e2e8f0" strokeWidth="1"
              />
              {/* Lines from center to categories */}
              {categories.map((cat) => {
                const p = pos(cat.angle, INNER_R);
                return (
                  <line
                    key={cat.label}
                    x1={CX} y1={CY}
                    x2={p.left} y2={p.top}
                    stroke="#cbd5e1" strokeWidth="1"
                  />
                );
              })}
              {/* Lines from categories to their products */}
              {products.map((prod) => {
                const from = pos(prod.angle, INNER_R + 16);
                const to = pos(prod.angle, OUTER_R - 28);
                return (
                  <line
                    key={prod.label}
                    x1={from.left} y1={from.top}
                    x2={to.left} y2={to.top}
                    stroke="#e2e8f0" strokeWidth="1"
                  />
                );
              })}
            </svg>

            {/* Center: NTB Logo */}
            <div
              className="absolute flex items-center justify-center rounded-full bg-white border-2 border-[#01377d]/20 shadow-xl z-20"
              style={{ width: 80, height: 80, left: CX - 40, top: CY - 40 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="http://ntbpharmanew.vn/img/ntb-logo.png"
                alt="NTB Pharma New"
                width={56} height={56}
                className="object-contain"
              />
            </div>

            {/* Category circles (inner ring) */}
            {categories.map((cat) => {
              const p = pos(cat.angle, INNER_R);
              return (
                <div
                  key={cat.label}
                  className="absolute flex flex-col items-center justify-center rounded-full bg-white border border-red-200 shadow-md z-10"
                  style={{
                    width: 76, height: 76,
                    left: p.left - 38, top: p.top - 38,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.src}
                    alt={cat.label}
                    width={36} height={36}
                    className="object-contain mb-0.5"
                  />
                  <span className="text-[8px] font-bold text-[#01377d] text-center leading-tight px-1">
                    {cat.label.toUpperCase()}
                  </span>
                </div>
              );
            })}

            {/* Product circles (outer ring) */}
            {products.map((prod) => {
              const p = pos(prod.angle, OUTER_R);
              return (
                <div
                  key={prod.label}
                  title={prod.label}
                  className="absolute flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-110 transition-all z-10 cursor-pointer"
                  style={{
                    width: 60, height: 60,
                    left: p.left - 30, top: p.top - 30,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prod.src}
                    alt={prod.label}
                    width={44} height={44}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {categories.map((cat) => (
            <div key={cat.label} className="flex items-center gap-2 text-sm text-gray-600">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cat.src} alt={cat.label} width={20} height={20} className="object-contain" />
              <span className="font-medium">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
