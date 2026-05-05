# 🤖 Prompt Library — Khoá Ready for BA

Bộ prompt copy-paste cho Claude Code / ChatGPT / NotebookLM / v0.dev — tất cả prompt nhúng trong slide đều ở đây để học viên copy nhanh.

## Mục lục

| Buổi | Topic | Prompt | File |
|------|-------|--------|------|
| **B1** | Demo Claude Code đầu tiên | 1 | [buoi-01-prompts.md](buoi-01-prompts.md) |
| **B2** | Luyện 5 Whys · Vẽ BPMN · User Story · Review SRS | 4 | [buoi-02-prompts.md](buoi-02-prompts.md) |
| **B3** | Planning · Elicit · Analyze · Validate | 4 | [buoi-03-prompts.md](buoi-03-prompts.md) |
| **B4** | Phỏng vấn role-play · Sinh câu hỏi · Tổng hợp note | 4 | [buoi-04-prompts.md](buoi-04-prompts.md) |
| **B5** | Sinh BPMN · Sinh ERD · Use Case · Story Map | 4 | [buoi-05-prompts.md](buoi-05-prompts.md) |
| **B6** | Wireframe · UI variants · User flow · UX review | 4 | [buoi-06-prompts.md](buoi-06-prompts.md) |
| **B7** | US từ wireframe · UC Spec · Sinh SRS · Test cases | 4 | [buoi-07-prompts.md](buoi-07-prompts.md) |
| **B8** | Meeting agenda · Minutes · Email follow-up · Validate | 4 | [buoi-08-prompts.md](buoi-08-prompts.md) |
| **B9** | Impact analysis · Sinh CR document | 2 | [buoi-09-prompts.md](buoi-09-prompts.md) |

**Tổng:** 31 prompts

## Nguyên tắc dùng AI tốt

### 1. Verify mọi output
AI có thể "hallucinate" — bịa thông tin không có. BA PHẢI đọc + kiểm chứng từng dòng.

### 2. Không nộp output thô
Edit ≥ 30% content. Output thô = mất uy tín nghề.

### 3. Provide context đầy đủ
Prompt tốt = context + instruction + format. Không copy generic prompt mà không tailor.

### 4. Iterative refinement
Lần 1 thường chưa hoàn hảo. Hỏi tiếp: "Mở rộng thêm A", "Đổi format sang B", "Thêm exception case C".

### 5. Note source
Trong tài liệu cuối, ghi rõ: "Section X.Y dùng AI Claude Code generate, edit bởi BA".

## Tools recommended

| Tool | URL | Khi dùng |
|------|-----|---|
| **Claude Code** | VS Code extension | Tool chính — phân tích, viết, sinh sơ đồ |
| **ChatGPT** | chatgpt.com | Brainstorm, role-play |
| **Gemini** | gemini.google.com | Research, multimodal |
| **NotebookLM** | notebooklm.google.com | Tổng hợp tài liệu, làm slide từ source |
| **v0.dev** | v0.dev | Sinh giao diện React+Tailwind từ text |
| **Figma Make** | figma.com/make | AI bên trong Figma |
| **Mermaid Live** | mermaid.live | Vẽ sơ đồ từ text Mermaid (output của AI) |

## Quy ước placeholder trong prompt

- `[TÊN DỰ ÁN]` — thay bằng tên thật
- `[VAI TRÒ]` — thay bằng role cụ thể
- `[ĐÍNH KÈM]` — upload file vào Claude/NotebookLM
- `___` — điền giá trị

---

*31 prompts · 9 buổi · Phiên bản 1.0 · 2026*
