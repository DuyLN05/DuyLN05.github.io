import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'cyber-audio-lab',
    slug: 'cyber-audio-lab',
    title: 'CyberAudio Synthesizer & Visualizer',
    tagline: 'Bộ công cụ tổng hợp và trực quan hóa âm thanh Web Audio API phong cách Cyberpunk',
    description: 'Ứng dụng Web Audio tương tác thời gian thực cho phép người dùng tạo các dải sóng tần số (Sine, Square, Sawtooth), tùy chỉnh reverb, delay và hiển thị visualizer 60fps qua HTML5 Canvas.',
    category: 'Audio / Creative',
    role: 'Sole Developer (Kiến trúc Web Audio + Canvas Visualizer)',
    status: 'Completed',
    featured: true,
    date: '2024',
    stack: ['TypeScript', 'React', 'Web Audio API', 'HTML5 Canvas', 'Tailwind CSS'],
    features: [
      'Bộ dao động âm thanh (Oscillator) đa tần số tùy chỉnh thời gian thực',
      'Canvas Visualizer 60fps mô phỏng quang phổ tần số (FFT Spectrum)',
      'Preset âm thanh phong cách Cyberpunk Synthwave',
      'Tối ưu hóa vòng lặp render bằng requestAnimationFrame không gây giật lag'
    ],
    challenges: 'Xử lý độ trễ âm thanh (Audio latency) trên trình duyệt mobile và tối ưu xung nhịp vẽ FFT trên màn hình Retina.',
    learnings: 'Nắm vững kiến trúc nút AudioNode trong Web Audio API và cơ chế GC (Garbage Collection) khi chạy Canvas animation liên tục.',
    repoUrl: 'https://github.com/DuyLN05/cyber-audio-lab',
    coverImage: '/images/projects/cyber-audio.svg'
  },
  {
    id: 'dev-nexus-portfolio',
    slug: 'dev-nexus-portfolio',
    title: 'Developer Cyber Portfolio & Markdown Engine',
    tagline: 'Hệ thống portfolio tĩnh hiệu năng cao với engine đọc bài viết Markdown',
    description: 'Trang web cá nhân mang phong cách Cyberpunk Gaming tích hợp trình đọc Markdown tĩnh tại build-time, chế độ Dark/Light tương phản cao và triển khai tự động qua GitHub Actions.',
    category: 'Frontend',
    role: 'Lead Architect & Designer',
    status: 'Completed',
    featured: true,
    date: '2024',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Marked', 'Highlight.js'],
    features: [
      'Parse và compile Markdown với frontmatter metadata mà không cần backend',
      'Giao diện Cyberpunk HUD với Dark/Light mode chuẩn accessibility',
      'Tích hợp terminal giả lập tương tác an toàn',
      'Tự động triển khai thông qua GitHub Actions CI/CD'
    ],
    challenges: 'Giải quyết bài toán routing 404 khi người dùng refresh trên GitHub Pages static hosting và giữ bundle size dưới 150KB gzip.',
    learnings: 'Hiểu sâu về cơ chế Static Site Generation, cấu hình Vite base path và chuẩn hóa font chữ monospace cho code block.',
    repoUrl: 'https://github.com/DuyLN05/DuyLN05.github.io',
    demoUrl: 'https://duyln05.github.io/',
    coverImage: '/images/projects/portfolio-cover.svg'
  },
  {
    id: 'cyber-kanban-flow',
    slug: 'cyber-kanban-flow',
    title: 'CyberTask - Agile Kanban Hub',
    tagline: 'Ứng dụng quản lý công việc và tiến độ dự án theo phương pháp Agile Kanban',
    description: 'Nền tảng quản lý sprint và nhiệm vụ dạng thẻ kéo thả (Drag and drop), hỗ trợ lưu trữ cục bộ, lọc thẻ thông minh theo tag và ưu tiên trạng thái hoàn thành.',
    category: 'Full-stack',
    role: 'Full-stack Developer',
    status: 'In Progress',
    featured: true,
    date: '2024',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Kéo thả mượt mà với HTML5 Drag and Drop API',
      'Phân loại thẻ theo Sprint, mức độ ưu tiên và deadline cảnh báo màu HUD',
      'REST API đồng bộ dữ liệu với MongoDB và fallback offline localStorage'
    ],
    challenges: 'Quản lý trạng thái re-order vị trí của các card khi kéo giữa nhiều cột khác nhau.',
    learnings: 'Sử dụng Optimistic Updates để tăng tốc độ phản hồi UI và cấu trúc database schema lồng nhau hợp lý.',
    repoUrl: 'https://github.com/DuyLN05/cyber-kanban-flow',
    coverImage: '/images/projects/kanban-cover.svg'
  },
  {
    id: 'api-monitor-daemon',
    slug: 'api-monitor-daemon',
    title: 'Endpoint Pulse - Microservice Health Monitor',
    tagline: 'CLI & Web dashboard giám sát sức khỏe dịch vụ và thời gian phản hồi HTTP',
    description: 'Công cụ kiểm tra định kỳ tình trạng hoạt động (uptime), mã trạng thái HTTP và độ trễ (ping) của các API endpoints với thông báo thời gian thực.',
    category: 'System & Tools',
    role: 'Backend & CLI Developer',
    status: 'Completed',
    featured: false,
    date: '2023',
    stack: ['Node.js', 'TypeScript', 'Express', 'WebSocket', 'Tailwind CSS'],
    features: [
      'Kiểm tra định kỳ cron-based các REST endpoints',
      'WebSocket stream cập nhật độ trễ (latency graph) theo thời gian thực',
      'Ghi nhận log lỗi và cảnh báo khi tỷ lệ uptime giảm dưới ngưỡng an toàn'
    ],
    challenges: 'Đảm bảo tiến trình ping ngầm không block Event Loop khi số lượng URL cần kiểm tra tăng cao.',
    learnings: 'Ứng dụng worker threads và kiến trúc non-blocking I/O hiệu quả trong Node.js.',
    repoUrl: 'https://github.com/DuyLN05/endpoint-pulse',
    coverImage: '/images/projects/monitor-cover.svg'
  }
];
