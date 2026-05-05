# TPL-013 — Use Case Specification Template

**Buổi sử dụng:** B5 (Phân tích yêu cầu)
**Format gợi ý:** Markdown / Word
**Độ dài mỗi UC:** 1-2 trang

## Mục đích
Template chi tiết để mô tả 1 ca sử dụng (use case) — đầy đủ flow chính, flow phụ, exception. Dev đọc xong code được ngay.

## Khi nào dùng
- **Trong SRS:** Mỗi yêu cầu chức năng phức tạp → 1 UC Spec
- **Đầu sprint:** Refinement với dev — discuss UC trước khi code
- **Test design:** QA dùng UC để sinh test cases

## Template

```markdown
# Use Case: UC-[ID] — [Tên use case]

| Trường | Giá trị |
|---|---|
| **UC ID** | UC-001 |
| **Tên** | [Verb + Noun, vd. "Đặt lịch sửa chữa"] |
| **Module** | [Tên phân hệ] |
| **Author** | [Tên BA] |
| **Version** | 1.0 |
| **Last update** | DD/MM/YYYY |
| **Status** | Draft / Reviewed / Approved |

## 1. Mô tả ngắn (Brief description)
Trong 2-3 câu, mô tả use case này làm gì.

## 2. Actor

### Primary actor (chính)
- [Vai trò chính — vd. "Khách hàng"]

### Secondary actor (phụ)
- [Vai trò phụ — vd. "Hệ thống thanh toán"]

## 3. Pre-condition (Điều kiện trước)
Trạng thái BẮT BUỘC PHẢI ĐÚNG trước khi UC bắt đầu:
- Người dùng đã đăng nhập
- Profile có địa chỉ
- Đã có ít nhất 1 dịch vụ active

## 4. Trigger (Sự kiện kích hoạt)
Hành động cụ thể nào start UC?
- Người dùng bấm nút "Đặt lịch ngay"

## 5. Main Flow (Luồng chính — happy path)

| # | Actor làm gì | Hệ thống phản hồi |
|---|---|---|
| 1 | KH chọn loại dịch vụ | Hiển thị danh sách dịch vụ |
| 2 | KH chọn ngày + khung giờ | Hiển thị form chi tiết |
| 3 | KH bấm "Đặt lịch ngay" | Hệ thống tìm thợ phù hợp |
| 4 | (Hệ thống tự động) | Tạo booking ID + gửi notification |
| 5 | KH thấy màn hình confirm | Hiển thị booking ID + thông tin thợ |

## 6. Alternative Flow (Luồng phụ)

### A1. KH chọn ngày trong quá khứ
- 2.a. KH chọn ngày < hôm nay
- 2.b. Hệ thống hiển thị lỗi "Vui lòng chọn ngày từ hôm nay trở đi"
- → Quay về bước 2

### A2. Không có thợ rảnh trong khu vực
- 3.a. Hệ thống không tìm thấy thợ trong bán kính 5km
- 3.b. Hiển thị "Không có thợ rảnh ngày này"
- 3.c. Đề xuất 3 ngày khác có thợ
- → Quay về bước 2 hoặc kết thúc UC

## 7. Exception Flow (Trường hợp ngoại lệ)

### E1. Mất kết nối mạng
- Bất kỳ bước nào: Hệ thống không trả response trong 30 giây
- Hiển thị "Mất kết nối — Thử lại"
- Lưu draft booking để KH submit lại sau

### E2. Thanh toán fail
- 4.a. Gateway thanh toán trả error
- 4.b. Hủy booking
- 4.c. Email cho KH với hướng dẫn liên hệ support

## 8. Post-condition (Điều kiện sau khi thành công)

- Booking được tạo trong DB với status = "PENDING_THỢ_CONFIRM"
- KH nhận email confirm với booking ID
- Thợ được gán nhận notification trên app
- Trong dashboard admin, booking xuất hiện ở list "Mới"

## 9. Business Rule liên quan

- **BR-005:** Khoảng cách thợ-KH tối đa 5km
- **BR-012:** Booking phải confirm bởi thợ trong 5 phút, sau đó re-assign
- **BR-018:** KH có ≤ 3 booking pending cùng lúc

## 10. Non-functional Requirement

- **Performance:** Tìm thợ trả kết quả ≤ 3 giây
- **Security:** Booking ID không expose số điện thoại thợ trước khi confirm
- **Usability:** Form đặt lịch ≤ 4 bước

## 11. Frequency of use
- ~500 lượt/ngày (peak: 11h-13h và 18h-20h)

## 12. Special requirement
- Mobile + Web đều support
- Hỗ trợ tiếng Việt + tiếng Anh
- Offline mode: KH có thể fill form offline → submit khi có mạng

## 13. Wireframe / Mockup tham chiếu
- Màn hình 1: [link Figma]
- Màn hình 2: [link Figma]

## 14. Test scenarios chính
- TC-001: Happy path đặt lịch thành công
- TC-002: Chọn ngày quá khứ — báo lỗi
- TC-003: Không có thợ — hiển thị đề xuất
- TC-004: Mất mạng — fallback
- TC-005: Vượt giới hạn 3 booking pending — chặn

## Change log

| Version | Ngày | Người | Thay đổi |
|---------|------|-------|----------|
| 1.0 | 01/03/2026 | Nguyễn A | Bản đầu |
| 1.1 | 05/03/2026 | Nguyễn A | Thêm A2 (không có thợ) |
```

## Tips

- **Mỗi step chỉ 1 hành động** — đừng nhồi 2-3 việc trong 1 step
- **Active voice** — "KH bấm Đặt lịch" không phải "Đặt lịch được bấm"
- **Tách Alt + Exception flow rõ** — Alt = vẫn happy path khác, Exception = error path
- **Liên kết wireframe** — đính link Figma cụ thể, không "wireframe đính kèm"
- **Update test scenarios mỗi khi UC change** — sync với QA
- **Có change log** — phiên bản nào thêm gì, ai duyệt
