# BUỔI 09 — QUẢN LÝ YÊU CẦU

| Thuộc tính | Giá trị |
|------------|---------|
| **Thời lượng** | 2.5 giờ (150 phút) |
| **Loại buổi** | Process — quản lý yêu cầu thay đổi + ưu tiên + truy vết |
| **Slide kèm theo** | `slides/src/decks/buoi-09/` (17 slide) |
| **Mục tiêu** | Học viên xử lý được 1 Change Request từ A-Z trong 30 phút, áp dụng MoSCoW/RICE để ưu tiên backlog, vẽ traceability matrix. |

## 1. Mục tiêu học tập

- [LO9.1] Mô tả vòng đời 7 trạng thái của 1 yêu cầu (Phát hiện → Đóng)
- [LO9.2] Sử dụng Jira + Confluence ở mức cơ bản (tạo ticket, link, status workflow)
- [LO9.3] Áp dụng quy trình 5 bước Change Request
- [LO9.4] Phân tích Impact 5 dimension (Tài liệu / Code / Schedule / Budget / Risk)
- [LO9.5] Phân biệt CR nhỏ/trung bình/lớn → ai duyệt
- [LO9.6] Áp dụng MoSCoW · Kano · RICE để ưu tiên backlog
- [LO9.7] Vẽ traceability matrix 5 cấp (BR → US → FR → UC → TC)
- [LO9.8] Dùng AI làm impact analysis + sinh CR document

## 2. Đề cương (theo phút)

| Phút | Nội dung | Slide |
|------|----------|-------|
| 0–10 | Recap Buổi 8 + Hook + Agenda | 1-3 |
| 10–40 | Section 01 — Quy trình + Tools | 4-6 |
| 40–85 | Section 02 — Change Request + Impact + Approval | 7-10 |
| 85–115 | Section 03 — Ưu tiên (MoSCoW + Kano + RICE) | 11-13 |
| 115–140 | Section 04 — Traceability + AI demo | 14-16 |
| 140–145 | Closing + bài tập | 17 |

## 3. Bài tập thực hành

### 3.1. Hoạt động: Phân loại CR (10 phút) — sau slide 10
Phát 5 tình huống thay đổi yêu cầu, học viên phân loại CR nhỏ/trung/lớn và đề xuất ai duyệt.

### 3.2. Demo AI làm Impact Analysis (giảng viên — 10 phút)
Show prompt slide 16 với case Doanh nghiệp A.

### 3.3. Bài về nhà
- Viết 1 CR document hoàn chỉnh cho 1 thay đổi tự nghĩ ra (vd. thêm tính năng vào SRS Buổi 7)
- Đầy đủ: mô tả · lý do · impact 5 dimension · approval · timeline
- Vẽ traceability matrix 5 cột cho ≥ 5 yêu cầu
- Upload lên LMS

## 4. Biểu mẫu

| Mã | Tên |
|----|-----|
| TPL-025 | Change Request template (Word) |
| TPL-026 | Impact Analysis matrix (Excel — 5 dimension) |
| TPL-027 | Traceability matrix template (Excel — BR → TC) |
| TPL-028 | MoSCoW + RICE scoring sheet (Excel) |

## 5. Quiz

**Q1.** "Scope creep" là?
- [ ] Tốc độ phát triển nhanh
- [x] Yêu cầu phình ra ngoài kế hoạch ban đầu
- [ ] Kỹ thuật scrum
- [ ] Loại tài liệu

**Q2.** 5 dimension của Impact Analysis?
- [ ] Cost / Risk / Time / Quality / Scope
- [x] Tài liệu / Code / Schedule / Budget / Risk
- [ ] Functional / Non-functional / UI / Data / Integration
- [ ] BR / US / FR / UC / TC

**Q3.** Trong MoSCoW, "M" = ?
- [ ] Maybe
- [ ] Medium
- [x] MUST (phải có)
- [ ] Mandatory

**Q4.** RICE = (Reach × Impact × Confidence) / ?
- [ ] Risk
- [ ] Resource
- [x] Effort
- [ ] Revenue

**Q5.** Traceability matrix 5 cột chuẩn?
- [ ] Khách / Sản phẩm / Dev / QA / Khách
- [x] Business Req / User Story / Functional Req / Use Case / Test Case
- [ ] BRD / SRS / FRD / UC / TC
- [ ] Plan / Do / Check / Act / Improve

**Q6.** CR lớn (> 5 ngày dev, ảnh hưởng kiến trúc) ai duyệt?
- [ ] BA + Tech Lead
- [ ] PM + BA Lead
- [x] Sponsor + CTO + Steering Committee
- [ ] CEO

**Q7.** Tool tracking yêu cầu phổ biến nhất 2026?
- [x] Jira + Confluence
- [ ] Excel + Word
- [ ] Google Docs
- [ ] Notion (đứng thứ 2, sau Jira)

## 6. Câu phỏng vấn thử

1. "Khách yêu cầu thêm tính năng giữa sprint — quy trình bạn xử lý từng bước?"
2. "Khi MUST trong MoSCoW chiếm 80% capacity sprint — bạn nói gì với khách?"
3. "Vẽ traceability matrix cho 1 BR thực tế — xuyên suốt 5 cấp."
4. "AI giúp impact analysis — bạn verify output AI thế nào để không bỏ sót?"

## 7. Tài liệu tham khảo

**Tiếng Việt — free:**
- Blog **BAC.vn** — bài "Quản lý change request thực chiến"
- YouTube: search "MoSCoW prioritization", "Traceability matrix"

**Đào sâu:**
- *BABOK® Guide v3.0* — Chương 5 (Requirements Lifecycle Management)
- *Agile Estimating and Planning* — Mike Cohn (RICE và prioritization)
- Jira + Confluence: Atlassian University free courses

## 8. Checklist trước buổi

- [ ] Mở sẵn Jira demo project (test tạo CR ticket 1 lần)
- [ ] Chuẩn bị 5 tình huống CR cho hoạt động phân loại
- [ ] In TPL-025/026/027/028
- [ ] Test slide trên trình chiếu (16:9, font ≥ 20px)
- [ ] **Cảnh báo:** Section 2 nhiều khái niệm — slow down, dùng ví dụ Doanh nghiệp A xuyên suốt
- [ ] **Lưu ý:** Đây là buổi gần cuối phần Process — chuyển focus sang Career trong Buổi 10

---

*Phiên bản: 1.0 — Buổi 9 · Cập nhật: 2026*
