import { TimelineItem } from '../types';

export const timelineData: TimelineItem[] = [
  {
    id: 'edu-uni',
    year: '2023 - Hiện tại',
    period: '2023 - 2027',
    title: 'Sinh viên Chuyên ngành Công nghệ Thông tin',
    institution: 'Đại học / Khoa Công nghệ Thông tin',
    description: 'Tập trung nghiên cứu Kiến trúc phần mềm, Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng và Công nghệ Web tiên tiến.',
    tags: ['Computer Science', 'Software Engineering', 'Algorithms', 'Web Architecture'],
    type: 'education'
  },
  {
    id: 'cert-web',
    year: '2024',
    period: '2024',
    title: 'Nghiên cứu chuyên sâu Frontend & Full-stack Architecture',
    institution: 'Tự học & Tham gia Dự án Mã nguồn Mở',
    description: 'Xây dựng các ứng dụng thực tế với TypeScript, React 18, Node.js, tìm hiểu về Docker containerization và CI/CD tự động hóa.',
    tags: ['TypeScript', 'React', 'Node.js', 'Docker', 'CI/CD'],
    type: 'achievement'
  },
  {
    id: 'proj-academic',
    year: '2023',
    period: '2023',
    title: 'Phát triển các đồ án cơ sở ngành & Thực hành giải thuật',
    institution: 'Academic Projects',
    description: 'Hoàn thành các bài tập lớn về cơ sở dữ liệu quan hệ (SQL/PostgreSQL), thiết kế hệ thống quản lý và thực hành quy trình làm việc nhóm với Git.',
    tags: ['Database Design', 'Git Workflow', 'Team Collaboration'],
    type: 'experience'
  }
];
