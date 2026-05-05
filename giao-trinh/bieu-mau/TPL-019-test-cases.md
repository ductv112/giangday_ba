# TPL-019 — Test Case Template

**Buổi sử dụng:** B7 (Viết tài liệu) · B8 (Validate)
**Format gợi ý:** Excel / TestRail / Jira Xray

## Mục đích
Template viết test case chuẩn — BA viết được + QA kế thừa được + Dev hiểu được.

## Cấu trúc Test Case chuẩn

```
TC-[ID]: [Tên test case]

| Field | Giá trị |
|---|---|
| TC ID | TC-042-01 |
| Linked US | US-042 |
| Linked UC | UC-005 |
| Type | Positive / Negative / Edge case |
| Priority | High / Medium / Low |
| Pre-condition | (trạng thái trước khi test) |
| Steps | 1. ... 2. ... 3. ... |
| Expected Result | (kết quả mong đợi) |
| Actual Result | (điền khi test) |
| Status | Pass / Fail / Block / N/A |
| Tester | Tên |
| Test date | DD/MM/YYYY |
| Note | (defect link nếu fail) |
```

## Ví dụ — Test cases cho US-042 (Quét QR cấp phát thiết bị)

### TC-042-01: Happy path — Quét QR + cấp phát thành công

| Field | Giá trị |
|---|---|
| Type | Positive |
| Priority | High |
| Pre-condition | NV kho đã login. Có thiết bị MAC-001 status "Available" trong hệ thống. NV "Nguyễn A" tồn tại trong directory. |
| Steps | 1. Click "Quét QR" trên trang Cấp phát<br/>2. Quét QR code MAC-001<br/>3. Chọn "Nguyễn A" trong dropdown người nhận<br/>4. Click "Xác nhận cấp phát" |
| Expected | - Tạo bản ghi CP-XXX trong DB<br/>- Status MAC-001 đổi thành "In use"<br/>- Email gửi đến Nguyễn A trong 10s<br/>- Toast success hiển thị 3s |

### TC-042-02: Negative — QR không tồn tại

| Field | Giá trị |
|---|---|
| Type | Negative |
| Priority | High |
| Pre-condition | NV kho đã login. Có QR code "FAKE-QR-999" KHÔNG có trong hệ thống. |
| Steps | 1. Click "Quét QR"<br/>2. Quét QR FAKE-QR-999 |
| Expected | - Hiển thị toast lỗi "QR không hợp lệ. Vui lòng kiểm tra lại."<br/>- KHÔNG tạo bản ghi nào trong DB<br/>- Quay về màn hình trước |

### TC-042-03: Negative — Thiết bị đang được mượn

| Field | Giá trị |
|---|---|
| Type | Negative |
| Priority | High |
| Pre-condition | Thiết bị MAC-001 status "In use" bởi "Trần B". |
| Steps | 1. Click "Quét QR"<br/>2. Quét QR MAC-001 |
| Expected | - Hiển thị warning "Thiết bị đang được Trần B mượn từ 01/03/2026. Vui lòng xác nhận trả trước khi cấp phát."<br/>- 2 nút: "Confirm trả trước" + "Hủy" |

### TC-042-04: Edge case — Mất mạng giữa lúc quét

| Field | Giá trị |
|---|---|
| Type | Edge case |
| Priority | Medium |
| Pre-condition | NV kho đã login. Mất mạng. |
| Steps | 1. Click "Quét QR" + quét MAC-001 + chọn Nguyễn A<br/>2. Click "Xác nhận"<br/>3. Mạng down giữa lúc gửi request |
| Expected | - Lưu draft local<br/>- Hiển thị "Đang chờ mạng — sẽ tự sync khi có kết nối"<br/>- Auto-retry khi có mạng lại<br/>- Sync thành công → toast success |

### TC-042-05: Edge case — Race condition (2 NV cùng quét 1 QR)

| Field | Giá trị |
|---|---|
| Type | Edge case |
| Priority | Medium |
| Pre-condition | NV A và NV B đều quét MAC-001 cùng lúc (cách nhau < 1s). |
| Steps | 1. NV A quét + click confirm trước (theo timestamp server)<br/>2. NV B quét + click confirm sau |
| Expected | - NV A: success<br/>- NV B: hiển thị "Thiết bị vừa được cấp phát bởi NV A 1 giây trước"<br/>- DB: chỉ có 1 bản ghi cấp phát (của NV A) |

---

## Quy tắc viết Test Case tốt

### 1. ID rõ ràng
- Format: `TC-[US ID]-[STT 2 chữ số]` — vd. `TC-042-01`
- Để dễ trace ngược lên User Story

### 2. Pre-condition cụ thể
- ❌ "User đã login"
- ✅ "User đã login với role 'Nhân viên kho', email kho@doanhnghiepa.vn"

### 3. Steps numbered, action rõ
- ❌ "Test chức năng quét QR"
- ✅ "1. Click 'Quét QR' trên trang Cấp phát. 2. Quét QR MAC-001. 3. ..."

### 4. Expected result đo được
- ❌ "Hệ thống hoạt động đúng"
- ✅ "Trong 10 giây, email gửi đến nguyena@email.com với subject 'Đã cấp phát thiết bị MAC-001'"

### 5. Cover 3 loại
- **Positive:** Happy path — input đúng → output đúng
- **Negative:** Input sai → handle gracefully
- **Edge:** Boundary, race condition, mất mạng, special character

### Tỷ lệ recommend mỗi US:
- 1-2 positive case
- 2-3 negative case
- 1-2 edge case
- → Tổng ~5-7 TC mỗi US

---

## Tips

- **AI sinh test case nhanh** — xem prompt TPL-016 / Buổi 7
- **Liên kết với US + UC** trong tool (Jira Xray, TestRail)
- **Update khi US change** — cũng versioning + change log
- **Coverage ≥ 80%** acceptance criteria của US
- **Đừng quên non-functional test** — performance, security, accessibility
