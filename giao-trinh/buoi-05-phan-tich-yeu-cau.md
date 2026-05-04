# BUỔI 05 — PHÂN TÍCH YÊU CẦU

| Thuộc tính | Giá trị |
|------------|---------|
| **Thời lượng** | 2.5 giờ (150 phút) |
| **Loại buổi** | Practice — kỹ thuật + thực hành nặng (4 kỹ thuật cốt lõi) |
| **Slide kèm theo** | `slides/src/decks/buoi-05/` (17 slide) |
| **Mục tiêu** | Học viên biến note phỏng vấn 5-10 trang thành 4 loại sơ đồ chuẩn (BPMN, ERD, Use Case, User Story Map) — sản phẩm đầu ra dev nhìn vào hiểu ngay. |

---

## 1. Mục tiêu học tập (Learning Outcomes)

Sau buổi học, học viên có thể:

- [LO5.1] Phân loại được yêu cầu theo 3 cấp (Business / User / System) và 2 loại (Functional / Non-functional)
- [LO5.2] Vẽ AS-IS + TO-BE cho 1 quy trình đơn giản
- [LO5.3] Vẽ được sơ đồ BPMN cơ bản với 4 hình chính (Event / Task / Gateway / Flow)
- [LO5.4] Vẽ ERD đơn giản với 3-5 thực thể + quan hệ 1-N, N-N
- [LO5.5] Viết Use Case Spec hoàn chỉnh theo template
- [LO5.6] Sắp được User Story Map 2D (phase × priority)
- [LO5.7] Áp dụng 4 prompt mẫu để AI sinh khung sơ đồ tự động

## 2. Đề cương chi tiết (theo phút)

### 2.1. Mở đầu — Hook + Agenda (10 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 0–5 | Recap Buổi 4 + check bài về nhà (note phỏng vấn người thân) | Slide 1 | Q&A nhanh |
| 5–10 | Hook: note ≠ requirement, agenda 4 phần | Slide 2-3 | Chuyển tiếp |

> **Ghi chú giảng dạy:** Đây là buổi nặng kỹ thuật vẽ sơ đồ. Học viên dễ "ngộp" với BPMN, ERD, UC — nên đi từ ví dụ cụ thể (case Sửa chữa) trước, lý thuyết sau. Demo nhiều, lý thuyết ít.

### 2.2. Phần 1 — Phân loại yêu cầu (25 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 10–15 | Section divider | Slide 4 | Chuyển section |
| 15–25 | 3 cấp yêu cầu (Business / User / System) — phễu | Slide 5 | Giảng + ví dụ thật từ case Sửa chữa |
| 25–35 | Functional vs Non-functional | Slide 6 | Cảnh báo: BA fresher hay quên Non-functional |

**Điểm nhấn cần dạy:**
- Business = "vì sao" (3-5 cái) — quan trọng nhất, đo thành công
- User = "làm gì" (20-50 cái) — concrete cho người dùng
- System = "làm thế nào" (100+ cái) — cho dev viết code
- Non-functional = bảo hiểm cho dự án không bị chê "chậm/không bảo mật"

### 2.3. Phần 2 — Phân tích quy trình (35 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 35–40 | Section divider | Slide 7 | Chuyển section |
| 40–55 | AS-IS vs TO-BE — 2 sơ đồ song song | Slide 8 | Demo: vẽ AS-IS quy trình hiện tại của 1 trường (đăng ký môn học) |
| 55–70 | BPMN cơ bản — 4 hình chính | Slide 9 | **Demo live: vẽ BPMN trên mermaid.live** |

**Demo live (10 phút) — vẽ BPMN với Claude Code + mermaid.live:**

Prompt:
```
Mô tả quy trình KH đặt lịch sửa chữa điện lạnh:
- KH chọn dịch vụ + ngày giờ qua app
- Hệ thống tìm thợ rảnh trong khu vực
- Nếu có thợ: gửi notification + thợ confirm trong 5 phút
- Nếu không có thợ: đề xuất ngày khác hoặc thợ ở khu vực gần
- KH xác nhận → tạo booking + thông báo email

Sinh BPMN flowchart Mermaid TD direction kèm các nhánh exception.
```

→ Copy output → paste mermaid.live → show ngay sơ đồ trên màn hình lớp.

### 2.4. Phần 3 — Phân tích dữ liệu + Use Case (45 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 70–75 | Section divider | Slide 10 | Chuyển section |
| 75–90 | ERD cơ bản — Thực thể, Thuộc tính, Quan hệ | Slide 11 | Demo vẽ ERD đơn giản 3 entity |
| 90–105 | Use Case Diagram + Spec — đi cặp | Slide 12 | Phát template UC Spec (TPL-013) |
| 105–115 | User Story Map 2D | Slide 13 | **Hoạt động nhóm: vẽ User Story Map cho 1 case** |

**Hoạt động nhóm (10 phút):**
- Chia 3 nhóm 4-5 người
- Đề bài: "Vẽ User Story Map cho app điểm danh lớp học"
- 4 cột: Đăng ký → Điểm danh → Thống kê → Báo cáo
- 3 hàng: MUST / SHOULD / COULD
- Mỗi nhóm liệt kê 8-12 user story → đặt vào ma trận

### 2.5. Phần 4 — AI applied + Demo Kho IT (30 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 115–120 | Section divider | Slide 14 | Chuyển section |
| 120–135 | 4 prompt mẫu cho 4 kỹ thuật | Slide 15 | **Demo live: AI sinh BPMN + ERD trong 1 phút** |
| 135–145 | Demo phân tích phân hệ Kho IT (Doanh nghiệp A) | Slide 16 | Show output thực tế: 3 BPMN + 1 ERD + 5 UC + Story Map |

**Demo live (10 phút) — AI sinh ERD từ user story:**

Prompt:
```
Cho 5 user story dưới đây cho phân hệ Kho IT của Doanh nghiệp A:

US1. Là nhân viên kho, tôi muốn quét QR thiết bị để cấp phát cho nhân viên.
US2. Là nhân viên kho, tôi muốn xem lịch sử cấp phát của 1 thiết bị.
US3. Là nhân viên, tôi muốn xem danh sách thiết bị đang mượn của mình.
US4. Là quản lý, tôi muốn xem báo cáo tồn kho theo loại thiết bị.
US5. Là nhân viên kho, tôi muốn ghi nhận thiết bị bị hỏng để chuyển bảo trì.

Sinh ERD gồm: entity chính, attribute, quan hệ (1-N hoặc N-N).
Output dạng Mermaid ER diagram.
```

→ Show output → paste mermaid.live → học viên thấy AI sinh ERD đẹp trong 30 giây.

### 2.6. Kết buổi & bài tập về nhà (5 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 145–150 | Closing + bài tập về nhà | Slide 17 | Q&A đóng buổi |

**Bài về nhà cho Buổi 6:**
- Phân tích 1 phân hệ tự chọn (Sửa chữa / Điểm danh / Doanh nghiệp A) — nộp:
  + 1 BPMN cho 1 quy trình chính (vẽ trên mermaid.live, screenshot upload)
  + 1 ERD với ≥ 4 entity (Mermaid screenshot)
  + 3 Use Case Spec hoàn chỉnh (theo template TPL-013)
- Có thể dùng AI để sinh khung — nhưng phải edit + verify, KHÔNG nộp output AI thô

---

## 3. Bài tập thực hành trong buổi

### 3.1. Hoạt động 1 — Vẽ AS-IS thân thuộc (5 phút)

**Mục đích:** Học viên áp dụng tư duy AS-IS vào quy trình quen thuộc

**Cách thực hiện:**
- Mỗi học viên vẽ AS-IS quy trình "đăng ký môn học" / "đặt vé xe Tết" / "rút tiền ATM" trên giấy
- Pair 2 người chia sẻ — đặt câu "TO-BE nên thế nào?"

### 3.2. Hoạt động 2 — Demo BPMN trên mermaid.live (giảng viên)

(Chi tiết ở mục 2.3)

### 3.3. Hoạt động 3 — Vẽ User Story Map nhóm (10 phút) — slide 13

(Chi tiết ở mục 2.4)

### 3.4. Hoạt động 4 — Demo AI sinh ERD (giảng viên)

(Chi tiết ở mục 2.5)

---

## 4. Biểu mẫu / Template kèm theo

| Mã | Tên | Dùng ở buổi |
|----|-----|-------------|
| TPL-011 | BPMN cheat sheet (4 hình + ví dụ) | Buổi 5+ |
| TPL-012 | ERD template + cardinality reference | Buổi 5+ |
| TPL-013 | Use Case Spec template (Word) | Buổi 5+ |
| TPL-014 | User Story Map template (Miro/FigJam) | Buổi 5+ |

---

## 5. Câu hỏi kiểm tra (Quiz / Self-check)

**Q1.** 3 cấp yêu cầu là gì?
- [ ] Khách hàng / Sếp / Người dùng cuối
- [x] Business / User / System
- [ ] Functional / Non-functional / Constraint
- [ ] Must / Should / Could

**Q2.** Yêu cầu "Trang chủ load ≤ 2 giây trên 4G" là loại gì?
- [ ] Functional (Chức năng)
- [x] Non-functional (Phi chức năng — Performance)
- [ ] Business
- [ ] User

**Q3.** Trong BPMN, hình thoi (Diamond) tượng trưng cho?
- [ ] Sự kiện bắt đầu
- [ ] Công việc
- [x] Quyết định / Rẽ nhánh (Gateway)
- [ ] Luồng

**Q4.** AS-IS là gì?
- [ ] Quy trình mong muốn
- [x] Quy trình hiện tại
- [ ] Yêu cầu kỹ thuật
- [ ] Đặc tả phần mềm

**Q5.** Trong ERD, ký hiệu "1-N" có nghĩa?
- [ ] 1 entity có 1 attribute
- [x] 1 record của entity A liên kết với nhiều record của entity B
- [ ] 1 use case có nhiều actor
- [ ] 1 user story có nhiều acceptance

**Q6.** Use Case Spec tối thiểu cần các mục gì? *(câu mở)*

**Đáp án Q6:** UC ID, Tên, Actor, Điều kiện trước (pre-condition), Luồng chính, Luồng phụ (alternative), Điều kiện sau (post-condition).

**Q7.** User Story Map có bao nhiêu chiều?
- [ ] 1 (chỉ list dọc)
- [x] 2 (cột = phase, hàng = priority)
- [ ] 3
- [ ] 4

**Q8.** MVP (sản phẩm tối thiểu) trong User Story Map là?
- [x] Hàng MUST — tính năng tối thiểu để ra mắt
- [ ] Hàng SHOULD
- [ ] Hàng COULD
- [ ] Toàn bộ user story

---

## 6. Câu hỏi phỏng vấn thử (cho giảng viên hỏi cuối Buổi 11)

> Lưu sẵn ở đây để học viên có thể luyện trước.

1. "Hãy phân loại 5 yêu cầu sau theo Business / User / System: [đưa list]"
2. "Vẽ BPMN cho quy trình bạn quen nhất — ví dụ đăng ký lớp học."
3. "Khi khách nói 'tôi muốn dashboard' — bạn đào sâu thế nào để có Use Case Spec đầy đủ?"
4. "ERD và Use Case Diagram khác nhau ở đâu? Khi nào cần cả 2, khi nào chỉ cần 1?"

---

## 7. Tài liệu tham khảo

> Quan trọng nhất là thực hành theo các buổi học. Các tài liệu dưới đây để tham khảo thêm.

**Khởi động — tiếng Việt, miễn phí:**
- Blog **BAC.vn** / **BAVietnam** — bài về BPMN, ERD, Use Case
- Kênh YouTube tiếng Việt: search "BPMN cơ bản", "Vẽ ERD", "User Story Mapping"
- **mermaid.live** — tool free vẽ sơ đồ bằng text (BPMN, ERD)
- **draw.io** — tool free vẽ sơ đồ kéo thả

**Đào sâu — sách chuyên ngành:**
- *BABOK® Guide v3.0* — IIBA — Chương 5: Requirements Analysis & Design
- *User Story Mapping* — Jeff Patton (kinh điển về Story Map)
- *BPMN Method and Style* — Bruce Silver (chuẩn BPMN 2.0)

---

## 8. Ghi chú giảng viên — Checklist trước buổi

- [ ] Mở sẵn VS Code + Claude Code (test prompt sinh BPMN + ERD 1 lần)
- [ ] Mở sẵn `mermaid.live` để demo live ngay khi cần
- [ ] Mở sẵn portal `D:\GiangDay\Demo\demo-kho` (port 5178) để minh hoạ thực tế phân hệ Kho IT
- [ ] In template TPL-011 (BPMN cheat) + TPL-012 (ERD) + TPL-013 (UC Spec) + TPL-014 (Story Map)
- [ ] Chuẩn bị marker đỏ + xanh để vẽ AS-IS / TO-BE trên bảng
- [ ] Chuẩn bị link LMS upload bài về nhà
- [ ] Test slide trên trình chiếu (16:9, font ≥ 20px — đã verify)
- [ ] **Nhắc bản thân khi giảng:** mọi từ chuyên ngành (BPMN, ERD, entity, attribute, cardinality, MVP, Story Map…) lần đầu xuất hiện phải giải thích — không "thả" thuật ngữ rồi đi tiếp
- [ ] **Cảnh báo:** Buổi nặng kỹ thuật — nghỉ giải lao 5 phút giữa Phần 2 và Phần 3 (sau slide 9)

---

*Phiên bản: 1.0 — Buổi 5*
*Cập nhật cuối: 2026*
