# TPL-016 — Bộ prompt v0.dev cho 8 UI Pattern

**Buổi sử dụng:** B6 (Thiết kế chức năng & giao diện)
**Format gợi ý:** Copy-paste vào v0.dev

## Mục đích
8 prompt mẫu cho 8 UI pattern phổ biến — copy về sinh wireframe React+Tailwind trong 30 giây.

## Cách dùng v0.dev

1. Vào [v0.dev](https://v0.dev) → đăng nhập (Vercel account, free)
2. Paste prompt → Enter
3. AI sinh component React + Tailwind chạy được luôn
4. Edit nếu cần → Copy code → paste vào project

---

## Prompt cho 8 UI Pattern

### 1. Form (Nhập dữ liệu)

```
Sinh form đăng ký người dùng cho hệ thống ERP Doanh nghiệp A:
- Fields: Họ tên (text, required), Email công ty (email, required), 
  Số điện thoại (tel), Phòng ban (select: IT/Tài chính/Sản xuất/...), 
  Ngày bắt đầu làm (date)
- Validation visible inline (không alert popup)
- Style: minimal, label trên field, primary color #D41B3F, padding tốt
- React + Tailwind + react-hook-form + zod
- Có nút Submit + Cancel
```

### 2. Table (Hiển thị danh sách)

```
Sinh data table cho danh sách thiết bị IT:
- Cột: Mã thiết bị, Tên, Loại (laptop/PC/monitor), Trạng thái (Available/In use/Repair), 
  Người mượn, Ngày cấp phát, Action (Cấp phát/Báo hỏng/Lịch sử)
- Search bar + filter theo Loại + Trạng thái
- Pagination 20 items/page
- Sort được mọi cột
- Row hover effect
- React + Tailwind + tanstack/react-table
```

### 3. Dashboard (Tổng hợp số liệu)

```
Sinh dashboard tổng quan Kho IT:
- Top: 4 KPI cards (Tổng thiết bị, Đang dùng, Available, Đang sửa)
- Middle: 2 charts side-by-side (bar chart "Thiết bị theo loại" + 
  pie chart "Trạng thái")
- Bottom: list 5 alert "Thiết bị sắp hết bảo hành"
- Color: primary #D41B3F, accent xanh
- Recharts + Tailwind
```

### 4. Wizard (Quy trình nhiều bước)

```
Sinh wizard 4 bước cho "Đăng ký thiết bị mới":
- Bước 1: Loại thiết bị (radio cards với icon)
- Bước 2: Thông tin chi tiết (form)
- Bước 3: Người chịu trách nhiệm (search + select user)
- Bước 4: Confirm + Submit
- Progress bar trên top hiển thị bước hiện tại
- Nút Previous/Next/Submit phù hợp mỗi bước
- Validation từng bước trước khi sang bước sau
- React + Tailwind
```

### 5. Modal / Dialog (Hành động cần focus)

```
Sinh modal confirm "Báo hỏng thiết bị":
- Title: "Báo hỏng thiết bị [tên thiết bị]"
- Body: form gồm Lý do (textarea), Mức độ hỏng (radio: Nhẹ/Trung bình/Nặng),
  Upload ảnh (drag-drop)
- Footer: nút Cancel (outline) + nút "Gửi báo cáo" (primary đỏ)
- Esc key đóng modal
- Backdrop click không đóng (force click button)
- React + Tailwind + Radix UI
```

### 6. Tab (Group nội dung)

```
Sinh tab navigation cho trang "Chi tiết thiết bị":
- 4 tab: Thông tin, Lịch sử mượn, Bảo trì, Tài liệu
- Tab active: underline đỏ + bold text
- Content mỗi tab khác nhau (placeholder OK)
- Lazy load nội dung tab (chỉ load khi click)
- React + Tailwind + Radix UI Tabs
```

### 7. Search & Filter (Tìm trong danh sách lớn)

```
Sinh search panel cho danh sách 1000+ thiết bị:
- Search box ở top với auto-suggest (typeahead)
- Filters bên trái:
  - Loại thiết bị (multi-select checkbox)
  - Trạng thái (radio)
  - Khu vực (select dropdown)
  - Khoảng giá (slider)
  - Ngày cấp phát (date range)
- Số kết quả + nút "Xoá filter" + nút "Lưu filter này"
- Result list bên phải, update realtime khi đổi filter
- React + Tailwind
```

### 8. Empty State (Khi list rỗng)

```
Sinh empty state cho trang "Danh sách yêu cầu cấp phát":
- Icon lớn (illustration đơn giản, vd. clipboard rỗng)
- Title: "Chưa có yêu cầu cấp phát nào"
- Subtitle: "Yêu cầu sẽ xuất hiện ở đây khi nhân viên submit qua app."
- CTA primary: "Tạo yêu cầu mới" (cho admin)
- CTA secondary: "Xem hướng dẫn" (link)
- Color: minimal, không screaming
- React + Tailwind
```

---

## Tips dùng v0.dev hiệu quả

### Format prompt tốt:
1. **Mô tả mục tiêu màn hình ngắn** (1 câu)
2. **List fields/elements cụ thể**
3. **Style hint** (minimal, brand color, padding)
4. **Tech stack** (React, Tailwind, library)
5. **Behavior** (validation, hover, loading state)

### Prompt anti-patterns:
- ❌ "Sinh form đăng ký" → quá generic, AI sinh chung chung
- ❌ "Sinh dashboard đẹp" → "đẹp" không cụ thể
- ❌ Quá dài (> 500 từ) → AI bỏ qua chi tiết

### Sau khi v0.dev sinh:
1. **Preview ngay trên v0** — xem style + behavior
2. **Iterate bằng cách hỏi tiếp:** "Thêm field X", "Đổi color sang Y"
3. **Copy code** → paste vào project React của bạn
4. **Edit hardcoded data** → connect API thật

### Workflow thực tế:
1. BA viết User Story (vd. "Là nhân viên kho, tôi muốn xem danh sách thiết bị...")
2. BA viết prompt v0.dev dựa trên US (5 phút)
3. AI sinh wireframe (30 giây)
4. BA review theo checklist TPL-015 (10 phút)
5. Iterate 1-2 lần với AI (5 phút)
6. Bàn giao cho UI Designer làm đẹp + áp dụng design system (1-2 giờ thay vì 1 ngày)

→ Tổng: 30 phút BA + 2 giờ Designer = 1 wireframe production-ready
→ Trước AI: 4 giờ BA + 8 giờ Designer = 1.5 ngày
