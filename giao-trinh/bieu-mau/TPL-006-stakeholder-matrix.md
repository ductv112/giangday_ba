# TPL-006 — Stakeholder Power × Interest Matrix

**Buổi sử dụng:** B3 (lập kế hoạch BA)
**Format gợi ý:** Markdown / Excel / Miro

## Mục đích
Phân loại bên liên quan theo 2 chiều: **Quyền hạn** × **Mức độ quan tâm** — biết ai cần chăm sóc kỹ, ai chỉ cần update tổng quát.

## Khi nào dùng
- **Đầu dự án:** Identify đầy đủ stakeholder + chiến lược giao tiếp
- **Khi có thay đổi tổ chức:** Stakeholder mới hoặc đổi role → update matrix
- **Trước workshop quan trọng:** Đảm bảo invite đúng người

## Template

### Matrix 2x2

```
          QUAN TÂM CAO              QUAN TÂM THẤP
        ┌─────────────────────┬─────────────────────┐
QUYỀN   │  QUẢN LÝ SÁT        │  GIỮ HÀI LÒNG       │
HẠN     │  (Manage Closely)   │  (Keep Satisfied)   │
CAO     │                     │                     │
        │  - Sponsor          │  - CFO              │
        │  - Trưởng phòng     │  - Pháp chế         │
        │  - Director dùng HT │  - CIO              │
        ├─────────────────────┼─────────────────────┤
QUYỀN   │  GIỮ THÔNG TIN      │  THEO DÕI           │
HẠN     │  (Keep Informed)    │  (Monitor)          │
THẤP    │                     │                     │
        │  - End user         │  - Phòng ban không  │
        │  - Khách hàng beta  │    trực tiếp dùng   │
        │  - Operator         │  - Đối tác phụ      │
        └─────────────────────┴─────────────────────┘
```

### Bảng chi tiết

| Tên / Vai trò | Phòng ban | Power | Interest | Nhóm | Cách giao tiếp | Tần suất |
|---|---|:---:|:---:|---|---|---|
| | | Cao/Thấp | Cao/Thấp | Quản lý sát / Giữ hài lòng / Giữ thông tin / Theo dõi | Họp 1-1 / Email / Demo / Newsletter | Tuần / 2 tuần / Tháng / Quý |

## 4 Nhóm — Cách tiếp cận

### Quản lý sát (Power Cao + Interest Cao) — 80% thời gian giao tiếp
- Họp 1-1 định kỳ
- Báo cáo tiến độ tuần
- Xin ý kiến mọi quyết định lớn
- Sign-off mọi tài liệu chính

### Giữ hài lòng (Power Cao + Interest Thấp)
- Update khi có cột mốc lớn
- Không làm phiền chi tiết
- Đảm bảo họ KHÔNG bất ngờ với kết quả

### Giữ thông tin (Power Thấp + Interest Cao)
- Newsletter / demo định kỳ
- Thu feedback
- Họ thường là user thực tế — input quý cho UX

### Theo dõi (Power Thấp + Interest Thấp)
- Cập nhật tổng quát qua kênh chung
- Không tốn nhiều thời gian
- Vẫn invite vào meeting công khai

## Ví dụ điền — Phân hệ Kho IT (Doanh nghiệp A)

| Tên | Phòng ban | Power | Interest | Nhóm | Giao tiếp | Tần suất |
|---|---|---|---|---|---|---|
| Nguyễn Văn A — Tổng giám đốc | Ban TGĐ | Cao | Cao | Quản lý sát | Họp 1-1 | 2 tuần/lần |
| Trần Thị B — Quản lý kho | Phòng IT | Cao | Cao | Quản lý sát | Họp 1-1 + chat | Hàng ngày |
| Lê Văn C — Kế toán trưởng | Phòng TC | Cao | Thấp | Giữ hài lòng | Email update | Tháng |
| Phạm Văn D — Nhân viên kho | Phòng IT | Thấp | Cao | Giữ thông tin | Demo cuối sprint | 2 tuần |
| Trưởng phòng Mua hàng | Phòng MH | Thấp | Thấp | Theo dõi | Newsletter chung | Quý |

## Tips

- **Update mỗi quý:** Tổ chức thay đổi → role thay đổi → matrix thay đổi
- **In treo phòng team** (nếu OK với privacy) — mọi người biết ai là ai
- **Đừng quên người im lặng:** Họ ít nói nhưng có thể quyền cao (vd. CFO)
- **Confirm power level với mentor** — fresher dễ chấm sai
