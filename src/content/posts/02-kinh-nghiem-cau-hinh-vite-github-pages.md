---
title: "Kinh nghiệm thực chiến triển khai SPA Vite lên GitHub Pages không lỗi 404"
slug: "02-kinh-nghiem-cau-hinh-vite-github-pages"
description: "Phân biệt User Site vs Project Site, xử lý base path và giải pháp HashRouter cho routing tĩnh."
date: "2024-10-28"
category: "DevOps"
tags:
  - Vite
  - GitHub Pages
  - CI/CD
  - Routing
published: true
---

# Lỗi 404 huyền thoại khi refresh trên GitHub Pages

Rất nhiều bạn sinh viên và lập trình viên mới làm việc với React Router trên GitHub Pages thường gặp phải tình trạng:
*Trang chủ chạy bình thường, nhưng bấm F5 tại trang `/about` hoặc `/projects` thì GitHub trả về màn hình 404 File Not Found.*

Nguyên nhân là GitHub Pages là một **Static Web Server thuần túy**. Nó không có máy chủ backend để rewrite tất cả request về file `index.html`.

## 1. Phân biệt User Pages vs Project Pages

- **User / Organization Pages** (`username.github.io`):
  Website nằm ngay tại thư mục gốc của domain, ví dụ `https://duyln05.github.io/`.
  Trong `vite.config.ts`, giá trị `base` bắt buộc phải là `'/'`.

- **Project Pages** (`username.github.io/my-repo/`):
  Website nằm trong một subpath.
  Trong `vite.config.ts`, giá trị `base` bắt buộc phải là `'/my-repo/'`.

```ts
// vite.config.ts
export default defineConfig({
  base: '/', // Dành cho DuyLN05.github.io
});
```

## 2. Vì sao HashRouter là giải pháp đáng tin cậy nhất?

Khi sử dụng `HashRouter`, URL sẽ có định dạng `/#/about` hoặc `/#/posts`. 

Phần hash phía sau dấu `#` không bao giờ được gửi lên HTTP server của GitHub, do đó trình duyệt sẽ luôn luôn tải file `index.html` gốc, sau đó React Router phía client sẽ đọc hash và render đúng component tương ứng mà **không bao giờ bị lỗi 404 khi F5**.

```tsx
import { HashRouter, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}
```

## 3. Workflow tự động hóa với GitHub Actions

Thay vì build thủ công rồi đẩy nhánh `gh-pages`, chúng ta nên tận dụng GitHub Actions với workflow `deploy.yml`. Mỗi khi push code lên nhánh `main`, hệ thống sẽ tự động cài dependency, chạy `npm run build` và deploy thư mục `dist` trong chưa đầy 1 phút!
