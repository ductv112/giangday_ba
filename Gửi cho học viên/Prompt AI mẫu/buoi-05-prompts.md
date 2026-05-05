# Buổi 5 — Prompt Library (4 prompts)

## Prompt 1: Vẽ BPMN từ description text

**Tool:** Claude + Mermaid
**Khi dùng:** Sinh sơ đồ quy trình từ mô tả

```
Mô tả quy trình [TÊN QUY TRÌNH]:
[Liệt kê từng bước theo thứ tự]
- Bước 1: ...
- Bước 2: ...
- ...

Sinh BPMN flowchart Mermaid (TD direction):
- Đủ 4 hình BPMN cơ bản (Start/End event, Task, Gateway, Flow)
- Lane phân theo vai trò
- Nhánh exception cho mỗi gateway
- Đặt tên task dạng động từ + danh từ

Output Mermaid code có comment giải thích từng nhánh.
```

**Ví dụ — Đặt lịch sửa chữa:**

```
Mô tả quy trình KH đặt lịch sửa chữa điện lạnh:
- KH chọn dịch vụ + ngày giờ qua app
- Hệ thống tìm thợ rảnh trong khu vực
- Nếu có thợ: gửi notification + thợ confirm trong 5 phút
- Nếu không có thợ: đề xuất ngày khác hoặc thợ ở khu vực gần
- KH xác nhận → tạo booking + thông báo email

Sinh BPMN flowchart Mermaid TD direction kèm các nhánh exception.
```

---

## Prompt 2: Sinh ERD từ User Stories

**Tool:** Claude + Mermaid
**Khi dùng:** Có user stories, cần thiết kế database

```
Cho [N] user story dưới đây cho phân hệ [TÊN]:

US1. ...
US2. ...
US3. ...
...

Sinh ERD gồm:
- Entity chính (≥ 4)
- Attribute mỗi entity (PK, FK, required fields)
- Relationship + cardinality (1-N, N-N, 0..1, 0..N)

Output dạng Mermaid ER diagram. Note giải thích quan hệ chính bằng tiếng Việt.
```

**Ví dụ:**

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

---

## Prompt 3: Sinh Use Case Diagram + Spec

**Tool:** Claude Code
**Khi dùng:** Cần document chi tiết 1 use case

```
Cho User Story sau:
"[Paste US đầy đủ]"

Sinh Use Case Specification đầy đủ theo template TPL-013:
- UC ID, Tên, Module
- Actor (primary + secondary)
- Pre-condition
- Trigger
- Main Flow (numbered table: Actor làm gì | Hệ thống phản hồi)
- Alternative Flow (≥ 2 alt)
- Exception Flow (≥ 2 exception)
- Post-condition
- Business Rule liên quan
- Non-functional requirement
- Test scenarios chính (≥ 5)

Output Markdown. Format chuẩn cho dev đọc + code được.
```

---

## Prompt 4: Sinh User Story Map

**Tool:** Claude Code / ChatGPT
**Khi dùng:** Có list 30-50 user story, cần organize

```
Cho [N] user story dưới đây của dự án [TÊN]:

[Paste tất cả US]

Sắp thành User Story Map 2D:
- Trục ngang: 4-5 giai đoạn user journey theo thời gian
  (vd. Discover → Try → Buy → Use → Recommend)
- Trục dọc: 3 mức priority (MUST / SHOULD / COULD)

Output:
1. Bảng matrix với US ID đặt vào đúng cell
2. List MVP (chỉ MUST) ngắn
3. Suggestion: 3-5 user story có thể defer hoặc cắt

Note: Story trong cùng giai đoạn nên cluster lại.
```
