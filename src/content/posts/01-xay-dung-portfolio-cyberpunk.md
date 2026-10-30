---
title: "Kiến trúc Portfolio cá nhân phong cách Cyberpunk với Vite và React"
slug: "01-xay-dung-portfolio-cyberpunk"
description: "Chia sẻ quá trình thiết kế giao diện HUD, cân bằng hiệu ứng Neon và tối ưu hiệu năng trang web tĩnh."
date: "2024-10-25"
category: "Frontend"
tags:
  - React
  - Tailwind CSS
  - UI/UX
  - Design System
published: true
---

# Vì sao lại là Cyberpunk và Gaming HUD?

Khi xây dựng một portfolio cá nhân cho lập trình viên, thách thức lớn nhất không phải là viết thật nhiều hiệu ứng, mà là **cân bằng giữa cá tính thị giác và khả năng đọc thông tin**. 

Một nhà tuyển dụng hoặc Tech Lead thường chỉ dành **30-60 giây** đầu tiên để lướt qua hồ sơ của bạn. Nếu website quá rối rắm, hiệu ứng glitch giật lag hoặc độ tương phản kém, họ sẽ rời đi ngay lập tức.

## 1. Nguyên tắc thiết kế cốt lõi

1. **Hiệu ứng có chủ đích:** Sử dụng các đường viền HUD góc cạnh, hiệu ứng glow nhẹ nhàng thay vì các lớp sương mờ dày đặc làm chậm GPU.
2. **Typography chuẩn công nghệ:** Kết hợp font `Space Grotesk` cho tiêu đề và `JetBrains Mono` cho các nhãn kỹ thuật, code block.
3. **Màu sắc phân cấp rõ ràng:**
   - Màu nền sâu: `#070A13`
   - Màu chính (Cyan): `#38E8FF` đại diện cho công nghệ
   - Màu phụ (Violet): `#9B7CFF` tạo chiều sâu
   - Màu nhấn (Magenta): `#FF4FD8` cho các điểm tương tác quan trọng

## 2. Đoạn mã mẫu tạo hiệu ứng HUD Corner

Dưới đây là cách sử dụng CSS pseudo-elements để tạo góc bo công nghệ:

```css
.hud-panel-corner::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 8px;
  height: 8px;
  border-top: 2px solid #38e8ff;
  border-left: 2px solid #38e8ff;
}
```

> **Ghi chú quan trọng:** Luôn kiểm tra thuộc tính `@media (prefers-reduced-motion)` để đảm bảo website tôn trọng người dùng có tiền sử nhạy cảm với ánh sáng hoặc chuyển động.

## 3. Tổng kết

Một portfolio tốt là portfolio phản ánh đúng năng lực và tình yêu công nghệ của bạn. Hãy ưu tiên nội dung thật, bài viết chất lượng và các dự án có khả năng chạy thực tế trước khi thêm vào bất kỳ hiệu ứng nào!
