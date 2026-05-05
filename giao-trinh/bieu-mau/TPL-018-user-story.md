# TPL-018 — User Story Template + INVEST Checklist

**Buổi sử dụng:** B7 (Viết tài liệu yêu cầu)
**Format gợi ý:** Markdown / Jira / Confluence

## Mục đích
Format chuẩn viết User Story + checklist INVEST 6 tiêu chí để tự kiểm trước khi submit.

## Format chuẩn

```
US-[ID]: [Tên ngắn của story]

Là [vai trò],
tôi muốn [tính năng / hành động],
để [lợi ích / kết quả].

Acceptance Criteria:
- Given [bối cảnh],
  When [hành động],
  Then [kết quả mong đợi].

- Given...
  When...
  Then...

(Có thể có 2-5 acceptance/story)

Priority: MUST / SHOULD / COULD / WON'T
Story points: 1, 2, 3, 5, 8 (Fibonacci)
Sprint: __
Tags: [phân hệ], [feature group]
```

## Ví dụ

### US-042: Quét QR cấp phát thiết bị

> **Là** nhân viên kho IT,
> **tôi muốn** quét QR code thiết bị + chọn người nhận,
> **để** cấp phát laptop nhanh hơn 10 lần so với tra Excel.
>
> **Acceptance Criteria:**
>
> 1. **Given** tôi đã đăng nhập với role "Nhân viên kho",
>    **When** tôi quét QR code hợp lệ + chọn người nhận trong dropdown,
>    **Then** hệ thống tạo bản ghi cấp phát + gửi email xác nhận cho người nhận trong 10 giây.
>
> 2. **Given** tôi quét QR code không tồn tại trong hệ thống,
>    **When** sau khi quét,
>    **Then** hiển thị thông báo lỗi "QR không hợp lệ. Vui lòng kiểm tra lại."
>
> 3. **Given** thiết bị đã được cấp phát cho người khác,
>    **When** tôi quét QR thiết bị đó,
>    **Then** hiển thị "Thiết bị đang được [tên người] mượn từ [ngày]. Vui lòng xác nhận trả trước khi cấp phát."
>
> **Priority:** MUST · **Points:** 5 · **Sprint:** 7 · **Tags:** kho-it, qr-scan

---

## INVEST Checklist (6 tiêu chí)

Tự đi qua 6 mục trước khi submit US:

### I — Independent (Độc lập)
- [ ] Story này KHÔNG phụ thuộc story khác để start work
- [ ] Có thể release riêng nếu cần
- [ ] Không bị stuck nếu story khác chưa xong

❌ **Vi phạm:** "US-A: Tạo user. US-B: Update user." → US-B phụ thuộc US-A
✅ **Đúng:** Gộp thành 1 story hoặc tách rõ scope

### N — Negotiable (Thương lượng được)
- [ ] Detail có thể điều chỉnh giữa BA + dev + khách
- [ ] Không phải "spec cứng" không đổi được
- [ ] Có không gian discuss tốt hơn

❌ **Vi phạm:** "Sinh PDF dùng đúng thư viện iText 7.0.4 với option XYZ" → quá cứng
✅ **Đúng:** "Sinh PDF báo cáo doanh thu với template chuẩn" — dev tự chọn lib

### V — Valuable (Có giá trị)
- [ ] Mang lại lợi ích cụ thể cho user / business
- [ ] Có thể giải thích value bằng 1 câu
- [ ] KHÔNG là "tech task" thuần

❌ **Vi phạm:** "Refactor module booking" → value cho user là gì?
✅ **Đúng:** "Là khách hàng, tôi muốn đặt lịch trong 30 giây thay vì 2 phút"

### E — Estimable (Ước lượng được)
- [ ] Dev đủ thông tin để estimate (giờ / story point)
- [ ] Không có phần "TBD" ảnh hưởng lớn đến effort
- [ ] Acceptance criteria rõ → biết "done" là gì

❌ **Vi phạm:** "Tích hợp với hệ thống X" — chưa có API spec, dev không estimate được
✅ **Đúng:** Đính kèm API spec hoặc tách story "Spike: explore X API"

### S — Small (Đủ nhỏ)
- [ ] Làm xong trong 1 sprint (≤ 2 tuần)
- [ ] Story points ≤ 8 (nếu > 8, split thành 2-3 story)
- [ ] Không "bao trùm" cả module

❌ **Vi phạm:** "Build toàn bộ module Kho IT" — quá lớn
✅ **Đúng:** Split thành "Tạo thiết bị", "Cấp phát thiết bị", "Báo hỏng thiết bị"...

### T — Testable (Test được)
- [ ] Có Acceptance Criteria Given-When-Then
- [ ] QA có thể viết test case từ story này
- [ ] Có cách verify "done" rõ ràng

❌ **Vi phạm:** "App phải nhanh và mượt" → test bằng gì?
✅ **Đúng:** "Trang chủ load ≤ 2 giây trên 4G ở Hà Nội"

---

## Anti-pattern User Story thường gặp

### 1. "Tôi cần tính năng X" — thiếu lý do
- ❌ "Là khách, tôi muốn có nút Like."
- ✅ "Là khách, tôi muốn Like sản phẩm để dễ tìm lại sau."

### 2. Tech-speak trong story user-facing
- ❌ "Là khách, tôi muốn API trả JSON."
- ✅ "Là khách, tôi muốn xem danh sách sản phẩm nhanh." (technical là chuyện dev)

### 3. Quá rộng / vague
- ❌ "Là user, tôi muốn dùng app dễ hơn."
- ✅ "Là user, tôi muốn tìm kiếm sản phẩm bằng giọng nói thay vì gõ."

### 4. Mix nhiều story trong 1
- ❌ "Là user, tôi muốn đăng nhập, đăng ký, quên mật khẩu, đổi mật khẩu."
- ✅ Tách thành 4 story riêng

### 5. Acceptance không testable
- ❌ "App phải đẹp và thân thiện."
- ✅ "App pass usability test với 5 user trong 5 phút."

---

## Tips

- **Dùng AI sinh story từ wireframe** — xem prompt B7
- **Story nhỏ (≤ 5 points) tốt hơn story to** — dễ ship, dễ rollback
- **Acceptance ≥ 3 case** — happy + edge + error
- **Tag rõ phân hệ + feature** — dễ filter trong Jira
- **Update story trong sprint refinement** — không "freeze" từ đầu
