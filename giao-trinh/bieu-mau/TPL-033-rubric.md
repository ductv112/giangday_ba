# TPL-033 — Rubric Chấm Bài Tập Cuối Khoá (100 điểm)

**Buổi sử dụng:** B11 (Bài tập cuối khoá)
**Format gợi ý:** Excel (1 sheet/học viên)

## Mục đích
Tiêu chí chấm chuẩn 100 điểm — đảm bảo công bằng + transparent với học viên.

## Pass rule
- **≥ 70/100:** Pass — đạt chứng nhận hoàn thành khoá + 36 PDU
- **50-69:** Resubmit (sửa + nộp lại trong 1 tuần)
- **< 50:** Fail — học lại

---

## Rubric chi tiết

### 1. PLANNING (10 điểm)

| Tiêu chí | Max | Excellent (full) | Good (50-80%) | Poor (< 50%) |
|----------|-----|------------------|---------------|--------------|
| Mục tiêu kinh doanh rõ + đo bằng số | 3 | KPI cụ thể (vd. giảm 50% MTBF) | KPI mơ hồ | Không có KPI |
| Stakeholder matrix Power/Interest đầy đủ | 3 | ≥ 6 stakeholder + đúng quadrant | 3-5 stakeholder | < 3 stakeholder |
| Timeline 1 tuần chi tiết theo ngày | 2 | Mỗi ngày có activity + deliverable | Có timeline nhưng vague | Không có timeline |
| Deliverable list rõ + scope | 2 | List rõ in-scope + out-of-scope | Chỉ list in-scope | Không list |

### 2. ELICITATION (15 điểm)

| Tiêu chí | Max | Excellent | Good | Poor |
|----------|-----|-----------|------|------|
| 3 buổi phỏng vấn với 3 vai trò khác nhau | 3 | Đủ 3 buổi với 3 role rõ | Có 2 buổi | < 2 buổi |
| Pain points cụ thể (≥ 3/buổi) | 3 | Pain point đo được + có quote | Pain point chung chung | Không có pain point |
| Yêu cầu nêu ra (≥ 5/buổi) | 3 | Phân loại Functional/NF + priority | Có yêu cầu nhưng vague | < 5 yêu cầu |
| AS-IS quy trình mô tả | 2 | Vẽ flow AS-IS rõ ràng | Mô tả text OK | Không có AS-IS |
| Áp dụng 5 Whys ≥ 1 lần | 2 | Đào sâu rõ root cause | Có 5 Whys nhưng nông | Không có 5 Whys |
| Quote nguyên văn (≥ 1/buổi) | 2 | Có quote + insight | Quote chung chung | Không có quote |

### 3. ANALYSIS — BPMN/ERD/UC (20 điểm)

| Tiêu chí | Max | Excellent | Good | Poor |
|----------|-----|-----------|------|------|
| ≥ 3 BPMN đúng shape | 5 | Đủ 4 hình chính + ngữ pháp đúng | 2-3 BPMN | < 2 BPMN |
| ERD đúng cardinality + ≥ 4 entity | 5 | Đầy đủ PK/FK + relationship đúng | ERD OK nhưng thiếu attribute | Sai cardinality |
| 5 Use Case Spec đầy đủ template | 5 | Đầy đủ Pre/Post + Main/Alt/Exception | Thiếu Alt hoặc Exception | Chỉ có Main flow |
| Logic + ngữ pháp đúng | 3 | Mọi sơ đồ đều logic | 1-2 chỗ sai | Nhiều chỗ sai |
| Tự vẽ (không copy từ Demo) | 2 | Hoàn toàn original | Có inspire từ Demo nhưng tự vẽ | Copy nguyên |

### 4. DESIGN — WIREFRAME (15 điểm)

| Tiêu chí | Max | Excellent | Good | Poor |
|----------|-----|-----------|------|------|
| 3-5 wireframe cho màn chính | 4 | Đủ 5 màn | 3-4 màn | < 3 màn |
| Áp dụng 6 nguyên tắc UX | 4 | Pass đủ 6 nguyên tắc | Pass 4-5 | Pass < 4 |
| Có 3 mức fidelity (low/mid/high) | 3 | Đầy đủ 3 mức | Có 2 mức | Chỉ 1 mức |
| Sử dụng v0.dev hoặc Figma | 2 | Pro tool, output clean | Tool OK | Vẽ tay sketch |
| Self-check theo TPL-015 | 2 | Tick đủ 15 mục | Tick 10-14 | Không tick |

### 5. DOCUMENTATION — SRS (25 điểm)

| Tiêu chí | Max | Excellent | Good | Poor |
|----------|-----|-----------|------|------|
| SRS đầy đủ 8 mục | 5 | Đầy đủ + format chuẩn | Thiếu 1-2 mục | Thiếu > 2 mục |
| 20 User Story chuẩn INVEST | 5 | Đủ 20 + pass 6 tiêu chí INVEST | 15-19 US | < 15 US |
| Acceptance Criteria Given-When-Then | 4 | ≥ 3/US đầy đủ | 1-2/US | Thiếu Given-When-Then |
| 50 Test Cases (positive/negative/edge) | 4 | Đủ 50 + balance 3 loại | 30-49 TC | < 30 TC |
| 7 quy tắc viết tài liệu rõ | 4 | Pass đủ 7 (có ID, mỗi câu 1 yêu cầu, không mơ hồ...) | Pass 5-6 | Pass < 5 |
| Glossary + Change log | 3 | Đầy đủ + định nghĩa rõ | Có nhưng thiếu | Không có |

### 6. TRACEABILITY (10 điểm)

| Tiêu chí | Max | Excellent | Good | Poor |
|----------|-----|-----------|------|------|
| Bảng 5 cột BR → TC đầy đủ | 5 | Đủ 5 cột + không miss link | Thiếu 1 cột | Thiếu > 1 cột |
| Coverage check pass | 3 | Mỗi BR có ≥ 1 US, mỗi US có ≥ 3 TC | Có vài orphan | Nhiều orphan |
| Format chuẩn (Excel/MD table) | 2 | Clean + filterable | OK | Lộn xộn |

### 7. AI APPLIED (5 điểm)

| Tiêu chí | Max | Excellent | Good | Poor |
|----------|-----|-----------|------|------|
| Có ≥ 4-5 prompt áp dụng | 2 | Đa dạng tools (Claude, v0, NotebookLM) | 2-3 prompt | < 2 prompt |
| Có verify output AI | 2 | Note rõ "edit gì, vì sao" | Có dùng nhưng không verify | Nộp output AI thô |
| Tài liệu cuối có note "AI nào, prompt gì" | 1 | Note rõ ràng cho mỗi deliverable | Note 1-2 chỗ | Không note |

---

## Tổng điểm

| # | Khu vực | Max | Điểm đạt |
|---|---------|-----|----------|
| 1 | Planning | 10 | __ |
| 2 | Elicitation | 15 | __ |
| 3 | Analysis | 20 | __ |
| 4 | Design | 15 | __ |
| 5 | Documentation | 25 | __ |
| 6 | Traceability | 10 | __ |
| 7 | AI Applied | 5 | __ |
| **TỔNG** | | **100** | **__** |

**Decision:**
- ☐ Pass (≥ 70) — Đạt chứng nhận
- ☐ Resubmit (50-69) — Sửa + nộp lại trong 1 tuần
- ☐ Fail (< 50) — Học lại

---

## Feedback template (cho học viên)

```markdown
# Feedback bài tập cuối khoá — [Tên học viên]

**Tổng điểm:** __/100
**Status:** Pass / Resubmit / Fail

## Điểm mạnh (3 điểm)
1. ___
2. ___
3. ___

## Cần cải thiện (3 điểm)
1. ___
2. ___
3. ___

## Action items
- [ ] (nếu Resubmit) Cần sửa: ___
- [ ] (nếu Pass) Tiếp tục phấn đấu: ___

## Lời chúc
___
```

---

## Tips chấm

- **Chấm theo rubric, không emotion** — công bằng giữa học viên
- **Note cụ thể trong feedback** — vd. "BPMN-001 thiếu end event" thay vì "BPMN cần cải thiện"
- **2 instructor chấm chéo** nếu border (68-72) — tránh sai lệch
- **Sample work xuất sắc** — public cho cả lớp học hỏi (xin permission)
