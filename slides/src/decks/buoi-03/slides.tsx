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
  Compass,
  Search,
  Workflow,
  Layout,
  FileText,
  CheckCircle2,
  Target,
  ArrowRight,
  Repeat,
  Calendar,
  Users,
  Crown,
  Sparkles,
  Bot,
  ListChecks,
  Zap,
  Layers,
  ClipboardList,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 3 — QUY TRÌNH PHÂN TÍCH & THIẾT KẾ
 * ============================================================ */

/* ----- Slide 1: Cover ----- */
export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 03 · Khoá Ready for BA"
      title={'Quy trình\nPhân tích & Thiết kế'}
      subtitle="6 bước BA đi từ lúc nhận đề bài đến khi bàn giao — và khác biệt khi làm dự án kiểu thác nước (Waterfall) vs linh hoạt (Agile)."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'Quy trình + thực hành vẽ flow' },
        { label: 'Mức độ', value: 'Process' },
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
            Vì sao BA fresher hay "lạc"?
          </div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            Vì <span className="text-brand-600">không có quy trình</span> — không biết bước nào trước, bước nào sau.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            Quy trình KHÔNG gò bó — nó là <span className="font-semibold text-neutral-800">bản đồ</span> giúp bạn không bị "ngộp" giữa 100 yêu cầu khác nhau.
          </p>
          <div className="mt-9 text-xl text-neutral-400">
            Khảo sát BA Hiring Vietnam 2026 · 240 nhà tuyển dụng IT
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="73%" label="BA fresher rối khi không có quy trình" accent />
          <StatCard value="6" label="Bước cốt lõi mọi BA đều đi qua" />
          <StatCard value="2 tuần" label="Sprint chuẩn của Agile" />
          <StatCard value="100%" label="Có quy trình = không bị 'lạc'" accent />
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
        <Card icon={<Workflow size={26} strokeWidth={2.4} />} title="1. Quy trình BA — 6 bước">
          Lộ trình BA đi qua trong mọi dự án + vòng đời của 1 yêu cầu.
        </Card>
        <Card icon={<Repeat size={26} strokeWidth={2.4} />} title="2. Waterfall vs Agile">
          Quy trình BA khác nhau ra sao trong dự án thác nước vs linh hoạt.
        </Card>
        <Card icon={<ClipboardList size={26} strokeWidth={2.4} />} title="3. Lập kế hoạch BA">
          5 việc cần plan trước khi bắt tay + bản đồ bên liên quan.
        </Card>
        <Card icon={<Sparkles size={26} strokeWidth={2.4} />} title="4. AI applied + Demo">
          4 prompt mẫu cho mỗi bước + walkthrough quy trình BA cho 1 phân hệ thực.
        </Card>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-10 flex items-center gap-3 text-xl text-neutral-500"
      >
        <Sparkles size={22} className="text-brand-600" />
        Cuối buổi: bạn vẽ được sơ đồ quy trình BA cho 1 phân hệ thật.
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 4: Section 1 ----- */
export function Slide04Section1() {
  return (
    <SectionSlide
      number="01"
      title="Quy trình BA — 6 bước cốt lõi"
      caption="Lộ trình BA đi qua trong mọi dự án — từ lúc nhận yêu cầu đến lúc bàn giao."
    />
  );
}

/* ----- Slide 5: 6 bước quy trình BA ----- */
export function Slide05BAProcess() {
  const steps = [
    {
      icon: <Compass size={24} strokeWidth={2.4} />,
      title: 'Lập kế hoạch',
      en: 'Planning',
      desc: 'Hiểu phạm vi, chọn cách làm, lập timeline.',
      buoi: 'B3',
    },
    {
      icon: <Search size={24} strokeWidth={2.4} />,
      title: 'Khơi gợi yêu cầu',
      en: 'Elicitation',
      desc: 'Phỏng vấn, hội thảo, quan sát thực tế.',
      buoi: 'B4',
    },
    {
      icon: <Workflow size={24} strokeWidth={2.4} />,
      title: 'Phân tích & vẽ sơ đồ',
      en: 'Analysis',
      desc: 'Vẽ sơ đồ quy trình, sơ đồ dữ liệu.',
      buoi: 'B5',
    },
    {
      icon: <Layout size={24} strokeWidth={2.4} />,
      title: 'Thiết kế giao diện',
      en: 'Design',
      desc: 'Wireframe (bản vẽ thô), mockup, luồng UX.',
      buoi: 'B6',
    },
    {
      icon: <FileText size={24} strokeWidth={2.4} />,
      title: 'Viết tài liệu',
      en: 'Documentation',
      desc: 'BRD, SRS, User Story — đề bài cho dev.',
      buoi: 'B7',
    },
    {
      icon: <CheckCircle2 size={24} strokeWidth={2.4} />,
      title: 'Kiểm tra & quản lý',
      en: 'Validate + Manage',
      desc: 'Demo, review, kiểm soát thay đổi.',
      buoi: 'B8–9',
    },
  ];

  return (
    <ContentSlide
      eyebrow="6 bước quy trình BA"
      title="Mọi BA đều đi qua 6 bước này — chỉ khác nhau cách làm"
      pageNumber={5}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-6 gap-3 mt-3">
        {steps.map((s, i) => (
          <div key={s.title} className="contents">
            <motion.div
              variants={fadeUp}
              className="rounded-xl bg-white border-2 border-neutral-200 p-5 hover:border-brand-400 hover:shadow-md transition-all relative"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-3">
                {s.icon}
              </div>
              <div className="text-xl font-bold text-brand-600 mb-1">0{i + 1}</div>
              <div className="font-display text-xl font-bold text-neutral-900 mb-1 leading-tight">
                {s.title}
              </div>
              <div className="text-xl text-neutral-400 italic mb-3">{s.en}</div>
              <div className="text-xl text-neutral-600 leading-relaxed mb-3">{s.desc}</div>
              <div className="inline-flex items-center gap-1.5 text-xl font-bold uppercase tracking-wider text-brand-600">
                <Calendar size={16} strokeWidth={2.4} />
                {s.buoi}
              </div>
              {i < 5 && (
                <ArrowRight
                  size={20}
                  className="absolute top-1/2 -right-3 -translate-y-1/2 text-brand-400 bg-white rounded-full"
                  strokeWidth={2.5}
                />
              )}
            </motion.div>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-9 px-7 py-5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-4"
      >
        <Zap size={24} strokeWidth={2.2} className="text-amber-600 shrink-0 mt-1" />
        <div className="text-xl text-amber-900 leading-relaxed">
          <span className="font-bold">Lưu ý:</span> 6 bước KHÔNG đi 1 chiều — sau bước 6 bạn có thể quay lại bước 2 nếu yêu cầu thay đổi. Đó là lý do có "vòng đời" yêu cầu (xem slide tiếp).
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 6: Vòng đời 1 yêu cầu ----- */
export function Slide06RequirementLifecycle() {
  const stages = [
    {
      step: '01',
      title: 'Phát hiện',
      en: 'Identified',
      desc: 'Yêu cầu được nêu ra (từ khách, từ stakeholder, từ user feedback).',
      color: 'from-neutral-100 to-neutral-50 border-neutral-300',
      iconBg: 'bg-neutral-700',
    },
    {
      step: '02',
      title: 'Phân tích chi tiết',
      en: 'Elaborated',
      desc: 'BA mô tả rõ: ai cần, làm gì, khi nào, tại sao, tiêu chí chấp nhận.',
      color: 'from-amber-100 to-amber-50 border-amber-300',
      iconBg: 'bg-amber-600',
    },
    {
      step: '03',
      title: 'Duyệt',
      en: 'Approved',
      desc: 'Stakeholder + sponsor xác nhận yêu cầu đúng và đáng làm.',
      color: 'from-sky-100 to-sky-50 border-sky-300',
      iconBg: 'bg-sky-600',
    },
    {
      step: '04',
      title: 'Triển khai',
      en: 'Implemented',
      desc: 'Dev code, QA test — yêu cầu thành tính năng thật.',
      color: 'from-brand-100 to-brand-50 border-brand-300',
      iconBg: 'bg-brand-600',
    },
    {
      step: '05',
      title: 'Kiểm tra & đóng',
      en: 'Verified & Closed',
      desc: 'Demo cho khách, người dùng test (UAT) → nếu OK → đóng yêu cầu.',
      color: 'from-emerald-100 to-emerald-50 border-emerald-300',
      iconBg: 'bg-emerald-600',
    },
  ];

  return (
    <ContentSlide
      eyebrow="Vòng đời của 1 yêu cầu"
      title="5 trạng thái mỗi yêu cầu đi qua — BA quản lý xuyên suốt"
      pageNumber={6}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-5 gap-4 mt-3">
        {stages.map((s, i) => (
          <motion.div
            key={s.step}
            variants={fadeUp}
            className={`rounded-2xl border-2 bg-gradient-to-br ${s.color} p-6 relative`}
          >
            <div
              className={`w-12 h-12 rounded-xl ${s.iconBg} text-white flex items-center justify-center font-display font-bold text-xl mb-4`}
            >
              {s.step}
            </div>
            <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-1">
              {s.title}
            </div>
            <div className="text-xl text-neutral-400 italic mb-3">{s.en}</div>
            <div className="text-xl text-neutral-700 leading-relaxed">{s.desc}</div>
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
        className="mt-9 px-7 py-5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-4"
      >
        <Repeat size={24} strokeWidth={2.2} className="text-rose-600 shrink-0 mt-1" />
        <div className="text-xl text-rose-900 leading-relaxed">
          <span className="font-bold">Thực tế:</span> Yêu cầu có thể bị "kéo lùi" — đang ở bước 4 mà khách đổi ý → BA đưa về bước 2 để mô tả lại. Đây là lý do BA cần <span className="font-bold">quản lý thay đổi</span> (học chi tiết ở Buổi 9).
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 7: Section 2 ----- */
export function Slide07Section2() {
  return (
    <SectionSlide
      number="02"
      title="Waterfall vs Agile — quy trình BA khác nhau ra sao?"
      caption="Cùng 6 bước, nhưng cách BA chia thời gian và tài liệu rất khác."
    />
  );
}

/* ----- Slide 8: Waterfall vs Agile ----- */
export function Slide08WaterfallVsAgile() {
  return (
    <ContentSlide
      eyebrow="2 cách làm dự án phổ biến"
      title="Cùng 6 bước, hai cách chia khác nhau"
      pageNumber={8}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-2">
        {/* Waterfall */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border-2 border-sky-200 bg-gradient-to-br from-sky-50 to-white p-7"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-xl bg-sky-600 text-white flex items-center justify-center">
              <Layers size={26} strokeWidth={2.4} />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-neutral-900">Waterfall</div>
              <div className="text-xl text-sky-700 italic">Thác nước — đi tuần tự</div>
            </div>
          </div>
          <div className="text-xl text-neutral-700 leading-relaxed mb-5">
            BA viết XONG toàn bộ tài liệu (BRD + SRS đầy đủ) trước khi dev bắt đầu code.
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3 text-xl">
              <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span className="text-neutral-700">Phù hợp dự án có yêu cầu rõ, ít thay đổi (vd. ngân hàng, nhà nước)</span>
            </div>
            <div className="flex items-start gap-3 text-xl">
              <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span className="text-neutral-700">Tài liệu đầy đủ ngay từ đầu, dễ audit</span>
            </div>
            <div className="flex items-start gap-3 text-xl">
              <Zap size={22} className="text-amber-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span className="text-neutral-700">Thay đổi giữa chừng = tốn nhiều thời gian sửa lại tất cả</span>
            </div>
          </div>
        </motion.div>

        {/* Agile */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 to-white p-7 shadow-lg shadow-brand-600/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-xl bg-brand-600 text-white flex items-center justify-center">
              <Repeat size={26} strokeWidth={2.4} />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-neutral-900">Agile</div>
              <div className="text-xl text-brand-700 italic">Linh hoạt — chia nhỏ làm theo từng đợt</div>
            </div>
          </div>
          <div className="text-xl text-neutral-700 leading-relaxed mb-5">
            BA chỉ viết User Story đủ cho 1 sprint (đợt 2 tuần). Vừa làm vừa điều chỉnh.
          </div>
          <div className="space-y-2.5">
            <div className="flex items-start gap-3 text-xl">
              <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span className="text-neutral-700">Phù hợp sản phẩm số (app, web), startup — yêu cầu hay đổi</span>
            </div>
            <div className="flex items-start gap-3 text-xl">
              <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span className="text-neutral-700">Có sản phẩm chạy được sau mỗi 2 tuần để khách feedback</span>
            </div>
            <div className="flex items-start gap-3 text-xl">
              <Zap size={22} className="text-amber-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span className="text-neutral-700">Cần BA có kỹ năng giao tiếp tốt, làm việc liên tục với team</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 9: BA trong 1 sprint Agile ----- */
export function Slide09SprintCycle() {
  const events = [
    {
      day: 'Trước sprint',
      title: 'Refinement',
      vi: 'Tinh chỉnh User Story',
      desc: 'BA + team họp để làm rõ User Story sắp đưa vào sprint — đủ rõ để dev ước lượng.',
    },
    {
      day: 'Ngày 1',
      title: 'Sprint Planning',
      vi: 'Họp đầu sprint',
      desc: 'Cả team chốt: sprint này sẽ làm những User Story nào, ai làm gì.',
    },
    {
      day: 'Mỗi ngày',
      title: 'Daily Stand-up',
      vi: 'Họp nhanh 15 phút đầu ngày',
      desc: 'BA: cập nhật yêu cầu mới, gỡ vướng, kết nối stakeholder.',
    },
    {
      day: 'Trong sprint',
      title: 'BA viết US tiếp',
      vi: 'Viết cho sprint sau',
      desc: 'BA luôn đi trước dev 1 sprint — làm tài liệu cho sprint kế tiếp.',
    },
    {
      day: 'Ngày 14',
      title: 'Sprint Review',
      vi: 'Demo cho khách',
      desc: 'Cả team show kết quả — BA chuẩn bị scenario demo + thu feedback.',
    },
    {
      day: 'Ngày 14',
      title: 'Retrospective',
      vi: 'Họp rút kinh nghiệm',
      desc: 'Team nhìn lại: cái gì tốt, cái gì cần cải thiện cho sprint sau.',
    },
  ];

  return (
    <ContentSlide
      eyebrow="BA trong 1 sprint Agile (2 tuần)"
      title="6 sự kiện chính BA tham gia mỗi sprint"
      pageNumber={9}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {events.map((e) => (
          <motion.div
            key={e.title}
            variants={fadeUp}
            className="rounded-xl border border-neutral-200 bg-white p-6 hover:border-brand-400 hover:shadow-md transition-all"
          >
            <div className="text-xl font-bold uppercase tracking-wider text-brand-600 mb-2">
              {e.day}
            </div>
            <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">
              {e.title}
            </div>
            <div className="text-xl text-neutral-500 italic mb-3">{e.vi}</div>
            <div className="text-xl text-neutral-600 leading-relaxed">{e.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 10: Section 3 ----- */
export function Slide10Section3() {
  return (
    <SectionSlide
      number="03"
      title="Lập kế hoạch BA — bắt đầu thế nào?"
      caption="5 việc cần làm trước khi đặt bút viết tài liệu — và bản đồ bên liên quan."
    />
  );
}

/* ----- Slide 11: Planning checklist ----- */
export function Slide11Planning() {
  const items = [
    {
      n: '01',
      title: 'Hiểu mục tiêu kinh doanh',
      desc: 'Vì sao dự án có? Đo thành công bằng số gì? — tránh làm vô ích.',
      icon: <Target size={26} strokeWidth={2.4} />,
    },
    {
      n: '02',
      title: 'Xác định bên liên quan',
      desc: 'Liệt kê tất cả người ảnh hưởng / bị ảnh hưởng → ai quan trọng nhất.',
      icon: <Users size={26} strokeWidth={2.4} />,
    },
    {
      n: '03',
      title: 'Chọn cách khơi gợi yêu cầu',
      desc: 'Phỏng vấn 1-1, hội thảo, quan sát, đọc tài liệu cũ — chọn phù hợp tình huống.',
      icon: <Search size={26} strokeWidth={2.4} />,
    },
    {
      n: '04',
      title: 'Chọn deliverable cần làm',
      desc: 'BRD? SRS? User Story? Wireframe? — không nhất thiết làm hết, làm cái cần.',
      icon: <FileText size={26} strokeWidth={2.4} />,
    },
    {
      n: '05',
      title: 'Lập timeline + cột mốc',
      desc: 'Mỗi bước ước lượng bao lâu, milestone nào quan trọng → ghi vào Jira/Notion.',
      icon: <Calendar size={26} strokeWidth={2.4} />,
    },
  ];

  return (
    <ContentSlide
      eyebrow="5 việc cần làm TRƯỚC khi viết tài liệu"
      title="Planning = bản đồ — không có nó, bạn lạc ngay tuần đầu"
      pageNumber={11}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-5 gap-4 mt-2">
        {items.map((item) => (
          <motion.div
            key={item.n}
            variants={fadeUp}
            className="rounded-xl border-2 border-neutral-200 bg-white p-5 hover:border-brand-400 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <div className="text-xl font-bold text-brand-600 mb-1">{item.n}</div>
            <div className="font-display text-xl font-bold text-neutral-900 mb-2 leading-tight">
              {item.title}
            </div>
            <div className="text-xl text-neutral-600 leading-relaxed">{item.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-9 px-7 py-5 rounded-xl bg-brand-50 border border-brand-200 flex items-start gap-4"
      >
        <ListChecks size={24} strokeWidth={2.2} className="text-brand-600 shrink-0 mt-1" />
        <div className="text-xl text-neutral-800 leading-relaxed">
          <span className="font-bold">Output Planning:</span> 1 tài liệu ngắn 1-2 trang ghi rõ 5 mục trên — giảng viên sẽ phát template TPL-005 ở Buổi 4 để học viên thực hành.
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 12: Stakeholder Power/Interest matrix ----- */
export function Slide12StakeholderMap() {
  const cells = [
    {
      label: 'QUẢN LÝ SÁT (Manage closely)',
      power: 'Cao',
      interest: 'Cao',
      examples: 'Tổng giám đốc · Trưởng phòng dùng hệ thống · Sponsor dự án',
      color: 'bg-brand-600 text-white',
      desc: 'Họp định kỳ · báo cáo tiến độ · xin ý kiến các quyết định lớn',
    },
    {
      label: 'GIỮ HÀI LÒNG (Keep satisfied)',
      power: 'Cao',
      interest: 'Thấp',
      examples: 'CFO · Pháp chế · CIO',
      color: 'bg-amber-500 text-white',
      desc: 'Update khi có cột mốc lớn · không làm phiền chi tiết',
    },
    {
      label: 'GIỮ THÔNG TIN (Keep informed)',
      power: 'Thấp',
      interest: 'Cao',
      examples: 'Nhân viên dùng hệ thống cuối · Khách hàng end-user',
      color: 'bg-sky-600 text-white',
      desc: 'Newsletter · demo định kỳ · thu feedback',
    },
    {
      label: 'THEO DÕI (Monitor)',
      power: 'Thấp',
      interest: 'Thấp',
      examples: 'Phòng ban không trực tiếp dùng · Đối tác phụ',
      color: 'bg-neutral-500 text-white',
      desc: 'Cập nhật tổng quát · không tốn nhiều thời gian',
    },
  ];

  return (
    <ContentSlide
      eyebrow="Bản đồ bên liên quan"
      title="Ma trận Quyền hạn × Mức độ quan tâm — biết ai cần chăm sóc kỹ"
      pageNumber={12}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-2">
        {cells.map((c) => (
          <motion.div
            key={c.label}
            variants={fadeUp}
            className="rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden"
          >
            <div className={`${c.color} px-6 py-4`}>
              <div className="text-xl font-bold uppercase tracking-wider">
                {c.label}
              </div>
              <div className="text-xl opacity-90 mt-1">
                Quyền hạn: {c.power} · Quan tâm: {c.interest}
              </div>
            </div>
            <div className="p-6">
              <div className="text-xl text-neutral-800 mb-3">
                <span className="font-bold">Ví dụ:</span> {c.examples}
              </div>
              <div className="text-xl text-neutral-600 leading-relaxed">{c.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-7 flex items-center gap-3 text-xl text-neutral-500"
      >
        <Crown size={22} className="text-brand-600" />
        <span>Quy tắc vàng: <span className="font-bold text-neutral-800">đầu tư 80% thời gian giao tiếp</span> vào nhóm "Quản lý sát" — họ quyết định dự án thành/bại.</span>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 13: Section 4 ----- */
export function Slide13Section4() {
  return (
    <SectionSlide
      number="04"
      title="AI applied + Demo case thực"
      caption="4 prompt mẫu giúp BA chạy quy trình nhanh hơn 5× + walkthrough timeline 1 phân hệ."
    />
  );
}

/* ----- Slide 14: AI prompts ----- */
export function Slide14AIPrompts() {
  const prompts = [
    {
      step: 'Bước 01 · Planning',
      title: 'Sinh khung Planning trong 30 giây',
      hint: 'BA lười không phải xấu — BA biết dùng AI để bỏ qua việc tay chân lặp đi lặp lại',
      tool: 'Claude Code',
      prompt: '"Cho dự án {tên}, sinh template Planning gồm: mục tiêu kinh doanh (3 bullet), bên liên quan (5 vai trò + power/interest), deliverable cần làm, timeline 4 tuần với cột mốc."',
    },
    {
      step: 'Bước 02 · Elicitation',
      title: 'Sinh bộ câu hỏi phỏng vấn',
      hint: 'Trước khi gặp khách, AI giúp bạn chuẩn bị 15-20 câu hỏi sắc',
      tool: 'Claude / ChatGPT',
      prompt: '"Tôi sắp phỏng vấn quản lý kho phân hệ Kho IT của Doanh nghiệp A. Sinh 15 câu hỏi mở (open-ended) — khám phá quy trình hiện tại, pain point, kỳ vọng hệ thống mới."',
    },
    {
      step: 'Bước 03 · Analysis',
      title: 'Vẽ sơ đồ quy trình tức thì',
      hint: 'Mermaid = ngôn ngữ vẽ flow bằng text — copy output dán vào mermaid.live',
      tool: 'Claude + Mermaid',
      prompt: '"Mô tả quy trình nhập kho thiết bị IT: nhân viên nhận → kiểm đếm → quét QR → lưu kệ → cập nhật hệ thống. Sinh sơ đồ flowchart Mermaid kèm nhánh exception (thiếu/hỏng)."',
    },
    {
      step: 'Bước 06 · Validate',
      title: 'Tự kiểm tra tài liệu',
      hint: 'Trước khi gửi khách, BA tự audit để tránh quay lại sửa',
      tool: 'NotebookLM',
      prompt: '"Upload bản nháp SRS + 8 tiêu chí kiểm tra (rõ ràng, đầy đủ, không mâu thuẫn, đo được, ưu tiên rõ, có ID, có acceptance, có version). Chỉ ra điểm thiếu."',
    },
  ];

  return (
    <ContentSlide
      eyebrow="AI applied — luyện 4 bước nhanh nhất"
      title="4 prompt copy-paste — dùng được ngay với case thực"
      pageNumber={14}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-2">
        {prompts.map((p) => (
          <motion.div
            key={p.step}
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
            <div className="text-xl text-neutral-500 italic leading-snug mb-3">
              {p.hint}
            </div>
            <div className="rounded-xl bg-neutral-950 text-neutral-200 p-4 text-xl leading-relaxed font-mono">
              {p.prompt}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 15: Demo timeline 1 phân hệ ----- */
export function Slide15DemoTimeline() {
  const phases = [
    {
      days: 'Ngày 1-2',
      stage: 'Planning',
      who: 'BA + Sponsor',
      output: 'Planning doc 2 trang: mục tiêu, scope, stakeholder',
      color: 'bg-neutral-600 text-white',
      iconBg: 'bg-neutral-100 text-neutral-700',
    },
    {
      days: 'Ngày 3-7',
      stage: 'Elicitation',
      who: 'BA + Quản lý kho + 2 nhân viên',
      output: '3 buổi phỏng vấn 1-1 + 1 hội thảo · Note 8 trang',
      color: 'bg-amber-600 text-white',
      iconBg: 'bg-amber-100 text-amber-700',
    },
    {
      days: 'Ngày 8-10',
      stage: 'Analysis',
      who: 'BA solo (có thể nhờ AI)',
      output: '3 sơ đồ BPMN + 1 sơ đồ ERD + 1 use case diagram',
      color: 'bg-sky-600 text-white',
      iconBg: 'bg-sky-100 text-sky-700',
    },
    {
      days: 'Ngày 11-15',
      stage: 'Design + Document',
      who: 'BA + UI Designer',
      output: '12 wireframe + SRS hoàn chỉnh 25 trang + 35 user story',
      color: 'bg-brand-600 text-white',
      iconBg: 'bg-brand-100 text-brand-700',
    },
    {
      days: 'Ngày 16-17',
      stage: 'Validate',
      who: 'BA + Stakeholder',
      output: 'Demo + review meeting · Sign-off · Move to dev',
      color: 'bg-emerald-600 text-white',
      iconBg: 'bg-emerald-100 text-emerald-700',
    },
  ];

  return (
    <ContentSlide
      eyebrow="Case thực: phân hệ Kho IT (Doanh nghiệp A)"
      title="17 ngày BA cho 1 phân hệ ERP — từ Planning đến Sign-off"
      pageNumber={15}
      totalPages={16}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-3 mt-2">
        {phases.map((p, i) => (
          <motion.div
            key={p.days}
            variants={fadeUp}
            className="rounded-xl border border-neutral-200 bg-white p-5 flex items-center gap-5 hover:border-brand-400 transition-all"
          >
            <div className={`shrink-0 w-32 px-4 py-3 rounded-lg ${p.color} text-center`}>
              <div className="text-xl font-bold leading-tight">{p.days}</div>
            </div>
            <div className={`shrink-0 w-44 px-4 py-3 rounded-lg ${p.iconBg} text-center`}>
              <div className="font-display text-2xl font-bold leading-tight">{p.stage}</div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-5">
              <div>
                <div className="text-xl font-semibold text-neutral-500 mb-1">Ai tham gia</div>
                <div className="text-xl text-neutral-800">{p.who}</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-neutral-500 mb-1">Output cuối</div>
                <div className="text-xl text-neutral-800">{p.output}</div>
              </div>
            </div>
            {i < phases.length - 1 && (
              <ArrowRight
                size={22}
                className="absolute -bottom-3.5 left-16 text-brand-400 bg-white rounded-full"
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
        className="mt-7 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white flex items-center gap-4"
      >
        <Bot size={28} strokeWidth={2.2} className="shrink-0" />
        <div className="text-xl">
          <span className="font-bold">Có AI:</span> 17 ngày → có thể rút xuống 10-12 ngày (AI giúp Analysis + Document nhanh hơn 2-3×).
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 16: Closing ----- */
export function Slide16Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 03"
      statement="Có quy trình → bạn không bao giờ 'lạc'. Không có quy trình → bạn lạc ngay sprint đầu tiên."
      attribution="Buổi 4: Khơi gợi yêu cầu (Elicitation) — kỹ thuật chi tiết"
    />
  );
}

/* ----- registry ----- */
export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-process', Component: Slide04Section1 },
  { id: 'ba-process', Component: Slide05BAProcess },
  { id: 'requirement-lifecycle', Component: Slide06RequirementLifecycle },
  { id: 'section-waterfall-agile', Component: Slide07Section2 },
  { id: 'waterfall-vs-agile', Component: Slide08WaterfallVsAgile },
  { id: 'sprint-cycle', Component: Slide09SprintCycle },
  { id: 'section-planning', Component: Slide10Section3 },
  { id: 'planning-checklist', Component: Slide11Planning },
  { id: 'stakeholder-map', Component: Slide12StakeholderMap },
  { id: 'section-ai-demo', Component: Slide13Section4 },
  { id: 'ai-prompts', Component: Slide14AIPrompts },
  { id: 'demo-timeline', Component: Slide15DemoTimeline },
  { id: 'closing', Component: Slide16Closing },
];
