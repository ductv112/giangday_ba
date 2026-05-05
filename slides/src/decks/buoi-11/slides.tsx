import { motion } from 'framer-motion';
import {
  CoverSlide,
  SectionSlide,
  ContentSlide,
  StatementSlide,
  fadeUp,
  stagger,
} from '@/layouts/Layouts';
import { Card } from '@/components/Bits';
import {
  ClipboardCheck,
  Mic,
  Award,
  Users,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 11 — BÀI TẬP CUỐI KHOÁ + PHỎNG VẤN THỬ
 * ============================================================ */

export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 11 · Khoá Ready for BA"
      title={'Bài tập cuối khoá\n+ phỏng vấn thử'}
      subtitle="Tổng hợp 10 buổi đã học vào 1 case study thật + thực hành phỏng vấn BA Fresher trong môi trường an toàn trước khi đi xin việc."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'Practice + Mock interview' },
        { label: 'Mức độ', value: 'Assessment' },
      ]}
    />
  );
}

export function Slide02Hook() {
  return (
    <StatementSlide
      eyebrow="Mục đích buổi này"
      statement="Bạn không 'sẵn sàng' khi học xong — bạn sẵn sàng khi LÀM được + ĐƯỢC PHỎNG VẤN không lúng túng."
    />
  );
}

export function Slide03Agenda() {
  return (
    <ContentSlide eyebrow="Lộ trình buổi học" title="Hôm nay 2 phần — practice nặng" pageNumber={3} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-2">
        <Card icon={<ClipboardCheck size={28} strokeWidth={2.4} />} title="1. Bài tập cuối khoá (60 phút)">
          Đề bài cụ thể · 6 deliverable cần nộp · checklist 12 tiêu chí chấm · Q&A.
        </Card>
        <Card icon={<Mic size={28} strokeWidth={2.4} />} title="2. Phỏng vấn thử (90 phút)">
          Format chuẩn 30 phút × 3 vòng · 20 câu hỏi BA Fresher · feedback 1-1 từ giảng viên.
        </Card>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide04Section1() {
  return <SectionSlide number="01" title="Bài tập cuối khoá" caption="1 case study tổng hợp toàn bộ kỹ năng đã học từ Buổi 1-10." />;
}

export function Slide05ProjectBrief() {
  return (
    <ContentSlide eyebrow="Đề bài bài tập cuối khoá" title="Phân tích 1 phân hệ thật của Doanh nghiệp A" pageNumber={5} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-[2fr_3fr] gap-7 mt-2">
        <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white p-7 shadow-xl shadow-brand-600/25">
          <div className="text-xl font-bold uppercase tracking-wider text-white/85 mb-2">Bối cảnh giả định</div>
          <div className="font-display text-3xl font-bold mb-4 leading-tight">Bạn vừa nhận offer BA Junior tại Doanh nghiệp A</div>
          <div className="text-xl text-white/90 leading-relaxed mb-4">
            Manager giao bạn phụ trách phân hệ <span className="font-bold">Bảo trì hệ thống IT</span> (`demo-baotri`).
          </div>
          <div className="text-xl text-white/90 leading-relaxed">
            Yêu cầu: Phân tích từ A-Z, viết đầy đủ tài liệu, sẵn sàng bàn giao cho dev. Deadline: 1 tuần.
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <div className="text-xl font-bold uppercase tracking-wider text-brand-600 mb-3">6 Deliverable cần nộp:</div>
          <div className="space-y-3">
            {[
              { n: '1', name: 'Planning doc', detail: 'Mục tiêu · Stakeholder · Deliverable · Timeline 1 tuần' },
              { n: '2', name: 'Note phỏng vấn (3 buổi)', detail: 'Phỏng vấn 3 stakeholder giả lập với Claude Code role-play' },
              { n: '3', name: 'BPMN + ERD + Use Case Diagram', detail: '≥ 3 BPMN · 1 ERD · 5 UC + UC Spec' },
              { n: '4', name: 'Wireframe (3-5 màn)', detail: 'Sinh bằng v0.dev hoặc Figma' },
              { n: '5', name: 'SRS hoàn chỉnh', detail: '≥ 15 trang theo template TPL-017 · 20 US chuẩn INVEST · 50 test cases' },
              { n: '6', name: 'Traceability matrix', detail: 'Bảng 5 cột BR → US → FR → UC → TC' },
            ].map((d) => (
              <motion.div key={d.n} variants={fadeUp} className="rounded-xl border-2 border-neutral-200 bg-white p-4 flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-display font-bold text-2xl">{d.n}</div>
                <div>
                  <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">{d.name}</div>
                  <div className="text-xl text-neutral-700 leading-relaxed mt-1">{d.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide06Rubric() {
  const criteria = [
    { area: 'Planning', items: 'Stakeholder đủ · Timeline rõ · Mục tiêu đo được', max: 10 },
    { area: 'Elicitation', items: 'Note 3 buổi đủ · Có 5 Whys · Pain points rõ', max: 15 },
    { area: 'Analysis', items: 'BPMN đúng shape · ERD chuẩn cardinality · UC Spec đủ flow', max: 20 },
    { area: 'Design', items: 'Wireframe theo 6 nguyên tắc UX · Có 3 mức fidelity', max: 15 },
    { area: 'Documentation', items: 'SRS đầy đủ 8 mục · US chuẩn INVEST · 7 quy tắc viết rõ', max: 25 },
    { area: 'Traceability', items: 'Matrix 5 cột đầy đủ · Không miss link nào', max: 10 },
    { area: 'AI Applied', items: 'Có 4-5 prompt áp dụng · Có verify output', max: 5 },
  ];
  return (
    <ContentSlide eyebrow="Tiêu chí chấm — Rubric" title="100 điểm tổng — pass ≥ 70" pageNumber={6} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-2.5 mt-2">
        {criteria.map((c, i) => (
          <motion.div key={c.area} variants={fadeUp} className="rounded-xl border border-neutral-200 bg-white p-5 flex items-center gap-5 hover:border-brand-400 transition-all">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-display font-bold text-2xl">{i + 1}</div>
            <div className="shrink-0 w-44">
              <div className="font-display text-2xl font-bold text-neutral-900">{c.area}</div>
            </div>
            <div className="flex-1 text-xl text-neutral-700">{c.items}</div>
            <div className="shrink-0 px-4 py-2 rounded-lg bg-brand-600 text-white font-display font-bold text-2xl">{c.max} đ</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-4">
        <Award size={26} strokeWidth={2.2} className="text-emerald-700 shrink-0" />
        <div className="text-xl text-emerald-900"><span className="font-bold">Pass ≥ 70/100</span> = đạt chứng nhận hoàn thành khoá iPMAC + 36 PDU đủ điều kiện thi ECBA.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide07Section2() {
  return <SectionSlide number="02" title="Phỏng vấn thử BA Fresher" caption="3 vòng × 30 phút — môi trường an toàn để mắc lỗi và rút kinh nghiệm." />;
}

export function Slide08InterviewFormat() {
  const rounds = [
    { n: '01', name: 'Hành vi (Behavioral)', dur: '20 phút', tone: 'amber', what: 'Tự giới thiệu · Vì sao chọn BA · Tình huống team conflict · Điểm mạnh/yếu', tip: 'Dùng STAR (Situation/Task/Action/Result) để kể chuyện' },
    { n: '02', name: 'Kỹ năng nghiệp vụ', dur: '30 phút', tone: 'brand', what: 'Vẽ BPMN trên giấy · Viết US chuẩn INVEST · Đặt câu hỏi 5 Whys · Phân biệt BRD/SRS', tip: 'Vừa nói vừa vẽ, đừng im lặng suy nghĩ', accent: true },
    { n: '03', name: 'Tình huống thực tế', dur: '20 phút', tone: 'sky', what: 'Khách đổi yêu cầu giữa sprint · Dev nói "không làm được" · Stakeholder mâu thuẫn', tip: 'Show tư duy giải quyết, không cần trả lời "đúng"' },
  ];
  return (
    <ContentSlide eyebrow="Format phỏng vấn 70 phút" title="3 vòng — mỗi vòng test 1 nhóm kỹ năng" pageNumber={8} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {rounds.map((r) => (
          <motion.div key={r.n} variants={fadeUp} className={`rounded-2xl border-2 p-7 ${r.accent ? 'bg-gradient-to-br from-brand-600 to-brand-700 border-brand-700 text-white shadow-xl shadow-brand-600/25' : `bg-${r.tone}-50/40 border-${r.tone}-200`}`}>
            <div className={`text-xl font-bold uppercase tracking-wider mb-1 ${r.accent ? 'text-white/85' : `text-${r.tone}-700`}`}>Vòng {r.n}</div>
            <div className={`font-display text-3xl font-bold mb-2 leading-tight ${r.accent ? 'text-white' : 'text-neutral-900'}`}>{r.name}</div>
            <div className={`inline-block px-3 py-1 rounded-full text-xl font-bold mb-4 ${r.accent ? 'bg-white/15 text-white' : `bg-${r.tone}-100 text-${r.tone}-800`}`}>⏱ {r.dur}</div>
            <div className={`text-xl leading-relaxed mb-4 ${r.accent ? 'text-white/90' : 'text-neutral-700'}`}>{r.what}</div>
            <div className={`text-xl pt-4 border-t ${r.accent ? 'border-white/20 text-white/85' : 'border-neutral-200 text-neutral-600'}`}>
              <span className="font-bold">💡 Tip: </span>{r.tip}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-neutral-900 text-white flex items-center gap-4">
        <Users size={26} strokeWidth={2.2} className="text-brand-400 shrink-0" />
        <div className="text-xl"><span className="font-bold">Mỗi học viên</span> được phỏng vấn 1 lần (15-20 phút) trước cả lớp · giảng viên + 2-3 học viên khác đóng vai panel · nhận feedback ngay sau.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide09Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 11"
      statement="Phỏng vấn thật khó hơn phỏng vấn thử 30%. Phỏng vấn thử mà không lúng túng = phỏng vấn thật bạn sẽ qua."
      attribution="Buổi 12: Tổng kết — cơ hội nghề BA Việt Nam 2026 + đường tiếp theo"
    />
  );
}

export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-project', Component: Slide04Section1 },
  { id: 'project-brief', Component: Slide05ProjectBrief },
  { id: 'rubric', Component: Slide06Rubric },
  { id: 'section-interview', Component: Slide07Section2 },
  { id: 'interview-format', Component: Slide08InterviewFormat },
  { id: 'closing', Component: Slide09Closing },
];
