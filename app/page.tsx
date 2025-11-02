"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Film, Rocket, Timer, Sparkles, Star, Mail, Phone, Check } from "lucide-react";

const features = [
  { icon: Timer, title: "3 ngày giao hàng", desc: "Pipeline rút gọn – một vòng feedback, gỡ watermark sau thanh toán." },
  { icon: Rocket, title: "Tốc độ thanh khoản", desc: "Hợp đồng & đặt cọc online, link thanh toán nhanh, gửi file qua CDN." },
  { icon: Sparkles, title: "Preset & Template", desc: "Màu, motion, caption tối ưu Ads. Giảm 40% thời gian hậu kỳ." },
];

const packages = [
  {
    name: "Quick Media – 3 Day Sprint",
    price: "2.990.000₫",
    highlight: true,
    points: [
      "01 video 15–45s tối ưu Ads",
      "Hook/CTA sẵn – 1 vòng feedback",
      "Xuất 9:16 + 1:1",
      "Kho nhạc & caption template",
    ],
    cta: "Đặt lịch nhanh",
  },
  {
    name: "Product Photo – KV",
    price: "1.690.000₫",
    points: [
      "05 ảnh key visual studio",
      "Retouch màu & bụi bẩn",
      "1 concept (Minimal / Luxury)",
    ],
    cta: "Nhận báo giá",
  },
  {
    name: "Performance Ad Video",
    price: "3.490.000₫",
    points: [
      "01 video bán hàng 20–30s",
      "Motion headline & price tag",
      "A/B 2 biến thể opening",
    ],
    cta: "Đặt làm ngay",
  },
  {
    name: "Combo Video + Photo",
    price: "4.990.000₫",
    points: [
      "01 video + 05 ảnh KV",
      "Ưu tiên lịch quay trong 24h",
      "Tặng 03 thumbnail tĩnh",
    ],
    cta: "Chốt lịch",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark">

      {/* Hero */}
      <section className="section">
        <div className="container text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Sản xuất media <span className="text-primary">Nhanh – Gọn – Bán được hàng</span>
          </motion.h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
            Gói <strong>Quick Media – 3 Day Sprint</strong>: nhận brief, quay/chụp, hậu kỳ và giao file trong 72 giờ.
            Tối ưu cho TikTok Ads, Meta Ads, Shop Ads.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#services" className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg flex items-center gap-2 hover:opacity-80 transition">
              <Film size={18} /> Xem gói dịch vụ
            </a>
            <a href="#contact" className="px-6 py-3 border rounded-lg flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              <Camera size={18} /> Nhận báo giá
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-neutral-50 dark:bg-neutral-900/30">
        <div className="container grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="w-10 h-10 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center mb-3">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services / Packages */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Gói dịch vụ</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((p, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border dark:border-neutral-800 bg-white dark:bg-neutral-900 ${p.highlight ? "border-black dark:border-white" : ""}`}>
                {p.highlight && (
                  <span className="px-2 py-1 text-xs rounded bg-black text-white dark:bg-white dark:text-black mb-3 inline-block">Best Seller</span>
                )}
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-2xl font-bold mt-2">{p.price}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex gap-2">
                      <Check size={16} /> {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-4 block text-center px-4 py-2 border rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
            * Giá tham khảo cho 1 sản phẩm – liên hệ để nhận đề xuất tối ưu ngân sách.
          </p>
        </div>
      </section>
      {/* Portfolio */}
      <section id="portfolio" className="section bg-neutral-50 dark:bg-neutral-900/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Portfolio chọn lọc</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-8">Một số dự án tiêu biểu. Có thể cung cấp thêm case-study theo yêu cầu.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border bg-neutral-100 dark:bg-neutral-800 h-56">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500 text-sm">
                  + Ảnh / Video Demo {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quy trình 3 ngày</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-8">Chuẩn hoá để tăng tốc – giảm vòng lặp – đảm bảo chất lượng.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800">
              <h3 className="font-semibold text-lg mb-1">Ngày 1 – Brief & Concept</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Chốt concept, shotlist, đặt cọc 50–70%.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800">
              <h3 className="font-semibold text-lg mb-1">Ngày 2 – Quay / Chụp</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Chọn raw, dựng nháp layout, gửi preview nhanh.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800">
              <h3 className="font-semibold text-lg mb-1">Ngày 3 – Hậu kỳ & Giao file</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Hoàn thiện – gỡ watermark sau thanh toán phần còn lại.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-neutral-50 dark:bg-neutral-900/30">
        <div className="container grid md:grid-cols-2 gap-10 items-start">

          {/* Contact info box */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Bắt đầu ngay hôm nay</h2>
            <p className="text-neutral-500 dark:text-neutral-400">
              Gửi 3 đề xuất concept phù hợp trong 12 giờ làm việc. Ưu tiên lịch quay trong 24 giờ cho gói Combo.
            </p>

            <div className="p-5 rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 space-y-3">
              <a href="mailto:kemedia2025@gmail.com" className="flex items-center gap-2 hover:opacity-80">
                <Mail size={18} /> kemedia2025@gmail.com
              </a>
              <a href="tel:0912031975" className="flex items-center gap-2 hover:opacity-80">
                <Phone size={18} /> 0912031975
              </a>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                <Star size={14} /> Ưu tiên lịch quay trong 24h với gói Combo
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/mjkvwzay"
            method="POST"
            className="p-6 rounded-2xl border bg-white dark:bg-neutral-900 dark:border-neutral-800 space-y-3"
          >
            <input className="w-full p-3 rounded-lg border dark:border-neutral-700 bg-transparent" name="name" placeholder="Tên doanh nghiệp / cá nhân" required />
            <input type="email" className="w-full p-3 rounded-lg border dark:border-neutral-700 bg-transparent" name="email" placeholder="Email" required />
            <input type="tel" className="w-full p-3 rounded-lg border dark:border-neutral-700 bg-transparent" name="phone" placeholder="Số điện thoại" required />

            <select className="w-full p-3 rounded-lg border dark:border-neutral-700 bg-transparent" name="service">
              <option>Video</option>
              <option>Ảnh</option>
              <option>Combo</option>
            </select>

            <textarea className="w-full p-3 rounded-lg border dark:border-neutral-700 bg-transparent" name="message" rows={4} placeholder="Mô tả nhanh sản phẩm / mục tiêu" />

            <button type="submit" className="w-full py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition">
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t dark:border-neutral-800">
        <div className="container text-center text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} KẾ Media. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

