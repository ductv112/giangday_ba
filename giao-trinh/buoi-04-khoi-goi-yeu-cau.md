# BUỔI 04 — KHƠI GỢI YÊU CẦU (ELICITATION)

| Thuộc tính | Giá trị |
|------------|---------|
| **Thời lượng** | 2.5 giờ (150 phút) |
| **Loại buổi** | Practice — kỹ thuật + thực hành nặng |
| **Slide kèm theo** | `slides/src/decks/buoi-04/` (16 slide) |
| **Mục tiêu** | Học viên chạy được 1 buổi khơi gợi từ A-Z (5 bước), biết chọn kỹ thuật phù hợp tình huống, đặt được câu hỏi sắc, và biết dùng AI đóng vai khách hàng để luyện trước. |

---

## 1. Mục tiêu học tập (Learning Outcomes)

Sau buổi học, học viên có thể:

- [LO4.1] Mô tả được 5 bước chạy 1 buổi khơi gợi yêu cầu (Chuẩn bị → Tiến hành → Ghi chép → Tổng hợp → Validate)
- [LO4.2] Liệt kê 8 kỹ thuật khơi gợi và biết khi nào nên dùng cái nào
- [LO4.3] Áp dụng được 5 nguyên tắc phỏng vấn 1-1 trong role-play tại lớp
- [LO4.4] Phân biệt câu hỏi mở vs đóng + dùng được kỹ thuật 5 Whys
- [LO4.5] Tránh được 5 anti-pattern câu hỏi (lái, nhồi, dùng từ kỹ thuật...)
- [LO4.6] Dùng Claude Code đóng vai khách hàng để luyện phỏng vấn an toàn
- [LO4.7] Tổng hợp note phỏng vấn → user story chuẩn bằng AI

## 2. Đề cương chi tiết (theo phút)

### 2.1. Mở đầu — Hook + Agenda (15 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 0–5 | Recap Buổi 3 + check bài về nhà (Planning doc + Stakeholder map) | Slide 1 | Q&A nhanh |
| 5–10 | Hook: 70% lỗi dự án IT từ requirement sai | Slide 2 | Story-telling: kể 1 dự án thất bại vì không elicit kỹ |
| 10–15 | Agenda 4 phần | Slide 3 | Trình bày roadmap |

> **Ghi chú giảng dạy:** Đây là buổi practice nặng — học viên ngồi nghe sẽ chán. Ưu tiên role-play, demo live, thảo luận nhóm. Đặt mục tiêu cuối buổi: mỗi học viên đã từng "phỏng vấn" ít nhất 1 lần (với người bên cạnh hoặc với Claude).

### 2.2. Phần 1 — 5 bước khơi gợi (20 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 15–20 | Section divider | Slide 4 | Chuyển section |
| 20–35 | 5 bước — mỗi bước có output cụ thể | Slide 5 | Giảng + ví dụ thật mỗi bước (kể từ dự án giảng viên đã làm) |

**Điểm nhấn cần dạy:**
- Bước 1 (Chuẩn bị) là quan trọng nhất — BA fresher hay bỏ qua, đến gặp khách "tay không" → rất khó hiệu quả
- Bước 5 (Validate) bảo vệ BA khỏi tranh chấp sau này — không skip dù gấp

### 2.3. Phần 2 — 8 kỹ thuật + đào sâu 2 cái chính (45 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 35–40 | Section divider | Slide 6 | Chuyển section |
| 40–50 | 8 kỹ thuật overview với matrix khi nào dùng | Slide 7 | Giảng nhanh, focus 2 cái phải biết |
| 50–60 | Phỏng vấn 1-1 chi tiết — 5 nguyên tắc vàng | Slide 8 | Giảng + demo 1 đoạn ngắn |
| 60–70 | Hội thảo (workshop) chi tiết — 5 nguyên tắc | Slide 9 | Giảng + chia sẻ kinh nghiệm chạy workshop |
| 70–80 | 6 kỹ thuật còn lại — ưu/nhược điểm | Slide 10 | Giảng nhanh + Q&A |

**Điểm nhấn cần dạy:**
- Phỏng vấn = 80% công việc khơi gợi của BA fresher
- Workshop = kỹ thuật đắt giá nhất — chạy được 1 workshop tốt = giải quyết được mâu thuẫn 5-10 stakeholder
- Khảo sát + Đọc tài liệu = "bài tập về nhà" của BA — tự làm trước buổi gặp

### 2.4. Phần 3 — Nghệ thuật đặt câu hỏi (25 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 80–85 | Section divider | Slide 11 | Chuyển section |
| 85–105 | Câu hỏi mở vs đóng + 5 Whys + 5 anti-pattern | Slide 12 | **Hoạt động cặp đôi: thực hành 5 Whys** |

**Hoạt động cặp đôi (10 phút):**
- Chia học viên theo cặp 2 người (A và B)
- A đóng vai khách hàng, B là BA → B đặt 5 câu hỏi why về 1 tình huống ("Vì sao công ty cần app điểm danh?")
- Đổi vai
- 5 phút mỗi vòng → tổng 10 phút

### 2.5. Phần 4 — AI applied + Demo role-play (35 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 105–110 | Section divider | Slide 13 | Chuyển section |
| 110–125 | 4 prompt mẫu cho elicitation | Slide 14 | **Demo live: chạy prompt đóng vai khách hàng** |
| 125–140 | Walkthrough demo role-play với Claude Code | Slide 15 | Giảng viên thao tác trên màn hình lớp |

**Demo live (15 phút) — Claude Code đóng vai quản lý kho:**

Bước 1 — Setup vai diễn:
```
"Bạn đóng vai 1 quản lý kho IT 35 tuổi tại Doanh nghiệp A. Bạn đang dùng
Excel để quản lý 500 thiết bị (laptop, monitor, license phần mềm). Tình
trạng: hay nhầm, mất thời gian, không có audit trail. Bạn được phỏng
vấn bởi 1 BA fresher. Hãy trả lời ngắn (2-3 câu mỗi lần), có thể giấu
1-2 thông tin quan trọng để buộc BA đào sâu."
```

Bước 2 — Phỏng vấn 5 phút:
- Câu mở: "Anh/chị mô tả 1 ngày làm việc điển hình?"
- 5 Whys: "Vì sao Excel không phù hợp nữa?"
- "Pain point lớn nhất hiện tại là gì?"
- "Anh/chị mong hệ thống mới giải quyết gì?"

Bước 3 — Yêu cầu Claude tổng hợp:
```
"Dựa trên cuộc phỏng vấn vừa rồi, sinh:
1. 5 pain points chính
2. 3 yêu cầu cốt lõi
3. 5 user story format As/I want/So that"
```

→ Show output → học viên thấy ngay AI rút ngắn 50% thời gian tổng hợp note

### 2.6. Kết buổi & bài tập về nhà (10 phút)

| Phút | Nội dung | Slide | Hoạt động |
|------|----------|-------|-----------|
| 140–150 | Closing + giao bài về nhà | Slide 16 | Q&A đóng buổi |

**Bài về nhà cho Buổi 5:**
- Thực hành phỏng vấn thật: phỏng vấn 1 người thân/bạn về 1 app/web họ đang dùng (ví dụ: Grab, Shopee, Facebook)
  + 5 câu hỏi mở
  + Áp dụng 5 Whys ít nhất 1 lần
  + Note + tổng hợp 5 pain points + 3 yêu cầu cải thiện
  + Upload note + tổng hợp lên LMS
- Luyện thêm với Claude Code: role-play 1 lần với "khách hàng giả lập" + tổng hợp output

---

## 3. Bài tập thực hành trong buổi

### 3.1. Hoạt động 1 — 5 Whys cặp đôi (10 phút) — slide 12

(Chi tiết ở mục 2.4 trên)

### 3.2. Hoạt động 2 — Demo role-play giảng viên (15 phút) — slide 15

Giảng viên thao tác trên màn hình. Học viên xem + ghi chép câu hỏi hay.

### 3.3. Hoạt động 3 — Học viên tự thử với Claude Code (sau buổi)

Phát handout với prompt mẫu + checklist:
- [ ] Setup vai diễn cho Claude
- [ ] Phỏng vấn ít nhất 5 phút (5-7 câu hỏi mở)
- [ ] Áp dụng 5 Whys ít nhất 1 lần
- [ ] Yêu cầu Claude tổng hợp pain point + user story
- [ ] Lưu output upload LMS

---

## 4. Biểu mẫu / Template kèm theo

| Mã | Tên | Dùng ở buổi |
|----|-----|-------------|
| TPL-008 | Bộ câu hỏi phỏng vấn mẫu (15 câu cho 3 vai trò) | Buổi 4+ |
| TPL-009 | Note template cho buổi phỏng vấn | Buổi 4+ |
| TPL-010 | Checklist 5 anti-pattern câu hỏi cần tránh | Buổi 4+ |

---

## 5. Câu hỏi kiểm tra (Quiz / Self-check)

**Q1.** 5 bước chạy 1 buổi khơi gợi yêu cầu là gì? *(câu mở)*

**Đáp án Q1:** Chuẩn bị → Tiến hành → Ghi chép → Tổng hợp → Validate.

**Q2.** Khi cần lấy ý kiến 100 nhân viên về 1 tính năng, kỹ thuật phù hợp nhất là?
- [ ] Phỏng vấn 1-1
- [ ] Workshop
- [x] Khảo sát (Survey)
- [ ] Brainstorm

**Q3.** Quy tắc lắng nghe / nói trong phỏng vấn là?
- [ ] 50/50
- [ ] 60/40
- [x] 80/20 (lắng nghe 80%, nói 20%)
- [ ] 90/10

**Q4.** Câu nào là câu hỏi mở (open-ended)?
- [ ] "Anh có muốn tính năng X không?"
- [ ] "Hệ thống cũ chậm phải không?"
- [x] "Vì sao quy trình hiện tại tốn nhiều thời gian?"
- [ ] "Có 5 user dùng đúng chứ?"

**Q5.** 5 Whys là kỹ thuật:
- [x] Hỏi "vì sao?" 5 lần để tìm gốc rễ vấn đề
- [ ] Đặt 5 câu hỏi khác nhau cho 5 stakeholder
- [ ] Tổng hợp 5 yêu cầu chính sau phỏng vấn
- [ ] Ghi chép theo 5W (What/When/Where/Why/Who)

**Q6.** Anti-pattern câu hỏi nào sau đây BA cần tránh?
- [ ] Hỏi câu mở
- [ ] Lắng nghe rồi paraphrase
- [x] Hỏi câu lái: "Anh thấy tính năng X tốt nhỉ?"
- [ ] Note real-time

**Q7.** Trong workshop, số người tối đa nên là?
- [ ] 5 người
- [x] 8-10 người
- [ ] 15 người
- [ ] 20 người

**Q8.** AI tool nào phù hợp để đóng vai khách hàng giúp BA luyện phỏng vấn?
- [ ] v0.dev
- [ ] Mermaid
- [x] Claude Code / ChatGPT
- [ ] NotebookLM

---

## 6. Câu hỏi phỏng vấn thử (cho giảng viên hỏi cuối Buổi 11)

> Lưu sẵn ở đây để học viên có thể luyện trước.

1. "Bạn sẽ chuẩn bị như thế nào trước khi phỏng vấn 1 quản lý kho lần đầu gặp?"
2. "Khi khách hàng nói 'tôi muốn hệ thống thông minh hơn', bạn dùng kỹ thuật gì để moi thông tin cụ thể?"
3. "Trong workshop có 1 stakeholder lấn át, không cho người khác nói — BA xử lý thế nào?"
4. "Bạn sinh 5 câu hỏi mở để phỏng vấn 1 nhân viên bán hàng về quy trình chốt đơn — đọc cho tôi nghe."

---

## 7. Tài liệu tham khảo

> Quan trọng nhất là thực hành theo các buổi học. Các tài liệu dưới đây để tham khảo thêm.

**Khởi động — tiếng Việt, miễn phí:**
- Blog **BAC.vn** / **BAVietnam** — bài về kỹ thuật phỏng vấn BA
- Kênh YouTube tiếng Việt: search "Phỏng vấn BA", "5 Whys", "Workshop BA"
- Sách miễn phí: "Hỏi cho ra việc" — bản tiếng Việt 1 số chương (tự search)

**Đào sâu — sách chuyên ngành:**
- *BABOK® Guide v3.0* — IIBA — Chương 4: Elicitation & Collaboration
- *Software Requirements* — Karl Wiegers — Chương 4-7 về elicitation techniques
- *The Mom Test* — Rob Fitzpatrick — sách kinh điển về cách hỏi khách hàng

---

## 8. Ghi chú giảng viên — Checklist trước buổi

- [ ] Mở sẵn VS Code + Claude Code (test prompt role-play 1 lần để đảm bảo flow mượt)
- [ ] Chuẩn bị 1-2 story phỏng vấn thực tế thành/bại từ dự án giảng viên đã làm
- [ ] In template TPL-008 (bộ câu hỏi mẫu) + TPL-009 (note template) + TPL-010 (anti-pattern checklist)
- [ ] Chuẩn bị link LMS cho học viên upload bài về nhà
- [ ] Test slide trên trình chiếu (16:9, font ≥ 20px — đã verify)
- [ ] **Nhắc bản thân khi giảng:** mọi từ jargon (open-ended, paraphrase, facilitator, focus group, brainstorm…) lần đầu xuất hiện phải giải thích — không "thả" thuật ngữ rồi đi tiếp
- [ ] **Cảnh báo:** demo role-play với Claude Code dễ "lan man" — set timer 15 phút cho demo, không vượt

---

*Phiên bản: 1.0 — Buổi 4*
*Cập nhật cuối: 2026*
