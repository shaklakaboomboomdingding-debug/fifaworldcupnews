import { Match, NewsArticle } from "./types";

export async function fetchNews(): Promise<NewsArticle[]> {
  try {
    const res = await fetch('/api/news');
    if (!res.ok) throw new Error('Failed to fetch news');
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function fetchMatches(): Promise<Match[]> {
  try {
    const res = await fetch('/api/matches');
    if (!res.ok) throw new Error('Failed to fetch matches');
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
