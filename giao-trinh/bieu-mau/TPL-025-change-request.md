# TPL-025 — Change Request Template

**Buổi sử dụng:** B9 (Quản lý yêu cầu)
**Format gợi ý:** Markdown / Word / Confluence

## Mục đích
Văn bản chính thức cho mọi thay đổi yêu cầu sau khi đã sign-off — bảo vệ project khỏi scope creep.

## Khi nào dùng
- **Bất kỳ thay đổi yêu cầu nào** sau khi SRS đã sign-off
- **Thay đổi từ khách / sponsor / dev** — đều cần CR
- **Bug vs CR:** Bug = code không đúng spec. CR = spec cần thay đổi.

## Template

```markdown
# Change Request — CR-XXX

| Trường | Giá trị |
|---|---|
| **CR ID** | CR-018 |
| **Date** | DD/MM/YYYY |
| **Status** | Draft / Reviewed / Approved / Rejected / Implemented |
| **Project** | [Tên dự án] |
| **Module** | [Phân hệ] |
| **Requested by** | [Tên + role] |
| **Priority** | Critical / High / Medium / Low |
| **Type** | Functional / Non-functional / Bug-fix-related / Scope addition |

## 1. Mô tả thay đổi (What)

### 1.1. Yêu cầu hiện tại (As-is)
Mô tả yêu cầu đang có trong SRS (FR-XXX hoặc US-XXX):

> [Quote nguyên văn từ SRS]

### 1.2. Thay đổi đề xuất (To-be)
Mô tả yêu cầu sau khi thay đổi:

> [Mô tả mới]

### 1.3. Diff cụ thể
- Thêm: ___
- Sửa: ___
- Xoá: ___

## 2. Lý do thay đổi (Why)

(Stakeholder phải giải thích — KHÔNG accept "tôi nghĩ tốt hơn")

- Lý do 1: ___
- Lý do 2: ___
- Bằng chứng (data, user feedback, regulation): ___

## 3. Impact Analysis (xem TPL-026)

### 3.1. Tài liệu bị ảnh hưởng
- [ ] BRD section ___ — cần update
- [ ] SRS section ___ — cần update
- [ ] Use Case UC-___ — cần update
- [ ] User Story US-___ — cần update
- [ ] Wireframe màn ___ — cần redesign
- [ ] Test cases TC-___ — cần update

### 3.2. Code bị ảnh hưởng
- Module: ___
- Estimate hours dev: ___
- Refactor lớn không? Có/Không

### 3.3. Schedule impact
- Cộng thêm: ___ ngày dev + ___ ngày test
- Ảnh hưởng sprint: Sprint ___ (push lùi US-___ sang sprint ___)
- Có ảnh hưởng deadline tổng không: Có/Không

### 3.4. Budget impact
- Cost thêm: ___ giờ × giá/giờ = ___
- Có fit budget contingency không: Có/Không

### 3.5. Risk
- Rủi ro 1: ___
- Rủi ro 2: ___
- Mitigation: ___

## 4. Recommendation

**BA recommend:** ☐ Approve ☐ Reject ☐ Defer

**Lý do recommend:** ___

## 5. Approval Matrix

| CR Size | Ai duyệt |
|---------|----------|
| Nhỏ (≤ 1 ngày dev, không đổi spec lớn) | BA + Tech Lead (24h) |
| Trung bình (2-5 ngày dev) | PM + BA Lead + Tech Lead (3 ngày) |
| Lớn (> 5 ngày dev, ảnh hưởng kiến trúc) | Sponsor + CTO + Steering Committee (1 tuần) |

## 6. Decision

| Vai trò | Tên | Decision | Ngày | Note |
|---------|-----|----------|------|------|
| Sponsor | | Approve / Reject / Defer | | |
| Tech Lead | | Approve / Reject / Defer | | |
| BA Lead | | Approve / Reject / Defer | | |
| PM | | Approve / Reject / Defer | | |

**Final Decision:** ☐ APPROVED ☐ REJECTED ☐ DEFERRED to ___

## 7. Implementation Plan (nếu Approved)

| # | Action | Owner | Deadline |
|---|--------|-------|----------|
| 1 | Update SRS section ___ | BA | __/__ |
| 2 | Update Jira tickets ___ | BA + PM | __/__ |
| 3 | Schedule dev work | PM | __/__ |
| 4 | Communicate to team | PM | __/__ |
| 5 | Update sign-off baseline | BA + Sponsor | __/__ |

## 8. Communication

- [ ] Notify dev team
- [ ] Notify QA team
- [ ] Update Confluence page
- [ ] Update Jira tickets với label "CR-018"
- [ ] Email to stakeholder list

---

**Linked CR / Issues:**
- Triggered by: ___ (Bug ID, User feedback, Compliance change)
- Related CRs: ___
```

---

## Ví dụ — CR-018: Thêm OTP qua Zalo

```markdown
# Change Request — CR-018

**CR ID:** CR-018 · **Date:** 14/03/2026 · **Status:** Reviewed
**Project:** Hệ thống Đặt lịch sửa chữa
**Requested by:** Nguyễn Văn A — CEO
**Priority:** High · **Type:** Functional addition

## 1. Mô tả thay đổi

### 1.1. As-is
> FR-005: Hệ thống PHẢI gửi OTP qua SMS để xác thực login.

### 1.2. To-be
> FR-005: Hệ thống PHẢI gửi OTP qua SMS HOẶC Zalo (KH chọn) để xác thực login.

### 1.3. Diff
- **Thêm:** Option "Gửi OTP qua Zalo" trong màn hình login
- **Thêm:** Tích hợp Zalo OA API
- **Sửa:** UI login screen có 2 option
- **Sửa:** Backend logic gửi OTP

## 2. Lý do
- 30% KH phản hồi không nhận được SMS (mạng yếu)
- Zalo OA Việt Nam phủ 95% smartphone
- Cost gửi Zalo (200đ) thấp hơn SMS (500đ)

## 3. Impact Analysis

### 3.1. Tài liệu
- [x] SRS section 3.2.1 (Login flow) — update
- [x] UC-001 — add alt flow
- [x] FR-005 — update wording
- [x] 2 wireframe màn login — redesign
- [x] 5 test cases TC-005-XX — update + add

### 3.2. Code
- Module: auth-service + frontend login screen
- Estimate: 3 ngày dev backend + 1 ngày dev frontend + 1 ngày test
- Refactor: nhỏ (chỉ trong auth-service)

### 3.3. Schedule
- +5 ngày → push lùi US-008 sang Sprint 8
- Không ảnh hưởng deadline go-live

### 3.4. Budget
- 5 ngày × 8h × 500k = 20 triệu
- Fit budget contingency (hiện còn 50tr)
- Cost saving long-term: ~3tr/tháng (Zalo cheaper than SMS)

### 3.5. Risk
- Zalo OA cần đăng ký BSC (mất 2 tuần) — đã start trước
- Mitigation: SMS vẫn là default, Zalo là option

## 4. Recommendation
**BA recommend:** APPROVE — value cao, cost hợp lý, low risk

## 5. Approval Matrix
CR trung bình → cần PM + BA Lead + Tech Lead

## 6. Decision

| Vai trò | Tên | Decision | Ngày | Note |
|---------|-----|----------|------|------|
| BA Lead | Trần B | Approve | 15/03 | OK |
| PM | Phạm C | Approve | 15/03 | Push US-008 sang Sprint 8 |
| Tech Lead | Hoàng D | Approve | 15/03 | Đã confirm Zalo API stable |

**Final Decision:** ✅ APPROVED — 15/03/2026

## 7. Implementation Plan

| # | Action | Owner | Deadline |
|---|--------|-------|----------|
| 1 | Update SRS section 3.2.1 | BA | 16/03 |
| 2 | Update UC-001 với alt flow Zalo | BA | 16/03 |
| 3 | Update Jira US-005 + tạo US mới US-005a | BA | 17/03 |
| 4 | Schedule dev cho Sprint 7 | PM | 17/03 |
| 5 | Email notify team + update Confluence | BA | 17/03 |

## 8. Communication
- [x] Notify dev/QA via Slack #project
- [x] Email summary cho all stakeholders
- [x] Confluence page update
```

---

## Quy tắc CR tốt

### 1. KHÔNG accept verbal change
- Khách nói chuyện riêng → BA bảo "OK em sẽ làm CR" → CR formal trên giấy

### 2. CR có ID
- Format: CR-XXX (auto-increment trong Jira)
- Link với SRS, US, UC bị ảnh hưởng

### 3. Impact analysis BẮT BUỘC
- Không ai approve CR mà không biết impact
- 5 dimension: Tài liệu / Code / Schedule / Budget / Risk

### 4. Approval matrix theo size
- CR nhỏ → 24h
- CR trung bình → 3 ngày
- CR lớn → 1 tuần

### 5. Track CR như track ticket
- Jira issue type: "Change Request"
- Link với US, UC bị ảnh hưởng
- Update status đến Done

---

## Tips

- **Mọi CR phải có ROI clear** — tránh CR "vì tôi muốn"
- **CR rejected vẫn lưu trong hệ thống** — tránh "hỏi lại lần 2"
- **Defer = không phải reject** — có thể làm phase sau
- **AI hỗ trợ impact analysis** — xem prompt B9
- **Communication is key** — sau approve phải báo team trong 24h
