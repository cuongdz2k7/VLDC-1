# Chương 2. Động lực học - tổng hợp kiến thức thực hành

## Vai trò trong đề thi

Động lực học là phần rất trọng tâm của PHY1095 vì thuộc cụm cơ học bài tập 4 điểm. Theo `EXAM_CONTEXT.md` và `EXAM_PATTERNS.md`, các dạng cần ưu tiên là định luật II Newton, phân tích lực, mặt phẳng nghiêng, hệ nhiều vật, lực căng dây và chuyển động tròn.

Mục tiêu của chương này không phải học nhiều công thức, mà là luyện quy trình: chọn vật, vẽ lực, chọn trục, chiếu lực, viết phương trình Newton và kiểm tra dấu.

## Mục tiêu học nhanh

- Vẽ được giản đồ lực cho từng vật.
- Chọn trục thông minh theo chuyển động hoặc theo mặt phẳng nghiêng.
- Viết đúng $\sum F=ma$ theo từng trục.
- Phân biệt trọng lượng, khối lượng, lực pháp tuyến, lực căng, ma sát và lực tiếp xúc.
- Làm được bài hệ nhiều vật trước khi học ròng rọc có mômen quán tính.
- Nắm chuyển động tròn: lực hướng tâm không phải lực mới, mà là hợp lực hướng vào tâm.

## Bảng bài tập và mục đích luyện

| Bài | Dạng bài | Mức độ | Khả năng ra thi | Ưu tiên | Mục đích luyện | Kiến thức cần trước khi làm |
| --- | --- | --- | --- | --- | --- | --- |
| 4.6 | Electron tăng tốc, tìm lực từ gia tốc | Dễ | Thấp đến vừa | Làm nếu còn thời gian | Nối động học với $F=ma$, luyện đổi cm sang m | Chuyển động thẳng gia tốc không đổi, định luật II Newton |
| 4.7 | Người trượt băng dừng do ma sát | Dễ | Vừa | Bắt buộc | Luyện lực ma sát là lực gây gia tốc chậm dần | $v=v_0+at$, $F=ma$, dấu của gia tốc |
| 4.15 | Tên lửa có lực đẩy phụ thuộc thời gian | Trung bình | Vừa | Nên làm | Luyện lực biến thiên theo thời gian và phân biệt có/không có trọng lực | Hàm lực $F(t)$, trọng lượng $mg$, $F_{net}=ma$ |
| 4.16 | Trọng lượng trên Trái Đất và mặt trăng | Dễ | Vừa | Bắt buộc | Phân biệt khối lượng và trọng lượng | $W=mg$, khối lượng không đổi |
| 4.22 | Lực pháp tuyến trong thang máy | Trung bình | Cao | Bắt buộc | Luyện trọng lượng biểu kiến và dấu gia tốc | $N-W=ma$, chọn chiều dương |
| 4.23 | Hai thùng tiếp xúc trên mặt ngang không ma sát | Trung bình | Cao | Bắt buộc | Luyện hệ vật và lực tiếp xúc giữa hai vật | Xét cả hệ để tìm $a$, xét vật B để tìm lực tiếp xúc |
| 5.8 | Xe trên mặt phẳng nghiêng được giữ bằng cáp xiên | Trung bình đến khó | Cao | Bắt buộc | Luyện giản đồ lực, chiếu lực khi lực căng không song song mặt phẳng | Thành phần lực trên mặt phẳng nghiêng, cân bằng tĩnh |
| 5.90 | Hai vật nối dây qua ròng rọc nhẹ trên hai mặt phẳng nghiêng | Khó | Cao | Bắt buộc | Luyện hệ nhiều vật, chiều chuyển động, lực căng dây | $mg\sin\alpha$, dây nhẹ, ròng rọc không ma sát |
| 5.102 | Vật treo trong xe buýt rẽ ngang | Trung bình đến khó | Cao | Bắt buộc | Luyện chuyển động tròn và lực căng đóng vai trò tạo hướng tâm | $a_{rad}=v^2/R$, phân tích lực theo phương ngang/dọc |
| 5.103 | Lực cản phụ thuộc vận tốc | Khó | Thấp đến vừa | Làm nếu còn thời gian | Luyện bài khó, phương trình vi phân đơn giản | $m\,dv/dt=\sum F$, lực cản phụ thuộc $v$ |

## Công thức cần nhớ bắt buộc

| Công thức | Ý nghĩa | Vì sao cần nhớ | Dùng cho bài |
| --- | --- | --- | --- |
| $\sum \vec F=m\vec a$ | Định luật II Newton dạng vector | Công thức gốc của toàn chương | Tất cả bài |
| $\sum F_x=ma_x$, $\sum F_y=ma_y$ | Chiếu định luật II Newton theo trục | Giúp tránh viết sai dấu và sai phương | 4.7, 4.15, 4.22, 4.23, 5.8, 5.90, 5.102 |
| $W=mg$ | Trọng lượng là lực hấp dẫn tác dụng lên vật | Cần phân biệt khối lượng và trọng lượng | 4.16, 4.22, 5.8, 5.90 |
| Trên mặt phẳng nghiêng: $mg\sin\alpha$ dọc mặt phẳng, $mg\cos\alpha$ vuông góc mặt phẳng | Tách trọng lực theo trục nghiêng | Đây là lỗi rất dễ mất điểm | 5.8, 5.90 |
| Ma sát trượt: $f_k=\mu_kN$ | Lực ma sát trượt phụ thuộc pháp tuyến | Dùng khi đề cho hệ số ma sát, đồng thời nhớ ma sát ngược chiều trượt | 4.7 nếu mở rộng |
| Cân bằng: $\sum F_x=0$, $\sum F_y=0$ | Vật đứng yên hoặc chuyển động thẳng đều | Dùng cho bài xe đứng yên trên dốc | 5.8 |
| Hệ vật cùng gia tốc: $a_1=a_2=a$ | Các vật nối dây hoặc tiếp xúc chuyển động cùng nhau | Giúp lập hệ phương trình | 4.23, 5.90 |
| Chuyển động tròn: $a_{rad}=\dfrac{v^2}{R}$ | Gia tốc hướng tâm | Nối lực với chuyển động tròn | 5.102 |
| Hợp lực hướng tâm: $\sum F_{hướng\ tâm}=m\dfrac{v^2}{R}$ | Tổng lực theo bán kính tạo gia tốc hướng tâm | Tránh tưởng lực hướng tâm là lực mới | 5.102 |
| Lực biến thiên: $F_{net}(t)=ma(t)$ | Gia tốc có thể phụ thuộc thời gian nếu lực thay đổi | Dùng cho lực đẩy tên lửa hoặc lực cản | 4.15, 5.103 |

## Khung tư duy theo dạng bài

### Dạng 1: Một vật chịu lực theo một phương

- Bài áp dụng: 4.6, 4.7, 4.15.
- Dấu hiệu nhận biết: Một vật chuyển động thẳng, đề hỏi lực, gia tốc hoặc lực phụ thuộc thời gian.
- Mục tiêu: Tìm gia tốc trước nếu đề cho chuyển động, rồi dùng Newton để tìm lực.
- Thought process:
  - Vật đang xét là vật nào?
  - Chọn chiều dương theo chiều chuyển động hay theo lực tác dụng?
  - Đề cho động học trước hay lực trước?
  - Có trọng lực tham gia theo phương chuyển động không?
- Cách trình bày:
  - Chọn chiều dương.
  - Liệt kê lực theo phương xét.
  - Nếu cần, tìm $a$ từ động học.
  - Viết $\sum F=ma$.
  - Thay số, kết luận độ lớn và hướng.
- Công thức cần dùng: $\sum F=ma$, $v=v_0+at$, $v^2=v_0^2+2a\Delta x$.
- Bẫy dễ sai: Lấy tốc độ dương rồi quên gia tốc chậm dần phải ngược chiều chuyển động.

### Dạng 2: Trọng lượng, pháp tuyến và trọng lượng biểu kiến

- Bài áp dụng: 4.16, 4.22.
- Dấu hiệu nhận biết: Đề nói trọng lượng, cân, lực pháp tuyến, thang máy hoặc gia tốc thẳng đứng.
- Mục tiêu: Phân biệt $m$, $W=mg$ và $N$.
- Thought process:
  - Đại lượng đề cho là khối lượng hay trọng lượng?
  - Chọn chiều dương lên hay xuống?
  - Nếu $N<W$ thì gia tốc hướng nào?
  - Nếu ở hành tinh khác, khối lượng có đổi không?
- Cách trình bày:
  - Ghi $W=mg$.
  - Vẽ hai lực theo phương thẳng đứng: $N$ lên, $W$ xuống.
  - Viết $\sum F_y=ma_y$.
  - Kết luận hướng gia tốc hoặc gia tốc trọng trường.
- Công thức cần dùng: $W=mg$, $N-W=ma$ nếu chọn chiều dương lên.
- Bẫy dễ sai: Nói khối lượng thay đổi khi lên mặt trăng; thực ra trọng lượng thay đổi, khối lượng không đổi.

### Dạng 3: Hệ vật tiếp xúc hoặc nối dây nhẹ

- Bài áp dụng: 4.23, 5.90.
- Dấu hiệu nhận biết: Có hai vật, tiếp xúc nhau hoặc nối bằng dây qua ròng rọc nhẹ không ma sát.
- Mục tiêu: Tìm gia tốc chung trước, rồi tìm lực nội như lực tiếp xúc hoặc lực căng.
- Thought process:
  - Hai vật có cùng độ lớn gia tốc không?
  - Nếu xét cả hệ, lực nào là ngoại lực, lực nào là nội lực?
  - Muốn tìm lực căng/lực tiếp xúc thì nên xét riêng vật nào?
  - Chiều chuyển động thực tế là chiều nào?
- Cách trình bày:
  - Chọn chiều dương theo chiều dự đoán chuyển động.
  - Xét cả hệ để tìm $a$ nếu tiện.
  - Xét riêng một vật để tìm lực nội.
  - Nếu kết quả $a<0$, đảo lại kết luận chiều chuyển động.
- Công thức cần dùng: $\sum F_{ngoài}=m_{hệ}a$, $\sum F=m a$ cho từng vật.
- Bẫy dễ sai: Dùng lực tiếp xúc/lực căng như ngoại lực khi xét cả hệ.

### Dạng 4: Mặt phẳng nghiêng và lực căng xiên

- Bài áp dụng: 5.8, 5.90.
- Dấu hiệu nhận biết: Có dốc nghiêng, dây cáp, vật trên mặt phẳng nghiêng, không ma sát hoặc có ma sát.
- Mục tiêu: Tách lực theo trục song song và vuông góc mặt phẳng nghiêng.
- Thought process:
  - Trục $Ox$ nên đặt dọc mặt phẳng nghiêng không?
  - Thành phần nào của trọng lực kéo vật trượt xuống dốc?
  - Lực căng có song song mặt phẳng không hay bị xiên một góc?
  - Vật cân bằng hay gia tốc?
- Cách trình bày:
  - Vẽ lực: $mg$, $N$, $T$ nếu có.
  - Chọn $Ox$ dọc mặt phẳng, $Oy$ vuông góc mặt phẳng.
  - Tách $mg$ và lực căng nếu lực căng xiên.
  - Viết hai phương trình theo $x,y$.
- Công thức cần dùng: $mg\sin\alpha$, $mg\cos\alpha$, cân bằng $\sum F=0$ hoặc Newton $\sum F=ma$.
- Bẫy dễ sai: Nhầm thành phần $mg\sin\alpha$ và $mg\cos\alpha$; quên lực căng xiên cũng có thành phần vuông góc mặt phẳng.

### Dạng 5: Chuyển động tròn trong động lực học

- Bài áp dụng: 5.102.
- Dấu hiệu nhận biết: Đề có xe rẽ, quỹ đạo tròn, bán kính, dây lệch góc hoặc vật đứng yên tương đối trong xe.
- Mục tiêu: Nhận ra gia tốc hướng tâm do hợp lực theo phương ngang tạo ra.
- Thought process:
  - Vật chuyển động tròn quanh tâm nào?
  - Gia tốc hướng tâm nằm ngang hay dọc dây?
  - Lực nào có thành phần hướng tâm?
  - Theo phương thẳng đứng vật có gia tốc không?
- Cách trình bày:
  - Vẽ lực $T$ và $mg$.
  - Chiếu theo phương ngang và phương thẳng đứng.
  - Viết $T\sin\theta=mv^2/R$, $T\cos\theta=mg$.
  - Chia hai phương trình để khử $T$.
- Công thức cần dùng: $a_{rad}=v^2/R$, $\tan\theta=\dfrac{v^2}{Rg}$.
- Bẫy dễ sai: Gọi lực hướng tâm là một lực riêng; thật ra thành phần ngang của lực căng đóng vai trò hướng tâm.

### Dạng 6: Lực cản phụ thuộc vận tốc

- Bài áp dụng: 5.103.
- Dấu hiệu nhận biết: Đề cho lực cản phụ thuộc vào vận tốc và hỏi $v(t)$.
- Mục tiêu: Viết phương trình vi phân Newton, không dùng công thức gia tốc không đổi.
- Thought process:
  - Chọn chiều dương theo chiều chuyển động hay chiều rơi?
  - Lực cản ngược chiều vận tốc nên dấu thế nào?
  - Phương trình có dạng $m\,dv/dt=\sum F$ không?
  - Có cần giải phương trình vi phân tách biến không?
- Cách trình bày:
  - Chọn chiều dương.
  - Viết các lực theo dấu.
  - Lập $m\,dv/dt=\sum F(v)$.
  - Tách biến và dùng điều kiện đầu.
- Công thức cần dùng: $m\,dv/dt=\sum F$, lực cản ngược chiều chuyển động.
- Bẫy dễ sai: Dùng công thức $v=v_0+at$ dù gia tốc không hằng.

## Thứ tự làm bài đề xuất

1. 4.16: trọng lượng và khối lượng (luyện phân biệt $m$ và $W=mg$).
2. 4.7: ma sát làm dừng chuyển động (luyện gia tốc chậm dần và $F=ma$).
3. 4.22: thang máy và pháp tuyến (luyện trọng lượng biểu kiến, dấu gia tốc).
4. 4.23: hai thùng tiếp xúc (luyện xét cả hệ rồi xét riêng vật).
5. 5.8: xe trên mặt phẳng nghiêng có cáp xiên (luyện giản đồ lực và chiếu lực khó hơn).
6. 5.90: hai vật nối dây trên hai mặt phẳng nghiêng (luyện hệ nhiều vật và chọn chiều chuyển động).
7. 5.102: xe buýt rẽ ngang (luyện chuyển động tròn trong động lực học).
8. 4.15: tên lửa có lực biến thiên (luyện $F_{net}(t)=ma(t)$, có/không có trọng lực).
9. 4.6: electron tăng tốc (ôn nối động học với Newton, ít sát trọng tâm hơn).
10. 5.103: lực cản phụ thuộc vận tốc (bài khó, luyện tư duy phương trình vi phân nếu còn sức).

## Gợi ý ôn nhanh

- Bắt buộc: 4.7, 4.16, 4.22, 4.23, 5.8, 5.90, 5.102 (nắm lõi Newton, trọng lượng biểu kiến, hệ vật, mặt phẳng nghiêng và chuyển động tròn).
- Nên làm thêm: 4.15 (luyện lực biến thiên và phân biệt lực đẩy với hợp lực).
- Làm nếu còn thời gian: 4.6, 5.103 (4.6 hơi nền; 5.103 khó và ít sát hơn nhưng giúp tự tin với bài nâng cao).
- Nếu đang ôn gấp: làm chắc 4.22, 4.23, 5.8, 5.90 trước vì đây là nhóm sát dạng Newton/phân tích lực trong đề.

## Lỗi dễ mất điểm

- Không vẽ đủ lực trước khi viết phương trình.
- Chưa chọn chiều dương nhưng đã gán dấu.
- Nhầm khối lượng với trọng lượng.
- Tự động đặt $T=mg$ dù vật đang gia tốc.
- Quên lực pháp tuyến hoặc cho rằng $N=mg$ trong mọi trường hợp.
- Nhầm $mg\sin\alpha$ và $mg\cos\alpha$ trên mặt phẳng nghiêng.
- Quên lực căng xiên có cả thành phần song song và vuông góc mặt phẳng.
- Khi xét cả hệ, vẫn giữ lực nội như lực căng hoặc lực tiếp xúc.
- Xem lực hướng tâm như một lực mới thay vì hợp lực hướng vào tâm.
- Dùng công thức động học gia tốc không đổi cho bài có lực phụ thuộc thời gian hoặc vận tốc.
