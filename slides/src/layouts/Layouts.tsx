import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BrandHeader, BrandFooter } from '@/components/BrandChrome';
import { BrandMarkOnDark } from '@/components/BrandMark';

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

/* ---------- COVER ---------- */
export function CoverSlide({
  eyebrow,
  title,
  subtitle,
  meta,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950 text-white">
      {/* Hero gradient with red ribbon */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(212,27,63,0.35) 0%, transparent 55%), linear-gradient(135deg, #0a0a0e 0%, #1a0510 50%, #2a0512 100%)',
        }}
      />
      {/* Decorative red ribbons */}
      <div
        className="absolute -top-20 -left-20 w-[60%] h-[40%] bg-brand-600/40 blur-3xl rounded-full"
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 w-[35%] h-full"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(212,27,63,0.85) 60%, #8B0F2A 100%)',
          clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 30% 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[50%] h-[8px]"
        style={{ background: 'linear-gradient(to right, #D41B3F, transparent)' }}
      />

      {/* Logo top-left */}
      <div className="absolute top-12 left-16 flex items-center gap-5 z-10">
        <BrandMarkOnDark size="lg" />
        <div className="border-l border-white/30 pl-5 leading-tight">
          <div className="text-[14px] font-bold tracking-[0.15em] text-white/90 uppercase">
            Công ty Cổ phần Công nghệ Thông tin iPMAC
          </div>
          <div className="text-[12px] tracking-wide text-white/40 mt-1">NET YOUR WORK</div>
        </div>
      </div>

      {/* IIBA badge top-right */}
      <div className="absolute top-12 right-16 flex items-center gap-3 z-10">
        <div className="text-right leading-tight">
          <div className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/60">
            Endorsed by
          </div>
          <div className="text-3xl font-black text-white">
            IIBA<span className="text-brand-500">®</span>
          </div>
        </div>
        <div className="border-l-2 border-brand-500 pl-3">
          <div className="text-[12px] font-bold text-white/90 leading-tight">ENDORSED</div>
          <div className="text-[12px] font-bold text-white/90 leading-tight">EDUCATION</div>
          <div className="text-[12px] font-bold text-white/90 leading-tight">PROVIDER</div>
        </div>
      </div>

      {/* Body */}
      <motion.div
        className="relative h-full flex flex-col justify-center px-24 z-10 max-w-[1500px]"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="w-14 h-1.5 bg-brand-500" />
          <span className="text-brand-400 text-base font-semibold uppercase tracking-[0.25em]">
            {eyebrow}
          </span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-display text-[104px] font-extrabold leading-[1.05] tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="mt-10 text-3xl text-white/75 max-w-[1100px] leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {meta && (
          <motion.div variants={fadeUp} className="mt-16 flex gap-14">
            {meta.map((m) => (
              <div key={m.label}>
                <div className="text-sm uppercase tracking-widest text-white/55 mb-2 font-semibold">
                  {m.label}
                </div>
                <div className="text-3xl font-bold text-white">{m.value}</div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Bottom tagline */}
      <div className="absolute bottom-12 left-24 z-10 flex items-center gap-3">
        <div className="text-white/50 text-base font-semibold tracking-widest uppercase">
          Ready for BA
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
        <div className="text-white/50 text-base">www.ipmac.vn</div>
      </div>
    </div>
  );
}

/* ---------- SECTION DIVIDER ---------- */
export function SectionSlide({
  number,
  title,
  caption,
}: {
  number: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950 text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #1a0510 0%, #2a0512 40%, #460515 100%)',
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-brand-600/30 blur-3xl rounded-full"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{ background: 'linear-gradient(to right, #8B0F2A, #D41B3F, #8B0F2A)' }}
      />

      <motion.div
        className="relative h-full flex flex-col justify-center px-32 z-10"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeUp}
          className="text-brand-500 text-[240px] font-display font-extrabold leading-none opacity-30 absolute -left-4 top-1/2 -translate-y-1/2"
        >
          {number}
        </motion.div>
        <motion.div variants={fadeUp} className="relative z-10 ml-40">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-14 h-1.5 bg-brand-500" />
            <span className="text-brand-400 text-base font-semibold uppercase tracking-[0.25em]">
              Phần {number}
            </span>
          </div>
          <h2 className="font-display text-[88px] font-extrabold leading-[1.08] tracking-tight max-w-[1300px]">
            {title}
          </h2>
          {caption && (
            <p className="mt-7 text-2xl text-white/70 max-w-[1000px] leading-relaxed">{caption}</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------- CONTENT (with brand chrome) ---------- */
export function ContentSlide({
  eyebrow,
  title,
  children,
  pageNumber,
  totalPages,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  pageNumber?: number;
  totalPages?: number;
}) {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <BrandHeader />
      <div className="flex-1 px-16 py-10 overflow-hidden">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[3px] bg-brand-600" />
            <span className="text-brand-700 text-[15px] font-bold uppercase tracking-[0.2em]">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="font-display text-[52px] font-bold text-neutral-900 leading-[1.1] tracking-tight mb-8">
          {title}
        </h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="text-[22px] text-neutral-700 leading-relaxed"
        >
          {children}
        </motion.div>
      </div>
      <BrandFooter pageNumber={pageNumber} totalPages={totalPages} />
    </div>
  );
}

/* ---------- BIG STATEMENT (quote-style) ---------- */
export function StatementSlide({
  eyebrow,
  statement,
  attribution,
}: {
  eyebrow?: string;
  statement: string;
  attribution?: string;
}) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white flex items-center justify-center px-32">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />

      <motion.div
        className="text-center max-w-[1500px]"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {eyebrow && (
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-brand-600 text-base font-bold uppercase tracking-[0.3em]">
              {eyebrow}
            </span>
          </motion.div>
        )}
        <motion.div
          variants={fadeUp}
          className="text-[80px] text-brand-600 font-display font-bold leading-none mb-6"
        >
          "
        </motion.div>
        <motion.p
          variants={fadeUp}
          className="font-display text-[64px] font-bold text-neutral-900 leading-[1.15] tracking-tight"
        >
          {statement}
        </motion.p>
        {attribution && (
          <motion.div variants={fadeUp} className="mt-12 text-neutral-500 text-xl">
            — {attribution}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export { fadeUp, stagger };
