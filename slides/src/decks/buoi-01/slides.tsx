import { motion } from 'framer-motion';
import {
  CoverSlide,
  SectionSlide,
  ContentSlide,
  StatementSlide,
  fadeUp,
  stagger,
} from '@/layouts/Layouts';
import { Card, StatCard, Pill, TwoColumn } from '@/components/Bits';
import {
  Users,
  Briefcase,
  Code2,
  Target,
  Lightbulb,
  Map,
  Layers,
  FileText,
  Workflow,
  Wrench,
  GraduationCap,
  Building2,
  Sparkles,
  ArrowRight,
  Bot,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 1 — GIỚI THIỆU CHUNG
 *  Slide 1: Cover
 * ============================================================ */
export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 01 · Khoá Ready for BA"
      title={'Giới thiệu chung\nvề nghề Business Analyst'}
      subtitle="Bắt đầu hành trình BA: từ dự án phần mềm, vai trò BA, lộ trình nghề, đến những sản phẩm đầu ra bạn sẽ làm mỗi ngày."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Phong cách', value: 'BA thực chiến + AI' },
        { label: 'Mức độ', value: 'Foundation' },
      ]}
    />
  );
}

/* ----- Slide 2: Hook statement ----- */
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
            Vì sao có nghề BA?
          </div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            Chỉ <span className="text-brand-600">16.2%</span> dự án IT hoàn thành đúng hạn và đúng ngân sách.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            <span className="font-semibold text-neutral-800">56% mâu thuẫn</span> trong các dự án công nghệ
            xuất phát từ <span className="text-brand-600 font-semibold">lỗi đặt đề bài</span> — đó chính là nơi BA xuất hiện.
          </p>
          <div className="mt-9 text-xl text-neutral-400">Nguồn: IIBA — International Institute of Business Analysis</div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="16.2%" label="Dự án đúng hạn & ngân sách" accent />
          <StatCard value="52.7%" label="Dự án vượt ngân sách ban đầu" />
          <StatCard value="56%" label="Mâu thuẫn từ khâu đặt đề bài" />
          <StatCard value="100%" label="Cần một người làm BA tốt" accent />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ----- Slide 3: Agenda ----- */
export function Slide03Agenda() {
  return (
    <ContentSlide eyebrow="Lộ trình buổi học" title="Hôm nay chúng ta sẽ đi qua 4 phần" pageNumber={3} totalPages={14}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-6 mt-2">
        <Card icon={<Building2 size={26} strokeWidth={2.4} />} title="1. Dự án phần mềm là gì?">
          Vòng đời, các bên liên quan, vì sao BA là mắt xích quan trọng.
        </Card>
        <Card icon={<Briefcase size={26} strokeWidth={2.4} />} title="2. Vai trò của BA">
          Cầu nối Business ↔ Tech. BA làm gì mỗi ngày trong dự án thực tế.
        </Card>
        <Card icon={<Map size={26} strokeWidth={2.4} />} title="3. Lộ trình nghề nghiệp">
          Junior → Mid → Senior → Lead. Mất bao lâu, học gì ở mỗi bậc.
        </Card>
        <Card icon={<FileText size={26} strokeWidth={2.4} />} title="4. Sản phẩm đầu ra của BA">
          BRD, SRS, Use Case, User Story, Wireframe — và AI giúp bạn ra sao.
        </Card>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-10 flex items-center gap-3 text-xl text-neutral-500">
        <Sparkles size={22} className="text-brand-600" />
        Phong cách <span className="font-semibold text-neutral-800">BA thực chiến + AI applied</span> — học rồi làm được, không lý thuyết suông.
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 4: Section divider 1 ----- */
export function Slide04Section1() {
  return (
    <SectionSlide
      number="01"
      title="Dự án phần mềm là gì?"
      caption="Trước khi nói về BA, hãy hiểu sân chơi của BA — môi trường mà BA sẽ làm việc mỗi ngày."
    />
  );
}

/* ----- Slide 5: SDLC + stakeholders ----- */
export function Slide05Project() {
  const phases = [
    { step: '01', title: 'Khởi tạo', desc: 'Ý tưởng, mục tiêu, ROI' },
    { step: '02', title: 'Phân tích', desc: 'Yêu cầu, đề bài', active: true },
    { step: '03', title: 'Thiết kế', desc: 'Giao diện, kiến trúc' },
    { step: '04', title: 'Phát triển', desc: 'Code, build' },
    { step: '05', title: 'Kiểm thử', desc: 'QA, UAT' },
    { step: '06', title: 'Triển khai', desc: 'Deploy, vận hành' },
  ];
  return (
    <ContentSlide
      eyebrow="Vòng đời dự án phần mềm"
      title="6 giai đoạn — và BA hiện diện ở mọi khâu"
      pageNumber={5}
      totalPages={14}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-6 gap-3 mt-4">
        {phases.map((p) => (
          <motion.div
            key={p.step}
            variants={fadeUp}
            className={`relative rounded-xl p-5 border-2 ${
              p.active
                ? 'bg-gradient-to-br from-brand-600 to-brand-700 border-brand-700 text-white shadow-xl shadow-brand-600/25'
                : 'bg-white border-neutral-200 text-neutral-700'
            }`}
          >
            <div
              className={`text-xl font-bold mb-2 ${
                p.active ? 'text-white/80' : 'text-brand-600'
              }`}
            >
              {p.step}
            </div>
            <div className={`font-bold text-xl mb-1.5 ${p.active ? 'text-white' : 'text-neutral-900'}`}>
              {p.title}
            </div>
            <div className={`text-xl leading-relaxed ${p.active ? 'text-white/85' : 'text-neutral-500'}`}>
              {p.desc}
            </div>
            {p.active && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-white text-brand-700 text-xl font-bold tracking-wider uppercase shadow">
                BA bắt đầu
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-10">
        <div className="text-xl font-bold uppercase tracking-wider text-neutral-500 mb-4">
          Các vai trò trong 1 dự án phần mềm
        </div>
        <div className="flex flex-wrap gap-2.5">
          {[
            'Khách hàng / Stakeholder',
            'Project Manager (PM)',
            'Business Analyst (BA)',
            'UX / UI Designer',
            'Developer (BE/FE/Mobile)',
            'QA / Tester',
            'DevOps',
            'Vận hành / Support',
          ].map((r, i) => (
            <Pill key={r} tone={i === 2 ? 'brand' : 'ink'}>
              {r}
            </Pill>
          ))}
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 6: Section divider 2 ----- */
export function Slide06Section2() {
  return (
    <SectionSlide
      number="02"
      title="Vai trò của Business Analyst"
      caption="BA không chỉ ngồi viết tài liệu — BA là cầu nối quyết định dự án thành hay bại."
    />
  );
}

/* ----- Slide 7: BA là ai ----- */
export function Slide07BAIsBridge() {
  return (
    <ContentSlide
      eyebrow="BA là ai?"
      title="Cầu nối giữa Business và Technology"
      pageNumber={7}
      totalPages={14}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center mt-4"
      >
        {/* Business side */}
        <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 p-9">
          <div className="w-16 h-16 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-5">
            <Briefcase size={32} strokeWidth={2.4} />
          </div>
          <div className="text-amber-900 text-3xl font-bold mb-3">BUSINESS</div>
          <div className="text-amber-800/85 text-xl leading-relaxed">
            Khách hàng, sếp, người dùng cuối — biết <span className="font-bold">muốn gì</span>, nhưng nói bằng <span className="font-bold">ngôn ngữ kinh doanh</span>.
          </div>
        </motion.div>

        {/* BA bridge */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-2xl shadow-brand-600/30">
            <Users size={44} strokeWidth={2.2} />
          </div>
          <div className="font-display font-extrabold text-brand-700 text-3xl tracking-tight">BA</div>
          <div className="flex items-center gap-1.5 text-brand-600 text-xl font-bold uppercase tracking-wider">
            <ArrowRight size={16} />
            Translate
            <ArrowRight size={16} />
          </div>
        </motion.div>

        {/* Tech side */}
        <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100/50 border border-sky-200 p-9">
          <div className="w-16 h-16 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-5">
            <Code2 size={32} strokeWidth={2.4} />
          </div>
          <div className="text-sky-900 text-3xl font-bold mb-3">TECHNOLOGY</div>
          <div className="text-sky-800/85 text-xl leading-relaxed">
            Dev, QA, Designer, DevOps — biết <span className="font-bold">làm thế nào</span>, nhưng cần đề bài rõ ràng <span className="font-bold">bằng ngôn ngữ kỹ thuật</span>.
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-10 px-9 py-6 rounded-xl bg-neutral-50 border-l-4 border-brand-600"
      >
        <div className="text-2xl text-neutral-700 leading-relaxed">
          <span className="font-display font-bold text-neutral-900">BA dịch ý tưởng kinh doanh thành đề bài kỹ thuật rõ ràng</span> — và ngược lại,
          giải thích giải pháp kỹ thuật cho người không biết code.
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 8: BA làm gì ----- */
export function Slide08BADoes() {
  return (
    <ContentSlide
      eyebrow="BA làm gì mỗi ngày"
      title="6 nhóm công việc cốt lõi của một BA"
      pageNumber={8}
      totalPages={14}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        <Card icon={<Lightbulb size={26} strokeWidth={2.4} />} title="Khơi gợi yêu cầu">
          Phỏng vấn stakeholder, workshop, quan sát, phân tích tài liệu — moi ra điều khách hàng thực sự cần.
        </Card>
        <Card icon={<Workflow size={26} strokeWidth={2.4} />} title="Phân tích & mô hình hoá">
          Vẽ flow nghiệp vụ, BPMN, use case, ERD — biến hỗn loạn thành cấu trúc.
        </Card>
        <Card icon={<FileText size={26} strokeWidth={2.4} />} title="Viết tài liệu yêu cầu">
          BRD, SRS, FRD, User Story — đề bài rõ ràng cho dev không hiểu sai.
        </Card>
        <Card icon={<Layers size={26} strokeWidth={2.4} />} title="Thiết kế giải pháp">
          Wireframe, mock-up, đề xuất luồng UX — phối hợp với UI/UX designer.
        </Card>
        <Card icon={<Users size={26} strokeWidth={2.4} />} title="Trao đổi & validate">
          Họp dev, demo cho khách, làm rõ yêu cầu thay đổi — không để dev code sai.
        </Card>
        <Card
          icon={<Target size={26} strokeWidth={2.4} />}
          title="Quản lý yêu cầu"
          accent
        >
          Theo dõi, ưu tiên, kiểm soát thay đổi — đảm bảo dự án đi đúng hướng.
        </Card>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 9: 3 case studies ----- */
export function Slide09CaseStudies() {
  return (
    <ContentSlide
      eyebrow="Case study xuyên suốt khoá học"
      title="3 dự án thực tế bạn sẽ làm BA xuyên 12 buổi"
      pageNumber={9}
      totalPages={14}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-3">
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7 hover:shadow-xl hover:shadow-brand-600/10 transition-shadow"
        >
          <div className="w-16 h-16 rounded-xl bg-brand-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-brand-600/30">
            <Wrench size={30} strokeWidth={2.4} />
          </div>
          <div className="text-xl font-bold uppercase tracking-wider text-brand-600 mb-2">Case 01 · B2C + B2B</div>
          <div className="font-display text-3xl font-bold text-neutral-900 mb-3 leading-tight">
            Hệ thống đặt lịch sửa chữa điện tử – điện lạnh
          </div>
          <div className="text-xl text-neutral-600 leading-relaxed mb-4">
            App bảo hành đa nền tảng: khách đặt lịch, thợ nhận việc, backoffice điều phối kho & nhân sự.
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Pill tone="brand">Mobile KH</Pill>
            <Pill tone="brand">Mobile Thợ</Pill>
            <Pill tone="brand">Web Admin</Pill>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-7 hover:shadow-xl hover:shadow-emerald-600/10 transition-shadow"
        >
          <div className="w-16 h-16 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-emerald-600/30">
            <GraduationCap size={30} strokeWidth={2.4} />
          </div>
          <div className="text-xl font-bold uppercase tracking-wider text-emerald-700 mb-2">Case 02 · EdTech</div>
          <div className="font-display text-3xl font-bold text-neutral-900 mb-3 leading-tight">
            Hệ thống điểm danh lớp học
          </div>
          <div className="text-xl text-neutral-600 leading-relaxed mb-4">
            Web quản trị cho trường + app mobile cho học viên điểm danh QR/GPS, báo cáo theo lớp.
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Pill tone="emerald">Web Admin</Pill>
            <Pill tone="emerald">Mobile HV</Pill>
            <Pill tone="emerald">Reporting</Pill>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-2xl border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-white p-7 hover:shadow-xl hover:shadow-sky-600/10 transition-shadow"
        >
          <div className="w-16 h-16 rounded-xl bg-sky-700 text-white flex items-center justify-center mb-5 shadow-lg shadow-sky-700/30">
            <Building2 size={30} strokeWidth={2.4} />
          </div>
          <div className="text-xl font-bold uppercase tracking-wider text-sky-700 mb-2">Case 03 · ERP doanh nghiệp</div>
          <div className="font-display text-3xl font-bold text-neutral-900 mb-3 leading-tight">
            ERP doanh nghiệp đa phân hệ
          </div>
          <div className="text-xl text-neutral-600 leading-relaxed mb-4">
            Hệ thống quản trị doanh nghiệp đa module: Kho, Tài chính, Sản xuất, Bảo trì, Hợp đồng… Prototype thực tế sẽ giới thiệu chi tiết ở các buổi sau.
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Pill tone="ink">Multi-module</Pill>
            <Pill tone="ink">SSO</Pill>
            <Pill tone="ink">Reporting</Pill>
          </div>
        </motion.div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 10: Section divider 3 ----- */
export function Slide10Section3() {
  return (
    <SectionSlide
      number="03"
      title="Lộ trình nghề Business Analyst"
      caption="Từ Fresher đến Lead — bao lâu, học gì, mức lương ra sao tại Việt Nam."
    />
  );
}

/* ----- Slide 11: Career path timeline ----- */
export function Slide11CareerPath() {
  return (
    <ContentSlide
      eyebrow="Lộ trình nghề BA tại Việt Nam"
      title="4 bậc thang — bạn đang ở đâu, sẽ đi đâu?"
      pageNumber={11}
      totalPages={14}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="mt-4 grid grid-cols-4 gap-4">
        {[
          {
            level: 'Fresher / Junior',
            years: '0 – 1.5 năm',
            salary: '10 – 15 tr',
            focus: 'Hỗ trợ phân tích, viết user story, vẽ flow đơn giản, ghi chép họp.',
            colorClass: 'from-neutral-50 to-neutral-100 border-neutral-200',
            badgeClass: 'bg-neutral-700 text-white',
          },
          {
            level: 'Middle BA',
            years: '1.5 – 3 năm',
            salary: '18 – 30 tr',
            focus: 'Chủ trì 1 phân hệ, làm việc trực tiếp với khách, viết SRS độc lập.',
            colorClass: 'from-amber-50 to-amber-100/50 border-amber-200',
            badgeClass: 'bg-amber-600 text-white',
          },
          {
            level: 'Senior BA',
            years: '3 – 5 năm',
            salary: '30 – 50 tr',
            focus: 'Lead module lớn, kiến trúc nghiệp vụ, mentor junior, định hướng giải pháp.',
            colorClass: 'from-brand-50 to-brand-100/40 border-brand-200',
            badgeClass: 'bg-brand-600 text-white',
          },
          {
            level: 'Lead / BA Manager',
            years: '5+ năm',
            salary: '50 – 80+ tr',
            focus: 'Quản lý team BA, làm việc cấp C-level, chiến lược sản phẩm doanh nghiệp.',
            colorClass: 'from-purple-50 to-purple-100/40 border-purple-200',
            badgeClass: 'bg-purple-700 text-white',
          },
        ].map((s, i) => (
          <motion.div
            key={s.level}
            variants={fadeUp}
            className={`rounded-2xl border-2 bg-gradient-to-br ${s.colorClass} p-7 relative`}
          >
            <div className={`inline-flex items-center justify-center w-11 h-11 rounded-lg ${s.badgeClass} font-bold text-xl mb-4`}>
              0{i + 1}
            </div>
            <div className="font-display font-bold text-2xl text-neutral-900 leading-tight mb-1.5">
              {s.level}
            </div>
            <div className="text-xl font-semibold text-neutral-500 mb-3">{s.years}</div>
            <div className="text-3xl font-display font-extrabold text-neutral-900 mb-4 tabular-nums">
              {s.salary}<span className="text-xl font-medium text-neutral-500"> /tháng</span>
            </div>
            <div className="text-xl text-neutral-700 leading-relaxed">{s.focus}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-9 px-7 py-5 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3 text-xl text-amber-900"
      >
        <Sparkles size={22} className="text-amber-600 shrink-0" />
        <span>
          <span className="font-bold">Mức lương tham khảo</span> cho thị trường Hà Nội/HCM 2026 — sẽ chênh lệch theo công ty product / outsource / foreign.
        </span>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 12: Sản phẩm đầu ra ----- */
export function Slide12Outputs() {
  const outputs = [
    { name: 'BRD', full: 'Business Requirements Document', desc: 'Tài liệu yêu cầu nghiệp vụ cấp cao' },
    { name: 'SRS', full: 'Software Requirements Spec', desc: 'Đặc tả phần mềm chi tiết' },
    { name: 'FRD', full: 'Functional Requirements Doc', desc: 'Đặc tả chức năng theo module' },
    { name: 'User Story', full: 'Câu chuyện người dùng (Agile)', desc: 'As a… I want… so that…' },
    { name: 'Use Case', full: 'Ca sử dụng + Diagram', desc: 'Tương tác actor ↔ hệ thống' },
    { name: 'BPMN', full: 'Sơ đồ quy trình nghiệp vụ', desc: 'Flow công việc end-to-end' },
    { name: 'Wireframe', full: 'Bản vẽ giao diện thô', desc: 'Layout + UX flow' },
    { name: 'Test Cases', full: 'Bộ kịch bản kiểm thử', desc: 'Hỗ trợ QA validate' },
  ];

  return (
    <ContentSlide
      eyebrow="Mẫu sản phẩm đầu ra"
      title="8 deliverable bạn sẽ làm — và AI rút ngắn 50% thời gian"
      pageNumber={12}
      totalPages={14}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-4 gap-4 mt-3">
        {outputs.map((o, i) => (
          <motion.div
            key={o.name}
            variants={fadeUp}
            className="group rounded-xl border border-neutral-200 bg-white p-6 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-600/10 transition-all"
          >
            <div className="flex items-baseline justify-between mb-2.5">
              <div className="font-display font-extrabold text-3xl text-brand-600 group-hover:text-brand-700 tracking-tight">
                {o.name}
              </div>
              <div className="text-xl font-bold text-neutral-400 tabular-nums">0{i + 1}</div>
            </div>
            <div className="text-xl font-semibold text-neutral-700 mb-2 leading-snug">{o.full}</div>
            <div className="text-xl text-neutral-500 leading-relaxed">{o.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-9 flex items-center gap-4 px-7 py-5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white"
      >
        <Bot size={32} strokeWidth={2.2} />
        <div className="text-xl">
          <span className="font-bold">Mỗi deliverable đều có template + AI prompt sẵn</span> — chúng ta sẽ làm thật cho cả 3 case study từ Buổi 4 trở đi.
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 13: AI tools ----- */
export function Slide13AIStack() {
  return (
    <ContentSlide
      eyebrow="Phong cách dạy của khoá"
      title="Bộ công cụ AI sẽ dùng xuyên suốt 12 buổi"
      pageNumber={13}
      totalPages={14}
    >
      <TwoColumn
        ratio="3:2"
        left={
          <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5">
            <Card icon={<Sparkles size={26} />} title="Claude Code (VS Code)" accent>
              Tool chính. Phân tích, viết tài liệu, design UI, prototype, build product, viết tool — tất cả trong VS Code.
            </Card>
            <Card icon={<Bot size={26} />} title="ChatGPT · Gemini · NotebookLM">
              Brainstorm, research, tổng hợp tài liệu. NotebookLM còn có thể làm slide từ nguồn.
            </Card>
            <Card icon={<Layers size={26} />} title="v0.dev · Figma Make">
              Sinh giao diện nhanh từ mô tả — BA prototype không cần biết code.
            </Card>
            <Card icon={<Workflow size={26} />} title="Mermaid · PlantUML">
              Vẽ flow chart, BPMN, sequence diagram chỉ bằng text — git-friendly.
            </Card>
          </motion.div>
        }
        right={
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="rounded-2xl bg-neutral-950 text-white p-8 h-full flex flex-col justify-center">
            <div className="text-xl font-bold uppercase tracking-[0.25em] text-brand-400 mb-4">
              Triết lý
            </div>
            <div className="font-display text-[40px] font-bold leading-[1.15] mb-6">
              BA <span className="text-brand-400">không AI</span> sẽ bị thay bởi BA <span className="text-brand-400">biết AI</span>.
            </div>
            <div className="text-xl text-white/75 leading-relaxed mb-7">
              Mỗi buổi học, mình sẽ cho ví dụ cụ thể — <span className="text-white font-semibold">prompt nào, ở bước nào, output ra sao</span> — copy về dùng được ngay.
            </div>
            <div className="flex items-center gap-2 text-xl text-white/55">
              <ArrowRight size={18} className="text-brand-400" />
              Demo live trong từng buổi
            </div>
          </motion.div>
        }
      />
    </ContentSlide>
  );
}

/* ----- Slide 14: Closing ----- */
export function Slide14Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 1"
      statement="Bạn không học để biết BA — bạn học để làm được BA, và làm tốt hơn nhờ AI."
      attribution="Buổi 2: Kỹ năng & kiến thức cần thiết — Ma trận năng lực BA"
    />
  );
}

/* ----- registry ----- */
export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-1', Component: Slide04Section1 },
  { id: 'project-lifecycle', Component: Slide05Project },
  { id: 'section-2', Component: Slide06Section2 },
  { id: 'ba-bridge', Component: Slide07BAIsBridge },
  { id: 'ba-does', Component: Slide08BADoes },
  { id: 'case-studies', Component: Slide09CaseStudies },
  { id: 'section-3', Component: Slide10Section3 },
  { id: 'career-path', Component: Slide11CareerPath },
  { id: 'outputs', Component: Slide12Outputs },
  { id: 'ai-stack', Component: Slide13AIStack },
  { id: 'closing', Component: Slide14Closing },
];
