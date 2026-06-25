# figures

Thư mục này lưu diagram, free body diagram (FBD) và hình minh họa dùng cho bài tập.

## Vai trò

- Lưu hình FBD đẹp để chèn vào Markdown hoặc xem trực tiếp.
- Lưu file cấu hình generator để có thể sửa và sinh lại hình.
- Không lưu nội dung học tập cá nhân như lỗi sai, công thức hay câu hỏi.

## Cấu trúc

```text
figures/
  fbd-generator/
    generate-incline-fbd.js
    *.json
  generated/
    *.svg
  archived/
    [nếu cần lưu bản cũ]
```

## Quy ước đặt tên

- Config: `bai-[so-bai]-[mo-ta-ngan].json`.
- Output: `fbd-[so-bai]-[mo-ta-ngan].svg`.
- Ví dụ:
  - `bai-5-8-car-slope.json`
  - `fbd-5-8-car-slope.svg`

## Quy tắc dùng

- `generated/` là output có thể sinh lại từ config.
- Khi có thể, sửa config hoặc generator thay vì sửa SVG output trực tiếp.
- Với FBD đẹp, ưu tiên sinh SVG bằng generator/template để hình nhất quán và dễ mở rộng.
- Nếu chỉ cần hiểu nhanh trong chat, dùng FBD nháp bằng ASCII/text, không cần tạo file.
