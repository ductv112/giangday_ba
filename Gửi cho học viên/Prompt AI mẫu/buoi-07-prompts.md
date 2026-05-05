# Buổi 7 — Prompt Library (4 prompts)

## Prompt 1: Sinh User Story từ Wireframe

**Tool:** Claude (vision)
**Khi dùng:** Có wireframe rồi, cần document thành US

```
Đây là wireframe màn hình [TÊN MÀN] (đính kèm).

Mô tả luồng:
- User vào màn để [mục đích]
- Có thể click các action: [list buttons]
- Có 2-3 trạng thái khác nhau: [list states]

Sinh 10 User Story format As/I want/So that, kèm 3 acceptance
Given-When-Then mỗi story.

Phân loại:
- 4-5 MUST (core functionality)
- 3-4 SHOULD (important but workaround)
- 2-3 COULD (nice to have)

Output Markdown table với cột: ID | Title | Description | Acceptance | Priority.
```

---

## Prompt 2: Mở rộng 1 US thành Use Case Spec

**Tool:** Claude Code
**Khi dùng:** Cần document chi tiết 1 user story phức tạp

```
Mở rộng user story sau thành Use Case Spec đầy đủ
(theo template TPL-013):

User Story:
"[Paste US]"

Acceptance:
"[Paste acceptance criteria]"

Output Use Case Spec gồm:
- UC ID, Tên, Module, Author, Version
- Brief description
- Actor (primary + secondary)
- Pre-condition
- Trigger
- Main Flow (table: Actor làm gì | System phản hồi)
- Alternative Flow (≥ 2)
- Exception Flow (≥ 2)
- Post-condition
- Business Rule (BR-XXX)
- Non-functional Requirement
- Frequency of use
- Wireframe link placeholder
- Test scenarios (≥ 5 TC)
- Change log

Format Markdown chuẩn cho dev đọc.
```

---

## Prompt 3: Sinh draft SRS hoàn chỉnh

**Tool:** Claude Code
**Khi dùng:** Có list US + sơ đồ, cần SRS đầy đủ

```
Cho [N] user story sau cho phân hệ [TÊN] (Doanh nghiệp A):

[Paste tất cả US + acceptance]

Plus:
- ERD: [paste Mermaid hoặc đính kèm]
- BPMN chính: [paste hoặc đính kèm]
- Wireframe: [link Figma]

Sinh SRS hoàn chỉnh theo template TPL-017 (8 mục):

1. Giới thiệu (mục đích, phạm vi, định nghĩa, tài liệu tham chiếu)
2. Mô tả tổng quan (bối cảnh, chức năng chính, người dùng, ràng buộc)
3. Yêu cầu chức năng (FR-001 → FR-XXX, link với US)
4. Yêu cầu phi chức năng (NFR Performance, Security, Usability, Reliability — ≥ 10 NFR)
5. Mô hình dữ liệu (link ERD + định nghĩa entity)
6. Giao diện (link wireframe + flow màn hình)
7. Tích hợp (API, hệ thống bên ngoài)
8. Phụ lục (Glossary, Traceability matrix placeholder)

Yêu cầu:
- Mỗi requirement có ID rõ (FR-001, NFR-010)
- Tránh từ mơ hồ (đo bằng số cụ thể)
- Active voice
- Output Markdown ≥ 15 trang

Note: Đây là DRAFT — BA sẽ verify + edit sau.
```

---

## Prompt 4: Sinh Test Cases từ User Story

**Tool:** Claude Code / NotebookLM
**Khi dùng:** Có US + acceptance, cần TC chi tiết

```
Cho 5 acceptance criteria sau:

US-XXX:
"[US text]"

Acceptance 1: Given... When... Then...
Acceptance 2: ...
Acceptance 3: ...
Acceptance 4: ...
Acceptance 5: ...

Sinh 15 test cases cho US này theo format:
- TC ID (TC-XXX-NN)
- Type: positive (40%) / negative (30%) / edge case (30%)
- Pre-condition cụ thể
- Steps numbered
- Expected Result đo được

Đảm bảo:
- Cover hết 5 acceptance
- Có ít nhất 2 edge case (mất mạng, race condition)
- Có ít nhất 3 negative case (input sai, permission, not found)

Output Markdown table.
```
