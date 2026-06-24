# PROMPT_TEMPLATE.md

File này chứa các mẫu prompt để làm việc hiệu quả với AI trong project ôn Vật lí đại cương 1.

## Nguyên tắc dùng prompt

- `practice/AGENTS.md` là luật mặc định.
- Prompt hiện tại dùng để nói mục tiêu cụ thể của lần này.
- Nếu prompt hiện tại yêu cầu cách làm khác `AGENTS.md`, AI được ưu tiên yêu cầu hiện tại cho riêng bài đó.
- Không được ghi đè các rule nền: tiếng Việt có dấu, UTF-8, không bịa nội dung ảnh/tài liệu, báo rõ nếu ảnh không đọc được, không xóa nội dung cũ nếu chưa yêu cầu.

## Khung prompt chuẩn

Dùng khung này cho hầu hết nhiệm vụ.

```md
Tuân thủ `practice/AGENTS.md`.

Context:
[Tôi đang học chương/dạng bài nào? Có liên quan đề thi, PDF, file nào không?]

Goal:
[Tôi muốn hiểu bản chất, kiểm tra bài làm, giải luôn, tạo bài luyện, hay cập nhật file?]

Input:
[Tôi sẽ gửi ảnh/đề bài/lời giải/PDF/nội dung buổi học.]

Task:
[Việc AI cần làm trong lần này.]

Custom:
[Mặc định làm theo `AGENTS.md`. Chỉ ghi nếu muốn đổi cách xử lý cho riêng lần này.]

Output:
[Format mong muốn: bảng phân tích, từng bước, checklist, lỗi sai, bài tương tự...]

Update:
[Không cập nhật file / Cập nhật `MISTAKES.md` / `FORMULAS.md` / `QUESTIONS.md` / `EXAM_ANALYSIS.md` nếu cần.]
```

## Ví dụ khung chuẩn

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang ôn đề PHY1095, ưu tiên các dạng trong `EXAM_PATTERNS.md`.

Goal:
Tôi muốn hiểu cách làm bài trong ảnh, chưa cần lời giải đầy đủ.

Input:
Tôi gửi ảnh đề bài.

Task:
Đọc đề, chép lại đề, phân loại chương/dạng/mức độ, nêu hướng làm.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời theo các mục: Đề hiểu được, Phân loại, Công thức, Hướng làm, Bẫy dễ sai.

Update:
Chưa cập nhật file.
```

## Khi nào có thể bỏ bớt mục

- Nếu đang vội, có thể bỏ `Custom` hoặc `Output`.
- Nếu không có yêu cầu riêng, ghi `Custom: Mặc định làm theo AGENTS.md`.
- Nếu không muốn AI sửa file, hãy ghi rõ ở `Update`: `Không cập nhật file`.
- Nếu muốn AI sửa file, luôn ghi rõ file được phép sửa.
- Nếu gửi ảnh, nên giữ `Input` và nói rõ đó là ảnh đề, ảnh lời giải hay ảnh tài liệu.

## Cách viết Custom khi cần

`Custom` chỉ dùng khi bạn muốn đổi cách xử lý mặc định cho riêng lần đó.

Ví dụ custom ngắn:

```md
Custom:
- Giải luôn, không dừng từng bước.
- Tập trung vào cách chọn chiều dương.
- Sau lời giải, tạo 2 bài tương tự.
```

```md
Custom:
- Chỉ gợi ý, không giải hết.
- Hỏi tôi trước khi sang bước tiếp theo.
- Tập trung vào kiểm tra đơn vị.
```

```md
Custom:
- Không cập nhật file trong lần này.
- Chỉ cho nhận xét ngắn gọn.
```

## 1. Khởi động cuộc chat

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi bắt đầu một cuộc chat mới để học Vật lí đại cương 1.

Goal:
Dùng project `practice/` làm context học tập và ôn thi PHY1095.

Input:
Các file context trong `practice/`.

Task:
Đọc các file cần thiết trước khi trả lời, đặc biệt `PROFILE.md`, `EXAM_CONTEXT.md`, `EXAM_ANALYSIS.md`, `EXAM_PATTERNS.md`, `FORMULAS.md`.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời ngắn gọn bằng tiếng Việt.

Update:
Không cập nhật file nếu tôi chưa yêu cầu.
```

## 2. Giải thích cấu trúc project cho AI ở chat mới

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang dùng project `practice/` để ôn Vật lí đại cương 1.

Goal:
Tôi muốn bạn hiểu cấu trúc project trước khi hỗ trợ tôi.

Input:
Các file trong `practice/`.

Task:
Đọc `AGENTS.md`, `PROFILE.md`, `EXAM_CONTEXT.md`, `EXAM_PATTERNS.md`, `PROMPT_TEMPLATE.md` và tóm tắt ngắn cách project này hoạt động.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Tóm tắt ngắn:
- File nào dùng để làm gì
- Khi nào cập nhật file nào
- Workflow học một chương
- Workflow làm bài tập

Update:
Không cập nhật file.
```

## 3. Bắt đầu học một chương

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi bắt đầu học chương [tên chương].

Goal:
Tôi muốn biết chương này quan trọng thế nào trong đề thi và nên học theo thứ tự nào.

Input:
Tên chương: [tên chương]. Nếu có tài liệu/ảnh bài tập, tôi sẽ gửi sau.

Task:
Đọc `EXAM_CONTEXT.md`, `EXAM_PATTERNS.md`, `LEARNING_PLAN.md` và xác định vai trò của chương này trong đề thi.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời theo các mục:
- Vai trò trong đề thi
- Mức độ ưu tiên
- Kiến thức cần học trước
- Dạng bài hay ra
- Lỗi sai thường gặp
- Cách học chương này

Update:
Không cập nhật file.
```

## 4. Lọc bài tập trọng tâm theo chương

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang học chương [tên chương]. Tôi muốn ôn theo trọng tâm đề thi PHY1095, ưu tiên bảng trọng tâm ôn tập và `EXAM_PATTERNS.md`.

Goal:
Tôi muốn bạn lọc các bài tập trong ảnh, chọn bài nên làm từ dễ đến khó, bỏ các bài ít khả năng ra thi để tiết kiệm thời gian.

Input:
Tôi gửi ảnh các bài tập trọng tâm của chương này.

Task:
Đọc danh sách bài tập trong ảnh, phân loại từng bài theo dạng, mức độ, khả năng ra thi và mức độ ưu tiên.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời theo bảng:
- Mã/số bài
- Dạng bài
- Mức độ: dễ, trung bình, khó
- Khả năng ra thi: cao, vừa, thấp
- Ưu tiên làm: bắt buộc, nên làm, làm nếu còn thời gian, bỏ qua
- Lý do
- Kiến thức cần trước khi làm

Sau bảng, hãy đề xuất thứ tự làm bài từ dễ đến khó.

Update:
Nếu tôi yêu cầu, tạo/cập nhật file `practice/exercises/[ten-chuong]-priority.md`.
```

## 5. Hỏi một bài tập

Dùng prompt này cho bài lẻ, bài trong chương, bài từ danh sách đã lọc, ảnh đề/bài tập, hoặc khi muốn gợi ý/hướng dẫn từng bước/giải luôn.

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang học chương [tên chương] / đang làm bài trong danh sách đã lọc / đang ôn đề PHY1095.

Goal:
Tôi muốn hiểu cách làm bài này. [Chọn một: chỉ gợi ý / hướng dẫn từng bước / giải luôn / kiểm tra đáp án.]

Input:
Tôi gửi ảnh hoặc nội dung bài số [số bài nếu có].

Task:
Đọc đề, chép lại đề theo cách hiểu của bạn, phân loại chương/dạng/mức độ, nêu công thức cần dùng và hướng xử lý.

Custom:
Mặc định làm theo `AGENTS.md`.
Nếu muốn đổi: [giải luôn / chỉ gợi ý / tập trung vào dấu / hỏi tôi từng bước / không cập nhật file].

Output:
Trả lời theo các mục:
- Đề hiểu được
- Phân loại
- Công thức cần dùng
- Hướng làm hoặc lời giải
- Bẫy dễ sai
- Bài tương tự nếu cần

Update:
[Không cập nhật file / Nếu tôi sai lỗi đáng nhớ, cập nhật `practice/MISTAKES.md`.]
```

## 6. Hỏi lý thuyết trong chương

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang học chương [tên chương].

Goal:
Tôi muốn hiểu [khái niệm] và biết dùng trong bài tập/đề thi.

Input:
Câu hỏi của tôi: [ghi câu hỏi].

Task:
Giải thích khái niệm theo chế độ lý thuyết trong `AGENTS.md`.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời theo các mục: Bản chất, Công thức, Ý nghĩa đại lượng, Điều kiện áp dụng, Lỗi sai, Ví dụ.

Update:
Không cập nhật file nếu tôi chưa yêu cầu.
```

## 7. Kiểm tra bài làm của tôi

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đã tự làm một bài và muốn kiểm tra lời giải.

Goal:
Tôi muốn biết mình đúng sai ở đâu, chưa cần cập nhật file học tập.

Input:
Tôi gửi đề bài và lời giải của tôi.

Task:
Chấm từng bước, chỉ ra bước đúng, bước sai, bước thiếu chặt chẽ và cách sửa.

Custom:
Không viết lại toàn bộ lời giải nếu chưa cần. Ưu tiên giúp tôi tự sửa.

Output:
Trả lời theo các mục: Nhận xét chung, Bước đúng, Bước sai, Cách sửa, Lỗi đáng nhớ.

Update:
Không cập nhật file.
```

## 8. Kiểm tra bài và cập nhật file học tập

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đã tự làm một bài và muốn lưu lại lỗi/công thức quan trọng.

Goal:
Tôi muốn kiểm tra bài và cập nhật hồ sơ học tập nếu cần.

Input:
Tôi gửi đề bài và lời giải của tôi.

Task:
Chấm từng bước, chỉ ra lỗi sai, nguyên nhân, cách sửa và xác định nội dung cần lưu lại.

Custom:
Chỉ cập nhật lỗi hoặc công thức thật sự đáng nhớ, tránh ghi quá nhiều lỗi nhỏ.

Output:
Trả lời theo các mục: Chấm bài, Lỗi sai, Cách sửa, Nội dung đã cập nhật.

Update:
Cập nhật `practice/MISTAKES.md`, `practice/FORMULAS.md`, `practice/QUESTIONS.md` nếu cần.
```

## 9. Kết thúc học một chương

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi vừa học xong chương [tên chương] và đã làm các bài tập cần thiết.

Goal:
Tôi muốn đúc kết kiến thức cần nhớ của chương này để sau ôn thi nhanh.

Input:
Tóm tắt những bài đã làm, lỗi sai, phần chưa chắc và câu hỏi còn mở:
[dán nội dung]

Task:
Tổng kết chương này thành ghi chú ôn thi.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời theo các mục:
- Kiến thức cốt lõi
- Công thức cần nhớ
- Điều kiện áp dụng
- Dạng bài hay ra
- Quy trình giải chung
- Lỗi sai thường gặp
- Bài đại diện nên xem lại
- Câu hỏi còn mở

Update:
Cập nhật hoặc tạo file `practice/topics/[ten-chuong].md`.
Nếu có lỗi quan trọng, cập nhật `practice/MISTAKES.md`.
Nếu có công thức quan trọng, cập nhật `practice/FORMULAS.md`.
Nếu còn câu hỏi chưa hiểu, cập nhật `practice/QUESTIONS.md`.
```

## 10. Phân tích đề thi mới

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi có một đề thi mới muốn biến thành context ôn thi.

Goal:
Tôi muốn biết đề này củng cố hoặc thay đổi trọng tâm ôn thi như thế nào.

Input:
Tôi gửi ảnh đề thi hoặc nội dung đề.

Task:
Đọc đề, phân tích từng câu theo chương/dạng/mức độ, so sánh với đề mẫu đã có và xác định pattern mới nếu có.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời theo bảng: Câu, Chương, Dạng bài, Mức độ, Kỹ năng, Pattern liên quan, Lỗi dễ sai.

Update:
Cập nhật `practice/EXAM_ANALYSIS.md` và `practice/EXAM_PATTERNS.md` nếu có thông tin mới đáng lưu.
```

## 11. Tạo bài tập sát đề

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang ôn thi PHY1095, ưu tiên các dạng trong `EXAM_PATTERNS.md`.

Goal:
Tôi muốn luyện bài sát phong cách đề.

Input:
Số lượng bài cần tạo: [số lượng]. Chủ đề ưu tiên: [chủ đề nếu có].

Task:
Tạo bài tập sát đề dựa trên `EXAM_CONTEXT.md`, `EXAM_ANALYSIS.md`, `EXAM_PATTERNS.md`, `FORMULAS.md` và tài liệu trong `materials/` nếu có.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Mỗi bài gồm: Chương, Dạng bài, Mức độ, Kỹ năng kiểm tra, Đề bài, Gợi ý, Lỗi sai thường gặp.

Update:
Không cập nhật file nếu tôi chưa yêu cầu.
```

## 12. Tạo đề mô phỏng 90 phút

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi muốn luyện như thi thật môn PHY1095.

Goal:
Tạo một đề mô phỏng 90 phút sát phong cách đề đã phân tích.

Input:
Các context trong `practice/`, đặc biệt `EXAM_CONTEXT.md`, `EXAM_ANALYSIS.md`, `EXAM_PATTERNS.md`.

Task:
Tạo đề gồm cơ học 6 điểm và nhiệt học 4 điểm, bám theo bảng trọng tâm ôn tập.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Đề thi, thang điểm từng câu, bảng mapping câu với chương/dạng/mức độ.

Update:
Không cập nhật file.
```

## 13. Chấm đề mô phỏng

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đã làm một đề mô phỏng.

Goal:
Tôi muốn được chấm điểm và biết cần ôn lại gì.

Input:
Tôi gửi lời giải của tôi.

Task:
Chấm theo thang điểm, chỉ ra điểm mất, phân loại lỗi và đề xuất phần cần ôn lại.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời theo các mục: Điểm số, Nhận xét từng câu, Lỗi chính, Cách sửa, Việc cần ôn.

Update:
Cập nhật `practice/MISTAKES.md` nếu lỗi quan trọng.
```

## 14. Dùng tài liệu PDF thầy gửi

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi có tài liệu thầy gửi và muốn đưa vào context ôn thi.

Goal:
Tôi muốn rút công thức, kỹ thuật giải và dạng bài quan trọng từ tài liệu.

Input:
Tài liệu trong `practice/materials/`: [tên file].

Task:
Đọc tài liệu, tóm tắt phần liên quan đến đề thi, trích công thức/kỹ thuật quan trọng và so sánh với context hiện có.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời theo các mục: Nội dung chính, Công thức, Kỹ thuật giải, Dạng bài liên quan, Cần cập nhật.

Update:
Cập nhật `practice/FORMULAS.md`, `practice/EXAM_PATTERNS.md`, `practice/LEARNING_PLAN.md` nếu cần.
```

## 15. Ôn gấp trước kỳ thi

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi sắp thi PHY1095.

Goal:
Tôi muốn có kế hoạch ôn gấp theo thứ tự ưu tiên.

Input:
Thời gian còn lại: [số giờ/số ngày]. Điểm yếu hiện tại: [nếu có].

Task:
Lập kế hoạch ôn gấp dựa trên `PROFILE.md`, `EXAM_CONTEXT.md`, `EXAM_ANALYSIS.md`, `EXAM_PATTERNS.md`, `MISTAKES.md`, `LEARNING_PLAN.md`.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Checklist theo thời gian, chương bắt buộc học, chương ôn qua, công thức cần nhớ, dạng bài cần luyện.

Update:
Không cập nhật file nếu tôi chưa yêu cầu.
```

## 16. Tổng kết sau buổi học

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi vừa học xong một buổi.

Goal:
Tôi muốn tổng kết và cập nhật hồ sơ học tập.

Input:
Nội dung buổi học: [đã học gì, bài nào làm sai, phần nào chưa hiểu].

Task:
Tóm tắt buổi học, rút lỗi sai, công thức, câu hỏi còn mở và việc cần làm tiếp.

Custom:
Mặc định làm theo `AGENTS.md`.

Output:
Trả lời theo các mục: Tóm tắt, Lỗi sai, Công thức, Câu hỏi mở, Việc tiếp theo, File đã cập nhật.

Update:
Cập nhật `practice/MISTAKES.md`, `practice/FORMULAS.md`, `practice/QUESTIONS.md`, `practice/LEARNING_PLAN.md` nếu cần.
```

## 17. Prompt ngắn dùng hằng ngày

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang học/ôn Vật lí đại cương 1.

Goal:
[Mục tiêu lần này.]

Input:
[Tôi gửi ảnh/bài/lời giải/câu hỏi.]

Task:
[Việc cần làm.]

Custom:
[Mặc định làm theo `AGENTS.md`; ghi yêu cầu riêng nếu có.]

Output:
[Format mong muốn nếu có.]

Update:
[Không cập nhật file / cập nhật file nào nếu cần.]
```
