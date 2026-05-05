# TPL-014 — User Story Map Template

**Buổi sử dụng:** B5 (Phân tích yêu cầu)
**Format gợi ý:** Miro / FigJam / Excel / Sticky note trên tường

## Mục đích
Sắp toàn bộ User Story theo 2 chiều: **Trục ngang = hành trình người dùng** + **Trục dọc = priority** → biết MVP cần làm gì, hoãn gì.

## Khi nào dùng
- **Đầu dự án:** Sau khi có ~50 user story → cần sắp + ưu tiên
- **Sprint planning:** Chọn từ MUST → vào sprint
- **Khi scope bị phình:** Visual hoá để stakeholder thấy "không thể làm hết"

## Cấu trúc

```
              GIAI ĐOẠN 1 → GIAI ĐOẠN 2 → GIAI ĐOẠN 3 → GIAI ĐOẠN 4
              (User journey theo thứ tự thời gian)
            ┌─────────────┬─────────────┬─────────────┬─────────────┐
MUST        │ US-001      │ US-005      │ US-010      │ US-015      │
(MVP)       │ US-002      │ US-006      │ US-011      │ US-016      │
            ├─────────────┼─────────────┼─────────────┼─────────────┤
SHOULD      │ US-003      │ US-007      │ US-012      │             │
            │             │ US-008      │             │             │
            ├─────────────┼─────────────┼─────────────┼─────────────┤
COULD       │ US-004      │             │ US-013      │ US-017      │
            │             │             │ US-014      │             │
            └─────────────┴─────────────┴─────────────┴─────────────┘

──────── MVP line (chỉ release MUST) ─────────
```

---

## Ví dụ: User Story Map cho App đặt lịch sửa chữa

### Trục ngang: 5 giai đoạn KH đi qua

| 1. Tìm hiểu | 2. Đặt lịch | 3. Theo dõi | 4. Trải nghiệm dịch vụ | 5. Sau dịch vụ |
|---|---|---|---|---|

### MUST (MVP — có thì mới release được)

| Tìm hiểu | Đặt lịch | Theo dõi | Trải nghiệm | Sau dịch vụ |
|---|---|---|---|---|
| Xem giới thiệu app | Chọn dịch vụ | Xem trạng thái | (không có US trong MVP) | Thanh toán |
| Xem danh sách dịch vụ | Chọn ngày giờ | | | |
| | Confirm booking | | | |

### SHOULD (Quan trọng — sprint sau MVP)

| Tìm hiểu | Đặt lịch | Theo dõi | Trải nghiệm | Sau dịch vụ |
|---|---|---|---|---|
| Đọc review | Auto-suggest ngày | Tracking GPS thợ | Chat với thợ | Đánh giá thợ |
| | Chọn thợ ưu thích | Notification realtime | | |

### COULD (Nice to have — phase sau)

| Tìm hiểu | Đặt lịch | Theo dõi | Trải nghiệm | Sau dịch vụ |
|---|---|---|---|---|
| Video demo | Booking lặp lại | | Voice call thợ | Refer bạn → discount |
| | | | | |

---

## Quy tắc làm User Story Map

1. **Trục ngang = HÀNH TRÌNH theo thời gian**, không phải module
   - ✅ "Tìm hiểu → Đặt lịch → Theo dõi"
   - ❌ "Module Login → Module Booking → Module Payment"

2. **Mỗi cột chứa US của 1 giai đoạn cụ thể**
   - Không nhồi US của 3 giai đoạn vào 1 cột

3. **Hàng trên = quan trọng nhất**
   - MUST → SHOULD → COULD (giảm dần)

4. **Vẽ MVP line ngang**
   - Phía trên line = release đầu tiên
   - Phía dưới = release sau

5. **Có US là "spike" / "tech enabler"**
   - Đôi khi 1 US là kỹ thuật (vd. "Setup CI/CD") — thêm hàng riêng

---

## Tools recommended

| Tool | Free? | Khi nào dùng |
|------|------|---|
| **Miro** | Free 3 board | Workshop online realtime |
| **FigJam** | Free unlimited | Nếu team đã dùng Figma |
| **Mural** | Pro | Enterprise |
| **Excel** | ✅ | Quick + share dễ |
| **Sticky note + tường** | ✅ | Workshop on-site |

## Tips

- **Bắt đầu bằng tường + sticky note** — tactile, ai cũng tham gia được
- **Move sticky thoải mái** — đừng "lock" một US vào 1 cell ngay
- **Show cho khách** — visual giúp khách hiểu "không thể làm hết tất cả ngay"
- **Decision MVP công khai** — mọi người đều biết US nào trong MVP, US nào hoãn
- **Update mỗi sprint review** — priority thay đổi → US move giữa MUST/SHOULD/COULD
- **Ai làm bài tập:** dùng Miro free → invite cả team join
