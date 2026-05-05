# TPL-009 — Note phỏng vấn

**Buổi sử dụng:** B4 (Elicitation) — note real-time trong buổi phỏng vấn
**Format gợi ý:** Markdown / Notion / OneNote

## Mục đích
Template cấu trúc để note phỏng vấn không bị "mất hết" sau buổi. Có format chuẩn → dễ tổng hợp + share team.

## Khi nào dùng
- **Trong buổi phỏng vấn:** Note real-time
- **Ngay sau phỏng vấn (≤ 2 giờ):** Bổ sung chi tiết khi memory còn fresh
- **Trước upload Confluence:** Format lại sạch sẽ

## Template

```markdown
# Phỏng vấn: [Tên người] — [Vai trò]

**Dự án:** _______________
**Ngày + giờ:** ___/___/___ — __:__ → __:__
**Người phỏng vấn (BA):** _____________
**Note-taker:** ____________ (nếu khác BA)
**Hình thức:** ☐ In-person ☐ Online ☐ Phone
**Recording:** ☐ Có (link: ___) ☐ Không
**Status:** ☐ Draft ☐ Reviewed ☐ Sent to interviewee

---

## Bối cảnh người được phỏng vấn

- Vai trò chính:
- Phòng ban:
- Số năm kinh nghiệm:
- Quan hệ với dự án (user / sponsor / approver…):

## Pain points phát hiện

| # | Pain point | Tần suất | Mức độ ảnh hưởng | Quote (nguyên văn) |
|---|---|---|---|---|
| 1 | | Hàng ngày / Tuần / Tháng | Thấp / TB / Cao | "..." |
| 2 | | | | |

## Yêu cầu / kỳ vọng nêu ra

| # | Yêu cầu | Loại | Ưu tiên (theo họ) | Mâu thuẫn với ai |
|---|---|---|---|---|
| 1 | | Functional / Non-functional | MUST / SHOULD / COULD | (nếu có) |

## Quy trình hiện tại (AS-IS) — flow text

1. Bước 1: ...
2. Bước 2: ...
3. ...

## Insight / quote đáng nhớ

> "Câu nói nguyên văn hay/quan trọng nhất"

## Câu hỏi mở (chưa kịp hỏi / cần hỏi tiếp)

- [ ] Câu 1: ...
- [ ] Câu 2: ...

## Action item

| Ai | Làm gì | Deadline |
|---|---|---|
| BA | Tổng hợp pain point + share | __/__ |
| BA | Schedule follow-up | __/__ |
| Họ | Gửi tài liệu cũ X | __/__ |

## Validate (paraphrase cuối buổi)

> "Tôi vừa nghe anh/chị nói... — đúng không ạ?"

Confirm: ☐ Họ đồng ý ☐ Cần làm rõ thêm

---

**Next step:** ____________________________________
```

## Ví dụ điền (rút gọn)

> **Phỏng vấn: Trần Thị B — Quản lý kho IT (Doanh nghiệp A)**
>
> **Pain points:**
> 1. Tốn 5 phút mỗi lần cấp phát laptop (tần suất: hàng ngày, ảnh hưởng: cao) — *"Em phải tra Excel 3 file mới biết laptop ai đang giữ"*
> 2. Không biết khi nào license phần mềm hết hạn (tần suất: tháng, ảnh hưởng: cao) — *"Có lần CEO không vào được Office vì hết hạn từ tuần trước mà không ai biết"*
>
> **Yêu cầu:**
> 1. Quét QR thay vì tra Excel — Functional, MUST
> 2. Cảnh báo trước 30 ngày khi license hết hạn — Functional, SHOULD
>
> **AS-IS quy trình cấp phát:**
> 1. Nhân viên đến phòng IT
> 2. Báo cần laptop
> 3. Nhân viên kho mở 3 file Excel tra
> 4. Tìm laptop trên kệ
> 5. Update Excel + ký giấy

## Tips

- **Note bằng Markdown** — convert sang gì cũng dễ
- **Quote nguyên văn** — power for stakeholder buy-in sau này
- **Ghi luôn cả "không biết / cần check"** — tránh quên
- **Send lại cho interviewee trong 24h** — họ confirm + bổ sung nếu thiếu
- **Dùng AI tổng hợp:** xem prompt trong TPL prompt library Buổi 4
