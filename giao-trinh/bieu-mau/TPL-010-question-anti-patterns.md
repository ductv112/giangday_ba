# TPL-010 — Anti-pattern câu hỏi cần tránh

**Buổi sử dụng:** B4 (Elicitation) — checklist tự kiểm trước khi phỏng vấn
**Format gợi ý:** Markdown / In ra giấy

## Mục đích
5 lỗi câu hỏi BA fresher hay mắc — kiểm tra checklist trước phỏng vấn để tránh.

## 5 Anti-pattern

### 1. Câu hỏi LÁI (Leading question)

**Vấn đề:** Đã gợi ý câu trả lời trong câu hỏi → khách trả lời theo ý mình, không phải sự thật.

❌ **Sai:**
- "Anh thấy hệ thống cũ chậm phải không?"
- "Chắc anh đồng ý là cần dashboard mới chứ?"
- "Tôi nghĩ tính năng X tốt — anh có muốn không?"

✅ **Đúng:**
- "Anh thấy hệ thống hiện tại có điểm nào hài lòng / chưa hài lòng?"
- "Theo anh, công cụ phân tích tổng hợp số liệu nên có những gì?"
- "Trong 5 nhu cầu vừa kể, đâu là ưu tiên cao nhất với anh?"

### 2. Câu hỏi ĐÓNG (Closed) khi cần MỞ

**Vấn đề:** Yes/No → không moi được context, pain point thật.

❌ **Sai:**
- "Anh có dùng Excel không?" → Yes / No, hết
- "Quy trình hiện tại có 5 bước phải không?" → Yes / No
- "App có chậm không?" → Có / Không

✅ **Đúng:**
- "Hãy mô tả công cụ anh dùng cho việc đó?"
- "Quy trình hiện tại có những bước nào?"
- "App hoạt động như thế nào? Có giai đoạn nào anh thấy khó chịu?"

### 3. Câu hỏi KÉP (Compound question)

**Vấn đề:** 2-3 câu hỏi trong 1 câu → khách chỉ trả lời 1 phần, BỎ phần còn lại.

❌ **Sai:**
- "Anh dùng app này thường xuyên không và thấy có gì khó dùng và mong cải tiến gì?"
- "Quy trình hiện tại có vấn đề gì, ai chịu trách nhiệm và mất bao lâu?"

✅ **Đúng (tách thành nhiều câu):**
- "Anh dùng app này tần suất ra sao?" → đợi trả lời → "Trong khi dùng, có chỗ nào khó không?" → đợi trả lời → "Anh muốn cải tiến gì?"

### 4. Dùng JARGON kỹ thuật khách không hiểu

**Vấn đề:** BA nói tiếng kỹ thuật → khách "ậm ừ" cho qua, không thực sự hiểu.

❌ **Sai:**
- "Anh có muốn integrate với CRM qua REST API không?"
- "Authentication dùng OAuth2 hay SAML?"
- "Database normalize đến mức nào?"

✅ **Đúng (dịch sang ngôn ngữ kinh doanh):**
- "Anh có muốn hệ thống này nói chuyện với phần mềm CRM hiện tại để dữ liệu đồng bộ không?"
- "Khi nhân viên mới vào, đăng nhập bằng tài khoản nào — Google/email công ty/tài khoản riêng?"
- (Database normalize không cần hỏi khách — hỏi tech lead)

### 5. KHÔNG paraphrase + validate

**Vấn đề:** BA hiểu A, khách nói B — không confirm → BA viết spec sai → dev code sai → tốn 5x thời gian.

❌ **Sai:** Nghe xong, gật đầu, đi tiếp.

✅ **Đúng:**
- "Để tôi xác nhận lại — anh muốn ABC vì XYZ, đúng không ạ?"
- "Tôi vừa nghe anh nói cần X. Vậy điều đó có nghĩa là khi user làm Y thì hệ thống nên làm Z — đúng tinh thần không ạ?"
- Cuối buổi: tóm tắt 3-5 điểm chính bằng giấy / share screen.

---

## Checklist tự kiểm trước phỏng vấn

In ra giấy, check trước khi vào buổi:

- [ ] Tôi có chuẩn bị 15-20 câu hỏi MỞ chưa?
- [ ] Tôi đã review câu hỏi để loại bỏ "có/không" / "phải không"?
- [ ] Tôi đã loại bỏ jargon kỹ thuật?
- [ ] Tôi có plan để paraphrase + validate cuối mỗi pain point?
- [ ] Tôi có giấy + bút (note real-time) hoặc xin phép record?
- [ ] Tôi đã đặt timer để không phỏng vấn quá 60 phút (mệt cả 2)?

## Bài tập tự luyện

1. Lấy 1 câu hỏi anti-pattern bất kỳ → viết lại theo format đúng
2. Role-play với Claude Code (xem prompt B4) — Claude đóng vai khách "khó tính" → bạn luyện hỏi đúng
3. Phỏng vấn 1 người thân về app họ đang dùng → record → nghe lại → đếm số anti-pattern bạn mắc
