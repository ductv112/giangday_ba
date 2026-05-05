# TPL-026 — Impact Analysis Matrix (5 dimension)

**Buổi sử dụng:** B9 (Quản lý change request)
**Format gợi ý:** Excel / Markdown table

## Mục đích
Phân tích ảnh hưởng của 1 Change Request theo 5 dimension — không miss bất kỳ tác động nào.

## 5 Dimension

| # | Dimension | Câu hỏi cần trả lời |
|---|-----------|---------------------|
| 1 | **📄 Tài liệu** | SRS sections nào cần update? UC nào ảnh hưởng? |
| 2 | **💻 Code** | Module nào đụng vào? Refactor lớn không? |
| 3 | **📅 Schedule** | Cộng thêm bao nhiêu ngày? Sprint nào? |
| 4 | **💰 Budget** | Tăng cost bao nhiêu? Cần thêm resource? |
| 5 | **⚠ Risk** | Rủi ro phát sinh? Có gì bị break không? |

---

## Template

```markdown
# Impact Analysis — CR-XXX

**CR:** CR-XXX — [Mô tả ngắn]
**Phân tích bởi:** BA [Tên] + Tech Lead [Tên]
**Ngày:** DD/MM/YYYY

## 1. 📄 Tài liệu

| Tài liệu | Section | Action | Effort |
|----------|---------|--------|--------|
| BRD | 4.2 | Update wording | 30 phút |
| SRS Phân hệ X | 3.2.1, 3.2.5 | Update + thêm flow | 2 giờ |
| UC-001 | Main flow + Alt | Add alt flow | 1 giờ |
| US-005 | Acceptance | Add 2 acceptance | 30 phút |
| Wireframe màn login | Toàn bộ | Redesign 2 màn | 4 giờ (UI) |
| Test cases TC-005 | 8 cases | Update 5 + thêm 3 | 2 giờ (QA) |

**Tổng effort tài liệu:** ___ giờ BA + ___ giờ UI + ___ giờ QA

## 2. 💻 Code

| Module | Action | Files | Effort | Refactor? |
|--------|--------|-------|--------|-----------|
| auth-service | Add Zalo OTP integration | 5 files | 16 giờ | Nhỏ |
| frontend-login | Add Zalo option UI | 3 files | 8 giờ | Không |
| notification-service | Modify để support Zalo | 2 files | 4 giờ | Không |

**Tổng effort code:** ___ giờ dev (___ ngày × người)

## 3. 📅 Schedule

| Sprint | Impact | Action |
|--------|--------|--------|
| Sprint 7 (current) | +3 ngày | Pull US-008 ra, add US-005a |
| Sprint 8 | -1 US | Sẽ overload nếu add lại US-008 + US mới |
| Go-live deadline (15/04) | Không ảnh hưởng | Buffer còn 2 tuần |

**Tổng schedule impact:** +___ ngày, push ___ US sang sprint sau

## 4. 💰 Budget

| Mục | Cost | Note |
|-----|------|------|
| Dev hours | 28h × 500k = 14tr | Fit contingency |
| QA hours | 6h × 400k = 2.4tr | Fit contingency |
| Zalo OA license | 5tr/year | Cost mới |
| **Tổng** | **21.4tr** | Còn budget contingency: 50tr → OK |

**Có fit budget không:** ✅ Có

## 5. ⚠ Risk

| Rủi ro | Likelihood | Impact | Mitigation |
|--------|------------|--------|------------|
| Zalo OA approval mất 2 tuần | High | Medium | Bắt đầu apply ngay (đã apply 13/03) |
| Zalo API rate limit | Medium | Low | Implement retry + fallback SMS |
| User confused 2 option login | Medium | Low | UX research + A/B test |
| Cost vượt budget if Zalo expensive | Low | Medium | Lock contract giá fix với Zalo OA |

**Risk level tổng:** Medium — manageable

---

## Recommendation

| Tiêu chí | Đánh giá |
|----------|----------|
| Value | ⭐⭐⭐⭐ — Cao (giải quyết pain point 30% KH) |
| Cost | 21.4tr — Reasonable |
| Effort | 28h dev + 6h QA — Vừa sức |
| Risk | Medium — Có mitigation |
| **Decision recommend:** | **APPROVE** |

---

## Sign-off Impact Analysis

| Vai trò | Tên | Confirm | Ngày |
|---------|-----|---------|------|
| BA | | | |
| Tech Lead | | | |
| QA Lead | | | |
| PM (về schedule + budget) | | | |
```

---

## Cách dùng AI hỗ trợ Impact Analysis

### Workflow:
1. Upload CR-XXX + SRS hiện tại + traceability matrix vào Claude Code
2. Prompt:

```
Cho CR-018 (đính kèm) — phân tích impact 5 dimension:
1. Tài liệu: liệt kê BRD/SRS/UC/US/Wireframe/TC bị ảnh hưởng
2. Code: estimate module + giờ dev
3. Schedule: tính số ngày thêm + sprint impact
4. Budget: estimate cost
5. Risk: 3-5 rủi ro chính + mitigation

Output: bảng table chi tiết theo template TPL-026.
Reference traceability matrix để không miss link.
```

3. AI sinh draft trong 2-3 phút
4. BA + Tech Lead review + adjust (15-30 phút)
5. Submit cho Change Control Board

→ Tổng: 30-45 phút thay vì 2-3 giờ làm tay

---

## Tips

- **Đừng skip dimension nào** — miss 1 dimension → CR fail sau approve
- **Estimate hours phải hỏi dev** — BA đoán sẽ sai
- **Budget tính cả opportunity cost** — nếu push US-008 sang sprint sau, có cost không?
- **Risk register update** sau mỗi CR
- **Có version history** — Impact analysis v1.0 → v1.1 nếu có info mới
