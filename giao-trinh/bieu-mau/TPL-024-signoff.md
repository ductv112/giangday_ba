# TPL-024 — Sign-off Form

**Buổi sử dụng:** B8 (Validate yêu cầu) · B9 (Quản lý change request)
**Format gợi ý:** Markdown → Email / DocuSign / Word

## Mục đích
Văn bản chính thức xác nhận stakeholder đồng ý với deliverable BA — bảo vệ BA khỏi tranh chấp sau này.

## Khi nào dùng
- **Cuối phase Phân tích:** Sign-off SRS v1.0
- **Trước go-live:** Sign-off UAT
- **Approve Change Request:** Sign-off CR-XXX
- **Cuối dự án:** Sign-off bàn giao

---

## Template

```markdown
# SIGN-OFF FORM

| Trường | Giá trị |
|---|---|
| **Document type** | SRS / UAT Result / CR Approval / Project Closure |
| **Document ID** | SRS-KhoIT-v1.0 |
| **Date** | DD/MM/YYYY |
| **Project** | [Tên dự án] |
| **Module** | [Tên phân hệ] |
| **Version** | 1.0 |

## 1. Phạm vi sign-off

Tôi/chúng tôi đã đọc và xác nhận tài liệu sau:

- **Tên tài liệu:** [SRS — Phân hệ Kho IT]
- **Version:** 1.0
- **Ngày phát hành:** DD/MM/YYYY
- **Tổng trang:** ___ trang
- **Link tài liệu:** [link Confluence / Drive]

## 2. Nội dung đồng ý

Bằng việc ký dưới đây, tôi xác nhận:

- [ ] Đã đọc đầy đủ tài liệu
- [ ] Hiểu rõ phạm vi (in-scope + out-of-scope)
- [ ] Hiểu rõ deliverable + timeline
- [ ] Đồng ý với các yêu cầu chức năng (FR-001 → FR-XXX)
- [ ] Đồng ý với các yêu cầu phi chức năng (NFR-001 → NFR-XXX)
- [ ] Đồng ý budget + resource cho phase này
- [ ] Hiểu các giả định + ràng buộc nêu trong tài liệu

## 3. Comments / Conditions (nếu có)

Sign-off này CÓ ĐIỀU KIỆN sau:
- Điều kiện 1: ___
- Điều kiện 2: ___

(Hoặc: "Sign-off vô điều kiện")

## 4. Sign-off

| Vai trò | Tên đầy đủ | Phòng ban | Chữ ký | Ngày |
|---------|-----------|-----------|--------|------|
| **Sponsor** | _________ | _________ | _________ | __/__ |
| **BA Lead** | _________ | _________ | _________ | __/__ |
| **Tech Lead** | _________ | _________ | _________ | __/__ |
| **QA Lead** | _________ | _________ | _________ | __/__ |
| **PM** | _________ | _________ | _________ | __/__ |

## 5. Distribution

Bản sign-off này được gửi tới:
- ___ (sponsor)
- ___ (BA team)
- ___ (Dev team)
- ___ (QA team)
- ___ (PMO)

Lưu trữ tại: [Confluence link / SharePoint]

---

**Lưu ý:** Bất kỳ thay đổi nào sau sign-off này phải đi qua quy trình Change Request (TPL-025).
```

---

## Ví dụ điền — Sign-off SRS Phân hệ Kho IT

```markdown
# SIGN-OFF FORM

| Trường | Giá trị |
|---|---|
| **Document type** | SRS |
| **Document ID** | SRS-KhoIT-v1.0 |
| **Date** | 20/03/2026 |
| **Project** | ERP Doanh nghiệp A |
| **Module** | Kho IT |
| **Version** | 1.0 |

## 1. Phạm vi sign-off

- **Tên tài liệu:** SRS — Phân hệ Kho IT
- **Version:** 1.0
- **Ngày phát hành:** 18/03/2026
- **Tổng trang:** 32 trang
- **Link tài liệu:** confluence.dna.vn/srs/khoit-v1.0

## 2. Nội dung đồng ý

- [x] Đã đọc đầy đủ tài liệu
- [x] Hiểu rõ phạm vi (in-scope: cấp phát/báo hỏng/báo cáo tồn kho; out-of-scope: tích hợp ERP tài chính)
- [x] Hiểu rõ deliverable + timeline (4 tuần dev + 1 tuần test)
- [x] Đồng ý 32 yêu cầu chức năng FR-001 → FR-032
- [x] Đồng ý 12 yêu cầu phi chức năng NFR-001 → NFR-012
- [x] Đồng ý budget 250 triệu VND
- [x] Hiểu giả định: tích hợp với SSO sẵn có

## 3. Comments / Conditions

Sign-off có 1 điều kiện:
- **NFR-005 (uptime 99.9%) sẽ revisit sau go-live 3 tháng** — nếu không đạt, có thể negotiate lại SLA

## 4. Sign-off

| Vai trò | Tên | Chữ ký | Ngày |
|---------|-----|--------|------|
| Sponsor (CTO) | Nguyễn Văn A | _email confirm_ | 20/03 |
| BA Lead | Trần Thị B | _email confirm_ | 20/03 |
| Tech Lead | Phạm Văn C | _email confirm_ | 20/03 |
| QA Lead | Lê Thị D | _email confirm_ | 20/03 |
| PM | Hoàng Văn E | _email confirm_ | 20/03 |

## 5. Distribution

Gửi tới: All stakeholders + PMO
Lưu tại: confluence.dna.vn/signoff/srs-khoit-v1.0
```

---

## Quy tắc Sign-off

### 1. Ai cần ký?
- **Sponsor:** Quyền cao nhất, chịu budget
- **BA Lead:** Đảm bảo SRS đúng quy trình BA
- **Tech Lead:** Đảm bảo feasible technically
- **QA Lead:** Đảm bảo testable
- **PM:** Đảm bảo timeline + resource

### 2. Hình thức ký
- ✅ **Email confirm** — được chấp nhận trong nhiều công ty
- ✅ **DocuSign** — formal, có audit trail
- ✅ **Confluence approval workflow** — built-in
- ❌ **Verbal** — không có bằng chứng

### 3. Sign-off có điều kiện vs vô điều kiện
- **Vô điều kiện:** OK, không cần làm gì thêm
- **Có điều kiện:** Ghi rõ điều kiện, có thể revisit

### 4. Lưu trữ
- Confluence / SharePoint / dedicated folder
- Backup ≥ 7 năm (tuỳ policy công ty)

### 5. Khi có thay đổi sau sign-off
- BẮT BUỘC qua Change Request (TPL-025)
- Không "silent edit" rồi báo sau

---

## Tips

- **Push sign-off sớm** — không "soft sign-off" qua chat
- **Nếu stakeholder ngại ký:** giải thích đây là protect cho cả 2 bên
- **Dùng email với "Reply All approve"** — formal nhưng nhanh
- **Re-sign-off mỗi major version** (v1.0 → v2.0) — không "rolling sign-off"
- **Track sign-off status trong Jira/Confluence** — biết tài liệu nào đã ký, chưa ký
