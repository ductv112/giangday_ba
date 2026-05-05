# Buổi 9 — Prompt Library (2 prompts)

## Prompt 1: AI Impact Analysis cho Change Request

**Tool:** Claude Code
**Khi dùng:** Có 1 CR cần phân tích ảnh hưởng

```
Đây là Change Request CR-XXX (đính kèm hoặc paste):
[CR text — As-is, To-be, Reason]

Plus context:
- SRS hiện tại (đính kèm hoặc link)
- Traceability matrix (đính kèm)

Phân tích Impact 5 dimension theo template TPL-026:

### 1. 📄 Tài liệu
- Liệt kê BRD/SRS/UC/US/Wireframe/TC bị ảnh hưởng
- Estimate effort BA + UI + QA cho update tài liệu

### 2. 💻 Code
- Module/file nào đụng vào
- Estimate hours dev (split frontend/backend)
- Refactor lớn không (Yes/No + lý do)

### 3. 📅 Schedule
- Cộng thêm bao nhiêu ngày
- Sprint nào bị ảnh hưởng (push lùi US nào?)
- Có ảnh hưởng deadline tổng không

### 4. 💰 Budget
- Cost thêm (giờ × giá)
- Có fit budget contingency không
- Cost saving long-term (nếu có)

### 5. ⚠ Risk
- 3-5 rủi ro chính (likelihood × impact)
- Mitigation cho mỗi rủi ro

Output: table chi tiết theo template TPL-026.
Reference traceability matrix để KHÔNG miss link nào.
Cuối: Recommendation (Approve / Reject / Defer + lý do).
```

---

## Prompt 2: Sinh CR Document đầy đủ

**Tool:** Claude Code
**Khi dùng:** Sau khi có Impact Analysis, cần document để trình duyệt

```
Sinh Change Request document CR-XXX gồm 8 phần
(theo template TPL-025):

1. **Header**: CR ID, ngày, status (Draft), priority, type
2. **Mô tả thay đổi (What)**:
   - As-is: yêu cầu hiện tại trong SRS
   - To-be: yêu cầu sau thay đổi
   - Diff: thêm/sửa/xoá cụ thể
3. **Lý do (Why)** — bằng chứng từ user feedback / regulation / data
4. **Impact Analysis** (lấy từ kết quả prompt 1 — 5 dimension)
5. **Recommendation** từ BA (Approve/Reject/Defer + lý do)
6. **Approval Matrix** theo size CR (nhỏ/trung/lớn)
7. **Decision** (placeholder cho stakeholder fill)
8. **Implementation Plan** + Communication plan (nếu approve)

Plus:
- Linked CR / Issues
- Triggered by: bug / user feedback / compliance

Output Markdown — có thể copy vào Confluence ngay.
Format chuyên nghiệp, sẵn sàng trình Sponsor + CTO.
```

---

## Bonus: Re-prioritize backlog với RICE

**Tool:** Claude Code (extra prompt)
**Khi dùng:** Backlog lớn > 20 items, cần re-prioritize

```
Cho [N] user story sau:
[Paste backlog]

Plus context:
- Số user dự kiến phân hệ này phục vụ: [X]
- Sprint capacity: [Y] story points
- Resource: [Z] dev × [N] tuần

Score mỗi US theo RICE:
- Reach: estimate users/quarter
- Impact: 0.25 / 1 / 2 / 3 (low/medium/high/massive)
- Confidence: % chắc chắn (0-100%)
- Effort: person-weeks dev

Công thức: RICE = (Reach × Impact × Confidence) / Effort

Output:
1. Table sorted by RICE Score descending
2. Top 5 US recommend làm trước
3. Bottom 3 US suggest defer hoặc cắt
4. Distribution check: capacity vs effort needed
```
