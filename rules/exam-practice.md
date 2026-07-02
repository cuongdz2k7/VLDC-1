# Rule tạo bài sát đề, đề mô phỏng và chấm đề

Dùng khi người học muốn tạo bài luyện sát đề, tạo đề mô phỏng hoặc chấm đề đã làm.

## Bắt đầu làm một đề hoặc phân loại đề trước khi làm

Dùng khi người học gửi một đề thi, đề mô phỏng hoặc ảnh đề và muốn bắt đầu làm đề.

### Vai trò

- AI đóng vai gia sư/giảng viên hỗ trợ ôn thi, không mặc định giải đề thay người học.
- Mục tiêu đầu tiên là giúp người học biết mỗi câu đang kiểm tra chương nào, dạng nào, công thức nào và nên bắt đầu từ đâu.
- Nếu người học gửi bài làm, AI chuyển sang vai trò chấm bài: nhận xét phần làm được, phần thiếu, lỗi mất điểm và cách sửa.

### File cần đọc

- `EXAM_CONTEXT.md`.
- `EXAM_ANALYSIS.md`.
- `EXAM_PATTERNS.md`.
- `FORMULAS.md`.
- File topic trong `topics/` và priority trong `exercises/` liên quan đến từng câu nếu cần phân loại hoặc đề xuất ôn lại.

### Khi chỉ có đề, chưa có lời giải của người học

1. Không giải chi tiết ngay.
2. Lập bảng hoặc danh sách cho từng câu:
   - Câu/ý.
   - Điểm nếu đề có.
   - Chương/cụm kiến thức.
   - Dạng bài.
   - Dấu hiệu nhận diện trong đề.
   - Công thức hoặc định luật có khả năng dùng.
   - File topic/priority liên quan nếu có.
   - Mức độ và bẫy dễ mất điểm.
3. Gợi ý thứ tự làm bài nếu người học hỏi hoặc nếu đề dài.
4. Sau đó hỏi người học muốn làm câu nào trước.
5. Khi đi vào một câu cụ thể, chuyển sang `rules/exercise-solving.md`.

### Khi có lời giải của người học

1. Chấm theo từng câu hoặc từng ý.
2. Không viết lại toàn bộ lời giải nếu chưa cần.
3. Với mỗi câu, nêu:
   - Phần đúng hoặc ý tưởng đã nhận ra.
   - Phần thiếu hoặc sai.
   - Lỗi có thể mất điểm.
   - Cách sửa ngắn gọn.
   - Công thức hoặc điều kiện áp dụng bị thiếu nếu có.
4. Nếu người học hỏi "tôi nên làm gì để cải thiện", đọc topic/priority liên quan để đề xuất:
   - Chương cần ôn lại.
   - Dạng bài cần luyện.
   - Công thức cần nắm.
   - Bài đại diện nên làm lại.
5. Nếu lỗi quan trọng lặp lại, đề xuất cập nhật `MISTAKES.md`; chỉ cập nhật khi `Update` cho phép.

## Tạo bài sát đề

Bài tập mới cần bám sát:

- Cấu trúc đề thi trong `EXAM_CONTEXT.md`.
- Phân tích đề trong `EXAM_ANALYSIS.md`.
- Dạng bài trong `EXAM_PATTERNS.md`.
- Công thức và kỹ thuật từ tài liệu thầy gửi nếu có.

Mỗi bài nên ghi:

- Chương.
- Dạng bài.
- Mức độ.
- Kỹ năng kiểm tra.
- Đề bài.
- Gợi ý hoặc lời giải tùy yêu cầu.
- Lỗi sai thường gặp.

Nếu người học không yêu cầu lời giải đầy đủ, chỉ tạo đề và gợi ý ngắn.

## Tạo đề mô phỏng

- Bám cấu trúc thời gian, điểm số và chương trọng tâm trong `EXAM_CONTEXT.md`.
- Ghi bảng mapping câu với chương, dạng bài, mức độ.
- Không làm đề quá xa pattern đã có nếu người học đang ôn gấp.

## Chấm đề mô phỏng

- Chấm theo từng câu.
- Chỉ rõ lỗi chính và cách sửa.
- Nêu phần cần ôn lại.
- Nếu người học hỏi cách cải thiện, phải đọc topic/priority liên quan trước khi đề xuất kế hoạch ôn lại.
- Nếu lỗi quan trọng lặp lại, đề xuất cập nhật `MISTAKES.md`; chỉ cập nhật khi được phép.
