import type { Metadata } from "next";
import { Be_Vietnam_Pro, Archivo } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NTB Pharma New | Giải pháp sức khỏe từ gốc",
  description:
    "Công ty TNHH Thương mại NTB Pharma New — Chuyên gia nghiên cứu phát triển sản phẩm tiên phong từ gốc. Phân phối dược phẩm chất lượng cao tại Việt Nam.",
  keywords: ["NTB Pharma New", "dược phẩm", "phân phối thuốc", "sức khỏe", "Hà Nội"],
  openGraph: {
    title: "NTB Pharma New | Giải pháp sức khỏe từ gốc",
    description: "Chuyên gia nghiên cứu phát triển sản phẩm tiên phong từ gốc.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${archivo.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
