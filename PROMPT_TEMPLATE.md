# PROMPT_TEMPLATE.md

File này chứa mẫu prompt ngắn để làm việc với AI trong project ôn Vật lí đại cương 1.

## Nguyên tắc dùng prompt

- Mọi prompt chỉ cần mở bằng `Tuân thủ practice/AGENTS.md`.
- `AGENTS.md` là điểm vào duy nhất: AI tự nhận diện loại yêu cầu và đọc rule phù hợp trong `rules/`.
- Không cần tự inject file rule thủ công.
- Không cần ghi `Task` hoặc `Output` nếu yêu cầu đã có rule mặc định.
- Chỉ ghi `Task` khi việc cần làm thật sự đặc biệt.
- Chỉ ghi `Output` khi muốn format khác với mặc định.
- Dùng `Custom` để đổi cách xử lý cho riêng lần đó.
- Dùng `Update` để kiểm soát có được sửa file hay không.

## Khung prompt mặc định

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

Update:
[Không cập nhật file / cập nhật file nào nếu cần.]
```

## Khi nào thêm Task hoặc Output?

Chỉ thêm nếu muốn đổi khỏi rule mặc định.

```md
Task:
[Việc đặc biệt cần làm trong lần này.]
```

```md
Output:
[Ví dụ: trả lời dạng bảng 3 cột / chỉ checklist / chỉ gợi ý ngắn.]
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

## 4. Tổng hợp kiến thức thực hành theo bài tập

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang học chương [tên chương]. Tôi muốn ôn theo trọng tâm đề thi PHY1095.

Goal:
Tôi muốn biến các bài tập trong ảnh thành bản đồ kiến thức thực hành.

Input:
Tôi gửi ảnh các bài tập trọng tâm của chương này.

Custom:
Mặc định làm theo `AGENTS.md`.

Update:
[Không cập nhật file / Tạo hoặc cập nhật `practice/exercises/[ten-chuong]-priority.md`.]
```

## 5. Hỏi một bài tập

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi đang học chương [tên chương] / đang làm bài trong file tổng hợp kiến thức thực hành / đang ôn đề PHY1095.

Goal:
Tôi muốn hiểu cách làm bài này. [Chỉ gợi ý / hướng dẫn từng bước / giải hoàn chỉnh ngắn gọn như đi thi / kiểm tra đáp án.]

Input:
Tôi gửi ảnh hoặc nội dung bài số [số bài nếu có].

Custom:
Mặc định làm theo `AGENTS.md`.
[Nếu muốn: Viết lời giải hoàn chỉnh, thực dụng, đủ điểm, không dài dòng.]

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

Custom:
Mặc định làm theo `AGENTS.md`.

Update:
Không cập nhật file nếu tôi chưa yêu cầu.
```

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

## 9. Kết thúc học một chương và tạo topic

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi vừa học xong hoặc gần xong chương [tên chương].

Goal:
Tôi muốn cô đọng kiến thức chương này vào `topics/[ten-chuong].md` để sau ôn thi nhanh.

Input:
File thực hành cần đọc:
- `practice/exercises/[ten-chuong]-priority.md`

Tóm tắt thêm nếu có:
[bài đã làm, lỗi sai, phần chưa chắc, câu hỏi còn mở]

Custom:
Mặc định làm theo `AGENTS.md`.

Update:
Cập nhật hoặc tạo `practice/topics/[ten-chuong].md`.
Nếu có công thức quan trọng dùng lại nhiều lần, cập nhật `practice/FORMULAS.md`.
Nếu có lỗi quan trọng, cập nhật `practice/MISTAKES.md`.
Nếu còn câu hỏi chưa hiểu, cập nhật `practice/QUESTIONS.md`.
Nếu ảnh hưởng thứ tự ôn tập, cập nhật `practice/LEARNING_PLAN.md`.
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

Custom:
Mặc định làm theo `AGENTS.md`.

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

Prompt này dùng để tổng kết một buổi học cụ thể. Không tạo topic chương trừ khi tôi nói rõ đã kết thúc chương hoặc yêu cầu cập nhật `topics/[ten-chuong].md`.

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi vừa học xong một buổi.

Goal:
Tôi muốn tổng kết và cập nhật hồ sơ học tập.

Input:
Nội dung buổi học: [đã học gì, bài nào làm sai, phần nào chưa hiểu].

Custom:
Mặc định làm theo `AGENTS.md`.

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

Dùng khi muốn AI đề xuất sửa rule, template, README hoặc tổ chức lại cấu trúc project. Prompt này không dùng để sửa nội dung học tập như công thức, lỗi sai hoặc câu hỏi cá nhân.

```md
Tuân thủ `practice/AGENTS.md`.

Context:
Tôi muốn cập nhật rule/cấu trúc project `practice/` theo cách làm mới của tôi.

Goal:
Tôi muốn các cuộc trò chuyện AI sau này hiểu và làm theo quy ước mới này.

Input:
Yêu cầu cập nhật của tôi:
[ghi rõ bạn muốn đổi gì]

Custom:
- Không xóa rule cũ nếu vẫn còn đúng.
- Không làm trùng lặp nội dung đã có.
- Nếu có hai rule giống nhau, hãy gộp lại thành một rule rõ hơn.
- Giữ văn phong tiếng Việt ngắn gọn, dễ dùng.

Output:
Trả lời bằng Implement Plan, gồm:
- Mục tiêu thay đổi
- File dự kiến sửa
- Lý do cần sửa từng file
- Nội dung dự kiến sửa ở từng file
- Quy ước mới sau khi sửa
- Phạm vi không sửa
- Cách kiểm tra sau khi sửa

Update:
Chưa cập nhật file ở lượt đầu. Chỉ cập nhật sau khi tôi duyệt Implement Plan.
Không sửa file học tập như `MISTAKES.md`, `FORMULAS.md`, `QUESTIONS.md` trừ khi tôi yêu cầu rõ.
```

Sau khi đã duyệt plan, dùng prompt triển khai:

```md
PLEASE IMPLEMENT THIS PLAN:
[dán Implement Plan đã duyệt]
```
