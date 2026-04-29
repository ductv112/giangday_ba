import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock, Layers } from 'lucide-react';
import { decks } from '@/decks';
import { BrandMarkOnDark } from '@/components/BrandMark';

const fullCourseOutline = [
  { n: 1, title: 'Giới thiệu chung', desc: 'Nghề BA, vai trò, lộ trình, sản phẩm đầu ra' },
  { n: 2, title: 'Kỹ năng & kiến thức cần thiết', desc: 'Ma trận năng lực BA' },
  { n: 3, title: 'Quy trình phân tích thiết kế', desc: 'Vòng đời requirement' },
  { n: 4, title: 'Khơi gợi yêu cầu (Elicitation)', desc: 'Kỹ thuật + AI applied' },
  { n: 5, title: 'Phân tích yêu cầu', desc: 'Kỹ thuật phân tích' },
  { n: 6, title: 'Thiết kế chức năng & giao diện', desc: 'UX + wireframe + AI' },
  { n: 7, title: 'Viết tài liệu yêu cầu', desc: 'Mô hình hoá + AI write' },
  { n: 8, title: 'Trao đổi thông tin & kiểm tra', desc: 'Communication + validation' },
  { n: 9, title: 'Quản lý yêu cầu', desc: 'Change management' },
  { n: 10, title: 'Sẵn sàng vào dự án', desc: 'Onboarding thực chiến' },
  { n: 11, title: 'Bài tập cuối khoá', desc: 'Phỏng vấn thử + bài tập' },
  { n: 12, title: 'Tổng kết', desc: 'Cơ hội nghề & thi chứng chỉ' },
];

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-brand-950 text-white">
      <div className="max-w-[1400px] mx-auto px-12 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-5 mb-16"
        >
          <BrandMarkOnDark size="lg" />
          <div className="border-l border-white/20 pl-5">
            <div className="text-sm font-bold tracking-wide text-white/90">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN iPMAC
            </div>
            <div className="text-xs text-white/50 mt-0.5">Endorsed Education Provider — IIBA®</div>
          </div>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-brand-500" />
            <span className="text-brand-400 text-sm font-bold uppercase tracking-[0.25em]">
              Khoá học · Phân tích Nghiệp vụ Cơ bản
            </span>
          </div>
          <h1 className="font-display text-7xl font-extrabold leading-[1.05] tracking-tight max-w-[1100px]">
            Ready for BA <span className="text-brand-500">·</span> Bộ slide trình chiếu
          </h1>
          <p className="mt-6 text-xl text-white/60 max-w-[800px] leading-relaxed">
            12 buổi học, mỗi buổi 2.5h — slide trình chiếu web-based theo phong cách BA thực chiến + AI applied.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Clock size={14} className="text-brand-400" />
              <span className="text-white/80">30 giờ · 12 buổi</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Layers size={14} className="text-brand-400" />
              <span className="text-white/80">BABOK 3.0</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Sparkles size={14} className="text-brand-400" />
              <span className="text-white/80">AI applied — Claude Code first</span>
            </div>
          </div>
        </motion.div>

        {/* Deck grid */}
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-display text-3xl font-bold">12 Buổi học</h2>
          <span className="text-sm text-white/50">
            Đã sẵn sàng: <span className="text-brand-400 font-semibold">{decks.length}</span> /{' '}
            12
          </span>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {fullCourseOutline.map((b, i) => {
            const slug = `buoi-${String(b.n).padStart(2, '0')}`;
            const ready = decks.some((d) => d.number === b.n);
            return (
              <motion.div
                key={b.n}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                {ready ? (
                  <Link
                    to={`/${slug}`}
                    className="group block rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 hover:border-brand-500/50 hover:from-brand-950/50 hover:to-white/5 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-400">
                        Buổi {b.n.toString().padStart(2, '0')}
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-white/30 group-hover:text-brand-400 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    <div className="font-display text-xl font-bold text-white mb-2 leading-tight">
                      {b.title}
                    </div>
                    <div className="text-sm text-white/60 leading-relaxed">{b.desc}</div>
                  </Link>
                ) : (
                  <div className="block rounded-2xl border border-white/5 bg-white/[0.02] p-6 opacity-50 cursor-not-allowed">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-white/30">
                        Buổi {b.n.toString().padStart(2, '0')}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/30 px-2 py-0.5 rounded-full bg-white/5">
                        Sắp có
                      </span>
                    </div>
                    <div className="font-display text-xl font-bold text-white/60 mb-2 leading-tight">
                      {b.title}
                    </div>
                    <div className="text-sm text-white/40 leading-relaxed">{b.desc}</div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-10 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
          <div>iPMAC · Khoá Ready for BA · 2025</div>
          <div className="flex items-center gap-4">
            <span>← / →: chuyển slide</span>
            <span>F: toàn màn hình</span>
            <span>O: overview</span>
          </div>
        </div>
      </div>
    </div>
  );
}
