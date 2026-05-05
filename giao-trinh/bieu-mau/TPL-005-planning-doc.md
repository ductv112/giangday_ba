# TPL-005 — BA Planning Document

**Buổi sử dụng:** B3 (đầu mỗi dự án)
**Format gợi ý:** Markdown / Word
**Thời gian điền:** 60-90 phút
**Độ dài:** 1-2 trang

## Mục đích
Trước khi viết tài liệu lớn (BRD/SRS), BA cần plan: làm gì, khi nào, cho ai. Plan này = bản đồ — không có nó, BA "lạc" ngay tuần đầu.

## Khi nào dùng
- **Bắt đầu mỗi dự án mới** (output cuối Bước 1 — Lập kế hoạch trong Quy trình BA 6 bước)
- **Trước kick-off meeting** với stakeholder
- **Khi nhận phân hệ mới** trong dự án lớn

## Template

```markdown
# BA Planning — [Tên dự án / phân hệ]

**BA:** _________________  **Ngày:** ___________
**Sponsor:** _____________  **PM:** ___________
**Version:** 1.0

---

## 1. Mục tiêu kinh doanh (Why)

Vì sao dự án có?
- _____________________________________________
- _____________________________________________
- _____________________________________________

**Đo thành công bằng:** ___________________________
(KPI cụ thể, đo bằng số — vd. tăng 30% conversion, giảm 50% thời gian xử lý)

## 2. Phạm vi (Scope)

### In-scope (PHẢI LÀM)
- _____________________________________________
- _____________________________________________

### Out-of-scope (KHÔNG LÀM, hoặc phase sau)
- _____________________________________________
- _____________________________________________

## 3. Stakeholder

| Vai trò | Tên / Phòng ban | Power | Interest | Cách giao tiếp |
|---|---|:---:|:---:|---|
| Sponsor | | Cao | Cao | Họp tuần |
| End user | | Thấp | Cao | Demo cuối sprint |
| Tech Lead | | Cao | Cao | Daily stand-up |
| Pháp chế | | Cao | Thấp | Email update |

## 4. Cách khơi gợi yêu cầu (Elicitation approach)

- Phỏng vấn 1-1: ___ buổi với ai?
- Workshop: ___ buổi cho nhóm nào?
- Quan sát thực tế: có cần không?
- Đọc tài liệu cũ: tài liệu nào, ở đâu?

## 5. Deliverable (output sẽ giao)

- [ ] BRD (Tài liệu yêu cầu kinh doanh)
- [ ] SRS (Đặc tả phần mềm)
- [ ] User Stories (cho Agile)
- [ ] Use Case Spec
- [ ] BPMN (sơ đồ quy trình)
- [ ] ERD (sơ đồ dữ liệu)
- [ ] Wireframe / Mockup
- [ ] Test Cases
- [ ] Traceability matrix

## 6. Timeline + cột mốc

| Tuần | Hoạt động | Output | Stakeholder |
|---|---|---|---|
| 1 | Elicitation (3 buổi phỏng vấn) | Note + 5 pain points | KH + Sponsor |
| 2 | Phân tích — vẽ sơ đồ | BPMN + ERD + UC | BA solo |
| 3 | Thiết kế + viết tài liệu | Wireframe + SRS draft | BA + UI |
| 4 | Validate + sign-off | SRS v1.0 | Sponsor + Tech Lead |

## 7. Rủi ro + dependency

- ⚠ Stakeholder bận → schedule trước 2 tuần
- ⚠ Domain mới → BA cần học 1 tuần đầu
- ⚠ Dependency phân hệ X (BA khác phụ trách) — confirm với Z

## 8. Tools sử dụng

- Tài liệu: Confluence / Notion
- Tracking: Jira (project: ABC)
- Vẽ sơ đồ: Mermaid · draw.io
- Wireframe: Figma · v0.dev
- Communication: Slack #project-abc

---

**Sign-off:**
- BA: _______________ Ngày: __________
- Sponsor: __________ Ngày: __________
```

## Ví dụ điền (rút gọn)

> **BA Planning — Phân hệ Kho IT (Doanh nghiệp A)**
>
> **Mục tiêu:** Thay Excel thủ công → hệ thống quét QR — giảm 60% thời gian cấp phát thiết bị.
> **Đo:** Thời gian cấp phát trung bình ≤ 30 giây (hiện tại 3-5 phút).
>
> **Stakeholder chính:** Quản lý kho · Nhân viên kho · CFO (audit) · IT Manager
>
> **Timeline:** 17 ngày (xem TPL-007)
>
> **Deliverable:** SRS đầy đủ + 5 BPMN + 1 ERD + 35 user story + traceability matrix

## Tips

- **Plan ngắn gọn 1-2 trang** — không phải 10 trang
- **Approve sớm với sponsor** trước khi đi vào chi tiết
- **Update mỗi tuần** nếu scope thay đổi
- **Lưu trên Confluence** để team đọc được
