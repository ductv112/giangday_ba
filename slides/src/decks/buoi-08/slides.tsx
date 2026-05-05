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
  MessagesSquare,
  CheckCircle2,
  Calendar,
  Mail,
  Video,
  Phone,
  Sparkles,
  Bot,
  Users,
  Eye,
  PenLine,
  ClipboardCheck,
  AlertTriangle,
  Mic,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 8 — TRAO ĐỔI THÔNG TIN & KIỂM TRA YÊU CẦU
 * ============================================================ */

export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 08 · Khoá Ready for BA"
      title={'Trao đổi thông tin\n& kiểm tra yêu cầu'}
      subtitle="BA = cầu nối — mỗi ngày trao đổi với 5+ vai trò khác nhau. Validate giúp tránh 'code xong 1 tháng mới phát hiện sai yêu cầu'."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'Communication + Validation' },
        { label: 'Mức độ', value: 'Practice' },
      ]}
    />
  );
}

export function Slide02Hook() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white flex items-center px-32">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
      <motion.div className="grid grid-cols-[1fr_1fr] gap-20 items-center w-full" variants={stagger} initial="hidden" animate="show">
        <motion.div variants={fadeUp}>
          <div className="text-brand-600 text-xl font-bold uppercase tracking-[0.3em] mb-7">2 việc chiếm 60% thời gian BA</div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            Sau khi viết xong tài liệu — BA <span className="text-brand-600">trao đổi</span> và <span className="text-brand-600">kiểm tra</span> nhiều hơn viết.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            Khách hàng thay đổi ý mỗi tuần. Dev hiểu sai 10% yêu cầu. QA cần spec rõ. <span className="font-semibold text-neutral-800">BA là người gắn kết tất cả</span>.
          </p>
          <div className="mt-9 text-xl text-neutral-400">Khảo sát BA Hiring Vietnam 2026</div>
        </motion.div>
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="60%" label="Thời gian BA dành cho trao đổi + validate" accent />
          <StatCard value="5+" label="Vai trò BA trao đổi mỗi ngày" />
          <StatCard value="5x" label="Phát hiện sai sớm tiết kiệm so với code xong mới sửa" />
          <StatCard value="100%" label="Yêu cầu phải validate trước dev" accent />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Slide03Agenda() {
  return (
    <ContentSlide eyebrow="Lộ trình buổi học" title="Hôm nay đi qua 3 phần" pageNumber={3} totalPages={15}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-6 mt-2">
        <Card icon={<MessagesSquare size={26} strokeWidth={2.4} />} title="1. Trao đổi thông tin">
          Luồng giao tiếp BA + 5 hình thức + bí quyết chọn kênh phù hợp.
        </Card>
        <Card icon={<CheckCircle2 size={26} strokeWidth={2.4} />} title="2. Kiểm tra yêu cầu">
          5 kỹ thuật validate + checklist 10 tiêu chí trước khi bàn giao dev.
        </Card>
        <Card icon={<Calendar size={26} strokeWidth={2.4} />} title="3. Quản lý meeting">
          4 loại meeting BA chủ trì + 6 quy tắc chạy meeting hiệu quả.
        </Card>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-10 flex items-center gap-3 text-xl text-neutral-500">
        <Sparkles size={22} className="text-brand-600" />
        Cuối buổi: bạn dùng AI viết minutes + summary cuộc họp trong 30 giây.
      </motion.div>
    </ContentSlide>
  );
}

export function Slide04Section1() {
  return <SectionSlide number="01" title="Trao đổi thông tin của BA" caption="Luồng giao tiếp xuyên suốt + 5 hình thức + chọn kênh phù hợp." />;
}

export function Slide05CommFlow() {
  const stakeholders = [
    { name: 'Khách hàng / Sponsor', icon: <Users size={26} strokeWidth={2.4} />, what: 'Yêu cầu, ưu tiên, sign-off', freq: 'Tuần 1-2 lần', tone: 'brand' },
    { name: 'Dev Team', icon: <PenLine size={26} strokeWidth={2.4} />, what: 'Spec chi tiết, gỡ vướng, validate', freq: 'Hàng ngày', tone: 'sky' },
    { name: 'QA / Tester', icon: <ClipboardCheck size={26} strokeWidth={2.4} />, what: 'Test scenarios, edge cases', freq: 'Trước/trong sprint', tone: 'emerald' },
    { name: 'PM / Scrum Master', icon: <Calendar size={26} strokeWidth={2.4} />, what: 'Tiến độ, rủi ro, blockers', freq: 'Hàng ngày (stand-up)', tone: 'amber' },
    { name: 'UI / UX Designer', icon: <Eye size={26} strokeWidth={2.4} />, what: 'Wireframe, flow, validate UX', freq: 'Theo phase', tone: 'purple' },
    { name: 'End User', icon: <Mic size={26} strokeWidth={2.4} />, what: 'Feedback, demo, UAT', freq: 'Cuối sprint', tone: 'rose' },
  ];
  const tones: Record<string, { bg: string; iconBg: string }> = {
    brand: { bg: 'bg-brand-50/40 border-brand-200', iconBg: 'bg-brand-600 text-white' },
    sky: { bg: 'bg-sky-50/40 border-sky-200', iconBg: 'bg-sky-600 text-white' },
    emerald: { bg: 'bg-emerald-50/40 border-emerald-200', iconBg: 'bg-emerald-600 text-white' },
    amber: { bg: 'bg-amber-50/40 border-amber-200', iconBg: 'bg-amber-500 text-white' },
    purple: { bg: 'bg-purple-50/40 border-purple-200', iconBg: 'bg-purple-600 text-white' },
    rose: { bg: 'bg-rose-50/40 border-rose-200', iconBg: 'bg-rose-600 text-white' },
  };
  return (
    <ContentSlide eyebrow="6 vai trò BA trao đổi mỗi ngày" title="BA = trung tâm hub — giữ thông tin chảy giữa 6 phía" pageNumber={5} totalPages={15}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {stakeholders.map((s) => {
          const t = tones[s.tone];
          return (
            <motion.div key={s.name} variants={fadeUp} className={`rounded-2xl border-2 ${t.bg} p-6`}>
              <div className={`w-14 h-14 rounded-xl ${t.iconBg} flex items-center justify-center mb-4`}>{s.icon}</div>
              <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-3">{s.name}</div>
              <div className="space-y-1.5">
                <div className="text-xl text-neutral-700"><span className="font-bold">Trao đổi gì: </span>{s.what}</div>
                <div className="text-xl text-neutral-700"><span className="font-bold">Tần suất: </span>{s.freq}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide06CommChannels() {
  const channels = [
    { icon: <Video size={28} strokeWidth={2.4} />, name: 'Họp video / face-to-face', when: 'Vấn đề phức tạp, cần discuss, mâu thuẫn', avoid: 'Cập nhật routine — tốn thời gian', tone: 'brand' },
    { icon: <MessagesSquare size={28} strokeWidth={2.4} />, name: 'Chat (Slack / Teams)', when: 'Hỏi nhanh, sync nhanh, share link', avoid: 'Quyết định lớn — không có tracking', tone: 'sky' },
    { icon: <Mail size={28} strokeWidth={2.4} />, name: 'Email', when: 'Sign-off, formal, tài liệu cần lưu trữ', avoid: 'Hỏi nhanh — chậm + bị bỏ qua', tone: 'amber' },
    { icon: <Phone size={28} strokeWidth={2.4} />, name: 'Điện thoại', when: 'Khẩn cấp, không gặp được trên chat/email', avoid: 'Discuss kỹ thuật chi tiết', tone: 'emerald' },
    { icon: <PenLine size={28} strokeWidth={2.4} />, name: 'Tài liệu (Confluence/Notion)', when: 'Spec dài, knowledge base, onboard người mới', avoid: 'Thông báo gấp', tone: 'purple' },
  ];
  const tones: Record<string, { bg: string; iconBg: string }> = {
    brand: { bg: 'bg-brand-50/40 border-brand-200', iconBg: 'bg-brand-600 text-white' },
    sky: { bg: 'bg-sky-50/40 border-sky-200', iconBg: 'bg-sky-600 text-white' },
    amber: { bg: 'bg-amber-50/40 border-amber-200', iconBg: 'bg-amber-500 text-white' },
    emerald: { bg: 'bg-emerald-50/40 border-emerald-200', iconBg: 'bg-emerald-600 text-white' },
    purple: { bg: 'bg-purple-50/40 border-purple-200', iconBg: 'bg-purple-600 text-white' },
  };
  return (
    <ContentSlide eyebrow="5 hình thức trao đổi" title="Chọn đúng kênh = tránh hiểu nhầm + tiết kiệm thời gian" pageNumber={6} totalPages={15}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-5 gap-4 mt-2">
        {channels.map((c) => {
          const t = tones[c.tone];
          return (
            <motion.div key={c.name} variants={fadeUp} className={`rounded-2xl border-2 ${t.bg} p-5`}>
              <div className={`w-14 h-14 rounded-xl ${t.iconBg} flex items-center justify-center mb-4`}>{c.icon}</div>
              <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-3">{c.name}</div>
              <div className="space-y-2">
                <div className="text-xl text-emerald-700"><span className="font-bold">✓ Khi: </span>{c.when}</div>
                <div className="text-xl text-rose-700"><span className="font-bold">✗ Tránh: </span>{c.avoid}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide07Section2() {
  return <SectionSlide number="02" title="Kiểm tra yêu cầu (Validation)" caption="Validate trước dev = phát hiện sai sớm = tiết kiệm 5x công sức." />;
}

export function Slide08WhyValidate() {
  return (
    <ContentSlide eyebrow="Vì sao BẮT BUỘC validate?" title="Phát hiện sai ở giai đoạn nào tốn bao nhiêu?" pageNumber={8} totalPages={15}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-4 gap-5 mt-3">
        {[
          { phase: 'Phân tích yêu cầu', cost: '1×', color: 'from-emerald-100 to-emerald-50 border-emerald-300', text: 'text-emerald-900' },
          { phase: 'Thiết kế', cost: '5×', color: 'from-amber-100 to-amber-50 border-amber-300', text: 'text-amber-900' },
          { phase: 'Code', cost: '20×', color: 'from-orange-100 to-orange-50 border-orange-300', text: 'text-orange-900' },
          { phase: 'Sau khi go-live', cost: '100×', color: 'from-rose-100 to-rose-50 border-rose-300', text: 'text-rose-900' },
        ].map((p) => (
          <motion.div key={p.phase} variants={fadeUp} className={`rounded-2xl border-2 bg-gradient-to-br ${p.color} p-7 text-center`}>
            <div className={`font-display text-[80px] font-extrabold tabular-nums leading-none ${p.text} mb-3`}>{p.cost}</div>
            <div className={`text-xl font-bold ${p.text} mb-2`}>chi phí sửa</div>
            <div className={`text-xl ${p.text} opacity-80`}>nếu phát hiện sai ở</div>
            <div className={`font-display text-2xl font-bold ${p.text} mt-1`}>{p.phase}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-9 px-7 py-5 rounded-xl bg-neutral-900 text-white flex items-center gap-4">
        <AlertTriangle size={28} strokeWidth={2.2} className="text-brand-400 shrink-0" />
        <div className="text-xl"><span className="font-bold">Quy luật vàng:</span> 30 phút BA validate trước dev = tiết kiệm 5-10 ngày dev sửa lại sau. Không skip.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide09FiveTechniques() {
  const techs = [
    { n: '01', name: 'Review tài liệu', who: 'BA self-review + peer review', desc: 'Đọc lại 24h sau viết — phát hiện 80% lỗi rõ ràng' },
    { n: '02', name: 'Walk-through', who: 'BA trình bày với dev/QA', desc: 'Đi qua từng phần spec, dev hỏi → BA giải thích → fix mơ hồ' },
    { n: '03', name: 'Demo / Prototype', who: 'BA show wireframe/prototype với khách', desc: 'Khách thấy được giao diện → feedback sớm trước khi code' },
    { n: '04', name: 'UAT (User Acceptance Test)', who: 'End user test sản phẩm thật', desc: 'Sau khi dev xong, người dùng cuối test → confirm đúng yêu cầu' },
    { n: '05', name: 'Sign-off', who: 'Sponsor / Khách hàng ký duyệt', desc: 'Văn bản chính thức xác nhận yêu cầu — bảo vệ BA khỏi tranh chấp', accent: true },
  ];
  return (
    <ContentSlide eyebrow="5 kỹ thuật validate yêu cầu" title="Mỗi giai đoạn = 1 kỹ thuật phù hợp" pageNumber={9} totalPages={15}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-5 gap-4 mt-2">
        {techs.map((t) => (
          <motion.div key={t.n} variants={fadeUp} className={`rounded-2xl border-2 p-6 ${t.accent ? 'bg-gradient-to-br from-brand-600 to-brand-700 border-brand-700 text-white shadow-xl shadow-brand-600/25' : 'bg-white border-neutral-200'}`}>
            <div className={`text-xl font-bold mb-1 ${t.accent ? 'text-white/80' : 'text-brand-600'}`}>{t.n}</div>
            <div className={`font-display text-2xl font-bold leading-tight mb-3 ${t.accent ? 'text-white' : 'text-neutral-900'}`}>{t.name}</div>
            <div className={`text-xl mb-3 ${t.accent ? 'text-white/85' : 'text-brand-700'} font-semibold`}>{t.who}</div>
            <div className={`text-xl leading-relaxed ${t.accent ? 'text-white/90' : 'text-neutral-700'}`}>{t.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide10Checklist() {
  const items = [
    'Có ID rõ cho mỗi yêu cầu (FR-001, NFR-002…)?',
    'Mỗi câu = 1 yêu cầu, không nhồi 2-3 thứ?',
    'Tránh từ mơ hồ ("nhanh", "thân thiện") — đo bằng số cụ thể?',
    'Có Acceptance Criteria Given-When-Then cho mỗi US?',
    'Yêu cầu phi chức năng (NFR) đầy đủ: Performance, Security, Usability?',
    'Có tham chiếu wireframe / mockup / ERD?',
    'Glossary đã định nghĩa thuật ngữ chuyên ngành?',
    'Versioning + change log đã update?',
    'Đã review với ít nhất 1 BA khác (peer review)?',
    'Đã có sign-off từ stakeholder cấp quyết định?',
  ];
  return (
    <ContentSlide eyebrow="Checklist 10 tiêu chí trước bàn giao dev" title="Tích đủ 10 = SRS sẵn sàng cho dev" pageNumber={10} totalPages={15}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-4 mt-2">
        {items.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="rounded-xl border-2 border-neutral-200 bg-white p-5 flex items-start gap-4 hover:border-brand-400 transition-all">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-display font-bold text-2xl">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1 text-xl text-neutral-800 leading-relaxed">{item}</div>
            <div className="shrink-0 w-7 h-7 rounded-md border-2 border-neutral-300 mt-1" />
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide11Section3() {
  return <SectionSlide number="03" title="Quản lý meeting — kỹ năng cốt lõi" caption="BA chủ trì 4 loại meeting + 6 quy tắc chạy hiệu quả." />;
}

export function Slide12FourMeetings() {
  const meetings = [
    { name: 'Elicitation Meeting', vi: 'Họp khơi gợi yêu cầu', who: 'BA + Stakeholder', dur: '60-90 phút', goal: 'Lấy yêu cầu mới, đào sâu pain points' },
    { name: 'Walk-through', vi: 'Họp đi qua tài liệu', who: 'BA + Dev + QA', dur: '45-60 phút', goal: 'Validate spec, dev hỏi - BA giải thích' },
    { name: 'Sprint Review / Demo', vi: 'Demo sản phẩm', who: 'Cả team + Khách', dur: '30-60 phút', goal: 'Show kết quả sprint, lấy feedback' },
    { name: 'Change Request Review', vi: 'Họp duyệt thay đổi', who: 'BA + Sponsor + Tech Lead', dur: '30-45 phút', goal: 'Phân tích impact, quyết định approve/reject' },
  ];
  return (
    <ContentSlide eyebrow="4 loại meeting BA chủ trì" title="Mỗi loại có mục tiêu + format khác nhau" pageNumber={12} totalPages={15}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-2">
        {meetings.map((m, i) => (
          <motion.div key={m.name} variants={fadeUp} className="rounded-2xl border-2 border-neutral-200 bg-white p-7">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-brand-600 text-white flex items-center justify-center font-display font-bold text-2xl">0{i + 1}</div>
              <div>
                <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">{m.name}</div>
                <div className="text-xl text-brand-700 italic">{m.vi}</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xl text-neutral-700"><span className="font-bold">Tham gia: </span>{m.who}</div>
              <div className="text-xl text-neutral-700"><span className="font-bold">Thời lượng: </span>{m.dur}</div>
              <div className="text-xl text-neutral-700"><span className="font-bold">Mục tiêu: </span>{m.goal}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide13MeetingRules() {
  const rules = [
    { n: '1', title: 'Có agenda gửi trước', desc: 'Ai, mục tiêu, thời lượng, materials cần đọc' },
    { n: '2', title: 'Đúng giờ (cả vào + ra)', desc: 'Bắt đầu đúng giờ. Hết giờ = dừng, không "kéo dài 5 phút"' },
    { n: '3', title: 'Mỗi người được nói', desc: 'Đừng để 1 người át. BA điều phối, mời người im lặng phát biểu' },
    { n: '4', title: 'Chốt action item rõ', desc: 'Cuối meeting: Ai làm gì, deadline khi nào, gửi qua kênh gì' },
    { n: '5', title: 'Gửi minutes trong 24h', desc: 'Tóm tắt + action items → email cho tất cả tham gia (có AI hỗ trợ)' },
    { n: '6', title: 'Không họp nếu không cần', desc: 'Email/chat đủ → không họp. Mỗi giờ họp tốn 1 giờ × số người' },
  ];
  return (
    <ContentSlide eyebrow="6 quy tắc chạy meeting hiệu quả" title="Áp dụng đủ = meeting ngắn hơn, kết quả cao hơn" pageNumber={13} totalPages={15}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {rules.map((r) => (
          <motion.div key={r.n} variants={fadeUp} className="rounded-2xl border-2 border-neutral-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 text-white flex items-center justify-center font-display font-bold text-2xl shadow-lg shadow-brand-600/30">
                {r.n}
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-2">{r.title}</div>
                <div className="text-xl text-neutral-700 leading-relaxed">{r.desc}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide14AIDemo() {
  const prompts = [
    { use: 'Sinh agenda meeting', tool: 'Claude Code', prompt: '"Tôi sắp họp với 3 stakeholder về thay đổi yêu cầu phân hệ Kho IT. Sinh agenda 60 phút gồm: warm-up 5p, recap thay đổi 10p, impact analysis 25p, decision 15p, next step 5p — kèm câu hỏi mỗi mục."' },
    { use: 'Tóm tắt meeting → minutes', tool: 'Claude / NotebookLM', prompt: '"Đây là transcript meeting 60 phút (đính kèm). Tóm tắt thành minutes format: Tham gia, Mục tiêu, Decision, Action items (Ai/Làm gì/Deadline), Next meeting."' },
    { use: 'Sinh email follow-up', tool: 'Claude Code', prompt: '"Dựa trên minutes vừa rồi, soạn email follow-up gửi cho tất cả tham gia: cảm ơn, recap 3 decision, list action items với owner + deadline, link tài liệu. Tone: chuyên nghiệp, ngắn gọn."' },
    { use: 'Kiểm tra SRS theo checklist 10', tool: 'NotebookLM', prompt: '"Upload SRS draft + checklist 10 tiêu chí (slide 10). Cho biết tiêu chí nào đã đạt, chưa đạt, gợi ý fix cụ thể. Output table 3 cột (Tiêu chí / Status / Note)."' },
  ];
  return (
    <ContentSlide eyebrow="AI applied — meeting + validation tự động" title="4 prompt giúp BA tiết kiệm 50% thời gian giấy tờ" pageNumber={14} totalPages={15}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-2">
        {prompts.map((p) => (
          <motion.div key={p.use} variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0"><Sparkles size={22} strokeWidth={2.4} /></div>
              <div className="flex-1">
                <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">{p.use}</div>
                <div className="text-xl text-brand-700 font-semibold mt-1">{p.tool}</div>
              </div>
            </div>
            <div className="rounded-xl bg-neutral-950 text-neutral-200 p-4 text-xl leading-relaxed font-mono">{p.prompt}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white flex items-center gap-4">
        <Bot size={28} strokeWidth={2.2} className="shrink-0" />
        <div className="text-xl"><span className="font-bold">Demo live:</span> Record meeting trên Zoom/Teams → upload transcript vào NotebookLM → minutes hoàn chỉnh trong 30 giây.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide15Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 08"
      statement="BA viết tài liệu giỏi mà không validate = tài liệu chết. BA validate sớm = tiết kiệm 5-10× công sức cho dev."
      attribution="Buổi 9: Quản lý yêu cầu — khi yêu cầu thay đổi sau khi đã đóng gói"
    />
  );
}

export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-comm', Component: Slide04Section1 },
  { id: 'comm-flow', Component: Slide05CommFlow },
  { id: 'channels', Component: Slide06CommChannels },
  { id: 'section-validate', Component: Slide07Section2 },
  { id: 'why-validate', Component: Slide08WhyValidate },
  { id: 'five-techniques', Component: Slide09FiveTechniques },
  { id: 'checklist-10', Component: Slide10Checklist },
  { id: 'section-meeting', Component: Slide11Section3 },
  { id: 'four-meetings', Component: Slide12FourMeetings },
  { id: 'meeting-rules', Component: Slide13MeetingRules },
  { id: 'ai-demo', Component: Slide14AIDemo },
  { id: 'closing', Component: Slide15Closing },
];
