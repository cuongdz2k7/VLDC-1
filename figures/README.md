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
- Khi đang học bài, ưu tiên FBD kiểu sketch gọn như vở nháp hơn là hình trang trí nhiều khung.
- Nếu chỉ cần hiểu nhanh trong chat, dùng FBD nháp bằng ASCII/text, không cần tạo file.

## Phong cách FBD ưu tiên

FBD phục vụ học nhanh nên rõ lực và dấu trước, đẹp vừa đủ sau. Mặc định nên vẽ theo kiểu sketch:

- Vẽ vật hoặc hệ vật gần giống hình đề.
- Ghi các lực chính tác dụng lên từng vật.
- Ghi chiều chuyển động hoặc chuyển dời bằng mũi tên rõ.
- Ghi trục tọa độ hoặc chiều dương, đặc biệt khi chọn chiều dương theo chiều chuyển động.
- Với bài công, hình phải giúp nhìn nhanh lực nào cùng chiều chuyển dời, ngược chiều chuyển dời hoặc vuông góc chuyển dời.
- Với bài tốc độ không đổi, có thể ghi $a=0$ hoặc $\Delta K=0$ nếu cần.
- Không lạm dụng khung panel, màu sắc hoặc chi tiết trang trí nếu làm hình khó đọc.
- Có thể thêm `sketch` vào tên file nếu là bản vẽ gọn để học nhanh, ví dụ `fbd-6-7-sketch.svg`.
