export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  // Clean markdown syntax for word count
  const cleanText = text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#*`_~>[\]]/g, '')
    .trim();
  
  const words = cleanText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} phút đọc`;
}
