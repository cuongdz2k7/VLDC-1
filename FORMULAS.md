# FORMULAS.md

File này ghi công thức quan trọng cần nhớ khi ôn thi.

## Động học cơ bản

- Vận tốc trung bình theo độ dời: $v_{tb} = \frac{\Delta x}{\Delta t}$.
- Gia tốc là tốc độ biến thiên của vận tốc: $a = \frac{dv}{dt}$.
- Chuyển động thẳng gia tốc không đổi:
  - $v = v_0 + at$.
  - $\Delta x = v_0t + \frac{1}{2}at^2$.
  - $v^2 = v_0^2 + 2a\Delta x$.
- Đồ thị $x-t$: độ dốc của đồ thị là vận tốc.
- Rơi tự do hoặc ném thẳng đứng: nếu chọn chiều dương lên trên thì $a_y=-g$.

## Ném xiên

- Tách vận tốc đầu:
  - $v_{0x}=v_0\cos\theta$.
  - $v_{0y}=v_0\sin\theta$.
- Nếu bỏ qua lực cản không khí:
  - $x=x_0+v_{0x}t$.
  - $y=y_0+v_{0y}t-\frac{1}{2}gt^2$ nếu chọn chiều dương lên trên.
- Với vật đích chuyển động theo phương ngang, viết phương trình vị trí của cả vật ném và vật đích rồi đặt điều kiện gặp nhau: $x_{\text{vật}}=x_{\text{đích}}$.

## Chuyển động tương đối

- Vận tốc tương đối: $\vec v_{A/C}=\vec v_{A/B}+\vec v_{B/C}$.
- Khi dùng phương trình $x=x_0+vt$, vận tốc $v$ phải mang dấu theo chiều dương đã chọn.

## Chuyển động quay quanh trục cố định

- Vận tốc góc: $\omega = \frac{d\theta}{dt}$.
- Gia tốc góc: $\alpha = \frac{d\omega}{dt}$.
- Nếu $\alpha$ không đổi:
  - $\omega = \omega_0 + \alpha t$.
  - $\Delta \theta = \omega_0 t + \frac{1}{2}\alpha t^2$.
  - $\omega^2 - \omega_0^2 = 2\alpha \Delta \theta$.
- Nhanh dần khi $\alpha$ cùng dấu với $\omega$.
- Chậm dần khi $\alpha$ ngược dấu với $\omega$.

## Mômen quán tính

- Định nghĩa: $I = \sum m_i r_i^2$.
- Dạng tích phân: $I = \int r^2\,dm$.
- Định lý trục song song: $I = I_{CM} + Md^2$.
- Thanh mảnh qua khối tâm: $I_{CM} = \frac{1}{12}ML^2$.
- Thanh mảnh qua một đầu: $I = \frac{1}{3}ML^2$.
- Ròng rọc dạng đĩa đặc: $I = \frac{1}{2}MR^2$.

## Động lực học vật rắn quay

- Mômen lực: $M = Fr\sin\varphi$.
- Phương trình quay: $\sum M = I\alpha$.
- Điều kiện không trượt giữa dây và ròng rọc: $a = \alpha R$.

## Định luật II Newton

- Dạng tổng quát: $\sum \vec{F} = m\vec{a}$.
- Trên mặt phẳng nghiêng:
  - Thành phần song song mặt phẳng: $mg\sin\alpha$.
  - Thành phần vuông góc mặt phẳng: $mg\cos\alpha$.

## Chuyển động tròn

- Tốc độ dài: $v = \omega R$.
- Gia tốc hướng tâm: $a_{rad} = \frac{v^2}{R} = \omega^2R$.
- Lực hướng tâm: $F_n = ma_{rad} = m\frac{v^2}{R} = m\omega^2R$.
- Chu kỳ và tần số: $\omega = \frac{2\pi}{T} = 2\pi f$.

## Công - động năng - thế năng

- Công của lực: $A = \int \vec{F}\cdot d\vec{s}$.
- Nếu lực không đổi và cùng phương chuyển động: $A = Fs\cos\theta$.
- Định lý động năng: $A_{net} = \Delta K$.
- Động năng: $K = \frac{1}{2}mv^2$.
- Thế năng gần mặt đất: $U = mgh$.
- Với lực thế: $A = -\Delta U$.

## Động lượng, xung lượng và va chạm

- Động lượng: $\vec{p} = m\vec{v}$.
- Xung lượng: $\vec{J} = \vec{F}_{tb}\Delta t = \Delta \vec{p}$.
- Bảo toàn động lượng: $\sum \vec{p}_{trước} = \sum \vec{p}_{sau}$ nếu hệ cô lập.
- Va chạm mềm hoàn toàn: hai vật dính vào nhau sau va chạm, bảo toàn động lượng nhưng không bảo toàn động năng.
- Va chạm đàn hồi: bảo toàn động lượng và bảo toàn động năng.

## Hấp dẫn, vệ tinh và Kepler

- Lực hấp dẫn Newton: $F = G\frac{m_1m_2}{r^2}$.
- Thế năng hấp dẫn tổng quát: $U = -G\frac{Mm}{r}$.
- Quỹ đạo tròn của vệ tinh: $G\frac{Mm}{r^2} = m\frac{v^2}{r}$.
- Vận tốc quỹ đạo tròn: $v = \sqrt{\frac{GM}{r}}$.
- Chu kỳ quỹ đạo tròn: $T = 2\pi\sqrt{\frac{r^3}{GM}}$.
- Định luật Kepler dạng tỉ lệ: $T^2 \propto r^3$.

## Dao động điều hòa

- Li độ: $x = A\cos(\omega t + \varphi)$.
- Gia tốc: $a = -\omega^2x$.
- Vận tốc cực đại: $v_{max} = \omega A$.
- Năng lượng con lắc lò xo: $E = \frac{1}{2}kA^2$.

## Khí lí tưởng

- Phương trình trạng thái: $pV = nRT$.
- Đẳng nhiệt: $T = const$, $pV = const$.
- Đẳng tích: $V = const$, $\frac{p}{T} = const$.
- Đẳng áp: $p = const$, $\frac{V}{T} = const$.
- Động năng tịnh tiến trung bình: $\overline{W_d} = \frac{3}{2}kT$.

## Công và nguyên lý I nhiệt động lực học

- Công khí thực hiện: $A = \int p\,dV$.
- Đẳng áp: $A = p(V_2 - V_1)$.
- Đẳng nhiệt: $A = nRT \ln \frac{V_2}{V_1}$.
- Nguyên lý I: $Q = \Delta U + A$.
- Với khí lí tưởng đẳng nhiệt: $\Delta U = 0$.

## Nhiệt dung, chuyển pha và truyền nhiệt

- Nhiệt lượng khi nhiệt độ thay đổi: $Q = mc\Delta T$.
- Với mol khí: $Q = nC\Delta T$.
- Nhiệt chuyển pha: $Q = mL$.
- Khí lí tưởng đơn nguyên tử: $\Delta U = \frac{3}{2}nR\Delta T$.
- Cân bằng nhiệt trong hệ cô lập: $\sum Q = 0$.
- Ba cơ chế truyền nhiệt: dẫn nhiệt, đối lưu, bức xạ.

## Đơn vị cần chú ý

- $1\,atm = 1{,}013 \times 10^5\,Pa$.
- $T(K) = t(^\circ C) + 273$.
- Bán kính phải đổi từ cm sang m nếu dùng SI.
- Áp suất trong đồ thị có thể ghi theo $10^5\,Pa$, cần nhân đúng hệ số.
