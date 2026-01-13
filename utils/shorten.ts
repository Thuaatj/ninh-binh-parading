export function truncateWords(text: string, limit = 25) {
  const words = text.trim().split(/\s+/);

  if (words.length <= limit) return text;

  return words.slice(0, limit).join(" ") + "...";
}
