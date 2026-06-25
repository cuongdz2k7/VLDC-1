# fbd-generator

Thư mục này chứa script và file cấu hình để sinh free body diagram (FBD).

## Generator hiện có

- `generate-incline-fbd.js`: sinh FBD cho vật trên mặt phẳng nghiêng, có thể có cáp xiên.
- V1 hỗ trợ tốt dạng mặt phẳng nghiêng. Các dạng hệ nhiều vật, ròng rọc, thang máy sẽ thêm generator riêng khi cần.
- `5-8-car-slope.json` là prototype cũ được giữ lại để tham chiếu; config mới nên dùng tên theo quy ước `bai-[so-bai]-[mo-ta-ngan].json`.

## Cách chạy

```powershell
node figures\fbd-generator\generate-incline-fbd.js figures\fbd-generator\bai-5-8-car-slope.json figures\generated\fbd-5-8-car-slope.svg
```

## Cấu hình JSON

Các field chính:

- `title`: tiêu đề hình.
- `subtitle`: mô tả ngắn dưới tiêu đề.
- `description`: mô tả cho SVG.
- `canvas.width`, `canvas.height`: kích thước canvas.
- `slopeAngleDeg`: góc mặt phẳng nghiêng so với phương ngang.
- `cableAngleDeg`: góc cáp so với mặt phẳng nghiêng.
- `body.cx`, `body.cy`: vị trí tâm vật.
- `body.width`, `body.height`: kích thước vật.

## Quy tắc sửa

- Muốn đổi nội dung bài cụ thể thì sửa file JSON.
- Muốn đổi style chung thì sửa generator.
- Không sửa SVG trong `generated/` nếu có thể sinh lại từ config.
