import { motion } from 'framer-motion';
import {
  CoverSlide,
  SectionSlide,
  ContentSlide,
  StatementSlide,
  fadeUp,
  stagger,
} from '@/layouts/Layouts';
import { Card, StatCard } from '@/components/Bits';
import {
  Search,
  ClipboardList,
  Mic,
  FileSearch,
  CheckCircle2,
  Users,
  MessageCircle,
  Eye,
  ClipboardCheck,
  Layout,
  Lightbulb,
  Target,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Bot,
  Zap,
  Calendar,
  Ear,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 4 — KHƠI GỢI YÊU CẦU (ELICITATION)
 * ============================================================ */

/* ----- Slide 1: Cover ----- */
export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 04 · Khoá Ready for BA"
      title={'Khơi gợi yêu cầu\nElicitation'}
      subtitle="5 bước, 8 kỹ thuật, và nghệ thuật đặt câu hỏi để moi ra cái khách hàng thực sự cần — kể cả khi chính họ chưa nói rõ được."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'Kỹ thuật + thực hành' },
        { label: 'Mức độ', value: 'Practice' },
      ]}
    />
  );
}

/* ----- Slide 2: Hook ----- */
export function Slide02Hook() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white flex items-center px-32">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />

      <motion.div
        className="grid grid-cols-[1fr_1fr] gap-20 items-center w-full"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp}>
          <div className="text-brand-600 text-xl font-bold uppercase tracking-[0.3em] mb-7">
            Sự thật khó tin
          </div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            Khách hàng <span className="text-brand-600">không biết</span> chính xác họ muốn gì — cho đến khi BA giúp họ khám phá ra.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            Việc của BA không phải <span className="font-semibold text-neutral-800">"hỏi cho có"</span> — mà là <span className="text-brand-600 font-semibold">đào sâu</span> để vượt qua câu trả lời bề mặt.
          </p>
          <div className="mt-9 text-xl text-neutral-400">
            Standish Group · Chaos Report 2025-2026 (240 dự án IT)
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="70%" label="Lỗi dự án IT từ sai requirement" accent />
          <StatCard value="5×" label="Chi phí fix bug ở giai đoạn dev so với elicit" />
          <StatCard value="35%" label="Thời gian BA junior dành cho khơi gợi" />
          <StatCard value="80/20" label="Lắng nghe nhiều hơn nói (quy tắc vàng)" accent />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ----- Slide 3: Agenda ----- */
export function Slide03Agenda() {
  return (
    <ContentSlide
      eyebrow="Lộ trình buổi học"
      title="Hôm nay đi qua 4 phần"
      pageNumber={3}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-6 mt-2">
        <Card icon={<ClipboardList size={26} strokeWidth={2.4} />} title="1. 5 bước khơi gợi yêu cầu">
          Quy trình BA chạy 1 buổi khơi gợi: từ chuẩn bị đến validate kết quả.
        </Card>
        <Card icon={<Search size={26} strokeWidth={2.4} />} title="2. 8 kỹ thuật + khi nào dùng">
          Phỏng vấn, hội thảo, quan sát, khảo sát, prototype, brainstorm…
        </Card>
        <Card icon={<HelpCircle size={26} strokeWidth={2.4} />} title="3. Nghệ thuật đặt câu hỏi">
          Câu hỏi mở vs đóng · 5 Whys · những câu hỏi tệ cần tránh.
        </Card>
        <Card icon={<Sparkles size={26} strokeWidth={2.4} />} title="4. AI applied + Demo role-play">
          4 prompt mẫu + demo Claude Code đóng vai khách hàng để luyện.
        </Card>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-10 flex items-center gap-3 text-xl text-neutral-500"
      >
        <Sparkles size={22} className="text-brand-600" />
        Bài tập về nhà: phỏng vấn 1 người thân (1 case dùng app/web) → tổng hợp 5 pain points + 3 yêu cầu.
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 4: Section 1 ----- */
export function Slide04Section1() {
  return (
    <SectionSlide
      number="01"
      title="5 bước chạy 1 buổi khơi gợi"
      caption="Chuẩn bị → Tiến hành → Ghi chép → Tổng hợp → Validate. Đi đủ 5 bước, không bao giờ 'mất' yêu cầu."
    />
  );
}

/* ----- Slide 5: 5 bước khơi gợi ----- */
export function Slide05FiveSteps() {
  const steps = [
    {
      step: '01',
      icon: <ClipboardList size={26} strokeWidth={2.4} />,
      title: 'Chuẩn bị',
      desc: 'Đọc tài liệu cũ, lập agenda buổi gặp, viết sẵn 15-20 câu hỏi mở, in bản đồ stakeholder.',
      output: 'Agenda + bộ câu hỏi',
      color: 'from-neutral-100 to-neutral-50 border-neutral-300',
      iconBg: 'bg-neutral-700',
    },
    {
      step: '02',
      icon: <Mic size={26} strokeWidth={2.4} />,
      title: 'Tiến hành',
      desc: 'Chạy buổi gặp (phỏng vấn / hội thảo / quan sát). Lắng nghe 80%, nói 20%.',
      output: 'Buổi gặp 60-90 phút',
      color: 'from-amber-100 to-amber-50 border-amber-300',
      iconBg: 'bg-amber-600',
    },
    {
      step: '03',
      icon: <FileSearch size={26} strokeWidth={2.4} />,
      title: 'Ghi chép',
      desc: 'Note real-time bằng Notion/Word. Xin phép record nếu được. Chụp ảnh whiteboard.',
      output: 'Note thô 5-10 trang',
      color: 'from-sky-100 to-sky-50 border-sky-300',
      iconBg: 'bg-sky-600',
    },
    {
      step: '04',
      icon: <Search size={26} strokeWidth={2.4} />,
      title: 'Tổng hợp',
      desc: 'Phân loại note thành: yêu cầu chức năng, ràng buộc, pain points, câu hỏi còn mở. Đặt mã.',
      output: 'Bảng yêu cầu có ID',
      color: 'from-brand-100 to-brand-50 border-brand-300',
      iconBg: 'bg-brand-600',
    },
    {
      step: '05',
      icon: <CheckCircle2 size={26} strokeWidth={2.4} />,
      title: 'Validate',
      desc: 'Gửi bản tổng hợp lại cho khách → confirm đúng/sai → bổ sung điểm còn thiếu.',
      output: 'Sign-off từ khách',
      color: 'from-emerald-100 to-emerald-50 border-emerald-300',
      iconBg: 'bg-emerald-600',
    },
  ];

  return (
    <ContentSlide
      eyebrow="Quy trình chuẩn 1 buổi khơi gợi"
      title="Đi đủ 5 bước = không 'mất' yêu cầu giữa chừng"
      pageNumber={5}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-5 gap-4 mt-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            variants={fadeUp}
            className={`rounded-2xl border-2 bg-gradient-to-br ${s.color} p-6 relative`}
          >
            <div
              className={`w-12 h-12 rounded-xl ${s.iconBg} text-white flex items-center justify-center mb-4`}
            >
              {s.icon}
            </div>
            <div className="text-xl font-bold text-neutral-500 mb-1">{s.step}</div>
            <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-3">
              {s.title}
            </div>
            <div className="text-xl text-neutral-700 leading-relaxed mb-4">{s.desc}</div>
            <div className="pt-3 border-t border-neutral-300/60">
              <div className="text-xl font-semibold text-neutral-500 mb-1">Output:</div>
              <div className="text-xl text-neutral-800 font-semibold">{s.output}</div>
            </div>
            {i < 4 && (
              <ArrowRight
                size={22}
                className="absolute top-1/2 -right-4 -translate-y-1/2 text-neutral-400 bg-white rounded-full"
                strokeWidth={2.5}
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-7 px-7 py-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-4"
      >
        <AlertTriangle size={22} strokeWidth={2.2} className="text-rose-600 shrink-0 mt-1" />
        <div className="text-xl text-rose-900 leading-relaxed">
          <span className="font-bold">Sai lầm thường gặp:</span> Bỏ qua bước 5 (Validate) — tưởng đã hiểu rồi nhưng khách hàng có thể nói "tôi không nói thế". Validate = bảo hiểm cho cả dự án.
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 6: Section 2 ----- */
export function Slide06Section2() {
  return (
    <SectionSlide
      number="02"
      title="8 kỹ thuật khơi gợi — chọn cái phù hợp"
      caption="Không có kỹ thuật 'tốt nhất' — chỉ có kỹ thuật phù hợp với tình huống cụ thể."
    />
  );
}

/* ----- Slide 7: 8 kỹ thuật overview ----- */
export function Slide07TechniquesOverview() {
  const techs = [
    {
      icon: <MessageCircle size={26} strokeWidth={2.4} />,
      title: 'Phỏng vấn 1-1',
      en: 'Interview',
      when: 'Cần thông tin sâu, riêng tư. Stakeholder bận, không workshop được.',
      tone: 'brand',
      featured: true,
    },
    {
      icon: <Users size={26} strokeWidth={2.4} />,
      title: 'Hội thảo nhóm',
      en: 'Workshop',
      when: 'Nhiều stakeholder, cần đồng thuận, giải quyết mâu thuẫn nhanh.',
      tone: 'amber',
      featured: true,
    },
    {
      icon: <Eye size={26} strokeWidth={2.4} />,
      title: 'Quan sát thực tế',
      en: 'Observation',
      when: 'Cần hiểu quy trình hiện tại — đặc biệt khi người dùng "làm tay" nhiều.',
      tone: 'sky',
      featured: false,
    },
    {
      icon: <FileSearch size={26} strokeWidth={2.4} />,
      title: 'Đọc tài liệu cũ',
      en: 'Document analysis',
      when: 'Có sẵn quy định, SOP, báo cáo — đọc trước để không hỏi câu đã có đáp án.',
      tone: 'emerald',
      featured: false,
    },
    {
      icon: <ClipboardCheck size={26} strokeWidth={2.4} />,
      title: 'Khảo sát',
      en: 'Survey',
      when: 'Cần ý kiến nhiều người (50+), không cần sâu — thu thập số liệu.',
      tone: 'purple',
      featured: false,
    },
    {
      icon: <Layout size={26} strokeWidth={2.4} />,
      title: 'Prototype thử',
      en: 'Prototype',
      when: 'Khách không biết mô tả nhu cầu → BA vẽ thử → khách phản hồi cụ thể hơn.',
      tone: 'rose',
      featured: false,
    },
    {
      icon: <Lightbulb size={26} strokeWidth={2.4} />,
      title: 'Động não',
      en: 'Brainstorm',
      when: 'Cần ý tưởng mới (giải pháp, tính năng) — chưa quan tâm tính khả thi.',
      tone: 'indigo',
      featured: false,
    },
    {
      icon: <Target size={26} strokeWidth={2.4} />,
      title: 'Nhóm tập trung',
      en: 'Focus group',
      when: 'Cần phản hồi từ 1 nhóm khách hàng cụ thể về 1 ý tưởng/sản phẩm.',
      tone: 'cyan',
      featured: false,
    },
  ];

  const tones: Record<string, { bg: string; iconBg: string }> = {
    brand: { bg: 'border-brand-300 bg-brand-50/50', iconBg: 'bg-brand-600 text-white' },
    amber: { bg: 'border-amber-300 bg-amber-50/50', iconBg: 'bg-amber-500 text-white' },
    sky: { bg: 'border-sky-200 bg-sky-50/40', iconBg: 'bg-sky-600 text-white' },
    emerald: { bg: 'border-emerald-200 bg-emerald-50/40', iconBg: 'bg-emerald-600 text-white' },
    purple: { bg: 'border-purple-200 bg-purple-50/40', iconBg: 'bg-purple-600 text-white' },
    rose: { bg: 'border-rose-200 bg-rose-50/40', iconBg: 'bg-rose-600 text-white' },
    indigo: { bg: 'border-indigo-200 bg-indigo-50/40', iconBg: 'bg-indigo-600 text-white' },
    cyan: { bg: 'border-cyan-200 bg-cyan-50/40', iconBg: 'bg-cyan-600 text-white' },
  };

  return (
    <ContentSlide
      eyebrow="8 kỹ thuật phổ biến nhất"
      title="2 cái 'phải biết' (đỏ + cam) + 6 cái nên biết"
      pageNumber={7}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-4 gap-4 mt-2">
        {techs.map((t) => {
          const tone = tones[t.tone];
          return (
            <motion.div
              key={t.title}
              variants={fadeUp}
              className={`rounded-xl border-2 p-5 ${tone.bg} ${t.featured ? 'shadow-lg' : ''}`}
            >
              <div className={`w-12 h-12 rounded-lg ${tone.iconBg} flex items-center justify-center mb-3`}>
                {t.icon}
              </div>
              <div className="font-display text-xl font-bold text-neutral-900 leading-tight">
                {t.title}
              </div>
              <div className="text-xl text-neutral-400 italic mb-3">{t.en}</div>
              <div className="text-xl text-neutral-700 leading-relaxed">
                <span className="font-semibold text-neutral-800">Khi nào:</span> {t.when}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 8: Phỏng vấn 1-1 chi tiết ----- */
export function Slide08InterviewDeep() {
  const principles = [
    'Chuẩn bị 15-20 câu hỏi mở — không tự tin thì viết ra giấy',
    'Hỏi mở (vì sao? như thế nào?) > hỏi đóng (có/không)',
    'Lắng nghe 80%, nói 20% — cảm thấy im lặng cũng OK',
    'Note + nhắc lại bằng từ của mình ("Anh/chị muốn nói là...?")',
    'Kết thúc: tóm tắt 3 ý chính + xác nhận bước tiếp',
  ];

  return (
    <ContentSlide
      eyebrow="Kỹ thuật #1 — phổ biến nhất"
      title="Phỏng vấn 1-1 — kỹ năng cốt lõi của BA"
      pageNumber={8}
      totalPages={16}
    >
      <div className="grid grid-cols-[1fr_1.4fr] gap-7 mt-2">
        {/* Khi nào dùng */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4">
          <div className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                <MessageCircle size={26} strokeWidth={2.4} />
              </div>
              <div className="font-display text-2xl font-bold text-neutral-900">Khi nào dùng?</div>
            </div>
            <ul className="space-y-3 text-xl text-neutral-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
                <span>Stakeholder cao cấp (CEO, sponsor) — bận, không workshop được</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
                <span>Cần thông tin nhạy cảm hoặc ý kiến cá nhân (tránh áp lực nhóm)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
                <span>Đào sâu 1 vấn đề cụ thể (deep dive)</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
            <div className="flex items-start gap-3">
              <Calendar size={22} strokeWidth={2.2} className="text-amber-600 shrink-0 mt-1" />
              <div className="text-xl text-amber-900 leading-relaxed">
                <span className="font-bold">Thời gian chuẩn:</span> 45-60 phút. &gt; 90 phút = quá tải.
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5 nguyên tắc */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="rounded-2xl border-2 border-neutral-200 bg-white p-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
              <Ear size={26} strokeWidth={2.4} />
            </div>
            <div className="font-display text-2xl font-bold text-neutral-900">5 nguyên tắc vàng</div>
          </div>
          <div className="space-y-4">
            {principles.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xl">
                  {i + 1}
                </div>
                <div className="flex-1 text-xl text-neutral-700 leading-relaxed pt-1">{p}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ContentSlide>
  );
}

/* ----- Slide 9: Workshop chi tiết ----- */
export function Slide09WorkshopDeep() {
  const principles = [
    'Phải có người điều phối (BA = facilitator) — giữ buổi đi đúng hướng',
    'Tối đa 8-10 người — trên đó khó kiểm soát',
    'Có agenda rõ ràng + ground rules ("1 người nói/lượt")',
    'Đảm bảo mọi người được nói — đừng để 1 người át',
    'Output cụ thể: BPMN, danh sách yêu cầu, hoặc decision có sign-off',
  ];

  return (
    <ContentSlide
      eyebrow="Kỹ thuật #2 — hiệu quả khi nhiều stakeholder"
      title="Hội thảo (Workshop) — đồng thuận nhanh"
      pageNumber={9}
      totalPages={16}
    >
      <div className="grid grid-cols-[1fr_1.4fr] gap-7 mt-2">
        {/* Khi nào dùng */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4">
          <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <Users size={26} strokeWidth={2.4} />
              </div>
              <div className="font-display text-2xl font-bold text-neutral-900">Khi nào dùng?</div>
            </div>
            <ul className="space-y-3 text-xl text-neutral-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
                <span>Nhiều phòng ban, cần đồng thuận (vd. liên phòng Mua-Kho-Tài chính)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
                <span>Có mâu thuẫn giữa stakeholder — workshop để giải quyết tại chỗ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
                <span>Cần vẽ BPMN to-be (quy trình tương lai) chung với cả team</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
            <div className="flex items-start gap-3">
              <Calendar size={22} strokeWidth={2.2} className="text-amber-600 shrink-0 mt-1" />
              <div className="text-xl text-amber-900 leading-relaxed">
                <span className="font-bold">Thời gian chuẩn:</span> 2-4 giờ. Phải có break giữa giờ.
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5 nguyên tắc */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="rounded-2xl border-2 border-neutral-200 bg-white p-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
              <Target size={26} strokeWidth={2.4} />
            </div>
            <div className="font-display text-2xl font-bold text-neutral-900">5 nguyên tắc workshop tốt</div>
          </div>
          <div className="space-y-4">
            {principles.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xl">
                  {i + 1}
                </div>
                <div className="flex-1 text-xl text-neutral-700 leading-relaxed pt-1">{p}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ContentSlide>
  );
}

/* ----- Slide 10: 6 kỹ thuật còn lại (gộp) ----- */
export function Slide10OtherTechniques() {
  const techs = [
    {
      icon: <Eye size={24} strokeWidth={2.4} />,
      title: 'Quan sát thực tế',
      pro: 'Thấy quy trình thật, không qua lời kể',
      con: 'Tốn thời gian + người dùng có thể "diễn"',
      tone: 'sky',
    },
    {
      icon: <FileSearch size={24} strokeWidth={2.4} />,
      title: 'Đọc tài liệu cũ',
      pro: 'Tự làm, không phiền ai',
      con: 'Tài liệu cũ = quy trình cũ, có thể đã thay đổi',
      tone: 'emerald',
    },
    {
      icon: <ClipboardCheck size={24} strokeWidth={2.4} />,
      title: 'Khảo sát',
      pro: 'Thu được ý kiến của 50-500 người',
      con: 'Câu hỏi sai = data sai. Không đào sâu được',
      tone: 'purple',
    },
    {
      icon: <Layout size={24} strokeWidth={2.4} />,
      title: 'Prototype thử',
      pro: 'Khách "thấy" mới biết muốn gì',
      con: 'Tốn thời gian vẽ — dùng v0.dev để giảm',
      tone: 'rose',
    },
    {
      icon: <Lightbulb size={24} strokeWidth={2.4} />,
      title: 'Động não nhóm',
      pro: 'Sinh nhiều ý tưởng nhanh',
      con: 'Cần facilitator giỏi — tránh group-think',
      tone: 'indigo',
    },
    {
      icon: <Target size={24} strokeWidth={2.4} />,
      title: 'Nhóm tập trung',
      pro: 'Test ý tưởng/sản phẩm với khách thật',
      con: 'Khó tổ chức + tốn chi phí',
      tone: 'cyan',
    },
  ];

  const tones: Record<string, string> = {
    sky: 'bg-sky-50 border-sky-200',
    emerald: 'bg-emerald-50 border-emerald-200',
    purple: 'bg-purple-50 border-purple-200',
    rose: 'bg-rose-50 border-rose-200',
    indigo: 'bg-indigo-50 border-indigo-200',
    cyan: 'bg-cyan-50 border-cyan-200',
  };

  const iconTones: Record<string, string> = {
    sky: 'bg-sky-600',
    emerald: 'bg-emerald-600',
    purple: 'bg-purple-600',
    rose: 'bg-rose-600',
    indigo: 'bg-indigo-600',
    cyan: 'bg-cyan-600',
  };

  return (
    <ContentSlide
      eyebrow="6 kỹ thuật còn lại — ưu/nhược điểm"
      title="Mỗi kỹ thuật có chỗ mạnh, chỗ yếu — chọn đúng tình huống"
      pageNumber={10}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {techs.map((t) => (
          <motion.div
            key={t.title}
            variants={fadeUp}
            className={`rounded-2xl border-2 ${tones[t.tone]} p-6`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-lg ${iconTones[t.tone]} text-white flex items-center justify-center`}>
                {t.icon}
              </div>
              <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">
                {t.title}
              </div>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xl">
                <ThumbsUp size={20} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
                <span className="text-neutral-700"><span className="font-semibold">Ưu:</span> {t.pro}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xl">
                <ThumbsDown size={20} className="text-rose-600 shrink-0 mt-1" strokeWidth={2.4} />
                <span className="text-neutral-700"><span className="font-semibold">Nhược:</span> {t.con}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 11: Section 3 ----- */
export function Slide11Section3() {
  return (
    <SectionSlide
      number="03"
      title="Nghệ thuật đặt câu hỏi"
      caption="Câu hỏi sai → câu trả lời sai → yêu cầu sai → dự án thất bại. Đặt câu hỏi là kỹ năng quan trọng nhất của BA."
    />
  );
}

/* ----- Slide 12: Câu hỏi mở vs đóng + 5 Whys + anti-pattern ----- */
export function Slide12QuestionArt() {
  return (
    <ContentSlide
      eyebrow="Câu hỏi sắc — kỹ năng cốt lõi"
      title="Mở vs đóng · 5 Whys · những câu cần tránh"
      pageNumber={12}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {/* Câu hỏi mở */}
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <ThumbsUp size={24} strokeWidth={2.4} />
            </div>
            <div className="font-display text-2xl font-bold text-emerald-900">Câu hỏi MỞ ✓</div>
          </div>
          <div className="text-xl text-neutral-600 italic mb-3">Open-ended — không trả lời được bằng có/không</div>
          <ul className="space-y-2.5 text-xl text-neutral-700">
            <li>• "Vì sao quy trình hiện tại tốn thời gian?"</li>
            <li>• "Anh mô tả 1 ngày làm việc điển hình?"</li>
            <li>• "Điều gì khiến anh stress nhất?"</li>
          </ul>
          <div className="mt-4 pt-3 border-t border-emerald-200 text-xl text-emerald-800 italic">
            → Khách hàng kể chuyện, BA hiểu sâu
          </div>
        </motion.div>

        {/* Câu hỏi đóng */}
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-rose-600 text-white flex items-center justify-center">
              <ThumbsDown size={24} strokeWidth={2.4} />
            </div>
            <div className="font-display text-2xl font-bold text-rose-900">Câu hỏi ĐÓNG ✗</div>
          </div>
          <div className="text-xl text-neutral-600 italic mb-3">Closed — chỉ trả lời có/không/1 từ</div>
          <ul className="space-y-2.5 text-xl text-neutral-700">
            <li>• "Anh có muốn tính năng X không?"</li>
            <li>• "Hệ thống cũ chạy chậm phải không?"</li>
            <li>• "Có 5 user dùng hệ thống đúng chứ?"</li>
          </ul>
          <div className="mt-4 pt-3 border-t border-rose-200 text-xl text-rose-800 italic">
            → Khách trả lời "có/không", BA không học được gì mới
          </div>
        </motion.div>

        {/* 5 Whys */}
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 to-white p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center">
              <HelpCircle size={24} strokeWidth={2.4} />
            </div>
            <div className="font-display text-2xl font-bold text-brand-900">5 Whys 🎯</div>
          </div>
          <div className="text-xl text-neutral-600 italic mb-3">Hỏi "vì sao?" 5 lần để tìm gốc rễ</div>
          <div className="space-y-2 text-xl text-neutral-700">
            <div><span className="font-bold text-brand-700">Q:</span> Sao trễ lương?</div>
            <div className="pl-3"><span className="font-bold text-brand-700">→</span> Vì duyệt chậm</div>
            <div className="pl-3"><span className="font-bold text-brand-700">→</span> Vì phải in ký tay</div>
            <div className="pl-3"><span className="font-bold text-brand-700">→</span> Vì chưa có chữ ký số</div>
            <div className="pl-3 pb-1"><span className="font-bold text-brand-700">→ </span><span className="font-bold">Gốc rễ!</span></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Anti-patterns */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-7 rounded-2xl bg-neutral-900 text-white p-7"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle size={28} strokeWidth={2.2} className="text-amber-400 shrink-0 mt-1" />
          <div className="flex-1">
            <div className="font-display text-2xl font-bold mb-3">5 câu hỏi BA fresher hay mắc — tránh ngay!</div>
            <div className="grid grid-cols-2 gap-x-7 gap-y-2 text-xl text-white/90">
              <div>❌ Hỏi câu lái (leading): "Anh thấy tính năng X tốt nhỉ?"</div>
              <div>❌ Hỏi nhiều ý 1 lúc: "Quy trình A và B khác nhau ra sao và cái nào nhanh hơn?"</div>
              <div>❌ Hỏi "anh nghĩ nên làm thế nào?" (đó là việc của BA)</div>
              <div>❌ Dùng từ kỹ thuật: API, JSON, ERD với người không hiểu</div>
              <div>❌ Hỏi xong không lắng nghe — đã chuẩn bị câu tiếp theo</div>
            </div>
          </div>
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 13: Section 4 ----- */
export function Slide13Section4() {
  return (
    <SectionSlide
      number="04"
      title="AI applied + Demo role-play"
      caption="4 prompt mẫu cho elicitation + Claude Code đóng vai khách hàng để bạn luyện trước khi gặp người thật."
    />
  );
}

/* ----- Slide 14: AI prompts cho elicitation ----- */
export function Slide14AIPrompts() {
  const prompts = [
    {
      step: 'Trước phỏng vấn',
      title: 'Sinh 15-20 câu hỏi phỏng vấn',
      hint: 'Tiết kiệm 30 phút brainstorm câu hỏi — AI sinh khung, BA edit lại',
      tool: 'Claude Code',
      prompt: '"Tôi sắp phỏng vấn quản lý kho IT của Doanh nghiệp A. Sinh 15 câu hỏi mở (open-ended) chia 4 nhóm: quy trình hiện tại, pain point, kỳ vọng hệ thống mới, ràng buộc/lo ngại."',
    },
    {
      step: 'Luyện trước',
      title: 'Đóng vai khách để bạn luyện',
      hint: 'Tập phỏng vấn an toàn — không sợ làm khách thật khó chịu',
      tool: 'Claude / ChatGPT',
      prompt: '"Đóng vai 1 quản lý kho IT 35 tuổi, đang dùng Excel và bực vì mất nhiều thời gian. Tôi sẽ hỏi 5 câu, bạn trả lời ngắn nhưng giấu vài thông tin quan trọng — để tôi luyện đào sâu bằng 5 Whys."',
    },
    {
      step: 'Sau phỏng vấn',
      title: 'Tổng hợp note → user story',
      hint: 'Note phỏng vấn 5-10 trang — AI gợi ý user story chuẩn',
      tool: 'Claude Code',
      prompt: '"Đây là note phỏng vấn quản lý kho [paste note]. Phân loại thành: yêu cầu chức năng, pain point, ràng buộc. Sinh 8 user story theo format As/I want/So that, có acceptance Given-When-Then."',
    },
    {
      step: 'Validate',
      title: 'Tự kiểm tra trước khi gửi khách',
      hint: 'Tránh gửi tài liệu thiếu sót/mâu thuẫn cho khách',
      tool: 'NotebookLM',
      prompt: 'Upload bản tổng hợp + note gốc. Hỏi: "Có yêu cầu nào trong tổng hợp KHÔNG có trong note gốc? Có yêu cầu nào trong note bị bỏ sót khỏi tổng hợp?"',
    },
  ];

  return (
    <ContentSlide
      eyebrow="AI applied — luyện 4 thời điểm"
      title="4 prompt copy-paste cho 1 buổi phỏng vấn hoàn chỉnh"
      pageNumber={14}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-2">
        {prompts.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0">
                <Sparkles size={22} strokeWidth={2.4} />
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold uppercase tracking-wider text-brand-600 mb-1">
                  {p.step}
                </div>
                <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">
                  {p.title}
                </div>
                <div className="text-xl text-brand-700 font-semibold mt-1">{p.tool}</div>
              </div>
            </div>
            <div className="text-xl text-neutral-500 italic leading-snug mb-3">{p.hint}</div>
            <div className="rounded-xl bg-neutral-950 text-neutral-200 p-4 text-xl leading-relaxed font-mono">
              {p.prompt}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 15: Demo role-play ----- */
export function Slide15RolePlayDemo() {
  return (
    <ContentSlide
      eyebrow="Demo live — trong 5 phút cuối"
      title="Phỏng vấn 'khách hàng giả lập' với Claude Code"
      pageNumber={15}
      totalPages={16}
    >
      <div className="grid grid-cols-2 gap-7 mt-2">
        {/* Setup */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4">
          <div className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                <Bot size={26} strokeWidth={2.4} />
              </div>
              <div className="font-display text-2xl font-bold text-neutral-900">Setup</div>
            </div>
            <ul className="space-y-3 text-xl text-neutral-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl">1</div>
                <span>Mở Claude Code — paste prompt "đóng vai quản lý kho IT"</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl">2</div>
                <span>Bạn = BA, hỏi câu mở</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl">3</div>
                <span>Claude trả lời ngắn, có thể giấu info</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl">4</div>
                <span>Bạn áp dụng 5 Whys để moi sâu</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl">5</div>
                <span>Sau 10 phút: yêu cầu Claude tổng hợp pain point</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Output mong đợi */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4">
          <div className="rounded-2xl bg-neutral-950 text-white p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-500 text-white flex items-center justify-center">
                <Zap size={26} strokeWidth={2.4} />
              </div>
              <div className="font-display text-2xl font-bold">Output sau demo</div>
            </div>
            <div className="space-y-3 text-xl text-white/90 leading-relaxed">
              <div className="flex items-start gap-3">
                <ArrowRight size={22} className="text-brand-400 shrink-0 mt-1" strokeWidth={2.5} />
                <span><span className="font-semibold text-white">5 pain points</span> đã ghi rõ</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight size={22} className="text-brand-400 shrink-0 mt-1" strokeWidth={2.5} />
                <span><span className="font-semibold text-white">3 yêu cầu cốt lõi</span> đã xác định</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight size={22} className="text-brand-400 shrink-0 mt-1" strokeWidth={2.5} />
                <span><span className="font-semibold text-white">5-7 user story</span> chuẩn As/I want/So that</span>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight size={22} className="text-brand-400 shrink-0 mt-1" strokeWidth={2.5} />
                <span><span className="font-semibold text-white">Bài học cá nhân</span> — bạn đã thấy mình hỏi tốt/dở chỗ nào</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
            <div className="flex items-start gap-3">
              <Sparkles size={22} strokeWidth={2.2} className="text-amber-600 shrink-0 mt-1" />
              <div className="text-xl text-amber-900 leading-relaxed">
                <span className="font-bold">Mẹo:</span> Trước mỗi phỏng vấn thật, luyện 1 lần với Claude — phát hiện câu hỏi yếu trước, đỡ "đập mặt" với khách thật.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ContentSlide>
  );
}

/* ----- Slide 16: Closing ----- */
export function Slide16Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 04"
      statement="BA giỏi không phải hỏi nhiều — mà biết đặt đúng câu hỏi cho đúng người, đúng lúc."
      attribution="Buổi 5: Phân tích yêu cầu — biến note thô thành sơ đồ rõ ràng"
    />
  );
}

/* ----- registry ----- */
export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-process', Component: Slide04Section1 },
  { id: 'five-steps', Component: Slide05FiveSteps },
  { id: 'section-techniques', Component: Slide06Section2 },
  { id: 'techniques-overview', Component: Slide07TechniquesOverview },
  { id: 'interview-deep', Component: Slide08InterviewDeep },
  { id: 'workshop-deep', Component: Slide09WorkshopDeep },
  { id: 'other-techniques', Component: Slide10OtherTechniques },
  { id: 'section-questions', Component: Slide11Section3 },
  { id: 'question-art', Component: Slide12QuestionArt },
  { id: 'section-ai-demo', Component: Slide13Section4 },
  { id: 'ai-prompts', Component: Slide14AIPrompts },
  { id: 'roleplay-demo', Component: Slide15RolePlayDemo },
  { id: 'closing', Component: Slide16Closing },
];
