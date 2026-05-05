# TPL-021 — Meeting Agenda Template (4 loại)

**Buổi sử dụng:** B8 (Trao đổi thông tin)
**Format gợi ý:** Markdown / Email body

## Mục đích
4 template agenda cho 4 loại meeting BA hay chủ trì — copy về điền chi tiết, gửi trước họp 24h.

---

## A. Elicitation Meeting (Họp khơi gợi yêu cầu) — 60-90 phút

```markdown
**Meeting:** Elicitation — [Tên dự án / phân hệ]
**Ngày + giờ:** ___/___/___ — __:__ → __:__  (90 phút)
**Hình thức:** ☐ In-person ☐ Online (link: ___)
**Ai tham gia:**
  - BA: ___ (chủ trì)
  - Stakeholder: ___, ___, ___
  - Tech Lead (optional): ___

**Mục tiêu meeting:**
- Hiểu pain point hiện tại của [vai trò]
- Identify 5-10 yêu cầu cốt lõi
- Confirm scope phase 1

**Agenda:**
| Phút | Nội dung | Người chủ trì |
|------|----------|---------------|
| 0-5 | Warm-up + giới thiệu lẫn nhau | BA |
| 5-15 | Bối cảnh dự án + mục tiêu meeting | BA |
| 15-50 | Phỏng vấn đào sâu (15 câu hỏi mở) — xem TPL-008 | BA + Stakeholder |
| 50-70 | Discussion + brainstorm yêu cầu | All |
| 70-85 | Tổng kết + xác nhận hiểu đúng | BA |
| 85-90 | Action items + next step | BA |

**Vật liệu cần đọc trước:**
- BRD draft (3 trang) — link
- Mockup screen hiện tại — link

**Output mong đợi:**
- Note phỏng vấn (BA viết, share trong 24h)
- List 5-10 yêu cầu mới
- Schedule next meeting (nếu cần)
```

---

## B. Walk-through Meeting (Đi qua tài liệu với dev/QA) — 45-60 phút

```markdown
**Meeting:** Walk-through SRS [Phân hệ X]
**Ngày + giờ:** ___ — 45-60 phút
**Hình thức:** Online (color screen share)
**Ai tham gia:**
  - BA: ___ (chủ trì)
  - Dev Team: ___, ___
  - QA: ___
  - UI Designer (optional): ___

**Mục tiêu:**
- Dev/QA hiểu rõ SRS section ___ (vd. UC-001 đến UC-005)
- Identify gap, ambiguity, technical risk
- Get buy-in từ team trước khi vào sprint

**Agenda:**
| Phút | Nội dung | Người |
|------|----------|-------|
| 0-5 | Recap context + scope walk-through | BA |
| 5-30 | Đi qua từng section (BA share screen, đọc + giải thích) | BA |
| 30-45 | Q&A + identify gap | All |
| 45-55 | Action item: BA fix gì, dev clarify gì, QA test gì | BA |
| 55-60 | Confirm sẵn sàng vào sprint hay cần update | All |

**Vật liệu:**
- SRS draft (đầy đủ) — link

**Output:**
- List clarification BA cần update vào SRS
- List technical risk dev raise
- List test scenarios QA propose
- Decision: Approved / Need update
```

---

## C. Sprint Review / Demo (Demo sản phẩm cuối sprint) — 30-60 phút

```markdown
**Meeting:** Sprint X Review — [Tên dự án]
**Ngày + giờ:** ___ — Cuối sprint, thường thứ 6 chiều
**Ai tham gia:**
  - PM: ___ (chủ trì meeting)
  - BA: ___ (demo + giải thích)
  - Dev Team: ___
  - QA: ___
  - Khách hàng / Sponsor: ___ (audience chính)
  - End user (optional): ___

**Mục tiêu:**
- Show kết quả sprint X
- Lấy feedback từ khách
- Confirm scope sprint X+1

**Agenda:**
| Phút | Nội dung | Người |
|------|----------|-------|
| 0-5 | Welcome + sprint goal recap | PM |
| 5-25 | Demo các tính năng đã hoàn thành (5 user stories) | BA + Dev |
| 25-40 | Q&A + feedback từ khách | Khách + Sponsor |
| 40-50 | Sprint X+1 goal + scope preview | PM + BA |
| 50-55 | Confirm + agree | All |
| 55-60 | Wrap-up | PM |

**Demo flow:**
1. US-042: Quét QR cấp phát — demo bằng Nguyễn A
2. US-043: Xem lịch sử cấp phát — demo bằng query
3. US-044: Notification email — show inbox
4. US-045: Báo cáo tồn kho — show dashboard
5. US-046: Báo hỏng thiết bị — flow đầy đủ

**Vật liệu:**
- Sprint backlog — Jira board link
- Test environment URL
- Demo data prepared

**Output:**
- Feedback log (từ khách)
- Action items (bugs, change requests)
- Sprint X+1 confirmed scope
```

---

## D. Change Request Review (Họp duyệt thay đổi) — 30-45 phút

```markdown
**Meeting:** CR-XXX Review — [Tên thay đổi]
**Ngày + giờ:** ___ — 30-45 phút
**Ai tham gia:**
  - BA: ___ (chủ trì + present)
  - Sponsor: ___
  - Tech Lead: ___
  - PM: ___

**Mục tiêu:**
- Review CR + impact analysis
- Quyết định Approve / Reject / Defer

**Agenda:**
| Phút | Nội dung | Người |
|------|----------|-------|
| 0-3 | Recap CR là gì, từ ai | BA |
| 3-10 | Mô tả thay đổi chi tiết | BA |
| 10-25 | Impact analysis (5 dimension) | BA + Tech Lead |
| 25-35 | Discussion + Q&A | All |
| 35-40 | Decision: Approve / Reject / Defer | Sponsor |
| 40-45 | Next steps + action items | BA + PM |

**Vật liệu:**
- CR-XXX document (TPL-025) — link
- Impact analysis (TPL-026) — link
- Current SRS section bị ảnh hưởng — link

**Output:**
- Decision: Approve / Reject / Defer (ghi rõ lý do)
- Action items + owner + deadline
- Updated SRS (nếu Approve)
- Communication plan (nếu Reject — báo ai)
```

---

## Tips dùng template

- **Gửi agenda 24h trước họp** — qua email + Slack
- **Đính kèm đầy đủ vật liệu cần đọc trước** — không "mang đến đọc tại chỗ"
- **Stick to time** — quá giờ = không tôn trọng time stakeholder
- **BA chủ trì meeting cần có timer** — 5p / 10p / 15p
- **Note real-time** — share screen Notion / Confluence khi họp
- **Gửi minutes (TPL-022) trong 24h sau meeting**
