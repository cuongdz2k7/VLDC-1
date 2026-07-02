# rules

Thư mục này chứa các workflow cụ thể theo từng loại prompt.

Người học không cần tự ghi tên các file rule trong prompt. `AGENTS.md` là nơi điều phối: AI đọc `AGENTS.md`, tự nhận diện loại yêu cầu, rồi đọc file rule phù hợp trong thư mục này.

## Bảng chọn rule

| Nhu cầu | File rule |
| --- | --- |
| Hỏi bài tập, giải từng bước, kiểm tra bài làm, hoặc viết lời giải hoàn chỉnh ngắn gọn khi được yêu cầu; cần tra chương/dạng/công thức liên quan | `exercise-solving.md` |
| Hỏi lý thuyết, công thức, bản chất, hoặc hỏi công thức dùng trong dạng bài nào | `theory-question.md` |
| Bắt đầu học một chương | `chapter-start.md` |
| Tổng hợp kiến thức thực hành theo bài tập | `exercise-practice-summary.md` |
| Tổng kết chương | `chapter-summary.md` |
| Phân tích đề thi mới | `exam-analysis.md` |
| Bắt đầu làm đề, phân loại đề trước khi làm, tạo bài sát đề, tạo đề mô phỏng, chấm đề | `exam-practice.md` |
| Tổng kết sau buổi học | `session-summary.md` |
| Cập nhật rule, template, cấu trúc project | `project-update.md` |

## Nguyên tắc chung

- Rule trong thư mục này bổ sung cho `AGENTS.md`, không thay thế `AGENTS.md`.
- `AGENTS.md` là rule cao nhất trong project.
- Nếu rule chuyên biệt, README, template hoặc file context khác mâu thuẫn với `AGENTS.md`, luôn ưu tiên `AGENTS.md`.
- Nếu prompt có `Custom`, áp dụng `Custom` cho lần đó nhưng không biến thành rule lâu dài nếu chưa được yêu cầu cập nhật file.
- Nếu prompt có `Update: Không cập nhật file`, chỉ trả lời và không sửa file.
