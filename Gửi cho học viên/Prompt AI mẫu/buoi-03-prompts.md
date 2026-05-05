# Buổi 3 — Prompt Library (4 prompts)

## Prompt 1: Sinh khung Planning trong 30 giây

**Tool:** Claude Code
**Hint:** BA lười không phải xấu — BA biết dùng AI để bỏ qua việc tay chân lặp đi lặp lại
**Khi dùng:** Buổi 3 Slide 14 — Planning step

```
Cho dự án [TÊN DỰ ÁN], sinh template Planning gồm:
- Mục tiêu kinh doanh (3 bullet)
- Bên liên quan (5 vai trò + power/interest)
- Deliverable cần làm (BRD/SRS/UC/Wireframe...)
- Timeline 4 tuần với cột mốc
- Risk + mitigation (3 rủi ro chính)

Format: Markdown theo template TPL-005.
```

---

## Prompt 2: Sinh bộ câu hỏi phỏng vấn

**Tool:** Claude / ChatGPT
**Hint:** Trước khi gặp khách, AI giúp bạn chuẩn bị 15-20 câu hỏi sắc
**Khi dùng:** Buổi 3 Slide 14 — Elicitation step

```
Tôi sắp phỏng vấn quản lý kho phân hệ Kho IT của Doanh nghiệp A.

Sinh 15 câu hỏi mở (open-ended) — khám phá:
- Quy trình hiện tại (5 câu)
- Pain point (5 câu)
- Kỳ vọng hệ thống mới (5 câu)

Yêu cầu:
- Tất cả câu hỏi mở (KHÔNG có/không)
- Tránh jargon kỹ thuật
- Có 2-3 câu áp dụng 5 Whys
- Output Markdown numbered list
```

---

## Prompt 3: Vẽ sơ đồ quy trình tức thì

**Tool:** Claude + Mermaid
**Hint:** Mermaid = ngôn ngữ vẽ flow bằng text — copy output dán vào mermaid.live
**Khi dùng:** Buổi 3 Slide 14 — Analysis step

```
Mô tả quy trình nhập kho thiết bị IT:
- Nhân viên nhận hàng từ vendor
- Kiểm đếm số lượng + chất lượng
- Quét QR mỗi thiết bị
- Lưu lên kệ theo loại
- Cập nhật hệ thống quản lý kho
- Ký xác nhận với vendor

Sinh sơ đồ flowchart Mermaid (TD direction) kèm:
- Nhánh exception: thiếu hàng, hàng hỏng, hệ thống lỗi
- Decision points (gateways)
- Lane phân theo vai trò (NV kho / Vendor / Hệ thống)
```

---

## Prompt 4: Tự kiểm tra tài liệu

**Tool:** NotebookLM
**Hint:** Trước khi gửi khách, BA tự audit để tránh quay lại sửa
**Khi dùng:** Buổi 3 Slide 14 — Validate step

```
Upload bản nháp SRS + 8 tiêu chí kiểm tra:
1. Rõ ràng (clear)
2. Đầy đủ (complete)
3. Không mâu thuẫn (consistent)
4. Đo được (measurable)
5. Ưu tiên rõ (prioritized)
6. Có ID (identifiable)
7. Có acceptance (testable)
8. Có version (versioned)

NotebookLM phân tích:
- Tiêu chí nào đã đạt
- Tiêu chí nào chưa đạt + chỉ ra section cụ thể
- Gợi ý fix cho từng tiêu chí chưa đạt

Output table: Tiêu chí | Status | Section | Suggested fix.
```
