# BUỔI 03 — QUY TRÌNH PHÂN TÍCH & THIẾT KẾ

| Thuộc tính | Giá trị |
|------------|---------|
| **Thời lượng** | 2.5 giờ (150 phút) |
| **Loại buổi** | Process — quy trình BA tổng thể, neo cho 6 buổi sau |
| **Slide kèm theo** | `slides/src/decks/buoi-03/` (16 slide) |
| **Mục tiêu** | Học viên hiểu lộ trình 6 bước BA đi qua trong mọi dự án, vòng đời 1 yêu cầu, khác biệt giữa Waterfall và Agile, biết cách lập kế hoạch BA và bản đồ bên liên quan. |

---

## 1. Mục tiêu học tập (Learning Outcomes)

Sau buổi học, học viên có thể:

- [LO3.1] Vẽ lại được 6 bước quy trình BA và mô tả output của mỗi bước
- [LO3.2] Mô tả 5 trạng thái trong vòng đời 1 yêu cầu (Phát hiện → Phân tích → Duyệt → Triển khai → Kiểm tra)
- [LO3.3] So sánh được sự khác biệt khi BA làm dự án Waterfall vs Agile
- [LO3.4] Liệt kê 6 sự kiện chính BA tham gia trong 1 sprint Agile (2 tuần)
- [LO3.5] Lập được tài liệu Planning 1-2 trang cho 1 phân hệ với 5 mục cốt lõi
- [LO3.6] Vẽ được Ma trận Quyền hạn × Mức độ quan tâm cho stakeholder của 1 dự án
- [LO3.7] Áp dụng được 4 prompt mẫu để rút ngắn thời gian từng bước

## 2. Đề cương chi tiết (theo phút)

### 2.1. Mở đầu — Hook + Agenda (15 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 0–5 | Recap nhanh Buổi 2 + chia sẻ feedback Skill Matrix | Slide 1 | Q&A nhanh |
| 5–10 | Hook: 73% BA fresher rối khi không có quy trình | Slide 2 | Story-telling: kể 1 BA fresher bị "lạc" sprint đầu |
| 10–15 | Agenda 4 phần | Slide 3 | Trình bày roadmap |

> **Ghi chú giảng dạy:** Đây là buổi process — học viên dễ thấy "khô". Giải pháp: kể nhiều story thực, demo live càng nhiều càng tốt. Phần section 1 (6 bước) phải làm cho học viên thấy ngay đây là bản đồ vô cùng giá trị.

### 2.2. Phần 1 — Quy trình BA + Vòng đời yêu cầu (30 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 15–20 | Section divider | Slide 4 | Chuyển section |
| 20–35 | 6 bước quy trình BA — mỗi bước = 1 buổi học | Slide 5 | Giảng theo flow trái → phải, link sang buổi tương ứng |
| 35–45 | Vòng đời 1 yêu cầu — 5 trạng thái | Slide 6 | Vẽ lên bảng + thảo luận: yêu cầu có thể "lùi" không? |

**Điểm nhấn cần dạy:**
- 6 bước không phải đường thẳng — có thể lặp lại nếu yêu cầu đổi
- Vòng đời yêu cầu là góc nhìn TỪ MỘT YÊU CẦU — khác với góc nhìn quy trình BA tổng thể
- Trong dự án thực, BA quản lý đồng thời 50-100 yêu cầu, mỗi cái ở 1 trạng thái khác nhau

### 2.3. Phần 2 — Waterfall vs Agile (35 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 45–50 | Section divider | Slide 7 | Chuyển section |
| 50–65 | So sánh Waterfall vs Agile — bảng 2 cột | Slide 8 | Ví dụ: dự án ngân hàng vs app mobile startup |
| 65–80 | 6 sự kiện BA tham gia trong sprint Agile | Slide 9 | **Demo live: mở 1 board Jira mẫu, show sprint structure** |

**Demo live (5 phút) — Jira sprint mẫu:**
- Mở board Jira public hoặc account giảng viên
- Show: Backlog → Sprint Planning → In Progress → Done
- Chỉ cho học viên thấy: User Story trông như thế nào, point estimation, status transition

**Điểm nhấn cần dạy:**
- Waterfall không tệ — phù hợp dự án nội bộ, ngân hàng, nhà nước
- Agile không phải "không có tài liệu" — chỉ là tài liệu vừa đủ cho sprint hiện tại
- BA Agile làm việc nhiều hơn với team, BA Waterfall làm việc nhiều hơn với stakeholder

### 2.4. Phần 3 — Lập kế hoạch BA (Planning) (35 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 80–85 | Section divider | Slide 10 | Chuyển section |
| 85–100 | 5 việc cần Plan trước khi viết tài liệu | Slide 11 | Giảng + phát template TPL-005 (Planning doc) |
| 100–115 | Bản đồ bên liên quan — Power × Interest | Slide 12 | **Hoạt động nhóm: vẽ ma trận cho 1 dự án mẫu** |

**Hoạt động nhóm (10 phút):**
- Chia 3 nhóm 4-5 người
- Đề bài: "Doanh nghiệp A muốn xây hệ thống Kho IT — vẽ bản đồ stakeholder"
- Output: bảng 2x2 với 5-7 vai trò mỗi nhóm
- Mỗi nhóm chia sẻ 2 phút

### 2.5. Phần 4 — AI applied + Demo timeline (30 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 115–120 | Section divider | Slide 13 | Chuyển section |
| 120–130 | 4 prompt mẫu cho 4 bước cốt lõi | Slide 14 | **Demo live: chạy prompt Planning với Claude Code** |
| 130–140 | Walkthrough timeline 17 ngày BA cho phân hệ Kho IT | Slide 15 | Giảng + Q&A |

**Demo live (5 phút) — Claude Code sinh Planning doc:**
- Prompt: *"Cho dự án 'Hệ thống Kho IT cho Doanh nghiệp A', sinh template Planning gồm: mục tiêu kinh doanh (3 bullet), bên liên quan (5 vai trò + power/interest), deliverable cần làm, timeline 4 tuần với cột mốc."*
- Show output → cho học viên thấy AI sinh ra ngay khung Planning đầy đủ trong 30 giây

### 2.6. Kết buổi & bài tập về nhà (5 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 140–148 | Closing statement | Slide 16 | Wrap-up |
| 148–150 | Giao bài về nhà | (slide 16) | Q&A |

**Bài về nhà cho Buổi 4:**
- Hoàn thành tài liệu Planning (TPL-005) cho 1 phân hệ tự chọn (case Sửa chữa / Điểm danh / Doanh nghiệp A) — upload LMS
- Vẽ Ma trận Power × Interest với ≥ 5 stakeholder — upload LMS (ảnh chụp giấy hoặc Miro/FigJam)
- Cài Mermaid plugin VS Code (nếu chưa) → chuẩn bị Buổi 4-5

---

## 3. Bài tập thực hành trong buổi

### 3.1. Hoạt động 1 — Vẽ vòng đời 1 yêu cầu thực tế

**Mục đích:** Học viên tự nghĩ ra 1 yêu cầu thật và vẽ vòng đời 5 trạng thái

**Cách thực hiện:**
- Mỗi học viên chọn 1 tính năng quen thuộc (vd: "đặt lại mật khẩu trên app ngân hàng")
- Vẽ vòng đời 5 trạng thái cho yêu cầu đó: ai phát hiện, BA phân tích thế nào, ai duyệt, dev triển khai, ai test
- 5 phút làm, 5 phút chia sẻ với người bên cạnh

### 3.2. Hoạt động 2 — Vẽ Ma trận Power × Interest

**Mục đích:** Áp dụng ma trận stakeholder cho 1 dự án mẫu

**Đề bài:**
> "Doanh nghiệp A (công ty công nghệ ~500 nhân viên) quyết định xây hệ thống Kho IT để thay thế Excel hiện tại. BA: bạn. Hãy liệt kê 7-8 stakeholder và xếp họ vào 4 ô của ma trận Power × Interest."

**Output:** Bảng 2x2 trên giấy A4 hoặc Miro/FigJam

**Stakeholder gợi ý:**
- Tổng giám đốc (cao power, cao interest)
- CFO (cao power, thấp interest — vì hệ thống IT nhỏ so với scope của họ)
- Trưởng phòng IT
- Quản lý kho (cao interest — họ là người dùng chính)
- Nhân viên kho (thấp power, cao interest)
- Phòng mua hàng (kết nối, medium interest)
- Phòng nhân sự (thấp interest)
- Đối tác cung cấp phần mềm

### 3.3. Hoạt động 3 — Demo Claude Code sinh Planning doc

**Prompt mẫu in sẵn cho học viên:**

```
Tôi đang chuẩn bị làm BA cho dự án "Hệ thống điểm danh lớp học" tại
1 trường đại học có 5,000 sinh viên. Khách hàng: phòng đào tạo.

Sinh template Planning 1 trang gồm:
1. Mục tiêu kinh doanh (3 bullet — vì sao cần dự án)
2. Phạm vi (in/out scope)
3. Bên liên quan chính (5 vai trò + power/interest level)
4. Deliverable BA cần làm (3-5 mục)
5. Timeline ước lượng (4 tuần với cột mốc)
6. Rủi ro chính (3 mục)

Output bằng tiếng Việt, format Markdown.
```

---

## 4. Biểu mẫu / Template kèm theo

| Mã | Tên | Dùng ở buổi |
|----|-----|-------------|
| TPL-005 | BA Planning doc (1-2 trang) | Buổi 3+ |
| TPL-006 | Stakeholder Power × Interest matrix | Buổi 3+ |
| TPL-007 | Vòng đời yêu cầu — bảng tracking trạng thái | Buổi 3+ (dùng nhiều ở Buổi 9) |

---

## 5. Câu hỏi kiểm tra (Quiz / Self-check)

**Q1.** Quy trình BA có bao nhiêu bước cốt lõi?
- [ ] 4
- [ ] 5
- [x] 6
- [ ] 8

**Q2.** Bước đầu tiên trong quy trình BA là gì?
- [ ] Khơi gợi yêu cầu
- [x] Lập kế hoạch (Planning)
- [ ] Phân tích
- [ ] Viết tài liệu

**Q3.** Vòng đời 1 yêu cầu có bao nhiêu trạng thái?
- [ ] 4
- [x] 5 (Phát hiện · Phân tích · Duyệt · Triển khai · Kiểm tra/Đóng)
- [ ] 6
- [ ] 7

**Q4.** Sự khác biệt CỐT LÕI giữa BA Waterfall và BA Agile là gì? *(câu mở)*

**Đáp án Q4:** BA Waterfall viết XONG toàn bộ tài liệu trước khi dev code. BA Agile chỉ viết User Story đủ cho sprint hiện tại, làm song song với dev và điều chỉnh theo feedback từng sprint.

**Q5.** Trong ma trận Power × Interest, nhóm "Quản lý sát" (Manage closely) là:
- [ ] Power thấp + Interest thấp
- [ ] Power cao + Interest thấp
- [ ] Power thấp + Interest cao
- [x] Power cao + Interest cao

**Q6.** 5 việc cần làm trong Planning là gì? *(câu mở)*

**Đáp án Q6:**
1. Hiểu mục tiêu kinh doanh
2. Xác định bên liên quan + ai quan trọng
3. Chọn cách khơi gợi yêu cầu
4. Chọn deliverable cần làm (BRD/SRS/US)
5. Lập timeline + cột mốc

**Q7.** Sprint chuẩn của Agile thường dài bao lâu?
- [ ] 1 tuần
- [x] 2 tuần
- [ ] 1 tháng
- [ ] 3 tháng

**Q8.** Daily Stand-up là gì?
- [ ] Họp đầu sprint chốt việc làm
- [ ] Họp cuối sprint demo cho khách
- [x] Họp nhanh 15 phút đầu mỗi ngày để cập nhật tiến độ
- [ ] Họp rút kinh nghiệm cuối sprint

---

## 6. Câu hỏi phỏng vấn thử (cho giảng viên hỏi cuối Buổi 11)

> Lưu sẵn ở đây để học viên có thể luyện trước.

1. "Hãy mô tả quy trình BA bạn áp dụng cho 1 dự án từ đầu đến cuối."
2. "Bạn từng làm Waterfall hay Agile? Sự khác biệt khi làm BA giữa 2 cái là gì?"
3. "Khi 1 yêu cầu bị 'lùi' từ trạng thái Triển khai về Phân tích, BA xử lý thế nào?"
4. "Hãy vẽ Ma trận Power × Interest cho 1 dự án bạn từng làm và giải thích tại sao đặt từng người vào ô đó."

---

## 7. Tài liệu tham khảo

> Quan trọng nhất là thực hành theo các buổi học. Các tài liệu dưới đây để tham khảo thêm — đọc nếu hứng thú.

**Khởi động — tiếng Việt, miễn phí:**
- Blog **BAC.vn** / **BAVietnam** — bài viết về quy trình BA + case study
- Kênh YouTube tiếng Việt: search "Quy trình BA", "Agile cho BA", "Sprint cycle"
- Atlassian Agile Coach (có bản tiếng Việt 1 phần) — agile.atlassian.com

**Đào sâu — sách chuyên ngành (sau khoá, để thi chứng chỉ ECBA/CCBA):**
- *BABOK® Guide v3.0* — IIBA — bộ chuẩn kiến thức BA chính thức quốc tế
- *Agile Practice Guide* — PMI + Agile Alliance — Agile cho project work
- *User Stories Applied* — Mike Cohn — chuẩn viết User Story trong Agile

---

## 8. Ghi chú giảng viên — Checklist trước buổi

- [ ] Mở sẵn VS Code + Claude Code (test prompt Planning 1 lần để đảm bảo flow mượt)
- [ ] Mở sẵn 1 Jira board mẫu (account giảng viên hoặc project public) để demo sprint
- [ ] In template TPL-005 (Planning doc) + TPL-006 (Power × Interest matrix) đủ số lượng học viên
- [ ] Chuẩn bị 1-2 story thật về dự án Waterfall vs Agile bạn từng làm
- [ ] Chuẩn bị link LMS cho học viên upload Planning doc + Stakeholder matrix
- [ ] Test slide trên trình chiếu (16:9, font đọc rõ từ cuối phòng — đã verify ≥ 20px)
- [ ] **Nhắc bản thân khi giảng:** mọi từ chuyên ngành (sprint, refinement, retrospective…) lần đầu xuất hiện phải giải thích — không "thả" thuật ngữ rồi đi tiếp

---

*Phiên bản: 1.0 — Buổi 3*
*Cập nhật cuối: 2026*
