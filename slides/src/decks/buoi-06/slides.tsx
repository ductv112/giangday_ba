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
  PenTool,
  Sparkles,
  Smartphone,
  Monitor,
  CheckCircle2,
  Eye,
  Brush,
  Frame,
  MousePointerClick,
  AlertTriangle,
  Bot,
  Image as ImageIcon,
  Grid3x3,
  ClipboardList,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 6 — THIẾT KẾ CHỨC NĂNG & GIAO DIỆN
 * ============================================================ */

/* ----- Slide 1: Cover ----- */
export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 06 · Khoá Ready for BA"
      title={'Thiết kế chức năng\n& giao diện'}
      subtitle="BA không phải designer chuyên nghiệp — nhưng phải biết design đủ để vẽ wireframe, làm việc với UI/UX và sinh được giao diện bằng AI."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'Wireframe + UI patterns + AI design' },
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
            BA fresher thường nhầm
          </div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            "BA không vẽ giao diện." → <span className="text-brand-600">Sai.</span> BA phải vẽ wireframe — đề bài cho UI Designer.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            Nếu chờ designer vẽ rồi mới phản hồi → bạn <span className="font-semibold text-neutral-800">tốn 2 vòng review</span>. BA biết wireframe = tiết kiệm 50% thời gian dự án.
          </p>
          <div className="mt-9 text-xl text-neutral-400">
            Khảo sát BA Hiring Vietnam 2026 · 240 nhà tuyển dụng IT
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="83%" label="Job posting BA 2026 yêu cầu wireframe" accent />
          <StatCard value="3 mức" label="Wireframe: Low / Mid / High-fidelity" />
          <StatCard value="5 tools" label="BA fresher cần biết để design" />
          <StatCard value="60%" label="Thời gian rút ngắn nhờ AI sinh UI" accent />
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
        <Card icon={<Eye size={26} strokeWidth={2.4} />} title="1. Vai trò BA trong design">
          Phân biệt BA / UI Designer / UX Designer — ai làm gì, BA "vẽ" tới đâu.
        </Card>
        <Card icon={<Frame size={26} strokeWidth={2.4} />} title="2. Wireframe & UX">
          3 độ chi tiết wireframe + 6 nguyên tắc UX cốt lõi.
        </Card>
        <Card icon={<PenTool size={26} strokeWidth={2.4} />} title="3. Tools + AI sinh UI">
          5 tools BA dùng (Figma / Excalidraw / v0.dev …) + 4 prompt sinh UI bằng AI.
        </Card>
        <Card icon={<Grid3x3 size={26} strokeWidth={2.4} />} title="4. UI Patterns + Demo">
          8 pattern thường gặp + Mobile vs Web + walkthrough phân hệ Doanh nghiệp A.
        </Card>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-10 flex items-center gap-3 text-xl text-neutral-500"
      >
        <Sparkles size={22} className="text-brand-600" />
        Cuối buổi: bạn sinh được wireframe cho 1 màn hình bằng v0.dev trong 5 phút.
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 4: Section 1 ----- */
export function Slide04Section1() {
  return (
    <SectionSlide
      number="01"
      title="BA trong design — đến đâu thì dừng?"
      caption="Phân vai rõ ràng giúp BA không 'lấn sân' designer, mà cũng không 'thiếu việc'."
    />
  );
}

/* ----- Slide 5: BA vs UI vs UX Designer ----- */
export function Slide05BAvsDesigner() {
  const roles = [
    {
      role: 'BA',
      vi: 'Business Analyst',
      icon: <ClipboardList size={32} strokeWidth={2.2} />,
      color: 'from-brand-600 to-brand-700',
      iconBg: 'bg-white/20',
      jobs: [
        'Vẽ wireframe (bản vẽ thô) — show layout + flow',
        'Mô tả luồng người dùng đi qua màn hình',
        'Định nghĩa nội dung, trạng thái, tương tác',
        'Validate giao diện với khách hàng',
      ],
      output: 'Wireframe Low/Mid-fidelity · Flow chart',
      accent: true,
    },
    {
      role: 'UI Designer',
      vi: 'Người thiết kế giao diện',
      icon: <Brush size={32} strokeWidth={2.2} />,
      color: 'from-amber-50 to-amber-100/50 border-amber-200',
      iconBg: 'bg-amber-500 text-white',
      jobs: [
        'Biến wireframe BA → giao diện đẹp (mockup)',
        'Chọn màu, font, icon, spacing',
        'Áp dụng design system (component library)',
        'Tạo prototype có thể click',
      ],
      output: 'Mockup High-fidelity · Design System',
      accent: false,
    },
    {
      role: 'UX Designer',
      vi: 'Người nghiên cứu trải nghiệm',
      icon: <Eye size={32} strokeWidth={2.2} />,
      color: 'from-emerald-50 to-emerald-100/50 border-emerald-200',
      iconBg: 'bg-emerald-600 text-white',
      jobs: [
        'Nghiên cứu hành vi người dùng (user research)',
        'Vẽ user persona, journey map',
        'Test khả năng sử dụng (usability test)',
        'Tối ưu trải nghiệm xuyên suốt',
      ],
      output: 'Persona · Journey Map · Usability Report',
      accent: false,
    },
  ];

  return (
    <ContentSlide
      eyebrow="3 vai trò — phân biệt rõ"
      title="BA vẽ wireframe → UI Designer làm đẹp → UX Designer tối ưu"
      pageNumber={5}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {roles.map((r) => (
          <motion.div
            key={r.role}
            variants={fadeUp}
            className={`rounded-2xl border-2 p-7 ${
              r.accent
                ? `bg-gradient-to-br ${r.color} border-transparent text-white shadow-xl`
                : `bg-gradient-to-br ${r.color}`
            }`}
          >
            <div className={`w-16 h-16 rounded-xl ${r.iconBg} flex items-center justify-center mb-5 ${r.accent ? '' : ''}`}>
              {r.icon}
            </div>
            <div className={`text-xl font-bold uppercase tracking-wider mb-1 ${r.accent ? 'text-white/85' : 'text-neutral-500'}`}>
              {r.role}
            </div>
            <div className={`font-display text-2xl font-bold mb-4 leading-tight ${r.accent ? 'text-white' : 'text-neutral-900'}`}>
              {r.vi}
            </div>
            <ul className="space-y-2.5 mb-5">
              {r.jobs.map((j) => (
                <li key={j} className={`flex items-start gap-2.5 text-xl leading-relaxed ${r.accent ? 'text-white/90' : 'text-neutral-700'}`}>
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${r.accent ? 'bg-white/70' : 'bg-brand-600'}`} />
                  {j}
                </li>
              ))}
            </ul>
            <div className={`text-xl pt-4 border-t ${r.accent ? 'border-white/20 text-white/85' : 'border-neutral-200 text-neutral-600'}`}>
              <span className="font-bold">Output: </span>{r.output}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 6: Section 2 ----- */
export function Slide06Section2() {
  return (
    <SectionSlide
      number="02"
      title="Wireframe & UX — kỹ năng tay làm của BA"
      caption="3 độ chi tiết wireframe + 6 nguyên tắc UX cốt lõi BA cần thuộc nằm lòng."
    />
  );
}

/* ----- Slide 7: 3 mức wireframe ----- */
export function Slide07WireframeLevels() {
  const levels = [
    {
      level: 'Low-fidelity',
      vi: 'Bản vẽ thô',
      time: '5-15 phút',
      desc: 'Vẽ tay trên giấy / whiteboard — chỉ box + text',
      use: 'Brainstorm nhanh, demo concept với khách',
      tools: 'Giấy · Excalidraw',
      color: 'from-neutral-100 to-neutral-50 border-neutral-300',
      badge: 'bg-neutral-700',
    },
    {
      level: 'Mid-fidelity',
      vi: 'Bản vẽ trung bình',
      time: '30-60 phút',
      desc: 'Layout chuẩn, có nút, form, navigation — chưa cần màu/font đẹp',
      use: 'Tài liệu SRS · review với dev',
      tools: 'Figma · Balsamiq · v0.dev',
      color: 'from-amber-100 to-amber-50 border-amber-300',
      badge: 'bg-amber-600',
    },
    {
      level: 'High-fidelity',
      vi: 'Bản vẽ chi tiết',
      time: '2-8 giờ',
      desc: 'Pixel-perfect, đúng màu/font/icon, có thể click prototype',
      use: 'Demo cho khách · bàn giao cho dev',
      tools: 'Figma · Figma Make AI',
      color: 'from-brand-100 to-brand-50 border-brand-300',
      badge: 'bg-brand-600',
    },
  ];

  return (
    <ContentSlide
      eyebrow="Wireframe = bản vẽ giao diện"
      title="3 độ chi tiết — chọn cái nào tuỳ giai đoạn"
      pageNumber={7}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {levels.map((l, i) => (
          <motion.div
            key={l.level}
            variants={fadeUp}
            className={`rounded-2xl border-2 bg-gradient-to-br ${l.color} p-7 relative`}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${l.badge} text-white font-bold text-xl mb-4`}>
              0{i + 1}
            </div>
            <div className="text-xl font-bold uppercase tracking-wider text-neutral-500 mb-1">
              {l.level}
            </div>
            <div className="font-display text-3xl font-bold text-neutral-900 leading-tight mb-3">
              {l.vi}
            </div>
            <div className="text-xl font-bold text-neutral-700 mb-4 inline-block px-3 py-1 rounded-full bg-white/70">
              ⏱ {l.time}
            </div>
            <div className="text-xl text-neutral-700 leading-relaxed mb-4">{l.desc}</div>
            <div className="space-y-2 pt-4 border-t border-neutral-300">
              <div className="text-xl text-neutral-700"><span className="font-bold">Khi nào dùng: </span>{l.use}</div>
              <div className="text-xl text-neutral-700"><span className="font-bold">Tools: </span>{l.tools}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 8: 6 nguyên tắc UX cốt lõi ----- */
export function Slide08UXPrinciples() {
  const principles = [
    {
      n: '01',
      title: 'Rõ ràng > đẹp',
      desc: 'Người dùng phải hiểu ngay làm gì. Đẹp mà rối → vô nghĩa.',
      tone: 'brand',
    },
    {
      n: '02',
      title: '1 màn hình = 1 mục tiêu',
      desc: 'Mỗi màn hình giúp người dùng làm 1 việc cụ thể, đừng nhồi 5 thứ.',
      tone: 'amber',
    },
    {
      n: '03',
      title: 'Quy ước trước, sáng tạo sau',
      desc: 'Dùng pattern quen thuộc (icon kính lúp = search). Khác biệt = học lại = mệt.',
      tone: 'sky',
    },
    {
      n: '04',
      title: 'Phản hồi tức thì',
      desc: 'Click nút → có loading / toast. Không phản hồi → người dùng bấm lại nhiều lần.',
      tone: 'emerald',
    },
    {
      n: '05',
      title: 'Lỗi giúp người dùng sửa',
      desc: 'Đừng "Lỗi 500" — viết "Email chưa đúng định dạng. Ví dụ: abc@gmail.com".',
      tone: 'rose',
    },
    {
      n: '06',
      title: 'Trạng thái rỗng (empty state)',
      desc: 'Khi chưa có data → hướng dẫn bước đầu, không để màn hình trắng đáng sợ.',
      tone: 'purple',
    },
  ];

  const tones: Record<string, { bg: string; text: string; iconBg: string }> = {
    brand: { bg: 'border-brand-200 bg-brand-50/40', text: 'text-brand-900', iconBg: 'bg-brand-600 text-white' },
    amber: { bg: 'border-amber-200 bg-amber-50/40', text: 'text-amber-900', iconBg: 'bg-amber-500 text-white' },
    sky: { bg: 'border-sky-200 bg-sky-50/40', text: 'text-sky-900', iconBg: 'bg-sky-600 text-white' },
    emerald: { bg: 'border-emerald-200 bg-emerald-50/40', text: 'text-emerald-900', iconBg: 'bg-emerald-600 text-white' },
    rose: { bg: 'border-rose-200 bg-rose-50/40', text: 'text-rose-900', iconBg: 'bg-rose-600 text-white' },
    purple: { bg: 'border-purple-200 bg-purple-50/40', text: 'text-purple-900', iconBg: 'bg-purple-600 text-white' },
  };

  return (
    <ContentSlide
      eyebrow="6 nguyên tắc UX cốt lõi"
      title="Thuộc 6 nguyên tắc này — bạn vẽ wireframe nào cũng OK"
      pageNumber={8}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {principles.map((p) => {
          const t = tones[p.tone];
          return (
            <motion.div key={p.n} variants={fadeUp} className={`rounded-2xl p-6 border-2 ${t.bg}`}>
              <div className={`w-14 h-14 rounded-xl ${t.iconBg} flex items-center justify-center font-display font-bold text-2xl mb-4`}>
                {p.n}
              </div>
              <div className={`font-display text-2xl font-bold leading-tight mb-2 ${t.text}`}>
                {p.title}
              </div>
              <div className="text-xl text-neutral-700 leading-relaxed">{p.desc}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 9: Section 3 ----- */
export function Slide09Section3() {
  return (
    <SectionSlide
      number="03"
      title="Tools + AI sinh giao diện"
      caption="5 tools BA cần biết + AI rút ngắn 60% thời gian vẽ wireframe."
    />
  );
}

/* ----- Slide 10: 5 tools BA dùng ----- */
export function Slide10Tools() {
  const tools = [
    {
      name: 'Excalidraw',
      url: 'excalidraw.com',
      type: 'Free · Whiteboard',
      desc: 'Vẽ tay phong cách sketch — nhanh nhất cho Low-fidelity.',
      strength: 'Brainstorm · Workshop',
    },
    {
      name: 'Figma',
      url: 'figma.com',
      type: 'Free + Pro · Industry standard',
      desc: 'Tool số 1 toàn cầu cho UI/wireframe — BA + Designer + Dev cùng dùng.',
      strength: 'Mid + High-fidelity',
      accent: true,
    },
    {
      name: 'Balsamiq',
      url: 'balsamiq.com',
      type: 'Paid · Wireframe-only',
      desc: 'Chỉ làm wireframe Low/Mid — phong cách "tay vẽ" intentional.',
      strength: 'Wireframe nhanh',
    },
    {
      name: 'v0.dev',
      url: 'v0.dev',
      type: 'Free + Pro · AI gen UI',
      desc: 'Mô tả bằng text → AI sinh UI React+Tailwind chạy được luôn.',
      strength: 'Sinh UI từ prompt',
      accent: true,
    },
    {
      name: 'Figma Make AI',
      url: 'figma.com/make',
      type: 'Pro · AI trong Figma',
      desc: 'AI bên trong Figma — sinh design system + screen tự động.',
      strength: 'Pro user · enterprise',
    },
  ];

  return (
    <ContentSlide
      eyebrow="5 tools BA fresher cần biết"
      title="2 cái 'phải dùng' (đỏ) + 3 cái 'nên biết'"
      pageNumber={10}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-5 gap-4 mt-2">
        {tools.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            className={`rounded-xl p-6 border-2 ${
              t.accent
                ? 'bg-gradient-to-br from-brand-600 to-brand-700 border-brand-700 text-white shadow-xl shadow-brand-600/20'
                : 'bg-white border-neutral-200'
            }`}
          >
            <div className={`font-display text-2xl font-bold mb-1 leading-tight ${t.accent ? 'text-white' : 'text-neutral-900'}`}>
              {t.name}
            </div>
            <div className={`text-xl ${t.accent ? 'text-white/70' : 'text-neutral-400'} italic mb-3`}>
              {t.url}
            </div>
            <div className={`inline-block text-xl font-bold uppercase tracking-wider mb-3 px-2.5 py-1 rounded ${t.accent ? 'bg-white/15 text-white/95' : 'bg-brand-50 text-brand-700'}`}>
              {t.type}
            </div>
            <div className={`text-xl leading-relaxed mb-4 ${t.accent ? 'text-white/90' : 'text-neutral-700'}`}>
              {t.desc}
            </div>
            <div className={`text-xl pt-3 border-t ${t.accent ? 'border-white/20 text-white/90' : 'border-neutral-200 text-neutral-600'}`}>
              <span className="font-bold">Mạnh: </span>{t.strength}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 11: AI sinh UI — 4 prompt ----- */
export function Slide11AIPrompts() {
  const prompts = [
    {
      use: 'Sinh Wireframe nhanh',
      hint: 'Mô tả mục tiêu màn hình → v0.dev sinh component React + Tailwind',
      tool: 'v0.dev',
      prompt: '"Sinh wireframe trang Quản lý kho IT của Doanh nghiệp A: header có search + filter loại thiết bị, table list 8 cột (mã, tên, loại, trạng thái, người mượn, ngày…), nút Cấp phát + Báo hỏng. Style minimal, ant-design feel."',
    },
    {
      use: 'Sinh nhiều biến thể UI',
      hint: 'Hỏi 3 layout khác nhau cho cùng 1 màn hình → chọn cái khách thích',
      tool: 'Claude Code',
      prompt: '"Cho màn hình Đặt lịch sửa chữa app KH: sinh 3 phương án layout (compact / normal / spacious). Mỗi phương án mô tả thành phần, vị trí, điểm mạnh."',
    },
    {
      use: 'Mô tả luồng người dùng',
      hint: 'AI sinh user flow text → vẽ Mermaid flowchart',
      tool: 'Claude + Mermaid',
      prompt: '"Mô tả user flow KH đặt lịch sửa chữa: 5 màn hình (Home → Chọn dịch vụ → Chọn ngày → Confirm → Tracking). Sinh Mermaid flowchart dạng TD kèm decision points."',
    },
    {
      use: 'Review wireframe theo UX rules',
      hint: 'Upload wireframe → Claude/NotebookLM check vs 6 nguyên tắc UX',
      tool: 'Claude (vision) / NotebookLM',
      prompt: '"Đây là wireframe màn hình Đặt lịch (đính kèm). Check theo 6 nguyên tắc UX: rõ ràng / 1 mục tiêu / quy ước / phản hồi / lỗi rõ / empty state. Chỉ ra điểm cần sửa."',
    },
  ];

  return (
    <ContentSlide
      eyebrow="AI sinh giao diện — 4 prompt copy ngay"
      title="Mỗi prompt = 1 tình huống thực — copy về dùng được liền"
      pageNumber={11}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-2">
        {prompts.map((p) => (
          <motion.div key={p.use} variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0">
                <Sparkles size={22} strokeWidth={2.4} />
              </div>
              <div className="flex-1">
                <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">{p.use}</div>
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

/* ----- Slide 12: Section 4 ----- */
export function Slide12Section4() {
  return (
    <SectionSlide
      number="04"
      title="UI Patterns + Demo phân hệ thực"
      caption="8 pattern thường gặp + Mobile vs Web + walkthrough Doanh nghiệp A."
    />
  );
}

/* ----- Slide 13: 8 UI patterns ----- */
export function Slide13Patterns() {
  const patterns = [
    { name: 'Form', desc: 'Nhập dữ liệu — ưu tiên label trên field, group logic' },
    { name: 'Table', desc: 'Hiển thị danh sách — luôn có sort + filter + pagination' },
    { name: 'Dashboard', desc: 'Tổng hợp số liệu — KPI cards top, charts bên dưới' },
    { name: 'Wizard', desc: 'Quy trình nhiều bước — progress bar + back/next' },
    { name: 'Modal / Dialog', desc: 'Hành động cần focus — confirm xoá, edit nhanh' },
    { name: 'Tab', desc: 'Group nội dung cùng context — tránh > 5 tab' },
    { name: 'Search & Filter', desc: 'Tìm trong danh sách lớn — auto-suggest, multi-filter' },
    { name: 'Empty State', desc: 'Khi list rỗng — hướng dẫn bước đầu, đừng để trắng' },
  ];

  return (
    <ContentSlide
      eyebrow="8 UI pattern thường gặp"
      title="Thuộc 8 pattern này = vẽ được 80% màn hình BA gặp"
      pageNumber={13}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-4 gap-4 mt-2">
        {patterns.map((p, i) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            className="rounded-xl border border-neutral-200 bg-white p-6 hover:border-brand-400 hover:shadow-md transition-all"
          >
            <div className="flex items-baseline justify-between mb-3">
              <div className="font-display text-2xl font-bold text-brand-600 leading-tight">
                {p.name}
              </div>
              <div className="text-xl font-bold text-neutral-300 tabular-nums">0{i + 1}</div>
            </div>
            <div className="text-xl text-neutral-700 leading-relaxed">{p.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-7 px-7 py-5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-4"
      >
        <AlertTriangle size={24} strokeWidth={2.2} className="text-amber-600 shrink-0 mt-1" />
        <div className="text-xl text-amber-900 leading-relaxed">
          <span className="font-bold">Quan trọng:</span> KHÔNG cần phát minh pattern mới. Người dùng đã quen 8 pattern này — dùng đúng là họ hiểu ngay, không cần học lại.
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 14: Mobile vs Web ----- */
export function Slide14MobileWeb() {
  const compare = [
    {
      side: 'MOBILE',
      vi: 'Điện thoại',
      icon: <Smartphone size={32} strokeWidth={2.2} />,
      color: 'from-brand-600 to-brand-700 text-white shadow-lg',
      iconBg: 'bg-white/20',
      points: [
        'Ngón tay (touch target ≥ 44px)',
        '1 task / màn hình — không nhồi',
        'Navigation ở dưới (bottom tab)',
        'Form ngắn, multi-step thay vì 1 form dài',
        'Offline-first — phải xử lý mất mạng',
      ],
    },
    {
      side: 'WEB',
      vi: 'Trình duyệt máy tính',
      icon: <Monitor size={32} strokeWidth={2.2} />,
      color: 'from-sky-50 to-sky-100/50 border-sky-200',
      iconBg: 'bg-sky-600 text-white',
      points: [
        'Chuột + bàn phím (hover, shortcut)',
        'Nhiều task / màn hình (table, dashboard)',
        'Navigation trên hoặc trái (sidebar)',
        'Form dài có thể tolerable',
        'Always online giả định',
      ],
    },
  ];

  return (
    <ContentSlide
      eyebrow="Khác biệt giữa 2 nền tảng"
      title="Mobile và Web KHÔNG phải cùng wireframe scale lại"
      pageNumber={14}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-3">
        {compare.map((c, i) => (
          <motion.div
            key={c.side}
            variants={fadeUp}
            className={`rounded-2xl border-2 p-7 ${
              i === 0
                ? `bg-gradient-to-br ${c.color} border-transparent`
                : `bg-gradient-to-br ${c.color}`
            }`}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className={`w-16 h-16 rounded-xl ${c.iconBg} flex items-center justify-center`}>
                {c.icon}
              </div>
              <div>
                <div className={`text-xl font-bold uppercase tracking-wider ${i === 0 ? 'text-white/80' : 'text-neutral-500'}`}>
                  {c.side}
                </div>
                <div className={`font-display text-3xl font-bold leading-tight ${i === 0 ? 'text-white' : 'text-neutral-900'}`}>
                  {c.vi}
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {c.points.map((p) => (
                <li key={p} className={`flex items-start gap-3 text-xl leading-relaxed ${i === 0 ? 'text-white/90' : 'text-neutral-700'}`}>
                  <CheckCircle2 size={22} strokeWidth={2.4} className={`shrink-0 mt-1 ${i === 0 ? 'text-white' : 'text-sky-600'}`} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 15: Demo Doanh nghiệp A ----- */
export function Slide15Demo() {
  const screens = [
    { name: 'Login (SSO)', flow: 'Email → OTP → Vào portal', screens: '1', complexity: 'Simple' },
    { name: 'Portal hub', flow: 'Dashboard → 16 module tiles', screens: '1', complexity: 'Medium' },
    { name: 'Kho IT — list', flow: 'Search/filter → Table → Cấp phát/Báo hỏng', screens: '3', complexity: 'Medium' },
    { name: 'Cấp phát flow', flow: 'Quét QR → Chọn người nhận → Confirm → Email', screens: '4', complexity: 'High' },
    { name: 'Báo cáo tồn kho', flow: 'Lọc theo loại/khu vực → Chart + Table → Export', screens: '2', complexity: 'Medium' },
  ];

  return (
    <ContentSlide
      eyebrow="Demo: phân hệ Kho IT (Doanh nghiệp A)"
      title="5 màn hình chính + flow — output BA bàn giao cho UI Designer"
      pageNumber={15}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-3 mt-3">
        {screens.map((s, i) => (
          <motion.div
            key={s.name}
            variants={fadeUp}
            className="rounded-xl border border-neutral-200 bg-white p-5 flex items-center gap-5 hover:border-brand-400 transition-all"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-display font-bold text-xl">
              0{i + 1}
            </div>
            <div className="shrink-0 w-56">
              <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">{s.name}</div>
            </div>
            <div className="flex-1 flex items-center gap-2 text-xl text-neutral-700">
              <MousePointerClick size={20} className="text-brand-600 shrink-0" strokeWidth={2.4} />
              <span>{s.flow}</span>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-700 text-xl font-bold flex items-center gap-1.5">
                <ImageIcon size={18} strokeWidth={2.4} /> {s.screens} màn
              </div>
              <div className={`px-3 py-1.5 rounded-full text-xl font-bold ${
                s.complexity === 'Simple' ? 'bg-emerald-100 text-emerald-800' :
                s.complexity === 'Medium' ? 'bg-amber-100 text-amber-800' :
                'bg-brand-100 text-brand-800'
              }`}>
                {s.complexity}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-7 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white flex items-center gap-4"
      >
        <Bot size={28} strokeWidth={2.2} className="shrink-0" />
        <div className="text-xl">
          <span className="font-bold">Có v0.dev:</span> 11 màn hình → BA tự sinh wireframe trong 30-45 phút (thay vì 4-6 giờ vẽ tay).
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 16: Closing ----- */
export function Slide16Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 06"
      statement="BA biết wireframe = đề bài cho designer rõ ràng. BA biết v0.dev = sinh được giao diện không cần biết code."
      attribution="Buổi 7: Viết tài liệu yêu cầu — biến wireframe thành SRS hoàn chỉnh"
    />
  );
}

/* ----- registry ----- */
export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-roles', Component: Slide04Section1 },
  { id: 'ba-vs-designer', Component: Slide05BAvsDesigner },
  { id: 'section-wireframe', Component: Slide06Section2 },
  { id: 'wireframe-levels', Component: Slide07WireframeLevels },
  { id: 'ux-principles', Component: Slide08UXPrinciples },
  { id: 'section-tools-ai', Component: Slide09Section3 },
  { id: 'tools', Component: Slide10Tools },
  { id: 'ai-prompts', Component: Slide11AIPrompts },
  { id: 'section-patterns', Component: Slide12Section4 },
  { id: 'ui-patterns', Component: Slide13Patterns },
  { id: 'mobile-vs-web', Component: Slide14MobileWeb },
  { id: 'demo', Component: Slide15Demo },
  { id: 'closing', Component: Slide16Closing },
];
