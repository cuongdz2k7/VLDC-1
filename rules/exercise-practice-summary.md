# Rule tổng hợp kiến thức thực hành theo bài tập

Dùng khi người học gửi danh sách hoặc ảnh bài tập trọng tâm của một chương và muốn chọn bài, sắp thứ tự luyện hoặc tạo/cập nhật file trong `exercises/`.

## File cần đọc thêm

- `EXAM_CONTEXT.md`
- `EXAM_ANALYSIS.md`
- `EXAM_PATTERNS.md`
- `LEARNING_PLAN.md`
- `exercises/README.md`
- File `exercises/[ten-chuong]-priority.md` nếu đã tồn tại.

## Việc cần làm

1. Đọc danh sách bài tập từ ảnh hoặc input.
2. Phân loại từng bài theo dạng, mức độ, khả năng ra thi và dẫn chứng ưu tiên.
3. Gắn ưu tiên: bắt buộc, nên làm, làm nếu còn thời gian, bỏ qua.
4. Nêu lý do chọn hoặc bỏ bài.
5. Ghi kiến thức cần trước khi làm.
6. Rút công thức bắt buộc: công thức, ý nghĩa, vì sao cần nhớ, dùng cho bài nào.
7. Tạo khung tư duy theo dạng bài: nhận diện trong đề, công thức bật ra, cách chọn công thức theo câu hỏi, thought process, cách trình bày, bẫy nhận dạng sai và lỗi dễ sai.
8. Đề xuất thứ tự làm bài từ dễ đến khó.
9. Trong `Thứ tự làm bài đề xuất` và `Gợi ý ôn nhanh`, mỗi bài hoặc nhóm bài nên có ghi chú ngắn trong ngoặc nói vì sao chọn hoặc luyện kiến thức gì.

## Quy tắc nhận diện dạng bài trong priority

- File `exercises/*-priority.md` không chỉ là danh sách bài nên làm, mà phải là bản đồ nhận diện dạng bài.
- Mỗi dạng bài chính trong mục `Khung tư duy theo dạng bài` phải giúp người học nhìn đề và trả lời được:
  - Bài này thuộc dạng nào?
  - Dấu hiệu nào trong đề cho thấy dạng đó?
  - Công thức hoặc định luật nào phải bật ra đầu tiên?
  - Nếu đề hỏi đại lượng khác nhau thì chọn công thức tiếp theo như thế nào?
  - Cần tự hỏi gì trước khi thay số?
  - Bẫy nhận dạng sai là gì?
- Với mỗi dạng bài, ưu tiên cấu trúc:
  - `Bài áp dụng`.
  - `Nhận dạng trong đề`.
  - `Công thức bật ra đầu tiên`.
  - `Chọn công thức tiếp theo theo câu hỏi đề`.
  - `Cách tư duy giải`.
  - `Cách trình bày`.
  - `Bẫy nhận dạng sai`.
  - `Lỗi tính toán/trình bày dễ mất điểm`.
- `Nhận dạng trong đề` phải cụ thể, ví dụ: đề có cụm nào, đại lượng nào, hình vẽ nào, yêu cầu tìm gì.
- `Công thức bật ra đầu tiên` là công thức hoặc định luật lõi để mở bài, không phải toàn bộ bảng công thức.
- `Chọn công thức tiếp theo theo câu hỏi đề` phải nối câu hỏi của đề với công thức cần dùng, ví dụ hỏi thời gian, hỏi vận tốc, hỏi công, hỏi lực căng, hỏi nhiệt lượng.
- Không viết khung tư duy quá chung kiểu "áp dụng công thức phù hợp"; phải nói rõ công thức nào và điều kiện dùng.

## Quy tắc dẫn chứng ưu tiên

- Khi ghi `Khả năng ra thi`, không được chỉ ghi kết luận như `Cao`, `Trung bình`, `Thấp` mà thiếu căn cứ.
- Mỗi bài trong bảng phải có cột `Dẫn chứng ưu tiên` hoặc nội dung tương đương, nêu nguồn context cụ thể.
- Dẫn chứng ưu tiên lấy từ:
  - `EXAM_CONTEXT.md`: cấu trúc điểm, chương rất trọng tâm, bảng trọng tâm ôn tập.
  - `EXAM_ANALYSIS.md`: đề mẫu, ma trận chương theo phần thi, kỹ năng đã xuất hiện.
  - `EXAM_PATTERNS.md`: dạng bài tương ứng và lỗi sai thường gặp.
  - `LEARNING_PLAN.md`: buổi học, nhóm kiến thức và thứ tự ưu tiên.
  - File `exercises/[ten-chuong]-priority.md` cũ nếu đang cập nhật.
- Nếu bài giống trực tiếp đề mẫu hoặc pattern đã ghi, nói rõ nguồn đó.
- Nếu bài chỉ được suy luận từ bảng trọng tâm hoặc là bài luyện nền, ghi rõ là `suy luận từ bảng trọng tâm`, `luyện nền` hoặc `làm nếu còn thời gian`, không nói như chắc chắn sẽ ra thi.
- Dẫn chứng trong bảng cần ngắn, thường 1-2 ý; không biến bảng thành đoạn giải thích dài.

## Khi cập nhật file

- Chỉ cập nhật file nếu `Update` cho phép.
- File đích mặc định: `exercises/[ten-chuong]-priority.md`.
- Làm theo cấu trúc chuẩn trong `exercises/README.md`.
- Không ghi danh sách bài cụ thể vào `EXAM_PATTERNS.md`.
- Nếu phát hiện công thức quan trọng chưa có trong `FORMULAS.md`, chỉ đề xuất cập nhật; không tự sửa nếu chưa được phép.

## Cách viết

- Ngắn gọn, phục vụ học nhanh.
- Không biến file thành lời giải đầy đủ từng bài.
- Ưu tiên bài sát đề thi PHY1095.
