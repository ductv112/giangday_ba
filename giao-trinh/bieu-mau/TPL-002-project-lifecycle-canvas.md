# TPL-002 — Project Lifecycle Canvas

**Buổi sử dụng:** B1 (giới thiệu) · B3 (dùng kỹ)
**Format gợi ý:** Markdown / Whiteboard / A3 in giấy
**Thời gian điền:** 30-60 phút (theo nhóm 3-5 người)

## Mục đích
Vẽ tổng quan 1 dự án phần mềm trên 1 trang — ai, làm gì, khi nào, output là gì. Giúp BA fresher "thấy" toàn bộ vòng đời trước khi đào sâu.

## Khi nào dùng
- **Đầu dự án mới:** Cùng team vẽ 1 canvas chung để align
- **Onboarding BA mới:** Cho BA mới điền canvas của dự án hiện tại
- **Trước workshop với khách:** Chuẩn bị visualization để present

## Template

```
┌─────────────────────────────────────────────────────────────────────┐
│  TÊN DỰ ÁN: ____________________            NGÀY: ____________      │
│  BA chính: ____________     PM: __________    Sponsor: ____________ │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📌 MỤC TIÊU KINH DOANH (Why)                                       │
│  - _________________________________________                        │
│  - _________________________________________                        │
│  - _________________________________________                        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  👥 STAKEHOLDER (Who) — phân loại Power × Interest                  │
│  Quản lý sát:    _________________________                          │
│  Giữ hài lòng:   _________________________                          │
│  Giữ thông tin:  _________________________                          │
│  Theo dõi:       _________________________                          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ⚙ PHẠM VI (What)                                                   │
│  In-scope (LÀM):       _____________________                        │
│  Out-of-scope (KHÔNG): _____________________                        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📅 TIMELINE (When)                                                 │
│  Khởi tạo:    __/__  →  Phân tích:  __/__  →  Thiết kế:  __/__      │
│  Phát triển:  __/__  →  Kiểm thử:   __/__  →  Triển khai: __/__     │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📦 DELIVERABLE BA (Output)                                         │
│  □ BRD     □ SRS     □ User Stories  □ Wireframe                    │
│  □ BPMN    □ ERD     □ Use Case      □ Test Cases                   │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ⚠ RỦI RO + CONSTRAINT (What can go wrong)                          │
│  - _________________________________________                        │
│  - _________________________________________                        │
│  - _________________________________________                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Ví dụ điền — Hệ thống đặt lịch sửa chữa điện lạnh

```
TÊN: Hệ thống đặt lịch sửa chữa điện lạnh - v1
BA: Nguyễn Văn A · PM: Trần Thị B · Sponsor: GĐ Công ty XYZ

📌 MỤC TIÊU KINH DOANH:
- Tăng 30% lượng đặt lịch online (vs gọi điện) trong 6 tháng
- Giảm 50% thời gian admin điều phối thợ
- NPS khách hàng ≥ 8/10

👥 STAKEHOLDER:
- Quản lý sát: GĐ XYZ · Trưởng phòng dịch vụ
- Giữ hài lòng: CFO (budget) · Pháp chế
- Giữ thông tin: 50 thợ kỹ thuật · 5,000 khách hàng beta
- Theo dõi: Phòng Marketing

⚙ PHẠM VI:
In-scope: App KH (iOS+Android), App thợ (Android), Web admin
Out-of-scope: Tích hợp ERP nội bộ, billing tự động (phase 2)

📅 TIMELINE:
Khởi tạo: 1/2 → Phân tích: 15/2 → Thiết kế: 1/3
Phát triển: 15/3 → Kiểm thử: 15/4 → Triển khai: 1/5

📦 DELIVERABLE BA:
☑ BRD ☑ SRS ☑ User Stories ☑ Wireframe ☑ BPMN ☑ ERD ☑ Use Case

⚠ RỦI RO:
- Thợ ít dùng smartphone → cần training
- Khách hàng thế hệ 50+ ngại app → giữ option gọi điện
- Mạng 3G/4G ở vùng ven yếu → cần offline-first
```

## Tips

- **Vẽ trên giấy A3 hoặc whiteboard** trong workshop kickoff
- **Update canvas mỗi sprint review** — phạm vi/timeline có thay đổi
- **In treo phòng team** — ai cũng nhìn thấy big picture
- **Dùng làm slide đầu BRD** — thay 5 trang text bằng 1 canvas
