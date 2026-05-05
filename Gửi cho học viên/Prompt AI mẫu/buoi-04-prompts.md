# Buổi 4 — Prompt Library (4 prompts)

## Prompt 1: Sinh bộ câu hỏi phỏng vấn (15 câu)

**Tool:** Claude / ChatGPT
**Khi dùng:** Trước mỗi buổi phỏng vấn

```
Tôi sắp phỏng vấn [VAI TRÒ] về [BỐI CẢNH DỰ ÁN].
Sinh 15 câu hỏi mở:
- 5 câu hiểu bối cảnh hiện tại
- 5 câu đào sâu pain point (có 2-3 câu 5 Whys)
- 5 câu khám phá kỳ vọng

Yêu cầu:
- Tất cả câu hỏi mở (KHÔNG có/không)
- Tránh jargon kỹ thuật
- Phù hợp với người không có background IT (nếu cần)
- Output Markdown
```

---

## Prompt 2: Đóng vai khách hàng để luyện phỏng vấn

**Tool:** Claude Code / ChatGPT
**Khi dùng:** Buổi 4 Slide 15 — Demo role-play với Claude

```
Bạn đóng vai 1 quản lý kho IT 35 tuổi tại Doanh nghiệp A.

Bối cảnh:
- Bạn quản lý 500 thiết bị (laptop, monitor, license phần mềm)
- Hiện đang dùng Excel (3 file rời)
- Tình trạng: hay nhầm, mất 5 phút mỗi lần cấp phát, không có audit trail
- Có lần CEO không vào được Office vì hết hạn license tuần trước mà không ai biết

Bạn được phỏng vấn bởi 1 BA fresher. Quy tắc:
- Trả lời NGẮN (2-3 câu mỗi lần)
- GIẤU 1-2 thông tin quan trọng để buộc BA đào sâu
- Không tự nhiên nói hết — chỉ nói khi BA hỏi đúng
- Có thể bày tỏ frustration với quy trình hiện tại

Sẵn sàng nhận câu hỏi đầu tiên.
```

**Cách dùng:**
1. Paste prompt → AI nhận role
2. BA hỏi câu 1 mở (vd. "Anh mô tả 1 ngày làm việc điển hình?")
3. AI trả lời ngắn
4. BA hỏi tiếp, dùng 5 Whys
5. Sau 10-15 câu, prompt: "Đánh giá kỹ năng phỏng vấn của tôi: điểm mạnh, yếu, anti-pattern mắc phải"

---

## Prompt 3: Tổng hợp note phỏng vấn → Pain points + Yêu cầu

**Tool:** Claude Code
**Khi dùng:** Sau buổi phỏng vấn

```
Đính kèm note phỏng vấn từ buổi với [TÊN] — [VAI TRÒ] (hoặc paste text).

Tổng hợp thành:

1. **Pain points** (≥ 5):
   - Format: [Pain point ngắn] — [Tần suất] — [Ảnh hưởng]
   - Có quote nguyên văn

2. **Yêu cầu nêu ra** (≥ 5):
   - Format: [Yêu cầu] — [Loại: Functional/NF] — [Priority: MUST/SHOULD/COULD]

3. **5 user story đầu tiên** chuẩn INVEST từ yêu cầu trên

4. **Câu hỏi follow-up** (3-5 câu) — những gì còn chưa rõ, cần phỏng vấn lần 2

Output Markdown.
```

---

## Prompt 4: Validate hiểu đúng yêu cầu

**Tool:** Claude Code / ChatGPT
**Khi dùng:** Trước khi viết SRS

```
Đây là tổng hợp yêu cầu sau phỏng vấn (đính kèm).

Đóng vai [VAI TRÒ] — đọc lại tổng hợp này và:

1. Chỉ ra 3 chỗ BA có thể HIỂU SAI (vì stakeholder thường nói không
   hết, BA dễ assume sai)
2. Đưa 5 câu hỏi clarification BA NÊN hỏi lại trước khi viết SRS
3. Highlight 2-3 mâu thuẫn nội bộ trong yêu cầu (nếu có)

Trả lời như stakeholder thật, không phải AI.
```
