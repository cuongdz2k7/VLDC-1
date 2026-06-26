# Vật rắn quay - tổng hợp kiến thức thực hành

## Vai trò trong đề thi

Vật rắn quay là một cụm rất trọng tâm của phần cơ học PHY1095. Theo context đề hiện có, phần này xuất hiện ở cả lý thuyết và bài tập:

- Lý thuyết: vận tốc góc, gia tốc góc, chuyển động quay với gia tốc góc không đổi, mômen quán tính, định lý trục song song.
- Bài tập: ròng rọc có mômen quán tính, mômen lực, năng lượng quay, điều kiện dây không trượt $a=\alpha R$.

Ưu tiên cao nhất là các bài giúp làm được dạng ròng rọc/vật rơi kéo ròng rọc, vì dạng này đã xuất hiện trong cả đề mẫu 01 và đề mẫu 02.

## Mục tiêu học nhanh

- Nắm chắc các công thức động học quay khi $\alpha$ không đổi.
- Biết đổi giữa số vòng, radian, vận tốc góc, tốc độ dài và gia tốc hướng tâm.
- Hiểu mômen quán tính phụ thuộc vào trục quay và phân bố khối lượng.
- Biết dùng định lý trục song song khi trục quay không đi qua khối tâm.
- Biết dùng năng lượng quay $K_{quay}=\frac{1}{2}I\omega^2$ trong bài vật quay.
- Chuẩn bị nền cho bài ròng rọc có khối lượng: $\sum F=ma$, $\sum M=I\alpha$, $a=\alpha R$.

## Bảng bài tập và mục đích luyện

| Bài | Dạng bài | Mức độ | Khả năng ra thi | Dẫn chứng ưu tiên | Ưu tiên | Mục đích luyện | Kiến thức cần trước khi làm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.1 | Radian, độ dài cung, đổi độ-radian | Dễ | Trung bình | `EXAM_ANALYSIS.md` đề 01 yêu cầu hiểu $\theta$, $\Delta\theta$; đây là bài nền | Nên làm | Luyện ý nghĩa radian và công thức $s=R\theta$ | Radian, cung tròn |
| 9.8 | Dấu của $\omega$, $\alpha$, nhanh dần/chậm dần, độ dịch chuyển góc | Dễ đến trung bình | Cao | `EXAM_ANALYSIS.md` đề 01 có lý thuyết quay với $\alpha$ không đổi và bẫy dấu | Bắt buộc | Luyện dấu, chiều quay dương, phân biệt tốc độ và vận tốc góc | $\omega$, $\alpha$, $\Delta\theta$ |
| 9.9 | Chuyển động quay với $\alpha$ không đổi | Dễ | Cao | `EXAM_PATTERNS.md` dạng 3; đề mẫu 01 kiểm tra hệ thức quay | Bắt buộc | Luyện công thức $\omega=\omega_0+\alpha t$ và $\Delta\theta=\omega_0t+\frac{1}{2}\alpha t^2$ | Công thức quay đều biến đổi |
| 9.16 | Quay nhanh dần rồi chậm dần theo hai giai đoạn | Trung bình | Cao | `EXAM_PATTERNS.md` dạng 3; lỗi thường gặp là nhầm dấu $\alpha$ và giai đoạn | Bắt buộc | Luyện chia giai đoạn, giữ dấu, tìm thời điểm dừng | Động học quay, dấu của $\alpha$ |
| 9.17 | So sánh số vòng dừng khi thay đổi tốc độ góc đầu | Trung bình | Trung bình | Suy luận từ dạng 3; hữu ích để hiểu $\omega^2-\omega_0^2=2\alpha\Delta\theta$ | Nên làm | Luyện tỉ lệ: nếu $\omega_0$ tăng 3 lần thì quãng góc dừng tăng theo bình phương | Công thức không chứa thời gian |
| 9.21 | Liên hệ quay-tròn: $a_{rad}=\omega^2r=\frac{v^2}{r}$ | Trung bình | Cao | `EXAM_CONTEXT.md` có chuyển động tròn và quay; `EXAM_PATTERNS.md` dạng 7 | Bắt buộc | Luyện nối $\theta$, số vòng, $\omega$, $v$, gia tốc hướng tâm | Chuyển động tròn, động học quay |
| 9.25 | Máy ly tâm, gia tốc hướng tâm lớn | Trung bình | Trung bình | `EXAM_PATTERNS.md` dạng 7; bài ứng dụng đổi vòng/phút sang rad/s | Nên làm | Luyện đổi rpm, dùng $a_{rad}=\omega^2R$, kiểm tra tính thực tế | Đổi đơn vị, gia tốc hướng tâm |
| 9.30 | Mômen quán tính hệ hai khối điểm | Dễ đến trung bình | Cao | `EXAM_CONTEXT.md` trọng tâm mômen quán tính; `EXAM_PATTERNS.md` dạng 2 | Bắt buộc | Luyện định nghĩa $I=\sum m_ir_i^2$ và đổi trục quay | Mômen quán tính khối điểm |
| 9.32 | Mômen quán tính thanh và thanh bị uốn | Khó | Trung bình | `EXAM_PATTERNS.md` dạng 2; mở rộng phân bố khối lượng, không sát bằng ròng rọc | Làm nếu còn thời gian | Luyện tư duy chia vật thành phần và cộng mômen quán tính | Thanh mảnh, hình học, trục quay |
| 9.34 | Động năng quay của cánh quạt xem như thanh | Trung bình | Cao | `EXAM_CONTEXT.md` có năng lượng quay trong trọng tâm; cơ học bài tập có năng lượng trong chuyển động quay | Bắt buộc | Luyện $K_{quay}=\frac{1}{2}I\omega^2$, đổi vòng/phút sang rad/s | Mômen quán tính thanh, năng lượng quay |
| 9.49 | Định lý trục song song cho quả cầu | Khó | Trung bình | `EXAM_ANALYSIS.md` đề 02 có định lý trục song song; bài này khó hơn dạng thanh quen thuộc | Làm nếu còn thời gian | Luyện dùng $I=I_{CM}+Md^2$ theo hướng ngược | Công thức $I$ của quả cầu, trục song song |
| 9.62 | Vật rơi truyền năng lượng cho trống quay | Trung bình đến khó | Cao | `EXAM_ANALYSIS.md` đề 02 có vật rơi kéo ròng rọc; `EXAM_CONTEXT.md` có năng lượng quay | Bắt buộc | Luyện năng lượng: thế năng mất đi chia thành động năng tịnh tiến và động năng quay | Bảo toàn năng lượng, $K_{quay}$, dây không trượt |
| 9.72 | Sinh viên rơi, dây quấn quanh bánh xe có $I$ | Khó | Cao | Rất gần `EXAM_ANALYSIS.md` đề 02: vật rơi làm ròng rọc quay; `EXAM_PATTERNS.md` dạng 1 | Bắt buộc sau khi có nền | Luyện bài sát đề: vật rơi + bánh xe có mômen quán tính + dây không trượt | $\sum F=ma$, $\sum M=I\alpha$, $a=\alpha R$ hoặc năng lượng |

## Công thức cần nhớ bắt buộc

| Công thức | Ý nghĩa | Vì sao cần nhớ | Dùng cho bài |
| --- | --- | --- | --- |
| $s=R\theta$ | Độ dài cung khi $\theta$ tính bằng radian | Nền cho radian, số vòng, góc quay | 9.1 |
| $\omega=\omega_0+\alpha t$ | Vận tốc góc khi $\alpha$ không đổi | Dạng lý thuyết và bài ngắn sát đề mẫu 01 | 9.8, 9.9, 9.16 |
| $\Delta\theta=\omega_0t+\frac{1}{2}\alpha t^2$ | Độ dịch chuyển góc khi $\alpha$ không đổi | Tính số rad/số vòng đã quay | 9.8, 9.9, 9.16 |
| $\omega^2-\omega_0^2=2\alpha\Delta\theta$ | Hệ thức không chứa thời gian | Rất tiện cho bài dừng lại hoặc so sánh số vòng | 9.16, 9.17 |
| $v=\omega R$ | Liên hệ tốc độ dài và tốc độ góc | Nối chuyển động quay với chuyển động tròn | 9.21, 9.25 |
| $a_{rad}=\omega^2R=\frac{v^2}{R}$ | Gia tốc hướng tâm | Dạng chuyển động tròn nằm trong trọng tâm cơ học | 9.21, 9.25 |
| $I=\sum m_ir_i^2$ | Định nghĩa mômen quán tính cho hệ khối điểm | Gốc của mọi bài mômen quán tính | 9.30 |
| $I=I_{CM}+Md^2$ | Định lý trục song song | Đã xuất hiện trong đề mẫu 02 | 9.30, 9.49 |
| $I_{\text{thanh, qua tâm}}=\frac{1}{12}ML^2$ | Mômen quán tính thanh mảnh qua khối tâm | Dùng trong bài thanh/cánh quạt | 9.32, 9.34 |
| $I_{\text{thanh, qua đầu}}=\frac{1}{3}ML^2$ | Mômen quán tính thanh mảnh qua đầu | Dạng đề mẫu 02 có thể hỏi | 9.30, 9.32 |
| $\sum M=I\alpha$ | Định luật II Newton cho quay | Lõi bài ròng rọc có mômen quán tính | 9.72 |
| $a=\alpha R$ | Điều kiện dây không trượt trên ròng rọc/bánh xe | Cầu nối chuyển động thẳng và quay | 9.62, 9.72 |
| $K_{quay}=\frac{1}{2}I\omega^2$ | Động năng quay | Quan trọng cho năng lượng quay | 9.34, 9.62, 9.72 |
| $\omega=2\pi f=\frac{2\pi}{T}$ | Đổi vòng/s hoặc chu kỳ sang rad/s | Hay sai khi đề cho vòng/phút | 9.25, 9.34 |

Ghi chú: $K_{quay}=\frac{1}{2}I\omega^2$ và công của mômen $A=\int M\,d\theta$ là công thức quan trọng cho chương này. Nếu sau này tổng kết chương, nên cân nhắc cập nhật thêm vào `FORMULAS.md` nếu chưa có.

## Khung tư duy theo dạng bài

### Dạng 1: Động học quay với gia tốc góc không đổi

- Bài áp dụng: 9.8, 9.9, 9.16, 9.17.
- Dấu hiệu nhận biết: đề cho $\omega_0$, $\omega$, $\alpha$, $t$, $\Delta\theta$ hoặc hỏi nhanh dần/chậm dần.
- Mục tiêu: tìm vận tốc góc, góc quay, thời gian dừng hoặc gia tốc góc.
- Thought process:
  - Chọn chiều dương quay trước.
  - Đại lượng nào mang dấu? $\omega$, $\alpha$, $\Delta\theta$.
  - Có mấy giai đoạn chuyển động?
  - Cần công thức có thời gian hay không chứa thời gian?
- Cách trình bày:
  - Ghi chiều dương.
  - Ghi dữ kiện có dấu.
  - Chọn công thức quay.
  - Kết luận kèm đơn vị rad, rad/s, rad/s$^2$ hoặc vòng.
- Công thức cần dùng: $\omega=\omega_0+\alpha t$, $\Delta\theta=\omega_0t+\frac{1}{2}\alpha t^2$, $\omega^2-\omega_0^2=2\alpha\Delta\theta$.
- Bẫy dễ sai:
  - Nhầm tốc độ góc với vận tốc góc có dấu.
  - Thấy $\alpha<0$ rồi kết luận luôn là chậm dần; phải so dấu với $\omega$.
  - Nhầm $\theta$ với $\Delta\theta$.

### Dạng 2: Liên hệ quay và chuyển động tròn

- Bài áp dụng: 9.1, 9.21, 9.25.
- Dấu hiệu nhận biết: có bán kính, vành bánh xe, cung tròn, vòng/phút, gia tốc hướng tâm.
- Mục tiêu: đổi giữa góc, cung, tốc độ góc, tốc độ dài, gia tốc hướng tâm.
- Thought process:
  - Đổi đơn vị trước: cm sang m, vòng/phút sang rad/s.
  - Cần dùng góc quay hay tốc độ góc?
  - Điểm đang xét cách trục bao xa?
- Cách trình bày:
  - Ghi $R$ theo SI.
  - Đổi số vòng sang rad nếu cần.
  - Tính $\omega$ rồi tính $v$ hoặc $a_{rad}$.
- Công thức cần dùng: $s=R\theta$, $v=\omega R$, $a_{rad}=\omega^2R=\frac{v^2}{R}$.
- Bẫy dễ sai:
  - Dùng độ thay cho radian trong $s=R\theta$.
  - Quên $1$ vòng $=2\pi$ rad.
  - Quên đổi vòng/phút sang vòng/giây.

### Dạng 3: Mômen quán tính và định lý trục song song

- Bài áp dụng: 9.30, 9.32, 9.49.
- Dấu hiệu nhận biết: đề hỏi $I$ quanh một trục, vật gồm khối điểm/thanh/quả cầu hoặc trục không qua khối tâm.
- Mục tiêu: xác định đúng khoảng cách tới trục quay và dùng đúng công thức $I$.
- Thought process:
  - Trục quay ở đâu?
  - Vật là khối điểm, thanh, đĩa, vòng hay vật ghép?
  - Khoảng cách từ từng phần khối lượng đến trục là bao nhiêu?
  - Nếu đổi trục, hai trục có song song không?
- Cách trình bày:
  - Vẽ trục quay nháp.
  - Ghi khoảng cách $r_i$ hoặc $d$.
  - Dùng $I=\sum m_ir_i^2$ hoặc $I=I_{CM}+Md^2$.
  - Kiểm tra đơn vị $kg\cdot m^2$.
- Công thức cần dùng: $I=\sum m_ir_i^2$, $I=I_{CM}+Md^2$, $I_{\text{thanh, qua tâm}}=\frac{1}{12}ML^2$.
- Bẫy dễ sai:
  - Quên bình phương khoảng cách.
  - Dùng nhầm $d=L$ thay vì $d=L/2$.
  - Không nói rõ trục quay.

### Dạng 4: Năng lượng quay

- Bài áp dụng: 9.34, 9.62.
- Dấu hiệu nhận biết: đề hỏi động năng quay, vật rơi truyền động năng cho trống, hoặc cho tốc độ quay.
- Mục tiêu: tính năng lượng trong chuyển động quay hoặc chia năng lượng giữa tịnh tiến và quay.
- Thought process:
  - Vật quay quanh trục nào, $I$ là bao nhiêu?
  - Đề cho $\omega$ bằng rad/s hay vòng/phút?
  - Có vật rơi hay vật trượt nối dây không?
  - Năng lượng ban đầu và cuối gồm những phần nào?
- Cách trình bày:
  - Đổi $\omega$ sang rad/s.
  - Tính $I$ đúng trục.
  - Viết năng lượng: thế năng mất đi, động năng tịnh tiến, động năng quay.
  - Dùng $v=\omega R$ nếu dây không trượt.
- Công thức cần dùng: $K_{quay}=\frac{1}{2}I\omega^2$, $mgh$, $K=\frac{1}{2}mv^2$, $v=\omega R$.
- Bẫy dễ sai:
  - Dùng rpm trực tiếp trong công thức năng lượng.
  - Quên phần động năng tịnh tiến của vật rơi.
  - Quên dây không trượt nên $v=\omega R$.

### Dạng 5: Ròng rọc/bánh xe có mômen quán tính

- Bài áp dụng: 9.72, liên hệ rất gần với 9.62.
- Dấu hiệu nhận biết: dây quấn quanh bánh xe/ròng rọc, vật rơi, cho $I$, bỏ qua ma sát, hỏi thời gian/gia tốc/vận tốc.
- Mục tiêu: lập phương trình cho vật rơi và vật quay.
- Thought process:
  - Chọn chiều dương là chiều vật rơi hoặc chiều chuyển động.
  - Vật rơi chịu lực nào? Thường là $mg$ và $T$.
  - Bánh xe chịu mômen nào? Thường là $TR$.
  - Dây có trượt không? Nếu không trượt thì $a=\alpha R$.
  - Có thể giải bằng Newton + mômen hoặc bằng năng lượng không?
- Cách trình bày:
  - Vẽ FBD nháp: vật rơi có $mg$ xuống, $T$ lên; bánh xe có $TR$.
  - Viết $mg-T=ma$ nếu chọn chiều rơi xuống là dương.
  - Viết $TR=I\alpha$.
  - Viết $a=\alpha R$.
  - Giải $a$, rồi dùng động học thẳng nếu hỏi thời gian/vận tốc.
- Công thức cần dùng: $\sum F=ma$, $\sum M=I\alpha$, $a=\alpha R$.
- Bẫy dễ sai:
  - Đặt $T=mg$ dù vật đang gia tốc.
  - Quên phương trình quay của bánh xe.
  - Nhầm khối lượng vật rơi với khối lượng/ròng rọc.
  - Quên đổi bán kính hoặc dùng sai đơn vị của $I$.

## Thứ tự làm bài đề xuất

1. 9.1 (làm nóng radian, tránh mơ hồ về $\theta$).
2. 9.9 (công thức quay cơ bản, dễ ăn điểm).
3. 9.8 (luyện dấu $\omega$, $\alpha$, nhanh dần/chậm dần).
4. 9.16 (chia giai đoạn quay nhanh dần rồi chậm dần).
5. 9.21 (nối quay với chuyển động tròn).
6. 9.25 (đổi rpm và gia tốc hướng tâm lớn).
7. 9.30 (định nghĩa mômen quán tính bằng khối điểm).
8. 9.34 (năng lượng quay, đổi vòng/phút).
9. 9.62 (vật rơi truyền năng lượng cho trống quay).
10. 9.72 (bài sát đề nhất: vật rơi + bánh xe có $I$ + dây không trượt).
11. 9.17 (luyện thêm tỉ lệ bằng công thức không chứa thời gian).
12. 9.32 (khó hơn, làm nếu còn thời gian).
13. 9.49 (mở rộng định lý trục song song, làm nếu còn thời gian).

## Gợi ý ôn nhanh

- Nếu chỉ có ít thời gian: làm 9.9, 9.8, 9.16, 9.30, 9.34, 9.62, 9.72.
- Nếu đang yếu dấu: ưu tiên 9.8 và 9.16.
- Nếu đang yếu mômen quán tính: ưu tiên 9.30 trước, rồi mới 9.32 hoặc 9.49.
- Nếu muốn sát đề nhất: ưu tiên 9.72, nhưng chỉ làm sau khi đã chắc $\sum F=ma$, $\sum M=I\alpha$, $a=\alpha R$.
- Nếu muốn luyện đổi đơn vị: làm 9.25 và 9.34 vì có vòng/phút.

## Lỗi dễ mất điểm

- Quên chọn chiều dương trước khi ghi dấu $\omega$, $\alpha$, $\Delta\theta$.
- Dùng công thức quay với $\alpha$ không đổi cho bài không có điều kiện $\alpha$ không đổi.
- Dùng độ thay radian trong công thức $s=R\theta$.
- Quên đổi vòng/phút sang rad/s.
- Nhầm gia tốc hướng tâm $a_{rad}$ với gia tốc góc $\alpha$.
- Quên bình phương khoảng cách trong $I=\sum m_ir_i^2$ hoặc $I=I_{CM}+Md^2$.
- Không ghi rõ trục quay khi nói mômen quán tính.
- Đặt lực căng dây bằng trọng lực trong bài vật rơi kéo bánh xe.
- Cho rằng hai lực căng hai bên ròng rọc luôn bằng nhau dù ròng rọc có mômen quán tính.
- Quên điều kiện không trượt $a=\alpha R$ hoặc $v=\omega R$.
