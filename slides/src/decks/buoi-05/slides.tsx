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
  Layers,
  Workflow,
  Database,
  Map,
  ListChecks,
  ArrowLeftRight,
  GitBranch,
  ToggleRight,
  Shield,
  Gauge,
  Users,
  Briefcase,
  User,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Circle,
  Square,
  Diamond,
  ClipboardList,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 5 — PHÂN TÍCH YÊU CẦU
 * ============================================================ */

/* ----- Slide 1: Cover ----- */
export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 05 · Khoá Ready for BA"
      title={'Phân tích Yêu cầu'}
      subtitle="Biến mớ note phỏng vấn 5-10 trang thành sơ đồ rõ ràng — BPMN, ERD, Use Case, User Story Map. Đây là phần 'tay làm' nhiều nhất của BA."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: '4 kỹ thuật cốt lõi' },
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
            Sự thật về Phân tích
          </div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            Note phỏng vấn 5 trang <span className="text-brand-600">KHÔNG</span> phải yêu cầu — bạn cần <span className="text-brand-600">PHÂN TÍCH</span>.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            Phân tích = biến mớ chữ thành <span className="font-semibold text-neutral-800">sơ đồ + bảng có cấu trúc</span> — dev nhìn vào hiểu ngay.
          </p>
          <div className="mt-9 text-xl text-neutral-400">
            BA junior dành 50% thời gian cho bước này
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="4" label="Kỹ thuật cốt lõi (BPMN, ERD, UC, Story Map)" accent />
          <StatCard value="50%" label="Thời gian BA dành cho analysis" />
          <StatCard value="5+" label="Sơ đồ trung bình cho 1 phân hệ" />
          <StatCard value="60%" label="AI rút ngắn thời gian vẽ sơ đồ" accent />
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
      totalPages={17}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-6 mt-2">
        <Card icon={<Layers size={26} strokeWidth={2.4} />} title="1. Phân loại yêu cầu">
          3 cấp yêu cầu (Business / User / System) + Chức năng vs Phi chức năng.
        </Card>
        <Card icon={<Workflow size={26} strokeWidth={2.4} />} title="2. Phân tích quy trình">
          AS-IS (hiện tại) vs TO-BE (mong muốn) + sơ đồ BPMN cơ bản.
        </Card>
        <Card icon={<Database size={26} strokeWidth={2.4} />} title="3. Phân tích dữ liệu + use case">
          ERD (sơ đồ dữ liệu) · Use Case Diagram + Spec · User Story Map.
        </Card>
        <Card icon={<Sparkles size={26} strokeWidth={2.4} />} title="4. AI applied + Demo phân hệ Kho IT">
          4 prompt mẫu + walkthrough phân tích thực 1 phân hệ Doanh nghiệp A.
        </Card>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-10 flex items-center gap-3 text-xl text-neutral-500"
      >
        <Sparkles size={22} className="text-brand-600" />
        Bài tập về nhà: phân tích 1 phân hệ tự chọn — nộp 1 BPMN + 1 ERD + 3 use case.
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 4: Section 1 ----- */
export function Slide04Section1() {
  return (
    <SectionSlide
      number="01"
      title="Phân loại yêu cầu — bắt đầu có cấu trúc"
      caption="3 cấp yêu cầu (Business → User → System) + Chức năng vs Phi chức năng."
    />
  );
}

/* ----- Slide 5: 3 cấp yêu cầu ----- */
export function Slide05ThreeLayers() {
  const layers = [
    {
      level: 'Business Requirement',
      vi: 'Yêu cầu kinh doanh',
      icon: <Briefcase size={28} strokeWidth={2.4} />,
      qty: '3-5 cái',
      desc: 'Vì sao làm dự án? Đo thành công bằng gì?',
      example: 'VD (case Sửa chữa): "Giảm 50% thời gian khách đặt lịch — từ gọi điện 10 phút xuống app 30 giây."',
      color: 'from-brand-600 to-brand-700',
      text: 'text-white',
      tone: 'brand',
    },
    {
      level: 'User Requirement',
      vi: 'Yêu cầu người dùng',
      icon: <User size={28} strokeWidth={2.4} />,
      qty: '20-50 cái',
      desc: 'Người dùng cần LÀM GÌ với hệ thống?',
      example: 'VD: "Khách hàng có thể chọn ngày + khung giờ rảnh, xem được thợ phù hợp, theo dõi trạng thái sửa."',
      color: 'from-amber-500 to-amber-600',
      text: 'text-white',
      tone: 'amber',
    },
    {
      level: 'System Requirement',
      vi: 'Yêu cầu hệ thống',
      icon: <Cpu size={28} strokeWidth={2.4} />,
      qty: '100-300 cái',
      desc: 'Hệ thống phải LÀM GÌ + LÀM NHƯ THẾ NÀO?',
      example: 'VD: "API /booking nhận POST với 5 field, validate format, lưu DB, gửi email thông báo trong 5 giây."',
      color: 'from-sky-50 to-sky-100/50 border-sky-200',
      text: 'text-sky-900',
      tone: 'sky',
      isLight: true,
    },
  ];

  return (
    <ContentSlide
      eyebrow="3 cấp yêu cầu — từ tổng quát đến chi tiết"
      title="Như cái phễu — Business hẹp, System rộng"
      pageNumber={5}
      totalPages={17}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-4 mt-2 max-w-[1500px] mx-auto">
        {layers.map((l, i) => (
          <motion.div
            key={l.level}
            variants={fadeUp}
            className={`rounded-2xl border-2 ${
              l.isLight
                ? `bg-gradient-to-br ${l.color}`
                : `bg-gradient-to-br ${l.color} border-transparent shadow-lg`
            } p-7`}
          >
            <div className="flex items-start gap-6">
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${
                  l.isLight ? 'bg-white/80 text-current' : 'bg-white/20'
                } ${l.text}`}
              >
                {l.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-2">
                  <div className={`text-xl font-bold uppercase tracking-wider opacity-80 ${l.text}`}>
                    Cấp {i + 1} · {l.qty}
                  </div>
                </div>
                <div className={`font-display text-3xl font-bold leading-tight mb-2 ${l.text}`}>
                  {l.vi} <span className="opacity-70 text-2xl italic font-normal">— {l.level}</span>
                </div>
                <div className={`text-xl mb-3 ${l.text} opacity-90`}>{l.desc}</div>
                <div className={`text-xl ${l.text} opacity-80 italic`}>{l.example}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 6: Functional vs Non-functional ----- */
export function Slide06FunctionalVsNonFunctional() {
  return (
    <ContentSlide
      eyebrow="2 nhóm yêu cầu hệ thống"
      title="Chức năng (làm GÌ) vs Phi chức năng (làm NHƯ THẾ NÀO)"
      pageNumber={6}
      totalPages={17}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-2">
        {/* Functional */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 to-white p-7"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-xl bg-brand-600 text-white flex items-center justify-center">
              <ToggleRight size={28} strokeWidth={2.4} />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-neutral-900">Chức năng</div>
              <div className="text-xl text-brand-700 italic">Functional Requirement</div>
            </div>
          </div>
          <div className="text-2xl text-neutral-800 mb-5 font-semibold">
            Hệ thống <span className="text-brand-700">LÀM GÌ?</span>
          </div>
          <div className="space-y-3 text-xl text-neutral-700">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span>Khách hàng đặt lịch sửa chữa qua app</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span>Admin xem dashboard tổng số ticket trong ngày</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span>Hệ thống gửi email xác nhận sau khi đặt</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span>Thợ cập nhật trạng thái: Đã nhận / Đang sửa / Hoàn thành</span>
            </div>
          </div>
        </motion.div>

        {/* Non-functional */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-7"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-xl bg-amber-500 text-white flex items-center justify-center">
              <Gauge size={28} strokeWidth={2.4} />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-neutral-900">Phi chức năng</div>
              <div className="text-xl text-amber-700 italic">Non-functional Requirement</div>
            </div>
          </div>
          <div className="text-2xl text-neutral-800 mb-5 font-semibold">
            Hệ thống chạy <span className="text-amber-700">NHƯ THẾ NÀO?</span>
          </div>
          <div className="space-y-3 text-xl text-neutral-700">
            <div className="flex items-start gap-3">
              <Gauge size={22} className="text-amber-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span><span className="font-bold">Hiệu năng:</span> Trang chủ load ≤ 2 giây trên 4G</span>
            </div>
            <div className="flex items-start gap-3">
              <Shield size={22} className="text-amber-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span><span className="font-bold">Bảo mật:</span> Mã hoá thông tin cá nhân (PII)</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={22} className="text-amber-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span><span className="font-bold">Khả dụng:</span> Hệ thống chạy 99.9% (downtime ≤ 8h/năm)</span>
            </div>
            <div className="flex items-start gap-3">
              <Users size={22} className="text-amber-600 shrink-0 mt-1" strokeWidth={2.4} />
              <span><span className="font-bold">Dễ dùng:</span> Đặt lịch tối đa 3 click</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-7 px-7 py-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-4"
      >
        <AlertTriangle size={22} strokeWidth={2.2} className="text-rose-600 shrink-0 mt-1" />
        <div className="text-xl text-rose-900 leading-relaxed">
          <span className="font-bold">BA fresher hay quên:</span> chỉ viết Functional, bỏ qua Non-functional → đến giai đoạn dev mới phát hiện hệ thống chậm/không bảo mật → tốn rất nhiều thời gian sửa lại.
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
      title="Phân tích quy trình — Process Modeling"
      caption="Vẽ AS-IS để hiểu hiện tại, vẽ TO-BE để định hướng tương lai. BPMN là ngôn ngữ vẽ chuẩn."
    />
  );
}

/* ----- Slide 8: AS-IS vs TO-BE ----- */
export function Slide08AsIsToBe() {
  return (
    <ContentSlide
      eyebrow="2 sơ đồ song song — đặt cạnh nhau để thấy GAP"
      title="AS-IS (hiện tại) vs TO-BE (tương lai)"
      pageNumber={8}
      totalPages={17}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-[1fr_auto_1fr] gap-7 items-stretch mt-2">
        {/* AS-IS */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border-2 border-neutral-300 bg-gradient-to-br from-neutral-100 to-neutral-50 p-7"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-xl bg-neutral-700 text-white flex items-center justify-center">
              <ClipboardList size={26} strokeWidth={2.4} />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-neutral-900">AS-IS</div>
              <div className="text-xl text-neutral-600 italic">Hiện tại đang làm thế nào</div>
            </div>
          </div>
          <div className="text-xl text-neutral-700 leading-relaxed mb-5">
            Vẽ quy trình KH đặt lịch sửa chữa <span className="font-bold">hiện tại</span>:
          </div>
          <div className="space-y-2 text-xl text-neutral-700 bg-white rounded-lg p-5 border border-neutral-200">
            <div>1. Khách gọi điện hotline ☎️</div>
            <div>2. Lễ tân ghi vào sổ tay 📓</div>
            <div>3. Lễ tân gọi thợ qua điện thoại</div>
            <div>4. Thợ tự nhớ lịch (giấy)</div>
            <div>5. KH không biết khi nào thợ đến</div>
          </div>
          <div className="mt-4 px-4 py-3 rounded-lg bg-rose-100 text-rose-900 text-xl">
            <span className="font-bold">Pain points:</span> Mất 10-15 phút/đơn · Hay sót · KH stress
          </div>
        </motion.div>

        {/* GAP arrow */}
        <motion.div variants={fadeUp} className="flex flex-col items-center justify-center px-2">
          <div className="text-xl font-bold text-brand-600 uppercase tracking-wider mb-3">GAP</div>
          <ArrowLeftRight size={48} className="text-brand-600" strokeWidth={2.5} />
          <div className="text-xl text-neutral-500 mt-3 italic text-center">Khoảng<br/>cách</div>
        </motion.div>

        {/* TO-BE */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 to-white p-7 shadow-lg shadow-brand-600/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-xl bg-brand-600 text-white flex items-center justify-center">
              <Sparkles size={26} strokeWidth={2.4} />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-neutral-900">TO-BE</div>
              <div className="text-xl text-brand-700 italic">Tương lai mong muốn</div>
            </div>
          </div>
          <div className="text-xl text-neutral-700 leading-relaxed mb-5">
            Vẽ quy trình KH đặt lịch <span className="font-bold">qua hệ thống mới</span>:
          </div>
          <div className="space-y-2 text-xl text-neutral-700 bg-white rounded-lg p-5 border border-brand-200">
            <div>1. KH mở app, chọn dịch vụ 📱</div>
            <div>2. Hệ thống auto match thợ gần nhất</div>
            <div>3. Push notification cho thợ</div>
            <div>4. Thợ confirm trong 5 phút</div>
            <div>5. KH tracking real-time như Grab 🚀</div>
          </div>
          <div className="mt-4 px-4 py-3 rounded-lg bg-emerald-100 text-emerald-900 text-xl">
            <span className="font-bold">Lợi ích:</span> 30 giây/đơn · 0 sai sót · KH happy
          </div>
        </motion.div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 9: BPMN cơ bản ----- */
export function Slide09BPMN() {
  const shapes = [
    {
      icon: <Circle size={40} strokeWidth={2} />,
      name: 'Bắt đầu / Kết thúc',
      en: 'Event',
      desc: 'Vòng tròn — đánh dấu mốc.',
    },
    {
      icon: <div className="w-12 h-7 rounded-lg bg-current" />,
      name: 'Công việc',
      en: 'Task',
      desc: 'Hình chữ nhật bo tròn — 1 hành động.',
    },
    {
      icon: <Diamond size={36} strokeWidth={2} />,
      name: 'Quyết định',
      en: 'Gateway',
      desc: 'Hình thoi — rẽ nhánh có/không.',
    },
    {
      icon: <ArrowRight size={40} strokeWidth={2} />,
      name: 'Luồng',
      en: 'Flow',
      desc: 'Mũi tên — nối các bước.',
    },
  ];

  return (
    <ContentSlide
      eyebrow="BPMN — sơ đồ quy trình nghiệp vụ"
      title="4 hình cơ bản đủ vẽ 80% quy trình"
      pageNumber={9}
      totalPages={17}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-4 gap-5 mt-2">
        {shapes.map((s) => (
          <motion.div
            key={s.name}
            variants={fadeUp}
            className="rounded-2xl border-2 border-neutral-200 bg-white p-6 text-center"
          >
            <div className="h-20 flex items-center justify-center text-brand-600 mb-3">
              {s.icon}
            </div>
            <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">
              {s.name}
            </div>
            <div className="text-xl text-neutral-400 italic mb-2">{s.en}</div>
            <div className="text-xl text-neutral-600 leading-relaxed">{s.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Visual flow example */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-7 rounded-2xl bg-neutral-950 text-white p-7"
      >
        <div className="text-xl font-bold uppercase tracking-wider text-brand-400 mb-4">
          Ví dụ: KH đặt lịch sửa chữa
        </div>
        <div className="flex items-center gap-3 text-xl text-white/90 flex-wrap">
          <div className="w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center text-xl">START</div>
          <ArrowRight size={20} />
          <div className="px-4 py-3 rounded-lg bg-brand-700 border-2 border-brand-500">KH chọn dịch vụ</div>
          <ArrowRight size={20} />
          <div className="px-4 py-3 rounded-lg bg-brand-700 border-2 border-brand-500">KH chọn ngày giờ</div>
          <ArrowRight size={20} />
          <div className="px-4 py-3 rotate-45 bg-amber-600 border-2 border-amber-400 flex items-center justify-center w-24 h-24">
            <span className="-rotate-45 text-xl font-bold">Còn thợ?</span>
          </div>
          <ArrowRight size={20} />
          <div className="px-4 py-3 rounded-lg bg-brand-700 border-2 border-brand-500">Match thợ + xác nhận</div>
          <ArrowRight size={20} />
          <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-xl">END</div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-5 flex items-center gap-3 text-xl text-neutral-500"
      >
        <Sparkles size={22} className="text-brand-600" />
        Tool free vẽ BPMN: <span className="font-bold text-neutral-800">mermaid.live</span> · <span className="font-bold text-neutral-800">draw.io</span> · hoặc bảo Claude Code sinh code Mermaid → paste vào.
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 10: Section 3 ----- */
export function Slide10Section3() {
  return (
    <SectionSlide
      number="03"
      title="Phân tích dữ liệu + Use Case"
      caption="ERD (sơ đồ dữ liệu) · Use Case (tình huống dùng) · User Story Map (bản đồ tổng thể)."
    />
  );
}

/* ----- Slide 11: ERD ----- */
export function Slide11ERD() {
  return (
    <ContentSlide
      eyebrow="ERD — sơ đồ thực thể & quan hệ"
      title="3 thành phần — Thực thể, Thuộc tính, Quan hệ"
      pageNumber={11}
      totalPages={17}
    >
      <div className="grid grid-cols-[1.1fr_1fr] gap-7 mt-2">
        {/* Concepts */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-4">
          <motion.div variants={fadeUp} className="rounded-xl border-2 border-brand-200 bg-brand-50/40 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                <Square size={24} strokeWidth={2.4} />
              </div>
              <div className="font-display text-2xl font-bold text-neutral-900">Thực thể (Entity)</div>
            </div>
            <div className="text-xl text-neutral-700 leading-relaxed">
              "Vật" cần lưu trong DB — vẽ hình chữ nhật. VD: <span className="font-bold">Khách hàng, Thợ, Đặt lịch, Dịch vụ.</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-xl border-2 border-amber-200 bg-amber-50/40 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-amber-500 text-white flex items-center justify-center">
                <ListChecks size={24} strokeWidth={2.4} />
              </div>
              <div className="font-display text-2xl font-bold text-neutral-900">Thuộc tính (Attribute)</div>
            </div>
            <div className="text-xl text-neutral-700 leading-relaxed">
              Các "cột" của thực thể. VD Khách hàng: <span className="font-bold">id, tên, sđt, email, địa chỉ.</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-xl border-2 border-emerald-200 bg-emerald-50/40 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <GitBranch size={24} strokeWidth={2.4} />
              </div>
              <div className="font-display text-2xl font-bold text-neutral-900">Quan hệ (Relationship)</div>
            </div>
            <div className="text-xl text-neutral-700 leading-relaxed">
              Cách 2 thực thể liên kết. VD: <span className="font-bold">1 KH có nhiều Đặt lịch (1-N)</span>, <span className="font-bold">1 Đặt lịch có 1 Thợ (1-1)</span>.
            </div>
          </motion.div>
        </motion.div>

        {/* Visual ERD example */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="rounded-2xl bg-neutral-950 text-white p-7">
          <div className="text-xl font-bold uppercase tracking-wider text-brand-400 mb-5">
            Ví dụ ERD đơn giản
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex-1 px-5 py-4 rounded-lg bg-brand-700/30 border-2 border-brand-500">
                <div className="font-bold text-2xl">Khách hàng</div>
                <div className="text-xl text-white/70 mt-1">id · tên · sđt · email</div>
              </div>
              <div className="text-xl text-brand-400 font-mono whitespace-nowrap">1 — N</div>
              <div className="flex-1 px-5 py-4 rounded-lg bg-brand-700/30 border-2 border-brand-500">
                <div className="font-bold text-2xl">Đặt lịch</div>
                <div className="text-xl text-white/70 mt-1">id · ngày · giờ · trạng thái</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1" />
              <div className="text-xl text-brand-400 font-mono">N — 1</div>
              <div className="flex-1 px-5 py-4 rounded-lg bg-brand-700/30 border-2 border-brand-500">
                <div className="font-bold text-2xl">Thợ</div>
                <div className="text-xl text-white/70 mt-1">id · tên · khu vực · skill</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ContentSlide>
  );
}

/* ----- Slide 12: Use Case Diagram + Spec ----- */
export function Slide12UseCase() {
  return (
    <ContentSlide
      eyebrow="Use Case — ca sử dụng"
      title="Sơ đồ (Diagram) + Đặc tả (Spec) — đi cặp với nhau"
      pageNumber={12}
      totalPages={17}
    >
      <div className="grid grid-cols-2 gap-7 mt-2">
        {/* UC Diagram */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center">
              <Users size={24} strokeWidth={2.4} />
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-neutral-900">Use Case Diagram</div>
              <div className="text-xl text-brand-700 italic">Bức tranh tổng — actor + use case</div>
            </div>
          </div>
          <div className="rounded-lg bg-white border-2 border-brand-100 p-6 mb-4">
            <div className="flex items-center gap-5">
              <div className="text-center">
                <div className="text-4xl">🧑</div>
                <div className="text-xl font-bold mt-1">Khách hàng</div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="px-4 py-2 rounded-full bg-brand-100 text-brand-900 text-xl text-center border border-brand-300">Đặt lịch sửa chữa</div>
                <div className="px-4 py-2 rounded-full bg-brand-100 text-brand-900 text-xl text-center border border-brand-300">Theo dõi trạng thái</div>
                <div className="px-4 py-2 rounded-full bg-brand-100 text-brand-900 text-xl text-center border border-brand-300">Đánh giá thợ</div>
              </div>
            </div>
          </div>
          <div className="text-xl text-neutral-600 leading-relaxed">
            <span className="font-bold">Vai trò sử dụng (Actor)</span> — người/hệ thống ngoài tương tác. <span className="font-bold">Use Case</span> — 1 việc actor làm để đạt mục tiêu.
          </div>
        </motion.div>

        {/* UC Spec */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="rounded-2xl border-2 border-neutral-200 bg-white p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
              <ListChecks size={24} strokeWidth={2.4} />
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-neutral-900">Use Case Spec</div>
              <div className="text-xl text-neutral-600 italic">Chi tiết từng bước</div>
            </div>
          </div>
          <div className="rounded-lg bg-neutral-50 border border-neutral-200 p-5 space-y-2 text-xl">
            <div><span className="font-bold text-brand-700">UC ID:</span> UC-001</div>
            <div><span className="font-bold text-brand-700">Tên:</span> Đặt lịch sửa chữa</div>
            <div><span className="font-bold text-brand-700">Actor:</span> Khách hàng</div>
            <div><span className="font-bold text-brand-700">Điều kiện trước:</span> KH đã đăng nhập</div>
            <div className="pt-2 border-t border-neutral-200">
              <div className="font-bold text-brand-700 mb-1">Luồng chính:</div>
              <div className="pl-3 space-y-1 text-neutral-700">
                <div>1. KH mở app, chọn "Đặt lịch"</div>
                <div>2. Chọn dịch vụ + ngày giờ</div>
                <div>3. Hệ thống match thợ</div>
                <div>4. KH xác nhận → tạo booking</div>
              </div>
            </div>
            <div className="pt-2 border-t border-neutral-200">
              <span className="font-bold text-rose-700">Luồng phụ (Alt):</span>
              <span className="text-neutral-700"> Không còn thợ rảnh → đề xuất ngày khác</span>
            </div>
            <div><span className="font-bold text-brand-700">Điều kiện sau:</span> Booking ở trạng thái "Đã xác nhận"</div>
          </div>
        </motion.div>
      </div>
    </ContentSlide>
  );
}

/* ----- Slide 13: User Story Mapping ----- */
export function Slide13UserStoryMap() {
  const cols = [
    { phase: 'Tìm hiểu', activities: ['Xem giới thiệu app', 'Đọc dịch vụ'] },
    { phase: 'Đặt lịch', activities: ['Chọn dịch vụ', 'Chọn ngày giờ', 'Xem giá'] },
    { phase: 'Theo dõi', activities: ['Xem thợ', 'Tracking real-time', 'Chat với thợ'] },
    { phase: 'Sau dịch vụ', activities: ['Thanh toán', 'Đánh giá', 'Đặt lại'] },
  ];

  return (
    <ContentSlide
      eyebrow="User Story Mapping — bản đồ trải nghiệm"
      title="Sắp User Story theo hành trình người dùng"
      pageNumber={13}
      totalPages={17}
    >
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="text-xl text-neutral-600 mb-5 leading-relaxed">
        Thay vì list 50 User Story thẳng đứng → vẽ thành bản đồ 2D: <span className="font-bold text-neutral-800">cột = giai đoạn người dùng</span>, <span className="font-bold text-neutral-800">hàng = mức độ ưu tiên</span> (must / should / could).
      </motion.div>

      <motion.div variants={stagger} initial="hidden" animate="show" className="rounded-2xl border-2 border-neutral-200 bg-white p-5">
        {/* Header row: phases */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {cols.map((c) => (
            <motion.div key={c.phase} variants={fadeUp} className="px-4 py-3 rounded-lg bg-brand-600 text-white text-center">
              <div className="text-xl font-bold uppercase tracking-wider">{c.phase}</div>
            </motion.div>
          ))}
        </div>

        {/* Activities (Must) */}
        <div className="grid grid-cols-[120px_1fr] gap-3 items-start mb-3">
          <div className="px-3 py-2 rounded-lg bg-rose-100 text-rose-900 text-xl font-bold uppercase tracking-wider text-center">
            MUST
          </div>
          <div className="grid grid-cols-4 gap-3">
            {cols.map((c) => (
              <div key={c.phase} className="space-y-2">
                {c.activities.slice(0, 1).map((a) => (
                  <motion.div key={a} variants={fadeUp} className="px-3 py-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xl text-neutral-700">
                    {a}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* SHOULD */}
        <div className="grid grid-cols-[120px_1fr] gap-3 items-start mb-3">
          <div className="px-3 py-2 rounded-lg bg-amber-100 text-amber-900 text-xl font-bold uppercase tracking-wider text-center">
            SHOULD
          </div>
          <div className="grid grid-cols-4 gap-3">
            {cols.map((c) => (
              <div key={c.phase} className="space-y-2">
                {c.activities.slice(1, 2).map((a) => (
                  <motion.div key={a} variants={fadeUp} className="px-3 py-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xl text-neutral-700">
                    {a}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* COULD */}
        <div className="grid grid-cols-[120px_1fr] gap-3 items-start">
          <div className="px-3 py-2 rounded-lg bg-emerald-100 text-emerald-900 text-xl font-bold uppercase tracking-wider text-center">
            COULD
          </div>
          <div className="grid grid-cols-4 gap-3">
            {cols.map((c) => (
              <div key={c.phase} className="space-y-2">
                {c.activities.slice(2, 3).map((a) => (
                  <motion.div key={a} variants={fadeUp} className="px-3 py-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xl text-neutral-700">
                    {a}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-5 px-6 py-4 rounded-xl bg-brand-50 border border-brand-200 flex items-start gap-3"
      >
        <Sparkles size={22} strokeWidth={2.2} className="text-brand-600 shrink-0 mt-1" />
        <div className="text-xl text-neutral-800 leading-relaxed">
          <span className="font-bold">MVP (sản phẩm tối thiểu):</span> chỉ làm hàng MUST trước → ra mắt → có feedback → mới làm SHOULD/COULD. Tool: <span className="font-bold">Miro · FigJam · Mural</span>.
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 14: Section 4 ----- */
export function Slide14Section4() {
  return (
    <SectionSlide
      number="04"
      title="AI applied + Demo phân hệ thực"
      caption="4 prompt mẫu cho 4 kỹ thuật + walkthrough phân tích phân hệ Kho IT của Doanh nghiệp A."
    />
  );
}

/* ----- Slide 15: AI prompts ----- */
export function Slide15AIPrompts() {
  const prompts = [
    {
      step: 'Vẽ BPMN',
      title: 'Sinh sơ đồ quy trình từ mô tả',
      hint: 'Output Mermaid code → paste vào mermaid.live',
      tool: 'Claude + Mermaid',
      prompt: '"Mô tả quy trình KH đặt lịch sửa: KH chọn dịch vụ → chọn ngày → hệ thống match thợ → KH xác nhận. Sinh BPMN flowchart Mermaid kèm nhánh phụ (không còn thợ rảnh)."',
    },
    {
      step: 'Sinh ERD',
      title: 'Sinh sơ đồ dữ liệu từ user story',
      hint: 'Đưa list user story → AI gợi ý entity và quan hệ',
      tool: 'Claude Code',
      prompt: '"Cho 10 user story vai trò KH đặt lịch sửa chữa [paste]. Sinh ERD gồm các entity chính, attribute, và quan hệ (1-1 / 1-N / N-N). Output dạng Mermaid ER diagram."',
    },
    {
      step: 'Use Case',
      title: 'Sinh Use Case Diagram + Spec',
      hint: 'AI sinh khung — BA edit theo nghiệp vụ thực',
      tool: 'Claude Code',
      prompt: '"Cho phân hệ Kho IT (Doanh nghiệp A), sinh 5 Use Case chính cho actor Nhân viên kho. Mỗi UC có template đầy đủ: ID, tên, actor, điều kiện trước/sau, luồng chính, luồng phụ."',
    },
    {
      step: 'Story Map',
      title: 'Sinh User Story Map từ list features',
      hint: 'AI tổ chức stories theo journey + priority',
      tool: 'Claude Code',
      prompt: '"Cho list 30 tính năng app sửa chữa [paste]. Tổ chức thành User Story Map: cột = giai đoạn KH (Tìm hiểu / Đặt / Theo dõi / Sau), hàng = priority (Must / Should / Could)."',
    },
  ];

  return (
    <ContentSlide
      eyebrow="AI applied — 4 kỹ thuật phân tích"
      title="4 prompt copy-paste sinh sơ đồ trong 30 giây"
      pageNumber={15}
      totalPages={17}
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

/* ----- Slide 16: Demo Kho IT ----- */
export function Slide16DemoKhoIT() {
  const outputs = [
    {
      icon: <Workflow size={26} strokeWidth={2.4} />,
      title: '3 BPMN',
      desc: 'Nhập kho · Cấp phát thiết bị · Kiểm kê định kỳ',
      tone: 'brand',
    },
    {
      icon: <Database size={26} strokeWidth={2.4} />,
      title: '1 ERD',
      desc: 'Equipment · Stock · Transaction · Employee · Department',
      tone: 'amber',
    },
    {
      icon: <ListChecks size={26} strokeWidth={2.4} />,
      title: '5 Use Case',
      desc: 'Quét QR cấp · Trả thiết bị · Báo hỏng · Báo cáo tồn · Audit',
      tone: 'sky',
    },
    {
      icon: <Map size={26} strokeWidth={2.4} />,
      title: '1 Story Map',
      desc: 'Hành trình quản lý kho — 4 phase × 3 priority',
      tone: 'emerald',
    },
  ];

  const tones: Record<string, { bg: string; iconBg: string }> = {
    brand: { bg: 'border-brand-200 bg-brand-50/40', iconBg: 'bg-brand-600' },
    amber: { bg: 'border-amber-200 bg-amber-50/40', iconBg: 'bg-amber-500' },
    sky: { bg: 'border-sky-200 bg-sky-50/40', iconBg: 'bg-sky-600' },
    emerald: { bg: 'border-emerald-200 bg-emerald-50/40', iconBg: 'bg-emerald-600' },
  };

  return (
    <ContentSlide
      eyebrow="Demo: phân hệ Kho IT (Doanh nghiệp A)"
      title="Output sau 3 ngày phân tích — BA giao gì cho dev?"
      pageNumber={16}
      totalPages={17}
    >
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-4 gap-5 mt-2">
        {outputs.map((o) => (
          <motion.div
            key={o.title}
            variants={fadeUp}
            className={`rounded-2xl border-2 p-7 ${tones[o.tone].bg}`}
          >
            <div className={`w-14 h-14 rounded-xl ${tones[o.tone].iconBg} text-white flex items-center justify-center mb-4`}>
              {o.icon}
            </div>
            <div className="font-display text-3xl font-bold text-neutral-900 leading-tight mb-3">
              {o.title}
            </div>
            <div className="text-xl text-neutral-700 leading-relaxed">{o.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom timeline */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-7 rounded-2xl bg-neutral-950 text-white p-7"
      >
        <div className="text-xl font-bold uppercase tracking-wider text-brand-400 mb-4">
          Thời gian thực tế
        </div>
        <div className="grid grid-cols-3 gap-4 text-xl">
          <div className="rounded-lg bg-rose-900/40 border border-rose-700 p-5">
            <div className="font-bold text-2xl mb-2 text-rose-300">Không AI</div>
            <div className="text-white/80">Tự vẽ tay 3 BPMN + 1 ERD + 5 UC + Story Map → <span className="font-bold text-white">3 ngày liên tục</span></div>
          </div>
          <div className="rounded-lg bg-amber-900/40 border border-amber-700 p-5">
            <div className="font-bold text-2xl mb-2 text-amber-300">Có AI hỗ trợ</div>
            <div className="text-white/80">AI sinh khung → BA edit + verify → <span className="font-bold text-white">1.5 ngày</span></div>
          </div>
          <div className="rounded-lg bg-emerald-900/40 border border-emerald-700 p-5">
            <div className="font-bold text-2xl mb-2 text-emerald-300">Lưu ý quan trọng</div>
            <div className="text-white/80">AI <span className="font-bold text-white">sinh nhanh nhưng có thể sai</span> — BA luôn phải verify với khách trước khi gửi dev.</div>
          </div>
        </div>
      </motion.div>
    </ContentSlide>
  );
}

/* ----- Slide 17: Closing ----- */
export function Slide17Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 05"
      statement="Sau khi phân tích, bạn không còn 'mơ hồ' — bạn có sơ đồ rõ ràng dev nhìn vào hiểu ngay."
      attribution="Buổi 6: Thiết kế chức năng & giao diện — biến phân tích thành wireframe"
    />
  );
}

/* ----- registry ----- */
export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-classify', Component: Slide04Section1 },
  { id: 'three-layers', Component: Slide05ThreeLayers },
  { id: 'functional-vs-nf', Component: Slide06FunctionalVsNonFunctional },
  { id: 'section-process', Component: Slide07Section2 },
  { id: 'as-is-to-be', Component: Slide08AsIsToBe },
  { id: 'bpmn', Component: Slide09BPMN },
  { id: 'section-data-uc', Component: Slide10Section3 },
  { id: 'erd', Component: Slide11ERD },
  { id: 'use-case', Component: Slide12UseCase },
  { id: 'user-story-map', Component: Slide13UserStoryMap },
  { id: 'section-ai-demo', Component: Slide14Section4 },
  { id: 'ai-prompts', Component: Slide15AIPrompts },
  { id: 'demo-kho-it', Component: Slide16DemoKhoIT },
  { id: 'closing', Component: Slide17Closing },
];
