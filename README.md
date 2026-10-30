# Le Nhat Duy (DuyLN05) — Personal Cyberpunk IT Portfolio

Một website portfolio cá nhân dành cho sinh viên / kỹ sư Công nghệ Thông tin, được thiết kế theo phong cách **Cyberpunk Gaming HUD**, kết hợp điểm nhấn âm nhạc điện tử, chế độ **Dark / Light Mode**, hệ thống blog kỹ thuật đọc trực tiếp từ **Markdown**, tối ưu hóa hiệu năng và triển khai tự động lên **GitHub Pages**.

---

## 🚀 Công nghệ sử dụng (Tech Stack)

| Hạng mục | Công nghệ | Chi tiết |
|---|---|---|
| **Core UI** | React 18 + TypeScript | Component hóa, type-safety tuyệt đối |
| **Bundler** | Vite 6 | Tốc độ HMR cực nhanh, build tĩnh tối ưu |
| **Routing** | React Router (`HashRouter`) | Chống lỗi 404 khi refresh trên GitHub Pages |
| **Styling** | Tailwind CSS + CSS Variables | Hệ thống Design tokens Cyberpunk / HUD Panels |
| **Markdown** | Marked + Highlight.js (Tree-shaken) | Parse Markdown + Code highlighting siêu nhẹ |
| **Icons** | Lucide React | Bộ icon hiện đại, tối giản |
| **Audio & VFX** | Web Audio API + Canvas Confetti | Tạo sóng âm synthesizer thời gian thực |
| **CI/CD** | GitHub Actions | Build & deploy tự động khi push vào `main` |

---

## 📂 Cấu trúc thư mục (Architecture)

```text
DuyLN05.github.io/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions workflow tự động build & deploy
├── public/
│   ├── favicon.svg         # Monogram logo favicon Cyberpunk
│   ├── robots.txt          # Chuẩn SEO crawler
│   └── images/projects/    # Ảnh cover các dự án dạng SVG tối ưu
├── src/
│   ├── components/
│   │   ├── common/         # Badge, SectionHeading, TerminalWidget...
│   │   ├── layout/         # Navbar, Footer, AppShell, ThemeToggle...
│   │   ├── posts/          # PostCard...
│   │   └── projects/       # ProjectCard...
│   ├── content/posts/      # Các bài viết blog định dạng Markdown (.md)
│   ├── data/
│   │   ├── profile.ts      # Dữ liệu cá nhân, liên hệ, social links
│   │   ├── projects.ts     # Dữ liệu dự án thực tế, tech stack, thách thức
│   │   ├── skills.ts       # Bảng phân loại kỹ năng (Frontend, Backend, DB, Tools)
│   │   └── timeline.ts     # Cột mốc học tập, giáo dục, hoạt động
│   ├── hooks/
│   │   └── useTheme.ts     # Quản lý Dark/Light mode + localStorage
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── PostsPage.tsx
│   │   ├── PostDetailPage.tsx
│   │   ├── LabPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/
│   │   ├── globals.css     # HUD styles, scrollbar, cyberpunk grid
│   │   └── theme.css       # Biến màu Design Tokens (Neon Cyan, Violet, Pink)
│   ├── types/
│   │   └── index.ts        # TypeScript schemas cho toàn bộ ứng dụng
│   ├── utils/
│   │   ├── markdown.ts     # Vite glob loader + parser Markdown
│   │   └── readingTime.ts  # Tính thời gian đọc bài viết
│   ├── App.tsx             # Scaffolding Router + Theme Provider
│   └── main.tsx            # Entry point ReactDOM
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🛠️ Hướng dẫn Chạy Thử Tại Local

1. **Cài đặt thư viện:**
   ```bash
   npm install
   ```

2. **Chạy máy chủ dev:**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại đường dẫn `http://localhost:5173`.

3. **Kiểm tra build production:**
   ```bash
   npm run build
   ```
   Thư mục xuất bản tĩnh sẽ nằm tại `dist/`.

---

## ✍️ Hướng dẫn Đăng Bài Viết Mới (Markdown Blog)

Để thêm bài viết mới vào website:
1. Tạo một file `.md` mới trong thư mục `src/content/posts/` (ví dụ: `03-hoc-react-hook.md`).
2. Thêm frontmatter ở đầu file:
   ```yaml
   ---
   title: "Tiêu đề bài viết của bạn"
   slug: "hoc-react-hook"
   description: "Tóm tắt ngắn gọn nội dung bài viết."
   date: "2024-10-30"
   category: "Frontend"
   tags:
     - React
     - Hooks
   published: true
   ---
   ```
3. Viết nội dung bài viết bằng Markdown tiêu chuẩn phía dưới.
4. Chạy `npm run dev` để xem trước, sau đó commit và push lên GitHub. Hệ thống sẽ tự động cập nhật!

---

## ⚙️ Hướng dẫn Cấu hình GitHub Pages (Thao tác thủ công)

Do đây là repository dạng User Site (`DuyLN05.github.io`), website sẽ có tên miền gốc là:
👉 **`https://duyln05.github.io/`**

Thực hiện các bước sau trên GitHub:
1. Push toàn bộ code lên nhánh `main` của repository.
2. Trên giao diện GitHub repository: vào **Settings** -> **Pages**.
3. Tại mục **Build and deployment** -> **Source**: chọn **GitHub Actions**.
4. Chuyển sang tab **Actions** trên GitHub để theo dõi tiến trình chạy của workflow `Deploy Portfolio to GitHub Pages`.
5. Sau khi workflow hoàn tất (khoảng 30-60 giây), truy cập `https://duyln05.github.io/` để xem website trực tiếp!
