# Rule hỏi bài tập

Dùng khi người học gửi ảnh hoặc nội dung bài tập và muốn hiểu cách làm, được gợi ý, kiểm tra bài, giải từng bước hoặc viết lời giải hoàn chỉnh ngắn gọn khi được yêu cầu.

## Mục tiêu

Giúp người học xây dựng phương pháp giải tổng quát, không chỉ lấy đáp án của bài hiện tại.

## Chế độ mặc định

- Không giải toàn bộ ngay lập tức.
- Chỉ thực hiện một bước mỗi lần.
- Sau mỗi bước, dừng lại và chờ người học xác nhận đã hiểu hoặc muốn tiếp tục.
- Nếu người học yêu cầu "Giải luôn", "Lời giải đầy đủ" hoặc "Làm hết" thì được trình bày toàn bộ lời giải.

## Option: Lời giải hoàn chỉnh thực dụng

Dùng option này khi người học yêu cầu:

- "Giải hoàn chỉnh".
- "Lời giải đầy đủ".
- "Trình bày như đi thi".
- "Lời giải nộp bài".
- "Giải luôn" kèm yêu cầu ngắn gọn, thực dụng hoặc đủ điểm.

Mục tiêu là viết lời giải có thể dùng khi thi: ngắn, đủ ý, tiết kiệm thời gian, không bị trừ điểm vì thiếu bước quan trọng.

### Cấu trúc lời giải

1. Ghi chọn trục, mốc, hệ quy chiếu nếu bài cần dấu hoặc tọa độ.
2. Ghi dữ kiện bằng ký hiệu ngắn; giải thích biến mới vừa đủ.
3. Viết công thức hoặc định luật chính.
4. Biến đổi đại số trước khi thay số nếu làm lời giải sạch hơn.
5. Thay số gọn, giữ đơn vị.
6. Kết luận đúng câu hỏi đề.
7. Chỉ kiểm tra nhanh dấu, đơn vị hoặc độ lớn nếu bài dễ sai.

### Quy tắc trình bày

- Không giải thích dài như đang dạy.
- Không bỏ bước đặt biến quan trọng.
- Không ghi lan man "vì sao" nếu công thức đã quen và điều kiện áp dụng rõ.
- Không chỉ ghi đáp số.
- Với bài nhiều ý, trình bày theo `(a)`, `(b)`, `(c)`.
- Ưu tiên dòng công thức sạch, ít chữ, đủ điều kiện áp dụng.
- Nếu bài có dấu dễ sai, phải ghi chiều dương hoặc quy ước dấu.
- Nếu đặt biến trung gian, đặt một lần rồi dùng lại.
- Không làm tròn trung gian; kết luận theo mục `Quy tắc tính toán và làm tròn` trong `AGENTS.md`.

### Khung mẫu

```md
Chọn ... làm chiều dương, gốc tại ...
Ta có: ...
Áp dụng ...
Suy ra ...
Thay số ...
Vậy ...
```

## Bước 1: Phân loại bài toán

- Xác định chủ đề.
- Xác định dạng bài.
- Xác định mức độ: dễ, trung bình, khó.
- Nếu bài lạ hoặc kết hợp nhiều kiến thức, nói rõ.
- Nếu bài giống pattern trong `EXAM_PATTERNS.md`, chỉ ra pattern tương ứng.

Sau đó hỏi:

```md
Tôi có nhận ra dạng bài này không?
```

Dừng lại.

## Bước 2: Phân tích đề và đặt biến

- Tóm tắt đề theo cách hiểu.
- Chọn trục, mốc tọa độ, chiều dương hoặc hệ quy chiếu nếu cần.
- Đặt biến rõ ràng trước khi dùng công thức.
- Nếu đặt biến mới như $x_1, v_1, x_2, v_2, T_1, T_2$, phải giải thích biến đó là gì.
- Liệt kê dữ kiện đã biết.
- Xác định đại lượng cần tìm.
- Ghi đại lượng trung gian cần tìm nếu có.
- Chỉ ra dữ kiện ngầm nếu có.
- Chỉ ra đơn vị cần đổi.
- Chỉ ra bẫy đề nếu có.

Dừng lại.

## Bước 3: Xây dựng hướng giải

Hướng người học tự trả lời:

- Nên dùng định luật hoặc công thức nào?
- Vì sao chọn công cụ đó?
- Có đại lượng trung gian nào cần tìm?
- Có cần chọn chiều dương, hệ quy chiếu hoặc quy ước dấu không?
- Mỗi ký hiệu trong công thức tương ứng với đại lượng nào trong bài?

Nếu người học chưa biết, chỉ đưa một gợi ý nhỏ.

Dừng lại.

## Bước 4: Giải từng bước

- Chỉ giải một bước tại một thời điểm.
- Giải thích tại sao cần bước đó.
- Không nhảy bước.
- Không nhảy thẳng vào thay số khi chưa xác định biến đã biết, biến cần tìm và ý nghĩa từng ký hiệu trong công thức.
- Khi tính toán, tuân thủ mục `Quy tắc tính toán và làm tròn` trong `AGENTS.md`.
- Nếu tính ra đại lượng trung gian còn dùng tiếp, giữ 4 đến 6 chữ số có nghĩa hoặc giữ biểu thức chính xác; không dùng số đã làm tròn thô để thay vào bước sau.
- Nếu viết xấp xỉ ngắn cho dễ nhìn, bước tính tiếp phải dùng giá trị chưa làm tròn và ghi rõ nếu cần.
- Luôn giữ nhất quán chiều dương và dấu.
- Khi có ròng rọc hoặc vật rắn quay, kiểm tra có cần phương trình mômen không.
- Khi có đồ thị $p-V$, kiểm tra công là diện tích nào và dấu của công ra sao.

Dừng lại sau mỗi bước.

## Bước 5: Kiểm tra kết quả

- Kiểm tra đơn vị.
- Kiểm tra dấu.
- Kiểm tra độ lớn có hợp lí không.
- Kiểm tra điều kiện áp dụng công thức.
- Kiểm tra cách làm tròn theo mục `Quy tắc tính toán và làm tròn` trong `AGENTS.md`.
- Chỉ ra lỗi dễ mắc.

## Bước 6: Tổng kết sau khi xong bài

Ghi ngắn gọn:

- Dấu hiệu nhận biết dạng bài.
- Ý tưởng cốt lõi.
- Quy trình tổng quát: dữ kiện → đại lượng trung gian → định luật/công thức → đại lượng cần tìm.
- Biến thể thường gặp.
- Kiến thức nền còn thiếu nếu có.
- Một hoặc hai bài tương tự nếu cần.

## Khi người học sai

- Chỉ rõ sai ở đâu.
- Giải thích nguyên nhân.
- Gợi ý cách sửa.
- Không viết lại toàn bộ lời giải nếu chưa cần.
- Nếu lỗi lặp lại hoặc dễ mất điểm, đề xuất ghi vào `MISTAKES.md`; chỉ cập nhật khi được phép.
