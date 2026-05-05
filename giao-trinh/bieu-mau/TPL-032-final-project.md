# TPL-032 — Đề bài cuối khoá

**Buổi sử dụng:** B11 (Bài tập cuối khoá)
**Format gợi ý:** Markdown / Word
**Deadline:** 1 tuần sau Buổi 11

## Mục đích
Đề bài chuẩn cho bài tập cuối khoá — học viên áp dụng toàn bộ 10 buổi đã học vào 1 case thật.

---

## ĐỀ BÀI

### Bối cảnh giả định

> **Bạn vừa nhận offer BA Junior tại Doanh nghiệp A.**
>
> Doanh nghiệp A là 1 công ty công nghệ ~500 nhân viên, đang triển khai nội bộ bộ ERP đa phân hệ.
>
> Manager giao bạn phụ trách phân hệ **"Bảo trì hệ thống IT"** (`D:\GiangDay\Demo\demo-baotri`) — module chuyên xử lý bảo trì server, hệ thống IT, thiết bị mạng cho toàn doanh nghiệp.
>
> Yêu cầu: Phân tích A-Z, viết đầy đủ tài liệu, sẵn sàng bàn giao cho dev. **Deadline: 1 tuần.**

### Bạn cần làm gì

Phân tích phân hệ Bảo trì IT theo quy trình BA đã học (6 bước):
1. **Lập kế hoạch** (Planning)
2. **Khơi gợi yêu cầu** (Elicitation)
3. **Phân tích & vẽ sơ đồ** (Analysis)
4. **Thiết kế giao diện** (Design)
5. **Viết tài liệu** (Documentation)
6. **Validate** (Kiểm tra)

### 6 Deliverable cần nộp

#### 1. Planning Doc (1-2 trang) · Sử dụng TPL-005

- Mục tiêu kinh doanh phân hệ Bảo trì IT
- Stakeholder + Power/Interest matrix (TPL-006)
- Deliverable cần làm
- Timeline 1 tuần (chi tiết theo ngày)

#### 2. Note phỏng vấn 3 buổi · Sử dụng TPL-009

Phỏng vấn 3 stakeholder giả lập với Claude Code role-play:
- 1 buổi với "Quản lý IT" (sponsor)
- 1 buổi với "Kỹ thuật viên bảo trì" (end user)
- 1 buổi với "Nhân viên end user báo sự cố" (customer)

Mỗi note có:
- Pain points (≥ 3)
- Yêu cầu nêu ra (≥ 5)
- Quy trình AS-IS hiện tại
- Quote nguyên văn

#### 3. Sơ đồ Analysis · Sử dụng TPL-011, 012, 013

- **≥ 3 BPMN** cho 3 quy trình chính (vd. Báo sự cố, Tiếp nhận - Xử lý, Đóng ticket)
- **1 ERD** với ≥ 4 entity (vd. Ticket, Equipment, Technician, Schedule)
- **5 Use Case Spec** đầy đủ (TPL-013) — cho 5 chức năng quan trọng nhất

#### 4. Wireframe (3-5 màn) · Sử dụng TPL-015

Sinh wireframe bằng v0.dev hoặc Figma cho:
- Màn hình "Báo sự cố"
- Màn hình "Danh sách ticket"
- Màn hình "Chi tiết ticket + xử lý"
- Màn hình "Dashboard tổng quan" (cho Quản lý)
- (Optional) Màn hình "Lịch bảo trì định kỳ"

Tự kiểm theo checklist 15 mục (TPL-015).

#### 5. SRS hoàn chỉnh · Sử dụng TPL-017

≥ 15 trang theo template chuẩn 8 mục:
- Giới thiệu
- Mô tả tổng quan
- Yêu cầu chức năng (≥ 25 FR)
- Yêu cầu phi chức năng (≥ 10 NFR)
- Mô hình dữ liệu (link ERD)
- Giao diện (link wireframe)
- Tích hợp (với SSO + DMS + Mua hàng)
- Phụ lục (Glossary + Traceability matrix)

Bao gồm:
- **20 User Story chuẩn INVEST** (TPL-018)
- **50 Test Cases** (TPL-019) — phân bố ~10 cases/UC × 5 UC

#### 6. Traceability Matrix · Sử dụng TPL-027

Bảng 5 cột BR → US → FR → UC → TC, đầy đủ link:
- 3-5 BR
- 20 US
- 25-30 FR
- 5 UC
- 50 TC

---

## Quy tắc + Lưu ý

### Sử dụng AI
- ✅ **Khuyến khích dùng AI** (Claude Code, ChatGPT, v0.dev, NotebookLM)
- ⚠ **Verify từng output** — không nộp output thô của AI
- ⚠ **Tail mỗi deliverable:** ghi rõ "Đã dùng AI nào, prompt gì"

### Reference Demo
- Có thể chạy `D:\GiangDay\Demo\demo-baotri` (port 5180) để hiểu module hiện tại
- Có thể đọc CLAUDE.md trong demo để hiểu domain
- KHÔNG được copy spec trong demo — phải tự phân tích lại

### Kích thước
- Tổng tài liệu nộp: ~30-50 trang
- 1 file ZIP gồm 6 deliverable + 1 file PDF tổng hợp
- Đặt tên: `BAITAP-CK-[HoTen]-[Ngay].zip`

### Submission
- Upload lên LMS
- CC: instructor email
- Deadline: cuối tuần sau Buổi 11

---

## Đánh giá

Theo Rubric 100 điểm (TPL-033):

| Khu vực | Điểm tối đa |
|---------|-------------|
| Planning | 10 |
| Elicitation | 15 |
| Analysis (BPMN/ERD/UC) | 20 |
| Design (Wireframe) | 15 |
| Documentation (SRS) | 25 |
| Traceability | 10 |
| AI Applied | 5 |
| **TỔNG** | **100** |

**Pass ≥ 70/100** = đạt chứng nhận hoàn thành khoá iPMAC + 36 PDU đủ điều kiện thi ECBA.

---

## Tips để pass cao

### 1. Đầu tư Planning sớm (ngày 1-2)
- Plan rõ → 5 ngày còn lại không "lạc"

### 2. Phỏng vấn AI thật (đừng skip)
- Dùng prompt:
  ```
  Đóng vai 1 quản lý IT 35 tuổi tại Doanh nghiệp A. Bạn quản lý team
  bảo trì 5 người. Tình trạng hiện tại: dùng Excel + Email báo sự cố,
  hay miss SLA. Hãy trả lời tôi như khách hàng giả lập.
  ```

### 3. Vẽ sơ đồ trước, viết sau
- BPMN/ERD/UC trước → SRS sau (dễ hơn nhiều)

### 4. AI sinh draft → bạn EDIT
- Đừng nộp output AI thô (mất point)
- Edit ≥ 30% content để personalize

### 5. Self-check theo checklist 10 (TPL-023)
- Trước nộp → đi qua 10 tiêu chí
- Tích đủ 10 mới submit

### 6. Xin feedback trước khi nộp
- Nhờ 1 bạn cùng khoá đọc → comment
- Sửa rồi nộp

---

## Submit checklist

- [ ] 6 deliverable đầy đủ (Planning + Notes + Sơ đồ + Wireframe + SRS + Traceability)
- [ ] Đặt tên file đúng format
- [ ] Có file PDF tổng hợp (pandoc convert)
- [ ] Self-check theo TPL-023 — pass ≥ 8/10 tiêu chí
- [ ] Note "đã dùng AI nào" cuối mỗi deliverable
- [ ] Upload LMS + CC instructor

---

*Chúc bạn làm bài tập tốt! Đây là chứng minh cuối khoá rằng bạn đã sẵn sàng đi làm BA.*
