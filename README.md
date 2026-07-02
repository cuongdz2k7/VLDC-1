# practice

Project ôn Vật lí đại cương 1 theo trọng tâm PHY1095.

## Cách dùng nhanh

Trong mọi cuộc chat, chỉ cần bắt đầu bằng:

```md
Tuân thủ `practice/AGENTS.md`.
```

`AGENTS.md` sẽ điều phối AI đọc rule phù hợp trong `rules/` theo loại yêu cầu.

## Bản đồ project

- `AGENTS.md`: luật lõi, giọng điệu, vai trò gia sư và bộ điều phối rule.
- `rules/`: workflow cụ thể cho từng loại prompt.
- `PROMPT_TEMPLATE.md`: mẫu prompt ngắn dùng hằng ngày.
- `PROFILE.md`: hồ sơ người học.
- `EXAM_CONTEXT.md`, `EXAM_ANALYSIS.md`, `EXAM_PATTERNS.md`: context ôn thi.
- `LEARNING_PLAN.md`: kế hoạch học và thứ tự ưu tiên.
- `FORMULAS.md`, `MISTAKES.md`, `QUESTIONS.md`: hồ sơ học tập cá nhân.
- `exercises/`: tổng hợp kiến thức thực hành theo bài tập.
- `topics/`: tổng kết kiến thức theo chương.
- `exams/`: đề cũ, đề thử và phân tích đề.
- `materials/`: tài liệu thầy gửi.

## Bản đồ tra cứu nhanh

Khi hỏi bài tập, ưu tiên đọc file trong `exercises/` trước vì đó là bản đồ nhận diện dạng bài và công thức thực hành. Khi hỏi lý thuyết hoặc cần ôn nhanh bản chất, đọc file trong `topics/`.

| Cụm kiến thức | Topic ôn nhanh | Priority bài tập |
| --- | --- | --- |
| Động học nền | `topics/tuan-1-dong-hoc.md` | `exercises/tuan-1-dong-hoc-priority.md` |
| Động lực học Newton | `topics/dong-luc-hoc.md` | `exercises/chuong-2-dong-luc-hoc-priority.md` |
| Công - năng lượng | `topics/cong-nang-luong.md` | `exercises/tuan3-cong-va-nang-luong-priority.md` |
| Vật rắn quay | `topics/vat-ran-quay.md` | `exercises/vat-ran-quay-priority.md` |
| Động lực của chuyển động quay | Chưa có topic riêng | `exercises/tuan-6-dong-luc-cua-chuyen-dong-quay-priority.md` |

Nếu không có topic hoặc priority phù hợp, dùng `EXAM_PATTERNS.md`, `FORMULAS.md` và `EXAM_ANALYSIS.md` để phân loại chương, dạng bài và công thức liên quan.

## Cách AI nên tra cứu khi người học hỏi

- Hỏi bài tập: đọc `rules/exercise-solving.md`, rồi tìm priority/topic liên quan từ bảng trên.
- Hỏi lý thuyết: đọc `rules/theory-question.md`, rồi đọc topic liên quan; nếu hỏi "dùng trong bài nào" thì đọc thêm priority.
- Bắt đầu làm đề hoặc chấm đề: đọc `rules/exam-practice.md`, phân loại từng câu theo chương/dạng/công thức trước khi giải sâu.
