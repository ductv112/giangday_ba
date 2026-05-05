# TPL-023 — Validation Checklist (10 tiêu chí)

**Buổi sử dụng:** B8 (Kiểm tra yêu cầu)
**Format gợi ý:** Excel / Markdown
**Khi dùng:** Trước khi bàn giao SRS cho dev

## Mục đích
10 tiêu chí tự kiểm tra SRS chất lượng — pass đủ 10 = SRS sẵn sàng cho dev code.

## Checklist

| # | Tiêu chí | Status | Note |
|---|----------|:---:|------|
| 1 | Có ID rõ cho mỗi yêu cầu (FR-001, NFR-002…) | ☐ | |
| 2 | Mỗi câu = 1 yêu cầu, không nhồi 2-3 thứ | ☐ | |
| 3 | Tránh từ mơ hồ ("nhanh", "thân thiện") — đo bằng số cụ thể | ☐ | |
| 4 | Có Acceptance Criteria Given-When-Then cho mỗi US | ☐ | |
| 5 | Yêu cầu phi chức năng (NFR) đầy đủ: Performance, Security, Usability, Reliability | ☐ | |
| 6 | Có tham chiếu wireframe / mockup / ERD link Figma | ☐ | |
| 7 | Glossary đã định nghĩa thuật ngữ chuyên ngành | ☐ | |
| 8 | Versioning + change log đã update | ☐ | |
| 9 | Đã review với ít nhất 1 BA khác (peer review) | ☐ | |
| 10 | Đã có sign-off từ stakeholder cấp quyết định | ☐ | |

**Pass rule:** Tích đủ 10 = SRS sẵn sàng. Thiếu 1-2 = cần fix trước khi gửi dev.

---

## Chi tiết từng tiêu chí

### 1. ID rõ cho mỗi yêu cầu

**Format chuẩn:**
- FR-XXX: Functional Requirement
- NFR-XXX: Non-functional Requirement
- US-XXX: User Story
- UC-XXX: Use Case
- BR-XXX: Business Rule
- TC-XXX-YY: Test Case (XX = US ID, YY = STT)

**Vì sao quan trọng:** Để traceability matrix link 5 cấp BR → US → FR → UC → TC

### 2. Mỗi câu = 1 yêu cầu

❌ **Vi phạm:**
> "Hệ thống PHẢI gửi email khi đặt lịch và khi thợ confirm và khi hoàn thành dịch vụ."

✅ **Đúng:**
> - FR-001: Hệ thống PHẢI gửi email cho KH khi tạo booking thành công.
> - FR-002: Hệ thống PHẢI gửi email cho KH khi thợ confirm booking.
> - FR-003: Hệ thống PHẢI gửi email cho KH khi dịch vụ hoàn thành.

### 3. Tránh từ mơ hồ

❌ **Mơ hồ:**
- "Trang web phải LOAD NHANH"
- "Giao diện THÂN THIỆN với người dùng"
- "Có nhiều TÍNH NĂNG hữu ích"

✅ **Đo được:**
- "Trang chủ load ≤ 2 giây trên 4G ở Hà Nội"
- "User mới hoàn thành đăng ký trong ≤ 3 phút (đo bằng usability test 5 user)"
- "Module có 8 tính năng: A, B, C, D, E, F, G, H"

### 4. Acceptance Criteria Given-When-Then

Mỗi US phải có ≥ 3 acceptance:
- 1 happy path
- 1 alt path
- 1 negative/edge case

Format:
```
Given [bối cảnh],
When [hành động],
Then [kết quả mong đợi].
```

### 5. NFR đầy đủ 4 nhóm

Mỗi SRS phải có ít nhất:
- ≥ 3 Performance NFR (load time, throughput, capacity)
- ≥ 3 Security NFR (auth, encryption, audit)
- ≥ 2 Usability NFR (accessibility, language, browser support)
- ≥ 2 Reliability NFR (uptime, backup, recovery)

### 6. Tham chiếu wireframe

Mỗi UC chính phải có:
- Link Figma cụ thể (không "đính kèm trong tài liệu")
- Reference theo màn hình ID (Screen-001, Screen-002)
- Note về interaction (hover, click, swipe)

### 7. Glossary

Mỗi viết tắt + thuật ngữ domain xuất hiện lần đầu trong SRS PHẢI có trong Glossary.

Ví dụ:
- OTP, SSO, NPS, CTA — phải định nghĩa
- "Booking", "Match", "Geofence" — domain terms cũng phải định nghĩa

### 8. Versioning + change log

Mỗi version SRS có:
- Version number (1.0, 1.1, 2.0)
- Ngày update
- Người update
- Tóm tắt thay đổi

### 9. Peer review

Ít nhất 1 BA khác đọc SRS, comment vào:
- Tính nhất quán
- Logic
- Wording mơ hồ
- Missing requirements

→ BA gốc fix → re-submit

### 10. Sign-off

- **Sponsor:** Confirm SRS đáp ứng business goal
- **Tech Lead:** Confirm SRS feasible technically
- **QA Lead:** Confirm SRS testable

Sign-off bằng email hoặc DocuSign — KHÔNG verbal.

---

## Workflow validate SRS

```
BA viết SRS draft (3-5 ngày)
  ↓
BA tự kiểm checklist 10 tiêu chí (1 giờ)
  ↓
Fix mục chưa đạt
  ↓
Send peer review (1-2 BA khác — 2 ngày)
  ↓
Apply feedback
  ↓
Walk-through với dev/QA (1 giờ — TPL-021)
  ↓
Apply technical feedback
  ↓
Send sign-off Sponsor + Tech Lead + QA Lead (3-5 ngày)
  ↓
SRS v1.0 — Ready for development
```

---

## Tips

- **Self-check trước peer review** — không tốn thời gian peer cho lỗi obvious
- **In checklist treo bàn** — mỗi lần viết SRS tự nhắc
- **AI hỗ trợ check** — upload SRS + checklist vào NotebookLM (xem prompt B8)
- **Sign-off bằng email** — chữ ký digital không thay được written approval
- **KHÔNG skip review** dù gấp — code rồi sửa tốn 5-100x hơn
