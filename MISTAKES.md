# MISTAKES.md

File này ghi các lỗi sai cần tránh khi học và làm đề.

## Lỗi về dấu và chiều dương

- Chưa chọn chiều dương trước khi viết phương trình.
- Đổi chiều chuyển động nhưng không đổi dấu lực.
- Nhầm điều kiện quay nhanh dần và chậm dần.

## 2026-06-25 - Chương 2 động lực học

- Bài thuộc chương: Động lực học, hệ vật tiếp xúc trên mặt ngang không ma sát.
- Lỗi sai: Nhầm "hệ vật được xét" với "hệ quy chiếu" khi phân tích bài hai vật A và B tiếp xúc nhau.
- Vì sao sai: Hệ vật là phần vật mình chọn để viết định luật II Newton, ví dụ xét riêng B hoặc xét cả hệ A+B. Hệ quy chiếu là nơi quan sát chuyển động, ví dụ mặt đất hoặc thang máy.
- Cách sửa: Khi làm bài Newton, trước tiên hỏi "mình đang xét vật nào hoặc hệ vật nào?", sau đó mới vẽ lực ngoài tác dụng lên hệ đó.
- Dấu hiệu để lần sau tránh lỗi: Nếu đang nói "xét riêng B" hay "xét hệ A+B", đó là chọn hệ vật, không phải đổi hệ quy chiếu.

- Lỗi sai: Tưởng lực A tác dụng lên B bị triệt tiêu khi xét hệ A+B thì lực đó không còn làm B chuyển động.
- Vì sao sai: Lực $F_{AB}$ và $F_{BA}$ chỉ triệt tiêu trong tổng lực của toàn hệ A+B vì chúng là nội lực. Khi xét riêng B, $F_{AB}$ là ngoại lực tác dụng lên B và là lực làm B gia tốc.
- Cách sửa: Dùng quy trình: xét cả hệ A+B để tìm gia tốc chung $a$, rồi xét riêng B để tìm lực tiếp xúc $F_{AB}=m_Ba$.
- Dấu hiệu để lần sau tránh lỗi: Nếu đề hỏi lực giữa hai vật, phải tách riêng vật chịu lực đó; nội lực của hệ lớn sẽ trở thành ngoại lực của vật nhỏ được tách ra.

## 2026-06-25 - Tuần 1 động học

- Bài thuộc chương: Động học, chuyển động nhiều giai đoạn và ném xiên.
- Lỗi sai: Làm tròn đại lượng trung gian quá sớm, ví dụ dùng $t\approx 3{,}20\,s$ để tính tiếp trong bài ném xiên.
- Vì sao sai: Sai số trung gian bị nhân tiếp vào đại lượng cuối, làm kết quả lệch.
- Cách sửa: Giữ 4 đến 6 chữ số có nghĩa hoặc dùng biểu thức chưa làm tròn; chỉ làm tròn ở kết luận cuối.
- Dấu hiệu để lần sau tránh lỗi: Nếu đại lượng trung gian còn xuất hiện trong công thức sau, không dùng giá trị đã làm tròn thô.

- Lỗi sai: Dễ nhầm dấu vận tốc của tàu/vật đích trong bài ném xiên có vật đích chuyển động.
- Vì sao sai: Tốc độ luôn dương, nhưng vận tốc trong phương trình $x=x_0+vt$ phải có dấu theo chiều dương đã chọn.
- Cách sửa: Chọn trục trước, rồi ghi vận tốc có dấu, ví dụ nếu trục $Ox$ hướng từ bờ ra tàu mà tàu chạy về bờ thì $v_{\tau x}<0$.
- Dấu hiệu để lần sau tránh lỗi: Nếu vật chuyển động ngược chiều dương, vận tốc trong phương trình tọa độ phải âm.

- Lỗi sai: Khi bài cần tìm đại lượng cuối như $D$, dễ chỉ ghi dữ kiện đã biết và cần tìm mà quên đại lượng trung gian.
- Vì sao sai: Với ném xiên, $D$ thường phụ thuộc vào thời gian bay $t$; $t$ phải lấy từ phương $y$ trước.
- Cách sửa: Lập dàn ý phụ thuộc: phương $y$ tìm $t$, sau đó phương $x$ và điều kiện gặp nhau tìm $D$.
- Dấu hiệu để lần sau tránh lỗi: Nếu câu hỏi là khoảng cách/tầm xa nhưng có độ cao hoặc vật đích chuyển động, hãy tìm thời gian trước.

## Lỗi về ròng rọc có mômen quán tính

- Cho rằng lực căng hai bên dây luôn bằng nhau.
- Quên viết phương trình mômen cho ròng rọc.
- Quên điều kiện không trượt: $a = \alpha R$.
- Nhầm khối lượng vật treo với khối lượng ròng rọc.
- Quên đổi bán kính từ cm sang m.

## Lỗi về mặt phẳng nghiêng

- Nhầm $mg\sin\alpha$ và $mg\cos\alpha$.
- Quên lực pháp tuyến.
- Không xét đúng chiều thành phần trọng lực dọc mặt phẳng nghiêng.

## Lỗi về khí lí tưởng và nhiệt động lực học

- Quên đổi nhiệt độ Celsius sang Kelvin.
- Quên đổi áp suất sang Pa.
- Nhầm công khí thực hiện với công ngoại lực thực hiện lên khí.
- Nhầm dấu của $Q$, $A$, $\Delta U$.
- Dùng sai công thức công đẳng nhiệt.
- Dùng log cơ số 10 thay cho $\ln$.

## Mẫu ghi lỗi sau mỗi bài

```md
## [Ngày] - [Tên bài hoặc dạng bài]

- Bài thuộc chương:
- Lỗi sai:
- Vì sao sai:
- Cách sửa:
- Dấu hiệu để lần sau tránh lỗi:
```
