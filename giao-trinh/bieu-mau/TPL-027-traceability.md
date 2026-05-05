# TPL-027 — Traceability Matrix Template (5 cấp)

**Buổi sử dụng:** B9 (Quản lý yêu cầu) · B11 (Bài tập cuối khoá)
**Format gợi ý:** Excel (recommended) / Markdown table

## Mục đích
Bảng truy vết từ Business Requirement → Test Case xuyên 5 cấp — biết khi BR thay đổi thì US, FR, UC, TC nào bị ảnh hưởng.

## 5 cấp truy vết

```
Business Req (BR)     → cấp cao nhất, "vì sao" của business
       ↓
User Story (US)       → "ai cần làm gì"
       ↓
Functional Req (FR)   → "hệ thống làm gì" (chi tiết kỹ thuật)
       ↓
Use Case (UC)         → "kịch bản sử dụng"
       ↓
Test Case (TC)        → "cách verify"
```

## Template

```markdown
# Traceability Matrix — [Tên dự án / Phân hệ]

**Version:** 1.0
**Last update:** DD/MM/YYYY
**Owner:** BA [Tên]

| # | BR ID | BR Description | US ID | FR ID | UC ID | TC IDs |
|---|-------|----------------|-------|-------|-------|--------|
| 1 | BR-001 | Tăng 30% lượng đặt online | US-042 | FR-018 | UC-005 | TC-042-01..08 |
| 2 | BR-001 | (cùng BR) | US-043 | FR-019 | UC-006 | TC-043-01..05 |
| 3 | BR-002 | Giảm 50% thời gian admin điều phối | US-044 | FR-020 | UC-007 | TC-044-01..06 |
| 4 | BR-002 | (cùng BR) | US-045 | FR-020, FR-021 | UC-008 | TC-045-01..04 |
| 5 | BR-003 | NPS ≥ 8/10 | US-046 | FR-022 | UC-009 | TC-046-01..07 |

## Statistics

| Cấp | Số lượng |
|-----|----------|
| BR | 3 |
| US | 5 |
| FR | 5 |
| UC | 5 |
| TC | 30 |

## Coverage check

- [ ] Mỗi BR có ≥ 1 US? ✅
- [ ] Mỗi US có ≥ 1 FR? ✅
- [ ] Mỗi FR có ≥ 1 UC (nếu phức tạp)? ✅
- [ ] Mỗi US/UC có ≥ 3 TC (positive + negative + edge)? ✅

## Orphan check (cần xử lý)

- US không link BR nào: ___
- FR không link US nào: ___
- UC không link FR nào: ___
- TC không link US/UC nào: ___
```

---

## Ví dụ chi tiết — Phân hệ Kho IT (Doanh nghiệp A)

| # | BR | US | FR | UC | TC |
|---|----|-----|-----|-----|-----|
| 1 | **BR-001** *Giảm 60% thời gian cấp phát thiết bị* | US-042 *Quét QR cấp phát* | FR-001 *QR scanning* | UC-005 *Cấp phát qua QR* | TC-042-01..08 (8 cases) |
| 2 | BR-001 | US-043 *Xem lịch sử cấp phát* | FR-002 *Query history* | UC-006 *Xem history* | TC-043-01..05 |
| 3 | **BR-002** *Audit trail đầy đủ* | US-044 *Log mọi action* | FR-003 *Audit log* | UC-007 *View audit* | TC-044-01..06 |
| 4 | BR-002 | US-045 *Export audit report* | FR-003, FR-004 *Export* | UC-008 *Generate report* | TC-045-01..04 |
| 5 | **BR-003** *Cảnh báo trước khi license hết hạn* | US-046 *Notification* | FR-005 *Cron job* | UC-009 *License alert* | TC-046-01..07 |

**→ Total:** 3 BR · 5 US · 5 FR · 5 UC · 30 TC

---

## Cách dùng matrix trong các tình huống

### Khi BR thay đổi (vd. BR-001)
1. Filter matrix với BR = "BR-001"
2. Thấy US-042, US-043 + FR-001, FR-002 + UC-005, UC-006 + 13 TC bị ảnh hưởng
3. Update tất cả → re-test

### Khi 1 TC fail (vd. TC-042-03)
1. Filter matrix với TC = "TC-042-03"
2. Thấy fail liên quan đến US-042 + UC-005 + FR-001 + BR-001
3. Quyết định: fix code (bug) hay update spec (CR)

### Khi planning sprint mới
1. Filter matrix theo Status = "Not started"
2. Group by BR (priority)
3. Pull US theo MoSCoW MUST trước

### Khi audit dự án (PMO check)
1. Coverage check: mỗi BR có ≥ 1 US? Có ≥ 1 TC?
2. Orphan check: US không link BR nào? → Có thể là scope creep

---

## Cách tạo & maintain matrix

### Option 1: Excel
- Cột: BR ID / BR Desc / US ID / US Desc / FR ID / UC ID / TC IDs / Status
- Conditional formatting: row màu đỏ nếu missing link
- Filter + pivot table dễ dùng

### Option 2: Jira (advanced)
- Custom field "Linked BR" cho mỗi US/FR/UC
- Use Jira's Issue Links
- Plugin: "Requirements Management for Jira" (R4J)

### Option 3: Confluence + Macro
- Confluence page với Issue Filter macro
- Auto-generate table từ Jira

### Option 4: Tools chuyên dụng
- Jama Connect
- IBM DOORS
- Helix RM

→ **Recommend cho fresher:** Excel (đơn giản, dùng được ngay)

---

## Quy tắc maintain matrix

### 1. Update real-time
- Mỗi khi thêm US/UC/TC → update matrix
- Không "batch update cuối tuần"

### 2. Mỗi requirement có owner rõ
- BA owner US/FR/UC
- QA owner TC
- Owner update matrix khi thay đổi

### 3. Versioning + change log
- Matrix version 1.0, 1.1, 2.0
- Change log: ngày + ai + thay đổi gì

### 4. Review weekly
- Coverage check (BR → TC đầy đủ)
- Orphan check (không có US lạc)

### 5. Backup
- Matrix là asset quan trọng nhất của BA
- Backup hàng ngày

---

## Tips

- **Bắt đầu nhỏ** — 5 BR đầu tiên trước, không "100 BR ngay"
- **Không over-engineer ID** — BR-001, US-001 đơn giản
- **Bonus column:** "Sprint", "Status", "Priority", "Last test result"
- **Tìm orphan thường xuyên** — orphan = scope creep hoặc requirement bị quên
- **AI hỗ trợ:** upload SRS + Jira → AI sinh matrix draft (xem prompt B9)
