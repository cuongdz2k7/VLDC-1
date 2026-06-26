# topics

Thư mục này dùng để lưu bản cô đọng kiến thức theo chương để ôn thi nhanh.

Khi tạo hoặc cập nhật tổng kết chương, AI phải được `AGENTS.md` điều phối đọc `rules/chapter-summary.md`.

Mỗi file trong `topics/` nên tương ứng với một chương hoặc một cụm kiến thức lớn. Topic không thay thế file thực hành trong `exercises/`; topic chỉ rút phần cần nhớ, công thức trọng tâm, điều kiện áp dụng và quy trình làm bài từ file thực hành đó.

Ví dụ:

- `co-hoc-quay.md`
- `dong-luc-hoc.md`
- `cong-nang-luong.md`
- `dong-luong-va-va-cham.md`
- `khi-li-tuong.md`
- `nhiet-dong-luc-hoc.md`

Không dùng `topics/` để lưu danh sách từng bài tập cụ thể. Danh sách bài tập đã lọc và khung thực hành chi tiết nên đặt trong `exercises/`.

## Khi nào cập nhật topic?

- Sau khi học xong một chương.
- Sau khi làm đủ các bài tập trọng tâm của chương.
- Sau khi phát hiện một quy trình giải hoặc lỗi sai quan trọng cần nhớ lâu dài.
- Khi người học inject file `exercises/[ten-chuong]-priority.md` và muốn cô đọng thành topic.

## Cấu trúc chuẩn cho `topics/[ten-chuong].md`

```md
# [Tên chương]

## Vai trò trong đề thi

## Kiến thức cốt lõi

## Công thức cần nhớ

## Công thức bắt buộc liên kết với bài tập ưu tiên

## Điều kiện áp dụng

## Dạng bài hay ra

## Quy trình giải chung

## Lỗi sai thường gặp

## Bài đại diện nên xem lại

## Câu hỏi còn mở
```

## Quy tắc ghi topic

- Viết ngắn gọn, phục vụ ôn thi nhanh.
- Ưu tiên kiến thức có trong `EXAM_CONTEXT.md` và `EXAM_PATTERNS.md`.
- Nếu prompt inject file `exercises/[ten-chuong]-priority.md`, lấy dữ liệu chính từ file đó.
- Nếu chương đã có `exercises/[ten-chuong]-priority.md`, kiểm tra mục công thức bắt buộc trong file đó để đưa các công thức thật sự quan trọng vào topic.
- `Kiến thức cốt lõi`: chỉ ghi phần cần để làm bài, không viết lại lý thuyết dài.
- `Công thức cần nhớ`: ghi công thức trọng tâm, không chép bảng công thức quá dài từ `exercises/`.
- `Công thức bắt buộc liên kết với bài tập ưu tiên`: lấy từ mục công thức bắt buộc trong file `exercises/`, kèm bài/dạng áp dụng nếu cần.
- `Dạng bài hay ra`: với mỗi dạng chính, ghi ngắn gọn dấu hiệu nhận diện trong đề, công thức lõi cần bật ra và bẫy nhận dạng sai nếu có.
- `Quy trình giải chung`: cô đọng từ khung tư duy theo dạng bài trong file `exercises/`, ưu tiên luồng nhìn đề → nhận dạng dạng bài → chọn công thức lõi → kiểm tra điều kiện áp dụng.
- `Bài đại diện nên xem lại`: ưu tiên bài bắt buộc và bài nên làm trong file `exercises/`.
- Không copy nguyên bảng bài tập hoặc toàn bộ khung tư duy từ `exercises/`; chỉ rút ý chính.
- Nếu có công thức dùng lại nhiều lần, đồng thời cập nhật `FORMULAS.md` khi `Update` cho phép.
- Nếu có lỗi sai cá nhân quan trọng, đồng thời cập nhật `MISTAKES.md` khi `Update` cho phép.
- Nếu còn câu hỏi chưa hiểu, đồng thời cập nhật `QUESTIONS.md` khi `Update` cho phép.
- Nếu topic làm thay đổi thứ tự hoặc ưu tiên ôn tập, cập nhật `LEARNING_PLAN.md` khi `Update` cho phép.
