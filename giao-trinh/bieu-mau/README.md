# Bộ biểu mẫu — Khoá Ready for BA

**32 template** thực chiến cho BA fresher — đã có sẵn 3 format:
- 📄 **21 file Word** (`.docx`) ở `bieu-mau-docx/` — form fill ngay
- 📊 **10 file Excel** (`.xlsx`) ở `bieu-mau-xlsx/` — có công thức + filter
- 📝 **1 file Markdown** (TPL-016 v0.dev prompts) — copy-paste vào v0.dev
- **`.md` reference docs** ở thư mục này — đọc hiểu cách dùng template

## Mục lục theo Buổi

| Buổi | Template | Format chính |
|------|----------|--------------|
| **B1 — Giới thiệu** | TPL-001 Skill Matrix · TPL-002 Project Lifecycle Canvas | 📊 + 📄 |
| **B3 — Quy trình** | TPL-005 Planning · TPL-006 Stakeholder Matrix · TPL-007 Backlog Tracking | 📄 + 📊 + 📊 |
| **B4 — Elicitation** | TPL-008 Bộ câu hỏi · TPL-009 Note phỏng vấn · TPL-010 Anti-pattern | 📄 |
| **B5 — Phân tích** | TPL-011 BPMN cheat · TPL-012 ERD · TPL-013 UC Spec · TPL-014 Story Map | 📄 + 📄 + 📄 + 📊 |
| **B6 — Design** | TPL-015 Wireframe checklist · TPL-016 v0.dev prompts | 📄 + 📝 |
| **B7 — Tài liệu** | TPL-017 SRS · TPL-018 User Story + INVEST · TPL-019 Test Cases · TPL-020 Glossary | 📄 + 📄 + 📊 + 📄 |
| **B8 — Trao đổi** | TPL-021 Meeting Agenda · TPL-022 Minutes · TPL-023 Validation Checklist · TPL-024 Sign-off | 📄 + 📄 + 📊 + 📄 |
| **B9 — Quản lý YC** | TPL-025 Change Request · TPL-026 Impact Analysis · TPL-027 Traceability · TPL-028 MoSCoW+RICE | 📄 + 📊 + 📊 + 📊 |
| **B10 — Onboarding** | TPL-029 30/60/90 plan · TPL-030 Tuần đầu · TPL-031 20 câu hỏi vàng | 📄 |
| **B11 — Cuối khoá** | TPL-032 Đề bài · TPL-033 Rubric · TPL-034 20 câu phỏng vấn | 📄 + 📊 + 📄 |

## Phân loại Word vs Excel

### 📄 Word (.docx) — 21 file (form fill, document, sign-off)
TPL-002, 005, 008, 009, 010, 011, 012, 013, 015, 017, 018, 020, 021, 022, 024, 025, 029, 030, 031, 032, 034

### 📊 Excel (.xlsx) — 10 file (matrix, formula, filter, conditional formatting)
TPL-001 (Skill Matrix · auto-average) · TPL-006 (Power×Interest sortable) · TPL-007 (Backlog 7 status) · TPL-014 (Story Map 2D) · TPL-019 (Test Cases với pass-rate formula) · TPL-023 (Validation Checklist auto pass-rate) · TPL-026 (Impact Analysis 5 dim) · TPL-027 (Traceability stats) · TPL-028 (RICE formula + MoSCoW count) · TPL-033 (Rubric 100đ + auto status)

### 📝 Markdown gốc — 1 file
TPL-016 v0.dev prompts (copy-paste vào v0.dev, không cần convert)

## Cách dùng

1. **Mở Word/Excel:** double click file `.docx` hoặc `.xlsx` trong file manager
2. **Fill placeholder italic grey** `[ ... ]` bằng nội dung thật
3. **Save As** với tên dự án thực — vd. `SRS-Kho-IT-v1.0.docx`
4. **Học viên có thể nhận**: in ra giấy điền tay, hoặc dùng Word/Excel desktop

## Brand styling

- **Primary color:** iPMAC red `#D41B3F` (header table, H1)
- **Font:** Calibri (default Office, không cần install)
- **Layout:** A4 portrait, margin 2-2.2cm

## Regenerate templates

Nếu cần update template (vd. thêm row, sửa label):

```bash
# Word templates
py giao-trinh/scripts/build-all-docx.py

# Excel templates
py giao-trinh/scripts/build-all-xlsx.py
```

Output sẽ overwrite file cũ trong `bieu-mau-docx/` + `bieu-mau-xlsx/`.

## Convert thêm format (optional)

```bash
# Word → PDF (giữ formatting)
pandoc TPL-XXX.docx -o TPL-XXX.pdf

# Excel → CSV (cho import tool khác)
# (Mở Excel → File → Save As → CSV)
```

## Markdown source files (`.md` trong thư mục này)

Các file `.md` là **reference docs** — giải thích cách dùng + ví dụ chi tiết. Không phải file điền — file điền là `.docx` / `.xlsx`.

---

*32 templates · 21 Word + 10 Excel + 1 Markdown · Phiên bản 1.0 · 2026 · iPMAC*
