# Buổi 8 — Prompt Library (4 prompts)

## Prompt 1: Sinh agenda meeting

**Tool:** Claude Code
**Khi dùng:** Trước mỗi meeting

```
Tôi sắp họp với [N] stakeholder về [CHỦ ĐỀ].

Loại meeting: [Elicitation / Walk-through / Sprint Review / CR Review]
Thời lượng: [60/90 phút]
Vai trò tham gia: [list]

Sinh agenda chi tiết theo template TPL-021:
- Warm-up (5 phút)
- Recap context (10 phút)
- Main discussion (XX phút) — chia thành 2-3 sub-section
- Decision (15 phút)
- Action items + next step (5 phút)

Mỗi section kèm:
- Mục tiêu
- Câu hỏi guide
- Người chủ trì discussion

Output Markdown — gửi qua email 24h trước họp.
```

---

## Prompt 2: Tóm tắt meeting → Minutes

**Tool:** Claude / NotebookLM
**Khi dùng:** Sau meeting (có recording)

```
Đây là transcript meeting [TÊN] dài [X phút] (đính kèm).

Tóm tắt thành Minutes format chuẩn TPL-022:

1. **Header**: Meeting type, ngày, giờ, hình thức, note-taker
2. **Tham gia**: ai có mặt / vắng
3. **Mục tiêu meeting** (recap)
4. **Discussion** (3-5 điểm chính)
5. **Decisions** (table: # | Quyết định | Lý do | Ai duyệt)
6. **Action Items** (table: # | Hành động | Owner | Deadline | Status)
7. **Open questions** (parking lot)
8. **Next meeting**

Yêu cầu:
- Ngôn ngữ Việt, súc tích, chuyên nghiệp
- Tách rõ Discussion vs Decision vs Action
- Action items luôn có Owner + Deadline cụ thể (KHÔNG "soon" hay "team")

Output Markdown.
```

---

## Prompt 3: Sinh email follow-up

**Tool:** Claude Code
**Khi dùng:** Gửi sau meeting trong 24h

```
Dựa trên minutes meeting vừa qua (đính kèm hoặc paste):

Soạn email follow-up gửi cho tất cả tham gia:
- Subject: [Recap] [Tên meeting] — [Ngày]
- Greeting + cảm ơn
- Recap 3 decision quan trọng nhất
- List action items với owner + deadline (table format)
- Link tài liệu (minutes, recording, related docs)
- Next meeting (nếu có)
- Sign-off

Tone: chuyên nghiệp, ngắn gọn (≤ 200 từ body), action-oriented.
Ngôn ngữ Việt.
```

---

## Prompt 4: Kiểm tra SRS theo Validation Checklist

**Tool:** NotebookLM
**Khi dùng:** Trước khi gửi SRS cho dev

```
Upload SRS draft (đính kèm) + checklist 10 tiêu chí (TPL-023):

1. Có ID rõ cho mỗi yêu cầu (FR-001, NFR-002)?
2. Mỗi câu = 1 yêu cầu?
3. Tránh từ mơ hồ ("nhanh", "thân thiện")?
4. Có Acceptance Criteria Given-When-Then?
5. NFR đầy đủ 4 nhóm (Performance, Security, Usability, Reliability)?
6. Có tham chiếu wireframe link?
7. Glossary đã định nghĩa thuật ngữ?
8. Versioning + change log?
9. Đã peer review?
10. Sign-off?

NotebookLM phân tích từng tiêu chí:
- Status: Pass / Partial / Fail
- Evidence: section/line cụ thể
- Suggested fix nếu Fail/Partial

Output table 4 cột: # | Tiêu chí | Status | Note + Suggestion.
Cuối: tổng kết Pass rate + 3 ưu tiên fix top.
```
