# topics

Thư mục này dùng để lưu tổng kết kiến thức theo chương.

Khi tạo hoặc cập nhật tổng kết chương, AI phải được `AGENTS.md` điều phối đọc `rules/chapter-summary.md`.

Mỗi file trong `topics/` nên tương ứng với một chương hoặc một cụm kiến thức lớn. Ví dụ:

- `co-hoc-quay.md`
- `dong-luc-hoc.md`
- `cong-nang-luong.md`
- `dong-luong-va-va-cham.md`
- `khi-li-tuong.md`
- `nhiet-dong-luc-hoc.md`

Không dùng `topics/` để lưu danh sách từng bài tập cụ thể. Danh sách bài tập đã lọc nên đặt trong `exercises/`.

## Khi nào cập nhật topic?

- Sau khi học xong một chương.
- Sau khi làm đủ các bài tập trọng tâm của chương.
- Sau khi phát hiện một quy trình giải hoặc lỗi sai quan trọng cần nhớ lâu dài.

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
- Nếu có công thức dùng lại nhiều lần, đồng thời cập nhật `FORMULAS.md`.
- Nếu chương đã có `exercises/[ten-chuong]-priority.md`, kiểm tra mục công thức bắt buộc trong file đó để đưa các công thức thật sự quan trọng vào topic.
- Nếu có lỗi sai cá nhân quan trọng, đồng thời cập nhật `MISTAKES.md`.
- Nếu còn câu hỏi chưa hiểu, đồng thời cập nhật `QUESTIONS.md`.
