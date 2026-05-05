# TPL-022 — Meeting Minutes Template

**Buổi sử dụng:** B8 (Trao đổi thông tin)
**Format gợi ý:** Markdown / Email body / Confluence
**Gửi trong:** 24 giờ sau meeting

## Mục đích
Tóm tắt meeting một cách chuẩn — ai cũng nhớ được decision + action items.

## Template

```markdown
# Minutes: [Tên meeting]

**Meeting type:** Elicitation / Walk-through / Sprint Review / CR Review
**Ngày:** DD/MM/YYYY · **Giờ:** __:__ - __:__
**Hình thức:** In-person / Online (link recording: ___)
**Note-taker:** [Tên]

## Tham gia
- ✅ Có mặt: ___, ___, ___
- ❌ Vắng: ___ (lý do nếu có)
- 👀 Optional/observer: ___

## Mục tiêu meeting (recap)
- ___
- ___

## Nội dung discussion (3-5 điểm chính)

### 1. [Topic 1]
- Discussion: ...
- Quan điểm khác nhau: ...

### 2. [Topic 2]
- ...

### 3. [Topic 3]
- ...

## Decisions (chốt)

| # | Quyết định | Lý do | Ai duyệt |
|---|-----------|-------|----------|
| 1 | Approve CR-018 | Impact thấp, fit budget | Sponsor |
| 2 | Defer US-045 sang Sprint 8 | Dependency chưa xong | PM |
| 3 | Sprint 7 scope: US-042, 043, 044 | Capacity 21 SP | All |

## Action Items

| # | Hành động | Owner | Deadline | Status |
|---|-----------|-------|----------|--------|
| 1 | Update SRS với CR-018 | BA Nguyễn A | 18/03/2026 | Open |
| 2 | Estimate US-042 chi tiết | Dev Team | 16/03/2026 | Open |
| 3 | Tạo test plan US-042 | QA | 17/03/2026 | Open |
| 4 | Schedule UAT meeting | PM | 20/03/2026 | Open |

## Open questions / parking lot

- [ ] Câu hỏi 1: API rate limit — cần check với security team
- [ ] Câu hỏi 2: License Figma cho UI Designer mới — cần xin approval

## Next meeting
- **Type:** Sprint 7 Planning
- **Khi:** 17/03/2026 — 14:00
- **Mục tiêu:** Confirm scope + estimate

---

**Sent to:** all attendees + sponsor (qua email + Confluence link)
**Recording link:** ___
**Recording transcript (AI):** ___
```

---

## Ví dụ điền — Minutes Walk-through Meeting

```markdown
# Minutes: Walk-through SRS Phân hệ Kho IT

**Meeting type:** Walk-through
**Ngày:** 14/03/2026 · **Giờ:** 14:00 - 15:00
**Hình thức:** Online (Zoom — recording: zoom.us/rec/xyz)
**Note-taker:** Nguyễn A (BA)

## Tham gia
- ✅ Có mặt: Nguyễn A (BA), Trần B (Tech Lead), Lê C (QA), Phạm D (Dev), Hoàng E (Dev)
- ❌ Vắng: UI Designer (lý do: out-of-office)

## Mục tiêu meeting
- Walk-through 5 use case: UC-005 đến UC-009
- Identify technical risk + clarification cần update

## Nội dung discussion

### 1. UC-005 Quét QR cấp phát
- BA giới thiệu flow chính + 2 alt flow (QR không tồn tại, thiết bị đang mượn)
- Tech Lead raise: cần discuss race condition khi 2 NV cùng quét — BA đồng ý add Exception flow E2
- Dev: thư viện scan QR sẽ dùng `react-qr-reader` v3 — confirmed

### 2. UC-006 Báo hỏng thiết bị
- QA hỏi: workflow approve báo hỏng có cần thiết không?
- Sponsor (qua email trước meeting) confirm: Cần — BA cần update vào SRS

### 3. UC-007, UC-008, UC-009
- Đi qua nhanh — no major concern

## Decisions

| # | Quyết định | Lý do | Ai duyệt |
|---|-----------|-------|----------|
| 1 | Add Exception flow E2 (race condition) vào UC-005 | Tech Lead raise — cần handle | BA |
| 2 | Add workflow approve cho UC-006 báo hỏng | Sponsor request | BA |
| 3 | UC-007/008/009 OK, sẵn sàng vào sprint 7 | No issue | Tech Lead |

## Action Items

| # | Hành động | Owner | Deadline | Status |
|---|-----------|-------|----------|--------|
| 1 | Update UC-005 với E2 race condition | BA | 16/03/2026 | Open |
| 2 | Update UC-006 với approval workflow | BA | 16/03/2026 | Open |
| 3 | Estimate UC-005, 006 trong Jira | Dev Team | 17/03/2026 | Open |
| 4 | Re-walkthrough UC-005, 006 (nhanh 15 phút) sau update | All | 18/03/2026 | Open |

## Open questions

- [ ] License react-qr-reader Pro vs Free — cần check với legal
- [ ] Storage ảnh báo hỏng — S3 hay local? — discuss tuần sau

## Next meeting
- **Type:** Re-walkthrough UC-005, UC-006
- **Khi:** 18/03/2026 — 14:00 (15 phút)

---

**Sent to:** all attendees + sponsor + UI Designer (catch up)
```

---

## Quy tắc viết Minutes tốt

### 1. Gửi trong 24h
- Memory mới còn fresh
- Action items clear → owner làm ngay

### 2. Tách rõ Discussion vs Decision vs Action
- Discussion = bàn bạc (có thể có đối lập)
- Decision = chốt cuối cùng (KHÔNG bàn lại)
- Action = ai làm gì, deadline rõ

### 3. Action items có 3 thứ MUST
- **Owner:** Tên cụ thể (không "team")
- **Deadline:** Ngày cụ thể (không "soon")
- **Status:** Open / In Progress / Done

### 4. KHÔNG viết minutes như script
- ❌ "BA: Tôi nghĩ rằng... QA: Tôi đồng ý nhưng..."
- ✅ "Discussion về race condition → Decision add E2"

### 5. Có recording link nếu meeting online
- Người vắng có thể xem lại
- Backup khi minutes thiếu detail

---

## Tips dùng AI viết minutes

### Workflow:
1. Record meeting (Zoom / Teams) — xin phép tham gia
2. Lấy transcript (Zoom AI Companion / Otter.ai / Notta)
3. Upload transcript vào Claude / NotebookLM
4. Prompt:

```
Đây là transcript meeting [tên] dài 45 phút (đính kèm).
Tóm tắt thành minutes format chuẩn:
- Tham gia
- Mục tiêu
- 3-5 nội dung discussion chính
- Decisions (table)
- Action items (Ai/Làm gì/Deadline/Status)
- Open questions
- Next meeting

Ngôn ngữ: Tiếng Việt, súc tích, chuyên nghiệp.
```

5. AI sinh draft trong 30 giây
6. BA review + edit (10 phút)
7. Send qua email

→ Tổng: 15 phút thay vì 1 giờ viết tay
