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
  Calendar,
  Users,
  CheckCircle2,
  TrendingUp,
  Award,
  Briefcase,
  MessagesSquare,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 10 — SẴN SÀNG VÀO DỰ ÁN
 * ============================================================ */

export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 10 · Khoá Ready for BA"
      title={'Sẵn sàng\nvào dự án'}
      subtitle="Nhận offer rồi — 30/60/90 ngày đầu BA fresher cần làm gì để không bị 'trôi' và xây được uy tín với team."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'Onboarding · Build credibility' },
        { label: 'Mức độ', value: 'Career' },
      ]}
    />
  );
}

export function Slide02Hook() {
  return (
    <StatementSlide
      eyebrow="Sự thật về 30 ngày đầu"
      statement="Manager đánh giá BA fresher không phải qua 'biết bao nhiêu' — mà qua 'học nhanh thế nào'."
    />
  );
}

export function Slide03Agenda() {
  return (
    <ContentSlide eyebrow="Lộ trình buổi học" title="Hôm nay đi qua 3 phần" pageNumber={3} totalPages={11}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-6 mt-2">
        <Card icon={<Calendar size={26} strokeWidth={2.4} />} title="1. 30/60/90 ngày — roadmap onboarding">
          Mục tiêu rõ ràng cho từng cột mốc — không bị "trôi" trong 3 tháng đầu.
        </Card>
        <Card icon={<Users size={26} strokeWidth={2.4} />} title="2. Tuần đầu tiên thực chiến">
          5 việc cần làm + danh sách câu hỏi với manager / mentor / team.
        </Card>
        <Card icon={<TrendingUp size={26} strokeWidth={2.4} />} title="3. Build credibility 90 ngày">
          5 cách xây uy tín nhanh — để được giao project lớn hơn.
        </Card>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide04Section1() {
  return <SectionSlide number="01" title="Roadmap 30/60/90 ngày" caption="3 cột mốc — biết mình ở đâu, manager kỳ vọng gì." />;
}

export function Slide05Roadmap() {
  const phases = [
    {
      days: '30 ngày đầu',
      goal: 'HỌC',
      color: 'from-neutral-100 to-neutral-50 border-neutral-300',
      badge: 'bg-neutral-700',
      items: [
        'Hiểu domain công ty (sản phẩm, khách hàng, đối thủ)',
        'Học workflow team (Jira / Confluence / Slack / quy trình release)',
        'Đọc 3-5 tài liệu cũ (BRD/SRS hiện tại)',
        'Gặp + ghi nhớ tên 10-15 người quan trọng',
        'KHÔNG hứa deliver gì lớn — focus vào absorb',
      ],
    },
    {
      days: '60 ngày',
      goal: 'LÀM ĐƯỢC',
      color: 'from-amber-100 to-amber-50 border-amber-300',
      badge: 'bg-amber-600',
      items: [
        'Tham gia 1 phân hệ nhỏ với mentor',
        'Viết User Story đầu tiên được team duyệt',
        'Chủ trì 1 meeting (refinement / walk-through nhỏ)',
        'Đóng góp ý tưởng cải thiện quy trình',
        'Build relationship với 2-3 dev / QA quen',
      ],
    },
    {
      days: '90 ngày',
      goal: 'CHỦ ĐỘNG',
      color: 'from-brand-100 to-brand-50 border-brand-300',
      badge: 'bg-brand-600',
      items: [
        'Phụ trách 1 phân hệ độc lập (BA "lead" 1 module)',
        'Viết SRS hoàn chỉnh cho phân hệ đó',
        'Validate được spec với khách hàng',
        'Xử lý 1 Change Request từ A-Z',
        'Đánh giá performance lần đầu — pass probation',
      ],
    },
  ];
  return (
    <ContentSlide eyebrow="Mục tiêu rõ ràng theo cột mốc" title="3 phase: HỌC → LÀM ĐƯỢC → CHỦ ĐỘNG" pageNumber={5} totalPages={11}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {phases.map((p, i) => (
          <motion.div key={p.days} variants={fadeUp} className={`rounded-2xl border-2 bg-gradient-to-br ${p.color} p-7`}>
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${p.badge} text-white font-bold text-2xl mb-4`}>{i + 1}</div>
            <div className="text-xl font-bold uppercase tracking-wider text-neutral-500 mb-1">{p.days}</div>
            <div className="font-display text-3xl font-extrabold text-neutral-900 mb-5">Mục tiêu: {p.goal}</div>
            <ul className="space-y-3">
              {p.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-xl text-neutral-700 leading-relaxed">
                  <CheckCircle2 size={22} strokeWidth={2.4} className="text-brand-600 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide06Section2() {
  return <SectionSlide number="02" title="Tuần đầu tiên — chi tiết" caption="5 việc cần làm + bộ câu hỏi vàng với manager/mentor." />;
}

export function Slide07FirstWeek() {
  const tasks = [
    { day: 'Ngày 1', title: 'Setup + chào hỏi', items: 'Cài tools (VS Code, Claude Code, Jira, Slack…) · Tự intro với team · Hiểu org chart' },
    { day: 'Ngày 2-3', title: 'Đọc + hỏi', items: 'Đọc 3 tài liệu cũ (BRD/SRS) · List 20 câu hỏi · Schedule 1-1 với mentor' },
    { day: 'Ngày 4', title: 'Quan sát meeting', items: 'Tham dự 2-3 meeting (im lặng quan sát) · Note format meeting · Học cách team trao đổi' },
    { day: 'Ngày 5', title: 'Đề xuất 1-1 với manager', items: 'Confirm kỳ vọng 30/60/90 · Hỏi success metrics · Hỏi resource available (mentor/training)' },
  ];
  return (
    <ContentSlide eyebrow="5 việc trong tuần đầu" title="Lịch chi tiết theo ngày — không trôi mất 1 ngày nào" pageNumber={7} totalPages={11}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-3 mt-2">
        {tasks.map((t, i) => (
          <motion.div key={t.day} variants={fadeUp} className="rounded-xl border border-neutral-200 bg-white p-6 flex items-center gap-5 hover:border-brand-400 transition-all">
            <div className="shrink-0 w-14 h-14 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-display font-bold text-2xl">{i + 1}</div>
            <div className="shrink-0 w-32 px-4 py-3 rounded-lg bg-neutral-100 text-neutral-700 font-bold text-xl text-center">{t.day}</div>
            <div className="flex-1">
              <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-1">{t.title}</div>
              <div className="text-xl text-neutral-700 leading-relaxed">{t.items}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide08Questions() {
  return (
    <ContentSlide eyebrow="20 câu hỏi vàng tuần đầu" title="Hỏi đúng câu = học nhanh × 5" pageNumber={8} totalPages={11}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-brand-200 bg-brand-50/40 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center"><Briefcase size={24} strokeWidth={2.4} /></div>
            <div className="font-display text-2xl font-bold text-brand-900">Với Manager</div>
          </div>
          <ul className="space-y-2.5 text-xl text-neutral-700">
            <li>• Kỳ vọng cụ thể 30/60/90 ngày là gì?</li>
            <li>• Tôi báo cáo qua kênh nào, tần suất?</li>
            <li>• Đo "thành công" trong vai trò bằng số gì?</li>
            <li>• Có mentor / buddy không?</li>
            <li>• 3 thứ ưu tiên cao nhất quý này?</li>
            <li>• Probation review khi nào, format ra sao?</li>
          </ul>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-amber-600 text-white flex items-center justify-center"><Users size={24} strokeWidth={2.4} /></div>
            <div className="font-display text-2xl font-bold text-amber-900">Với Mentor</div>
          </div>
          <ul className="space-y-2.5 text-xl text-neutral-700">
            <li>• Tài liệu nào tôi PHẢI đọc 2 tuần đầu?</li>
            <li>• Workflow team thực tế (vs lý thuyết) ra sao?</li>
            <li>• 3 lỗi BA mới hay mắc ở team mình?</li>
            <li>• Stakeholder nào "khó tính" cần lưu ý?</li>
            <li>• Pattern viết tài liệu team đang theo?</li>
            <li>• Tôi có thể nhờ help việc gì không ngại?</li>
          </ul>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center"><MessagesSquare size={24} strokeWidth={2.4} /></div>
            <div className="font-display text-2xl font-bold text-emerald-900">Với Team (Dev/QA)</div>
          </div>
          <ul className="space-y-2.5 text-xl text-neutral-700">
            <li>• Bạn thường gặp khó gì với tài liệu BA?</li>
            <li>• Format US bạn thấy dễ làm việc nhất?</li>
            <li>• Có gì BA nên/không nên làm khi sprint?</li>
            <li>• Ngôn ngữ kỹ thuật nào team dùng nhiều?</li>
            <li>• Tools team đang dùng (CI/CD/repo) ở đâu?</li>
            <li>• Tôi support được gì cho công việc bạn?</li>
          </ul>
        </motion.div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide09Section3() {
  return <SectionSlide number="03" title="Build credibility 90 ngày" caption="5 cách xây uy tín nhanh để được giao project lớn." />;
}

export function Slide10Credibility() {
  const ways = [
    { n: '01', title: 'Deliver sớm hơn deadline', desc: 'Nói "5 ngày" nhưng giao trong 4. Tạo niềm tin "BA này tin được".' },
    { n: '02', title: 'Document mọi thứ rõ ràng', desc: 'Note meeting · Decision log · Spec đẹp. Người khác đọc được = giảm tải cho team.' },
    { n: '03', title: 'Hỏi sớm, không "stuck im"', desc: 'Mới vào không biết là OK. Stuck 2 ngày không hỏi = không OK. Hỏi trong 4 giờ.' },
    { n: '04', title: 'Volunteer việc nhỏ', desc: 'Note meeting hộ · update Confluence · gen test cases bằng AI cho QA. "BA nice to have around".' },
    { n: '05', title: 'Học dev terminology', desc: 'Hiểu API/REST/DB/Git basic — nói cùng ngôn ngữ với dev, không bị "ngơ" trong meeting kỹ thuật.' },
  ];
  return (
    <ContentSlide eyebrow="5 cách xây uy tín nhanh" title="Áp dụng đủ 5 = sau 90 ngày được giao project lớn" pageNumber={10} totalPages={11}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-5 gap-4 mt-2">
        {ways.map((w) => (
          <motion.div key={w.n} variants={fadeUp} className="rounded-2xl border-2 border-neutral-200 bg-white p-6 hover:border-brand-400 transition-all">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 text-white flex items-center justify-center font-display font-bold text-2xl mb-4 shadow-md shadow-brand-600/30">{w.n}</div>
            <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-3">{w.title}</div>
            <div className="text-xl text-neutral-700 leading-relaxed">{w.desc}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-9 px-7 py-5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white flex items-center gap-4">
        <Award size={28} strokeWidth={2.2} className="shrink-0" />
        <div className="text-xl"><span className="font-bold">Nguyên tắc gốc:</span> Credibility = Reliability × Communication × Care. Mất 90 ngày để xây, mất 1 tuần để đánh đổ.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide11Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 10"
      statement="90 ngày đầu = nền tảng cho 3 năm sau. Học nhanh, hỏi đúng, deliver đều — bạn sẽ vượt 80% BA cùng cohort."
      attribution="Buổi 11: Bài tập cuối khoá + phỏng vấn thử"
    />
  );
}

export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-roadmap', Component: Slide04Section1 },
  { id: 'roadmap', Component: Slide05Roadmap },
  { id: 'section-firstweek', Component: Slide06Section2 },
  { id: 'first-week', Component: Slide07FirstWeek },
  { id: 'questions', Component: Slide08Questions },
  { id: 'section-credibility', Component: Slide09Section3 },
  { id: 'credibility', Component: Slide10Credibility },
  { id: 'closing', Component: Slide11Closing },
];
