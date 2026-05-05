# BUỔI 07 — VIẾT TÀI LIỆU YÊU CẦU

| Thuộc tính | Giá trị |
|------------|---------|
| **Thời lượng** | 2.5 giờ (150 phút) |
| **Loại buổi** | Practice — heavy (viết tài liệu, demo AI sinh draft) |
| **Slide kèm theo** | `slides/src/decks/buoi-07/` (17 slide) |
| **Mục tiêu** | Học viên phân biệt 6 loại tài liệu, viết User Story chuẩn INVEST + Given-When-Then, dùng AI sinh draft SRS 20 trang trong 1 giờ. |

## 1. Mục tiêu học tập

- [LO7.1] Phân biệt 6 loại tài liệu BA: BRD, SRS, FRD, User Story, Use Case Spec, Test Cases
- [LO7.2] Phân biệt rõ BRD vs SRS — ai đọc, ngôn ngữ, mục lục
- [LO7.3] Viết User Story chuẩn INVEST (6 tiêu chí)
- [LO7.4] Viết Acceptance Criteria theo Given-When-Then
- [LO7.5] Sử dụng template SRS chuẩn 8 mục
- [LO7.6] Áp dụng 7 quy tắc viết tài liệu rõ ràng (tránh từ mơ hồ, có ID, active voice…)
- [LO7.7] Dùng AI sinh SRS draft + test cases từ User Story trong < 5 phút

## 2. Đề cương (theo phút)

| Phút | Nội dung | Slide |
|------|----------|-------|
| 0–10 | Recap Buổi 6 + Hook + Agenda | 1-3 |
| 10–35 | Section 01 — Bộ tài liệu BA + BRD vs SRS | 4-6 |
| 35–80 | Section 02 — User Story (INVEST + Given-When-Then) — **Hoạt động nhóm: viết US** | 7-9 |
| 80–115 | Section 03 — SRS template + 7 quy tắc | 10-12 |
| 115–145 | Section 04 — AI prompts + Demo SRS + Test cases | 13-16 |
| 145–150 | Closing + bài về nhà | 17 |

## 3. Bài tập thực hành

### 3.1. Hoạt động nhóm — Viết User Story (15 phút) — sau slide 9
Chia 3 nhóm, mỗi nhóm chọn 1 case (Sửa chữa / Điểm danh / Doanh nghiệp A). Viết 5 User Story theo format INVEST + 3 acceptance Given-When-Then mỗi story. Trình bày 3 phút mỗi nhóm.

### 3.2. Demo AI sinh SRS (giảng viên — 15 phút)
Show toàn bộ flow Demo Slide 15: 5 phase × 60 phút.

### 3.3. Bài về nhà
- Viết SRS hoàn chỉnh cho 1 phân hệ tự chọn (≥ 15 trang)
- Có đủ 8 mục theo template TPL-017
- ≥ 20 User Story chuẩn INVEST
- ≥ 30 acceptance Given-When-Then
- ≥ 50 test cases (positive + negative + edge)
- Có thể dùng AI sinh draft, NHƯNG phải edit + verify từng dòng

## 4. Biểu mẫu

| Mã | Tên |
|----|-----|
| TPL-017 | SRS template chuẩn (Word) — 8 mục |
| TPL-018 | User Story template + checklist INVEST |
| TPL-019 | Test Case template (Excel) |
| TPL-020 | Glossary template — định nghĩa thuật ngữ |

## 5. Quiz

**Q1.** BRD trả lời câu hỏi gì?
- [x] VÌ SAO làm dự án
- [ ] LÀM GÌ
- [ ] LÀM THẾ NÀO
- [ ] AI test

**Q2.** Chữ "I" trong INVEST là gì?
- [ ] Important
- [x] Independent
- [ ] Iterative
- [ ] Investable

**Q3.** Acceptance "Given tôi đăng nhập, When click Đặt lịch, Then hiển thị 3 thợ" — đúng format?
- [x] Đúng — đủ Given/When/Then
- [ ] Sai — thiếu pre-condition
- [ ] Sai — không có ID
- [ ] Sai — phải dùng "Should"

**Q4.** Câu nào VI PHẠM 7 quy tắc viết tài liệu rõ?
- [ ] "Hệ thống PHẢI gửi email trong 30 giây"
- [x] "Trang load nhanh và thân thiện"
- [ ] "FR-001: Người dùng đăng nhập bằng email + OTP"
- [ ] "OTP = mã 6 số có thời hạn 5 phút"

**Q5.** AI sinh test cases cho 1 user story nên có?
- [ ] Chỉ positive case
- [ ] Chỉ negative case
- [x] Cả 3: positive + negative + edge case
- [ ] Chỉ edge case

**Q6.** Khi AI "hallucinate" (bịa) tính năng không có trong elicit, BA phải?
- [ ] Tin AI vì AI thông minh
- [x] Verify từng dòng + bỏ phần bịa
- [ ] Hỏi lại khách hàng có muốn không
- [ ] Kệ, dev sẽ tự lọc

**Q7.** Mục "Glossary" trong SRS để làm gì?
- [ ] Trang trí
- [ ] Đếm từ
- [x] Định nghĩa thuật ngữ chuyên ngành — tránh dev hiểu sai
- [ ] Liệt kê tác giả

## 6. Câu phỏng vấn thử

1. "Viết 1 User Story chuẩn INVEST cho tính năng 'đặt lịch sửa chữa' — đọc cho tôi nghe."
2. "Khác biệt BRD và SRS là gì? Ai đọc, mục lục, độ dài?"
3. "AI sinh SRS draft — quy trình verify của bạn ra sao?"
4. "5 lỗi phổ biến BA fresher hay viết tài liệu mơ hồ — kể 3 lỗi và cách tránh."

## 7. Tài liệu tham khảo

**Tiếng Việt — free:**
- Blog **BAC.vn** / **BAVietnam** — bài về SRS, User Story
- YouTube: search "Viết SRS", "User Story INVEST tiếng Việt"

**Đào sâu:**
- *Software Requirements* — Karl Wiegers (kinh điển về requirements writing)
- *User Stories Applied* — Mike Cohn (User Story chuẩn)
- *BABOK® Guide v3.0* — Chương 10: Techniques (User Story, Use Case)

## 8. Checklist trước buổi

- [ ] Mở sẵn Claude Code (test prompt sinh SRS draft 1 lần)
- [ ] Mở sẵn template TPL-017 (SRS) cho học viên download
- [ ] Mở sẵn `D:\GiangDay\Demo\demo-kho` để minh hoạ phân hệ Kho IT
- [ ] In TPL-018 (US checklist) + TPL-019 (TC template)
- [ ] **Cảnh báo:** Buổi nặng — sắp xếp nghỉ giải lao 5 phút sau slide 9 (giữa Section 2 và 3)
- [ ] **Nhắc bản thân:** Mọi từ chuyên ngành (BRD/SRS/FRD/US/UC/INVEST/Given-When-Then/positive/negative/edge…) phải giải thích — không "thả" thuật ngữ

---

*Phiên bản: 1.0 — Buổi 7 · Cập nhật: 2026*
