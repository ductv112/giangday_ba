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
  Brain,
  MessagesSquare,
  BookOpen,
  Code2,
  Search,
  Workflow,
  FileText,
  Layout,
  CheckCircle2,
  Ear,
  HelpCircle,
  Handshake,
  Presentation,
  Heart,
  Target,
  Sparkles,
  Calendar,
  Layers,
  ListChecks,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 2 — KỸ NĂNG & KIẾN THỨC CẦN THIẾT CHO BA
 * ============================================================ */

/* ----- Slide 1: Cover ----- */
export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 02 · Khoá Ready for BA"
      title={'Ma trận năng lực\nBusiness Analyst'}
      subtitle="Kỹ năng cứng, kỹ năng mềm, kiến thức ngành và hiểu công nghệ — bạn đang ở đâu, cần học gì để 'thực chiến' được trong 1-3 năm đầu nghề BA."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'Tự đánh giá + lộ trình' },
        { label: 'Mức độ', value: 'Foundation' },
      ]}
    />
  );
}

/* ----- Slide 2: Hook — vì sao fresher fail ----- */
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
            Vì sao fresher BA fail vòng 2?
          </div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            <span className="text-brand-600">62%</span> fresher rớt vì thiếu kỹ năng <span className="text-brand-600">đặt câu hỏi</span> và <span className="text-brand-600">phân tích</span>.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            Không phải vì không thuộc lý thuyết — mà vì <span className="font-semibold text-neutral-800">không biết áp dụng</span> vào tình huống thật khi phỏng vấn.
          </p>
          <div className="mt-9 text-xl text-neutral-400">
            Khảo sát BA Hiring Vietnam 2026 · 240 nhà tuyển dụng IT
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="62%" label="Yếu kỹ năng phỏng vấn nghiệp vụ" accent />
          <StatCard value="48%" label="Không vẽ nổi flow đơn giản" />
          <StatCard value="71%" label="Thiếu kiến thức ngành" />
          <StatCard value="100%" label="Đều giải quyết được nếu biết AI" accent />
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
      title="Hôm nay ta soi 4 trụ cột năng lực BA"
      pageNumber={3}
      totalPages={15}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-6 mt-2">
        <Card icon={<Brain size={26} strokeWidth={2.4} />} title="1. Kỹ năng cứng (Hard Skills)">
          6 kỹ năng "tay làm" + bộ công cụ BA dùng hàng ngày (Excel, SQL, Figma, Mermaid, AI…).
        </Card>
        <Card icon={<MessagesSquare size={26} strokeWidth={2.4} />} title="2. Kỹ năng mềm (Soft Skills)">
          Giao tiếp, lắng nghe, đặt câu hỏi, đàm phán — cái mà phỏng vấn hay kiểm tra nhất.
        </Card>
        <Card icon={<BookOpen size={26} strokeWidth={2.4} />} title="3. Kiến thức ngành">
          Hiểu nghiệp vụ ngành mình làm + bản đồ 6 nhóm kiến thức BA (neo cho 7 buổi sau).
        </Card>
        <Card icon={<Code2 size={26} strokeWidth={2.4} />} title="4. Hiểu công nghệ">
          Biết đủ công nghệ để nói chuyện với dev — không cần code, nhưng phải hiểu khái niệm.
        </Card>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-10 flex items-center gap-3 text-xl text-neutral-500"
      >
        <Sparkles size={22} className="text-brand-600" />
        Cuối buổi: tự chấm điểm Skill Matrix → biết mình ở đâu, cần học gì trước.
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 4: Section 1 — Ma trận năng lực ----- */
export function Slide04Section1() {
  return (
    <SectionSlide
      number="01"
      title="Ma trận năng lực 4 trụ cột"
      caption="Hard + Soft + Domain + Tech — cân bằng cả 4 mới ra một BA thực chiến."
    />
  );
}

/* ----- Slide 5: 4-pillar skill matrix ----- */
export function Slide05SkillMatrix() {
  const pillars = [
    {
      icon: <Brain size={32} strokeWidth={2.2} />,
      title: 'HARD SKILLS',
      label: 'Kỹ năng cứng',
      desc: 'Phân tích · Mô hình hoá · Viết tài liệu · Thiết kế · Validate',
      bg: 'from-brand-600 to-brand-700',
      text: 'text-white',
      accent: true,
    },
    {
      icon: <MessagesSquare size={32} strokeWidth={2.2} />,
      title: 'SOFT SKILLS',
      label: 'Kỹ năng mềm',
      desc: 'Giao tiếp · Lắng nghe · Đặt câu hỏi · Đàm phán · Trình bày',
      bg: 'from-amber-500 to-amber-600',
      text: 'text-white',
      accent: true,
    },
    {
      icon: <BookOpen size={32} strokeWidth={2.2} />,
      title: 'DOMAIN KNOWLEDGE',
      label: 'Kiến thức ngành',
      desc: 'Banking · Fintech · EdTech · Logistics · Retail · ERP…',
      bg: 'from-emerald-50 to-emerald-100/50 border-emerald-200',
      text: 'text-emerald-900',
      accent: false,
    },
    {
      icon: <Code2 size={32} strokeWidth={2.2} />,
      title: 'TECH LITERACY',
      label: 'Hiểu công nghệ',
      desc: 'Web/Mobile · API (giao tiếp giữa hệ thống) · Database (cơ sở dữ liệu) · Cloud · Agile/Scrum (cách team làm việc)',
      bg: 'from-sky-50 to-sky-100/50 border-sky-200',
      text: 'text-sky-900',
      accent: false,
    },
  ];

  return (
    <ContentSlide
      eyebrow="4 trụ cột năng lực"
      title="Cân bằng cả 4 — không phải chỉ giỏi 1"
      pageNumber={5}
      totalPages={15}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-3">
        {pillars.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            className={`rounded-2xl p-7 border-2 ${
              p.accent
                ? `bg-gradient-to-br ${p.bg} border-transparent shadow-xl`
                : `bg-gradient-to-br ${p.bg}`
            }`}
          >
            <div className="flex items-start gap-5">
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${
                  p.accent ? 'bg-white/20' : 'bg-white/80 text-current'
                } ${p.text}`}
              >
                {p.icon}
              </div>
              <div className="flex-1">
                <div className={`text-xl font-bold uppercase tracking-wider mb-1 ${p.text} ${p.accent ? 'opacity-80' : 'opacity-90'}`}>
                  {p.title}
                </div>
                <div className={`font-display text-3xl font-bold leading-tight mb-2 ${p.text}`}>
                  {p.label}
                </div>
                <div className={`text-xl leading-relaxed ${p.text} ${p.accent ? 'opacity-90' : 'opacity-80'}`}>
                  {p.desc}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 6: Section 2 — Hard Skills ----- */
export function Slide06Section2() {
  return (
    <SectionSlide
      number="02"
      title="Kỹ năng cứng — kỹ năng tay làm được việc"
      caption="6 kỹ năng cứng + bộ công cụ thực chiến BA dùng hàng ngày."
    />
  );
}

/* ----- Slide 7: 6 Hard Skills ----- */
export function Slide07HardSkills() {
  const skills = [
    {
      icon: <Search size={26} strokeWidth={2.4} />,
      title: 'Khơi gợi yêu cầu',
      desc: 'Phỏng vấn khách hàng, hội thảo (workshop), quan sát thực tế, đọc tài liệu — moi ra cái khách hàng thực sự cần.',
      level: 'Buổi 4',
    },
    {
      icon: <Workflow size={26} strokeWidth={2.4} />,
      title: 'Phân tích & vẽ sơ đồ',
      desc: 'Vẽ sơ đồ quy trình, sơ đồ ca sử dụng, sơ đồ dữ liệu — biến mớ rối thành hình dev nhìn là hiểu.',
      level: 'Buổi 5',
    },
    {
      icon: <Layout size={26} strokeWidth={2.4} />,
      title: 'Thiết kế giao diện',
      desc: 'Wireframe (bản vẽ thô màn hình), mockup, luồng người dùng — phối hợp UI designer hoặc dùng v0.dev / Figma Make.',
      level: 'Buổi 6',
    },
    {
      icon: <FileText size={26} strokeWidth={2.4} />,
      title: 'Viết tài liệu yêu cầu',
      desc: 'BRD, SRS, User Story — đề bài rõ ràng cho dev. Học chi tiết format và ví dụ ở buổi 7.',
      level: 'Buổi 7',
    },
    {
      icon: <CheckCircle2 size={26} strokeWidth={2.4} />,
      title: 'Kiểm tra yêu cầu',
      desc: 'Demo cho khách, review tài liệu, UAT (kiểm thử bởi người dùng) — đảm bảo dev làm đúng cái khách cần.',
      level: 'Buổi 8',
    },
    {
      icon: <Target size={26} strokeWidth={2.4} />,
      title: 'Quản lý yêu cầu',
      desc: 'Theo dõi, sắp xếp ưu tiên, xử lý thay đổi — kiểm soát "yêu cầu phình ra" giữa dự án.',
      level: 'Buổi 9',
    },
  ];

  return (
    <ContentSlide
      eyebrow="6 kỹ năng cứng cốt lõi"
      title="Mỗi kỹ năng = 1 buổi học chuyên sâu sắp tới"
      pageNumber={7}
      totalPages={15}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            className={`rounded-2xl p-7 border ${
              i === 5
                ? 'bg-gradient-to-br from-brand-600 to-brand-700 border-brand-700 text-white shadow-xl shadow-brand-600/20'
                : 'bg-white border-neutral-200'
            }`}
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                i === 5 ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-600'
              }`}
            >
              {s.icon}
            </div>
            <div className={`font-display text-2xl font-bold mb-2 leading-tight ${i === 5 ? 'text-white' : 'text-neutral-900'}`}>
              {s.title}
            </div>
            <div className={`text-xl leading-relaxed mb-4 ${i === 5 ? 'text-white/85' : 'text-neutral-600'}`}>
              {s.desc}
            </div>
            <div className={`inline-flex items-center gap-1.5 text-xl font-bold uppercase tracking-wider ${i === 5 ? 'text-white/85' : 'text-brand-600'}`}>
              <Calendar size={18} strokeWidth={2.4} />
              {s.level}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 8: Bộ Tools BA ----- */
export function Slide08Tools() {
  const groups = [
    {
      title: 'Documentation',
      icon: <FileText size={22} strokeWidth={2.4} />,
      tools: ['Word / Google Docs', 'Notion · Confluence', 'Markdown'],
    },
    {
      title: 'Diagram & Modeling',
      icon: <Workflow size={22} strokeWidth={2.4} />,
      tools: ['Mermaid (text → diagram)', 'PlantUML', 'Draw.io · Lucidchart'],
    },
    {
      title: 'Design / Prototype',
      icon: <Layout size={22} strokeWidth={2.4} />,
      tools: ['Figma · Figma Make AI', 'v0.dev (sinh UI)', 'Excalidraw'],
    },
    {
      title: 'Data',
      icon: <Layers size={22} strokeWidth={2.4} />,
      tools: ['Excel · Google Sheets', 'SQL cơ bản (SELECT/JOIN)', 'Power BI · Looker'],
    },
    {
      title: 'Project Management',
      icon: <ListChecks size={22} strokeWidth={2.4} />,
      tools: ['Jira · Trello', 'Asana · Linear', 'Azure DevOps'],
    },
    {
      title: 'AI Stack (Buổi 1)',
      icon: <Sparkles size={22} strokeWidth={2.4} />,
      tools: ['Claude Code (chính)', 'ChatGPT · Gemini', 'NotebookLM'],
      accent: true,
    },
  ];

  return (
    <ContentSlide
      eyebrow="Bộ công cụ BA — fresher cần biết tới đâu?"
      title="Không phải master hết — biết khi nào cần dùng cái nào"
      pageNumber={8}
      totalPages={15}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {groups.map((g) => (
          <motion.div
            key={g.title}
            variants={fadeUp}
            className={`rounded-xl p-6 border ${
              g.accent
                ? 'bg-gradient-to-br from-brand-600 to-brand-700 border-brand-700 text-white shadow-lg shadow-brand-600/20'
                : 'bg-white border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                  g.accent ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-600'
                }`}
              >
                {g.icon}
              </div>
              <div className={`text-2xl font-bold ${g.accent ? 'text-white' : 'text-neutral-900'}`}>
                {g.title}
              </div>
            </div>
            <ul className="space-y-2.5">
              {g.tools.map((t) => (
                <li key={t} className={`flex items-start gap-2.5 text-xl leading-relaxed ${g.accent ? 'text-white/90' : 'text-neutral-700'}`}>
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${g.accent ? 'bg-white/70' : 'bg-brand-600'}`} />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 9: Section 3 — Soft Skills ----- */
export function Slide09Section3() {
  return (
    <SectionSlide
      number="03"
      title="Kỹ năng mềm — cái mà phỏng vấn hay kiểm tra nhất"
      caption="Bạn không bị loại vì thiếu lý thuyết, bạn bị loại vì không biết đặt đúng câu hỏi cho đúng người."
    />
  );
}

/* ----- Slide 10: 6 Soft Skills + Behavioral ----- */
export function Slide10SoftSkills() {
  const skills = [
    {
      icon: <MessagesSquare size={28} strokeWidth={2.4} />,
      title: 'Giao tiếp đa kênh',
      desc: 'Email · chat · họp trực tiếp · họp ngắn đầu ngày — chọn kênh phù hợp với từng tình huống.',
      tone: 'brand',
    },
    {
      icon: <Ear size={28} strokeWidth={2.4} />,
      title: 'Lắng nghe chủ động',
      desc: 'Nghe để hiểu, không phải nghe để trả lời. Ghi chép, nhắc lại bằng từ của mình để xác nhận đúng ý.',
      tone: 'amber',
    },
    {
      icon: <HelpCircle size={28} strokeWidth={2.4} />,
      title: 'Đặt câu hỏi sắc',
      desc: 'Hỏi "vì sao?" 5 lần (5 Whys), hỏi mở thay vì hỏi có/không — moi được vấn đề thật, không phải bề mặt.',
      tone: 'emerald',
    },
    {
      icon: <Handshake size={28} strokeWidth={2.4} />,
      title: 'Đàm phán & thuyết phục',
      desc: 'Khi 2 bên liên quan (khách / sếp / dev) mâu thuẫn, BA đứng giữa tìm phương án cả 2 chấp nhận được.',
      tone: 'sky',
    },
    {
      icon: <Presentation size={28} strokeWidth={2.4} />,
      title: 'Trình bày & demo',
      desc: 'Diễn đạt giải pháp cho người không rành kỹ thuật — kể chuyện hơn là đọc slide đầy chữ.',
      tone: 'purple',
    },
    {
      icon: <Heart size={28} strokeWidth={2.4} />,
      title: 'Đặt mình vào vị trí người khác',
      desc: 'Hiểu góc nhìn của khách / dev / tester — vì sao họ nói câu đó, làm hành động đó.',
      tone: 'rose',
    },
  ];

  const tones: Record<string, { bg: string; iconBg: string; iconColor: string; titleColor: string }> = {
    brand: { bg: 'border-brand-200 bg-brand-50/40', iconBg: 'bg-brand-600', iconColor: 'text-white', titleColor: 'text-brand-900' },
    amber: { bg: 'border-amber-200 bg-amber-50/40', iconBg: 'bg-amber-500', iconColor: 'text-white', titleColor: 'text-amber-900' },
    emerald: { bg: 'border-emerald-200 bg-emerald-50/40', iconBg: 'bg-emerald-600', iconColor: 'text-white', titleColor: 'text-emerald-900' },
    sky: { bg: 'border-sky-200 bg-sky-50/40', iconBg: 'bg-sky-600', iconColor: 'text-white', titleColor: 'text-sky-900' },
    purple: { bg: 'border-purple-200 bg-purple-50/40', iconBg: 'bg-purple-600', iconColor: 'text-white', titleColor: 'text-purple-900' },
    rose: { bg: 'border-rose-200 bg-rose-50/40', iconBg: 'bg-rose-600', iconColor: 'text-white', titleColor: 'text-rose-900' },
  };

  return (
    <ContentSlide
      eyebrow="6 kỹ năng mềm cốt lõi"
      title="Bài tập về nhà: tự chấm 1-5 cho mỗi mục"
      pageNumber={10}
      totalPages={15}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {skills.map((s) => {
          const t = tones[s.tone];
          return (
            <motion.div key={s.title} variants={fadeUp} className={`rounded-2xl p-6 border-2 ${t.bg}`}>
              <div className={`w-14 h-14 rounded-xl ${t.iconBg} ${t.iconColor} flex items-center justify-center mb-4 shadow-md`}>
                {s.icon}
              </div>
              <div className={`font-display text-2xl font-bold leading-tight mb-2 ${t.titleColor}`}>
                {s.title}
              </div>
              <div className="text-xl text-neutral-700 leading-relaxed">{s.desc}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 11: Section 4 — Knowledge Areas ----- */
export function Slide11Section4() {
  return (
    <SectionSlide
      number="04"
      title="6 nhóm kiến thức BA cần biết"
      caption="Bản đồ tổng thể — bạn sẽ học chi tiết từng nhóm qua các buổi sau, không cần đọc sách dày."
    />
  );
}

/* ----- Slide 12: 6 BABOK Knowledge Areas ----- */
export function Slide12KnowledgeAreas() {
  const areas = [
    {
      code: '01',
      title: 'Lập kế hoạch & theo dõi',
      en: 'Planning & Monitoring',
      desc: 'Trước khi làm gì, lên kế hoạch sẽ làm như thế nào — và theo dõi tiến độ.',
      buoi: 'B3',
    },
    {
      code: '02',
      title: 'Khơi gợi & cộng tác',
      en: 'Elicitation & Collaboration',
      desc: 'Moi yêu cầu từ khách hàng và làm việc với các bên liên quan trong dự án.',
      buoi: 'B4',
    },
    {
      code: '03',
      title: 'Quản lý vòng đời yêu cầu',
      en: 'Requirements Lifecycle',
      desc: 'Theo dõi yêu cầu từ lúc nảy sinh, qua duyệt, đến lúc đóng và bảo trì.',
      buoi: 'B9',
    },
    {
      code: '04',
      title: 'Phân tích chiến lược',
      en: 'Strategy Analysis',
      desc: 'Hiểu vấn đề kinh doanh + đề xuất hướng giải quyết khả thi nhất.',
      buoi: 'B5',
    },
    {
      code: '05',
      title: 'Phân tích yêu cầu & thiết kế',
      en: 'Requirements Analysis & Design',
      desc: 'Vẽ sơ đồ nghiệp vụ + thiết kế giải pháp chi tiết — phần "tay làm" nhiều nhất.',
      buoi: 'B5–7',
    },
    {
      code: '06',
      title: 'Đánh giá giải pháp',
      en: 'Solution Evaluation',
      desc: 'Sau khi triển khai, kiểm tra giải pháp có đạt mục tiêu kinh doanh không.',
      buoi: 'B8',
    },
  ];

  return (
    <ContentSlide
      eyebrow="Bản đồ kiến thức BA — tham khảo từ chuẩn quốc tế IIBA"
      title="6 nhóm — mỗi nhóm sẽ học chi tiết qua các buổi 3-9"
      pageNumber={12}
      totalPages={15}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {areas.map((a) => (
          <motion.div
            key={a.code}
            variants={fadeUp}
            className="rounded-2xl border border-neutral-200 bg-white p-6 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-600/10 transition-all"
          >
            <div className="flex items-baseline justify-between mb-4">
              <div className="text-xl font-display font-extrabold text-brand-600 tracking-tight">
                {a.code}
              </div>
              <div className="text-xl font-bold text-neutral-400 tabular-nums">{a.buoi}</div>
            </div>
            <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-1">
              {a.title}
            </div>
            <div className="text-xl text-neutral-400 italic mb-3">{a.en}</div>
            <div className="text-xl text-neutral-600 leading-relaxed">{a.desc}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-9 px-7 py-5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center gap-4"
      >
        <BookOpen size={28} strokeWidth={2.2} className="text-brand-600 shrink-0" />
        <div className="text-xl text-neutral-700">
          <span className="font-bold text-neutral-900">Bạn KHÔNG cần đọc sách BABOK 600 trang</span> — bản đồ này chỉ để bạn biết các nhóm kiến thức tồn tại. Mỗi nhóm sẽ học gọn trong buổi tương ứng.
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 13: AI applied — bộ prompt nâng cấp kỹ năng ----- */
export function Slide13AIPrompts() {
  const prompts = [
    {
      skill: 'Luyện đặt câu hỏi sắc',
      hint: '5 Whys = hỏi "vì sao?" 5 lần để tìm gốc rễ vấn đề',
      tool: 'Claude Code / ChatGPT',
      prompt: '"Đóng vai khách hàng đặt lịch sửa chữa điện lạnh. Tôi sẽ hỏi 5 câu, bạn trả lời ngắn nhưng giấu thông tin quan trọng — để tôi luyện kỹ năng đào sâu."',
    },
    {
      skill: 'Vẽ sơ đồ quy trình nhanh',
      hint: 'Mermaid = ngôn ngữ vẽ sơ đồ chỉ bằng text',
      tool: 'Claude + Mermaid',
      prompt: '"Mô tả quy trình đặt lịch sửa chữa: KH đặt → admin xác nhận → thợ nhận → thực hiện → KH nghiệm thu. Output ra sơ đồ flowchart bằng Mermaid."',
    },
    {
      skill: 'Sinh User Story chuẩn',
      hint: 'User Story = câu chuyện ngắn mô tả nhu cầu người dùng (As/I want/So that)',
      tool: 'Claude Code',
      prompt: '"Cho phân hệ Kho IT của Doanh nghiệp A, sinh 5 User Story vai trò nhân viên kho theo format As/I want/So that, kèm 3 tiêu chí kiểm thử Given-When-Then mỗi story."',
    },
    {
      skill: 'Review tài liệu yêu cầu',
      hint: 'Tự kiểm tra SRS (đặc tả phần mềm) đã đủ rõ chưa, có gì thiếu',
      tool: 'NotebookLM',
      prompt: 'Upload bản nháp SRS + danh sách 10 tiêu chí kiểm tra → NotebookLM chỉ ra điểm thiếu và gợi ý bổ sung.',
    },
  ];

  return (
    <ContentSlide
      eyebrow="AI applied — luyện kỹ năng nhanh hơn 5×"
      title="4 prompt mẫu copy về dùng ngay"
      pageNumber={13}
      totalPages={15}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-2">
        {prompts.map((p) => (
          <motion.div
            key={p.skill}
            variants={fadeUp}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0">
                <Sparkles size={22} strokeWidth={2.4} />
              </div>
              <div className="flex-1">
                <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">
                  {p.skill}
                </div>
                <div className="text-xl text-brand-600 font-semibold">{p.tool}</div>
              </div>
            </div>
            <div className="text-xl text-neutral-500 italic leading-snug mb-3">
              {p.hint}
            </div>
            <div className="rounded-xl bg-neutral-950 text-neutral-200 p-5 text-xl leading-relaxed font-mono">
              {p.prompt}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 14: Roadmap 3-6-12 tháng ----- */
export function Slide14Roadmap() {
  const phases = [
    {
      months: '0 → 3 tháng',
      level: 'Onboarding',
      tone: 'from-neutral-100 to-neutral-50 border-neutral-300',
      badge: 'bg-neutral-700 text-white',
      goals: [
        'Đọc 1 cuốn sách BA tiếng Việt + xem 5-10 video YouTube BA cơ bản',
        'Tự chấm bảng năng lực (Skill Matrix) lần 1 — biết mình ở đâu',
        'Làm 5 User Story + 1 sơ đồ quy trình cho case "Sửa chữa điện lạnh"',
        'Master 3 tool: Claude Code · Figma · Mermaid',
      ],
    },
    {
      months: '3 → 6 tháng',
      level: 'Junior thực chiến',
      tone: 'from-amber-100 to-amber-50 border-amber-300',
      badge: 'bg-amber-600 text-white',
      goals: [
        'Tham gia 1 dự án thật (vị trí intern / fresher BA)',
        'Viết tài liệu yêu cầu (SRS) hoàn chỉnh cho ≥ 1 phân hệ',
        'Demo giải pháp cho người liên quan ≥ 3 lần',
        'Học SQL cơ bản (truy vấn dữ liệu) + 1 ngành nghiệp vụ',
      ],
    },
    {
      months: '6 → 12 tháng',
      level: 'Mid-Junior · sẵn sàng thi chứng chỉ',
      tone: 'from-brand-100 to-brand-50 border-brand-300',
      badge: 'bg-brand-600 text-white',
      goals: [
        'Phụ trách 1 phân hệ nhỏ từ khơi gợi → kiểm tra yêu cầu',
        'Đăng ký thi ECBA — chứng chỉ BA fresher quốc tế của IIBA',
        'Làm portfolio 2-3 case study đăng GitHub / LinkedIn',
        'Apply vị trí Mid BA — mục tiêu lương 18-25 tr/tháng',
      ],
    },
  ];

  return (
    <ContentSlide
      eyebrow="Lộ trình tự học fresher → mid"
      title="12 tháng tới — bạn cần làm gì mỗi quý"
      pageNumber={14}
      totalPages={15}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {phases.map((p, i) => (
          <motion.div
            key={p.months}
            variants={fadeUp}
            className={`rounded-2xl border-2 bg-gradient-to-br ${p.tone} p-7`}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${p.badge} font-bold text-xl mb-5`}>
              0{i + 1}
            </div>
            <div className="text-xl font-bold text-neutral-500 uppercase tracking-wider mb-1">
              {p.months}
            </div>
            <div className="font-display text-3xl font-bold text-neutral-900 leading-tight mb-5">
              {p.level}
            </div>
            <ul className="space-y-3">
              {p.goals.map((g) => (
                <li key={g} className="flex items-start gap-3 text-xl text-neutral-700 leading-relaxed">
                  <CheckCircle2 size={22} strokeWidth={2.4} className="text-brand-600 shrink-0 mt-1" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 15: Closing ----- */
export function Slide15Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 2"
      statement="BA không cần biết tất cả — chỉ cần biết mình thiếu cái gì, và biết dùng AI để học nhanh hơn người khác 5 lần."
      attribution="Buổi 3: Quy trình phân tích thiết kế — vòng đời requirement"
    />
  );
}

/* ----- registry ----- */
export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-matrix', Component: Slide04Section1 },
  { id: 'skill-matrix', Component: Slide05SkillMatrix },
  { id: 'section-hard', Component: Slide06Section2 },
  { id: 'hard-skills', Component: Slide07HardSkills },
  { id: 'tools', Component: Slide08Tools },
  { id: 'section-soft', Component: Slide09Section3 },
  { id: 'soft-skills', Component: Slide10SoftSkills },
  { id: 'section-knowledge', Component: Slide11Section4 },
  { id: 'knowledge-areas', Component: Slide12KnowledgeAreas },
  { id: 'ai-prompts', Component: Slide13AIPrompts },
  { id: 'roadmap', Component: Slide14Roadmap },
  { id: 'closing', Component: Slide15Closing },
];
