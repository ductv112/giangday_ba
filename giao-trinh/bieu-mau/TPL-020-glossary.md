# TPL-020 — Glossary Template

**Buổi sử dụng:** B7 (Viết tài liệu) — phụ lục cuối SRS
**Format gợi ý:** Markdown / Word / Confluence page

## Mục đích
Định nghĩa thuật ngữ chuyên ngành dùng trong dự án — dev / QA / khách đọc tài liệu hiểu thống nhất.

## Khi nào dùng
- **Phụ lục cuối SRS** — bắt buộc
- **Confluence page riêng** — share toàn team
- **Onboard người mới** — đọc Glossary là biết domain language

## Template

```markdown
# Glossary — [Tên dự án / Phân hệ]

Định nghĩa các thuật ngữ chuyên ngành dùng trong tài liệu này.

| # | Thuật ngữ | Viết tắt | Định nghĩa | Ghi chú |
|---|-----------|----------|------------|---------|
| 1 | OTP | OTP | One-Time Password — mã xác thực 6 chữ số có thời hạn 5 phút, gửi qua SMS | Dùng cho login + xác nhận giao dịch |
| 2 | SSO | SSO | Single Sign-On — đăng nhập 1 lần dùng được nhiều ứng dụng trong hệ sinh thái | Tích hợp với SSO server công ty |
| 3 | UAT | UAT | User Acceptance Test — kiểm thử bởi người dùng cuối, validate sản phẩm trước go-live | Diễn ra ở giai đoạn pre-production |
| ... | | | | |
```

---

## Ví dụ Glossary đầy đủ — Dự án "Hệ thống đặt lịch sửa chữa"

| # | Thuật ngữ | Viết tắt | Định nghĩa | Ghi chú |
|---|-----------|----------|------------|---------|
| 1 | Booking | - | 1 lượt đặt lịch sửa chữa của khách hàng, gồm: dịch vụ, ngày giờ, địa chỉ, thợ được gán | Có ID dạng BK-YYYYMMDD-NNNN |
| 2 | Thợ | - | Nhân viên kỹ thuật thực hiện sửa chữa, có app riêng để nhận booking | Có thể freelance hoặc full-time |
| 3 | Match | - | Quá trình hệ thống chọn thợ phù hợp cho 1 booking dựa trên: khoảng cách, kỹ năng, lịch trống | Auto-match trong 5 giây |
| 4 | OTP | OTP | One-Time Password — mã 6 chữ số có thời hạn 5 phút | Gửi qua SMS Twilio |
| 5 | Push Notification | Push | Thông báo realtime gửi đến app mobile qua Firebase | Dùng cho match thành công, thợ cancel |
| 6 | UAT | UAT | User Acceptance Test — kiểm thử bởi người dùng cuối | Run 1 tuần trước go-live |
| 7 | Service Catalog | - | Danh mục dịch vụ + giá cố định (vd. "Sửa máy lạnh treo tường: 200k") | Manage bởi admin trong backoffice |
| 8 | NPS | NPS | Net Promoter Score — chỉ số đo sự hài lòng khách hàng (0-10) | Hỏi sau mỗi booking hoàn thành |
| 9 | Geofence | - | Bán kính địa lý quanh 1 điểm — dùng để xác định thợ trong khu vực | Default 5 km, customizable |
| 10 | Auto-cancel | - | Tự động hủy booking nếu thợ không confirm trong 5 phút | Hệ thống re-match thợ khác |

---

## Quy tắc viết Glossary tốt

### 1. Định nghĩa NGẮN GỌN, dễ hiểu
- ❌ "OTP là một cơ chế bảo mật sử dụng mã ngẫu nhiên..." (dài + tech)
- ✅ "OTP — mã 6 số có thời hạn 5 phút, gửi qua SMS"

### 2. Định nghĩa thuật ngữ DOMAIN, không phải GENERAL IT
- ❌ "API" — quá general, ai cũng biết
- ✅ "Booking auto-cancel" — domain-specific

### 3. Có Ghi chú cho các trường hợp đặc biệt
- "Default 5km, customizable trong admin"
- "Chỉ dùng cho user role X"

### 4. Nhóm theo alphabet HOẶC theo nhóm logic
- Cách 1: Sort A-Z
- Cách 2: Group theo Domain / Tech / User / Process

### 5. Update mỗi khi thêm thuật ngữ mới
- Đặt rule: BA edit SRS → check Glossary
- Reviewer cũng check Glossary có miss thuật ngữ không

---

## Khi tài liệu LARGE (>50 trang) — chia Glossary

```
## Phụ lục A.1 — Business Glossary (kinh doanh)
- Booking, Service Catalog, NPS...

## Phụ lục A.2 — Technical Glossary (kỹ thuật)
- OTP, SSO, API, JWT, Geofence...

## Phụ lục A.3 — User Roles
- Customer, Technician, Admin, Operator...
```

---

## Tips

- **Confluence Page** thay vì Glossary trong mỗi SRS — single source of truth
- **Link cross-reference** trong SRS: thuật ngữ lần đầu xuất hiện → link tới Glossary
- **Có người owner** — 1 BA chịu trách nhiệm maintain Glossary
- **Onboarding tool** — gửi Glossary cho người mới đọc trước khi đọc SRS
- **Định nghĩa bằng tiếng Việt** — tránh dùng English-only terms
