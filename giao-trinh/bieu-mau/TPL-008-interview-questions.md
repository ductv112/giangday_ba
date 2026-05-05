# TPL-008 — Bộ câu hỏi phỏng vấn mẫu

**Buổi sử dụng:** B4 (Elicitation) — chuẩn bị trước phỏng vấn
**Format gợi ý:** Markdown / In ra giấy mang đi phỏng vấn

## Mục đích
15-20 câu hỏi mở chuẩn cho 3 vai trò — copy về tuỳ biến theo dự án thực.

## Khi nào dùng
- **Trước mỗi buổi phỏng vấn:** Chọn 10-15 câu phù hợp, in ra mang đi
- **Onboard BA mới:** Đưa template để họ tự custom
- **Workshop đào tạo:** Phát cho học viên thực hành 5 Whys

## Quy tắc câu hỏi mở

✅ **NÊN dùng:**
- Vì sao... ?
- Hãy mô tả 1 ngày làm việc điển hình của anh/chị?
- Khó khăn lớn nhất hiện tại là gì?
- Anh/chị mong hệ thống mới giải quyết gì?

❌ **TRÁNH (câu hỏi đóng / lái):**
- Anh có muốn tính năng X không? (đóng + lái)
- Chắc anh thấy hệ thống cũ chậm phải không? (lái)
- Có 5 user dùng đúng chứ? (đóng)

---

## A. Phỏng vấn KHÁCH HÀNG / End User (15 câu)

### Hiểu bối cảnh
1. Hãy mô tả 1 ngày làm việc điển hình của anh/chị?
2. Trong công việc hiện tại, anh/chị dùng tool/phần mềm gì?
3. Quy trình hiện tại của [hoạt động X] gồm những bước nào?

### Đào sâu pain point (dùng 5 Whys)
4. Phần nào của công việc anh/chị thấy mất nhiều thời gian nhất?
5. Vì sao phần đó tốn thời gian? (why 1)
6. Vì sao... [tiếp tục why 2,3,4,5]
7. Nếu có 1 phép màu xoá đi 1 vấn đề — anh/chị muốn xoá vấn đề gì?

### Tìm hiểu kỳ vọng
8. Anh/chị mong hệ thống mới giúp được điều gì?
9. Hệ thống lý tưởng — anh/chị tưởng tượng nó hoạt động ra sao?
10. So với cách làm hiện tại, anh/chị muốn cải thiện 3 thứ gì?

### Validate
11. Nếu chỉ có 1 tính năng — anh/chị muốn tính năng nào nhất?
12. Anh/chị có thể mô tả lại điều tôi vừa hiểu để xác nhận không?

### Bonus
13. Có ai khác trong team mà tôi nên trao đổi không?
14. Có tài liệu/báo cáo cũ nào tôi nên đọc trước không?
15. Khi nào tôi có thể quay lại nếu có thêm câu hỏi?

---

## B. Phỏng vấn QUẢN LÝ / Sponsor (12 câu)

### Mục tiêu kinh doanh
1. Vì sao công ty quyết định triển khai dự án này?
2. Đo "thành công" của dự án bằng số gì? (KPI cụ thể)
3. Trong 6-12 tháng, kỳ vọng dự án mang lại điều gì?

### Constraint + risk
4. Budget cho dự án trong khoảng nào?
5. Deadline khi nào? Điều gì xảy ra nếu chậm?
6. Có ràng buộc kỹ thuật / pháp lý nào không?

### Stakeholder
7. Ai là người chịu trách nhiệm cao nhất của dự án này?
8. Có ai trong tổ chức KHÔNG ủng hộ dự án không? Vì sao?

### Scope
9. 3 tính năng quan trọng nhất là gì?
10. Có cái gì NHẤT ĐỊNH không nên làm trong phase 1?

### Sign-off
11. Quy trình duyệt deliverable BA ra sao?
12. Khi nào tôi có thể demo bản đầu cho anh/chị?

---

## C. Phỏng vấn TECH LEAD / Dev (10 câu)

### Constraint kỹ thuật
1. Hệ thống tích hợp với những hệ thống nào hiện có?
2. Database hiện tại là gì? Có cần migrate không?
3. API nào cần expose? Format JSON / SOAP / GraphQL?

### Capacity + tech stack
4. Team đang dùng tech stack gì (frontend / backend / mobile)?
5. Sprint dài bao nhiêu tuần? Velocity team trung bình?
6. Có resource đặc biệt cần xin trước (DevOps / DBA / SecOps)?

### Risk
7. 3 thứ technically risky nhất là gì?
8. Có thư viện/framework nào team chưa từng dùng?

### Process
9. Format tài liệu BA mà dev preferred (BRD / SRS / US / nhúng Jira)?
10. Tần suất sync BA-Dev (daily / weekly)?

---

## Tips dùng template

- **Custom theo domain:** Banking khác EdTech khác Healthcare — bỏ câu không phù hợp
- **In giấy mang đi:** Giấy + bút note nhanh hơn laptop — giữ eye contact
- **Tránh hỏi tuần tự robot:** Dùng câu hỏi như guide, không đọc từ A-Z
- **Lắng nghe 80% / nói 20%** — câu hỏi chỉ là cái cớ để khách kể
- **Ghi âm có phép** — tổng hợp note với AI sau (xem TPL-009)
