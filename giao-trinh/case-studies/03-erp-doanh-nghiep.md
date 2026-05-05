# Case Study #3 — Doanh nghiệp A · ERP đa phân hệ

**Loại:** B2B · ERP đa module cho công ty công nghệ
**Reference prototype:** `D:\GiangDay\Demo\` (đã rebrand sạch — generic "Doanh nghiệp A", không liên quan tổ chức nào cụ thể)
**Stack:** Vite + React + TypeScript + AntD (16 module) · Next.js + Tailwind + shadcn (3 module)
**Sử dụng:** Buổi 5 (Phân tích yêu cầu) → Buổi 9 (Quản lý yêu cầu) — case chính khi làm việc với hệ thống lớn, đa module, multi-stakeholder

---

## 1. Bối cảnh giả định cho học viên

> **"Doanh nghiệp A"** là một công ty công nghệ Việt Nam có ~500 nhân viên, hoạt động ở 3 mảng: phát triển phần mềm, dịch vụ vận hành hạ tầng IT, và phân phối thiết bị / license.
>
> Sau 5 năm tăng trưởng, các phòng ban dùng nhiều công cụ rời rạc (Excel, Google Sheet, các app SaaS) — không có hệ thống thống nhất → khó báo cáo, khó audit, khó scale.
>
> Ban Giám đốc quyết định triển khai một **bộ ERP nội bộ** gồm 16+ module đáp ứng toàn bộ vòng đời doanh nghiệp: từ Mua hàng → Sản xuất → Bảo trì → Tài chính → Kho.
>
> **Vai trò BA:** Phân tích yêu cầu cho từng module, viết SRS, vẽ BPMN, quản lý change request giữa các module, validate với phòng ban dùng cuối.

---

## 2. Bộ module có sẵn

### 2.1. Module trung tâm

| Module | Path | Port | Stack | Vai trò nghiệp vụ |
|---|---|---|---|---|
| **Portal** | `demo-portal` | 3000 | Next.js | Hub/landing — homepage doanh nghiệp + CMS văn bản, biểu mẫu |
| **SSO** | `demo-sso` | 5173 | Vite + AntD | Single Sign-On, đăng nhập tập trung cho mọi module |

### 2.2. Module nghiệp vụ chính

| Module | Path | Port | Vai trò |
|---|---|---|---|
| **Tài chính kế toán** | `demo-taichinhketoan` | 5175 | TK VAS, hoá đơn, sổ cái, BCTC |
| **Hợp đồng nhiệm vụ** | `demo-hopdongnhiemvu` | 5176 | Hợp đồng dự án / SOW, theo dõi nghiệm thu |
| **Mua hàng** | `demo-muahang` | 5177 | IT Procurement — nhà cung cấp, PO, NCC chiến lược |
| **Kho** | `demo-kho` | 5178 | Quản lý IT asset + license, xuất nhập tồn |
| **Sản xuất phần mềm** | `demo-sanxuat` | 5179 | DevOps/Production line cho phần mềm |
| **Bảo trì** | `demo-baotri` | 5180 | Bảo trì server/hệ thống định kỳ |
| **Sửa chữa** | `demo-suachua` | 5181 | Khắc phục sự cố thiết bị, ticket sửa chữa |
| **Đại tu** | `demo-daitu` | 5182 | Major upgrade hệ thống lớn |
| **Vòng đời** | `demo-vongdoi` | 5183 | SDLC sản phẩm phần mềm — phát triển → triển khai → EOL |
| **Đo lường** | `demo-doluong` | 5187 | KPI, đo chất lượng phần mềm |
| **An toàn** | `demo-antoan` | 5188 | IT Security — incident, vulnerability, audit |

### 2.3. Module hỗ trợ (Next.js)

| Module | Path | Port | Vai trò |
|---|---|---|---|
| **DMS** | `demo-dms` | 3010 | Document Management System |
| **Chatbot AI** | `demo-chatbot` | 3011 | AI assistant nội bộ |

### 2.4. Module skeleton (chỉ AppSwitcher, không có nghiệp vụ — học viên có thể "phân tích yêu cầu" như bài tập)

| Module | Path | Port | Trạng thái |
|---|---|---|---|
| Chất lượng | `demo-chatluong` | 5184 | Skeleton — học viên có thể design from scratch |
| Sự cố | `demo-suco` | 5185 | Skeleton |
| Thử nghiệm | `demo-thunghiem` | 5186 | Skeleton |

---

## 3. Cách chạy khi dạy

```bash
# Module trọng tâm để demo (chạy nền nhiều terminal song song)
cd D:\GiangDay\Demo\demo-portal && npm run dev    # Portal hub — http://localhost:3000
cd D:\GiangDay\Demo\demo-kho && npm run dev       # Kho — http://localhost:5178
cd D:\GiangDay\Demo\demo-taichinhketoan && npm run dev   # http://localhost:5175
```

**Cross-module navigation:** AppSwitcher ở mỗi module có sẵn link sang module khác qua `http://localhost:<PORT>`. Khi tất cả module dev server cùng chạy → học viên thấy nguyên hệ sinh thái.

**Nếu port bị chiếm:** chạy `D:\GiangDay\Demo\free-ports.bat` để release.

---

## 4. Đề xuất sử dụng theo từng buổi

| Buổi | Cách dùng case 3 |
|------|-------------------|
| **Buổi 1 (Giới thiệu)** | Show portal `demo-portal` để học viên thấy "ERP đa module nhìn ra sao". Click sang 2-3 module để cảm nhận quy mô. |
| **Buổi 5 (Phân tích yêu cầu)** | Phân tích 1 module cụ thể (vd. `demo-kho`): mô tả nghiệp vụ, vẽ ERD, xác định actor. |
| **Buổi 6 (Thiết kế giao diện)** | Lấy module skeleton (vd. `demo-chatluong`) — học viên dùng v0.dev/Figma Make sinh giao diện từ mô tả. |
| **Buổi 7 (Viết tài liệu)** | Viết SRS hoàn chỉnh cho 1 module (vd. `demo-suachua`) — dùng Claude Code generate first draft. |
| **Buổi 8 (Validate)** | Dùng `demo-vongdoi` làm ví dụ về validate user story với stakeholder nội bộ. |
| **Buổi 9 (Quản lý yêu cầu)** | Multi-module change management — ví dụ: thay đổi cấu trúc TK VAS trong `demo-taichinhketoan` ảnh hưởng đến `demo-mua-hang` + `demo-hopdongnhiemvu` ra sao. |

---

## 5. Lưu ý khi dạy

- **Tên doanh nghiệp:** Luôn dùng "Doanh nghiệp A" — đây là tên giả định, không phải doanh nghiệp thật cụ thể nào.
- **Mockdata:** Năm 2026, nhân sự "Nguyễn Văn A — Giám đốc kỹ thuật" v.v. — chức danh doanh nghiệp generic, đã trung lập hoá.
- **Module skeleton (chatluong/suco/thunghiem):** đây là cơ hội để học viên thực hành **làm BA from scratch** — có nghiệp vụ chung chung, học viên tự define rõ.
- **Port mapping:** xem [`D:\GiangDay\Demo\CLAUDE.md` § Port mapping](../../../Demo/CLAUDE.md) cho list đầy đủ — đã in sẵn ở mục 2 trên.

---

*Tài liệu này thuộc giáo trình khoá Ready for BA — gửi học viên kèm khi bắt đầu Buổi 5.*
