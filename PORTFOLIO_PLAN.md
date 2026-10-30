# Kế hoạch A--Z: Xây dựng IT Portfolio cá nhân phong cách Cyberpunk Gaming + Music trên GitHub Pages

> **Mục tiêu:** Xây dựng một portfolio cá nhân dành cho sinh viên/lập
> trình viên Công nghệ Thông tin, có giao diện công nghệ hiện đại, cảm
> hứng gaming và âm nhạc, nội dung dễ cập nhật bằng Markdown, tải nhanh,
> responsive và triển khai miễn phí trên GitHub Pages.
>
> **Cách dùng tài liệu:** Đưa file Markdown này cho AI coding agent (VS
> Code Agent, Copilot Agent hoặc công cụ tương tự) và yêu cầu thực hiện
> lần lượt từng Phase. Không nên yêu cầu agent tạo toàn bộ dự án trong
> một lần mà không kiểm tra từng giai đoạn.

------------------------------------------------------------------------

## 1. Tầm nhìn sản phẩm và nguyên tắc thiết kế

### 1.1. Định vị portfolio

-   **Đối tượng xem:** Nhà tuyển dụng, HR công nghệ, Tech Lead, giảng
    viên và cộng đồng lập trình.
-   **Thông điệp:** Một lập trình viên trẻ yêu thích xây dựng sản phẩm,
    khám phá công nghệ, gaming và âm nhạc.
-   **Ấn tượng cần tạo:** Có cá tính nhưng không rối mắt; hiệu ứng thú
    vị nhưng không làm giảm khả năng đọc; dự án và kỹ năng được trình
    bày rõ ràng.
-   **Ngôn ngữ:** Ưu tiên tiếng Anh cho nội dung portfolio nếu hướng đến
    tuyển dụng quốc tế; có thể bổ sung chuyển đổi Việt/Anh ở giai đoạn
    sau.
-   **Nguyên tắc:** Nội dung và dự án thật quan trọng hơn hiệu ứng.
    Không tạo thành tích, kinh nghiệm hoặc số liệu không có thật.

### 1.2. Phong cách hình ảnh

**Art direction:** Cyberpunk / Neon Terminal / Gaming HUD, điểm xuyết
Music Player.

-   Nền chính: xanh đen hoặc than chì, ví dụ `#0B1020`.
-   Màu nhấn: cyan `#38E8FF`, violet `#9B7CFF`, magenta `#FF4FD8`.
-   Màu chữ chính: `#F4F7FB`; chữ phụ: `#A8B3C7`.
-   Font gợi ý: `Space Grotesk` hoặc `Inter` cho nội dung;
    `JetBrains Mono` cho mã và nhãn kỹ thuật.
-   Hình khối: card viền mảnh, glow có kiểm soát, lưới nền tinh tế,
    đường viền kiểu HUD, badge công nghệ.
-   Âm nhạc: mini player tùy chọn, visualizer trang trí hoặc mục "Now
    Playing"; mặc định tắt tiếng và không tự động phát nhạc.
-   Không lạm dụng glitch, parallax, con trỏ tùy chỉnh hay hiệu ứng nhấp
    nháy.

### 1.3. Bộ nguyên tắc UX

1.  Người xem phải hiểu bạn là ai và làm gì trong 5--10 giây đầu.
2.  CTA nổi bật: **View Projects**, **Read Posts**, **Contact Me** hoặc
    **Download CV**.
3.  Tất cả liên kết quan trọng đều hoạt động và có trạng thái
    hover/focus.
4.  Trang dùng tốt trên điện thoại, tablet, laptop và màn hình lớn.
5.  Dark mode là giao diện mặc định; nếu có light mode thì phải kiểm tra
    độ tương phản ở cả hai.
6.  Chuyển động phải tôn trọng `prefers-reduced-motion`.
7.  Không phụ thuộc vào backend hoặc cơ sở dữ liệu để hoạt động trên
    GitHub Pages.

------------------------------------------------------------------------

## 2. Công nghệ đề xuất

### 2.1. Stack khuyến nghị

Dùng **React + Vite + TypeScript + Tailwind CSS (hoặc CSS Modules/CSS
thuần)**. Stack này hiện đại, dễ chia component và phù hợp với GitHub
Pages vì Vite tạo ra các file tĩnh có thể triển khai.

  -----------------------------------------------------------------------
  Hạng mục                Lựa chọn đề xuất        Vai trò
  ----------------------- ----------------------- -----------------------
  UI                      React                   Chia giao diện thành
                                                  component tái sử dụng

  Build tool              Vite                    Build nhanh, tạo static
                                                  assets

  Ngôn ngữ                TypeScript              Giảm lỗi và làm rõ cấu
                                                  trúc dữ liệu

  Styling                 Tailwind CSS hoặc CSS   Thiết kế responsive,
                          Modules                 quản lý theme

  Routing                 React Router hoặc       Điều hướng trang
                          routing dựa trên URL    
                          đơn giản                

  Markdown                `gray-matter` +         Đọc metadata và render
                          `marked` hoặc           bài viết
                          `remark`/`rehype`       

  Syntax highlighting     `rehype-highlight` hoặc Tô màu code trong bài
                          `highlight.js`          viết

  Icon                    Lucide                  Icon đồng bộ, gọn nhẹ

  Animation               CSS transitions;        Hiệu ứng có kiểm soát
                          Motion/Framer Motion    
                          nếu thực sự cần         

  Triển khai              GitHub Pages + GitHub   Build và deploy tự động
                          Actions                 

  Quản lý source          Git + GitHub            Version control và lưu
                                                  trữ mã nguồn
  -----------------------------------------------------------------------

**Lưu ý quan trọng:** Không cần dùng tất cả thư viện cùng lúc. Nếu muốn
website gọn và dễ bảo trì, hãy bắt đầu bằng React, Vite, TypeScript,
CSS/Tailwind và một thư viện Markdown.

### 2.2. Lựa chọn đơn giản hơn

Nếu ưu tiên học nền tảng và ít phụ thuộc:

-   HTML5 + CSS3 + JavaScript thuần.
-   Dùng Markdown files và một thư viện parser nhỏ để render bài viết.
-   Dùng GitHub Actions để build hoặc copy các file tĩnh.
-   Phù hợp với portfolio ít trang, nhưng khi có nhiều trang và
    component, việc tổ chức code sẽ thủ công hơn.

### 2.3. Những điều cần biết về GitHub Pages

-   GitHub Pages lưu trữ **website tĩnh**. Không chạy trực tiếp PHP,
    Node.js server, MySQL hay API backend riêng.
-   React/Vite phải được build thành HTML/CSS/JS tĩnh trước khi deploy.
-   Nếu repo có địa chỉ dạng `username.github.io/repo-name/`, cần cấu
    hình `base` trong Vite phù hợp với tên repository. Nếu dùng repo
    `username.github.io` làm website người dùng, cấu hình thường khác.
-   Với React Router, refresh ở URL trang con có thể gặp lỗi 404 trên
    hosting tĩnh. Chọn một trong các hướng:
    1.  Dùng `HashRouter` để có URL dạng `/#/projects`.
    2.  Dùng routing dựa trên query/hash đơn giản.
    3.  Dùng giải pháp fallback phù hợp và kiểm thử kỹ.
-   Không đưa token, mật khẩu, khóa API riêng tư hoặc dữ liệu nhạy cảm
    vào source code frontend.

Từ khóa tra cứu: `Vite base path GitHub Pages`,
`GitHub Pages GitHub Actions deploy`, `React Router static hosting`.

------------------------------------------------------------------------

## 3. Kiến trúc trang và nội dung

Đề xuất **6 trang chính** và các section liên kết giữa chúng.

### 3.1. Home --- Trang chủ

**Mục tiêu:** Tạo ấn tượng nhanh và dẫn người xem đến dự án, bài viết
hoặc liên hệ.

Các section:

1.  **Navigation**
    -   Logo dạng monogram hoặc tên viết tắt.
    -   Liên kết: Home, About, Projects, Posts, Lab, Contact.
    -   Nút Light/Dark mode.
    -   Menu mobile dạng drawer hoặc menu gọn.
    -   Thanh điều hướng có trạng thái trang hiện tại.
2.  **Hero**
    -   Tên, vai trò, ví dụ: "IT Student \| Aspiring Full-stack
        Developer".
    -   Một câu giới thiệu ngắn, trung thực.
    -   CTA: View Projects, Read My Posts.
    -   Khối terminal giả lập có vài dòng giới thiệu hoặc tech stack.
    -   Hình đại diện, avatar minh họa hoặc abstract graphic; tránh ảnh
        dung lượng lớn.
    -   Badge trạng thái như "Currently learning..." nếu thông tin chính
        xác.
3.  **About preview**
    -   2--3 câu về định hướng và điều bạn thích xây dựng.
    -   Link đến trang About.
4.  **Tech Stack**
    -   Nhóm Frontend, Backend, Database, Tools.
    -   Dùng icon + tên công nghệ + mức độ quen thuộc mô tả bằng từ ngữ,
        không cần phần trăm thiếu căn cứ.
5.  **Featured Projects**
    -   3 dự án tốt nhất.
    -   Mỗi card có vấn đề giải quyết, vai trò, công nghệ, điểm nổi bật,
        GitHub và Live Demo.
    -   Nếu chưa có demo online, ghi rõ "Source code" thay vì tạo liên
        kết giả.
6.  **Latest Posts**
    -   3 bài mới nhất lấy từ dữ liệu Markdown.
    -   Hiển thị tiêu đề, ngày, category, thời gian đọc và mô tả ngắn.
7.  **Currently Exploring / Music Corner**
    -   Công nghệ đang học hoặc album/playlist yêu thích.
    -   Nếu nhúng dịch vụ bên ngoài, phải kiểm tra quyền riêng tư, hiệu
        năng và điều khoản sử dụng.
8.  **Contact CTA + Footer**
    -   Email công khai phù hợp, GitHub, LinkedIn hoặc nền tảng nghề
        nghiệp khác.
    -   Footer có năm, liên kết và ghi chú công nghệ.

### 3.2. About --- Giới thiệu

Các section:

-   Giới thiệu bản thân và định hướng nghề nghiệp.
-   Giá trị khi làm việc: giải quyết vấn đề, học hỏi, teamwork, trách
    nhiệm.
-   Hành trình học tập dạng timeline.
-   Skills/Tech Stack có nhóm rõ ràng.
-   Education và chứng chỉ (chỉ liệt kê thông tin đã có).
-   Experience, hoạt động nhóm hoặc bài tập lớn; có thể ghi "Academic
    Projects" nếu chưa có kinh nghiệm doanh nghiệp.
-   Nút xem CV dạng PDF, nếu đã chuẩn bị CV.
-   Ảnh cá nhân tùy chọn; tối ưu kích thước và văn bản thay thế.

### 3.3. Projects --- Dự án

Tạo trang danh sách dự án, có thể lọc theo category hoặc tech stack.

Mỗi dự án cần:

-   Tên dự án và ảnh chụp màn hình.
-   Mô tả vấn đề và đối tượng sử dụng.
-   Vai trò cá nhân và phần đóng góp.
-   Tech stack.
-   Các chức năng chính.
-   Một thử thách kỹ thuật và cách giải quyết.
-   Bài học rút ra hoặc hướng phát triển tiếp.
-   Liên kết Repository và Live Demo.
-   Trạng thái: In progress, Completed hoặc Archived.

**Gợi ý:** Chọn 3--5 dự án chất lượng. Một dự án hoàn chỉnh, có README,
demo và giải thích quyết định kỹ thuật thường thuyết phục hơn danh sách
dài các bài tập nhỏ.

### 3.4. Posts --- Blog kỹ thuật bằng Markdown

Đây là phần nội dung cần dễ cập nhật mà không phải sửa giao diện mỗi lần
đăng bài.

**Chức năng đề xuất:**

-   Danh sách bài viết, sắp xếp ngày mới nhất trước.
-   Tìm kiếm theo tiêu đề/mô tả.
-   Lọc category và tag.
-   Trang đọc bài có mục lục (TOC) nếu bài dài.
-   Markdown hỗ trợ heading, link, ảnh, bảng, blockquote, checklist và
    fenced code blocks.
-   Syntax highlighting cho code.
-   Thời gian đọc ước tính.
-   Bài liên quan hoặc bài kế tiếp/trước đó.
-   SEO metadata riêng cho từng bài nếu kiến trúc hỗ trợ.
-   Trạng thái draft để bài nháp không xuất hiện trên site.

**Cấu trúc frontmatter đề xuất:**

``` yaml
---
title: "Xây dựng portfolio với Vite và GitHub Pages"
description: "Các bước tổ chức dự án và triển khai website tĩnh."
date: "2026-10-30"
updated: "2026-10-30"
tags:
  - Frontend
  - GitHub Pages
category: "Web Development"
cover: "/images/posts/portfolio-cover.webp"
published: true
---
```

Ví dụ nội dung Markdown:

``` markdown
# Vì sao chọn Vite?

Vite giúp khởi tạo và build ứng dụng frontend nhanh.

## Ví dụ code

```js
const greeting = "Hello, portfolio!";
console.log(greeting);
```

> Ghi chú: hãy kiểm tra `base` trước khi deploy lên GitHub Pages.


    **Quy trình đăng bài:**

    1. Tạo file mới, ví dụ `src/content/posts/ten-bai-viet.md`.
    2. Điền frontmatter theo schema đã quy định.
    3. Viết nội dung Markdown.
    4. Thêm ảnh vào thư mục assets với tên dễ hiểu, dung lượng tối ưu.
    5. Chạy local preview và kiểm tra link, code block, ảnh.
    6. Đặt `published: true` khi sẵn sàng.
    7. Commit và push lên GitHub.
    8. GitHub Actions build và deploy website.

    **Lưu ý kỹ thuật:** Frontmatter là metadata nằm ở đầu file. Với Vite, có thể dùng `import.meta.glob` để nhập các file Markdown lúc build, sau đó parse frontmatter và render nội dung. Chọn một pipeline nhất quán, không trộn nhiều parser nếu không cần. Nếu sử dụng `dangerouslySetInnerHTML`, phải đảm bảo nội dung đã được sanitize; không render HTML không đáng tin cậy trực tiếp.

    **Quy ước nội dung:**

    - Mỗi bài có title, description, date, category, tags, published.
    - Dùng slug từ tên file để tạo URL ổn định.
    - Ngày theo định dạng `YYYY-MM-DD`.
    - Ảnh có alt text; code mẫu không chứa secret.
    - Có thể viết về tutorial, ghi chú học tập, review công nghệ, debugging diary hoặc phân tích dự án.

    ### 3.5. Lab — Tech Playground / Gaming Lab

    Trang tạo dấu ấn cá nhân nhưng vẫn phục vụ thương hiệu kỹ thuật.

    Ý tưởng tính năng:

    - **Interactive Terminal:** gõ lệnh giới hạn như `help`, `about`, `skills`, `projects`; không thực thi shell thật.
    - **Code Playground:** các snippet nhỏ có nút copy.
    - **Keyboard shortcuts:** ví dụ `/` để focus tìm kiếm, `Esc` để đóng modal; phải tránh xung đột với thao tác hỗ trợ tiếp cận.
    - **Mini system status:** chỉ là giao diện trang trí, không giả mạo dữ liệu hệ thống thật.
    - **Music player:** phát một audio được phép sử dụng, có play/pause/volume; không tự động phát.
    - **Visual equalizer:** animation CSS trang trí, không nhất thiết phải phân tích âm thanh thật.
    - **Easter egg:** một lệnh hoặc tương tác bí mật nhỏ, nhưng không che giấu nội dung quan trọng.

    **Giới hạn:** Lab là trang phụ. Phải giữ Home, Projects và Contact rõ ràng; không để trải nghiệm gaming làm người xem khó tìm thông tin nghề nghiệp.

    ### 3.6. Contact — Liên hệ

    - Email dạng liên kết `mailto:` nếu bạn muốn công khai email.
    - GitHub, LinkedIn hoặc hồ sơ nghề nghiệp khác.
    - Nút tải CV PDF.
    - Form liên hệ tùy chọn: GitHub Pages không xử lý backend form trực tiếp. Có thể dùng dịch vụ form bên ngoài sau khi đánh giá quyền riêng tư, giới hạn miễn phí và điều khoản; hoặc chỉ hiển thị email.
    - Có thông báo rõ khi nhấn sao chép email.
    - Không công khai địa chỉ nhà, số giấy tờ hay dữ liệu cá nhân không cần thiết.

    ---

    ## 4. Hệ thống thiết kế (Design System)

    ### 4.1. Design tokens

    Tạo biến CSS hoặc token Tailwind cho:

    - `--color-bg`, `--color-surface`, `--color-text`, `--color-muted`.
    - `--color-primary`, `--color-secondary`, `--color-accent`.
    - `--radius-sm`, `--radius-md`, `--radius-lg`.
    - `--shadow-card`, `--glow-primary`.
    - `--container-width`, `--spacing-section`.
    - `--transition-fast`, `--transition-normal`.

    Mọi màu sắc và khoảng cách nên dùng token để chỉnh toàn site nhất quán.

    ### 4.2. Component cần xây dựng

    - `AppShell`
    - `Navbar`
    - `MobileMenu`
    - `ThemeToggle`
    - `HeroSection`
    - `SectionHeading`
    - `SkillBadge`
    - `ProjectCard`
    - `PostCard`
    - `PostFilter`
    - `MarkdownRenderer`
    - `CodeBlock`
    - `TableOfContents`
    - `Timeline`
    - `MusicPlayer` (tùy chọn)
    - `TerminalWidget` (tùy chọn)
    - `ContactCTA`
    - `Footer`
    - `BackToTop`
    - `NotFound`

    Mỗi component cần có props rõ ràng, trạng thái hover/focus và xử lý trường hợp thiếu dữ liệu.

    ### 4.3. Hiệu ứng gợi ý

    | Hiệu ứng | Cách làm | Lưu ý |
    |---|---|---|
    | Neon glow | `box-shadow`/`text-shadow` có giới hạn | Tránh glow quá mạnh |
    | Grid nền | CSS gradients | Đảm bảo chữ dễ đọc |
    | Card hover | `transform: translateY()` và border color | Tắt/giảm trên reduced motion |
    | Terminal typing | CSS/JS đơn giản | Không trì hoãn nội dung quan trọng |
    | Scroll reveal | `IntersectionObserver` | Nội dung vẫn hiện nếu JS lỗi |
    | Page transition | CSS hoặc thư viện nhỏ | Không làm navigation chậm |
    | Equalizer | CSS keyframes | Dừng khi reduced motion |
    | Cursor trail | Không ưu tiên | Có thể gây lag và khó dùng trên mobile |

    **Accessibility:** Không chỉ dựa vào màu để biểu thị trạng thái; thêm nhãn và icon. Có focus ring rõ, contrast phù hợp, nút có tên truy cập được và ảnh có alt text phù hợp.

    ---

    ## 5. Cấu trúc thư mục đề xuất

    Ví dụ cho React + Vite + TypeScript:

    ```text
    my-portfolio/
    ├── public/
    │   ├── favicon.svg
    │   ├── robots.txt
    │   ├── images/
    │   │   ├── projects/
    │   │   └── posts/
    │   └── files/
    │       └── cv.pdf
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── layout/
    │   │   ├── common/
    │   │   ├── projects/
    │   │   └── posts/
    │   ├── content/
    │   │   └── posts/
    │   │       ├── welcome.md
    │   │       └── sample-technical-post.md
    │   ├── data/
    │   │   ├── profile.ts
    │   │   ├── projects.ts
    │   │   ├── skills.ts
    │   │   └── timeline.ts
    │   ├── hooks/
    │   ├── layouts/
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
    │   │   ├── globals.css
    │   │   └── theme.css
    │   ├── utils/
    │   │   ├── markdown.ts
    │   │   ├── readingTime.ts
    │   │   └── seo.ts
    │   ├── App.tsx
    │   └── main.tsx
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── README.md
    └── .gitignore

Có thể thay đổi cấu trúc nếu cần, nhưng phải giữ nội dung, dữ liệu và UI
tách biệt. Nếu dùng Markdown qua `import.meta.glob`, cấu hình đường dẫn
và cách parse phải được kiểm thử trong production build.

------------------------------------------------------------------------

## 6. Timeline triển khai theo giai đoạn

Kế hoạch tham khảo trong **7--10 ngày**, có thể điều chỉnh theo thời
gian và kinh nghiệm.

## Phase 0 --- Chuẩn bị và xác định phạm vi (0,5 ngày)

**Việc cần làm**

1.  Xác định tên hiển thị, vai trò, ngôn ngữ và đối tượng tuyển dụng.
2.  Chọn 3--5 dự án có thể giới thiệu.
3.  Chuẩn bị avatar, ảnh dự án, CV và các liên kết.
4.  Liệt kê nội dung About, Skills, Education và Contact.
5.  Chốt stack và tên repository, ví dụ `username.github.io` hoặc
    `my-portfolio`.

**Công cụ:** GitHub, VS Code, Notion/Trello (tùy chọn).

**Đầu ra:** `content checklist`, danh sách dự án và sitemap.

**Tiêu chí hoàn thành:** Không có nội dung giả định về thành tích hoặc
kinh nghiệm; mọi section đều có dữ liệu thật hoặc placeholder được đánh
dấu rõ.

## Phase 1 --- Nghiên cứu UI/UX và wireframe (1 ngày)

**Việc cần làm**

1.  Tham khảo các portfolio có cấu trúc tốt; chỉ lấy cảm hứng, không sao
    chép nguyên mẫu.
2.  Vẽ sitemap: Home, About, Projects, Posts, Lab, Contact.
3.  Vẽ wireframe cho desktop và mobile.
4.  Chọn palette, typography, grid, radius, spacing và icon.
5.  Xác định CTA chính và luồng người xem.
6.  Tạo prototype đơn giản cho Navbar, Hero, Project Card và Post Card.

**Công cụ:** Figma, Excalidraw, Penpot.

**Từ khóa:** `cyberpunk portfolio UI`, `developer portfolio wireframe`,
`dark dashboard design`, `accessible color contrast`.

**Đầu ra:** Sitemap, wireframe, design tokens, danh sách component.

**Tiêu chí hoàn thành:** Người xem có thể tìm thấy dự án và liên hệ
trong tối đa 1--2 thao tác từ trang chủ.

## Phase 2 --- Khởi tạo dự án và thiết lập nền tảng (0,5 ngày)

**Việc cần làm**

1.  Cài Node.js bản LTS và Git.
2.  Tạo ứng dụng Vite React TypeScript.
3.  Cài styling, icon và Markdown parser đã chọn.
4.  Thiết lập lint/format nếu cần.
5.  Tạo routing, layout, design tokens và dữ liệu mẫu.
6.  Kiểm tra `npm run dev` và `npm run build`.

**Lệnh tham khảo:**

``` bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
npm run dev
```

Cài các thư viện bổ sung theo nhu cầu, không cài toàn bộ thư viện chỉ vì
chúng được gợi ý.

**Đầu ra:** Dự án chạy local, cấu trúc thư mục và trang placeholder.

**Tiêu chí hoàn thành:** Build không lỗi; không có warning quan trọng
chưa xử lý.

## Phase 3 --- Xây dựng Design System và Layout (1 ngày)

**Việc cần làm**

1.  Tạo màu, typography, spacing và breakpoint.
2.  Xây Navbar, menu mobile, Footer và container.
3.  Xây card, badge, button, section heading, modal/toast nếu cần.
4.  Tạo Dark/Light mode và lưu lựa chọn vào `localStorage`.
5.  Tôn trọng thiết lập theme hệ thống nếu người dùng chưa chọn.
6.  Kiểm tra focus state, keyboard navigation và reduced motion.

**Đầu ra:** Hệ thống giao diện thống nhất.

**Tiêu chí hoàn thành:** Component dùng lại được, không có style trùng
lặp quá mức; menu dùng được bằng bàn phím và điện thoại.

## Phase 4 --- Xây dựng Home và About (1 ngày)

**Việc cần làm**

1.  Tạo Hero với câu giới thiệu và CTA.
2.  Thêm About preview, Skills, Featured Projects và Latest Posts.
3.  Tạo trang About có timeline, education và định hướng.
4.  Dùng dữ liệu từ file `src/data/` thay vì hard-code lặp lại.
5.  Tối ưu ảnh và kiểm tra liên kết.

**Đầu ra:** Hai trang hoàn chỉnh về nội dung và giao diện.

**Tiêu chí hoàn thành:** Không còn nút giả; mọi CTA có đích đến rõ ràng.

## Phase 5 --- Projects và chi tiết dự án (1 ngày)

**Việc cần làm**

1.  Chuẩn hóa schema dữ liệu dự án.
2.  Tạo Project Card và trang danh sách.
3.  Thêm filter theo tech stack/category nếu có giá trị.
4.  Tạo trang chi tiết hoặc modal accessible.
5.  Thêm GitHub/Live Demo, ảnh, vai trò, thách thức và kết quả.
6.  Hiển thị trạng thái rõ nếu demo chưa có.

**Đầu ra:** Portfolio dự án có thể cập nhật bằng cách chỉnh dữ liệu.

**Tiêu chí hoàn thành:** Tất cả đường dẫn được kiểm tra; dự án thể hiện
đóng góp cá nhân cụ thể.

## Phase 6 --- Markdown Blog (1--1,5 ngày)

**Việc cần làm**

1.  Chốt schema frontmatter.
2.  Tạo ít nhất 2 bài Markdown mẫu.
3.  Viết hàm đọc và parse metadata.
4.  Render danh sách bài theo ngày, category và tag.
5.  Tạo trang chi tiết bài viết.
6.  Thêm syntax highlighting, reading time và TOC nếu cần.
7.  Xử lý ảnh lỗi, metadata thiếu, slug trùng và bài draft.
8.  Sanitize nội dung HTML nếu pipeline cho phép HTML.
9.  Kiểm tra đường dẫn ảnh/link sau khi deploy dưới base path của repo.

**Đầu ra:** Có thể đăng bài bằng cách thêm file Markdown và push lên
GitHub.

**Tiêu chí hoàn thành:** Bài Markdown hiển thị đúng heading, link, ảnh,
bảng, quote và code block; bài `published: false` không xuất hiện công
khai.

## Phase 7 --- Lab, gaming và âm nhạc (0,5--1 ngày)

**Việc cần làm**

1.  Chọn tối đa 2--3 hiệu ứng có giá trị.
2.  Làm terminal mô phỏng với danh sách lệnh an toàn, cố định.
3.  Thêm nút copy code snippet.
4.  Thêm music player tùy chọn nếu có audio được phép sử dụng.
5.  Thêm visualizer trang trí nhưng không phát nhạc tự động.
6.  Tắt hoặc giảm animation khi `prefers-reduced-motion`.
7.  Kiểm tra trên thiết bị yếu và mobile.

**Đầu ra:** Trang Lab độc đáo nhưng không ảnh hưởng luồng portfolio
chính.

**Tiêu chí hoàn thành:** Không có hiệu ứng gây giật, nội dung không bị
che, âm thanh có điều khiển rõ ràng.

## Phase 8 --- Responsive, accessibility và kiểm thử (1 ngày)

**Checklist**

-   [ ] Kiểm tra màn hình 320--375px, tablet, laptop và desktop rộng.
-   [ ] Không có horizontal overflow.
-   [ ] Menu mobile mở/đóng chính xác.
-   [ ] Dark/Light mode giữ lựa chọn sau khi tải lại.
-   [ ] Tất cả liên kết nội bộ và ngoài site hoạt động.
-   [ ] Có trạng thái hover, focus, active và disabled hợp lý.
-   [ ] Điều hướng bằng bàn phím được.
-   [ ] Màu chữ đủ tương phản.
-   [ ] Ảnh có kích thước hợp lý, alt text phù hợp.
-   [ ] `prefers-reduced-motion` được xử lý.
-   [ ] Markdown không vỡ layout với code dài hoặc bảng rộng.
-   [ ] Trang lỗi/404 có đường quay về Home.
-   [ ] Không có lỗi console nghiêm trọng.

**Công cụ:** Chrome DevTools, Lighthouse, axe DevTools (tùy chọn), trình
duyệt trên điện thoại.

**Đầu ra:** Danh sách bug đã xử lý và checklist QA.

## Phase 9 --- SEO, performance và nội dung (0,5--1 ngày)

**SEO**

1.  Mỗi trang có title và meta description phù hợp.
2.  Có favicon và Open Graph metadata cơ bản.
3.  Heading theo thứ tự hợp lý; mỗi trang có một H1 chính.
4.  URL/slug dễ đọc.
5.  Ảnh có alt text và kích thước xác định để giảm layout shift.
6.  Tạo `robots.txt`; sitemap nếu phù hợp với cấu trúc static site.
7.  Dùng canonical URL khi đã xác định domain chính xác.
8.  Không hứa hẹn SEO tự động; cần nội dung chất lượng và liên kết phù
    hợp.

**Performance**

1.  Nén ảnh; ưu tiên WebP/AVIF khi tương thích.
2.  Dùng lazy loading cho ảnh dưới màn hình đầu tiên.
3.  Hạn chế thư viện animation và icon quá nặng.
4.  Chỉ tải font cần thiết; có fallback font.
5.  Tránh video nền dung lượng lớn.
6.  Không để hiệu ứng blur/glow phủ toàn màn hình gây tốn tài nguyên.
7.  Chạy Lighthouse và xử lý các vấn đề có tác động lớn trước.

**Công cụ:** Lighthouse, PageSpeed Insights, Squoosh, WebPageTest (tùy
chọn).

**Đầu ra:** Trang có metadata cơ bản, ảnh tối ưu và báo cáo kiểm tra.

## Phase 10 --- GitHub và triển khai GitHub Pages (0,5 ngày)

**Việc cần làm**

1.  Tạo repository trên GitHub.
2.  Commit code với message rõ ràng.
3.  Cấu hình Vite `base` đúng với URL dự kiến.
4.  Tạo GitHub Actions workflow để cài dependencies, build và deploy thư
    mục output.
5.  Trong repository, mở **Settings → Pages** và chọn nguồn deploy qua
    GitHub Actions nếu workflow dùng phương thức này.
6.  Push lên nhánh đã cấu hình.
7.  Theo dõi tab Actions đến khi workflow thành công.
8.  Mở URL Pages và kiểm tra asset, routing, ảnh, font, bài viết.
9.  Sửa lỗi base path/404 nếu có, sau đó push lại.

**Quy tắc Vite:**

-   Website người dùng ở dạng `https://username.github.io/`: `base`
    thường là `/`.
-   Website project ở dạng
    `https://username.github.io/repository-name/`: `base` thường là
    `/repository-name/`.
-   Phải xác nhận tên repo thật trước khi thiết lập; không để agent đoán
    tên repository.

**Tiêu chí hoàn thành:** Build và deploy tự động; website hoạt động ở
URL public; các asset không bị lỗi 404.

## Phase 11 --- Bảo trì và phát triển sau khi ra mắt

-   Mỗi tháng kiểm tra link, nội dung và CV.
-   Thêm bài viết mới theo lịch có thể duy trì.
-   Cập nhật dự án khi có tính năng hoặc demo mới.
-   Xem lại hiệu năng sau khi thêm thư viện/ảnh.
-   Kiểm tra các dependency và cập nhật khi cần.
-   Giữ README hướng dẫn cài đặt, chạy local, thêm bài Markdown và
    deploy.
-   Không thêm tính năng chỉ để "trông hiện đại" nếu không cải thiện
    trải nghiệm.

------------------------------------------------------------------------

## 7. Thiết kế dữ liệu để dễ cập nhật

### 7.1. Profile

Tạo `src/data/profile.ts` chứa:

-   Tên hiển thị.
-   Vai trò/định hướng.
-   Bio ngắn.
-   Email công khai (nếu muốn).
-   Social links.
-   CV path.
-   Vị trí ở mức khái quát nếu muốn chia sẻ; không cần địa chỉ cụ thể.
-   Trạng thái hiện tại như đang học công nghệ nào.

### 7.2. Projects

Mỗi project nên có:

-   `id`, `slug`, `title`, `summary`, `description`.
-   `role`, `stack`, `category`.
-   `features`, `challenges`, `learnings`.
-   `image`, `repoUrl`, `demoUrl`.
-   `status`, `featured`, `date`.

Kiểm tra URL và không hiển thị nút Demo khi `demoUrl` không có.

### 7.3. Posts

Mỗi post nên có:

-   `slug`, `title`, `description`, `date`, `updated`.
-   `category`, `tags`, `cover`, `published`.
-   `readingTime` tính tự động hoặc được tính trong build.
-   `content` lấy từ Markdown.

Nếu dùng static import/build-time glob, cần có cách xử lý frontmatter
sai định dạng và bài viết không hợp lệ để lỗi được phát hiện khi phát
triển.

------------------------------------------------------------------------

## 8. Cách tạo nội dung khiến nhà tuyển dụng chú ý

### 8.1. Trình bày dự án theo câu chuyện

Với mỗi dự án, trả lời ngắn gọn:

1.  **Problem:** Vấn đề nào cần giải quyết?
2.  **Solution:** Bạn đã xây dựng gì?
3.  **My contribution:** Bạn trực tiếp làm phần nào?
4.  **Technical decisions:** Vì sao chọn stack hoặc kiến trúc đó?
5.  **Challenge:** Gặp lỗi/khó khăn nào và giải quyết ra sao?
6.  **Result:** Có kết quả kiểm chứng nào? Nếu chưa có số liệu, đừng
    bịa.
7.  **Next step:** Bạn sẽ cải thiện gì tiếp theo?

### 8.2. Các chi tiết tạo khác biệt

-   README dự án rõ ràng, có screenshot và hướng dẫn chạy.
-   Live Demo ổn định nếu dự án phù hợp với hosting tĩnh.
-   Code snippet có nút copy và giải thích bối cảnh.
-   Bài viết ghi lại cách debug lỗi thực tế.
-   Sơ đồ kiến trúc nhỏ cho dự án phức tạp.
-   Timeline học tập và mục tiêu ngắn hạn.
-   Link GitHub dễ tìm; repository được đặt tên và mô tả rõ.
-   CV có thể tải, đồng nhất với nội dung trên site.
-   Chỉ ghi kỹ năng có thể giải thích hoặc trình bày ví dụ khi phỏng
    vấn.

### 8.3. Bài viết Markdown gợi ý

1.  "Tôi đã triển khai portfolio đầu tiên lên GitHub Pages như thế nào?"
2.  "Những lỗi tôi gặp khi cấu hình Vite base path."
3.  "Một tính năng trong đồ án: từ yêu cầu đến triển khai."
4.  "So sánh hai cách tổ chức component trong React."
5.  "Ghi chú học tập: REST API, SQL hoặc Git."
6.  "Debug diary: nguyên nhân, cách tái hiện và cách sửa một bug."
7.  "Tổng kết một dự án nhóm: vai trò, phối hợp và bài học."

------------------------------------------------------------------------

## 9. SEO, accessibility và hiệu năng: tiêu chuẩn nghiệm thu

### SEO

-   [ ] Title/description có nội dung riêng cho các trang quan trọng.
-   [ ] Open Graph metadata cơ bản.
-   [ ] Heading có cấu trúc logic.
-   [ ] Link có văn bản dễ hiểu.
-   [ ] URL không chứa chuỗi khó đọc không cần thiết.
-   [ ] Ảnh có alt text phù hợp.
-   [ ] `robots.txt` không chặn nhầm website.
-   [ ] Sitemap/canonical chỉ thêm khi cấu hình URL chính xác.

### Accessibility

-   [ ] Tất cả tính năng chính dùng được bằng bàn phím.
-   [ ] Focus ring không bị xóa.
-   [ ] Nút icon có accessible name.
-   [ ] Form/field có label nếu có.
-   [ ] Contrast đủ đọc ở cả hai theme.
-   [ ] Không tự phát nhạc hoặc video có âm thanh.
-   [ ] Có hỗ trợ `prefers-reduced-motion`.
-   [ ] Trạng thái không chỉ phân biệt bằng màu sắc.

### Performance

-   [ ] Ảnh được nén.
-   [ ] Không tải thư viện lớn nếu chỉ dùng một chức năng nhỏ.
-   [ ] Animation không làm nội dung bị trễ.
-   [ ] Không có layout shift lớn.
-   [ ] Build production thành công.
-   [ ] Lighthouse được dùng để tìm vấn đề, không chạy theo điểm số bằng
    mọi giá.

------------------------------------------------------------------------

## 10. Git workflow và quy ước làm việc với Agent

### 10.1. Quy ước Git

-   Nhánh `main`: bản ổn định.
-   Nhánh tính năng tùy chọn: `feature/home-hero`,
    `feature/markdown-blog`.
-   Commit message gợi ý:
    -   `feat: add home hero section`
    -   `feat: render markdown posts`
    -   `fix: correct GitHub Pages base path`
    -   `style: improve mobile navigation`
    -   `docs: update deployment guide`

### 10.2. Quy trình làm việc mỗi Phase

1.  Đọc yêu cầu của phase.
2.  Yêu cầu agent kiểm tra code hiện có trước khi sửa.
3.  Đề nghị agent nêu file sẽ tạo/sửa và lý do.
4.  Thực hiện một nhóm tính năng nhỏ.
5.  Chạy dev server, kiểm tra giao diện và build.
6.  Sửa lỗi trước khi chuyển phase.
7.  Commit thay đổi khi một mốc hoạt động ổn định.

### 10.3. Prompt nền cho coding agent

Sao chép prompt sau và dùng cùng file kế hoạch này:

> Bạn là Senior Front-end Engineer và UI/UX Designer. Hãy đọc toàn bộ
> file `PORTFOLIO_PLAN.md` trước khi code. Xây dựng website portfolio
> theo đúng mục tiêu, sitemap, design system, yêu cầu accessibility,
> Markdown blog và GitHub Pages deployment trong tài liệu.
>
> Quy tắc làm việc: 1. Trước tiên kiểm tra repository hiện có,
> framework, package.json và cấu trúc thư mục. Không xóa hoặc ghi đè
> code hiện có nếu chưa giải thích. 2. Chia công việc thành các phase
> nhỏ; bắt đầu bằng Phase 0--2 và báo lại kế hoạch file sẽ tạo/sửa. 3.
> Không tạo thông tin cá nhân, kinh nghiệm, chứng chỉ, số liệu hay liên
> kết giả. Dùng placeholder dễ tìm và ghi rõ cần thay. 4. Dùng React +
> Vite + TypeScript trừ khi repository hiện có yêu cầu khác. Giữ cấu
> trúc component và dữ liệu dễ bảo trì. 5. Thiết kế theo phong cách
> Cyberpunk/Gaming tinh tế, có điểm nhấn âm nhạc nhưng ưu tiên khả năng
> đọc, responsive, accessibility và hiệu năng. 6. Blog phải đọc bài từ
> file Markdown trong repository; không cần backend hoặc database. Xử lý
> frontmatter, slug, draft, code block và lỗi nội dung. 7. Kiểm tra cấu
> hình Vite `base` và routing dành cho GitHub Pages project site. Không
> giả định tên repository; hãy hỏi hoặc để cấu hình rõ ràng. 8. Sau mỗi
> phase, chạy các lệnh kiểm tra phù hợp, tối thiểu `npm run build`; nêu
> lỗi, cách sửa và những bước tôi cần làm thủ công. 9. Không báo hoàn
> thành nếu chưa kiểm tra các đường dẫn, ảnh, menu mobile, theme toggle,
> Markdown và deployment workflow. 10. Không thêm thư viện nặng hoặc
> hiệu ứng không cần thiết. Ưu tiên CSS và giải pháp đơn giản khi đủ
> dùng.
>
> Bắt đầu bằng việc tóm tắt repository hiện tại và đề xuất các bước đầu
> tiên. Chưa chuyển sang phase tiếp theo cho đến khi phase hiện tại
> build thành công.

### 10.4. Prompt cho từng giai đoạn

-   **UI:** "Hãy hoàn thiện Phase 1--3: sitemap, design tokens, layout,
    navigation và component nền. Ưu tiên mobile-first và accessibility."
-   **Nội dung:** "Hãy triển khai Phase 4--5 bằng dữ liệu mẫu có
    placeholder rõ ràng. Tách profile, skills, timeline và projects khỏi
    component."
-   **Markdown:** "Hãy triển khai Phase 6. Bài viết phải lấy từ Markdown
    trong repository, parse frontmatter, hỗ trợ code highlighting và
    draft. Thêm bài mẫu để kiểm thử."
-   **Hiệu ứng:** "Hãy triển khai Phase 7 với terminal mô phỏng an toàn,
    copy code và music player tùy chọn. Không tự phát âm thanh; hỗ trợ
    reduced motion."
-   **QA:** "Hãy chạy checklist Phase 8--9, kiểm tra responsive,
    accessibility, SEO, ảnh và build. Báo lỗi cụ thể theo mức độ ưu
    tiên."
-   **Deploy:** "Hãy triển khai Phase 10. Kiểm tra chính xác tên
    repository và cấu hình Vite base path, tạo GitHub Actions workflow
    và hướng dẫn bật Pages."

------------------------------------------------------------------------

## 11. Danh sách nghiệm thu cuối cùng

### Nội dung và UX

-   [ ] Home, About, Projects, Posts, Lab và Contact đều có thể truy
    cập.
-   [ ] Hero nói rõ vai trò và có CTA.
-   [ ] Có 3--5 dự án được trình bày trung thực.
-   [ ] About có skills, education và timeline phù hợp.
-   [ ] Blog hiển thị bài Markdown và metadata.
-   [ ] Có ít nhất 2 bài Markdown mẫu có nội dung thực chất.
-   [ ] Liên hệ và CV chỉ hiện khi đã cung cấp tài nguyên thật.

### Kỹ thuật

-   [ ] Cài dependency và chạy local theo README được.
-   [ ] `npm run build` thành công.
-   [ ] Không có lỗi console nghiêm trọng.
-   [ ] Không chứa secret hoặc token trong source.
-   [ ] Vite base path khớp với URL Pages.
-   [ ] Routing không bị lỗi khi mở/refresh trang con theo phương án đã
    chọn.
-   [ ] Workflow GitHub Actions chạy thành công.

### Thiết kế và chất lượng

-   [ ] Responsive trên mobile, tablet, desktop.
-   [ ] Dark/Light mode hoạt động.
-   [ ] Hiệu ứng không làm chậm hoặc cản trở nội dung.
-   [ ] Keyboard navigation, focus và reduced motion được kiểm tra.
-   [ ] Metadata SEO cơ bản đã có.
-   [ ] Ảnh đã tối ưu.
-   [ ] README hướng dẫn thêm bài Markdown và deploy.

------------------------------------------------------------------------

## 12. Thứ tự ưu tiên nếu thời gian có hạn

**MVP --- phải có trước:**

1.  Home + About + Projects + Posts + Contact.
2.  Responsive và dark mode.
3.  Markdown blog hoạt động.
4.  GitHub Pages deploy ổn định.
5.  SEO cơ bản, README và nội dung dự án thật.

**Nâng cấp sau:**

1.  Lab/terminal tương tác.
2.  Music player và visualizer.
3.  Bộ lọc bài viết nâng cao.
4.  Tìm kiếm bài viết.
5.  Đa ngôn ngữ Việt/Anh.
6.  Analytics có cân nhắc quyền riêng tư.
7.  Custom domain.

**Nguyên tắc cuối cùng:** Hãy hoàn thành một portfolio tải nhanh, dễ
đọc, có dự án và bài viết thật trước. Sau đó mới thêm hiệu ứng gaming/âm
nhạc. Đây là cách cân bằng tốt nhất giữa cá tính, chất lượng kỹ thuật và
ấn tượng chuyên nghiệp.
