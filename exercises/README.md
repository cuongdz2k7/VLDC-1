# exercises

Thư mục này dùng để lưu tổng hợp kiến thức thực hành theo bài tập.

Đặc biệt, các file `*-priority.md` là bản đồ học và làm bài của từng chương: ngoài việc chọn bài, cần gom kiến thức thực hành, mục đích luyện, công thức bắt buộc và khung tư duy theo dạng bài để người học tự follow khi giải.

Khi tạo hoặc cập nhật nội dung trong thư mục này, AI phải được `AGENTS.md` điều phối đọc `rules/exercise-practice-summary.md`.

Ví dụ:

- `co-hoc-quay-priority.md`
- `dong-luong-va-va-cham-priority.md`
- `nhiet-dong-luc-hoc-priority.md`
- `do-thi-pv-priority.md`

Không dùng `EXAM_PATTERNS.md` để lưu từng bài cụ thể. `EXAM_PATTERNS.md` chỉ lưu dạng bài tổng quát có khả năng ra thi.

## Khi nào tạo file tổng hợp kiến thức thực hành?

- Khi người học gửi ảnh các bài tập trọng tâm của một chương.
- Khi cần chọn bài nên làm trước để tiết kiệm thời gian.
- Khi cần bỏ qua bài ít khả năng ra thi.
- Khi cần rút công thức, cách nghĩ, cách trình bày và lỗi sai từ một nhóm bài tập.

## Cấu trúc chuẩn cho `exercises/[ten-chuong]-priority.md`

```md
# [Tên chương] - tổng hợp kiến thức thực hành

## Vai trò trong đề thi

## Mục tiêu học nhanh

## Bảng bài tập và mục đích luyện

| Bài | Dạng bài | Mức độ | Khả năng ra thi | Dẫn chứng ưu tiên | Ưu tiên | Mục đích luyện | Kiến thức cần trước khi làm |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Công thức cần nhớ bắt buộc

| Công thức | Ý nghĩa | Vì sao cần nhớ | Dùng cho bài |
| --- | --- | --- | --- |

## Khung tư duy theo dạng bài

### Dạng 1: [Tên dạng]

- Bài áp dụng:
- Nhận dạng trong đề:
- Mục tiêu:
- Công thức bật ra đầu tiên:
- Chọn công thức tiếp theo theo câu hỏi đề:
- Cách tư duy giải:
- Cách trình bày:
- Bẫy nhận dạng sai:
- Lỗi tính toán/trình bày dễ mất điểm:

## Thứ tự làm bài đề xuất

## Gợi ý ôn nhanh

## Lỗi dễ mất điểm
```

## Quy tắc ưu tiên bài tập

- `Bắt buộc`: dạng có khả năng cao ra thi hoặc nằm trong bảng trọng tâm.
- `Nên làm`: dạng quan trọng nhưng không phải trọng tâm cao nhất.
- `Làm nếu còn thời gian`: bài giúp mở rộng hoặc luyện thêm.
- `Bỏ qua`: bài quá xa trọng tâm, quá mẹo, hoặc ít khả năng xuất hiện trong đề.

Khi bỏ qua bài, luôn ghi lý do để sau này kiểm tra lại.

## Quy tắc ghi bảng bài tập và mục đích luyện

- Mỗi bài phải gắn với một mục đích luyện rõ ràng, ví dụ: luyện đọc đồ thị, luyện chọn chiều dương, luyện tách trục $x,y$.
- `Ưu tiên` cho biết có nên làm bài đó không; `Mục đích luyện` cho biết vì sao bài đó đáng làm.
- `Dẫn chứng ưu tiên` phải nêu nguồn context cụ thể, ví dụ `EXAM_CONTEXT.md`, `EXAM_ANALYSIS.md`, `EXAM_PATTERNS.md`, `LEARNING_PLAN.md` hoặc file priority cũ nếu đang cập nhật.
- Không ghi `Khả năng ra thi` kiểu kết luận chung chung nếu không có căn cứ đi kèm.
- Nếu bài chỉ được suy luận từ bảng trọng tâm hoặc dùng để luyện nền, phải ghi rõ trong `Dẫn chứng ưu tiên`; không viết như thể chắc chắn sẽ xuất hiện trong đề.
- Bài ít khả năng ra thi vẫn có thể giữ lại nếu nó giúp sửa một lỗi nền quan trọng.

## Quy tắc ghi thứ tự làm bài và gợi ý ôn nhanh

- Trong `Thứ tự làm bài đề xuất`, mỗi bài nên có ghi chú ngắn trong ngoặc để nói vì sao làm bài đó hoặc bài đó luyện kiến thức gì.
- Trong `Gợi ý ôn nhanh`, mỗi nhóm bài nên có ghi chú ngắn trong ngoặc để nói nhóm đó giúp nắm phần kiến thức nào.
- Ghi chú phải ngắn, đủ để nhìn vào là biết bài đó dùng để luyện gì; không viết lời giải trong phần này.

## Quy tắc ghi công thức bắt buộc

- Mỗi file `*-priority.md` phải có mục `Công thức cần nhớ bắt buộc`.
- Chỉ ghi công thức thật sự cần để làm các bài đã chọn, tránh biến file bài tập thành bảng công thức dài.
- Với mỗi công thức, ghi rõ vì sao cần nhớ và dùng cho bài nào.
- Nếu công thức đã có trong `FORMULAS.md`, dùng đúng ký hiệu ở đó.
- Nếu công thức quan trọng chưa có trong `FORMULAS.md`, chỉ đề xuất cập nhật `FORMULAS.md`; không tự sửa nếu người học chưa cho phép.

## Quy tắc ghi khung tư duy theo dạng bài

- Mỗi dạng bài chính nên có một khung tư duy riêng, không cần viết lời giải chi tiết cho từng bài.
- `Nhận dạng trong đề` phải ghi rõ dấu hiệu cụ thể giúp nhận ra dạng bài: cụm từ trong đề, hình vẽ, đại lượng được cho, đại lượng cần tìm, điều kiện như không trượt, đẳng nhiệt, ròng rọc có khối lượng.
- `Công thức bật ra đầu tiên` là công thức hoặc định luật lõi dùng để mở bài, ví dụ $\sum M=I\alpha$, $Q=\Delta U+A$, $A=\int p\,dV$.
- `Chọn công thức tiếp theo theo câu hỏi đề` nối từng kiểu câu hỏi với công thức tương ứng, ví dụ hỏi vận tốc thì dùng công thức động học, hỏi công thì dùng công thức công, hỏi lực căng thì lập thêm phương trình Newton.
- `Cách tư duy giải` là các câu hỏi tự hỏi khi gặp dạng bài, ví dụ: cần tìm gì, dữ kiện nào quyết định công thức, có phải chọn chiều dương không.
- `Cách trình bày` là thứ tự viết lời giải sao cho dễ kiểm tra: chọn trục, ghi dữ kiện, viết công thức, thay số, kết luận, kiểm tra đơn vị và dấu.
- `Bẫy nhận dạng sai` là các trường hợp nhìn giống nhưng dùng sai công thức hoặc sai điều kiện áp dụng.
- Mỗi dạng phải gắn với bài áp dụng cụ thể trong bảng bài tập.
- Nội dung cần ngắn gọn, phục vụ học nhanh và làm bài tương tự, không biến file thành lời giải đầy đủ.
