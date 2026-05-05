# Buổi 2 — Prompt Library (4 prompts)

## Prompt 1: Luyện đặt câu hỏi 5 Whys

**Tool:** Claude Code / ChatGPT
**Hint:** 5 Whys = hỏi "vì sao?" 5 lần để tìm gốc rễ vấn đề
**Khi dùng:** Buổi 2 Slide 13 — luyện kỹ năng đặt câu hỏi

```
Đóng vai khách hàng đặt lịch sửa chữa điện lạnh. Tôi sẽ hỏi 5 câu,
bạn trả lời ngắn nhưng giấu thông tin quan trọng — để tôi luyện
kỹ năng đào sâu.
```

**Cách dùng:**
1. AI nhận role
2. BA hỏi câu 1 mở
3. AI trả lời ngắn, giấu thông tin
4. BA tiếp tục đào sâu (5 Whys)
5. Sau 5-7 câu hỏi, hỏi AI: "Đánh giá kỹ năng đặt câu hỏi của tôi"

---

## Prompt 2: Vẽ sơ đồ quy trình nhanh

**Tool:** Claude + Mermaid
**Hint:** Mermaid = ngôn ngữ vẽ sơ đồ chỉ bằng text
**Khi dùng:** Buổi 2 Slide 13

```
Mô tả quy trình đặt lịch sửa chữa: KH đặt → admin xác nhận →
thợ nhận → thực hiện → KH nghiệm thu.

Output ra sơ đồ flowchart bằng Mermaid (TD direction), kèm các
nhánh exception (KH huỷ, thợ từ chối).
```

**Cách dùng:**
1. Copy output Mermaid code
2. Paste vào [mermaid.live](https://mermaid.live) → sinh ngay sơ đồ
3. Screenshot hoặc export SVG để chèn vào tài liệu

---

## Prompt 3: Sinh User Story chuẩn

**Tool:** Claude Code
**Hint:** User Story = câu chuyện ngắn mô tả nhu cầu người dùng
**Khi dùng:** Buổi 2 Slide 13

```
Cho phân hệ Kho IT của Doanh nghiệp A, sinh 5 User Story vai trò
"nhân viên kho" theo format As/I want/So that, kèm 3 tiêu chí
kiểm thử Given-When-Then mỗi story.

Yêu cầu:
- Mỗi US chuẩn INVEST (Independent, Negotiable, Valuable,
  Estimable, Small, Testable)
- Phân loại MUST/SHOULD/COULD
- Output Markdown table
```

---

## Prompt 4: Review tài liệu yêu cầu

**Tool:** NotebookLM
**Hint:** Tự kiểm tra SRS đã đủ rõ chưa, có gì thiếu
**Khi dùng:** Buổi 2 Slide 13

```
Upload bản nháp SRS + danh sách 10 tiêu chí kiểm tra (xem TPL-023):
1. Có ID rõ cho mỗi yêu cầu?
2. Mỗi câu = 1 yêu cầu?
3. Tránh từ mơ hồ?
4. Có Acceptance Criteria Given-When-Then?
5. NFR đầy đủ?
6. Có wireframe link?
7. Glossary đầy đủ?
8. Versioning + change log?
9. Peer review?
10. Sign-off?

→ NotebookLM chỉ ra điểm thiếu và gợi ý bổ sung. Output table 3 cột:
Tiêu chí / Status (Pass/Fail/Partial) / Note.
```
