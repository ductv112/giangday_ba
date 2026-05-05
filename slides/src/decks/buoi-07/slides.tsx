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
  FileText,
  ClipboardList,
  ScrollText,
  AlertCircle,
  Sparkles,
  Bot,
  Type,
  ListChecks,
  AlignLeft,
  GitCompare,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 7 — VIẾT TÀI LIỆU YÊU CẦU
 * ============================================================ */

export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 07 · Khoá Ready for BA"
      title={'Viết tài liệu\nyêu cầu'}
      subtitle="Tài liệu BA = đề bài cho dev. Sai 1 chữ → dev code sai cả tuần. AI giúp viết draft trong 5 phút thay vì 5 giờ."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'BRD · SRS · User Story · AI sinh draft' },
        { label: 'Mức độ', value: 'Practice — heavy' },
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
          <div className="text-brand-600 text-xl font-bold uppercase tracking-[0.3em] mb-7">Tài liệu = đề bài cho dev</div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            <span className="text-brand-600">68%</span> bug trong dự án sinh ra từ <span className="text-brand-600">tài liệu yêu cầu mơ hồ</span>.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            BA viết tài liệu rõ → dev code đúng ngay lần đầu. BA viết tài liệu mơ → <span className="font-semibold text-neutral-800">dev hỏi 10 lần</span>, vẫn sai.
          </p>
          <div className="mt-9 text-xl text-neutral-400">Khảo sát BA Hiring Vietnam 2026 · 240 nhà tuyển dụng IT</div>
        </motion.div>
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="68%" label="Bug từ tài liệu mơ hồ" accent />
          <StatCard value="6 loại" label="Tài liệu BA cần biết" />
          <StatCard value="INVEST" label="Công thức User Story chuẩn" />
          <StatCard value="5 phút" label="AI sinh SRS draft (vs 5 giờ tay)" accent />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Slide03Agenda() {
  return (
    <ContentSlide eyebrow="Lộ trình buổi học" title="Hôm nay đi qua 4 phần" pageNumber={3} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-6 mt-2">
        <Card icon={<FileText size={26} strokeWidth={2.4} />} title="1. Bộ tài liệu BA — 6 loại">
          BRD · SRS · FRD · User Story · Use Case Spec · Test Cases — đi cặp ai làm gì.
        </Card>
        <Card icon={<Type size={26} strokeWidth={2.4} />} title="2. User Story chuẩn">
          Công thức INVEST + Acceptance Criteria Given-When-Then.
        </Card>
        <Card icon={<ScrollText size={26} strokeWidth={2.4} />} title="3. SRS template + 7 quy tắc">
          Template SRS chuẩn + 7 quy tắc viết tài liệu rõ ràng cho dev.
        </Card>
        <Card icon={<Sparkles size={26} strokeWidth={2.4} />} title="4. AI + Demo">
          AI sinh draft SRS + test cases trong 5 phút cho phân hệ Doanh nghiệp A.
        </Card>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-10 flex items-center gap-3 text-xl text-neutral-500">
        <Sparkles size={22} className="text-brand-600" />
        Cuối buổi: bạn viết được 1 SRS hoàn chỉnh dài 20 trang trong 1 giờ (có AI hỗ trợ).
      </motion.div>
    </ContentSlide>
  );
}

export function Slide04Section1() {
  return <SectionSlide number="01" title="Bộ tài liệu BA — 6 loại cốt lõi" caption="Mỗi loại tài liệu phục vụ 1 mục đích khác nhau — biết khi nào dùng cái nào." />;
}

export function Slide05DocTypes() {
  const docs = [
    { code: 'BRD', vi: 'Tài liệu yêu cầu kinh doanh', en: 'Business Requirements Document', who: 'Sponsor + Khách hàng', when: 'Đầu dự án', size: '5-15 trang' },
    { code: 'SRS', vi: 'Đặc tả phần mềm chi tiết', en: 'Software Requirements Specification', who: 'Dev + QA', when: 'Sau elicit', size: '20-100 trang', accent: true },
    { code: 'FRD', vi: 'Đặc tả chức năng', en: 'Functional Requirements Document', who: 'Dev', when: 'Sau SRS', size: '15-50 trang' },
    { code: 'US', vi: 'Câu chuyện người dùng', en: 'User Story', who: 'Dev (Agile)', when: 'Mỗi sprint', size: '1-3 dòng / story', accent: true },
    { code: 'UC Spec', vi: 'Đặc tả ca sử dụng', en: 'Use Case Specification', who: 'Dev + QA', when: 'Phân tích chi tiết', size: '1-2 trang / UC' },
    { code: 'TC', vi: 'Bộ ca kiểm thử', en: 'Test Cases', who: 'QA', when: 'Trước test', size: '5-20 ca / story' },
  ];
  return (
    <ContentSlide eyebrow="6 loại tài liệu BA" title="Phân biệt rõ — không nhầm SRS với FRD" pageNumber={5} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {docs.map((d) => (
          <motion.div key={d.code} variants={fadeUp} className={`rounded-2xl p-6 border-2 ${d.accent ? 'bg-gradient-to-br from-brand-600 to-brand-700 border-brand-700 text-white shadow-xl shadow-brand-600/20' : 'bg-white border-neutral-200'}`}>
            <div className={`font-display text-3xl font-extrabold tracking-tight mb-1 ${d.accent ? 'text-white' : 'text-brand-600'}`}>{d.code}</div>
            <div className={`font-display text-2xl font-bold mb-1 leading-tight ${d.accent ? 'text-white' : 'text-neutral-900'}`}>{d.vi}</div>
            <div className={`text-xl italic mb-4 ${d.accent ? 'text-white/70' : 'text-neutral-400'}`}>{d.en}</div>
            <div className="space-y-2">
              <div className={`text-xl ${d.accent ? 'text-white/90' : 'text-neutral-700'}`}><span className="font-bold">Cho ai: </span>{d.who}</div>
              <div className={`text-xl ${d.accent ? 'text-white/90' : 'text-neutral-700'}`}><span className="font-bold">Khi nào: </span>{d.when}</div>
              <div className={`text-xl ${d.accent ? 'text-white/90' : 'text-neutral-700'}`}><span className="font-bold">Độ dài: </span>{d.size}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide06BRDvsSRS() {
  return (
    <ContentSlide eyebrow="So sánh chi tiết" title="BRD vs SRS — cùng là 'tài liệu yêu cầu' nhưng khác xa" pageNumber={6} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-3">
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-amber-500 text-white flex items-center justify-center"><ClipboardList size={26} strokeWidth={2.4} /></div>
            <div>
              <div className="font-display text-3xl font-bold text-neutral-900">BRD</div>
              <div className="text-xl text-amber-700 italic">Tài liệu kinh doanh</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xl text-neutral-700"><span className="font-bold">Trả lời: </span>"VÌ SAO" làm dự án</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Ngôn ngữ: </span>kinh doanh, không kỹ thuật</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Người đọc: </span>Sponsor, CFO, khách hàng</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Ví dụ mục: </span>mục tiêu kinh doanh, phạm vi, ROI, rủi ro, stakeholder</div>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 to-white p-7 shadow-lg shadow-brand-600/10">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-brand-600 text-white flex items-center justify-center"><FileText size={26} strokeWidth={2.4} /></div>
            <div>
              <div className="font-display text-3xl font-bold text-neutral-900">SRS</div>
              <div className="text-xl text-brand-700 italic">Đặc tả phần mềm</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xl text-neutral-700"><span className="font-bold">Trả lời: </span>"LÀM GÌ" + "LÀM THẾ NÀO"</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Ngôn ngữ: </span>kỹ thuật chi tiết</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Người đọc: </span>Dev, QA, Architect</div>
            <div className="text-xl text-neutral-700"><span className="font-bold">Ví dụ mục: </span>functional req, non-functional, use case, ERD, wireframe, API, test cases</div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-neutral-900 text-white flex items-center gap-4">
        <GitCompare size={26} strokeWidth={2.2} className="text-brand-400 shrink-0" />
        <div className="text-xl"><span className="font-bold">Quan hệ: </span>BRD viết trước → SRS phát triển từ BRD. 1 BRD có thể sinh ra nhiều SRS (1 cho mỗi phân hệ).</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide07Section2() {
  return <SectionSlide number="02" title="User Story chuẩn — INVEST + Given-When-Then" caption="2 công thức đơn giản BA fresher phải thuộc nằm lòng để viết User Story tốt." />;
}

export function Slide08Invest() {
  const invest = [
    { letter: 'I', word: 'Independent', vi: 'Độc lập', desc: 'Story không phụ thuộc story khác — làm được riêng' },
    { letter: 'N', word: 'Negotiable', vi: 'Thương lượng được', desc: 'Có thể điều chỉnh detail giữa BA + dev + khách' },
    { letter: 'V', word: 'Valuable', vi: 'Có giá trị', desc: 'Mang lại lợi ích cụ thể cho người dùng / kinh doanh' },
    { letter: 'E', word: 'Estimable', vi: 'Ước lượng được', desc: 'Dev đủ thông tin để estimate (giờ / story point)' },
    { letter: 'S', word: 'Small', vi: 'Đủ nhỏ', desc: 'Làm xong trong 1 sprint (≤ 2 tuần)' },
    { letter: 'T', word: 'Testable', vi: 'Test được', desc: 'Có acceptance criteria rõ — QA test được' },
  ];
  return (
    <ContentSlide eyebrow="INVEST — công thức User Story chuẩn" title="6 tiêu chí: nếu story thiếu 1 → viết lại" pageNumber={8} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {invest.map((i) => (
          <motion.div key={i.letter} variants={fadeUp} className="rounded-2xl border-2 border-neutral-200 bg-white p-6 hover:border-brand-400 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-600 to-brand-700 text-white flex items-center justify-center font-display font-extrabold text-3xl shadow-lg shadow-brand-600/30">
                {i.letter}
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">{i.vi}</div>
                <div className="text-xl text-brand-600 italic">{i.word}</div>
              </div>
            </div>
            <div className="text-xl text-neutral-700 leading-relaxed">{i.desc}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 rounded-xl bg-neutral-950 text-neutral-200 p-5 text-xl leading-relaxed font-mono">
        <div className="text-brand-400 text-xl uppercase tracking-wider mb-2 font-sans font-bold">Format chuẩn:</div>
        <span className="text-white">As a</span> [vai trò], <span className="text-white">I want</span> [tính năng], <span className="text-white">so that</span> [lợi ích].
      </motion.div>
    </ContentSlide>
  );
}

export function Slide09GivenWhenThen() {
  return (
    <ContentSlide eyebrow="Acceptance Criteria — tiêu chí chấp nhận" title="Given-When-Then: cách viết tiêu chí test được" pageNumber={9} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-3">
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-7">
          <div className="text-xl font-bold uppercase tracking-wider text-amber-700 mb-2">GIVEN</div>
          <div className="font-display text-3xl font-bold text-neutral-900 leading-tight mb-3">Bối cảnh</div>
          <div className="text-xl text-neutral-700 leading-relaxed">Trạng thái hệ thống / người dùng <span className="font-bold">trước</span> hành động</div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-sky-200 bg-sky-50/40 p-7">
          <div className="text-xl font-bold uppercase tracking-wider text-sky-700 mb-2">WHEN</div>
          <div className="font-display text-3xl font-bold text-neutral-900 leading-tight mb-3">Hành động</div>
          <div className="text-xl text-neutral-700 leading-relaxed">Người dùng <span className="font-bold">làm gì</span> (click, nhập, gửi…)</div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/40 p-7">
          <div className="text-xl font-bold uppercase tracking-wider text-emerald-700 mb-2">THEN</div>
          <div className="font-display text-3xl font-bold text-neutral-900 leading-tight mb-3">Kết quả mong đợi</div>
          <div className="text-xl text-neutral-700 leading-relaxed">Hệ thống <span className="font-bold">phải làm gì</span> sau hành động đó</div>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 rounded-2xl bg-neutral-950 text-neutral-200 p-7 text-xl leading-relaxed font-mono">
        <div className="text-brand-400 text-xl uppercase tracking-wider mb-3 font-sans font-bold">Ví dụ — Đặt lịch sửa chữa:</div>
        <div><span className="text-amber-400 font-bold">Given</span> tôi là khách hàng đã đăng nhập, có địa chỉ trong profile,</div>
        <div><span className="text-sky-400 font-bold">When</span> tôi chọn dịch vụ "Sửa máy lạnh" và bấm "Đặt lịch ngay",</div>
        <div><span className="text-emerald-400 font-bold">Then</span> hệ thống tìm thợ rảnh trong 2 km, hiển thị 3 lựa chọn, không quá 5 giây.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide10Section3() {
  return <SectionSlide number="03" title="SRS template + 7 quy tắc viết rõ" caption="Template chuẩn để bạn không phải thiết kế lại — và 7 quy tắc tránh tài liệu mơ hồ." />;
}

export function Slide11SRSTemplate() {
  const sections = [
    { n: '1', title: 'Giới thiệu', items: 'Mục đích, phạm vi, định nghĩa, tài liệu tham chiếu' },
    { n: '2', title: 'Mô tả tổng quan', items: 'Bối cảnh, chức năng, người dùng, ràng buộc' },
    { n: '3', title: 'Yêu cầu chức năng', items: 'Use Case + User Story + flow chi tiết' },
    { n: '4', title: 'Yêu cầu phi chức năng', items: 'Performance, Security, Usability, Reliability' },
    { n: '5', title: 'Mô hình dữ liệu', items: 'ERD + định nghĩa entity / attribute' },
    { n: '6', title: 'Giao diện', items: 'Wireframe / mockup + flow màn hình' },
    { n: '7', title: 'Tích hợp', items: 'API, hệ thống bên ngoài, message format' },
    { n: '8', title: 'Phụ lục', items: 'Glossary, traceability matrix, change log' },
  ];
  return (
    <ContentSlide eyebrow="SRS Template chuẩn" title="8 mục — copy về dùng cho mọi dự án" pageNumber={11} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-4 gap-4 mt-2">
        {sections.map((s) => (
          <motion.div key={s.n} variants={fadeUp} className="rounded-xl border-2 border-neutral-200 bg-white p-5 hover:border-brand-400 transition-all">
            <div className="flex items-baseline justify-between mb-2">
              <div className="font-display text-3xl font-extrabold text-brand-600">{s.n}</div>
              <AlignLeft size={20} className="text-neutral-300" strokeWidth={2.2} />
            </div>
            <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-2">{s.title}</div>
            <div className="text-xl text-neutral-600 leading-relaxed">{s.items}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-5 rounded-xl bg-brand-50 border border-brand-200 flex items-start gap-4">
        <ListChecks size={24} strokeWidth={2.2} className="text-brand-600 shrink-0 mt-1" />
        <div className="text-xl text-neutral-800 leading-relaxed">
          <span className="font-bold">Template TPL-017</span> trong handout — tải về Word, điền thay vì thiết kế lại từ đầu mỗi dự án.
        </div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide12SevenRules() {
  const rules = [
    { n: '1', title: 'Mỗi câu = 1 yêu cầu', desc: 'Đừng nhồi 2-3 yêu cầu vào 1 câu — dev sẽ bỏ sót', good: '✓ "Hệ thống PHẢI gửi email xác nhận sau khi đặt lịch."' },
    { n: '2', title: 'Dùng "PHẢI" / "NÊN" / "CÓ THỂ"', desc: 'Phân loại độ ưu tiên rõ — must-have vs nice-to-have', good: '✓ "PHẢI" = bắt buộc · "NÊN" = quan trọng · "CÓ THỂ" = optional' },
    { n: '3', title: 'Tránh từ mơ hồ', desc: '"Nhanh" / "thân thiện" / "dễ dùng" — đo bằng gì?', good: '✗ "Trang load nhanh" → ✓ "Trang load ≤ 2 giây trên 4G"' },
    { n: '4', title: 'Có ID cho mỗi yêu cầu', desc: 'FR-001, NFR-002 — để traceability + change log', good: '✓ FR-001 (Functional) · NFR-001 (Non-functional)' },
    { n: '5', title: 'Active voice (chủ động)', desc: 'Tránh passive — khó hiểu, dễ mơ hồ', good: '✗ "Dữ liệu được lưu" → ✓ "Hệ thống lưu dữ liệu vào DB Postgres"' },
    { n: '6', title: 'Định nghĩa thuật ngữ', desc: 'Có Glossary cuối tài liệu — tránh dev hiểu sai', good: '✓ "OTP" = One-Time Password, mã xác thực 6 số có thời hạn 5 phút' },
    { n: '7', title: 'Versioning + change log', desc: 'Ghi rõ v1.0 → v1.1 thay đổi gì, ngày nào, ai duyệt', good: '✓ Bảng change log đầu tài liệu, cập nhật mỗi lần edit' },
  ];
  return (
    <ContentSlide eyebrow="7 quy tắc viết tài liệu rõ" title="Tránh được 7 lỗi này = dev không hỏi lại" pageNumber={12} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-4 mt-2">
        {rules.map((r) => (
          <motion.div key={r.n} variants={fadeUp} className="rounded-xl border border-neutral-200 bg-white p-5">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center font-display font-bold text-2xl">
                {r.n}
              </div>
              <div className="flex-1">
                <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-1">{r.title}</div>
                <div className="text-xl text-neutral-600 leading-relaxed mb-2">{r.desc}</div>
                <div className="text-xl text-emerald-700 italic leading-relaxed">{r.good}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide13Section4() {
  return <SectionSlide number="04" title="AI applied + Demo viết SRS" caption="AI rút ngắn 5 giờ viết tay → 5 phút sinh draft. BA chỉ việc edit + verify." />;
}

export function Slide14AIPrompts() {
  const prompts = [
    { use: 'Sinh User Story từ wireframe', hint: 'Upload wireframe + mô tả luồng → AI sinh 10-15 user story', tool: 'Claude (vision)', prompt: '"Đây là wireframe màn hình Cấp phát thiết bị (đính kèm). Sinh 10 User Story format As/I want/So that, kèm 3 acceptance Given-When-Then mỗi story. Phân theo MUST/SHOULD/COULD."' },
    { use: 'Mở rộng 1 US thành UC Spec', hint: 'Từ user story 1 dòng → use case spec đầy đủ', tool: 'Claude Code', prompt: '"Mở rộng user story sau thành Use Case Spec đầy đủ (UC ID, Tên, Actor, Pre/Post-condition, Main flow, Alt flow, Exception): \\"Là nhân viên kho, tôi muốn quét QR thiết bị để cấp phát.\\""' },
    { use: 'Sinh draft SRS hoàn chỉnh', hint: 'Từ list US → SRS 20 trang theo template chuẩn IEEE', tool: 'Claude Code', prompt: '"Cho 25 user story sau cho phân hệ Kho IT (Doanh nghiệp A), sinh SRS hoàn chỉnh theo 8 mục: Giới thiệu, Tổng quan, Functional, Non-functional, Data model, UI, Integration, Phụ lục. Output Markdown."' },
    { use: 'Sinh test cases từ acceptance', hint: 'Từ Given-When-Then → test scenarios chi tiết cho QA', tool: 'Claude Code / NotebookLM', prompt: '"Cho 5 acceptance criteria sau, sinh 15 test case format (ID, Mô tả, Pre-condition, Steps, Expected Result, Type: positive/negative/edge). Output table Markdown."' },
  ];
  return (
    <ContentSlide eyebrow="AI prompts cho viết tài liệu" title="4 prompt copy ngay — rút ngắn 80% thời gian viết" pageNumber={14} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-5 mt-2">
        {prompts.map((p) => (
          <motion.div key={p.use} variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0"><Sparkles size={22} strokeWidth={2.4} /></div>
              <div className="flex-1">
                <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">{p.use}</div>
                <div className="text-xl text-brand-700 font-semibold mt-1">{p.tool}</div>
              </div>
            </div>
            <div className="text-xl text-neutral-500 italic leading-snug mb-3">{p.hint}</div>
            <div className="rounded-xl bg-neutral-950 text-neutral-200 p-4 text-xl leading-relaxed font-mono">{p.prompt}</div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide15DemoSRS() {
  const phases = [
    { time: '0-5 phút', task: 'Upload 25 User Story + wireframe vào Claude', output: 'Claude đọc context' },
    { time: '5-15 phút', task: 'Prompt sinh SRS theo template 8 mục', output: 'Draft SRS 20 trang Markdown' },
    { time: '15-30 phút', task: 'BA review + edit (sửa wording, bỏ duplicate)', output: 'SRS v0.9 — clean' },
    { time: '30-45 phút', task: 'Send để stakeholder đọc + comment', output: 'Feedback từ 3-5 người' },
    { time: '45-60 phút', task: 'BA xử lý comment + finalize', output: 'SRS v1.0 ready bàn giao dev', accent: true },
  ];
  return (
    <ContentSlide eyebrow="Demo: SRS cho phân hệ Kho IT (Doanh nghiệp A)" title="60 phút từ 0 → SRS v1.0 hoàn chỉnh — có AI" pageNumber={15} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-3 mt-2">
        {phases.map((p, i) => (
          <motion.div key={p.time} variants={fadeUp} className={`rounded-xl p-5 flex items-center gap-5 ${p.accent ? 'bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-xl shadow-brand-600/20' : 'bg-white border border-neutral-200'}`}>
            <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-2xl ${p.accent ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-600'}`}>
              {i + 1}
            </div>
            <div className={`shrink-0 w-32 px-3 py-2 rounded-lg text-center font-bold text-xl ${p.accent ? 'bg-white/15 text-white' : 'bg-neutral-100 text-neutral-700'}`}>
              {p.time}
            </div>
            <div className="flex-1 grid grid-cols-2 gap-5">
              <div>
                <div className={`text-xl font-semibold mb-1 ${p.accent ? 'text-white/70' : 'text-neutral-500'}`}>Hành động</div>
                <div className={`text-xl ${p.accent ? 'text-white' : 'text-neutral-800'}`}>{p.task}</div>
              </div>
              <div>
                <div className={`text-xl font-semibold mb-1 ${p.accent ? 'text-white/70' : 'text-neutral-500'}`}>Output</div>
                <div className={`text-xl ${p.accent ? 'text-white' : 'text-neutral-800'}`}>{p.output}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-4">
        <AlertCircle size={26} strokeWidth={2.2} className="text-amber-600 shrink-0" />
        <div className="text-xl text-amber-900"><span className="font-bold">Cảnh báo:</span> Output AI là DRAFT — BA PHẢI verify từng dòng. AI có thể "hallucinate" (bịa) tính năng không có trong elicit.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide16TestCases() {
  return (
    <ContentSlide eyebrow="Demo: Sinh test cases từ User Story" title="1 user story → 5-10 test cases (positive + negative + edge)" pageNumber={16} totalPages={17}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-2">
        <motion.div variants={fadeUp}>
          <div className="text-xl font-bold uppercase tracking-wider text-brand-600 mb-3">Input — User Story + Acceptance</div>
          <div className="rounded-2xl bg-neutral-950 text-neutral-200 p-6 text-xl leading-relaxed font-mono space-y-3">
            <div><span className="text-brand-400 font-bold">US-042:</span> Là nhân viên kho, tôi muốn quét QR thiết bị để cấp phát cho người mượn.</div>
            <div className="pt-3 border-t border-neutral-800">
              <div><span className="text-amber-400">Given</span> tôi đã đăng nhập role "Nhân viên kho",</div>
              <div><span className="text-sky-400">When</span> tôi quét QR + chọn người nhận,</div>
              <div><span className="text-emerald-400">Then</span> hệ thống ghi log + gửi email cho người nhận.</div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <div className="text-xl font-bold uppercase tracking-wider text-brand-600 mb-3">Output AI — 8 test cases</div>
          <div className="space-y-2.5">
            <TestCase id="TC-042-01" type="positive" desc="QR hợp lệ + người nhận tồn tại → success" />
            <TestCase id="TC-042-02" type="positive" desc="Đã cấp phát → trạng thái đổi sang Đang mượn" />
            <TestCase id="TC-042-03" type="negative" desc="QR không tồn tại → báo lỗi rõ" />
            <TestCase id="TC-042-04" type="negative" desc="Thiết bị đã được mượn → không cấp phát được" />
            <TestCase id="TC-042-05" type="negative" desc="Người nhận không tồn tại → báo lỗi" />
            <TestCase id="TC-042-06" type="edge" desc="Quét QR khi mất mạng → queue + sync sau" />
            <TestCase id="TC-042-07" type="edge" desc="2 người quét cùng 1 QR cùng lúc → race condition" />
            <TestCase id="TC-042-08" type="edge" desc="QR bị mờ / hỏng → fallback nhập tay mã" />
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white flex items-center gap-4">
        <Bot size={28} strokeWidth={2.2} className="shrink-0" />
        <div className="text-xl"><span className="font-bold">Lợi ích kép:</span> BA tự sinh được test cases → QA nhận được spec rõ → giảm 50% bug từ "thiếu kịch bản test".</div>
      </motion.div>
    </ContentSlide>
  );
}

function TestCase({ id, type, desc }: { id: string; type: 'positive' | 'negative' | 'edge'; desc: string }) {
  const colors = {
    positive: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    negative: 'bg-rose-100 text-rose-800 border-rose-300',
    edge: 'bg-amber-100 text-amber-800 border-amber-300',
  };
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-neutral-200">
      <div className="shrink-0 font-bold text-xl text-brand-600 tabular-nums">{id}</div>
      <div className={`shrink-0 px-2.5 py-1 rounded-full text-xl font-bold uppercase border ${colors[type]}`}>{type}</div>
      <div className="text-xl text-neutral-800">{desc}</div>
    </div>
  );
}

export function Slide17Closing() {
  return (
    <StatementSlide
      eyebrow="Kết buổi 07"
      statement="Tài liệu rõ ràng = dev code đúng ngay lần đầu. AI sinh draft 5 phút — bạn dành 50 phút verify + edit thay vì 5 giờ gõ."
      attribution="Buổi 8: Trao đổi thông tin & kiểm tra yêu cầu — sau khi viết xong thì làm gì"
    />
  );
}

export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'hook', Component: Slide02Hook },
  { id: 'agenda', Component: Slide03Agenda },
  { id: 'section-docs', Component: Slide04Section1 },
  { id: 'doc-types', Component: Slide05DocTypes },
  { id: 'brd-vs-srs', Component: Slide06BRDvsSRS },
  { id: 'section-us', Component: Slide07Section2 },
  { id: 'invest', Component: Slide08Invest },
  { id: 'given-when-then', Component: Slide09GivenWhenThen },
  { id: 'section-srs', Component: Slide10Section3 },
  { id: 'srs-template', Component: Slide11SRSTemplate },
  { id: 'seven-rules', Component: Slide12SevenRules },
  { id: 'section-ai', Component: Slide13Section4 },
  { id: 'ai-prompts', Component: Slide14AIPrompts },
  { id: 'demo-srs', Component: Slide15DemoSRS },
  { id: 'demo-test', Component: Slide16TestCases },
  { id: 'closing', Component: Slide17Closing },
];
