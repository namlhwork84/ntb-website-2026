"use client";

import Image from "next/image";
import { Building2, Stethoscope, Users } from "lucide-react";

const stats = [
  { icon: Building2, value: "300+", label: "Bệnh viện & phòng khám" },
  { icon: Stethoscope, value: "1.000+", label: "Bác sĩ tin dùng" },
  { icon: Users, value: "60+", label: "Tỉnh thành phủ sóng" },
];

export default function HCPSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#004900] uppercase mb-3 block">
            Đối tác y tế
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#01377d] mb-4">
            Đồng hành cùng cộng đồng y tế Việt Nam
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            NTB Pharma New được tin dùng tại hàng trăm bệnh viện, phòng khám và nhà thuốc trên toàn quốc.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-14 max-w-2xl mx-auto">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-3">
                <Icon size={22} className="text-[#01377d]" />
              </div>
              <div className="text-2xl font-extrabold text-[#01377d]">{value}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* 2-column photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — Hospital training */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group">
            <Image
              src="/images/hero-hospital.jpg"
              alt="NTB trình bày sản phẩm tại bệnh viện"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#01377d]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-semibold mb-2">
                <Stethoscope size={12} />
                Hội thảo tại bệnh viện
              </div>
              <p className="text-white font-bold text-base">
                Đào tạo & giới thiệu sản phẩm trực tiếp tại bệnh viện
              </p>
            </div>
          </div>

          {/* Right — HCP meeting */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg group">
            <Image
              src="/images/hoi-thao-tap-the.jpg"
              alt="NTB gặp gỡ bác sĩ đối tác"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004900]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-semibold mb-2">
                <Users size={12} />
                Đối tác chiến lược
              </div>
              <p className="text-white font-bold text-base">
                Hợp tác cùng đội ngũ bác sĩ & dược sĩ trên toàn quốc
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
