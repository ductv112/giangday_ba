import { motion } from 'framer-motion';
import {
  CoverSlide,
  ContentSlide,
  fadeUp,
  stagger,
} from '@/layouts/Layouts';
import { StatCard } from '@/components/Bits';
import {
  Award,
  TrendingUp,
  Users,
  Sparkles,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  Heart,
  GraduationCap,
} from 'lucide-react';

/* ============================================================
 *  BUỔI 12 — TỔNG KẾT
 * ============================================================ */

export function Slide01Cover() {
  return (
    <CoverSlide
      eyebrow="Buổi 12 · Khoá Ready for BA"
      title={'Tổng kết\n& bước tiếp theo'}
      subtitle="12 buổi đã đi qua. Cơ hội nghề BA Việt Nam 2026 + lộ trình 1-3 năm tới + cộng đồng để bạn không 'đi một mình'."
      meta={[
        { label: 'Thời lượng', value: '2.5 giờ' },
        { label: 'Trọng tâm', value: 'Recap · Career · Community' },
        { label: 'Mức độ', value: 'Career — closing' },
      ]}
    />
  );
}

export function Slide02Recap() {
  const phases = [
    { range: 'B1-B2', name: 'Foundation', desc: 'Hiểu nghề BA + ma trận năng lực', color: 'bg-amber-100 text-amber-900' },
    { range: 'B3-B4', name: 'Process & Elicit', desc: '6 bước BA + khơi gợi yêu cầu', color: 'bg-sky-100 text-sky-900' },
    { range: 'B5-B7', name: 'Practice nặng', desc: 'Phân tích + Design + Viết tài liệu', color: 'bg-brand-100 text-brand-900' },
    { range: 'B8-B9', name: 'Communication & Mgmt', desc: 'Validate + quản lý yêu cầu', color: 'bg-emerald-100 text-emerald-900' },
    { range: 'B10-B12', name: 'Career & Closing', desc: 'Sẵn sàng đi làm + tổng kết', color: 'bg-purple-100 text-purple-900' },
  ];
  return (
    <ContentSlide eyebrow="Recap 12 buổi" title="Bạn đã đi qua 5 phase — nhìn lại hành trình" pageNumber={2} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-3 mt-3">
        {phases.map((p, i) => (
          <motion.div key={p.range} variants={fadeUp} className="rounded-xl border border-neutral-200 bg-white p-5 flex items-center gap-5 hover:border-brand-400 transition-all">
            <div className="shrink-0 w-14 h-14 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-display font-bold text-2xl">{i + 1}</div>
            <div className={`shrink-0 w-32 px-4 py-3 rounded-lg ${p.color} text-center font-bold text-2xl`}>{p.range}</div>
            <div className="shrink-0 w-72">
              <div className="font-display text-2xl font-bold text-neutral-900">{p.name}</div>
            </div>
            <div className="flex-1 text-xl text-neutral-700">{p.desc}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-9 px-7 py-5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white flex items-center gap-4">
        <CheckCircle2 size={28} strokeWidth={2.2} className="shrink-0" />
        <div className="text-xl"><span className="font-bold">30 giờ học · 24 hoạt động thực hành · 100+ AI prompt mẫu · 34 template</span> — đủ hành trang đi làm.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide03JobMarket() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white flex items-center px-32">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
      <motion.div className="grid grid-cols-[1fr_1fr] gap-20 items-center w-full" variants={stagger} initial="hidden" animate="show">
        <motion.div variants={fadeUp}>
          <div className="text-brand-600 text-xl font-bold uppercase tracking-[0.3em] mb-7">Thị trường BA Việt Nam 2026</div>
          <h2 className="font-display text-[64px] font-extrabold text-neutral-900 leading-[1.08] tracking-tight mb-9">
            <span className="text-brand-600">Cầu &gt; cung</span> — đặc biệt cho BA <span className="text-brand-600">biết AI</span>.
          </h2>
          <p className="text-3xl text-neutral-600 leading-relaxed">
            Mỗi tháng có <span className="font-semibold text-neutral-800">2,000+ vị trí BA mở</span> trên LinkedIn / TopDev / ITviec. <span className="font-semibold text-neutral-800">Junior chiếm 40%</span>.
          </p>
          <div className="mt-9 text-xl text-neutral-400">Khảo sát BA Hiring Vietnam 2026 · TopDev/ITviec/LinkedIn</div>
        </motion.div>
        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
          <StatCard value="2,000+" label="Vị trí BA mở mỗi tháng" accent />
          <StatCard value="40%" label="Junior — entry level" />
          <StatCard value="78%" label="Job posting yêu cầu AI literacy" />
          <StatCard value="20-30%" label="Tăng lương khi có ECBA" accent />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Slide04Requirements() {
  const reqs = [
    { name: 'Tiếng Việt giỏi', detail: 'Viết SRS rõ · phỏng vấn không lúng túng', priority: 'MUST' },
    { name: 'Tiếng Anh đọc hiểu', detail: 'Đọc tài liệu kỹ thuật · email với khách quốc tế', priority: 'MUST' },
    { name: 'Tư duy phân tích', detail: '5 Whys · root cause · cấu trúc thông tin', priority: 'MUST' },
    { name: 'AI literacy', detail: 'Claude Code · ChatGPT · v0.dev workflow', priority: 'MUST 2026' },
    { name: 'Domain knowledge 1 ngành', detail: 'Banking/Fintech/EdTech/Healthcare/Logistics…', priority: 'NÊN' },
    { name: 'SQL cơ bản', detail: 'SELECT/JOIN/aggregation · đọc data trực tiếp', priority: 'NÊN' },
    { name: 'Chứng chỉ ECBA/CCBA', detail: 'IIBA cấp · bằng chứng có hệ thống', priority: 'BONUS' },
    { name: 'Portfolio GitHub/LinkedIn', detail: '2-3 case study public + posts về BA', priority: 'BONUS' },
  ];
  return (
    <ContentSlide eyebrow="Yêu cầu nhà tuyển dụng với BA Fresher" title="4 'PHẢI có' + 2 'NÊN có' + 2 'BONUS'" pageNumber={4} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-4 mt-2">
        {reqs.map((r) => (
          <motion.div key={r.name} variants={fadeUp} className="rounded-xl border-2 border-neutral-200 bg-white p-5 flex items-center gap-4">
            <div className={`shrink-0 px-3 py-1.5 rounded-full text-xl font-bold uppercase tracking-wider ${
              r.priority.includes('MUST') ? 'bg-brand-600 text-white' :
              r.priority === 'NÊN' ? 'bg-amber-100 text-amber-800' :
              'bg-emerald-100 text-emerald-800'
            }`}>
              {r.priority}
            </div>
            <div className="flex-1">
              <div className="font-display text-2xl font-bold text-neutral-900 leading-tight">{r.name}</div>
              <div className="text-xl text-neutral-600 leading-relaxed mt-1">{r.detail}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSlide>
  );
}

export function Slide05ECBA() {
  return (
    <ContentSlide eyebrow="ECBA — Chứng chỉ BA fresher quốc tế của IIBA" title="Khi nào nên thi? Như thế nào?" pageNumber={5} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-2">
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 to-white p-7 shadow-lg shadow-brand-600/10">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-xl bg-brand-600 text-white flex items-center justify-center"><Award size={32} strokeWidth={2.2} /></div>
            <div>
              <div className="font-display text-3xl font-bold text-neutral-900">ECBA</div>
              <div className="text-xl text-brand-700 italic">Entry Certificate in Business Analysis</div>
            </div>
          </div>
          <div className="space-y-2.5 text-xl text-neutral-700">
            <div><span className="font-bold">Đối tượng: </span>Sinh viên / fresher / chưa có kinh nghiệm</div>
            <div><span className="font-bold">Yêu cầu: </span>21 PDU (khoá iPMAC cấp 36 PDU — đủ)</div>
            <div><span className="font-bold">Thi: </span>50 câu trắc nghiệm · 1 giờ · pass ≥ 70%</div>
            <div><span className="font-bold">Phí: </span>$235 hội viên · $325 không hội viên</div>
            <div><span className="font-bold">Có giá trị: </span>3 năm</div>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-7">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-xl bg-amber-500 text-white flex items-center justify-center"><Calendar size={32} strokeWidth={2.2} /></div>
            <div className="font-display text-3xl font-bold text-neutral-900">Khi nào thi?</div>
          </div>
          <div className="space-y-3 text-xl text-neutral-700">
            <div><span className="font-bold text-emerald-700">✓ Nên thi: </span>Sau 6-12 tháng đi làm — có context để hiểu BABOK</div>
            <div><span className="font-bold text-emerald-700">✓ Lợi ích: </span>Tăng 20-30% lương khi nhảy việc · có sự nghiêm túc</div>
            <div><span className="font-bold text-rose-700">✗ Đừng thi quá sớm: </span>Mới học khoá xong → khó thuộc BABOK 600 trang đầy đủ</div>
            <div><span className="font-bold text-rose-700">✗ Đừng coi là điều kiện: </span>Không có ECBA cũng vẫn được tuyển BA Junior</div>
          </div>
          <div className="mt-5 pt-4 border-t border-amber-200">
            <div className="text-xl text-amber-900"><span className="font-bold">iPMAC support:</span> đăng ký thi tại trung tâm iPMAC Hà Nội + tài liệu ôn 4 tuần.</div>
          </div>
        </motion.div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide06CareerPath() {
  const years = [
    { y: 'Năm 1', name: 'Junior BA', salary: '12-18 tr', goal: 'Hoàn thành 1 phân hệ độc lập · build portfolio' },
    { y: 'Năm 2-3', name: 'Mid BA', salary: '20-35 tr', goal: 'Lead 1 module lớn · mentor fresher · thi ECBA/CCBA' },
    { y: 'Năm 4-5', name: 'Senior BA', salary: '35-55 tr', goal: 'Lead 1 product · domain expert · stakeholder C-level' },
    { y: 'Năm 5+', name: 'Lead / BA Manager', salary: '55-80+ tr', goal: 'Quản lý team BA · chiến lược · CBAP cert' },
  ];
  return (
    <ContentSlide eyebrow="Lộ trình 1-5 năm sau khoá" title="4 cột mốc — kèm mức lương tham khảo Hà Nội/HCM 2026" pageNumber={6} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-4 gap-5 mt-3">
        {years.map((y, i) => (
          <motion.div key={y.y} variants={fadeUp} className={`rounded-2xl border-2 p-7 ${i === 0 ? 'bg-gradient-to-br from-neutral-100 to-neutral-50 border-neutral-300' : i === 1 ? 'bg-gradient-to-br from-amber-100 to-amber-50 border-amber-300' : i === 2 ? 'bg-gradient-to-br from-brand-100 to-brand-50 border-brand-300' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-300'}`}>
            <div className="text-xl font-bold uppercase tracking-wider text-neutral-500 mb-1">{y.y}</div>
            <div className="font-display text-3xl font-bold text-neutral-900 mb-3 leading-tight">{y.name}</div>
            <div className="text-3xl font-display font-extrabold text-brand-700 tabular-nums mb-1">{y.salary}</div>
            <div className="text-xl text-neutral-500 mb-4">/ tháng</div>
            <div className="text-xl text-neutral-700 leading-relaxed pt-4 border-t border-neutral-300">{y.goal}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-4">
        <Sparkles size={26} strokeWidth={2.2} className="text-amber-600 shrink-0" />
        <div className="text-xl text-amber-900"><span className="font-bold">Lưu ý:</span> Mức lương tham khảo Hà Nội/HCM 2026 — chênh lệch theo công ty (product / outsource / foreign).</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide07Community() {
  const channels = [
    { name: 'iPMAC Alumni', what: 'Group riêng cho học viên đã hoàn thành khoá · share job + mentoring', icon: '🎓' },
    { name: 'Facebook BA Vietnam', what: 'Cộng đồng lớn nhất VN · 80k+ thành viên · job + Q&A', icon: '👥' },
    { name: 'IIBA Vietnam Chapter', what: 'Chapter chính thức của IIBA tại VN · meetup hàng quý', icon: '🌐' },
    { name: 'BAC.vn Community', what: 'Blog + diễn đàn tiếng Việt · article quality cao', icon: '📚' },
    { name: 'YouTube BA Vietnam', what: '5-10 channel tiếng Việt về BA · video tutorial free', icon: '📺' },
    { name: 'LinkedIn — follow BA experts', what: 'Học từ post hàng ngày của Senior BA Việt Nam', icon: '💼' },
  ];
  return (
    <ContentSlide eyebrow="Cộng đồng BA Việt Nam 2026" title="6 nơi để bạn không 'đi một mình' sau khoá" pageNumber={7} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-5 mt-2">
        {channels.map((c) => (
          <motion.div key={c.name} variants={fadeUp} className="rounded-2xl border-2 border-neutral-200 bg-white p-6 hover:border-brand-400 transition-all">
            <div className="text-[60px] mb-3">{c.icon}</div>
            <div className="font-display text-2xl font-bold text-neutral-900 leading-tight mb-3">{c.name}</div>
            <div className="text-xl text-neutral-700 leading-relaxed">{c.what}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="mt-7 px-7 py-5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white flex items-center gap-4">
        <Users size={28} strokeWidth={2.2} className="shrink-0" />
        <div className="text-xl"><span className="font-bold">Quy tắc:</span> Tham gia ít nhất 2 cộng đồng · post 1 thứ học được mỗi tuần · trả lời 1 câu hỏi của người mới mỗi tháng. Network = career growth.</div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide08Farewell() {
  return (
    <ContentSlide eyebrow="Lời chia tay" title="Chứng nhận + bước tiếp theo" pageNumber={8} totalPages={9}>
      <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 gap-7 mt-3">
        <motion.div variants={fadeUp} className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white p-9 shadow-2xl shadow-brand-600/30">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center"><Award size={32} strokeWidth={2.2} /></div>
            <div className="text-xl font-bold uppercase tracking-wider text-white/85">Bạn nhận được</div>
          </div>
          <div className="font-display text-4xl font-extrabold mb-5 leading-tight">Chứng nhận hoàn thành khoá iPMAC + 36 PDU</div>
          <ul className="space-y-3 text-xl">
            <li className="flex items-start gap-3"><CheckCircle2 size={22} strokeWidth={2.4} className="shrink-0 mt-1" /><span>Chứng nhận ký bởi iPMAC + IIBA</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 size={22} strokeWidth={2.4} className="shrink-0 mt-1" /><span>36 PDU (đủ để thi ECBA/CCBA)</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 size={22} strokeWidth={2.4} className="shrink-0 mt-1" /><span>Truy cập group iPMAC Alumni vĩnh viễn</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 size={22} strokeWidth={2.4} className="shrink-0 mt-1" /><span>Tài liệu khoá học (slide + giáo trình + template)</span></li>
          </ul>
        </motion.div>
        <motion.div variants={fadeUp} className="rounded-2xl border-2 border-amber-200 bg-amber-50/40 p-9">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-xl bg-amber-500 text-white flex items-center justify-center"><TrendingUp size={32} strokeWidth={2.2} /></div>
            <div className="text-xl font-bold uppercase tracking-wider text-amber-700">Bước tiếp theo</div>
          </div>
          <div className="font-display text-4xl font-extrabold text-neutral-900 mb-5 leading-tight">7 ngày sau khoá — bạn làm gì?</div>
          <ul className="space-y-3 text-xl text-neutral-800">
            <li className="flex items-start gap-3"><div className="shrink-0 w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl mt-0.5">1</div><span>Cập nhật CV + LinkedIn — thêm khoá Ready for BA</span></li>
            <li className="flex items-start gap-3"><div className="shrink-0 w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl mt-0.5">2</div><span>Post 1 case study lên LinkedIn — show kỹ năng</span></li>
            <li className="flex items-start gap-3"><div className="shrink-0 w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl mt-0.5">3</div><span>Apply 5-10 vị trí BA Junior trên TopDev/ITviec</span></li>
            <li className="flex items-start gap-3"><div className="shrink-0 w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl mt-0.5">4</div><span>Tham gia 2 cộng đồng BA — bắt đầu network</span></li>
            <li className="flex items-start gap-3"><div className="shrink-0 w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl mt-0.5">5</div><span>Luyện phỏng vấn với Claude Code 1 lần/tuần</span></li>
          </ul>
        </motion.div>
      </motion.div>
    </ContentSlide>
  );
}

export function Slide09FinalStatement() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-neutral-950 text-white">
      {/* Hero gradient + ribbon */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 30%, rgba(212,27,63,0.35) 0%, transparent 55%), linear-gradient(135deg, #0a0a0e 0%, #1a0510 50%, #2a0512 100%)',
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-brand-600/30 blur-3xl rounded-full"
        aria-hidden
      />
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />

      <motion.div
        className="relative h-full flex items-center justify-center px-32 z-10"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-[1.3fr_1fr] gap-16 items-center w-full max-w-[1500px]">
          {/* Left — Lời cảm ơn + statement */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-3 mb-7">
              <Heart size={28} className="text-brand-400" strokeWidth={2.4} fill="currentColor" />
              <span className="text-brand-400 text-xl font-bold uppercase tracking-[0.25em]">
                Lời chia tay từ giảng viên
              </span>
            </div>

            <h2 className="font-display text-[56px] font-extrabold leading-[1.08] tracking-tight mb-7">
              Cảm ơn các bạn đã đồng hành <span className="text-brand-400">30 giờ</span> qua 12 buổi học.
            </h2>

            <p className="text-2xl text-white/85 leading-relaxed mb-6">
              Các bạn đã không ngại đặt câu hỏi, không ngại làm sai để học — đó chính là tinh thần của một <span className="font-semibold text-white">BA thực chiến</span>.
            </p>

            <p className="text-2xl text-white/85 leading-relaxed mb-7">
              Khoá học kết thúc, nhưng <span className="font-semibold text-white">hành trình của các bạn mới bắt đầu</span>. Chúc các bạn nhanh chóng tìm được dự án phù hợp, có team tốt, có mentor tâm huyết — và đừng quên: <span className="text-brand-400 font-semibold">BA giỏi không học một mình</span>.
            </p>

            <p className="text-2xl text-white/85 leading-relaxed">
              Khi gặp khó khăn — cứ nhắn tôi. Khi đạt thành tựu — cũng nhắn tôi. <span className="font-semibold text-white">Chúng ta là cộng đồng</span>.
            </p>
          </motion.div>

          {/* Right — Instructor card */}
          <motion.div variants={fadeUp} className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-10 shadow-2xl shadow-brand-600/40 border border-brand-500/30">
              {/* Avatar circle */}
              <div className="flex items-center gap-5 mb-7">
                <div className="w-20 h-20 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center shrink-0">
                  <GraduationCap size={40} strokeWidth={2.2} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold uppercase tracking-wider text-white/75 mb-1">
                    Giảng viên
                  </div>
                  <div className="font-display text-4xl font-extrabold leading-tight">
                    Trần Đức
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4 pt-5 border-t border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Phone size={22} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="text-base text-white/65 uppercase tracking-wider font-semibold">
                      Số điện thoại
                    </div>
                    <div className="text-2xl font-bold tabular-nums">03 969 11286</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Mail size={22} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="text-base text-white/65 uppercase tracking-wider font-semibold">
                      Email cá nhân
                    </div>
                    <div className="text-2xl font-bold">ductv112@gmail.com</div>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-7 pt-5 border-t border-white/20 text-center">
                <div className="text-xl text-white/85 leading-relaxed italic">
                  "Liên hệ bất cứ lúc nào để hỏi, chia sẻ, networking — tôi sẽ luôn ở đây."
                </div>
              </div>
            </div>

            {/* Decorative graduation cap */}
            <div className="absolute -top-4 -right-4 text-[80px]" aria-hidden>
              🎓
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom signature */}
      <div className="absolute bottom-12 left-32 z-10 flex items-center gap-3 text-white/50">
        <div className="w-12 h-px bg-white/30" />
        <span className="text-xl font-semibold tracking-widest uppercase">
          Ready for BA · iPMAC · 2026
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
        <span className="text-xl">Chúc các bạn thành công 🚀</span>
      </div>
    </div>
  );
}

export const slideList = [
  { id: 'cover', Component: Slide01Cover },
  { id: 'recap', Component: Slide02Recap },
  { id: 'job-market', Component: Slide03JobMarket },
  { id: 'requirements', Component: Slide04Requirements },
  { id: 'ecba', Component: Slide05ECBA },
  { id: 'career-path', Component: Slide06CareerPath },
  { id: 'community', Component: Slide07Community },
  { id: 'farewell', Component: Slide08Farewell },
  { id: 'final', Component: Slide09FinalStatement },
];
