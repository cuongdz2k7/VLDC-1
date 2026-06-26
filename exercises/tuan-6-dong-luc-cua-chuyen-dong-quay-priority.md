# Động lực của chuyển động quay - tổng hợp kiến thức thực hành

## Vai trò trong đề thi

Chương này thuộc nhóm rất trọng tâm của PHY1095 vì nối trực tiếp các phần đã có trong bảng trọng tâm: mômen lực, mômen quán tính, năng lượng quay và động lực học vật rắn. Theo hai đề mẫu đã phân tích, dạng sát đề nhất vẫn là hệ vật hoặc vật rơi làm ròng rọc/bánh xe quay, cần kết hợp:

$$
\sum F=ma,\qquad \sum M=I\alpha,\qquad a=\alpha R.
$$

Danh sách bài trong ảnh thiên về nền của chương 10: mômen lực, tổng mômen lực, công và công suất quay, lăn không trượt, mômen động lượng, bảo toàn mômen động lượng và tiến động con quay hồi chuyển. Vì đề PHY1095 ưu tiên bài cơ học tính toán thực dụng, nên nên học chắc 10.1 đến 10.29 trước; 10.35 và 10.42 dùng để nắm mômen động lượng; 10.51 chỉ làm nếu còn thời gian.

## Mục tiêu học nhanh

- Biết tính mômen lực bằng độ lớn và xác định chiều quay.
- Biết cộng mômen lực có dấu quanh một trục cố định.
- Biết dùng $\sum M=I\alpha$ để tìm gia tốc góc, vận tốc góc, công và công suất.
- Biết tách năng lượng tịnh tiến và năng lượng quay khi vật lăn không trượt.
- Biết dùng mômen động lượng $\vec L=\vec r\times \vec p$ và định luật $\sum \vec M=\frac{d\vec L}{dt}$ ở mức bài ngắn.
- Biết bảo toàn mômen động lượng khi mômen lực ngoài quanh trục xét bằng 0.
- Nhận diện phần con quay hồi chuyển là mở rộng, không nên ưu tiên nếu đang ôn gấp.

## Bảng bài tập và mục đích luyện

| Bài | Dạng bài | Mức độ | Khả năng ra thi | Dẫn chứng ưu tiên | Ưu tiên | Mục đích luyện | Kiến thức cần trước khi làm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.1 | Mômen lực của một lực quanh điểm $O$ | Dễ | Cao | `EXAM_CONTEXT.md` ghi mômen lực là trọng tâm cơ học bài tập; đây là bài nền bắt buộc | Bắt buộc | Luyện $M=Fr\sin\varphi$, cánh tay đòn và chiều quay | Vector, tích có hướng, góc giữa $\vec r$ và $\vec F$ |
| 10.2 | Tổng mômen lực trên thanh | Dễ đến trung bình | Cao | `EXAM_ANALYSIS.md` đề mẫu cần phương trình mômen cho ròng rọc; bài này luyện cộng mômen có dấu | Bắt buộc | Luyện chọn chiều dương và cộng mômen của nhiều lực | Bài 10.1, quy ước dấu quay |
| 10.3 | Tổng mômen lực trên tấm vuông | Trung bình | Trung bình đến cao | Suy luận từ trọng tâm mômen lực; bài khó hơn vì nhiều lực và vị trí tác dụng | Nên làm | Luyện tách thành phần lực và xác định cánh tay đòn quanh tâm | Mômen lực, hình học vuông, dấu mômen |
| 10.4 | Tổng mômen lực trên bánh xe | Trung bình | Cao | `EXAM_PATTERNS.md` có dạng vật rắn quay và chuyển động tròn; bánh xe/ròng rọc là nền sát đề | Bắt buộc | Luyện lực tiếp tuyến, lực xuyên tâm không gây mômen, lực nghiêng chỉ lấy thành phần vuông góc bán kính | Mômen lực, bán kính, thành phần tiếp tuyến |
| 10.8 | Đĩa chịu lực tiếp tuyến không đổi | Trung bình | Cao | `EXAM_CONTEXT.md` có năng lượng trong chuyển động quay; `FORMULAS.md` có $\sum M=I\alpha$ và $K_{quay}$ | Bắt buộc | Luyện từ mômen lực đến $\alpha$, rồi dùng động học quay và gia tốc tiếp tuyến/hướng tâm | Mômen quán tính đĩa đặc, động học quay, gia tốc hướng tâm |
| 10.17 | Vành tròn lăn không trượt | Trung bình | Cao | `EXAM_CONTEXT.md` có chuyển động tròn và năng lượng quay; `FORMULAS.md` có $v=\omega R$ | Bắt buộc | Luyện lăn không trượt, tổng động năng và vận tốc các điểm trên vành | $v=\omega R$, $K=\frac12mv^2$, $K_{quay}=\frac12I\omega^2$ |
| 10.28 | Bánh xe lăn xuống dốc | Trung bình đến khó | Cao | `EXAM_ANALYSIS.md` nhấn mạnh năng lượng quay; bài này luyện bảo toàn cơ năng có cả quay và tịnh tiến | Bắt buộc | Luyện năng lượng của vật lăn không trượt từ độ cao xuống chân dốc | Bảo toàn cơ năng, $I=MR^2$ cho vành mỏng |
| 10.29 | Đu quay chịu lực tiếp tuyến, công và công suất | Trung bình | Trung bình đến cao | `EXAM_CONTEXT.md` có mômen lực, năng lượng quay; bài luyện công suất quay, có thể ra bài ngắn | Nên làm | Luyện $\sum M=I\alpha$, $A=M\Delta\theta$, $P_{tb}=A/\Delta t$ | Mômen lực, động học quay, công của mômen lực |
| 10.35 | Mômen động lượng của chất điểm | Trung bình | Trung bình | Bảng trọng tâm thiên về cơ học lý thuyết rộng; bài này giúp hiểu $\vec L$ và $\frac{d\vec L}{dt}$ | Nên làm | Luyện $\vec L=\vec r\times\vec p$ và liên hệ tốc độ biến thiên mômen động lượng với mômen lực | Tích có hướng, động lượng, trọng lực |
| 10.42 | Bảo toàn mômen động lượng | Trung bình | Trung bình | Phần mômen động lượng có trong chương; ít sát đề hơn ròng rọc nhưng hay ra lý thuyết/bài ngắn | Nên làm | Luyện $I_1\omega_1=I_2\omega_2$ và số vòng quay khi thay đổi tư thế | Bảo toàn mômen động lượng, liên hệ $\omega$ và số vòng |
| 10.51 | Tiến động con quay hồi chuyển | Khó | Thấp đến trung bình | Ảnh chương có mục con quay hồi chuyển nhưng `EXAM_ANALYSIS.md` chưa thấy dạng này; nên xem là mở rộng | Làm nếu còn thời gian | Hiểu hiện tượng tiến động, lực nâng tại điểm tựa và quan hệ giữa mômen lực với mômen động lượng | Mômen động lượng vật rắn, tiến động, vector mômen lực |

## Công thức cần nhớ bắt buộc

| Công thức | Ý nghĩa | Vì sao cần nhớ | Dùng cho bài |
| --- | --- | --- | --- |
| $M=Fr\sin\varphi$ | Độ lớn mômen lực quanh trục/điểm | Gốc của mọi bài tính mômen lực | 10.1, 10.2, 10.3, 10.4 |
| $\vec M=\vec r\times\vec F$ | Mômen lực là vector, chiều theo quy tắc bàn tay phải | Cần để xác định hướng mômen và dấu quay | 10.1, 10.3, 10.35, 10.51 |
| $\sum M=I\alpha$ | Định luật II Newton cho chuyển động quay | Lõi bài vật rắn chịu mômen lực | 10.8, 10.29 |
| $a_t=\alpha R$ | Gia tốc tiếp tuyến của điểm cách trục $R$ | Dùng khi nối gia tốc góc với chuyển động của điểm trên vành | 10.8 |
| $a_{rad}=\omega^2R=\frac{v^2}{R}$ | Gia tốc hướng tâm | Điểm trên vành vừa có gia tốc tiếp tuyến vừa có gia tốc hướng tâm | 10.8 |
| $v=\omega R$ | Điều kiện lăn hoặc dây không trượt | Cầu nối quay và tịnh tiến | 10.17, 10.28 |
| $K_{quay}=\frac12I\omega^2$ | Động năng quay | Bắt buộc cho bài lăn, bánh xe, đĩa quay | 10.17, 10.28, 10.29 |
| $K_{tổng}=\frac12mv_{CM}^2+\frac12I_{CM}\omega^2$ | Động năng của vật vừa tịnh tiến vừa quay | Dùng cho lăn không trượt | 10.17, 10.28 |
| $I_{\text{đĩa đặc}}=\frac12MR^2$ | Mômen quán tính đĩa đặc | Dữ kiện bài 10.8 là đĩa đồng nhất | 10.8 |
| $I_{\text{vành mỏng}}=MR^2$ | Mômen quán tính vành mỏng | Dữ kiện bài 10.17 và 10.28 xem vật như vành/hình trụ rỗng thành mỏng | 10.17, 10.28 |
| $A_M=\int M\,d\theta$; nếu $M$ không đổi thì $A_M=M\Delta\theta$ | Công của mômen lực | Dùng cho bài công do lực tiếp tuyến làm đu quay quay | 10.29 |
| $P_{tb}=\frac{A}{\Delta t}$ | Công suất trung bình | Cần cho bài hỏi công suất | 10.29 |
| $\vec L=\vec r\times\vec p$ | Mômen động lượng của chất điểm | Gốc của bài mômen động lượng | 10.35 |
| $\sum\vec M=\frac{d\vec L}{dt}$ | Mômen lực làm biến thiên mômen động lượng | Liên hệ phần mômen lực với mômen động lượng | 10.35, 10.51 |
| $I_1\omega_1=I_2\omega_2$ | Bảo toàn mômen động lượng quanh trục xét | Dùng khi vận động viên thay đổi tư thế mà mômen lực ngoài coi như không đáng kể | 10.42 |
| $\Omega=\frac{M}{L}$ | Tốc độ góc tiến động trong trường hợp con quay hồi chuyển đơn giản | Công thức mở rộng, chỉ cần nếu làm bài con quay | 10.51 |

Ghi chú: `FORMULAS.md` đã có hầu hết công thức chính của chương. Nếu sau này muốn cập nhật công thức nâng cao, nên cân nhắc thêm $\vec L=\vec r\times\vec p$, $\sum\vec M=\frac{d\vec L}{dt}$ và $I_1\omega_1=I_2\omega_2$ vào `FORMULAS.md`.

## Khung tư duy theo dạng bài

### Dạng 1: Tính mômen lực quanh điểm hoặc trục

- Bài áp dụng: 10.1, 10.2, 10.3, 10.4.
- Dấu hiệu nhận biết: đề cho lực tác dụng tại một điểm trên thanh, tấm hoặc bánh xe và hỏi mômen lực/tổng mômen lực.
- Mục tiêu: tìm độ lớn mômen lực và chiều quay.
- Câu tự hỏi:
  - Trục hoặc điểm quay là đâu?
  - Vector $\vec r$ từ trục đến điểm đặt lực dài bao nhiêu?
  - Góc giữa $\vec r$ và $\vec F$ là góc nào?
  - Lực này làm vật quay ngược chiều kim đồng hồ hay cùng chiều kim đồng hồ?
  - Có lực nào đi qua trục nên mômen bằng 0 không?
- Cách trình bày:
  - Chọn chiều dương, thường lấy ngược chiều kim đồng hồ là dương.
  - Với từng lực, ghi $M=Fr\sin\varphi$ kèm dấu.
  - Cộng đại số các mômen.
  - Kết luận độ lớn, chiều và đơn vị $N\cdot m$.
- Công thức cần dùng: $M=Fr\sin\varphi$, $\sum M=\sum M_i$.
- Bẫy dễ sai:
  - Dùng nhầm góc giữa lực và thanh với góc phụ.
  - Quên lực dọc theo bán kính hoặc đi qua trục thì không gây mômen.
  - Chỉ tính độ lớn mà quên chiều.

### Dạng 2: Vật rắn quay quanh trục cố định do mômen lực

- Bài áp dụng: 10.8, 10.29.
- Dấu hiệu nhận biết: vật quay quanh trục cố định, có mômen quán tính hoặc hình dạng quen thuộc, lực tiếp tuyến hoặc mômen không đổi.
- Mục tiêu: tìm $\alpha$, $\omega$, $v$, công hoặc công suất.
- Câu tự hỏi:
  - Mômen lực tác dụng quanh trục là bao nhiêu?
  - Mômen quán tính $I$ quanh trục đã biết hay phải tính từ hình dạng?
  - Chuyển động bắt đầu từ nghỉ hay đã có $\omega_0$?
  - Đề cho thời gian hay góc quay?
  - Điểm trên vành cần gia tốc tiếp tuyến, hướng tâm hay gia tốc tổng hợp?
- Cách trình bày:
  - Tính $M=FR$ nếu lực tiếp tuyến.
  - Viết $\sum M=I\alpha$.
  - Dùng công thức động học quay phù hợp.
  - Nếu hỏi điểm trên vành, đổi sang $v=\omega R$, $a_t=\alpha R$, $a_{rad}=\omega^2R$.
  - Nếu hỏi công/công suất, dùng $A=M\Delta\theta$ và $P_{tb}=A/\Delta t$.
- Công thức cần dùng: $\sum M=I\alpha$, $\omega^2-\omega_0^2=2\alpha\Delta\theta$, $A_M=M\Delta\theta$.
- Bẫy dễ sai:
  - Quên đổi số vòng sang radian.
  - Nhầm gia tốc tiếp tuyến với gia tốc hướng tâm.
  - Dùng lực thay cho mômen lực trong công thức quay.

### Dạng 3: Lăn không trượt và năng lượng quay

- Bài áp dụng: 10.17, 10.28.
- Dấu hiệu nhận biết: đề nói lăn không trượt, bánh xe/vành tròn/hình trụ rỗng, hỏi tốc độ hoặc tổng động năng.
- Mục tiêu: nối chuyển động tịnh tiến của tâm với chuyển động quay quanh tâm.
- Câu tự hỏi:
  - Vật lăn không trượt nên $v_{CM}=\omega R$ có dùng được không?
  - Mômen quán tính quanh khối tâm là dạng nào?
  - Tổng động năng gồm phần tịnh tiến và quay chưa?
  - Nếu lăn xuống dốc, thế năng mất đi chuyển thành những phần nào?
  - Vận tốc của điểm trên vành đang xét là tổng vector nào?
- Cách trình bày:
  - Ghi điều kiện lăn không trượt $v_{CM}=\omega R$.
  - Viết $K_{tổng}=\frac12mv_{CM}^2+\frac12I_{CM}\omega^2$.
  - Với bài xuống dốc, viết $mgh+\frac12mv_0^2+\frac12I\omega_0^2=K_{cuối}$ nếu bỏ qua hao phí.
  - Với vận tốc điểm trên vành, cộng vector vận tốc tịnh tiến của tâm và vận tốc quay tương đối quanh tâm.
- Công thức cần dùng: $v=\omega R$, $K_{tổng}=\frac12mv^2+\frac12I\omega^2$, $I_{\text{vành}}=MR^2$.
- Bẫy dễ sai:
  - Quên động năng quay.
  - Dùng công thức rơi tự do $v^2=v_0^2+2gh$ cho vật lăn mà bỏ qua quay.
  - Nhầm vận tốc điểm thấp nhất của vành lăn không trượt: so với đất bằng 0 tại điểm tiếp xúc.

### Dạng 4: Mômen động lượng của chất điểm và vật rắn

- Bài áp dụng: 10.35, 10.42.
- Dấu hiệu nhận biết: đề hỏi mômen động lượng, tốc độ thay đổi mômen động lượng, hoặc vật thay đổi mômen quán tính khi không có mômen lực ngoài đáng kể.
- Mục tiêu: hiểu mômen động lượng là đại lượng quay tương tự động lượng.
- Câu tự hỏi:
  - Đang xét mômen động lượng quanh điểm/trục nào?
  - Vector $\vec r$ và $\vec p$ tạo góc bao nhiêu?
  - Có mômen lực ngoài quanh trục đó không?
  - Nếu $I$ thay đổi, $\omega$ thay đổi thế nào để $L=I\omega$ giữ nguyên?
- Cách trình bày:
  - Với chất điểm, dùng $L=rmv\sin\varphi$ và quy tắc bàn tay phải để xác định hướng.
  - Với tốc độ biến thiên, dùng $\frac{d\vec L}{dt}=\sum\vec M$.
  - Với bảo toàn, viết $I_1\omega_1=I_2\omega_2$.
  - Nếu hỏi số vòng, đổi $\omega$ sang vòng/giây rồi nhân thời gian.
- Công thức cần dùng: $\vec L=\vec r\times\vec p$, $\sum\vec M=\frac{d\vec L}{dt}$, $I_1\omega_1=I_2\omega_2$.
- Bẫy dễ sai:
  - Quên mômen động lượng là vector.
  - Dùng bảo toàn mômen động lượng khi còn mômen lực ngoài đáng kể quanh trục xét.
  - Nhầm rad/s với vòng/s khi tính số vòng.

### Dạng 5: Tiến động con quay hồi chuyển

- Bài áp dụng: 10.51.
- Dấu hiệu nhận biết: đề có con quay hồi chuyển, điểm tựa lệch khỏi khối tâm, tốc độ tiến động và hỏi tốc độ quay riêng của bánh đà.
- Mục tiêu: hiểu mômen trọng lực làm đổi hướng mômen động lượng, tạo tiến động.
- Câu tự hỏi:
  - Trọng lực tạo mômen quanh điểm tựa là bao nhiêu?
  - Mômen động lượng của bánh đà nằm theo trục quay nào?
  - Tốc độ tiến động $\Omega$ được cho theo vòng/s hay rad/s?
  - Đề hỏi tốc độ quay riêng $\omega$ hay tốc độ tiến động $\Omega$?
- Cách trình bày:
  - Tính mômen trọng lực $M=mgd$ quanh điểm tựa.
  - Đổi $\Omega$ sang rad/s.
  - Dùng $\Omega=M/L$ và $L=I\omega$ để tìm $\omega$ nếu cần.
  - Kết luận rõ đơn vị vòng/phút nếu đề yêu cầu.
- Công thức cần dùng: $M=mgd$, $L=I\omega$, $\Omega=M/L$.
- Bẫy dễ sai:
  - Nhầm tốc độ quay của bánh đà với tốc độ tiến động của trục.
  - Quên đổi cm sang m.
  - Quên đổi vòng/s sang rad/s hoặc rad/s sang vòng/phút.

## Thứ tự làm bài đề xuất

1. 10.1 (làm nền mômen lực, cánh tay đòn và chiều quay).
2. 10.2 (luyện cộng mômen có dấu trên thanh).
3. 10.4 (nhận ra lực tiếp tuyến gây mômen tối đa, lực xuyên tâm không gây mômen).
4. 10.3 (tăng độ khó với tấm vuông và nhiều lực).
5. 10.8 (dùng $\sum M=I\alpha$ rồi nối sang động học quay và gia tốc điểm trên vành).
6. 10.29 (công và công suất quay, dạng bài ngắn dễ kiểm tra công thức).
7. 10.17 (lăn không trượt, vận tốc các điểm trên vành).
8. 10.28 (năng lượng lăn xuống dốc, rất đáng luyện vì dễ quên động năng quay).
9. 10.35 (mômen động lượng chất điểm, cầu nối sang lý thuyết).
10. 10.42 (bảo toàn mômen động lượng khi mômen quán tính đổi).
11. 10.51 (con quay hồi chuyển, chỉ làm sau cùng nếu còn thời gian).

## Gợi ý ôn nhanh

- Nếu chỉ có ít thời gian: làm 10.1, 10.2, 10.4, 10.8, 10.17, 10.28 (mômen lực, quay quanh trục cố định, lăn không trượt và năng lượng quay).
- Nếu muốn sát bài tập cơ học 4 điểm: ưu tiên 10.8, 10.17, 10.28, rồi quay lại bài ròng rọc có $I$ trong file `vat-ran-quay-priority.md`.
- Nếu đang yếu dấu và chiều quay: làm 10.1, 10.2, 10.3, 10.4 (mỗi lực phải ghi chiều mômen).
- Nếu đang yếu năng lượng: làm 10.17 và 10.28 (luôn viết đủ $K_{tịnh tiến}+K_{quay}$).
- Nếu học lý thuyết cơ học 2 điểm: đọc kỹ 10.35 và 10.42 (mômen động lượng và bảo toàn mômen động lượng).
- Nếu ôn gấp: chưa cần làm 10.51, chỉ đọc ý tưởng tiến động và công thức phân biệt $\Omega$ với $\omega$.

## Lỗi dễ mất điểm

- Không chọn chiều dương trước khi cộng mômen lực.
- Dùng sai góc trong $M=Fr\sin\varphi$.
- Quên lực đi qua trục hoặc song song với $\vec r$ thì mômen bằng 0.
- Quên đổi vòng sang radian khi dùng công thức quay.
- Quên đổi vòng/phút sang rad/s.
- Nhầm gia tốc góc $\alpha$ với gia tốc tiếp tuyến $a_t$ hoặc gia tốc hướng tâm $a_{rad}$.
- Quên phần động năng quay trong bài lăn không trượt.
- Dùng $I$ sai dạng: đĩa đặc là $\frac12MR^2$, vành mỏng là $MR^2$.
- Dùng bảo toàn mômen động lượng khi còn mômen lực ngoài đáng kể quanh trục xét.
- Nhầm tốc độ tiến động của con quay hồi chuyển với tốc độ quay riêng của bánh đà.
