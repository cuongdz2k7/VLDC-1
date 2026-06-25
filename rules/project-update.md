# Rule cập nhật rule, template và cấu trúc project

Dùng khi người học muốn sửa quy ước, template, README hoặc tổ chức lại project.

## Việc cần làm

1. Đọc các file liên quan trước khi đề xuất sửa.
2. Ở lượt đầu của mọi yêu cầu cập nhật rule, template, README hoặc cấu trúc project, luôn xuất Implement Plan trước, không sửa file ngay.
3. Chỉ cập nhật file khi người học xác nhận rõ, ví dụ: "PLEASE IMPLEMENT THIS PLAN", "ok sửa đi", "triển khai plan này".
4. Không xóa rule cũ nếu rule đó vẫn còn đúng.
5. Không tạo nội dung trùng lặp với nội dung đã tồn tại.
6. Nếu có nhiều rule diễn đạt cùng một ý, gộp thành một rule rõ hơn.
7. Giữ văn phong tiếng Việt ngắn gọn, thực dụng, dễ sử dụng.
8. Ưu tiên chỉnh sửa tối thiểu để đạt mục tiêu.
9. Giữ tính nhất quán giữa các file.
10. Khi cập nhật Markdown, kiểm tra các file liên quan có dùng sai định dạng LaTeX không.
11. Nếu thấy công thức dạng ngoặc tròn backslash, đổi sang `$...$` nếu là công thức ngắn hoặc `$$...$$` nếu là công thức cần đứng riêng dòng.
12. Nếu thấy `$$...$$` nằm giữa câu, trong bảng hoặc trong bullet ngắn, đổi về `$...$`.
13. Không tự quét toàn repo nếu người học chỉ yêu cầu sửa một file nhỏ, trừ khi người học yêu cầu "quét lại các file" hoặc yêu cầu áp dụng toàn project.

## Cấu trúc Implement Plan bắt buộc

Khi xuất Implement Plan, cần ghi rõ:

- Mục tiêu thay đổi: AI hiểu người học muốn đổi gì.
- File dự kiến sửa: file nào sẽ sửa và vì sao cần sửa file đó.
- Nội dung dự kiến sửa: sửa mục nào, thêm gì, gộp gì, bỏ gì nếu có.
- Lý do thiết kế: tại sao chọn cách sửa đó và cách tránh trùng lặp.
- Quy ước mới sau khi sửa: hành vi AI hoặc cấu trúc project sẽ thay đổi như thế nào.
- Phạm vi không sửa: file nào không được đụng, đặc biệt `MISTAKES.md`, `FORMULAS.md`, `QUESTIONS.md`.
- Cách kiểm tra sau khi sửa: kiểm tra rule, template, định dạng LaTeX, UTF-8 và các ràng buộc liên quan.

## File có thể sửa

- `AGENTS.md`
- `PROMPT_TEMPLATE.md`
- `rules/`
- README trong các thư mục liên quan
- `SESSION_TEMPLATE.md`

## File không sửa nếu chưa được yêu cầu rõ

- `MISTAKES.md`
- `FORMULAS.md`
- `QUESTIONS.md`
- File học tập cá nhân hoặc nội dung kiến thức tương tự.

## Output sau khi sửa

Trả lời ngắn gọn:

- File đã sửa.
- Nội dung đã thêm/sửa.
- Quy ước mới sau khi cập nhật.
- Cách người học nên dùng từ nay.
