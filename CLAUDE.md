# CLAUDE.md — Khoá "Ready for BA" của iPMAC

> Đây là tài liệu hướng dẫn Claude khi làm việc trên repo này. Đọc kỹ trước khi sửa code/tài liệu — các rule bên dưới đều xuất phát từ feedback thực tế của giảng viên, KHÔNG được vi phạm.

---

## 1. Tổng quan dự án

**Tên khoá:** "Phân tích Nghiệp vụ Cơ bản — Ready for BA" của **iPMAC** (Đối tác đào tạo uỷ quyền chính thức của IIBA tại Việt Nam).

**Vai trò người dùng:** Giảng viên (instructor) — người Việt, email `ductv112@gmail.com` / `ductv@dft.vn`. Nói tiếng Việt, mọi phản hồi và tài liệu giảng dạy phải bằng tiếng Việt.

**Cấu trúc khoá:** 12 buổi × 2.5h = 30h. Mỗi buổi sản xuất 2 deliverable song song:

1. **Giáo trình Markdown** (`giao-trinh/`) — gửi iPMAC duyệt + giảng viên đọc trước mỗi buổi. Khi export PDF cuối cùng: **portrait A4**.
2. **Slide app web-based** (`slides/`) — trình chiếu lớp + gửi học viên. Khi export PDF: **landscape 16:9**, mỗi buổi 1 file PDF riêng.

**Đối tượng học viên:** Sinh viên mới ra trường / chuyển nghề / BA <1 năm kinh nghiệm.

**Chứng nhận:** Hoàn thành khoá → 36 PDU đủ điều kiện thi ECBA/CCBA của IIBA.

---

## 2. Tech stack & cách chạy

### Stack
- **Vite 6 + React 19 + TypeScript 5.7**
- **Tailwind CSS v4** (dùng `@theme` trong `src/styles.css`)
- **Framer Motion** cho transitions/stagger
- **Lucide React** icons
- **React Router v7** cho `/` và `/:slug`
- **Puppeteer** cho PDF export (landscape 16:9)
- Font: **Inter** (300/400/500/600/700/800) + **Plus Jakarta Sans** (display)
- Package manager: **pnpm 10**

### KHÔNG dùng
- Slidev / Reveal.js / Marp / Spectacle — đã quyết bỏ. Lý do: user trả Claude Max x20 Opus, leverage Claude trực tiếp thay vì học DSL của framework. Custom = kiểm soát 100%.

### Lệnh
```bash
cd slides
pnpm install                                # lần đầu
pnpm dev                                    # http://localhost:5173
pnpm exec tsc -b                            # type check
pnpm exec tsx scripts/smoketest.ts          # render headless 10 slide chính, verify 0 console error
pnpm export:pdf buoi-01                     # export 1 buổi → pdf/buoi-01.pdf (landscape 16:9)
pnpm export:all                             # export tất cả buổi đã có
```

### Yêu cầu môi trường
- Node 20+ (đã test với 22.16)
- pnpm 10+
- Chrome cho Puppeteer: lần đầu chạy `pnpm exec puppeteer browsers install chrome` nếu chưa có

---

## 3. Cấu trúc thư mục

```
d:/GiangDay/BA/
├── CLAUDE.md                       # File này — single source of truth
├── giao-trinh/                     # Tài liệu 1 (Markdown → PDF portrait A4)
│   ├── 00-tong-quan-khoa-hoc.md
│   ├── buoi-01-gioi-thieu.md       # ... đến buoi-12 (12 file)
│   ├── bieu-mau/                   # 32 templates (TPL-001 → TPL-034) + README
│   ├── prompt-thu-vien/            # 31 AI prompts xuyên 9 buổi + README
│   └── case-studies/               # 03-erp-doanh-nghiep.md (Doanh nghiệp A)
├── slides/                         # Tài liệu 2 (Vite app, 1 app cho cả 12 buổi)
│   ├── src/
│   │   ├── App.tsx                 # router
│   │   ├── pages/Home.tsx          # landing — list 12 buổi
│   │   ├── presenter/
│   │   │   ├── SlideStage.tsx      # lock 16:9, scale theo viewport
│   │   │   └── SlideDeck.tsx       # keyboard nav, overview, fullscreen, progress
│   │   ├── theme/tokens.ts         # iPMAC color palette
│   │   ├── components/
│   │   │   ├── BrandChrome.tsx     # header + footer ribbon (mỗi content slide)
│   │   │   ├── BrandMark.tsx       # text-mark cho dark slide
│   │   │   └── Bits.tsx            # Card, StatCard, Pill, TimelineRow, TwoColumn, PromptBox
│   │   ├── layouts/Layouts.tsx     # CoverSlide, SectionSlide, ContentSlide, StatementSlide
│   │   └── decks/
│   │       ├── index.ts            # registry tất cả buổi
│   │       └── buoi-01/
│   │           ├── index.ts        # metadata: title, duration, slides[]
│   │           └── slides.tsx      # mỗi slide là 1 component TSX độc lập
│   ├── scripts/
│   │   ├── export-pdf.ts           # Puppeteer landscape PDF export (pdf-lib merge)
│   │   ├── audit-all.ts            # navigate 12 buổi headless, verify 0 console error
│   │   └── smoketest.ts            # headless render screenshot verify
│   ├── public/brand/               # logo.png, header.png, footer.png
│   └── pdf/                        # Output PDF (gitignored — 12 file landscape 16:9)
└── references/                     # PDF gốc iPMAC + brand assets + render pages
```

---

## 4. iPMAC brand — BẮT BUỘC tuân thủ

### Color palette (tokens trong `src/styles.css` + `src/theme/tokens.ts`)

| Token | Hex | Dùng |
|-------|-----|------|
| `brand-600` | **`#D41B3F`** | Primary signature red — KHÔNG được đổi sang tone khác |
| `brand-700` | `#B01134` | Hover/active state |
| `brand-800` | `#931131` | Deeper red cho gradient accent |
| Neutrals | `ink-50` → `ink-950` | Black/grays cho text & background |

### Layout pattern — bắt buộc với mọi `ContentSlide`

- **Header** (`<BrandHeader />`):
  - Logo iPMAC góc trái-trên (`/brand/logo.png`)
  - Chữ "CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN IPMAC" + tagline khoá
  - IIBA® badge + ENDORSED EDUCATION PROVIDER góc phải-trên
  - Divider line đỏ gradient ở dưới header
- **Footer** (`<BrandFooter />`):
  - Red ribbon với clip-path diagonal cut
  - Lucide icons (MapPin, Phone, Mail) + thông tin: "Tầng 6, Toà nhà Kim Ánh, ngõ 78 Duy Tân, Cầu Giấy, Hà Nội" / "024 3771 0668" / "info@ipmac.vn"
  - Page number bên phải khi truyền `pageNumber={N} totalPages={M}`
- **Cover & Section slides**: dùng background tối + ribbon đỏ + text-based brand mark (`<BrandMarkOnDark />`) thay cho logo PNG (vì logo có chữ đen nhìn không rõ trên nền tối).

### Font

- Slide content: `font-sans` = Inter
- Heading display lớn: `font-display` = Plus Jakarta Sans (letter-spacing tighter)

---

## 5. RULES — không được vi phạm

### 5.1. Slide density: 15-20 slide/buổi (có buổi ít hơn)

User dạy phong cách **"BA thực chiến"** — nói nhiều, chia sẻ kinh nghiệm, demo AI tools live. Slide chỉ là điểm neo trực quan, KHÔNG phải prompter cho user đọc theo.

- Mỗi buổi 2.5h chỉ cần **15-20 slide tối đa**
- Buổi 1 (giới thiệu), 10 (sẵn sàng vào dự án), 11 (bài tập + phỏng vấn thử), 12 (tổng kết) → 8-14 slide
- Buổi nội dung dày (5 Phân tích yêu cầu, 7 Viết tài liệu, 9 Quản lý yêu cầu) → có thể 18-22 slide
- **KHÔNG nhồi text dày đặc** — nội dung dài đẩy sang giáo trình, không lên slide

### 5.2. Font tối thiểu 20px (KHÔNG ngoại lệ trong slide content)

User dạy lớp offline — học viên cuối phòng phải đọc được. Đã verify: 14/16/18px nhỏ quá.

- **CẤM** dùng `text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px) trong các file:
  - `src/layouts/Layouts.tsx`
  - `src/components/BrandChrome.tsx`
  - `src/components/Bits.tsx`
  - `src/components/BrandMark.tsx`
  - `src/decks/**/*.tsx`
- Tất cả text trong slide content phải `text-xl` (20px) trở lên
- Pill/badge/eyebrow uppercase: 20px (vẫn ổn với tracking-widest)
- Card title: text-2xl+ (24px)
- Heading content slide: 48-56px
- Cover/Section title: 80-104px

**Ngoại lệ duy nhất:** `src/presenter/SlideDeck.tsx` (HUD overlay chỉ giảng viên thấy) và `src/pages/Home.tsx` (landing page tooling) — không trình chiếu cho lớp, có thể giữ font nhỏ.

**Cách verify:** sau khi sửa, grep `text-(xs|sm|base|lg)\b` trong các file student-facing — phải trả về 0 match.

### 5.3. Năm mặc định 2026 (không phải 2025)

- Hiện tại 2026. Mọi tham chiếu năm trong slide + giáo trình dùng **2026**.
- Mức lương "tham khảo Hà Nội/HCM **2026**"
- Survey/report: 2025-2026 hoặc 2026
- Phiên bản giáo trình ghi 2026

### 5.4. PKKQ / Bộ Quốc phòng — TUYỆT ĐỐI không nêu trong tài liệu công khai

Dự án PKKQ gốc ở `D:\ProjectAI\PKKQ\` là cho khách hàng quốc phòng — tế nhị về bảo mật/phân loại. Đưa nguyên xi vào tài liệu giảng dạy cho học viên là không phù hợp.

**Giải pháp:** User đã clone 1 bản dân sự đầy đủ (rebrand sạch military terminology, không liên quan PKKQ/BQP) tại **`D:\GiangDay\Demo\`** — chính là prototype dùng cho case study #3.

- **Case study #3** dùng tên: **"Doanh nghiệp A — ERP đa phân hệ"** (KHÔNG nêu PKKQ, KHÔNG nêu Bộ Quốc phòng, KHÔNG nói "đã rebrand từ PKKQ")
- Reference prototype: `D:\GiangDay\Demo\` — 19 module thực:
  - **Module nghiệp vụ:** demo-portal (Next.js, hub) · demo-sso · demo-kho · demo-taichinhketoan · demo-sanxuat · demo-baotri · demo-suachua · demo-daitu · demo-vongdoi · demo-mua-hang · demo-hopdongnhiemvu · demo-doluong · demo-antoan
  - **Module Next.js hỗ trợ:** demo-dms · demo-chatbot
  - **Module skeleton (cho học viên thực hành):** demo-chatluong · demo-suco · demo-thunghiem
- Stack: Vite + React + AntD (16 module) · Next.js + Tailwind + shadcn (3 module)
- Port mapping + cách chạy: xem `D:\GiangDay\Demo\CLAUDE.md` (workspace có CLAUDE.md riêng) hoặc `giao-trinh/case-studies/03-erp-doanh-nghiep.md` trong repo này
- Mockdata trong Demo đã neutral: tên người Việt giữ, cấp bậc quân sự bỏ, tên tổ chức = "Doanh nghiệp A", thiết bị = "Hệ thống monitoring / Module phần mềm"

**Quy tắc khi nhắc đến case 3:**
- Luôn nói "Doanh nghiệp A" hoặc "ERP doanh nghiệp đa phân hệ"
- Chỉ học viên: KHÔNG bao giờ giải thích nguồn gốc (PKKQ → rebrand)
- Internal note (giảng viên + Claude): biết rõ Demo là phiên bản dân sự của PKKQ, nhưng KHÔNG đưa thông tin này vào bất kỳ slide/giáo trình nào

### 5.5. Slide phải nhìn như slide thật — KHÔNG như webpage

- Aspect ratio: 1920×1080 logical (16:9), scale CSS transform theo viewport
- Mỗi slide **không scroll** — nội dung phải vừa 1 màn hình
- Nếu nội dung tràn → tách slide, đừng để cuộn dọc
- PDF export: cũng landscape 16:9, mỗi buổi 1 file PDF riêng (`pdf/buoi-XX.pdf`)

### 5.6. Đối tượng fresher — giảm jargon, KHÔNG bắt mua/đọc BABOK

Học viên là sinh viên năm cuối / mới ra trường / chuyển nghề / BA <1 năm. Phần lớn chưa từng làm BA, kiến thức tiếng Anh ngành hạn chế. Khoá là **"Ready for BA" cấp độ Foundation** — không phải khoá đào sâu BABOK.

- **KHÔNG bắt buộc** học viên mua / đọc BABOK Guide v3.0. Khung BABOK chỉ dùng làm **bản đồ tham khảo** để học viên biết các nhóm kiến thức tồn tại và sẽ học ở buổi nào.
- **Khi nhắc đến BABOK trên slide hoặc giáo trình, framing PHẢI tích cực** — coi BABOK là tài liệu chính thống quốc tế cho ai muốn đào sâu sau khoá (đặc biệt để thi ECBA/CCBA), KHÔNG nói kiểu "không cần đọc 600 trang" / "không cần đọc sách dày" — câu này tuy ý tốt nhưng vô tình đặt BABOK ở vị trí gánh nặng và làm mất uy tín tài liệu.
  - ❌ Sai: "Bạn KHÔNG cần đọc sách BABOK 600 trang"
  - ✅ Đúng: "Mỗi nhóm sẽ học gọn trong các buổi 3-9. Muốn đào sâu sau khoá để thi ECBA/CCBA, tham khảo BABOK Guide — sách chính thức của IIBA."
- **Mỗi từ ngữ chuyên ngành lần đầu xuất hiện phải có giải thích tiếng Việt ngắn ngay tại chỗ** (trong card subtitle, ngoặc đơn, hoặc dòng phụ).
  - Ví dụ: `INVEST (công thức viết yêu cầu chuẩn)`, `BPMN (sơ đồ quy trình)`, `ERD (sơ đồ dữ liệu)`, `5 Whys (hỏi "vì sao" 5 lần để tìm gốc rễ)`, `UAT (kiểm thử bởi người dùng)`, `scope creep (yêu cầu phình ra)`, `ECBA (chứng chỉ BA fresher của IIBA)`
- KHÔNG dùng tiêu chuẩn nặng kiểu `IEEE 830` mà không giải thích — hoặc tránh hẳn.
- Tài liệu tham khảo: ưu tiên **tài liệu tiếng Việt + free** (blog BA Việt Nam, video YouTube). BABOK chỉ liệt kê "tham khảo nâng cao, không bắt buộc".
- Ngôn ngữ slide: ưu tiên **tiếng Việt làm chính**, English label đặt phía sau làm subtitle nhỏ.
- Bài tập về nhà KHÔNG đặt yêu cầu kiểu "đọc 30 trang BABOK" — học viên fresher sẽ bỏ luôn.

**Cách verify:** Sau mỗi buổi, đọc lại slide với góc nhìn của 1 sinh viên năm 4 chưa biết gì về BA — có chỗ nào khó hiểu, viết tắt không giải thích, hoặc tiếng Anh nặng → fix lại.

---

## 6. Case studies xuyên khoá (3 case kết hợp)

Dùng kết hợp tuỳ buổi, KHÔNG phải 1 case duy nhất xuyên 12 buổi:

1. **Hệ thống đặt lịch sửa chữa điện tử – điện lạnh** (B2C + B2B)
   - App mobile cho khách hàng (đặt lịch, theo dõi)
   - App mobile cho thợ (nhận việc, báo cáo)
   - Web backoffice (kho, điều phối, admin)

2. **Hệ thống điểm danh lớp học** (EdTech)
   - Web admin cho trường
   - App mobile cho học viên (QR/GPS)

3. **Doanh nghiệp A — ERP đa phân hệ** (B2B, ERP cho công ty công nghệ)
   - Reference prototype: `D:\GiangDay\Demo\` — 19 module Vite/Next.js đã rebrand sạch
   - Module: Portal (hub), SSO, Kho IT, Tài chính kế toán, Sản xuất phần mềm, Bảo trì, Sửa chữa, Đại tu, Vòng đời, Mua hàng, Hợp đồng, Đo lường KPI, An toàn, DMS, Chatbot AI…
   - Chi tiết: [`giao-trinh/case-studies/03-erp-doanh-nghiep.md`](giao-trinh/case-studies/03-erp-doanh-nghiep.md)
   - Dùng nhiều ở các buổi 5+ (Phân tích yêu cầu, Viết tài liệu, Quản lý yêu cầu, Validate)

---

## 7. AI tools dạy cho học viên

| Tool | Vai trò |
|------|---------|
| **Claude Code (VS Code extension)** | TOOL CHÍNH — phân tích, tài liệu, design UI, prototype, build product, viết tool |
| ChatGPT | Brainstorm, draft tài liệu nhanh |
| Gemini | Research, multimodal |
| **NotebookLM** | Tổng hợp tài liệu, có thể làm slide từ nguồn |
| Gamma, Genspark | Slide AI alternative |
| **v0.dev, Figma Make** | Sinh giao diện từ mô tả |
| **Mermaid, PlantUML** | Vẽ flowchart, BPMN, sequence diagram |

**Quy tắc dạy AI:** Mỗi kỹ thuật BA (vd. elicitation, modeling) phải kèm mục **"Áp dụng AI vào tình huống này"** — tool nào, prompt gì, demo ra sao. KHÔNG nói AI chung chung — phải có concrete prompt copy-paste được.

---

## 8. Outline 12 buổi (theo PDF gốc của iPMAC)

| # | Buổi | Loại | Slide ước tính |
|---|------|------|----------------|
| 1 | Giới thiệu chung | Foundation | 12-14 ✓ done |
| 2 | Kỹ năng & kiến thức cần thiết — Ma trận năng lực BA | Foundation | 14-18 |
| 3 | Quy trình phân tích thiết kế | Process | 14-18 |
| 4 | Khơi gợi yêu cầu (Elicitation) | Practice | 16-20 |
| 5 | Phân tích yêu cầu | Practice | 18-22 |
| 6 | Thiết kế chức năng & giao diện | Practice | 16-20 |
| 7 | Viết tài liệu yêu cầu | Practice | 18-22 |
| 8 | Trao đổi thông tin & kiểm tra yêu cầu | Practice | 16-18 |
| 9 | Quản lý yêu cầu | Process | 18-22 |
| 10 | Sẵn sàng vào dự án | Career | 8-12 |
| 11 | Bài tập cuối khoá + phỏng vấn thử | Assessment | 6-10 |
| 12 | Tổng kết | Career | 8-12 |

---

## 9. Pattern khi thêm buổi mới

1. Tạo `slides/src/decks/buoi-NN/` (NN = số buổi 2 chữ số, vd. `buoi-02`)
2. Tạo `slides.tsx` — mỗi slide là 1 export function dùng `<CoverSlide />`, `<SectionSlide />`, `<ContentSlide />`, `<StatementSlide />`. Có thể dùng các Bit components từ `@/components/Bits`.
3. Cuối file export `slideList: SlideEntry[]` chứa tất cả slide theo thứ tự
4. Tạo `index.ts` export `buoiNN: DeckMeta` với metadata (number, title, subtitle, duration, slides)
5. Add vào `slides/src/decks/index.ts` registry
6. Tạo `giao-trinh/buoi-NN-{slug}.md` theo template của Buổi 1: LO + đề cương theo phút + bài tập + biểu mẫu + quiz + ghi chú giảng viên
7. Chạy `pnpm exec tsc -b` + `pnpm exec tsx scripts/smoketest.ts` (sửa smoketest để thêm slug nếu cần)
8. Commit + push

---

## 10. Khi user yêu cầu sửa slide trong lúc đang dạy

User có thể đang chiếu slide (full screen) và mở VS Code song song nói với Claude. Workflow mong đợi:

1. User chỉ rõ slide nào (vd. "slide 7 buổi 1") + sửa gì
2. Claude mở đúng file `src/decks/buoi-XX/slides.tsx`, tìm component slide đó
3. Edit trực tiếp — KHÔNG yêu cầu user cung cấp thêm context
4. Hot reload Vite tự cập nhật trên trình chiếu sau ~500ms
5. KHÔNG khởi động lại dev server trừ khi cần thiết

Smoketest + tsc -b chỉ cần chạy nếu thay đổi lớn (cấu trúc, import). Sửa text/style → bỏ qua test, hot reload là đủ.

---

## 11. Workflow git

- Branch `main` — push trực tiếp, không có CI/PR cho repo cá nhân này
- Mọi commit kèm `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`
- Commit message: tiếng Việt, mô tả "vì sao" thay đổi, không chỉ "cái gì"
- KHÔNG bao giờ commit `node_modules/`, `screenshots/`, `pdf/`, `*.tsbuildinfo`, `dist/` (đã nằm trong `.gitignore`)

---

## 12. Lịch sử quyết định (decision log)

| Quyết định | Ngày | Lý do |
|-----------|------|-------|
| Custom Vite app thay Slidev | 2026-04-29 | User trả Claude Max — leverage Claude trực tiếp, không học thêm DSL |
| iPMAC red `#D41B3F` làm primary | 2026-04-29 | Verify pixel-level từ PDF gốc của iPMAC |
| Slide font ≥ 20px | 2026-04-29 | Lớp offline cuối phòng không đọc được 14/16/18px |
| Năm mặc định 2026 | 2026-04-29 | Số liệu/lương 2025 lỗi thời, mất uy tín |
| PKKQ → "ERP doanh nghiệp" generic | 2026-04-29 | PKKQ là khách hàng BQP — tế nhị, không công khai |
| 3 case study (sửa chữa, điểm danh, ERP) | 2026-04-29 | Đa dạng B2C/B2B/EdTech/ERP, học viên thấy nhiều domain |
| Case 3 dùng `D:\GiangDay\Demo` (19 module) | 2026-05-04 | User clone bản dân sự từ PKKQ, đã rebrand sạch military terms — đủ chi tiết để dạy |
| Giảm tải BABOK + giải thích jargon | 2026-05-04 | Đối tượng fresher/sinh viên — bắt đọc BABOK 600 trang là quá nặng, jargon không giải thích thì bỏ luôn |
