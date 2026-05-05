# Buổi 6 — Prompt Library (4 prompts)

## Prompt 1: Sinh Wireframe nhanh

**Tool:** v0.dev
**Hint:** Mô tả mục tiêu màn hình → v0.dev sinh component React + Tailwind

```
Sinh wireframe trang [TÊN MÀN] cho hệ thống [TÊN]:
- Header có: [list elements]
- Body table/form/card với [N] cột/fields
- Action: [list buttons]
- Style: minimal, [framework feel — ant-design/shadcn/material]
- Color primary: [HEX]
```

**Ví dụ — Trang Quản lý kho IT:**

```
Sinh wireframe trang Quản lý kho IT của Doanh nghiệp A:
- Header có search + filter loại thiết bị
- Body: table list 8 cột (mã, tên, loại, trạng thái, người mượn,
  ngày cấp phát, ngày bảo hành, action)
- Mỗi row có 2 nút: "Cấp phát" + "Báo hỏng"
- Pagination 20 items/page
- Style minimal, ant-design feel
- Color primary #D41B3F
```

---

## Prompt 2: Sinh nhiều biến thể UI

**Tool:** Claude Code
**Khi dùng:** Cần present 2-3 option để stakeholder chọn

```
Cho màn hình [TÊN MÀN] của app [TÊN APP]:
- Mục tiêu chính: [user làm gì trên màn này]
- Persona: [vai trò user]
- Constraint: [list ràng buộc]

Sinh 3 phương án layout khác nhau:

**Phương án A — Compact:**
- Mô tả thành phần
- Ưu điểm: ___
- Nhược: ___

**Phương án B — Normal:**
...

**Phương án C — Spacious:**
...

Cuối: recommend phương án nào phù hợp + lý do.
```

---

## Prompt 3: Mô tả luồng người dùng

**Tool:** Claude + Mermaid
**Khi dùng:** Cần vẽ user flow giữa nhiều màn hình

```
Mô tả user flow KH đặt lịch sửa chữa qua app:

5 màn hình chính:
1. Home — chọn dịch vụ
2. Booking detail — chọn ngày/giờ/địa chỉ
3. Confirm — review + xác nhận
4. Tracking — theo dõi thợ đến
5. Done — đánh giá + thanh toán

Sinh Mermaid flowchart (TD direction) gồm:
- 5 node màn hình
- Decision points (KH có account chưa? Đủ thợ?)
- Alt path (đăng nhập/đăng ký lần đầu)
- Exception (mất mạng, payment fail)

Note giải thích từng decision point bằng tiếng Việt.
```

---

## Prompt 4: Review wireframe theo 6 nguyên tắc UX

**Tool:** Claude (vision) / NotebookLM
**Khi dùng:** Self-review wireframe trước khi gửi designer

```
Đây là wireframe màn hình [TÊN] (đính kèm screenshot).

Review theo 6 nguyên tắc UX cốt lõi:
1. Rõ ràng > đẹp — Người dùng hiểu ngay làm gì?
2. 1 màn hình = 1 mục tiêu — Có nhồi nhiều task không?
3. Quy ước trước, sáng tạo sau — Dùng pattern quen thuộc?
4. Phản hồi tức thì — Click button có loading/toast?
5. Lỗi giúp người dùng sửa — Error message rõ + actionable?
6. Trạng thái rỗng (empty state) — Khi data rỗng có hướng dẫn?

Output table:
| # | Nguyên tắc | Pass/Partial/Fail | Specific issue | Suggested fix |

Cuối: tổng kết Pass rate (X/6) + 3 ưu tiên fix top.
```
