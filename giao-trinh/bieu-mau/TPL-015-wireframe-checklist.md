# TPL-015 — Wireframe Checklist (15 mục)

**Buổi sử dụng:** B6 (Thiết kế chức năng & giao diện)
**Format gợi ý:** Markdown / In ra giấy

## Mục đích
Checklist 15 mục để BA tự kiểm wireframe trước khi gửi UI Designer hoặc validate với khách.

## Khi nào dùng
- **Trước khi gửi wireframe cho UI Designer**
- **Trước khi demo wireframe với khách**
- **Self-review sau khi v0.dev / Figma sinh ra**

## Checklist

### A. Cấu trúc cơ bản (5 mục)

- [ ] **1. Mỗi màn hình có MỘT mục tiêu rõ ràng** — Người dùng vào màn này để làm GÌ?
- [ ] **2. Header có title + breadcrumb** — Người dùng biết mình đang ở đâu trong app
- [ ] **3. Có CTA chính (Call To Action) nổi bật** — Nút quan trọng nhất phải nổi bật nhất
- [ ] **4. Có cách thoát rõ ràng** — Cancel / Back / Close button
- [ ] **5. Layout responsive cho cả Mobile + Web** (nếu cần)

### B. UX cốt lõi (5 mục — theo Buổi 6)

- [ ] **6. Rõ ràng > đẹp** — Người không hiểu công nghệ vẫn dùng được
- [ ] **7. Quy ước trước, sáng tạo sau** — Icon kính lúp = search, X = đóng
- [ ] **8. Có phản hồi tức thì** — Click button → loading / toast / animation
- [ ] **9. Lỗi giúp người dùng sửa** — "Email chưa đúng định dạng. Ví dụ: abc@gmail.com"
- [ ] **10. Có Empty State** — Khi data rỗng, hướng dẫn bước đầu (không để màn hình trắng)

### C. Nội dung & data (3 mục)

- [ ] **11. Tất cả copy text bằng tiếng Việt chuẩn** — Không dùng "Lorem ipsum" trong wireframe gửi khách
- [ ] **12. Form có placeholder rõ + validation visible** — Vd. "Số điện thoại (10 chữ số)"
- [ ] **13. Số liệu/data hiển thị có format Việt** — Tiền 1.500.000đ (không 1500000)

### D. Mobile-specific (2 mục — nếu là mobile)

- [ ] **14. Touch target ≥ 44px** — Nút bấm đủ to cho ngón tay
- [ ] **15. Không nhồi form dài 1 màn** — Chia wizard nhiều bước

---

## Checklist mở rộng (nâng cao)

### E. Accessibility (cho dự án nghiêm túc)

- [ ] Contrast ratio ≥ 4.5:1 (text vs background)
- [ ] Có alt text cho ảnh
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Screen reader friendly

### F. Performance hint

- [ ] Skeleton loading thay vì spinner trắng
- [ ] Lazy load image dưới fold
- [ ] Pagination thay vì infinite scroll cho list lớn

### G. Brand consistency

- [ ] Dùng đúng brand color (primary, secondary, accent)
- [ ] Dùng đúng font system (Inter, Roboto…)
- [ ] Icon style nhất quán (filled vs outline — đừng mix)

---

## Cách dùng checklist

1. **Sau khi vẽ wireframe xong:**
   - Tự đi qua 15 mục, tick từng mục
   - Mục nào CHƯA OK → fix ngay
   - Mục nào N/A → ghi chú lý do

2. **Trước khi gửi UI Designer:**
   - Send wireframe + checklist đã tick → designer biết bạn đã self-review
   - Designer chỉ cần focus vào style, không phải fix cấu trúc

3. **Trước khi demo với khách:**
   - Tick xong toàn checklist
   - Đặc biệt focus mục 1, 6, 9, 10 (UX cơ bản)

---

## Ví dụ tự kiểm — Wireframe màn hình "Cấp phát thiết bị"

| # | Mục | Status | Note |
|---|---|:---:|---|
| 1 | 1 mục tiêu rõ | ✅ | Cấp phát laptop cho NV |
| 2 | Header + breadcrumb | ✅ | Kho IT > Cấp phát |
| 3 | CTA nổi bật | ✅ | Nút "Quét QR" lớn, đỏ |
| 4 | Cách thoát | ✅ | Nút Cancel góc trái |
| 5 | Responsive | ⚠ | Chưa test mobile — cần xem lại |
| 6 | Rõ ràng | ✅ | Form đơn giản 3 fields |
| 7 | Quy ước | ✅ | Icon QR, Search chuẩn |
| 8 | Phản hồi | ✅ | Loading khi quét QR |
| 9 | Lỗi rõ | ⚠ | Chỉ có "Lỗi" — cần chi tiết hơn |
| 10 | Empty state | ❌ | Chưa thiết kế khi danh sách trống |
| ... | | | |

→ Cần fix: mục 5, 9, 10 trước khi gửi UI Designer.

## Tips

- **In checklist ra giấy** dán bàn — nhắc tự kiểm mỗi khi vẽ wireframe
- **Custom theo dự án** — banking app cần thêm security check, EdTech cần kid-friendly check
- **Combine với prompt AI** (TPL-016) — cho AI review wireframe theo checklist này
