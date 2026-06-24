# PROMPT_TEMPLATE.md

File này chứa các mẫu prompt để làm việc hiệu quả với AI trong project ôn Vật lí đại cương 1.

## Nguyên tắc dùng prompt

- `practice/AGENTS.md` là luật mặc định cho cách dạy, hỏi bài, kiểm tra bài và cập nhật project.
- `practice/exercises/README.md` là luật mặc định khi tạo hoặc cập nhật file tổng hợp kiến thức thực hành theo bài tập.
- `practice/topics/README.md` là luật mặc định khi tổng kết chương.
- `practice/SESSION_TEMPLATE.md` là cấu trúc mặc định khi ghi một buổi học.
- Prompt hiện tại chỉ cần nói mục tiêu cụ thể của lần này.
- Không cần ghi `Task` hoặc `Output` nếu yêu cầu đã có workflow trong `AGENTS.md` hoặc README liên quan.
- Chỉ ghi `Task` khi việc cần làm chưa rõ trong các rule nền.
- Chỉ ghi `Output` khi muốn format khác với mặc định.
- Dùng `Custom` để đổi cách xử lý cho riêng lần đó.
- Không được ghi đè các rule nền: tiếng Việt có dấu, UTF-8, không bịa nội dung ảnh/tài liệu, báo rõ nếu ảnh không đọc được, không xóa nội dung cũ nếu chưa yêu cầu.

## Khung prompt mặc định

Dùng khung này cho hầu hết nhiệm vụ hằng ngày.

```md
Tuân thủ `practice/AGENTS.md`.

Context:
[Tôi đang học gì / đang làm gì.]

Goal:
[Mục tiêu lần này.]

Input:
[Tôi gửi ảnh/bài/lời giải/tài liệu nếu có.]

Custom:
Mặc định làm theo `AGENTS.md`.
[Nếu muốn đổi cách xử lý thì ghi ở đây.]

Update:
[Không cập nhật file / cập nhật file nào nếu cần.]
```

## Khi nào thêm Task hoặc Output?

Chỉ thêm `Task` nếu việc cần làm chưa được mô tả trong `AGENTS.md` hoặc README liên quan.

```md
Task:
[Việc đặc biệt cần làm trong lần này.]
```

Chỉ thêm `Output` nếu muốn format khác với rule mặc định.

```md
Output:
[Ví dụ: trả lời dạng bảng 3 cột / chỉ checklist / chỉ gợi ý ngắn.]
```

## Cách viết Custom khi cần

`Custom` là nơi ghi ngoại lệ cho riêng lần đó.

Ví dụ:

```md
Custom:
- Giải luôn, không dừng từng bước.
- Tập trung vào cách chọn chiều dương.
- Không cập nhật file.
```

```md
Custom:
- Chỉ gợi ý, không giải hết.
- Hỏi tôi trước khi sang bước tiếp theo.
- Tập trung vào kiểm tra đơn vị.
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

Custom:
Mặc định làm theo `AGENTS.md`.

Update:
Không cập nhật file nếu tôi chưa yêu cầu.
```

## 2. Hiểu cấu trúc project

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang dùng project `practice/` để ôn Vật lí đại cương 1.

Goal:
Tôi muốn bạn hiểu cấu trúc project trước khi hỗ trợ tôi.

Input:
Các file trong `practice/`.

Custom:
Mặc định làm theo `AGENTS.md`.

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

Custom:
Mặc định làm theo `AGENTS.md`.

Update:
Không cập nhật file.
```

Ghi chú: AI mặc định đọc `EXAM_CONTEXT.md`, `EXAM_PATTERNS.md`, `LEARNING_PLAN.md` nếu cần.

## 4. Tổng hợp kiến thức thực hành theo bài tập

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang học chương [tên chương]. Tôi muốn ôn theo trọng tâm đề thi PHY1095, ưu tiên bảng trọng tâm ôn tập và `EXAM_PATTERNS.md`.

Goal:
Tôi muốn biến các bài tập trong ảnh thành bản đồ kiến thức thực hành.

Input:
Tôi gửi ảnh các bài tập trọng tâm của chương này.

Custom:
Mặc định làm theo `AGENTS.md` và `practice/exercises/README.md`.

Update:
[Không cập nhật file / Nếu tôi yêu cầu, tạo hoặc cập nhật `practice/exercises/[ten-chuong]-priority.md`.]
```

Ghi chú: AI mặc định dùng cấu trúc trong `exercises/README.md`, gồm bảng bài tập, công thức bắt buộc, khung tư duy theo dạng bài, thứ tự làm, gợi ý ôn nhanh và lỗi dễ sai.

## 5. Hỏi một bài tập

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang học chương [tên chương] / đang làm bài trong file tổng hợp kiến thức thực hành / đang ôn đề PHY1095.

Goal:
Tôi muốn hiểu cách làm bài này. [Chỉ gợi ý / hướng dẫn từng bước / giải luôn / kiểm tra đáp án.]

Input:
Tôi gửi ảnh hoặc nội dung bài số [số bài nếu có].

Custom:
Mặc định làm theo `AGENTS.md`.
[Nếu muốn đổi: tập trung vào dấu / trình bày ngắn gọn / không cập nhật file.]

Update:
[Không cập nhật file / Nếu tôi sai lỗi đáng nhớ, cập nhật `practice/MISTAKES.md`.]
```

Ghi chú: Không cần ghi `Task` hoặc `Output`. AI mặc định làm theo workflow bài tập trong `AGENTS.md`: phân loại, phân tích đề, đặt biến, nêu công thức, hướng dẫn từng bước, kiểm tra và tổng kết.

## 6. Hỏi lý thuyết trong chương

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang học chương [tên chương].

Goal:
Tôi muốn hiểu [khái niệm] và biết dùng trong bài tập/đề thi.

Input:
Câu hỏi của tôi: [ghi câu hỏi].

Custom:
Mặc định làm theo `AGENTS.md`.

Update:
Không cập nhật file nếu tôi chưa yêu cầu.
```

Ghi chú: AI mặc định dùng chế độ lý thuyết trong `AGENTS.md`: bản chất, công thức, ý nghĩa đại lượng, điều kiện áp dụng, lỗi sai và câu hỏi kiểm tra.

## 7. Kiểm tra bài làm của tôi

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đã tự làm một bài và muốn kiểm tra lời giải.

Goal:
Tôi muốn biết mình đúng sai ở đâu.

Input:
Tôi gửi đề bài và lời giải của tôi.

Custom:
Không viết lại toàn bộ lời giải nếu chưa cần. Ưu tiên giúp tôi tự sửa.

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

Custom:
Chỉ cập nhật lỗi hoặc công thức thật sự đáng nhớ, tránh ghi quá nhiều lỗi nhỏ.

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

Custom:
Mặc định làm theo `AGENTS.md` và `practice/topics/README.md`.

Update:
Cập nhật hoặc tạo file `practice/topics/[ten-chuong].md`.
Nếu có lỗi quan trọng, cập nhật `practice/MISTAKES.md`.
Nếu có công thức quan trọng, cập nhật `practice/FORMULAS.md`.
Nếu còn câu hỏi chưa hiểu, cập nhật `practice/QUESTIONS.md`.
```

Ghi chú: Không cần ghi `Output`; AI dùng cấu trúc trong `topics/README.md`.

## 10. Phân tích đề thi mới

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi có một đề thi mới muốn biến thành context ôn thi.

Goal:
Tôi muốn biết đề này củng cố hoặc thay đổi trọng tâm ôn thi như thế nào.

Input:
Tôi gửi ảnh đề thi hoặc nội dung đề.

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

Custom:
Mặc định làm theo `AGENTS.md`.

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

Custom:
Mặc định làm theo `AGENTS.md`.

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

Custom:
Mặc định làm theo `AGENTS.md`.

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

Custom:
Mặc định làm theo `AGENTS.md` và `practice/SESSION_TEMPLATE.md`.

Update:
Cập nhật `practice/MISTAKES.md`, `practice/FORMULAS.md`, `practice/QUESTIONS.md`, `practice/LEARNING_PLAN.md` nếu cần.
```

## 17. Prompt ngắn dùng hằng ngày

```md
Tuân thủ `practice/AGENTS.md`.

Context:
[Tôi đang học/ôn gì.]

Goal:
[Mục tiêu lần này.]

Input:
[Tôi gửi ảnh/bài/lời giải/câu hỏi nếu có.]

Custom:
Mặc định làm theo `AGENTS.md`.

Update:
[Không cập nhật file / cập nhật file nào nếu cần.]
```

## 18. Cập nhật rule hoặc cấu trúc project

Dùng khi muốn chỉnh cách AI làm việc, đổi cấu trúc file, thêm workflow mới, hoặc sửa quy ước trong project.

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi muốn cập nhật rule/cấu trúc project `practice/` theo cách làm mới của tôi.

Goal:
Tôi muốn các cuộc trò chuyện AI sau này hiểu và làm theo quy ước mới này.

Input:
Yêu cầu cập nhật của tôi:
[ghi rõ bạn muốn đổi gì]

Các file có thể cần sửa:
- `practice/AGENTS.md`
- `practice/PROMPT_TEMPLATE.md`
- `practice/topics/README.md`
- `practice/exercises/README.md`
- `practice/SESSION_TEMPLATE.md`
- file khác nếu thật sự liên quan

Custom:
- Không xóa rule cũ nếu vẫn còn đúng.
- Không làm trùng lặp nội dung đã có.
- Nếu có hai rule giống nhau, hãy gộp lại thành một rule rõ hơn.
- Giữ văn phong tiếng Việt ngắn gọn, dễ dùng.

Update:
Cập nhật các file rule/template/README liên quan. Không sửa file học tập như `MISTAKES.md`, `FORMULAS.md`, `QUESTIONS.md` trừ khi tôi yêu cầu rõ.
```
