# TPL-028 — Prioritization Scoring (MoSCoW + RICE)

**Buổi sử dụng:** B9 (Quản lý yêu cầu)
**Format gợi ý:** Excel / Markdown table

## Mục đích
2 phương pháp phổ biến để ưu tiên backlog — chọn cái nào tuỳ tình huống.

## A. MoSCoW Scoring

### Khi nào dùng MoSCoW
- Sản phẩm nội bộ doanh nghiệp
- Stakeholder dễ thống nhất
- Ưu tiên dựa trên business value chủ quan

### Template MoSCoW

| US ID | Tên User Story | MoSCoW | Lý do |
|-------|----------------|--------|-------|
| US-042 | Quét QR cấp phát | **MUST** | Core feature — không có = không launch được |
| US-043 | Xem lịch sử cấp phát | **MUST** | Audit trail bắt buộc |
| US-044 | Notification email | **SHOULD** | Quan trọng nhưng có workaround (xem trên web) |
| US-045 | Báo cáo tồn kho | **SHOULD** | Manager cần — nhưng tháng đầu có thể manual |
| US-046 | Cảnh báo license hết hạn | **COULD** | Nice to have — phase 2 OK |
| US-047 | Voice search thiết bị | **WON'T** | Phase sau, không cần phase này |

### Quy tắc MoSCoW
- **MUST ≤ 60%** capacity sprint — chừa buffer cho thay đổi + bug
- **SHOULD ~ 30%** — làm nếu kịp
- **COULD ~ 10%** — dư thời gian mới làm
- **WON'T** — explicit hoãn, không bị quên

---

## B. RICE Scoring

### Khi nào dùng RICE
- Backlog lớn (>50 items), cần data-driven
- Sản phẩm B2C, cần objective scoring
- Multiple stakeholders mâu thuẫn priority

### Công thức

```
RICE Score = (Reach × Impact × Confidence) / Effort
```

| Yếu tố | Mô tả | Đơn vị |
|--------|-------|--------|
| **Reach** | Bao nhiêu user / quarter | Số user (vd. 5,000) |
| **Impact** | Mức độ ảnh hưởng/user | 0.25 (low) / 1 / 2 / 3 (high) |
| **Confidence** | % chắc chắn về Reach + Impact | % (vd. 80%) |
| **Effort** | Person-weeks dev | weeks (vd. 2) |

### Template RICE

| US ID | Tên | Reach (users/qtr) | Impact (0.25-3) | Confidence (%) | Effort (weeks) | RICE Score |
|-------|-----|-------------------|-----------------|----------------|----------------|------------|
| US-042 | Quét QR cấp phát | 500 (NV kho) | 3 | 90% | 1 | 1,350 |
| US-046 | Cảnh báo license | 50 (admin) | 2 | 70% | 0.5 | 140 |
| US-047 | Voice search | 5,000 (mọi NV) | 0.25 | 30% | 3 | 125 |
| US-048 | Báo cáo Power BI | 100 (manager) | 1 | 80% | 2 | 40 |

→ Sort by RICE Score descending → ưu tiên làm cao trước.

### Cách chấm Impact
- **3:** Massive (game-changer cho user)
- **2:** High (đáng kể, tiết kiệm 30%+ thời gian)
- **1:** Medium (cải thiện nhỏ)
- **0.25:** Low (nice to have)

### Cách chấm Confidence
- **100%:** Có data, đã test, chắc chắn
- **80%:** Có user research, khá tự tin
- **50%:** Đoán có cơ sở
- **20%:** Hoàn toàn đoán

---

## C. Combine MoSCoW + RICE

### Workflow
1. Dùng RICE để sort backlog (>20 items)
2. Top 30% → MUST
3. Next 30% → SHOULD
4. Next 30% → COULD
5. Bottom 10% → WON'T

→ Kết hợp data (RICE) + judgement (MoSCoW)

---

## D. Kano Model (bonus — cho B2C)

| Loại | Mô tả | Ví dụ |
|------|-------|-------|
| **Must-be** | Có cũng không vui, KHÔNG có thì khách giận | Login, security |
| **Performance** | Càng nhiều càng tốt | Tốc độ load, dung lượng |
| **Excitement** | Khách không kỳ vọng nhưng có = WOW | AI suggestion thông minh |
| **Indifferent** | Có hay không, khách không quan tâm | Logo size |

→ Dùng Kano khi cần "đánh thắng" trải nghiệm B2C.

---

## Template Excel structure (recommended)

```
Sheet 1: Backlog
| US ID | Tên | MoSCoW | RICE Score | Sprint | Owner | Status |

Sheet 2: RICE Calculation
| US ID | Reach | Impact | Confidence | Effort | RICE | Note |

Sheet 3: MoSCoW Distribution (chart)
- Pie chart: % MUST/SHOULD/COULD/WON'T
- Capacity check: MUST ≤ 60% capacity?
```

---

## Tips

- **Re-prioritize mỗi sprint review** — priority thay đổi liên tục
- **Stakeholder vote** — mỗi người 100 điểm, vote cho US họ ưu tiên
- **Show distribution** trong meeting — visual giúp khách hiểu "không thể MUST tất cả"
- **Document lý do** trong cột Note — sau 6 tháng nhìn lại biết vì sao
- **AI hỗ trợ:** prompt Claude "Score 20 US sau theo RICE — ước lượng Reach/Impact/Confidence dựa trên context"
