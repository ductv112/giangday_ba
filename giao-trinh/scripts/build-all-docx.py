"""Build tất cả Word templates (19 file) — generate batch.

Run: py giao-trinh/scripts/build-all-docx.py
Output: giao-trinh/bieu-mau-docx/
"""
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

from lib_docx import (
    new_doc, add_brand_header, add_title, add_h1, add_h2, add_h3,
    add_para, add_placeholder, add_bullet, add_checkbox,
    add_table_with_headers, add_meta_kv_table, add_signoff_table,
    add_footer_note, save, BRAND_RED, BRAND_DARK, TEXT_GREY,
)


# ============================================================
def build_tpl_002():
    """Project Lifecycle Canvas — 1 trang A3-style canvas."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-002', 'Buổi 1')
    add_title(doc, 'Project Lifecycle Canvas',
              'Vẽ tổng quan 1 dự án phần mềm trên 1 trang — ai, làm gì, khi nào, output là gì.')

    add_meta_kv_table(doc, [
        ('Tên dự án', '[ Điền tên dự án ]'),
        ('Ngày tạo', '__/__/____'),
        ('BA chính', '[ Tên BA ]'),
        ('PM', '[ Tên PM ]'),
        ('Sponsor', '[ Tên Sponsor ]'),
    ])

    add_h1(doc, '📌 1. Mục tiêu kinh doanh (Why)')
    for _ in range(3):
        add_placeholder(doc, 'Nêu 1 mục tiêu kinh doanh đo được (KPI cụ thể)')

    add_h1(doc, '👥 2. Stakeholder (Who)')
    add_table_with_headers(doc,
        ['Quadrant', 'Tên / Vai trò', 'Cách giao tiếp'],
        [('Quản lý sát', '[ ... ]', '[ ... ]'),
         ('Giữ hài lòng', '[ ... ]', '[ ... ]'),
         ('Giữ thông tin', '[ ... ]', '[ ... ]'),
         ('Theo dõi', '[ ... ]', '[ ... ]')])

    add_h1(doc, '⚙ 3. Phạm vi (What)')
    add_h3(doc, 'In-scope (PHẢI làm)')
    add_placeholder(doc, 'Liệt kê')
    add_h3(doc, 'Out-of-scope (KHÔNG làm)')
    add_placeholder(doc, 'Liệt kê')

    add_h1(doc, '📅 4. Timeline (When)')
    add_table_with_headers(doc,
        ['Giai đoạn', 'Bắt đầu', 'Kết thúc', 'Output cuối'],
        [('Khởi tạo', '__/__', '__/__', '[ ... ]'),
         ('Phân tích', '__/__', '__/__', '[ ... ]'),
         ('Thiết kế', '__/__', '__/__', '[ ... ]'),
         ('Phát triển', '__/__', '__/__', '[ ... ]'),
         ('Kiểm thử', '__/__', '__/__', '[ ... ]'),
         ('Triển khai', '__/__', '__/__', '[ ... ]')])

    add_h1(doc, '📦 5. Deliverable BA (Output)')
    for d in ['BRD', 'SRS', 'User Stories', 'Wireframe', 'BPMN', 'ERD', 'Use Case', 'Test Cases']:
        add_checkbox(doc, d)

    add_h1(doc, '⚠ 6. Rủi ro + Constraint')
    for _ in range(3):
        add_placeholder(doc, 'Nêu rủi ro / ràng buộc')

    add_footer_note(doc, '— TPL-002 Project Lifecycle Canvas · Khoá Ready for BA · iPMAC ·')
    out = save(doc, 'TPL-002 — Project Lifecycle Canvas (Buổi 1).docx')
    print(f'OK TPL-002: {out.name}')


# ============================================================
def build_tpl_005():
    """BA Planning Document."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-005', 'Buổi 3')
    add_title(doc, 'BA Planning Document',
              'Plan trước khi viết tài liệu lớn — 1-2 trang, không 10 trang.')

    add_meta_kv_table(doc, [
        ('Dự án / Phân hệ', '[ Điền ]'),
        ('BA', '[ Tên BA ]'),
        ('Sponsor', '[ Tên ]'),
        ('PM', '[ Tên ]'),
        ('Version', '1.0'),
        ('Date', '__/__/____'),
    ])

    add_h1(doc, '1. Mục tiêu kinh doanh')
    add_para(doc, 'Vì sao dự án có?')
    for _ in range(3):
        add_placeholder(doc, 'Mục tiêu cụ thể')
    add_para(doc, 'Đo thành công bằng:')
    add_placeholder(doc, 'KPI cụ thể đo bằng số (vd. tăng 30% conversion)')

    add_h1(doc, '2. Phạm vi (Scope)')
    add_h2(doc, 'In-scope (PHẢI LÀM)')
    add_placeholder(doc, 'Liệt kê')
    add_h2(doc, 'Out-of-scope (KHÔNG LÀM)')
    add_placeholder(doc, 'Liệt kê')

    add_h1(doc, '3. Stakeholder')
    add_table_with_headers(doc,
        ['Vai trò', 'Tên / Phòng ban', 'Power', 'Interest', 'Cách giao tiếp'],
        [('Sponsor', '[ ... ]', 'Cao', 'Cao', 'Họp tuần'),
         ('End user', '[ ... ]', 'Thấp', 'Cao', 'Demo cuối sprint'),
         ('Tech Lead', '[ ... ]', 'Cao', 'Cao', 'Daily stand-up'),
         ('Pháp chế', '[ ... ]', 'Cao', 'Thấp', 'Email update')])

    add_h1(doc, '4. Cách khơi gợi yêu cầu (Elicitation approach)')
    add_bullet(doc, 'Phỏng vấn 1-1: ___ buổi với ai?')
    add_bullet(doc, 'Workshop: ___ buổi cho nhóm nào?')
    add_bullet(doc, 'Quan sát thực tế: có cần không?')
    add_bullet(doc, 'Đọc tài liệu cũ: tài liệu nào, ở đâu?')

    add_h1(doc, '5. Deliverable (output sẽ giao)')
    for d in ['BRD', 'SRS', 'User Stories', 'Use Case Spec',
              'BPMN (sơ đồ quy trình)', 'ERD (sơ đồ dữ liệu)',
              'Wireframe / Mockup', 'Test Cases', 'Traceability matrix']:
        add_checkbox(doc, d)

    add_h1(doc, '6. Timeline + cột mốc')
    add_table_with_headers(doc,
        ['Tuần', 'Hoạt động', 'Output', 'Stakeholder'],
        [('1', 'Elicitation (3 buổi phỏng vấn)', 'Note + 5 pain points', 'KH + Sponsor'),
         ('2', 'Phân tích — vẽ sơ đồ', 'BPMN + ERD + UC', 'BA solo'),
         ('3', 'Thiết kế + viết tài liệu', 'Wireframe + SRS draft', 'BA + UI'),
         ('4', 'Validate + sign-off', 'SRS v1.0', 'Sponsor + Tech Lead')])

    add_h1(doc, '7. Rủi ro + dependency')
    for _ in range(3):
        add_placeholder(doc, '⚠ Rủi ro / dependency')

    add_h1(doc, '8. Tools sử dụng')
    add_meta_kv_table(doc, [
        ('Tài liệu', 'Confluence / Notion'),
        ('Tracking', 'Jira (project: ___)'),
        ('Vẽ sơ đồ', 'Mermaid · draw.io'),
        ('Wireframe', 'Figma · v0.dev'),
        ('Communication', 'Slack #project-___'),
    ])

    add_h1(doc, 'Sign-off')
    add_signoff_table(doc, roles=['BA', 'Sponsor'])

    add_footer_note(doc, '— TPL-005 BA Planning Document ·')
    out = save(doc, 'TPL-005 — Kế hoạch BA (Buổi 3).docx')
    print(f'OK TPL-005: {out.name}')


# ============================================================
def build_tpl_008():
    """Bộ câu hỏi phỏng vấn mẫu (15+ câu cho 3 vai trò)."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-008', 'Buổi 4')
    add_title(doc, 'Bộ câu hỏi phỏng vấn mẫu',
              '37 câu hỏi mở chuẩn cho 3 vai trò — copy về tuỳ biến theo dự án thực.')

    add_h1(doc, 'Quy tắc câu hỏi mở')
    add_para(doc, '✅ NÊN dùng:', bold=True)
    for q in ['Vì sao... ?', 'Hãy mô tả 1 ngày làm việc điển hình của anh/chị?',
              'Khó khăn lớn nhất hiện tại là gì?',
              'Anh/chị mong hệ thống mới giải quyết gì?']:
        add_bullet(doc, q)
    add_para(doc, '❌ TRÁNH (đóng / lái):', bold=True)
    for q in ['Anh có muốn tính năng X không? (đóng + lái)',
              'Chắc anh thấy hệ thống cũ chậm phải không? (lái)',
              'Có 5 user dùng đúng chứ? (đóng)']:
        add_bullet(doc, q)

    add_h1(doc, 'A. Phỏng vấn KHÁCH HÀNG / End User (15 câu)')

    add_h2(doc, 'Hiểu bối cảnh')
    for q in ['1. Hãy mô tả 1 ngày làm việc điển hình của anh/chị?',
              '2. Trong công việc hiện tại, anh/chị dùng tool/phần mềm gì?',
              '3. Quy trình hiện tại của [hoạt động X] gồm những bước nào?']:
        add_bullet(doc, q)

    add_h2(doc, 'Đào sâu pain point (5 Whys)')
    for q in ['4. Phần nào của công việc anh/chị thấy mất nhiều thời gian nhất?',
              '5. Vì sao phần đó tốn thời gian? (why 1)',
              '6. Vì sao... [tiếp tục why 2,3,4,5]',
              '7. Nếu có 1 phép màu xoá đi 1 vấn đề — anh/chị muốn xoá vấn đề gì?']:
        add_bullet(doc, q)

    add_h2(doc, 'Tìm hiểu kỳ vọng')
    for q in ['8. Anh/chị mong hệ thống mới giúp được điều gì?',
              '9. Hệ thống lý tưởng — anh/chị tưởng tượng nó hoạt động ra sao?',
              '10. So với cách làm hiện tại, anh/chị muốn cải thiện 3 thứ gì?']:
        add_bullet(doc, q)

    add_h2(doc, 'Validate & Bonus')
    for q in ['11. Nếu chỉ có 1 tính năng — anh/chị muốn tính năng nào nhất?',
              '12. Anh/chị có thể mô tả lại điều tôi vừa hiểu để xác nhận không?',
              '13. Có ai khác trong team mà tôi nên trao đổi không?',
              '14. Có tài liệu/báo cáo cũ nào tôi nên đọc trước không?',
              '15. Khi nào tôi có thể quay lại nếu có thêm câu hỏi?']:
        add_bullet(doc, q)

    add_h1(doc, 'B. Phỏng vấn QUẢN LÝ / Sponsor (12 câu)')

    add_h2(doc, 'Mục tiêu kinh doanh')
    for q in ['1. Vì sao công ty quyết định triển khai dự án này?',
              '2. Đo "thành công" của dự án bằng số gì? (KPI cụ thể)',
              '3. Trong 6-12 tháng, kỳ vọng dự án mang lại điều gì?']:
        add_bullet(doc, q)

    add_h2(doc, 'Constraint + risk')
    for q in ['4. Budget cho dự án trong khoảng nào?',
              '5. Deadline khi nào? Điều gì xảy ra nếu chậm?',
              '6. Có ràng buộc kỹ thuật / pháp lý nào không?']:
        add_bullet(doc, q)

    add_h2(doc, 'Stakeholder + Scope')
    for q in ['7. Ai là người chịu trách nhiệm cao nhất của dự án này?',
              '8. Có ai trong tổ chức KHÔNG ủng hộ dự án không? Vì sao?',
              '9. 3 tính năng quan trọng nhất là gì?',
              '10. Có cái gì NHẤT ĐỊNH không nên làm trong phase 1?']:
        add_bullet(doc, q)

    add_h2(doc, 'Sign-off')
    for q in ['11. Quy trình duyệt deliverable BA ra sao?',
              '12. Khi nào tôi có thể demo bản đầu cho anh/chị?']:
        add_bullet(doc, q)

    add_h1(doc, 'C. Phỏng vấn TECH LEAD / Dev (10 câu)')
    for q in ['1. Hệ thống tích hợp với những hệ thống nào hiện có?',
              '2. Database hiện tại là gì? Có cần migrate không?',
              '3. API nào cần expose? Format JSON / SOAP / GraphQL?',
              '4. Team đang dùng tech stack gì (frontend / backend / mobile)?',
              '5. Sprint dài bao nhiêu tuần? Velocity team trung bình?',
              '6. Có resource đặc biệt cần xin trước (DevOps / DBA / SecOps)?',
              '7. 3 thứ technically risky nhất là gì?',
              '8. Có thư viện/framework nào team chưa từng dùng?',
              '9. Format tài liệu BA mà dev preferred (BRD / SRS / US / Jira)?',
              '10. Tần suất sync BA-Dev (daily / weekly)?']:
        add_bullet(doc, q)

    add_h1(doc, 'Tips dùng template')
    for tip in ['Custom theo domain — Banking khác EdTech khác Healthcare',
                'In giấy mang đi phỏng vấn — giữ eye contact tốt hơn laptop',
                'Tránh hỏi tuần tự robot — dùng câu hỏi như guide',
                'Lắng nghe 80% / nói 20%',
                'Ghi âm có phép — tổng hợp với AI sau (xem prompt B4)']:
        add_bullet(doc, tip)

    add_footer_note(doc, '— TPL-008 Bộ câu hỏi phỏng vấn ·')
    out = save(doc, 'TPL-008 — Bộ câu hỏi phỏng vấn (Buổi 4).docx')
    print(f'OK TPL-008: {out.name}')


# ============================================================
def build_tpl_009():
    """Note phỏng vấn — form fillable."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-009', 'Buổi 4')
    add_title(doc, 'Note phỏng vấn',
              'Template note real-time + bổ sung sau phỏng vấn (≤ 24h).')

    add_meta_kv_table(doc, [
        ('Người được phỏng vấn', '[ Tên + Vai trò ]'),
        ('Dự án', '[ Tên dự án ]'),
        ('Ngày + giờ', '__/__/____ — __:__ → __:__'),
        ('Người phỏng vấn (BA)', '[ Tên ]'),
        ('Note-taker', '[ Tên — nếu khác BA ]'),
        ('Hình thức', '☐ In-person   ☐ Online   ☐ Phone'),
        ('Recording', '☐ Có (link: ___)   ☐ Không'),
        ('Status', '☐ Draft   ☐ Reviewed   ☐ Sent to interviewee'),
    ])

    add_h1(doc, '1. Bối cảnh người được phỏng vấn')
    add_meta_kv_table(doc, [
        ('Vai trò chính', '[ ... ]'),
        ('Phòng ban', '[ ... ]'),
        ('Số năm kinh nghiệm', '[ ... ]'),
        ('Quan hệ với dự án', '☐ User   ☐ Sponsor   ☐ Approver   ☐ Khác'),
    ])

    add_h1(doc, '2. Pain points phát hiện')
    add_table_with_headers(doc,
        ['#', 'Pain point', 'Tần suất', 'Ảnh hưởng', 'Quote nguyên văn'],
        [(str(i + 1), '[ ... ]', '☐ Hàng ngày  ☐ Tuần  ☐ Tháng',
          '☐ Thấp  ☐ TB  ☐ Cao', '"..."') for i in range(5)])

    add_h1(doc, '3. Yêu cầu / kỳ vọng nêu ra')
    add_table_with_headers(doc,
        ['#', 'Yêu cầu', 'Loại', 'Ưu tiên', 'Mâu thuẫn với ai'],
        [(str(i + 1), '[ ... ]', '☐ Functional ☐ NF',
          '☐ MUST ☐ SHOULD ☐ COULD', '[ ... ]') for i in range(5)])

    add_h1(doc, '4. Quy trình hiện tại (AS-IS)')
    for _ in range(7):
        add_placeholder(doc, 'Bước ___:')

    add_h1(doc, '5. Insight / quote đáng nhớ')
    add_placeholder(doc, '> "Câu nói nguyên văn hay/quan trọng nhất"')

    add_h1(doc, '6. Câu hỏi mở (chưa kịp hỏi / cần hỏi tiếp)')
    for _ in range(5):
        add_checkbox(doc, '___')

    add_h1(doc, '7. Action item')
    add_table_with_headers(doc,
        ['Ai', 'Làm gì', 'Deadline'],
        [('BA', 'Tổng hợp pain point + share', '__/__'),
         ('BA', 'Schedule follow-up', '__/__'),
         ('Họ', 'Gửi tài liệu cũ X', '__/__')])

    add_h1(doc, '8. Validate (paraphrase cuối buổi)')
    add_placeholder(doc, '"Tôi vừa nghe anh/chị nói... — đúng không ạ?"')
    add_para(doc, 'Confirm: ☐ Họ đồng ý   ☐ Cần làm rõ thêm')

    add_h2(doc, 'Next step')
    add_placeholder(doc, '___')

    add_footer_note(doc, '— TPL-009 Note phỏng vấn ·')
    out = save(doc, 'TPL-009 — Note phỏng vấn (Buổi 4).docx')
    print(f'OK TPL-009: {out.name}')


# ============================================================
def build_tpl_010():
    """Anti-pattern câu hỏi cần tránh."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-010', 'Buổi 4')
    add_title(doc, 'Anti-pattern câu hỏi BA cần tránh',
              '5 lỗi câu hỏi BA fresher hay mắc — checklist tự kiểm trước phỏng vấn.')

    patterns = [
        ('1. Câu hỏi LÁI (Leading question)',
         'Đã gợi ý câu trả lời trong câu hỏi → khách trả lời theo ý mình, không phải sự thật.',
         '❌ "Anh thấy hệ thống cũ chậm phải không?"',
         '✅ "Anh thấy hệ thống hiện tại có điểm nào hài lòng / chưa hài lòng?"'),
        ('2. Câu hỏi ĐÓNG (Closed) khi cần MỞ',
         'Yes/No → không moi được context, pain point thật.',
         '❌ "Anh có dùng Excel không?"',
         '✅ "Hãy mô tả công cụ anh dùng cho việc đó?"'),
        ('3. Câu hỏi KÉP (Compound)',
         '2-3 câu hỏi trong 1 → khách chỉ trả lời 1 phần, BỎ phần còn lại.',
         '❌ "Anh dùng app này thường xuyên không và thấy có gì khó dùng và mong cải tiến gì?"',
         '✅ Tách thành 3 câu hỏi riêng — đợi trả lời từng câu.'),
        ('4. Dùng JARGON kỹ thuật',
         'Khách "ậm ừ" cho qua, không thực sự hiểu.',
         '❌ "Anh có muốn integrate với CRM qua REST API không?"',
         '✅ "Anh có muốn hệ thống nói chuyện với phần mềm CRM hiện tại để dữ liệu đồng bộ không?"'),
        ('5. KHÔNG paraphrase + validate',
         'Hiểu A, khách nói B → BA viết spec sai → dev code sai.',
         '❌ Nghe xong, gật đầu, đi tiếp.',
         '✅ "Để tôi xác nhận lại — anh muốn ABC vì XYZ, đúng không ạ?"'),
    ]
    for title, problem, bad, good in patterns:
        add_h1(doc, title)
        add_para(doc, 'Vấn đề:', bold=True)
        add_para(doc, problem)
        add_para(doc, bad)
        add_para(doc, good)

    add_h1(doc, 'Checklist tự kiểm trước phỏng vấn')
    for item in [
        'Tôi có chuẩn bị 15-20 câu hỏi MỞ chưa?',
        'Tôi đã review câu hỏi để loại bỏ "có/không" / "phải không"?',
        'Tôi đã loại bỏ jargon kỹ thuật?',
        'Tôi có plan để paraphrase + validate cuối mỗi pain point?',
        'Tôi có giấy + bút (note real-time) hoặc xin phép record?',
        'Tôi có đặt timer để không phỏng vấn quá 60 phút?',
    ]:
        add_checkbox(doc, item)

    add_h1(doc, 'Bài tập tự luyện')
    for t in [
        'Lấy 1 câu hỏi anti-pattern bất kỳ → viết lại theo format đúng',
        'Role-play với Claude Code — luyện hỏi đúng (xem prompt B4)',
        'Phỏng vấn 1 người thân → record → nghe lại → đếm anti-pattern mắc',
    ]:
        add_bullet(doc, t)

    add_footer_note(doc, '— TPL-010 Anti-pattern câu hỏi ·')
    out = save(doc, 'TPL-010 — Anti-pattern câu hỏi (Buổi 4).docx')
    print(f'OK TPL-010: {out.name}')


# ============================================================
def build_tpl_011():
    """BPMN cheat sheet."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-011', 'Buổi 5')
    add_title(doc, 'BPMN Cheat Sheet',
              '4 hình BPMN cốt lõi — đủ vẽ 90% sơ đồ quy trình.')

    add_h1(doc, 'BPMN là gì?')
    add_para(doc, 'BPMN = Business Process Model and Notation = Sơ đồ quy trình nghiệp vụ chuẩn quốc tế.')
    add_para(doc, 'Mục đích: vẽ quy trình → dev/khách/QA cùng hiểu một cách → giảm 80% hiểu nhầm.')

    add_h1(doc, '4 hình cơ bản')

    add_h2(doc, '1. Sự kiện (Event) — Vòng tròn')
    add_table_with_headers(doc,
        ['Ký hiệu', 'Tên', 'Ý nghĩa'],
        [('○', 'Start', 'Bắt đầu quy trình'),
         ('◎', 'Intermediate', 'Sự kiện giữa quy trình (timer, message...)'),
         ('●', 'End', 'Kết thúc quy trình')])

    add_h2(doc, '2. Công việc (Task) — Hình chữ nhật bo tròn')
    add_para(doc, 'Quy ước: tên công việc dạng động từ + danh từ — vd. "Xác nhận đơn hàng", "Gửi email"')

    add_h2(doc, '3. Cổng (Gateway) — Hình thoi (kim cương)')
    add_table_with_headers(doc,
        ['Ký hiệu', 'Tên', 'Ý nghĩa'],
        [('◇', 'OR exclusive', 'Chỉ chọn 1 nhánh'),
         ('◇+', 'Parallel', 'Chạy đồng thời cả 2 nhánh'),
         ('◇O', 'Inclusive', 'Có thể chạy 1 hoặc nhiều nhánh')])

    add_h2(doc, '4. Luồng (Flow) — Mũi tên')
    add_table_with_headers(doc,
        ['Ký hiệu', 'Tên', 'Khi nào dùng'],
        [('A → B', 'Sequence flow', 'Thường gặp nhất'),
         ('A ⇢ B', 'Message flow', 'Giao tiếp giữa lane'),
         ('A — B', 'Association', 'Liên kết với artifact')])

    add_h1(doc, 'Lane / Pool — chia trách nhiệm theo vai trò')
    add_para(doc, 'Mỗi vai trò = 1 Lane. Tất cả Lane trong cùng Pool = 1 quy trình end-to-end.')

    add_h1(doc, 'Ví dụ Mermaid syntax — Đặt lịch sửa chữa')
    p = doc.add_paragraph()
    r = p.add_run("""flowchart TD
    Start([Bắt đầu]) --> A[KH chọn dịch vụ]
    A --> B[KH chọn ngày giờ]
    B --> C{Còn thợ rảnh?}
    C -- Có --> D[Tìm thợ trong 2km]
    C -- Không --> E[Đề xuất ngày khác]
    E --> B
    D --> F[Thợ confirm trong 5 phút?]
    F -- Có --> G[Tạo booking]
    F -- Không --> D
    G --> H[Gửi email cho KH]
    H --> End([Kết thúc])""")
    r.font.name = 'Consolas'
    r.font.size = Pt(10)
    add_para(doc, '→ Copy code trên paste vào mermaid.live — sinh sơ đồ ngay.', italic=True, color=TEXT_GREY)

    add_h1(doc, 'Quy tắc vẽ BPMN tốt')
    for rule in [
        'Trái sang phải, hoặc trên xuống dưới — không vẽ lung tung',
        'Mỗi flow = 1 happy path + các nhánh exception',
        'Đặt tên cụ thể — "Process payment" thay vì "Step 5"',
        'Gateway luôn có label trên nhánh — "Yes/No", "≥ 1tr / < 1tr"',
        'End event rõ ràng — không để dangling arrow',
    ]:
        add_bullet(doc, rule)

    add_h1(doc, 'Tools recommended')
    add_table_with_headers(doc,
        ['Tool', 'Free?', 'Khi nào dùng'],
        [('mermaid.live', '✅', 'Vẽ nhanh bằng text — share qua chat/Confluence'),
         ('draw.io / diagrams.net', '✅', 'Vẽ kéo-thả chuyên nghiệp'),
         ('BPMN.io', '✅', 'BPMN đúng chuẩn 2.0'),
         ('Lucidchart', 'Pro', 'Team collaboration realtime')])

    add_footer_note(doc, '— TPL-011 BPMN Cheat Sheet ·')
    out = save(doc, 'TPL-011 — BPMN Cheat Sheet (Buổi 5).docx')
    print(f'OK TPL-011: {out.name}')


# ============================================================
def build_tpl_012():
    """ERD reference + cardinality."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-012', 'Buổi 5')
    add_title(doc, 'ERD Template + Cardinality Reference',
              'Sơ đồ thực thể-quan hệ (Entity-Relationship Diagram) — vẽ structure database.')

    add_h1(doc, 'ERD là gì?')
    add_para(doc, 'ERD = Entity-Relationship Diagram = Sơ đồ thực thể-quan hệ.')
    add_para(doc, 'Mục đích: vẽ các bảng dữ liệu + mối quan hệ giữa chúng → dev biết cách thiết kế DB.')

    add_h1(doc, '3 thành phần cốt lõi')

    add_h2(doc, '1. Entity (Thực thể) — bảng dữ liệu')
    add_para(doc, 'Quy ước: Entity name = danh từ, viết PascalCase hoặc snake_case.')

    add_h2(doc, '2. Attribute (Thuộc tính) — cột trong bảng')
    add_table_with_headers(doc,
        ['Loại', 'Ý nghĩa', 'Ký hiệu'],
        [('PK (Primary Key)', 'Khoá chính, unique', 'gạch chân hoặc (PK)'),
         ('FK (Foreign Key)', 'Khoá ngoại, link đến entity khác', '(FK)'),
         ('Required', 'Bắt buộc, NOT NULL', '(*) hoặc bold')])

    add_h2(doc, '3. Relationship (Quan hệ) — đường nối giữa entity')
    add_table_with_headers(doc,
        ['Cardinality', 'Ký hiệu', 'Ví dụ'],
        [('1 — 1', '|—|', '1 KH có 1 profile'),
         ('1 — N', '|—<', '1 KH có nhiều đơn hàng'),
         ('N — N', '>—<', '1 SV học nhiều môn, 1 môn có nhiều SV'),
         ('0..1', 'o—', '1 KH có thể có 0 hoặc 1 thẻ VIP'),
         ('0..N', 'o—<', '1 SP có 0 hoặc nhiều review')])

    add_h1(doc, 'Ví dụ Mermaid — Đặt lịch sửa chữa')
    p = doc.add_paragraph()
    r = p.add_run("""erDiagram
    KHACH_HANG ||--o{ DON_DAT_LICH : "đặt"
    THO ||--o{ DON_DAT_LICH : "nhận"
    DICH_VU ||--o{ DON_DAT_LICH : "thuộc về"
    DON_DAT_LICH ||--|| HOA_DON : "tạo"

    KHACH_HANG {
        int id PK
        string ho_ten
        string email
        string sdt
    }
    DON_DAT_LICH {
        int id PK
        int khach_hang_id FK
        int tho_id FK
        datetime ngay_dat
        string trang_thai
    }""")
    r.font.name = 'Consolas'
    r.font.size = Pt(10)
    add_para(doc, '→ Paste vào mermaid.live → sinh ERD ngay.', italic=True, color=TEXT_GREY)

    add_h1(doc, 'Template trống — fill cho dự án của bạn')
    p = doc.add_paragraph()
    r = p.add_run("""erDiagram
    ENTITY_A ||--o{ ENTITY_B : "verb mô tả quan hệ"

    ENTITY_A {
        int id PK
        string field_1
    }
    ENTITY_B {
        int id PK
        int entity_a_id FK
    }""")
    r.font.name = 'Consolas'
    r.font.size = Pt(10)

    add_h1(doc, 'Quy tắc vẽ ERD tốt')
    for rule in [
        'Entity name = danh từ số ít — KHACH_HANG không phải KHACH_HANGS',
        'Mỗi entity ≥ 1 PK — id auto-increment hoặc UUID',
        'N-N quan hệ → tạo bảng trung gian',
        'Đặt tên FK rõ — khach_hang_id không phải kh_id',
        'Verb trên relationship line — "đặt", "thuộc về"',
        'Không vẽ quá 15 entity / 1 sơ đồ',
    ]:
        add_bullet(doc, rule)

    add_footer_note(doc, '— TPL-012 ERD Reference ·')
    out = save(doc, 'TPL-012 — ERD Sơ đồ dữ liệu (Buổi 5).docx')
    print(f'OK TPL-012: {out.name}')


# ============================================================
def build_tpl_013():
    """Use Case Specification template."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-013', 'Buổi 5')
    add_title(doc, 'Use Case Specification',
              'Template chi tiết cho 1 ca sử dụng — dev đọc xong code được ngay.')

    add_meta_kv_table(doc, [
        ('UC ID', '[ UC-001 ]'),
        ('Tên', '[ Verb + Noun, vd. "Đặt lịch sửa chữa" ]'),
        ('Module', '[ Tên phân hệ ]'),
        ('Author', '[ Tên BA ]'),
        ('Version', '1.0'),
        ('Last update', '__/__/____'),
        ('Status', '☐ Draft   ☐ Reviewed   ☐ Approved'),
    ])

    add_h1(doc, '1. Mô tả ngắn (Brief description)')
    add_placeholder(doc, '2-3 câu mô tả use case này làm gì')

    add_h1(doc, '2. Actor')
    add_h2(doc, 'Primary actor (chính)')
    add_placeholder(doc, '[ Vai trò chính — vd. "Khách hàng" ]')
    add_h2(doc, 'Secondary actor (phụ)')
    add_placeholder(doc, '[ Vai trò phụ — vd. "Hệ thống thanh toán" ]')

    add_h1(doc, '3. Pre-condition (Điều kiện trước)')
    add_para(doc, 'Trạng thái BẮT BUỘC PHẢI ĐÚNG trước khi UC bắt đầu:')
    for _ in range(3):
        add_placeholder(doc, '...')

    add_h1(doc, '4. Trigger (Sự kiện kích hoạt)')
    add_placeholder(doc, '[ Hành động cụ thể nào start UC? ]')

    add_h1(doc, '5. Main Flow (Luồng chính — happy path)')
    add_table_with_headers(doc,
        ['#', 'Actor làm gì', 'Hệ thống phản hồi'],
        [(str(i + 1), '[ ... ]', '[ ... ]') for i in range(5)])

    add_h1(doc, '6. Alternative Flow (Luồng phụ)')
    for i in range(2):
        add_h3(doc, f'A{i + 1}. [ Tên alt flow ]')
        add_placeholder(doc, 'Mô tả các bước thay thế')

    add_h1(doc, '7. Exception Flow (Trường hợp ngoại lệ)')
    for i in range(2):
        add_h3(doc, f'E{i + 1}. [ Tên exception ]')
        add_placeholder(doc, 'Mô tả handle exception')

    add_h1(doc, '8. Post-condition (Điều kiện sau khi thành công)')
    for _ in range(3):
        add_placeholder(doc, '...')

    add_h1(doc, '9. Business Rule liên quan')
    for _ in range(3):
        add_placeholder(doc, 'BR-XXX: ...')

    add_h1(doc, '10. Non-functional Requirement')
    for label in ['Performance:', 'Security:', 'Usability:']:
        add_para(doc, label, bold=True)
        add_placeholder(doc, '...')

    add_h1(doc, '11. Frequency of use')
    add_placeholder(doc, '[ ~XXX lượt/ngày — peak: ___ ]')

    add_h1(doc, '12. Wireframe / Mockup tham chiếu')
    for _ in range(3):
        add_placeholder(doc, 'Màn hình ___: [ link Figma ]')

    add_h1(doc, '13. Test scenarios chính')
    for _ in range(5):
        add_placeholder(doc, 'TC-___: ...')

    add_h1(doc, '14. Change log')
    add_table_with_headers(doc,
        ['Version', 'Ngày', 'Người', 'Thay đổi'],
        [('1.0', '__/__/____', '[ Tên BA ]', 'Bản đầu')])

    add_footer_note(doc, '— TPL-013 Use Case Specification ·')
    out = save(doc, 'TPL-013 — Use Case Spec (Buổi 5).docx')
    print(f'OK TPL-013: {out.name}')


# ============================================================
def build_tpl_015():
    """Wireframe checklist 15 mục."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-015', 'Buổi 6')
    add_title(doc, 'Wireframe Checklist — 15 mục',
              'Tự kiểm wireframe trước khi gửi UI Designer hoặc validate khách.')

    add_h1(doc, 'A. Cấu trúc cơ bản (5 mục)')
    for item in [
        '1. Mỗi màn hình có MỘT mục tiêu rõ ràng',
        '2. Header có title + breadcrumb',
        '3. Có CTA chính (Call To Action) nổi bật',
        '4. Có cách thoát rõ ràng — Cancel / Back / Close',
        '5. Layout responsive cho cả Mobile + Web (nếu cần)',
    ]:
        add_checkbox(doc, item)

    add_h1(doc, 'B. UX cốt lõi (5 mục — theo Buổi 6)')
    for item in [
        '6. Rõ ràng > đẹp — người không hiểu công nghệ vẫn dùng được',
        '7. Quy ước trước, sáng tạo sau — Icon kính lúp = search, X = đóng',
        '8. Có phản hồi tức thì — click button → loading / toast',
        '9. Lỗi giúp người dùng sửa — "Email chưa đúng định dạng. Ví dụ: abc@gmail.com"',
        '10. Có Empty State — khi data rỗng, hướng dẫn bước đầu',
    ]:
        add_checkbox(doc, item)

    add_h1(doc, 'C. Nội dung & data (3 mục)')
    for item in [
        '11. Tất cả copy text bằng tiếng Việt chuẩn — không "Lorem ipsum"',
        '12. Form có placeholder rõ + validation visible',
        '13. Số liệu/data hiển thị có format Việt — Tiền 1.500.000đ',
    ]:
        add_checkbox(doc, item)

    add_h1(doc, 'D. Mobile-specific (2 mục — nếu là mobile)')
    for item in [
        '14. Touch target ≥ 44px — nút bấm đủ to cho ngón tay',
        '15. Không nhồi form dài 1 màn — chia wizard nhiều bước',
    ]:
        add_checkbox(doc, item)

    add_h1(doc, 'Mở rộng (nâng cao — không bắt buộc)')
    for item in [
        'Contrast ratio ≥ 4.5:1 (text vs background)',
        'Có alt text cho ảnh',
        'Keyboard navigation works (Tab, Enter)',
        'Skeleton loading thay vì spinner trắng',
        'Lazy load image dưới fold',
        'Pagination thay vì infinite scroll cho list lớn',
        'Dùng đúng brand color (primary, secondary, accent)',
        'Dùng đúng font system',
        'Icon style nhất quán (filled vs outline — đừng mix)',
    ]:
        add_checkbox(doc, item)

    add_h1(doc, 'Cách dùng checklist')
    for step in [
        'Sau khi vẽ wireframe xong: tự đi qua 15 mục, tick từng mục',
        'Mục nào CHƯA OK → fix ngay',
        'Mục nào N/A → ghi chú lý do',
        'Trước khi gửi UI Designer: send wireframe + checklist đã tick',
        'Trước demo với khách: tick xong toàn checklist, focus mục 1, 6, 9, 10',
    ]:
        add_bullet(doc, step)

    add_h2(doc, 'Tổng kết tự đánh giá')
    add_meta_kv_table(doc, [
        ('Pass / 15 mục bắt buộc', '___/15'),
        ('Cần fix gấp', '[ ... ]'),
        ('Cần fix sau (low priority)', '[ ... ]'),
        ('Sẵn sàng gửi UI Designer?', '☐ Yes   ☐ No, cần fix'),
    ])

    add_footer_note(doc, '— TPL-015 Wireframe Checklist ·')
    out = save(doc, 'TPL-015 — Wireframe Checklist 15 mục (Buổi 6).docx')
    print(f'OK TPL-015: {out.name}')


# ============================================================
def build_tpl_018():
    """User Story + INVEST checklist."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-018', 'Buổi 7')
    add_title(doc, 'User Story Template + INVEST Checklist',
              'Format chuẩn viết User Story + 6 tiêu chí INVEST tự kiểm.')

    add_h1(doc, 'Format chuẩn')
    p = doc.add_paragraph()
    r = p.add_run("""US-[ID]: [Tên ngắn của story]

Là [vai trò],
tôi muốn [tính năng / hành động],
để [lợi ích / kết quả].

Acceptance Criteria:
- Given [bối cảnh],
  When [hành động],
  Then [kết quả mong đợi].

Priority: MUST / SHOULD / COULD / WON'T
Story points: 1, 2, 3, 5, 8 (Fibonacci)
Sprint: __
Tags: [phân hệ], [feature group]""")
    r.font.name = 'Consolas'
    r.font.size = Pt(10)

    add_h1(doc, 'INVEST Checklist (6 tiêu chí)')
    invest = [
        ('I — Independent (Độc lập)',
         'Story KHÔNG phụ thuộc story khác để start work'),
        ('N — Negotiable (Thương lượng được)',
         'Detail có thể điều chỉnh giữa BA + dev + khách'),
        ('V — Valuable (Có giá trị)',
         'Mang lại lợi ích cụ thể cho user / business'),
        ('E — Estimable (Ước lượng được)',
         'Dev đủ thông tin để estimate (giờ / story point)'),
        ('S — Small (Đủ nhỏ)',
         'Làm xong trong 1 sprint (≤ 2 tuần)'),
        ('T — Testable (Test được)',
         'Có Acceptance Criteria Given-When-Then rõ'),
    ]
    for letter, desc in invest:
        add_h2(doc, letter)
        add_para(doc, desc)
        add_checkbox(doc, 'Story này pass tiêu chí trên')

    add_h1(doc, '5 Anti-pattern User Story thường gặp')
    for ap in [
        '"Tôi cần tính năng X" — thiếu lý do',
        'Tech-speak trong story user-facing — "Tôi muốn API trả JSON"',
        'Quá rộng / vague — "Là user, tôi muốn dùng app dễ hơn"',
        'Mix nhiều story trong 1',
        'Acceptance không testable — "App phải đẹp và thân thiện"',
    ]:
        add_bullet(doc, ap)

    add_h1(doc, 'Bảng User Story để fill')
    add_table_with_headers(doc,
        ['ID', 'User Story', 'Acceptance', 'Priority', 'Points', 'Sprint'],
        [(f'US-{i:03d}', '[ Là... tôi muốn... để... ]',
          '[ Given... When... Then... ]', '[ MUST/SHOULD/COULD ]', '[ 1-8 ]', '[ __ ]')
         for i in range(1, 11)])

    add_h1(doc, 'Ví dụ — US-042 chuẩn')
    p = doc.add_paragraph()
    r = p.add_run("""US-042: Quét QR cấp phát thiết bị

Là nhân viên kho IT,
tôi muốn quét QR code thiết bị + chọn người nhận,
để cấp phát laptop nhanh hơn 10× so với tra Excel.

Acceptance Criteria:
1. Given tôi đã đăng nhập với role "Nhân viên kho",
   When tôi quét QR code hợp lệ + chọn người nhận trong dropdown,
   Then hệ thống tạo bản ghi cấp phát + gửi email xác nhận trong 10 giây.

2. Given tôi quét QR code không tồn tại trong hệ thống,
   When sau khi quét,
   Then hiển thị thông báo lỗi "QR không hợp lệ. Vui lòng kiểm tra lại."

3. Given thiết bị đã được cấp phát cho người khác,
   When tôi quét QR thiết bị đó,
   Then hiển thị "Thiết bị đang được [tên người] mượn từ [ngày]..."

Priority: MUST · Points: 5 · Sprint: 7 · Tags: kho-it, qr-scan""")
    r.font.name = 'Consolas'
    r.font.size = Pt(10)

    add_footer_note(doc, '— TPL-018 User Story Template ·')
    out = save(doc, 'TPL-018 — User Story chuẩn INVEST (Buổi 7).docx')
    print(f'OK TPL-018: {out.name}')


# ============================================================
def build_tpl_020():
    """Glossary template."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-020', 'Buổi 7')
    add_title(doc, 'Glossary — Bảng thuật ngữ',
              'Định nghĩa thuật ngữ chuyên ngành — dev/QA/khách hiểu thống nhất.')

    add_h1(doc, 'Bảng Glossary')
    add_table_with_headers(doc,
        ['#', 'Thuật ngữ', 'Viết tắt', 'Định nghĩa', 'Ghi chú'],
        [(str(i), f'[ Thuật ngữ {i} ]', '[ ABC ]',
          '[ Định nghĩa ngắn gọn ]', '[ ... ]') for i in range(1, 16)])

    add_h1(doc, 'Ví dụ Glossary đầy đủ — Hệ thống đặt lịch')
    add_table_with_headers(doc,
        ['#', 'Thuật ngữ', 'Viết tắt', 'Định nghĩa'],
        [(1, 'Booking', '-', '1 lượt đặt lịch của KH, có ID dạng BK-YYYYMMDD-NNNN'),
         (2, 'OTP', 'OTP', 'One-Time Password — mã 6 số có thời hạn 5 phút'),
         (3, 'Match', '-', 'Quá trình hệ thống chọn thợ phù hợp dựa trên khoảng cách + kỹ năng'),
         (4, 'NPS', 'NPS', 'Net Promoter Score — chỉ số đo sự hài lòng KH (0-10)'),
         (5, 'Geofence', '-', 'Bán kính địa lý quanh 1 điểm — default 5 km'),
         (6, 'UAT', 'UAT', 'User Acceptance Test — kiểm thử bởi người dùng cuối')])

    add_h1(doc, 'Quy tắc viết Glossary tốt')
    for rule in [
        'Định nghĩa NGẮN GỌN, dễ hiểu — không dài + không tech',
        'Định nghĩa thuật ngữ DOMAIN, không phải GENERAL IT',
        'Có Ghi chú cho các trường hợp đặc biệt',
        'Nhóm theo alphabet HOẶC theo nhóm logic',
        'Update mỗi khi thêm thuật ngữ mới',
    ]:
        add_bullet(doc, rule)

    add_h1(doc, 'Khi tài liệu LARGE (>50 trang) — chia Glossary')
    for sub in [
        'A.1 — Business Glossary (kinh doanh): Booking, NPS, Service Catalog…',
        'A.2 — Technical Glossary (kỹ thuật): OTP, SSO, JWT, Geofence…',
        'A.3 — User Roles: Customer, Technician, Admin, Operator…',
    ]:
        add_bullet(doc, sub)

    add_footer_note(doc, '— TPL-020 Glossary ·')
    out = save(doc, 'TPL-020 — Glossary thuật ngữ (Buổi 7).docx')
    print(f'OK TPL-020: {out.name}')


# ============================================================
def build_tpl_021():
    """Meeting agenda — 4 templates."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-021', 'Buổi 8')
    add_title(doc, 'Meeting Agenda — 4 templates',
              '4 template agenda cho 4 loại meeting BA hay chủ trì.')

    templates = [
        ('A. Elicitation Meeting (Họp khơi gợi yêu cầu) — 60-90 phút',
         'Hiểu pain point, identify yêu cầu cốt lõi, confirm scope phase 1',
         [('0-5', 'Warm-up + giới thiệu', 'BA'),
          ('5-15', 'Bối cảnh dự án + mục tiêu meeting', 'BA'),
          ('15-50', 'Phỏng vấn đào sâu (15 câu hỏi mở — TPL-008)', 'BA + Stakeholder'),
          ('50-70', 'Discussion + brainstorm yêu cầu', 'All'),
          ('70-85', 'Tổng kết + xác nhận hiểu đúng', 'BA'),
          ('85-90', 'Action items + next step', 'BA')]),
        ('B. Walk-through Meeting — 45-60 phút',
         'Dev/QA hiểu rõ SRS, identify gap + technical risk, get buy-in',
         [('0-5', 'Recap context + scope', 'BA'),
          ('5-30', 'Đi qua từng section SRS (BA share screen)', 'BA'),
          ('30-45', 'Q&A + identify gap', 'All'),
          ('45-55', 'Action item: BA fix gì, dev clarify gì', 'BA'),
          ('55-60', 'Confirm sẵn sàng vào sprint', 'All')]),
        ('C. Sprint Review / Demo — 30-60 phút',
         'Show kết quả sprint, lấy feedback từ khách, confirm sprint sau',
         [('0-5', 'Welcome + sprint goal recap', 'PM'),
          ('5-25', 'Demo các tính năng đã hoàn thành', 'BA + Dev'),
          ('25-40', 'Q&A + feedback từ khách', 'Khách + Sponsor'),
          ('40-50', 'Sprint sau goal + scope preview', 'PM + BA'),
          ('50-55', 'Confirm + agree', 'All'),
          ('55-60', 'Wrap-up', 'PM')]),
        ('D. Change Request Review — 30-45 phút',
         'Review CR + impact analysis, quyết định Approve / Reject / Defer',
         [('0-3', 'Recap CR là gì, từ ai', 'BA'),
          ('3-10', 'Mô tả thay đổi chi tiết', 'BA'),
          ('10-25', 'Impact analysis (5 dimension — TPL-026)', 'BA + Tech Lead'),
          ('25-35', 'Discussion + Q&A', 'All'),
          ('35-40', 'Decision: Approve / Reject / Defer', 'Sponsor'),
          ('40-45', 'Next steps + action items', 'BA + PM')]),
    ]

    for title, goal, agenda_rows in templates:
        add_h1(doc, title)
        add_para(doc, f'Mục tiêu: {goal}', italic=True, color=TEXT_GREY)
        add_meta_kv_table(doc, [
            ('Ngày + giờ', '__/__/____ — __:__'),
            ('Hình thức', '☐ In-person   ☐ Online (link: ___)'),
            ('Tham gia', '[ Liệt kê ]'),
        ])
        add_h2(doc, 'Agenda')
        add_table_with_headers(doc, ['Phút', 'Nội dung', 'Người chủ trì'], agenda_rows)

    add_h1(doc, 'Tips dùng template')
    for tip in [
        'Gửi agenda 24h trước họp — qua email + Slack',
        'Đính kèm vật liệu cần đọc trước',
        'Stick to time — quá giờ = không tôn trọng stakeholder',
        'BA chủ trì cần có timer — 5p/10p/15p',
        'Note real-time trên Notion/Confluence',
        'Gửi minutes (TPL-022) trong 24h sau meeting',
    ]:
        add_bullet(doc, tip)

    add_footer_note(doc, '— TPL-021 Meeting Agenda ·')
    out = save(doc, 'TPL-021 — Meeting Agenda 4 loại (Buổi 8).docx')
    print(f'OK TPL-021: {out.name}')


# ============================================================
def build_tpl_022():
    """Meeting Minutes."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-022', 'Buổi 8')
    add_title(doc, 'Meeting Minutes',
              'Tóm tắt meeting chuẩn — gửi trong 24h sau meeting.')

    add_meta_kv_table(doc, [
        ('Meeting type', '☐ Elicitation  ☐ Walk-through  ☐ Sprint Review  ☐ CR Review'),
        ('Ngày', '__/__/____'),
        ('Giờ', '__:__ — __:__'),
        ('Hình thức', '☐ In-person   ☐ Online (link recording: ___)'),
        ('Note-taker', '[ Tên ]'),
    ])

    add_h1(doc, '1. Tham gia')
    add_h2(doc, '✅ Có mặt')
    add_placeholder(doc, 'Liệt kê')
    add_h2(doc, '❌ Vắng (lý do nếu có)')
    add_placeholder(doc, 'Liệt kê')
    add_h2(doc, '👀 Optional/observer')
    add_placeholder(doc, 'Liệt kê')

    add_h1(doc, '2. Mục tiêu meeting')
    for _ in range(3):
        add_placeholder(doc, '...')

    add_h1(doc, '3. Discussion (3-5 điểm chính)')
    for i in range(1, 6):
        add_h2(doc, f'{i}. [ Topic ]')
        add_placeholder(doc, 'Discussion + quan điểm khác nhau (nếu có)')

    add_h1(doc, '4. Decisions (chốt)')
    add_table_with_headers(doc,
        ['#', 'Quyết định', 'Lý do', 'Ai duyệt'],
        [(str(i + 1), '[ ... ]', '[ ... ]', '[ ... ]') for i in range(5)])

    add_h1(doc, '5. Action Items')
    add_table_with_headers(doc,
        ['#', 'Hành động', 'Owner', 'Deadline', 'Status'],
        [(str(i + 1), '[ ... ]', '[ ... ]', '__/__', '☐ Open  ☐ In Progress  ☐ Done')
         for i in range(8)])

    add_h1(doc, '6. Open questions / parking lot')
    for _ in range(5):
        add_checkbox(doc, '___')

    add_h1(doc, '7. Next meeting')
    add_meta_kv_table(doc, [
        ('Type', '[ ... ]'),
        ('Khi', '__/__/____ — __:__'),
        ('Mục tiêu', '[ ... ]'),
    ])

    add_para(doc, 'Sent to: [ all attendees + sponsor ]')
    add_para(doc, 'Recording link: [ ... ]')
    add_para(doc, 'Recording transcript (AI): [ ... ]')

    add_footer_note(doc, '— TPL-022 Meeting Minutes ·')
    out = save(doc, 'TPL-022 — Meeting Minutes (Buổi 8).docx')
    print(f'OK TPL-022: {out.name}')


# ============================================================
def build_tpl_024():
    """Sign-off form."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-024', 'Buổi 8')
    add_title(doc, 'SIGN-OFF FORM',
              'Văn bản chính thức xác nhận stakeholder đồng ý với deliverable BA.')

    add_meta_kv_table(doc, [
        ('Document type', '☐ SRS  ☐ UAT Result  ☐ CR Approval  ☐ Project Closure'),
        ('Document ID', '[ ... ]'),
        ('Date', '__/__/____'),
        ('Project', '[ Tên dự án ]'),
        ('Module', '[ Tên phân hệ ]'),
        ('Version', '1.0'),
    ])

    add_h1(doc, '1. Phạm vi sign-off')
    add_para(doc, 'Tôi/chúng tôi đã đọc và xác nhận tài liệu sau:')
    add_meta_kv_table(doc, [
        ('Tên tài liệu', '[ vd. SRS — Phân hệ Kho IT ]'),
        ('Version', '1.0'),
        ('Ngày phát hành', '__/__/____'),
        ('Tổng trang', '___ trang'),
        ('Link tài liệu', '[ Confluence / Drive ]'),
    ])

    add_h1(doc, '2. Nội dung đồng ý')
    add_para(doc, 'Bằng việc ký dưới đây, tôi xác nhận:')
    for item in [
        'Đã đọc đầy đủ tài liệu',
        'Hiểu rõ phạm vi (in-scope + out-of-scope)',
        'Hiểu rõ deliverable + timeline',
        'Đồng ý với các yêu cầu chức năng (FR-001 → FR-XXX)',
        'Đồng ý với các yêu cầu phi chức năng (NFR-001 → NFR-XXX)',
        'Đồng ý budget + resource cho phase này',
        'Hiểu các giả định + ràng buộc nêu trong tài liệu',
    ]:
        add_checkbox(doc, item)

    add_h1(doc, '3. Comments / Conditions (nếu có)')
    add_para(doc, '☐ Sign-off vô điều kiện')
    add_para(doc, '☐ Sign-off có điều kiện sau:')
    for _ in range(3):
        add_placeholder(doc, 'Điều kiện ___:')

    add_h1(doc, '4. Sign-off')
    add_signoff_table(doc, roles=['Sponsor', 'BA Lead', 'Tech Lead', 'QA Lead', 'PM'])

    add_h1(doc, '5. Distribution')
    add_para(doc, 'Bản sign-off này được gửi tới:')
    for _ in range(5):
        add_placeholder(doc, '...')
    add_para(doc, 'Lưu trữ tại: [ Confluence link / SharePoint ]', italic=True, color=TEXT_GREY)

    add_para(doc, '\nLưu ý: Bất kỳ thay đổi nào sau sign-off này phải đi qua quy trình Change Request (TPL-025).',
             italic=True, color=BRAND_RED)

    add_footer_note(doc, '— TPL-024 Sign-off Form ·')
    out = save(doc, 'TPL-024 — Sign-off Form (Buổi 8).docx')
    print(f'OK TPL-024: {out.name}')


# ============================================================
def build_tpl_025():
    """Change Request form."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-025', 'Buổi 9')
    add_title(doc, 'Change Request — CR-XXX',
              'Văn bản chính thức cho mọi thay đổi yêu cầu sau sign-off.')

    add_meta_kv_table(doc, [
        ('CR ID', '[ CR-018 ]'),
        ('Date', '__/__/____'),
        ('Status', '☐ Draft  ☐ Reviewed  ☐ Approved  ☐ Rejected  ☐ Implemented'),
        ('Project', '[ Tên dự án ]'),
        ('Module', '[ Phân hệ ]'),
        ('Requested by', '[ Tên + role ]'),
        ('Priority', '☐ Critical  ☐ High  ☐ Medium  ☐ Low'),
        ('Type', '☐ Functional  ☐ NF  ☐ Bug-fix  ☐ Scope addition'),
    ])

    add_h1(doc, '1. Mô tả thay đổi (What)')
    add_h2(doc, '1.1. As-is — Yêu cầu hiện tại')
    add_placeholder(doc, '[ Quote nguyên văn từ SRS — FR-XXX hoặc US-XXX ]')
    add_h2(doc, '1.2. To-be — Thay đổi đề xuất')
    add_placeholder(doc, '[ Mô tả mới ]')
    add_h2(doc, '1.3. Diff cụ thể')
    add_para(doc, 'Thêm:')
    add_placeholder(doc, '...')
    add_para(doc, 'Sửa:')
    add_placeholder(doc, '...')
    add_para(doc, 'Xoá:')
    add_placeholder(doc, '...')

    add_h1(doc, '2. Lý do thay đổi (Why)')
    add_para(doc, 'Stakeholder phải giải thích — KHÔNG accept "tôi nghĩ tốt hơn"')
    for _ in range(3):
        add_placeholder(doc, 'Lý do ___:')
    add_placeholder(doc, 'Bằng chứng (data, user feedback, regulation): ...')

    add_h1(doc, '3. Impact Analysis')
    add_para(doc, 'Sử dụng TPL-026 — phân tích 5 dimension chi tiết.')
    add_para(doc, 'Tóm tắt:')
    add_meta_kv_table(doc, [
        ('📄 Tài liệu bị ảnh hưởng', '[ ... ]'),
        ('💻 Code estimate', '[ ___ giờ dev ]'),
        ('📅 Schedule impact', '[ +___ ngày ]'),
        ('💰 Budget impact', '[ ___ triệu ]'),
        ('⚠ Risk level', '☐ Low  ☐ Medium  ☐ High'),
    ])

    add_h1(doc, '4. Recommendation')
    add_para(doc, 'BA recommend: ☐ Approve   ☐ Reject   ☐ Defer')
    add_placeholder(doc, 'Lý do recommend: ...')

    add_h1(doc, '5. Approval Matrix')
    add_table_with_headers(doc,
        ['CR Size', 'Ai duyệt'],
        [('Nhỏ (≤ 1 ngày dev)', 'BA + Tech Lead (24h)'),
         ('Trung bình (2-5 ngày dev)', 'PM + BA Lead + Tech Lead (3 ngày)'),
         ('Lớn (> 5 ngày dev, ảnh hưởng kiến trúc)', 'Sponsor + CTO + Steering (1 tuần)')])

    add_h1(doc, '6. Decision')
    add_table_with_headers(doc,
        ['Vai trò', 'Tên', 'Decision', 'Ngày', 'Note'],
        [('Sponsor', '', '☐ Approve  ☐ Reject  ☐ Defer', '__/__', ''),
         ('Tech Lead', '', '☐ Approve  ☐ Reject  ☐ Defer', '__/__', ''),
         ('BA Lead', '', '☐ Approve  ☐ Reject  ☐ Defer', '__/__', ''),
         ('PM', '', '☐ Approve  ☐ Reject  ☐ Defer', '__/__', '')])

    add_para(doc, 'Final Decision: ☐ APPROVED   ☐ REJECTED   ☐ DEFERRED to ___', bold=True)

    add_h1(doc, '7. Implementation Plan (nếu Approved)')
    add_table_with_headers(doc,
        ['#', 'Action', 'Owner', 'Deadline'],
        [(str(i + 1), '[ ... ]', '[ ... ]', '__/__') for i in range(5)])

    add_h1(doc, '8. Communication')
    for item in [
        'Notify dev team',
        'Notify QA team',
        'Update Confluence page',
        'Update Jira tickets với label "CR-018"',
        'Email to stakeholder list',
    ]:
        add_checkbox(doc, item)

    add_footer_note(doc, '— TPL-025 Change Request ·')
    out = save(doc, 'TPL-025 — Change Request (Buổi 9).docx')
    print(f'OK TPL-025: {out.name}')


# ============================================================
def build_tpl_029():
    """Onboarding 30/60/90 plan."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-029', 'Buổi 10')
    add_title(doc, 'Onboarding 30/60/90 Day Plan',
              'Plan rõ mục tiêu cho 3 cột mốc — không bị "trôi" trong 3 tháng đầu.')

    add_meta_kv_table(doc, [
        ('Tên', '[ Họ tên ]'),
        ('Vai trò', 'BA Junior'),
        ('Công ty', '[ Tên công ty ]'),
        ('Ngày bắt đầu', '__/__/____'),
        ('Manager', '[ Tên ]'),
        ('Mentor', '[ Tên ]'),
    ])

    phases = [
        ('30 ngày đầu — MỤC TIÊU: HỌC',
         'Manager kỳ vọng: "Em hiểu context — chưa cần deliver gì lớn."',
         [
             'Setup môi trường (VS Code, Claude Code, Jira, Slack, Confluence)',
             'Tự intro với 10-15 người trong team mở rộng',
             'Đọc 3 tài liệu cũ (BRD/SRS hiện tại)',
             'Gặp manager 1-1 (TPL-031 — 6 câu hỏi vàng)',
             'Schedule 1-1 với mentor (1 lần/tuần)',
             'Hiểu domain công ty (sản phẩm, KH, đối thủ)',
             'Học workflow team (Jira/Confluence/Slack)',
             'Tham dự 5-7 meeting (im lặng quan sát)',
             'Reflection: viết note "đã học được gì"',
         ],
         [
             'Hiểu được product company làm gì (giải thích trong 1 phút)',
             'Biết tên + role 15+ người trong organization',
             'Đọc được 8-10 tài liệu BA + tóm tắt',
             'Có sketch về workflow team trong đầu',
         ]),
        ('60 ngày — MỤC TIÊU: LÀM ĐƯỢC',
         'Manager kỳ vọng: "Em đã contribute được — vẫn cần mentor cover."',
         [
             'Tham gia 1 phân hệ nhỏ với mentor',
             'Viết User Story đầu tiên — submit cho mentor review',
             'Iterate đến khi US được approve',
             'Chủ trì 1 meeting nhỏ (refinement / walk-through ngắn)',
             'Đóng góp ý tưởng cải thiện 1 quy trình team',
             'Build relationship với 2-3 dev / QA',
         ],
         [
             'Viết được 5-10 User Story chuẩn INVEST',
             'Vẽ được 2-3 BPMN cho phân hệ đang làm',
             'Chủ trì ≥ 1 meeting (15-30 phút)',
             'Có 2-3 dev/QA "quen mặt"',
         ]),
        ('90 ngày — MỤC TIÊU: CHỦ ĐỘNG',
         'Manager kỳ vọng: "Em đã thành thành viên đáng tin cậy."',
         [
             'Phụ trách 1 phân hệ độc lập (BA "lead" 1 module)',
             'Viết SRS hoàn chỉnh cho phân hệ đó',
             'Validate spec với khách hàng (qua manager / mentor)',
             'Xử lý 1 Change Request từ A-Z (có manager review)',
             'Demo sản phẩm với stakeholder cuối sprint',
             'Probation Review: self-review + manager review',
         ],
         [
             'Viết được SRS hoàn chỉnh (≥ 15 trang)',
             'Phụ trách ≥ 1 phân hệ độc lập từ analysis → validate',
             'Đã handle 1 Change Request thành công',
             'Pass probation — chuyển full-time',
         ]),
    ]

    for title, exp, todos, kpis in phases:
        add_h1(doc, title)
        add_para(doc, exp, italic=True, color=TEXT_GREY)
        add_h2(doc, 'Todo')
        for t in todos:
            add_checkbox(doc, t)
        add_h2(doc, 'KPI')
        for k in kpis:
            add_checkbox(doc, k)

    add_h1(doc, 'Track progress (weekly)')
    add_table_with_headers(doc,
        ['Tuần', 'Done', 'Blockers', 'Help needed'],
        [(str(i + 1), '', '', '') for i in range(13)])

    add_footer_note(doc, '— TPL-029 Onboarding 30/60/90 Plan ·')
    out = save(doc, 'TPL-029 — Onboarding 30-60-90 ngày (Buổi 10).docx')
    print(f'OK TPL-029: {out.name}')


# ============================================================
def build_tpl_030():
    """First week checklist 5 ngày."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-030', 'Buổi 10')
    add_title(doc, 'Tuần đầu — Checklist 5 ngày',
              'Lịch chi tiết tuần đầu — không trôi mất 1 ngày nào.')

    add_meta_kv_table(doc, [
        ('Tên', '[ Họ tên ]'),
        ('Công ty', '[ Tên công ty ]'),
        ('Ngày bắt đầu', '__/__/____'),
    ])

    days = [
        ('NGÀY 1 — Setup + Chào hỏi',
         {
             'Buổi sáng (8h-12h)': [
                 'Đến công ty đúng giờ (sớm 15 phút)',
                 'HR onboarding (giấy tờ, badge, laptop)',
                 'Setup laptop: VS Code, Claude Code, Slack/Teams',
                 'Setup laptop: Email công ty, VPN',
                 'Setup laptop: Trình duyệt + bookmark internal tools',
                 'Ăn trưa với team (đừng ăn 1 mình)',
             ],
             'Buổi chiều (13h-17h)': [
                 'Manager 1-1 đầu tiên (30-60 phút)',
                 'Hỏi: kỳ vọng 30/60/90, kênh báo cáo, tools',
                 'Tự intro với team (Slack post / standup)',
                 'Hiểu org chart (vẽ ra giấy)',
                 'Tour văn phòng (toilet, pantry, meeting room)',
                 'Ngày 1 reflection: "Hôm nay học được gì?"',
             ],
         }),
        ('NGÀY 2 — Đọc + Hỏi',
         {
             'Buổi sáng': [
                 'Setup tools còn lại: Jira (request access)',
                 'Setup tools còn lại: Confluence, Figma, DB client',
                 'Đọc 1 BRD',
                 'Đọc 1 SRS (gần nhất)',
                 'Đọc 1 Confluence wiki onboarding',
             ],
             'Buổi chiều': [
                 'List 20 câu hỏi (TPL-031)',
                 'Schedule mentor 1-1 (chiều mai hoặc thứ 6)',
                 'Tham dự 1 meeting (im lặng quan sát)',
             ],
         }),
        ('NGÀY 3 — Quan sát meeting',
         {
             'Buổi sáng': [
                 'Tham dự daily stand-up (im lặng, note format)',
                 'Đọc thêm tài liệu (mỗi ngày 2-3 file)',
                 'Note câu hỏi thắc mắc',
             ],
             'Buổi chiều': [
                 'Tham dự 1-2 meeting nữa',
                 'Mentor 1-1 (đặt 5-10 câu hỏi từ list 20 câu)',
                 'Hỏi mentor: "Pattern viết tài liệu team đang theo?"',
             ],
         }),
        ('NGÀY 4 — Hiểu workflow',
         {
             'Buổi sáng': [
                 'Đi qua workflow Jira chuẩn (status, transition)',
                 'Tự tạo 1 ticket test (low-priority hoặc tài liệu)',
                 'Học format SRS team đang dùng',
             ],
             'Buổi chiều': [
                 'Sit-with 1 dev (30 phút) — quan sát họ làm việc',
                 'Sit-with 1 QA (30 phút) — hiểu test workflow',
                 'Hỏi dev/QA câu hỏi từ TPL-031',
             ],
         }),
        ('NGÀY 5 — Đề xuất 1-1 với manager',
         {
             'Buổi sáng': [
                 'Tham dự sprint review (nếu có) hoặc retrospective',
                 'Note observations về team dynamics',
             ],
             'Buổi chiều': [
                 'Manager 1-1 (cuối tuần)',
                 'Confirm hiểu đúng kỳ vọng 30/60/90',
                 'Hỏi success metrics + resource available',
                 'Đề xuất kế hoạch tuần 2',
                 'Tổng kết tuần 1: viết note 1 trang',
                 'Chia sẻ note với mentor + manager',
             ],
         }),
    ]

    for day_title, sessions in days:
        add_h1(doc, day_title)
        for session_title, items in sessions.items():
            add_h2(doc, session_title)
            for item in items:
                add_checkbox(doc, item)

    add_h1(doc, 'Sample reflection note cuối tuần 1')
    for h, content in [
        ('Đã học được', '[ Liệt kê 3-5 thứ ]'),
        ('Đã gặp ai', '[ Tên + role ]'),
        ('Đã đọc', '[ Tài liệu ]'),
        ('Câu hỏi còn lại', '[ ... ]'),
        ('Plan tuần 2', '[ ... ]'),
    ]:
        add_h2(doc, h)
        add_placeholder(doc, content)

    add_footer_note(doc, '— TPL-030 Tuần đầu Checklist ·')
    out = save(doc, 'TPL-030 — Tuần đầu Checklist (Buổi 10).docx')
    print(f'OK TPL-030: {out.name}')


# ============================================================
def build_tpl_031():
    """20 câu hỏi vàng cho onboarding."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-031', 'Buổi 10')
    add_title(doc, '20 câu hỏi vàng cho Onboarding',
              'Hỏi đúng câu = học nhanh × 5 — printable mang đi 1-1.')

    sections = [
        ('A. 6 câu hỏi với MANAGER (1-1 đầu tiên — ngày 1 hoặc cuối tuần 1)',
         [('Kỳ vọng cụ thể 30/60/90 ngày là gì?',
           'Ghi xuống cụ thể, dùng làm thước đo tự đánh giá.'),
          ('Em báo cáo qua kênh nào? Tần suất?',
           'Setup recurring slot ngay (vd. mỗi thứ 6 chiều).'),
          ('Đo "thành công" trong vai trò bằng số gì?',
           'Nếu manager không có metrics → đề xuất 3 metrics.'),
          ('Có mentor / buddy không?',
           'Mentor formal (assigned) tốt hơn mentor informal.'),
          ('3 thứ ưu tiên cao nhất quý này là gì?',
           'Nhớ 3 thứ này — ưu tiên work liên quan.'),
          ('Probation review khi nào, format ra sao?',
           'Đặt reminder calendar cho ngày probation.')]),
        ('B. 6 câu hỏi với MENTOR (1-1 thứ 2-3, sau khi đã đọc tài liệu)',
         [('Tài liệu nào em PHẢI đọc 2 tuần đầu?',
           'Mentor sẽ chỉ tài liệu vàng — chỉ 5-10/100.'),
          ('Workflow team thực tế (vs lý thuyết) ra sao?',
           'Hiểu shortcuts hợp lý + traps cần tránh.'),
          ('3 lỗi BA mới hay mắc ở team mình?',
           'Học từ lỗi người khác — đỡ tự mắc.'),
          ('Stakeholder nào "khó tính" cần lưu ý?',
           'Đừng share lại với người khác — confidential.'),
          ('Pattern viết tài liệu team đang theo?',
           'Xin sample tài liệu "đã được khen" để imitate.'),
          ('Em có thể nhờ help việc gì không ngại?',
           'Set expectation rõ. Respect mentor time.')]),
        ('C. 6 câu hỏi với TEAM (Dev / QA / Designer — sit-with)',
         [('Bạn thường gặp khó gì với tài liệu BA?',
           'Học từ pain point của dev/QA — viết tài liệu họ thích đọc.'),
          ('Format US bạn thấy dễ làm việc nhất?',
           'Hỏi cả dev senior + junior — quan điểm khác nhau.'),
          ('Có gì BA nên / không nên làm khi sprint?',
           'Helps build relationship sớm.'),
          ('Ngôn ngữ kỹ thuật nào team dùng nhiều?',
           'List ra → tự Google + học buổi tối.'),
          ('Tools team đang dùng (CI/CD/repo) ở đâu?',
           'Xin access read-only nếu có thể.'),
          ('Tôi support được gì cho công việc bạn?',
           'Khi BA help dev → dev sẽ help lại khi BA cần.')]),
    ]

    for section_title, qa_pairs in sections:
        add_h1(doc, section_title)
        for q, why in qa_pairs:
            add_h2(doc, q)
            add_para(doc, f'Vì sao hỏi: {why}', italic=True, color=TEXT_GREY)
            add_para(doc, 'Note answer:', bold=True)
            add_placeholder(doc, '___')

    add_h1(doc, 'Bonus — 2 câu hỏi với END USER (nếu có cơ hội)')
    for q in [
        'Bạn dùng app/hệ thống thường xuyên không? Có gì khó dùng?',
        'Có tính năng nào bạn ước có nhưng chưa có?',
    ]:
        add_bullet(doc, q)

    add_h1(doc, 'Tips dùng template')
    for tip in [
        'In câu hỏi ra giấy hoặc note Markdown',
        'Mark câu nào urgent (priority 1-2-3)',
        'Time box: 15 phút cho 5 câu hỏi',
        'Hỏi 1 câu → lắng nghe → paraphrase → hỏi tiếp',
        'KHÔNG đọc câu hỏi như robot — flow naturally',
        'Trong 24h: viết lại note đầy đủ',
        'Thank you message qua Slack/email sau 1-1',
    ]:
        add_bullet(doc, tip)

    add_footer_note(doc, '— TPL-031 20 câu hỏi vàng ·')
    out = save(doc, 'TPL-031 — 20 câu hỏi vàng Onboarding (Buổi 10).docx')
    print(f'OK TPL-031: {out.name}')


# ============================================================
def build_tpl_032():
    """Đề bài cuối khoá."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-032', 'Buổi 11')
    add_title(doc, 'Đề bài cuối khoá Ready for BA',
              'Bài tập tổng hợp 10 buổi đã học — 1 case thực, 6 deliverable.')

    add_h1(doc, '🎯 Bối cảnh giả định')
    add_para(doc,
        'Bạn vừa nhận offer BA Junior tại Doanh nghiệp A — công ty công nghệ ~500 nhân viên, '
        'đang triển khai bộ ERP đa phân hệ.', italic=True)
    add_para(doc,
        'Manager giao bạn phụ trách phân hệ "Bảo trì hệ thống IT" — module xử lý '
        'bảo trì server, hệ thống IT, thiết bị mạng cho toàn doanh nghiệp.')
    add_para(doc, 'Yêu cầu: Phân tích A-Z, viết đầy đủ tài liệu, sẵn sàng bàn giao dev. Deadline: 1 tuần.', bold=True)

    add_h1(doc, '📋 6 Deliverable cần nộp')
    deliverables = [
        ('1. Planning Doc (1-2 trang)', 'TPL-005',
         'Mục tiêu kinh doanh · Stakeholder + Power/Interest · Deliverable · Timeline 1 tuần'),
        ('2. Note phỏng vấn 3 buổi', 'TPL-009',
         '3 stakeholder giả lập với Claude Code role-play (Quản lý IT / KTV bảo trì / NV báo sự cố)'),
        ('3. Sơ đồ Analysis', 'TPL-011, TPL-012, TPL-013',
         '≥ 3 BPMN · 1 ERD ≥ 4 entity · 5 Use Case Spec đầy đủ'),
        ('4. Wireframe (3-5 màn)', 'TPL-015',
         'Sinh bằng v0.dev hoặc Figma. Self-check theo 15 mục TPL-015.'),
        ('5. SRS hoàn chỉnh', 'TPL-017',
         '≥ 15 trang theo template 8 mục · 20 User Story chuẩn INVEST · 50 Test Cases'),
        ('6. Traceability Matrix', 'TPL-027',
         'Bảng 5 cột BR → US → FR → UC → TC, đầy đủ link'),
    ]
    for d, tpl, desc in deliverables:
        add_h2(doc, d)
        add_para(doc, f'Sử dụng: {tpl}', bold=True)
        add_para(doc, desc)

    add_h1(doc, '⚠ Quy tắc + Lưu ý')
    add_h2(doc, 'Sử dụng AI')
    for item in [
        '✅ Khuyến khích dùng AI (Claude Code, ChatGPT, v0.dev, NotebookLM)',
        '⚠ Verify từng output — không nộp output thô',
        '⚠ Tail mỗi deliverable: ghi rõ "Đã dùng AI nào, prompt gì"',
    ]:
        add_bullet(doc, item)

    add_h2(doc, 'Reference Demo')
    for item in [
        'Có thể chạy D:/GiangDay/Demo/demo-baotri (port 5180) để hiểu module hiện tại',
        'Có thể đọc CLAUDE.md trong demo để hiểu domain',
        'KHÔNG được copy spec trong demo — phải tự phân tích lại',
    ]:
        add_bullet(doc, item)

    add_h2(doc, 'Submission')
    add_meta_kv_table(doc, [
        ('Tổng tài liệu', '~30-50 trang'),
        ('Format file', '1 ZIP gồm 6 deliverable + 1 PDF tổng hợp'),
        ('Đặt tên', 'BAITAP-CK-[HoTen]-[Ngay].zip'),
        ('Upload', 'LMS + CC instructor'),
        ('Deadline', 'cuối tuần sau Buổi 11'),
    ])

    add_h1(doc, '🏆 Đánh giá')
    add_table_with_headers(doc,
        ['Khu vực', 'Điểm tối đa', 'Tham chiếu rubric'],
        [('Planning', '10', 'TPL-033 Section 1'),
         ('Elicitation', '15', 'TPL-033 Section 2'),
         ('Analysis (BPMN/ERD/UC)', '20', 'TPL-033 Section 3'),
         ('Design (Wireframe)', '15', 'TPL-033 Section 4'),
         ('Documentation (SRS)', '25', 'TPL-033 Section 5'),
         ('Traceability', '10', 'TPL-033 Section 6'),
         ('AI Applied', '5', 'TPL-033 Section 7'),
         ('TỔNG', '100', '')])

    add_para(doc, 'Pass ≥ 70/100 = đạt chứng nhận hoàn thành khoá iPMAC + 36 PDU đủ điều kiện thi ECBA.', bold=True, color=BRAND_RED)

    add_h1(doc, '💡 Tips để pass cao')
    for tip in [
        'Đầu tư Planning sớm (ngày 1-2)',
        'Phỏng vấn AI thật — đừng skip',
        'Vẽ sơ đồ trước, viết SRS sau',
        'AI sinh draft → bạn EDIT (≥ 30% content)',
        'Self-check theo TPL-023 trước khi nộp',
        'Xin feedback từ 1 bạn cùng khoá trước khi nộp',
    ]:
        add_bullet(doc, tip)

    add_h1(doc, '✅ Submit checklist')
    for item in [
        '6 deliverable đầy đủ (Planning + Notes + Sơ đồ + Wireframe + SRS + Traceability)',
        'Đặt tên file đúng format',
        'Có file PDF tổng hợp (pandoc convert)',
        'Self-check theo TPL-023 — pass ≥ 8/10 tiêu chí',
        'Note "đã dùng AI nào" cuối mỗi deliverable',
        'Upload LMS + CC instructor',
    ]:
        add_checkbox(doc, item)

    add_para(doc, '\nChúc bạn làm bài tập tốt! Đây là chứng minh cuối khoá rằng bạn đã sẵn sàng đi làm BA. 🎓',
             italic=True, color=BRAND_RED, bold=True)

    add_footer_note(doc, '— TPL-032 Đề bài cuối khoá ·')
    out = save(doc, 'TPL-032 — Đề bài cuối khoá (Buổi 11).docx')
    print(f'OK TPL-032: {out.name}')


# ============================================================
def build_tpl_034():
    """20 câu phỏng vấn + sample answer."""
    doc = new_doc()
    add_brand_header(doc, 'TPL-034', 'Buổi 11')
    add_title(doc, '20 câu phỏng vấn BA Fresher + Sample Answer',
              'Copy về tự luyện trước phỏng vấn thật.')

    add_h1(doc, 'Cấu trúc 3 vòng phỏng vấn (chuẩn)')
    add_table_with_headers(doc,
        ['Vòng', 'Loại', 'Thời lượng', 'Số câu'],
        [('1', 'Behavioral', '5-10 phút', '6 câu'),
         ('2', 'Kỹ năng nghiệp vụ', '10-15 phút', '8 câu'),
         ('3', 'Tình huống thực tế', '5-10 phút', '6 câu')])

    # Vòng 1
    add_h1(doc, 'VÒNG 1 — BEHAVIORAL (Hành vi cá nhân)')
    behavioral = [
        ('Câu 1: Giới thiệu bản thân trong 2 phút',
         'Cấu trúc: Background → Skills → Achievement → Why BA → Goal. 90 giây — không quá ngắn, không quá dài. Tự tin nhưng không khoe.'),
        ('Câu 2: Vì sao em chọn nghề BA?',
         'Tránh: "Vì lương cao", "Vì bố mẹ chọn". Có: 1 lý do cá nhân + 1 lý do career.'),
        ('Câu 3: Kể 1 dự án em đã làm',
         'Dùng STAR (Situation/Task/Action/Result). Concrete numbers (88/100, 50%, 25 trang). Có lesson learned cuối.'),
        ('Câu 4: Điểm mạnh / yếu lớn nhất là gì?',
         'Điểm mạnh: cụ thể + có evidence. Điểm yếu: thật + có plan cải thiện. Tránh "weakness là perfectionism".'),
        ('Câu 5: Mô tả 1 lần xử lý mâu thuẫn với teammate',
         'STAR. Show empathy (lắng nghe trước). Compromise > stubborn. Result tích cực.'),
        ('Câu 6: Sau 3 năm em muốn ở đâu?',
         'Có vision rõ. Có plan cụ thể từng năm. Mention chứng chỉ. Flexible.'),
    ]
    for q, tip in behavioral:
        add_h2(doc, q)
        add_para(doc, f'💡 Tip: {tip}', italic=True, color=TEXT_GREY)
        add_para(doc, 'Sample answer của em:', bold=True)
        for _ in range(3):
            add_placeholder(doc, '___')

    # Vòng 2
    add_h1(doc, 'VÒNG 2 — KỸ NĂNG NGHIỆP VỤ')
    skills = [
        'Câu 7: Phân biệt BRD và SRS',
        'Câu 8: INVEST là gì? Viết 1 user story chuẩn',
        'Câu 9: Vẽ BPMN đặt lịch sửa chữa trên giấy (vừa nói vừa vẽ)',
        'Câu 10: ERD và Use Case Diagram khác nhau ở đâu?',
        'Câu 11: 5 Whys là kỹ thuật gì? Cho 1 ví dụ',
        'Câu 12: MoSCoW prioritization — giải thích 4 nhóm',
        'Câu 13: Khác biệt Waterfall và Agile từ góc độ BA',
        'Câu 14: Bạn dùng AI nào trong BA, dùng thế nào?',
    ]
    for q in skills:
        add_h2(doc, q)
        add_para(doc, 'Sample answer:', bold=True)
        for _ in range(3):
            add_placeholder(doc, '___')

    # Vòng 3
    add_h1(doc, 'VÒNG 3 — TÌNH HUỐNG THỰC TẾ')
    situations = [
        'Câu 15: Khách đổi yêu cầu giữa sprint — xử lý sao?',
        'Câu 16: Dev nói "không làm được" — phản ứng?',
        'Câu 17: 2 stakeholder mâu thuẫn về scope — vai trò BA?',
        'Câu 18: SRS đã sign-off, khách phát hiện thiếu — quy trình?',
        'Câu 19: Vào dự án mới, không hiểu domain — học thế nào trong 30 ngày?',
        'Câu 20: Project late, manager ép cắt scope — tư vấn ai cắt cái gì?',
    ]
    for q in situations:
        add_h2(doc, q)
        add_para(doc, 'Sample answer (show tư duy, không cần "đúng"):', bold=True)
        for _ in range(3):
            add_placeholder(doc, '___')

    add_h1(doc, 'Tips luyện trước phỏng vấn thật')
    for tip in [
        'Luyện với AI: prompt "Đóng vai HR/Tech Lead phỏng vấn BA Junior. Hỏi tôi 5 câu..."',
        'Mock interview với mentor / bạn cùng khoá — 30 phút mỗi lần',
        'Ghi âm lại để nghe lại — đếm filler words ("ờ", "ừm")',
        'STAR cho mọi câu Behavioral',
        'Vừa nói vừa vẽ cho câu Skills — đừng im lặng suy nghĩ',
        'Tình huống — show tư duy, không cần "đúng"',
    ]:
        add_bullet(doc, tip)

    add_h1(doc, '❌ Anti-pattern cần tránh')
    for ap in [
        '"Em nghĩ là..." (không tự tin)',
        '"Nói chung..." (không cụ thể)',
        '"Cái đó em chưa biết" (kết thúc sớm — nên thêm "nhưng em sẽ tìm hiểu bằng cách...")',
        'Im lặng quá 5 giây',
        'Đọc câu trả lời thuộc lòng (nghe robot)',
    ]:
        add_bullet(doc, ap)

    add_footer_note(doc, '— TPL-034 20 câu phỏng vấn ·')
    out = save(doc, 'TPL-034 — 20 câu phỏng vấn BA Fresher (Buổi 11).docx')
    print(f'OK TPL-034: {out.name}')


# ============================================================
if __name__ == '__main__':
    print('=== Building 19 Word templates ===\n')
    build_tpl_002()
    build_tpl_005()
    build_tpl_008()
    build_tpl_009()
    build_tpl_010()
    build_tpl_011()
    build_tpl_012()
    build_tpl_013()
    build_tpl_015()
    build_tpl_018()
    build_tpl_020()
    build_tpl_021()
    build_tpl_022()
    build_tpl_024()
    build_tpl_025()
    build_tpl_029()
    build_tpl_030()
    build_tpl_031()
    build_tpl_032()
    build_tpl_034()
    print('\n=== HOÀN THÀNH 20 file Word ===')
