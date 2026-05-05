# TPL-017 — SRS (Software Requirements Specification) Template

**Buổi sử dụng:** B7 (Viết tài liệu yêu cầu) — template chính của khoá
**Format gợi ý:** Markdown → Word (Pandoc)
**Độ dài:** 20-100 trang tuỳ phân hệ

## Mục đích
Template SRS chuẩn 8 mục — copy về điền cho mọi dự án.

## Khi nào dùng
- **1 SRS / 1 phân hệ** (không 1 SRS cho cả dự án nếu lớn)
- **Sau khi xong elicitation + analysis**
- **Trước khi bàn giao dev**

---

## Template

```markdown
# SRS — [Tên phân hệ / dự án]

| Trường | Giá trị |
|---|---|
| **Project** | [Tên dự án] |
| **Module** | [Tên phân hệ] |
| **Version** | 1.0 |
| **Status** | Draft / Reviewed / Approved |
| **BA** | [Tên] |
| **Date** | DD/MM/YYYY |
| **Approved by** | [Sponsor name + ngày] |

## Change Log

| Version | Ngày | Người | Thay đổi |
|---------|------|-------|----------|
| 1.0 | DD/MM | BA | Bản đầu |
| 1.1 | DD/MM | BA | Thêm UC-005, sửa UC-002 theo CR-018 |

---

## 1. Giới thiệu

### 1.1. Mục đích tài liệu
Tài liệu này mô tả chi tiết yêu cầu cho phân hệ X của dự án Y, làm input cho team dev, QA, designer.

### 1.2. Phạm vi
**In-scope (PHẢI làm):** ...
**Out-of-scope (KHÔNG làm trong phase này):** ...

### 1.3. Định nghĩa & viết tắt
(Hoặc tham chiếu Glossary TPL-020)

| Thuật ngữ | Định nghĩa |
|---|---|
| OTP | One-Time Password — mã xác thực 6 số có thời hạn 5 phút |
| SSO | Single Sign-On — đăng nhập 1 lần dùng cho nhiều ứng dụng |
| ... | ... |

### 1.4. Tài liệu tham chiếu
- BRD: [link]
- Mockup Figma: [link]
- API spec: [link]

---

## 2. Mô tả tổng quan

### 2.1. Bối cảnh
2-3 đoạn mô tả: Vì sao có dự án? Hiện trạng AS-IS? Mục tiêu TO-BE?

### 2.2. Chức năng chính (high-level)
- Chức năng 1: ...
- Chức năng 2: ...
- Chức năng 3: ...

### 2.3. Người dùng
| Role | Mô tả | Số lượng dự kiến |
|---|---|---|
| Khách hàng | End user dùng app | ~5,000 |
| Nhân viên kho | Quản lý thiết bị | 5 |
| Admin | Quản trị hệ thống | 2 |

### 2.4. Ràng buộc & giả định
- **Ràng buộc:** Phải tích hợp với hệ thống SSO hiện tại
- **Giả định:** Người dùng có smartphone + 4G

---

## 3. Yêu cầu chức năng (Functional Requirements)

### 3.1. Use Case Diagram
[Đính kèm hình UC Diagram]

### 3.2. Use Case Details
- [UC-001 — Đặt lịch sửa chữa](link UC Spec)
- [UC-002 — Xem trạng thái booking](link UC Spec)
- ...

### 3.3. User Stories (cho Agile)

| ID | User Story | Acceptance Criteria | Priority |
|----|------------|---------------------|----------|
| US-001 | Là khách hàng, tôi muốn chọn dịch vụ để đặt lịch | Given... When... Then... | MUST |
| US-002 | Là khách hàng, tôi muốn xem lịch sử booking | Given... When... Then... | SHOULD |
| ... | ... | ... | ... |

### 3.4. Functional Requirements (chi tiết kỹ thuật)

| ID | Mô tả | Source | Priority | Status |
|----|-------|--------|----------|--------|
| FR-001 | Hệ thống PHẢI cho phép KH đăng nhập bằng số điện thoại + OTP | UC-001 | MUST | Approved |
| FR-002 | Hệ thống PHẢI gửi notification realtime khi thợ confirm | UC-003 | MUST | Approved |
| ... | ... | ... | ... | ... |

---

## 4. Yêu cầu phi chức năng (Non-functional Requirements)

### 4.1. Performance
| ID | Yêu cầu | Mục tiêu |
|----|---------|----------|
| NFR-001 | Thời gian load trang chủ | ≤ 2 giây trên 4G |
| NFR-002 | Thời gian tìm thợ | ≤ 3 giây |
| NFR-003 | Concurrent user support | 1000 user đồng thời |

### 4.2. Security
| ID | Yêu cầu |
|----|---------|
| NFR-010 | Mọi password PHẢI hash bcrypt cost 12 |
| NFR-011 | API PHẢI có rate limit 100 req/min/user |
| NFR-012 | PII (số điện thoại, địa chỉ) PHẢI encrypt at rest |

### 4.3. Usability
| ID | Yêu cầu |
|----|---------|
| NFR-020 | Mobile app PHẢI tuân thủ Material Design / iOS HIG |
| NFR-021 | Form đặt lịch ≤ 4 bước |
| NFR-022 | Mọi error message bằng tiếng Việt rõ ràng |

### 4.4. Reliability
| ID | Yêu cầu |
|----|---------|
| NFR-030 | Uptime ≥ 99.5% (downtime ≤ 3.6 giờ/tháng) |
| NFR-031 | Backup data hàng ngày, retain 30 ngày |

### 4.5. Compatibility
| ID | Yêu cầu |
|----|---------|
| NFR-040 | iOS 14+ |
| NFR-041 | Android 8+ |
| NFR-042 | Web: Chrome, Firefox, Safari, Edge phiên bản 2 năm gần nhất |

---

## 5. Mô hình dữ liệu

### 5.1. ERD
[Đính kèm hình ERD — xem TPL-012]

### 5.2. Định nghĩa Entity

#### Entity: KhachHang
| Field | Type | Constraint | Mô tả |
|-------|------|------------|-------|
| id | INT | PK, auto-increment | Khoá chính |
| ho_ten | VARCHAR(100) | NOT NULL | Họ tên đầy đủ |
| sdt | VARCHAR(15) | UNIQUE, NOT NULL | Số điện thoại |
| ... | ... | ... | ... |

(Lặp cho mỗi entity)

---

## 6. Giao diện người dùng

### 6.1. Wireframe / Mockup
| Màn hình | Wireframe | Mockup HD |
|----------|-----------|-----------|
| Đăng nhập | [link Figma] | [link Figma] |
| Đặt lịch | [link Figma] | [link Figma] |
| ... | ... | ... |

### 6.2. Flow màn hình
[Đính kèm flowchart navigation]

### 6.3. Design System
- Color: primary #D41B3F, secondary #1A1A1A
- Font: Inter
- Component library: shadcn/ui
- Icon: Lucide

---

## 7. Tích hợp (Integration)

### 7.1. Hệ thống bên ngoài
| Hệ thống | Mục đích | API endpoint | Auth |
|----------|----------|--------------|------|
| SMS Gateway | Gửi OTP | https://sms.example.com/send | API key |
| Payment Gateway | Thanh toán | https://pay.example.com/v2 | OAuth2 |

### 7.2. API Contract
- API spec: [link Postman / Swagger]
- Format: REST + JSON
- Auth: JWT Bearer token

---

## 8. Phụ lục

### 8.1. Glossary (xem TPL-020)
### 8.2. Traceability Matrix (xem TPL-027)
### 8.3. Test Cases (xem TPL-019)
### 8.4. Approval

| Vai trò | Tên | Chữ ký | Ngày |
|---------|-----|--------|------|
| BA | | | |
| Tech Lead | | | |
| Sponsor | | | |
| QA Lead | | | |

---

*End of SRS — Version 1.0*
```

## Tips

- **Dùng Markdown viết** → Pandoc convert sang Word khi submit chính thức
- **Đặt tài liệu trên Confluence/Notion** — link 2 chiều với Jira tickets
- **Update version + change log** mỗi lần edit, không bao giờ silent edit
- **Sign-off bằng email** thay chữ ký nếu remote
- **Có ID rõ cho mọi requirement** — FR-001, NFR-010, US-005 — để traceability
- **Giữ ngắn gọn** — 100 trang là đã quá dài, nên chia phân hệ nhỏ
