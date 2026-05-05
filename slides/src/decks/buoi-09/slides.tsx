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
  GitBranch,
  RefreshCw,
  Filter,
  Link2,
  Sparkles,
  Bot,
  AlertTriangle,
  ArrowRight,
  Layers,
  Repeat,
  Crown,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 9 — QUẢN LÝ YÊU CẦU
 * ============================================================ */

export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 09 · Khoá Ready for BA"
      title={'Quản lý\nyêu cầu'}
      subtitle="Yêu cầu thay đổi mỗi tuần — không quản lý = chaos. Học cách kiểm soát thay đổi, ưu tiên, và truy vết yêu cầu xuyên suốt vòng đời dự án."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'Change · Priority · Trace' },
        { label: 'Mức độ', value: 'Process' },
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
          <div className="text-brand-600 text-xl font-bold uppercase tracking-[0.3em] mb-7">Hiện tượng "scope creep"</div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            <span className="text-brand-600">52%</span> dự án IT <span className="text-brand-600">vượt budget</span> vì quản lý thay đổi yêu cầu kém.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            Khách thay đổi ý mỗi tuần là <span className="font-semibold text-neutral-800">bình thường</span> — không có quy trình kiểm soát mới là <span className="font-semibold text-neutral-800">bất thường</span>.
          </p>
          <div className="mt-9 text-xl text-neutral-400">Nguồn: PMI Pulse of the Profession 2026</div>
        </motion.div>
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="52%" label="Dự án vượt budget vì scope creep" accent />
          <StatCard value="3 thứ" label="BA cần quản lý: Change · Priority · Trace" />
          <StatCard value="MoSCoW" label="Phương pháp ưu tiên phổ biến nhất" />
          <StatCard value="100%" label="Yêu cầu phải traceable từ Business → Test" accent />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Slide03Agenda() {
  return (
    <ContentSlide eyebrow="Lộ trình buổi học" title="Hôm nay đi qua 4 phần" pageNumber={3} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-6 mt-2">
        <Card icon={<RefreshCw size={26} strokeWidth={2.4} />} title="1. Quy trình quản lý yêu cầu">
          Vòng đời yêu cầu chi tiết + tracking với Jira/Confluence.
        </Card>
        <Card icon={<GitBranch size={26} strokeWidth={2.4} />} title="2. Change Request">
          Quy trình xử lý thay đổi + impact analysis + approval workflow.
        </Card>
        <Card icon={<Filter size={26} strokeWidth={2.4} />} title="3. Ưu tiên (Prioritization)">
          3 phương pháp: MoSCoW · Kano · RICE — chọn cái nào khi nào.
        </Card>
        <Card icon={<Link2 size={26} strokeWidth={2.4} />} title="4. Traceability + AI + Demo">
          Bảng truy vết Business → Test + AI hỗ trợ impact analysis tự động.
        </Card>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-10 flex items-center gap-3 text-xl text-neutral-500">
        <Sparkles size={22} className="text-brand-600" />
        Cuối buổi: bạn xử lý được 1 change request từ A-Z trong 30 phút.
      </motion.div>
    </ContentSlide>
  );
}

export function Slide04Section1() {
  return <SectionSlide number="01" title="Quy trình quản lý yêu cầu" caption="Vòng đời mỗi yêu cầu xuyên suốt + công cụ tracking thực tế." />;
}

export function Slide05Lifecycle() {
  const stages = [
    { n: '01', title: 'Phát hiện', desc: 'Yêu cầu mới (từ khách / user feedback / business)', tool: 'Jira: Status = New' },
    { n: '02', title: 'Phân tích', desc: 'BA mô tả chi tiết + acceptance criteria', tool: 'Confluence: spec page' },
    { n: '03', title: 'Duyệt', desc: 'Sponsor + tech lead xác nhận làm', tool: 'Jira: In Review → Approved' },
    { n: '04', title: 'Lập kế hoạch', desc: 'Đưa vào sprint, estimate, assign dev', tool: 'Jira: Backlog → Sprint' },
    { n: '05', title: 'Triển khai', desc: 'Dev code, QA test, BA support', tool: 'Jira: In Progress → Done' },
    { n: '06', title: 'Validate', desc: 'Demo + UAT + sign-off', tool: 'Jira: Done → Verified' },
    { n: '07', title: 'Đóng / Bảo trì', desc: 'Closed hoặc maintenance', tool: 'Jira: Closed' },
  ];
  return (
    <ContentSlide eyebrow="Vòng đời 1 yêu cầu — chi tiết" title="7 trạng thái xuyên suốt + tool tracking ở mỗi bước" pageNumber={5} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-7 gap-2 mt-3">
        {stages.map((s, i) => (
          <motion.div key={s.n} variants={fadeUp} className="rounded-xl bg-white border-2 border-neutral-200 p-4 hover:border-brand-400 transition-all relative">
            <div className="text-xl font-bold text-brand-600 mb-2">{s.n}</div>
            <div className="font-display text-xl font-bold text-neutral-900 mb-2 leading-tight">{s.title}</div>
            <div className="text-xl text-neutral-600 leading-snug mb-3">{s.desc}</div>
            <div className="text-xl text-brand-700 font-semibold pt-2 border-t border-neutral-200">{s.tool}</div>
            {i < 6 && <ArrowRight size={18} className="absolute top-1/2 -right-2 -translate-y-1/2 text-brand-400 bg-white rounded-full" strokeWidth={2.5} />}
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-9 px-7 py-5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-4">
        <Repeat size={24} strokeWidth={2.2} className="text-rose-600 shrink-0 mt-1" />
        <div className="text-xl text-rose-900 leading-relaxed"><span className="font-bold">Không 1 chiều:</span> Yêu cầu có thể "kéo lùi" bất kỳ lúc nào (đang triển khai → khách đổi ý → quay về Phân tích). Đây là lý do cần Change Request flow (xem section 2).</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide06TrackingTool() {
  return (
    <ContentSlide eyebrow="Tool quản lý yêu cầu" title="Jira + Confluence — combo tiêu chuẩn 80% công ty IT" pageNumber={6} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-3">
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 to-white p-7 shadow-lg shadow-brand-600/10">
          <div className="font-display text-3xl font-bold text-neutral-900 mb-2">Jira</div>
          <div className="text-xl text-brand-700 italic mb-4">Tracking — quản lý ticket, sprint, status</div>
          <div className="space-y-3">
            <div className="text-xl text-neutral-700"><span className="font-bold">Dùng cho:</span> Tracking từng yêu cầu (User Story, Bug, Task, Epic)</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">BA dùng:</span> Tạo ticket, set status, assign, link related</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Workflow:</span> Backlog → Refined → Ready → In Progress → Review → Done</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Reports:</span> Burndown, velocity, sprint summary</div>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-white p-7">
          <div className="font-display text-3xl font-bold text-neutral-900 mb-2">Confluence</div>
          <div className="text-xl text-sky-700 italic mb-4">Knowledge base — lưu tài liệu chi tiết</div>
          <div className="space-y-3">
            <div className="text-xl text-neutral-700"><span className="font-bold">Dùng cho:</span> Lưu BRD, SRS, meeting minutes, wiki</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">BA dùng:</span> Viết spec page, link đến Jira ticket</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Tổ chức:</span> Spaces (mỗi project 1 space) + page hierarchy</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Tích hợp:</span> Liên kết 2 chiều với Jira (xem ticket trong page và ngược lại)</div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-neutral-900 text-white flex items-center gap-4">
        <Layers size={26} strokeWidth={2.2} className="text-brand-400 shrink-0" />
        <div className="text-xl"><span className="font-bold">Thay thế free:</span> Notion (all-in-one), Linear (Jira-like, đẹp hơn), Trello (đơn giản — small project).</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide07Section2() {
  return <SectionSlide number="02" title="Quản lý thay đổi (Change Request)" caption="Quy trình rõ ràng để khách hàng thay đổi yêu cầu mà dự án không 'tan tành'." />;
}

export function Slide08ChangeFlow() {
  const steps = [
    { n: '01', title: 'Tiếp nhận CR', desc: 'BA log thay đổi vào Jira (Type=Change Request, có ID rõ)' },
    { n: '02', title: 'Phân tích impact', desc: 'BA + Tech lead đánh giá: ảnh hưởng tài liệu nào, code nào, schedule, budget' },
    { n: '03', title: 'Trình duyệt', desc: 'Gửi cho Change Control Board (Sponsor + Tech Lead + BA Lead) review' },
    { n: '04', title: 'Quyết định', desc: 'Approve / Reject / Defer (hoãn). Nếu Approve → cập nhật baseline' },
    { n: '05', title: 'Triển khai', desc: 'Update SRS + Jira tickets + thông báo team. Track như yêu cầu mới' },
  ];
  return (
    <ContentSlide eyebrow="Quy trình xử lý Change Request" title="5 bước chuẩn từ khi nhận yêu cầu đổi đến lúc triển khai" pageNumber={8} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-5 gap-3 mt-3">
        {steps.map((s, i) => (
          <motion.div key={s.n} variants={fadeUp} className="rounded-xl bg-white border-2 border-neutral-200 p-6 relative hover:border-brand-400 transition-all">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-600 to-brand-700 text-white flex items-center justify-center font-display font-bold text-xl mb-4 shadow-md shadow-brand-600/30">
              {s.n}
            </div>
            <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-2">{s.title}</div>
            <div className="text-xl text-neutral-700 leading-relaxed">{s.desc}</div>
            {i < 4 && <ArrowRight size={20} className="absolute top-1/2 -right-2.5 -translate-y-1/2 text-brand-400 bg-white rounded-full" strokeWidth={2.5} />}
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-9 px-7 py-5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-4">
        <AlertTriangle size={24} strokeWidth={2.2} className="text-amber-600 shrink-0 mt-1" />
        <div className="text-xl text-amber-900 leading-relaxed"><span className="font-bold">Cảnh báo:</span> Tuyệt đối KHÔNG để khách "thay đổi miệng" rồi BA tự sửa SRS — phải có CR document có log + sign-off. Nếu không = dispute sau này không có bằng chứng.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide09ImpactAnalysis() {
  return (
    <ContentSlide eyebrow="Impact Analysis — phân tích ảnh hưởng" title="5 dimension cần đánh giá khi có Change Request" pageNumber={9} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-5 gap-4 mt-3">
        {[
          { dim: 'Tài liệu', desc: 'SRS sections nào cần update? UC nào ảnh hưởng?', icon: '📄' },
          { dim: 'Code', desc: 'Module nào đụng vào? Refactor lớn không?', icon: '💻' },
          { dim: 'Schedule', desc: 'Cộng thêm bao nhiêu ngày? Ảnh hưởng sprint nào?', icon: '📅' },
          { dim: 'Budget', desc: 'Tăng cost bao nhiêu? Cần thêm resource?', icon: '💰' },
          { dim: 'Risk', desc: 'Rủi ro phát sinh? Có gì bị break không?', icon: '⚠️' },
        ].map((d, i) => (
          <motion.div key={d.dim} variants={fadeUp} className="rounded-2xl border-2 border-neutral-200 bg-white p-6 text-center">
            <div className="text-[60px] mb-3">{d.icon}</div>
            <div className="text-xl font-bold text-brand-600 mb-1">0{i + 1}</div>
            <div className="font-display text-2xl font-bold text-neutral-900 mb-2">{d.dim}</div>
            <div className="text-xl text-neutral-700 leading-relaxed">{d.desc}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 rounded-2xl bg-neutral-950 text-neutral-200 p-6 text-xl leading-relaxed font-mono">
        <div className="text-brand-400 text-xl uppercase tracking-wider mb-3 font-sans font-bold">Output Impact Analysis (CR-042):</div>
        <div>📄 SRS sections: 3.2.1 (Đặt lịch), 3.2.5 (Notification) — update wireframe + flow</div>
        <div>💻 Code: module booking + notification service — refactor 2 ngày dev</div>
        <div>📅 +3 ngày sprint hiện tại — push lùi 1 user story sang sprint sau</div>
        <div>💰 +12 giờ dev × 500k = 6tr — fit budget contingency</div>
        <div>⚠️ Risk: regression test cần làm lại notification — schedule QA 4 giờ</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide10Approval() {
  return (
    <ContentSlide eyebrow="Approval Workflow — ai duyệt cái gì" title="Quy mô CR khác nhau → mức duyệt khác nhau" pageNumber={10} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-3">
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-7">
          <div className="text-xl font-bold uppercase tracking-wider text-emerald-700 mb-2">CR NHỎ</div>
          <div className="font-display text-3xl font-bold text-neutral-900 mb-3">≤ 1 ngày dev · không đổi spec lớn</div>
          <div className="text-xl text-neutral-700 mb-4">Sửa wording, thêm field nhỏ, đổi thứ tự bước</div>
          <div className="rounded-lg bg-white border border-emerald-200 p-4">
            <div className="text-xl font-bold text-emerald-700 mb-1">Ai duyệt:</div>
            <div className="text-xl text-neutral-800">BA + Tech Lead (24h)</div>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7">
          <div className="text-xl font-bold uppercase tracking-wider text-amber-700 mb-2">CR TRUNG BÌNH</div>
          <div className="font-display text-3xl font-bold text-neutral-900 mb-3">2-5 ngày dev · update 1-2 module</div>
          <div className="text-xl text-neutral-700 mb-4">Thêm tính năng nhỏ, đổi flow, integrate API mới</div>
          <div className="rounded-lg bg-white border border-amber-200 p-4">
            <div className="text-xl font-bold text-amber-700 mb-1">Ai duyệt:</div>
            <div className="text-xl text-neutral-800">PM + BA Lead + Tech Lead (3 ngày)</div>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-600 to-brand-700 text-white p-7 shadow-xl shadow-brand-600/25">
          <div className="text-xl font-bold uppercase tracking-wider text-white/85 mb-2">CR LỚN</div>
          <div className="font-display text-3xl font-bold mb-3">&gt; 5 ngày dev · ảnh hưởng kiến trúc</div>
          <div className="text-xl text-white/90 mb-4">Phân hệ mới, đổi DB, thay đổi mục tiêu kinh doanh</div>
          <div className="rounded-lg bg-white/15 border border-white/20 p-4">
            <div className="text-xl font-bold text-white/85 mb-1">Ai duyệt:</div>
            <div className="text-xl text-white">Sponsor + CTO + Steering Committee (1 tuần)</div>
          </div>
        </motion.div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide11Section3() {
  return <SectionSlide number="03" title="Ưu tiên yêu cầu (Prioritization)" caption="3 phương pháp chuẩn — chọn cái phù hợp tình huống." />;
}

export function Slide12MoSCoW() {
  const buckets = [
    { code: 'M', word: 'MUST have', vi: 'Phải có', desc: 'Không có = dự án fail. Là core không thể bỏ.', pct: '~40-50%', color: 'from-brand-600 to-brand-700 text-white shadow-xl shadow-brand-600/25' },
    { code: 'S', word: 'SHOULD have', vi: 'Nên có', desc: 'Quan trọng nhưng có workaround. Sẽ làm nếu kịp.', pct: '~20-30%', color: 'from-amber-100 to-amber-50 border-amber-300' },
    { code: 'C', word: 'COULD have', vi: 'Có thể có', desc: 'Nice-to-have. Chỉ làm nếu dư thời gian.', pct: '~10-20%', color: 'from-sky-100 to-sky-50 border-sky-300' },
    { code: 'W', word: 'WON\'T have (this time)', vi: 'Không làm lần này', desc: 'Hoãn cho phase sau. Quan trọng để khách biết KHÔNG bị bỏ quên.', pct: 'Phần còn lại', color: 'from-neutral-100 to-neutral-50 border-neutral-300' },
  ];
  return (
    <ContentSlide eyebrow="MoSCoW — phương pháp ưu tiên phổ biến nhất" title="4 nhóm: MUST · SHOULD · COULD · WON'T" pageNumber={12} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-4 gap-5 mt-3">
        {buckets.map((b, i) => (
          <motion.div key={b.code} variants={fadeUp} className={`rounded-2xl border-2 p-7 ${i === 0 ? `bg-gradient-to-br ${b.color} border-transparent` : `bg-gradient-to-br ${b.color}`}`}>
            <div className={`font-display text-[100px] font-extrabold leading-none mb-2 ${i === 0 ? 'text-white' : 'text-neutral-900'}`}>{b.code}</div>
            <div className={`text-xl font-bold uppercase tracking-wider mb-1 ${i === 0 ? 'text-white/85' : 'text-neutral-500'}`}>{b.word}</div>
            <div className={`font-display text-2xl font-bold mb-3 ${i === 0 ? 'text-white' : 'text-neutral-900'}`}>{b.vi}</div>
            <div className={`text-xl leading-relaxed mb-4 ${i === 0 ? 'text-white/90' : 'text-neutral-700'}`}>{b.desc}</div>
            <div className={`text-xl font-bold pt-3 border-t ${i === 0 ? 'border-white/20 text-white/85' : 'border-neutral-300 text-brand-700'}`}>{b.pct}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-neutral-900 text-white flex items-center gap-4">
        <Crown size={26} strokeWidth={2.2} className="text-brand-400 shrink-0" />
        <div className="text-xl"><span className="font-bold">Quy luật vàng:</span> MUST ≤ 60% capacity sprint — chừa buffer cho thay đổi + bug.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide13KanoRice() {
  return (
    <ContentSlide eyebrow="2 phương pháp ưu tiên khác" title="Kano (cảm xúc khách) + RICE (số liệu)" pageNumber={13} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-3">
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white p-7">
          <div className="font-display text-3xl font-bold text-neutral-900 mb-2">Kano Model</div>
          <div className="text-xl text-purple-700 italic mb-5">Phân loại theo cảm xúc người dùng</div>
          <div className="space-y-3">
            <div className="text-xl text-neutral-800"><span className="font-bold text-purple-700">Must-be:</span> Có cũng không vui, KHÔNG có thì khách giận (login, security)</div>
            <div className="text-xl text-neutral-800"><span className="font-bold text-purple-700">Performance:</span> Càng nhiều càng tốt (tốc độ, dung lượng storage)</div>
            <div className="text-xl text-neutral-800"><span className="font-bold text-purple-700">Excitement:</span> Khách không kỳ vọng nhưng có = WOW (AI suggestion thông minh)</div>
            <div className="text-xl text-neutral-800"><span className="font-bold text-purple-700">Indifferent:</span> Có hay không, khách không quan tâm</div>
          </div>
          <div className="mt-5 pt-4 border-t border-purple-200 text-xl text-neutral-700"><span className="font-bold">Khi dùng:</span> Sản phẩm B2C, cần "đánh thắng" về trải nghiệm</div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 to-white p-7 shadow-lg shadow-brand-600/10">
          <div className="font-display text-3xl font-bold text-neutral-900 mb-2">RICE Score</div>
          <div className="text-xl text-brand-700 italic mb-5">Chấm điểm bằng số (objective)</div>
          <div className="rounded-lg bg-neutral-950 text-neutral-200 p-5 text-xl font-mono mb-5">
            <div><span className="text-brand-400 font-bold">RICE = </span><br/>(Reach × Impact × Confidence) / Effort</div>
          </div>
          <div className="space-y-2">
            <div className="text-xl text-neutral-800"><span className="font-bold text-brand-700">Reach:</span> Bao nhiêu user/quarter</div>
            <div className="text-xl text-neutral-800"><span className="font-bold text-brand-700">Impact:</span> 0.25 (low) / 1 / 2 / 3 (high)</div>
            <div className="text-xl text-neutral-800"><span className="font-bold text-brand-700">Confidence:</span> % chắc chắn về số trên</div>
            <div className="text-xl text-neutral-800"><span className="font-bold text-brand-700">Effort:</span> Person-weeks dev</div>
          </div>
          <div className="mt-5 pt-4 border-t border-brand-200 text-xl text-neutral-700"><span className="font-bold">Khi dùng:</span> Backlog lớn, cần ưu tiên data-driven</div>
        </motion.div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide14Section4() {
  return <SectionSlide number="04" title="Traceability + AI + Demo CR" caption="Bảng truy vết Business → Test + AI làm impact analysis tự động." />;
}

export function Slide15Traceability() {
  return (
    <ContentSlide eyebrow="Traceability Matrix — bảng truy vết" title="Liên kết từ Business Requirement → Test Case (5 cấp)" pageNumber={15} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="mt-3">
        <div className="grid grid-cols-5 gap-3 mb-3">
          {['Business Req', 'User Story', 'Functional Req', 'Use Case', 'Test Case'].map((h, i) => (
            <motion.div key={h} variants={fadeUp} className={`rounded-lg p-4 text-center font-bold text-xl ${i === 0 ? 'bg-amber-100 text-amber-900' : i === 1 ? 'bg-sky-100 text-sky-900' : i === 2 ? 'bg-emerald-100 text-emerald-900' : i === 3 ? 'bg-brand-100 text-brand-900' : 'bg-purple-100 text-purple-900'}`}>
              {h}
            </motion.div>
          ))}
        </div>

        {[
          ['BR-001', 'US-042', 'FR-018', 'UC-005', 'TC-042-01..08'],
          ['BR-001', 'US-043', 'FR-019', 'UC-006', 'TC-043-01..05'],
          ['BR-002', 'US-044', 'FR-020', 'UC-007', 'TC-044-01..06'],
          ['BR-002', 'US-045', 'FR-020', 'UC-008', 'TC-045-01..04'],
          ['BR-003', 'US-046', 'FR-021', 'UC-009', 'TC-046-01..07'],
        ].map((row, i) => (
          <motion.div key={i} variants={fadeUp} className="grid grid-cols-5 gap-3 mb-2">
            {row.map((cell, j) => (
              <div key={j} className="rounded-lg p-3 bg-white border border-neutral-200 text-center text-xl text-neutral-800 tabular-nums">
                {cell}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-brand-50 border border-brand-200 flex items-center gap-4">
        <Link2 size={26} strokeWidth={2.2} className="text-brand-600 shrink-0" />
        <div className="text-xl text-neutral-800"><span className="font-bold">Tác dụng:</span> Khi BR-001 thay đổi → biết ngay 2 US, 2 FR, 2 UC, 13 TC bị ảnh hưởng. Impact analysis trong 30 giây.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide16AIDemo() {
  return (
    <ContentSlide eyebrow="AI applied + Demo CR thực tế" title="AI làm impact analysis + sinh CR document tự động" pageNumber={16} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-2">
        <motion.div variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0"><Sparkles size={22} strokeWidth={2.4} /></div>
            <div>
              <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">AI Impact Analysis</div>
              <div className="text-xl text-brand-700 font-semibold mt-1">Claude Code</div>
            </div>
          </div>
          <div className="text-xl text-neutral-500 italic mb-3">Upload SRS + traceability matrix → AI chỉ ra impact 5 dimension</div>
          <div className="rounded-xl bg-neutral-950 text-neutral-200 p-4 text-xl leading-relaxed font-mono">
            "Khách yêu cầu: thêm OTP qua Zalo (ngoài SMS hiện tại) cho login. Upload SRS hiện tại. Phân tích impact 5 dimension (Tài liệu / Code / Schedule / Budget / Risk) + liệt kê tickets Jira cần update."
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0"><Sparkles size={22} strokeWidth={2.4} /></div>
            <div>
              <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">Sinh CR Document</div>
              <div className="text-xl text-brand-700 font-semibold mt-1">Claude Code</div>
            </div>
          </div>
          <div className="text-xl text-neutral-500 italic mb-3">Từ kết quả impact → sinh CR-042 doc đầy đủ để trình duyệt</div>
          <div className="rounded-xl bg-neutral-950 text-neutral-200 p-4 text-xl leading-relaxed font-mono">
            "Sinh Change Request document CR-042 gồm: Mô tả thay đổi, Lý do, Impact 5 dimension (lấy từ phân tích trước), Recommendation, Approval matrix, Timeline. Output Markdown có thể copy vào Confluence."
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white flex items-center gap-4">
        <Bot size={28} strokeWidth={2.2} className="shrink-0" />
        <div className="text-xl"><span className="font-bold">Lợi ích:</span> 1 CR thường tốn 2-3 giờ phân tích tay → có AI = 15-30 phút. BA có thời gian discuss + thuyết phục stakeholder.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide17Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 09"
      statement="Yêu cầu thay đổi không phải 'kẻ thù' của BA — quy trình thay đổi không có MỚI là kẻ thù."
      attribution="Buổi 10: Sẵn sàng vào dự án — 30/60/90 ngày đầu của BA fresher"
    />
  );
}

export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-process', Component: Slide04Section1 },
  { id: 'lifecycle', Component: Slide05Lifecycle },
  { id: 'tracking-tool', Component: Slide06TrackingTool },
  { id: 'section-change', Component: Slide07Section2 },
  { id: 'change-flow', Component: Slide08ChangeFlow },
  { id: 'impact-analysis', Component: Slide09ImpactAnalysis },
  { id: 'approval', Component: Slide10Approval },
  { id: 'section-priority', Component: Slide11Section3 },
  { id: 'moscow', Component: Slide12MoSCoW },
  { id: 'kano-rice', Component: Slide13KanoRice },
  { id: 'section-trace', Component: Slide14Section4 },
  { id: 'traceability', Component: Slide15Traceability },
  { id: 'ai-demo', Component: Slide16AIDemo },
  { id: 'closing', Component: Slide17Closing },
];
