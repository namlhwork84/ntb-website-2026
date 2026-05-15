"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NTBLogo from "@/components/NTBLogo";

const navItems = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
    children: [
      { label: "Về chúng tôi", href: "/gioi-thieu" },
      { label: "Tầm nhìn & Sứ mệnh", href: "/gioi-thieu#su-menh" },
      { label: "Giá trị cốt lõi", href: "/gioi-thieu#gia-tri" },
    ],
  },
  {
    label: "Sản phẩm",
    href: "/san-pham",
    children: [
      { label: "Thần kinh", href: "/san-pham#than-kinh" },
      { label: "Nhi khoa", href: "/san-pham#nhi-khoa" },
      { label: "Sản phụ khoa", href: "/san-pham#san-phu-khoa" },
    ],
  },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div className={cn("border-b transition-all duration-300", scrolled ? "border-gray-100" : "border-white/10")}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <span className={cn("text-xs", scrolled ? "text-gray-500" : "text-white/70")}>
            Chuyên gia nghiên cứu phát triển sản phẩm tiên phong từ gốc
          </span>
          <a
            href="tel:0927426789"
            className={cn(
              "flex items-center gap-1.5 text-xs font-medium",
              scrolled ? "text-[#01377d]" : "text-white"
            )}
          >
            <Phone size={12} />
            0927 426 789
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <NTBLogo
              className="h-10 w-auto"
              dark={scrolled}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? scrolled
                        ? "text-[#01377d] bg-blue-50"
                        : "text-white bg-white/10"
                      : scrolled
                        ? "text-gray-700 hover:text-[#01377d] hover:bg-blue-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-48">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-1 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#01377d] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <Link
            href="/lien-he"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#004900] text-white hover:bg-[#007100] transition-colors"
          >
            Liên hệ ngay
          </Link>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(
                "lg:hidden p-2 rounded-md",
                scrolled ? "text-gray-700" : "text-white"
              )}
            >
              <Menu size={22} />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex items-center justify-between p-4 border-b bg-[#01377d]">
                <NTBLogo className="h-9 w-auto" dark={false} />
                <button onClick={() => setMobileOpen(false)}>
                  <X size={20} className="text-white" />
                </button>
              </div>
              <nav className="p-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-blue-50 text-[#01377d]"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-0.5 flex flex-col gap-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-xs text-gray-500 hover:text-[#01377d] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <Link
                    href="/lien-he"
                    onClick={() => setMobileOpen(false)}
                    className="flex justify-center items-center gap-2 w-full px-4 py-3 rounded-full text-sm font-semibold bg-[#01377d] text-white"
                  >
                    Liên hệ ngay
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
