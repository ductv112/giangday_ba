# TPL-007 — Lifecycle Tracking

**Buổi sử dụng:** B3 (theo dõi tiến độ phân tích) · B9 (vòng đời yêu cầu)
**Format gợi ý:** Excel / Jira / Notion table

## Mục đích
Theo dõi từng yêu cầu xuyên suốt 7 trạng thái (Phát hiện → Đóng) — biết ai đang ở đâu, ai bị stuck.

## Khi nào dùng
- **Backlog tracking:** Mọi yêu cầu phải có status rõ
- **Daily stand-up:** Quick view ai đang làm gì
- **Báo cáo cuối tuần:** Manager muốn tóm tắt tiến độ

## Template (Excel-like)

| ID | Tên yêu cầu | Người đề xuất | BA phụ trách | Trạng thái | Phase | Sprint | Ngày tạo | Ngày update | Ưu tiên | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| FR-001 | Quét QR cấp phát thiết bị | QL Kho | Nguyễn A | In Progress | 04. Triển khai | Sprint 5 | 01/03 | 14/03 | MUST | Dev đang code, demo 18/03 |
| FR-002 | Báo cáo tồn kho theo loại | CFO | Nguyễn A | Approved | 03. Duyệt | Sprint 6 | 05/03 | 12/03 | SHOULD | Đợi Sprint 6 |
| FR-003 | Cảnh báo thiết bị gần hết hạn | QL Kho | Nguyễn A | Elaborated | 02. Phân tích chi tiết | Sprint 7 | 10/03 | 13/03 | COULD | Cần thêm spec ngày X |

## 7 Trạng thái chuẩn

| Code | Tên | Ý nghĩa |
|------|-----|---------|
| 01 | **New / Identified** | Mới được nêu ra, chưa làm gì |
| 02 | **Elaborated** | BA đã mô tả chi tiết, có acceptance |
| 03 | **Approved** | Sponsor duyệt, sẵn sàng vào sprint |
| 04 | **In Progress** | Dev đang code, QA đang test |
| 05 | **Verified** | Test pass, demo OK |
| 06 | **Closed** | Sign-off, deploy production |
| 07 | **Rejected / Deferred** | Bị từ chối hoặc hoãn phase sau |

## Workflow chuẩn

```
01 New
  ↓ (BA elaborate)
02 Elaborated
  ↓ (Sponsor approve)
03 Approved
  ↓ (Vào sprint)
04 In Progress
  ↓ (Dev xong)
05 Verified
  ↓ (UAT pass + sign-off)
06 Closed

Backward path (yêu cầu thay đổi):
04/05 → quay về 02 nếu khách đổi ý → cần Change Request (xem TPL-025)
```

## View Filter gợi ý

### Cho Daily Stand-up
- Trạng thái = `In Progress` OR `Verified`
- Sprint = sprint hiện tại
- Sort by: Ưu tiên (MUST → SHOULD → COULD)

### Cho Sponsor Report (cuối tuần)
- Trạng thái = `Closed` (tuần này) hoặc `In Progress`
- Group by: Trạng thái

### Cho Backlog Grooming
- Trạng thái = `New` OR `Elaborated`
- Sort by: Ngày tạo (cũ nhất trước)

## Tips

- **Update real-time** — không để 1 tuần mới update batch
- **Mỗi yêu cầu có ID rõ** (FR-XXX) — để link với SRS + test case
- **Note column quan trọng:** lý do delay, dependency, blocker
- **Tích hợp với Jira:** mỗi row = 1 ticket Jira, status sync 2 chiều
